//	---
//	---
//	https://rm.mfc.ru/issues/54724 - Разработка api на стороне модуля взаимодействия с ГИС ГМП для создания и квитирования платежа
//	---
//	---


//	Статус начисления (api) для ответа о информации
const api_charge_status = {
	UnknownError: "0",
	ChargeSend: "1",			//	Начисление создано в АРМ ГИС ГМП, отправлено в ГИС ГМП ФК
	ChargeCreate: "2",		//	Начисление создано в ГИС ГМП ФК
	KvitirovatSend: "3",		//	Отправлен запрос квитирования в ГИС ГМП ФК
	KvitirovatConfirmed: "4",	//	Начисление квитировано в ГИС ГМП ФК
	ErrorNotFound: "90",		//	Начисление не найдено в созданных через api
	ErrorCharge: "91"			//	Ошибка в созданном начислении (ошибка СМЭВ или ГИС ГМП ФК)
};


function create_charge_api(params) {
	//	Начальная проверка на соответствие схеме
	if (!params.data) return BadRequestApi("Несоответствие схемы данных: data is null");
	if (!params.data.payee) return BadRequestApi("Несоответствие схемы данных: data.payee is null");
	if (!params.data.payer) return BadRequestApi("Несоответствие схемы данных: data.payer is null");
	if (!params.data.budgetIndex) return BadRequestApi("Несоответствие схемы данных: data.budgetIndex is null");
	if (!params.data.charge) return BadRequestApi("Несоответствие схемы данных: data.charge is null");


	let valid_obj = validate_organization(params);
	if (!valid_obj.success) {
		return valid_obj;
	}

	valid_obj = validate_charge_data(params);
	if (!valid_obj.success) {
		return valid_obj;
	}


	//  Начальная инициализация объекта
	let func_params = {
		values: {
			is_api: true,
			chargedata_filltype: 2,  // Ставим ручной ввод данных начисления

			bill_date : params.data.charge.bill_date,

			payer_lastname: params.data.payer.lastname,
			payer_name: params.data.payer.name,
			payer_middlename: params.data.payer.middlename,
			orgname: params.data.payer.orgname,
			address_type: _address_type.Manual,
			payer_address_manual: params.data.payer.address,
			payer_filling_type: 2, // Ручной ввод плательщика

			chargedata_totalamount: params.data.charge.total_amount,
			chargedata_purpose: params.data.charge.purpose,
			chargedata_kbk: params.data.charge.kbk,
			chargedata_oktmo: params.data.charge.oktmo,
			

			acknowledgment_status: charge_status["Черновик"],
			valid_until: params.data.charge.valid_until,
			send: true	// Ставим что отправить
		}
	}


	// * * * * * * * * *
	// Организация
	// * * * * * * * * *
	
	//  Проверяем наличие значения 'Роль ГИС ГМП' в наших справочниках
	const sender_role_db = db.findbyparams("sender_role", { reccode: params.data.payee.sender_role });
	if (!sender_role_db) {
		return BadRequestApi("Не найдено в справочнике значение поля 'data.payee.sender_role' (Роль ГИС ГМП): '" + params.sender_role + "'");
	}

	//	Если передали originator_id, значит идет через агрегатора взаимодействие. Ищем агрегатора или создаем, и на выходе должен быть его recid
	if (params.data.payee.originator_id) {
		let agr_db = db.findbyparams("organization", { sender_identifier: params.data.payee.sender_identifier, sender_role: sender_role_db[0].recid, generate_by_api: true });
		if (!agr_db) {
			agr_db = db.insert("organization",
				{
					sender_identifier: params.data.payee.sender_identifier,
					sender_role: sender_role_db[0].recid,
					generate_by_api: true
				}
			);
			agr_db=agr_db.recid
		}
		else {
			agr_db = agr_db[0].recid;
		}
	}

	let find_params = {
		sender_identifier: params.data.payee.originator_id ? params.data.payee.originator_id : params.data.payee.sender_identifier,
		sender_role: sender_role_db[0].recid,
		name: params.data.payee.name,
		inn: params.data.payee.inn,
		kpp: params.data.payee.kpp,
		ogrn: params.data.payee.ogrn,
		account_number: params.data.payee.account_number,
		bank_name: params.data.payee.bank_name,
		bik: params.data.payee.bik,
		correspondent_bank_account: params.data.payee.correspondent_bank_account,
		generate_by_api: true
	};
	if (params.data.payee.originator_id) {
		find_params.interaction_through_the_aggregator = true;
		find_params.aggregator = agr_db;
	}


	//  Ищем есть ли у нас в справочнике организация, которую передали
	const payee_db = db.findbyparams("organization", find_params);

	//  Если нашли, то пишем это в values
	if (payee_db) {
		func_params.values.payee = payee_db[0].recid;
	}
	//  Иначе создаем новую организацию с пометкой что это сгенерированная
	else {
		const org_db = db.insert("organization",
			{
				sender_identifier: params.data.payee.originator_id ? params.data.payee.originator_id : params.data.payee.sender_identifier,
				sender_role: sender_role_db[0].recid,
				originator_id: params.data.payee.originator_id,
				name: params.data.payee.name,
				inn: params.data.payee.inn,
				kpp: params.data.payee.kpp,
				ogrn: params.data.payee.ogrn,
				account_number: params.data.payee.account_number,
				bank_name: params.data.payee.bank_name,
				bik: params.data.payee.bik,
				correspondent_bank_account: params.data.payee.correspondent_bank_account,
				generate_by_api: true,
				interaction_through_the_aggregator: params.data.payee.originator_id ? true : null,
				aggregator: params.data.payee.originator_id ? agr_db : null
			}
		);

		func_params.values.payee = org_db.recid
	}

	//	Вместе с организацией генерим supplier_bill_id
	func_params.values.supplier_bill_id = generateSupplierBillId(params.data.payee.sender_identifier);
	// * * * * * * * * *
	// * * * * * * * * *

	// * * * * * * * * *
	// Плательщик
	// * * * * * * * * *

	//	Если Тип плательщика заполнен
	if (params.data.payer.payer_type) {
		//	Проверяем что значение есть в нашем "справочнике"
		let found = false;
		const payer_types = get_payer_types();
		for (var i = 0; i < payer_types.length; i++) {
			if (payer_types[i].id == params.data.payer.payer_type) {
				found = true;
				break;
			}
		}
		if (!found) {
			return BadRequestApi("Не найдено в перечислении значение поля 'data.payer.payer_type' (Тип плательщика): '" + params.data.payer.payer_type + "'");
		}
		func_params.values.payer_type = params.data.payer.payer_type;
	}
	//	--

	// Проверка заполнения payerIdentifier
	if (!params.data.payer.payerIdentifier || params.data.payer.payerIdentifier == "") {
		return BadRequestApi("Поле 'data.payer.payerIdentifier' должно быть заполнено");
	}
	func_params.values.payeridentifier_api = params.data.payer.payerIdentifier;
	// * * * * * * * * *
	// * * * * * * * * *


	if (!params.data.budgetIndex.status) { return BadRequestApi("Не заполнено поле 'data.budgetIndex.status' (Статус плательщика)"); }
	func_params.values.chargedata_status = params.data.budgetIndex.status;

	if (!params.data.budgetIndex.reason) { return BadRequestApi("Не заполнено поле 'data.budgetIndex.reason' (Основание платежа)"); }
	func_params.values.chargedata_paytreason = params.data.budgetIndex.reason;


	//	Объект не обязателен
	if (params.data.payment) {
		if (typeof (params.data.payment.acknowledgment) != "boolean") {
			return BadRequestApi("Ошибочный тип поля 'data.payment.acknowledgment'. Ожидалось bool, а пришло " + typeof (params.data.payment.acknowledgment));
		}

		if (params.data.payment.acknowledgment && !params.data.payment.paymentId) {
			return BadRequestApi("Поле 'data.payment.paymentId' должно быть заполнено");
		}

		if (params.data.payment.paymentId && params.data.payment.paymentId.length != 32) {
			return BadRequestApi("Поле 'data.payment.paymentId': длинна УИП должна быть 32 символа");
		}
	}


	func_params.values.chargedata_taxdocnumber =
		params.data.budgetIndex.taxDocNumber && params.data.budgetIndex.taxDocNumber != ""
			? params.data.budgetIndex.taxDocNumber
			: "0";
	func_params.values.chargedata_taxperiod =
		params.data.budgetIndex.taxPeriod && params.data.budgetIndex.taxPeriod != ""
			? params.data.budgetIndex.taxPeriod
			: "0";
	func_params.values.chargedata_taxdocdate = 
		params.data.budgetIndex.taxDocDate && params.data.budgetIndex.taxDocDate != ""
			? params.data.budgetIndex.taxDocDate
			: null;


	func_params.pressButton = {};
	func_params.pressButton.name = _gridToolbarNameSystemButtons.Add;

	//	Добавляем запрос в историю запросов по api, которые прошли первичную валидацию
	const history = db.insert("api_request",
		{
			method: "create_charge_api",
			data: JSON.stringify(params),
			supplier_bill_id: func_params.values.supplier_bill_id,
			is_charge_send: false,
			is_charge_create: false,
			is_error: false,
			is_kvitirovat_send: false,
			is_kvitirovat_confirmed: false,
			need_to_kvitirovat: params.data.payment
				? (params.data.payment.acknowledgment != null ? params.data.payment.acknowledgment : false)
				: false,
			yip: params.data.payment ? params.data.payment.paymentId : null
		}
	);

	/* Вызов функции создания начисления */
	const call_result = charge_form_submit(func_params);

	//	Пишем в лог запросов об успешной отправке или нет
	db.update("api_request",
		{
			recid: history.recid,
			recupdated: new Date(),
			is_charge_send: call_result.success,	//	Отправили ли начисление в ГИС ГМП ФК
			is_error: !call_result.success,
			error_description: !call_result.success ? call_result.message : null
		}
	);


	return {
		success: call_result.success,
		message: call_result.message,
		supplier_bill_id: call_result.success ? func_params.values.supplier_bill_id : null
	};
}


function kvitirovat_api(charge_id, yip, api_recid) {

	var params = {
		options: "set_yip",
		yip: yip,
		recid: charge_id
	}
	var call_result = charge_kvitirovat_2_submit(params);

	db.update("api_request",
		{
			recid: api_recid,
			recupdated: new Date(),
			is_kvitirovat_send: call_result.success,	//	Отправили ли квитирование в ГИС ГМП ФК
			is_error: !call_result.success,
			error_description: !call_result.success ? call_result.message : null
		}
	);

	return call_result;
}


function shadow_task_api_send_kvitirovat() {
	var error_string = "";
	var error_count = 0;

	var records = db.findbyparams("api_request",
		{
			is_charge_send: true,
			is_charge_create: true,	//	Начисление отправлено и принято в ГИС ГМП ФК
			is_error: false,	// Начисление не в ошибке
			is_kvitirovat_send: false,	//	Запрос на квитирование не направлялся
			need_to_kvitirovat: true
		}
	);

	if (!records) {
		return {
			success: true,
			message: null,
			data: "Не найдено начислений (API) для квитирования"
		}
	}

	records.forEach(function (record, i, arr) {
		try {
			var charge = db.findbyparams("charge", { supplier_bill_id: record.supplier_bill_id });

			//	Если не нашли начисление
			if (!charge) {
				//	Записываем в api лог
				db.insert("api_log",
					{
						recname: "shadow_task_api_send_kvitirovat",
						reccode: record.recid,
						recdescription: "Не найдено исходное начисление: " + record.supplier_bill_id,
					}
				);
				//	Ставим для записи ошибку, поскольку никогда не найдем такое начисление
				db.update("api_request",
					{
						recid: record.recid,
						recupdated: new Date(),
						is_error: true,
						error_description: "Не найдено исходное начисление"
					}
				)
				return;
			}

			var call_result = kvitirovat_api(charge[0].recid, record.yip, record.recid);
			if (!call_result.success)
				throw { message: call_result.message };

		} catch (ex) {
			error_string += ex.message;
			error_count++;
		}
	}
	);

	return {
		success: records.length != error_count,
		message: null,
		data: "Операция выполнена. Обработано записей "
			+ records.length.toString()
			+ ", с ошибкой " + error_count.toString()
	}
}


function shadow_task_api() {
	var url = String().concat(host, "/odata/api_request?$filter=((recstate eq 1) and (is_error eq false) and (((is_charge_send eq true) and (is_charge_create eq false)) or ((is_kvitirovat_send eq true) and (is_kvitirovat_confirmed eq false))))");
	var result = sendRequest("GET", null, url, null);

	if (result.value.length == 0) {
		return {
			success: true,
			message: null,
			data: "Не найдено начислений (API) для обновления статусов"
		}
	}

	result.value.forEach(function (record, i, arr) {
		var charge_db = db.findbyparams("charge", { supplier_bill_id: record.supplier_bill_id });
		if (!charge_db) {
			//	Записываем в api лог
			db.insert("api_log",
				{
					recname: "shadow_task_api",
					reccode: record.recid,
					recdescription: "Не найдено исходное начисление: " + record.supplier_bill_id,
				}
			);
			//	Ставим для записи ошибку, поскольку никогда не найдем такое начисление
			db.update("api_request",
				{
					recid: record.recid,
					recupdated: new Date(),
					is_error: true,
					error_description: "Не найдено исходное начисление"
				}
			)
			return;
		}

		switch (charge_db[0].acknowledgment_status) {
			case Number(charge_status["Не сквитировано"]):
				db.update("api_request", { recid: record.recid, recupdated: new Date(), is_charge_create: true });
				break;

			case Number(charge_status["Принудительно сквитировано"]):
				db.update("api_request", { recid: record.recid, recupdated: new Date(), is_kvitirovat_confirmed: true });
				break;

			case Number(charge_status["Ошибка"]):
				db.update("api_request", { recid: record.recid, recupdated: new Date(), is_error: true, errorcode: charge_db[0].errorcode, error_description: charge_db[0].errordescription });
				break;
		}
	}
	);



	return {
		success: true,
		message: null,
		data: "Все статусы обновлены"
	};
}


function charge_info_api(params){
	var response_obj = { charge: [] };

	if(!Array.isArray(params.charge)){
		return BadRequestApi("Несоответствие схемы: charge не является массивом");
	}

	//	Добавляем запрос в историю запросов по api
	db.insert("api_request",
		{
			recdescription: "Запрос информации по начислениям",
			method: "charge_info_api",
			data: JSON.stringify(params),
			supplier_bill_id: null,
			is_charge_send: false,
			is_charge_create: false,
			is_error: false,
			is_kvitirovat_send: false,
			is_kvitirovat_confirmed: false,
			need_to_kvitirovat: false,
			yip: null
		}
	);


	params.charge.forEach(function (record, i, arr) {
		var charge_info = {
			supplier_bill_id: record.supplier_bill_id,
			status: api_charge_status.UnknownError,
			error_code: "",
			error_message: ""
		};

		var charge_api = db.findbyparams("api_request", { supplier_bill_id: record.supplier_bill_id });

		//	Не нашли такой УИН в api
		if(!charge_api){
			charge_info.status=api_charge_status.ErrorNotFound;
			response_obj.charge.push(charge_info);
			return;
		}

		//	Ошибка в начислении
		if (charge_api[0].is_error) {
			charge_info.status = api_charge_status.ErrorCharge;
			charge_info.error_code = charge_api[0].errorcode;
			charge_info.error_message = charge_api[0].error_description;
			response_obj.charge.push(charge_info);
			return;
		}

		//	Смотри создано ли начисление в ГИС ГМП ФК
		if (charge_api[0].is_charge_create == false) {
			charge_info.status = api_charge_status.ChargeSend;
		}
		else {
			charge_info.status = api_charge_status.ChargeCreate;
		}

		//	Смотрим оправляли мы на квитирование или нет
		if (charge_api[0].is_kvitirovat_send == true) {
			//	Подтвержено ли квитирование в ГИС ГМП ФК
			if (charge_api[0].is_kvitirovat_confirmed == false) {
				charge_info.status = api_charge_status.KvitirovatSend;
			}
			else {
				charge_info.status = api_charge_status.KvitirovatConfirmed;
			}
		}

		response_obj.charge.push(charge_info);
	}
	);

	return response_obj;
}

//	Валидация организации
//	P.S.: скопировано с описания таблицы в ПФ
function validate_organization(params) {
	params = params.data.payee;

	if (!params.name) { return BadRequestApi("Не заполнено поле 'data.payee.name' (Наименование организации)"); }
	if (params.name.replace(/^([^\s]+(\s+[^\s]+)*)$/, '') != '') { return BadRequestApi("Некорректное наименование организации: " + params.name); }
	if (params.name.length > 160) { return BadRequestApi("Слишком длинное наименование организации: " + params.name); }

	if(!params.inn){return BadRequestApi("Не заполнено поле 'data.payee.inn' (ИНН)");}
	if (params.inn.replace(/^(([^0^\D]\d|\d[^0^\D])\d{8})$/, '') != '') { return BadRequestApi("Некорректный ИНН " + params.inn); }

	if (!params.kpp){return BadRequestApi("Не заполнено поле 'data.payee.kpp' (КПП)");}
	if (params.kpp.replace(/^(([^0^\D]\d|\d[^0^\D])\d{2}[A-Z0-9]{2}\d{3})$/, '') != '') { return BadRequestApi("Некорректный КПП " + params.kpp); }

	if (!params.ogrn){return BadRequestApi("Не заполнено поле 'data.payee.ogrn' (ОГРН)");}
	if (params.ogrn.replace(/^(\d{13})$/, '') != '') { return BadRequestApi("Некорректный ОГРН " + params.ogrn); }

	if (!params.account_number){return BadRequestApi("Не заполнено поле 'data.payee.account_number' (Номер счета получателя средств (номер казначейского счета))");}
	if (params.account_number.replace(/^(\d{20})$/, '') != '') { return BadRequestApi("Некорректный номер счета получателя средств " + params.account_number); }

	if (!params.bank_name) { return BadRequestApi("Не заполнено поле 'data.payee.bank_name' (Наименование банка)");}
	if (params.bank_name.replace(/^([^\s]+(\s+[^\s]+)*)$/, '') != '') { return BadRequestApi("Некорректное наименование банка: " + params.bank_name); }
	if (params.bank_name.length > 200) { return BadRequestApi("Слишком длинное наименование банка: " + params.bank_name); }
	
	if (!params.bik) { return BadRequestApi("Не заполнено поле 'data.payee.bik' (БИК)") }
	if (params.bik.replace(/^(\d{9})$/, '') != '') { return BadRequestApi("Некорректный БИК " + params.bik); }

	if (!params.correspondent_bank_account){return BadRequestApi("Не заполнено поле 'data.payee.correspondent_bank_account' (Номер единого казначейского счета или корреспондентского счета кредитной организации)");}
	if (params.correspondent_bank_account.replace(/^(\d{20})$/, '') != '') { return BadRequestApi("Некорректный номер единого казначейского счета или корреспондентского счета кредитной организации " + params.correspondent_bank_account); }

	if (!params.sender_identifier){return BadRequestApi("Не заполнено поле 'data.payee.sender_identifier' (УРН)");}
	if (params.sender_identifier.replace(/^([0-9a-fA-F]{6})$/, '') != '') { return BadRequestApi("Некорректный УРН " + params.sender_identifier); }

	if(!params.sender_role){return BadRequestApi("Не заполнено поле 'data.payee.sender_role' (Роль ГИС ГМП)");}
	

	return {
		success: true
	};
}


function validate_charge_data(params) {
	var budgetIndex = params.data.budgetIndex;
	var charge = params.data.charge;

	if (budgetIndex.taxPeriod && budgetIndex.taxPeriod.replace(/[МС,КВ,ПЛ,ГД]{2}\.\d{2}\.\d{4}|\d{8}|\d{2}\.\d{2}\.\d{4}|0/, '') != '') {
		return BadRequestApi("Неверный формат налогового периода. Значение «0» или строка длиной 10 или 8 символов. "
			+ "Если длина значения в поле 10 символов, то: · символы 1-й и 2-й могут принимать значение: МС, КВ, ПЛ, ГД; · символы 4-й и 5-й могут принимать значение: для месячных платежей - номер месяца текущего отчетного года, для квартальных платежей - "
			+ "номер квартала, для полугодовых - номер полугодия; · символы с 7-го по 10-й могут принимать значение: год, за который производится уплата налога; · символы 3-й и 6-й используются в качестве разделительных знаков, в них проставляется точка (\".\"). "
			+ "Если длина поля 8 символов, то все они должны быть цифрами. Допускается указывать дату в формате \"день.месяц.год\".");
	}
	if (budgetIndex.taxDocNumber && budgetIndex.taxDocNumber.length > 15) { return BadRequestApi("Номер документа должен быть до 15 символов"); }



	if (!charge.bill_date) { return BadRequestApi("Не заполнено поле 'data.charge.bill_date' (Дата начисления)"); }

	if (!charge.total_amount) { return BadRequestApi("Не заполнено поле 'data.charge.total_amount' (Сумма начисления (в рублях))"); }

	if (!charge.purpose) { return BadRequestApi("Не заполнено поле 'data.charge.purpose' (Назначение платежа)"); }

	if (!charge.kbk) { return BadRequestApi("Не заполнено поле 'data.charge.kbk' (КБК)"); }
	if (charge.kbk.replace(/([0-9a-zA-Zа-яА-Я]{20})|0/, '') != '') {
		return BadRequestApi("Неверный формат КБК. В случае отсутствия следует указывать значение «0». Все символы одновременно не должны принимать значение ноль");
	}

	if (!charge.oktmo) { return BadRequestApi("Не заполнено поле 'data.charge.oktmo' (ОКТМО)"); }
	if (charge.oktmo.replace(/([1-9]{3}[0-9]{5})|(\d{11})/, '') != '') {
		return BadRequestApi("Неверный ОКТМО. 8 или 11 цифр, если 8 цифр то первые 3 не могут быть нулями.");
	}


	return {
		success: true
	};
}


function BadRequestApi(message, data) {
	var result = {
		success: false,
		message: message
	}

	if (data) {
		result.request = data;
	}

	return result;
}

function FailValidate(message) {
	return {
		success: false,
		message: message
	}
}
