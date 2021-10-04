
const adapters = {
	"kvitirovanie": "VS01598v003-RKZN02",
	"paymentinfo": "VS01918v003-RKZN18",
	"paymentExport": "VS01918v004-RKZN18",
	"chargeinfo": "VS01922v004-RKZN18",
	"income_export": "VS02148v003-RKZN18"
}

const converters =
{
	"import": "VS01608v003-RKZN02",
	"annul": "VS01608v003-RKZN02",
	"deannul": "VS01608v003-RKZN02",
	"clarify": "VS01608v003-RKZN02",
	"chargeinfo": "VS01922v003-RKZN18",
	"refund": "VS01604v002-RKZN02"
};

const payment_conditions = {
	"Новое": "1",
	"Отправлено": "2",
	"ОтветПолучен": "3",
	"Ошибка": "4"
};

const _gridToolbarNameSystemButtons = {
	Add: "sysAdd",
	Edit: "sysEdit",
	Delete: "sysDelete",
	Export: "sysExport",
	Import: "sysImport"
}

const _editToolbarNameSystemButtons = {
	Save: "sysSave",
	Delete: "sysDelete",
	Cancel: "sysCancel"
}

const _contextMenuSystemButtons = {
	Edit: "onEdit",
	Delete: "onDelete"
}

const _contextMenuSystemActions = {
	PressEnter: "pressEnter",
	PressDelete: "pressDelete",
	DoubleClick: "dblClick"
}

const _emptyGUID = "00000000-0000-0000-0000-000000000000";

const _charge_universal_form_mode = {
	AddOrEdit: "add_edit",
	Clarify: "clarify",
	Info: "info"
}

const _income_status_enum = {
	"Черновик": 1,
	"Запрос отправлен": 2,
	"Ответ получен": 3,
	"Ошибка": 4
}

const _income_request_condition_enum = {
	ChargesConditions: 1,
	PayersConditions: 2,
	PaymentsConditions: 3,
	TimeConditions: 4,
	IncomesConditions: 5
}

const _income_form_mode = {
	AddOrEdit: "add_edit",
	Info: "info"
}

const _request_type = {
	NewCharge: "Создание начисления",
	AnnulCharge: "Аннулирование начисления",
	DeannulCharge: "Деаннулирование начисления",
	ClarifyCharge: "Уточнение начисления",
	ClarifyChargeAfterError: "Уточнение начисления (после ошибки)",
	StatusUpdateCharge: "Актуализация статуса по начислению",
	StatusUpdateChargeShadowTask: "Актуализация статуса по начислению ФЗ",
	StatusUpdateChargeContextButton: "Актуализация статуса по начислению (ручной запрос)",
	MassiveImport: "Массовый импорт",
	ExportIncomeRequest: "Запрос на выборку зачислений из ГИС ГМП ФК",
	ExportIncomeNextRequest: "Запрос на выборку зачислений из ГИС ГМП ФК (следующая страница)"
}

const actualize_status = {
	"Актуализация статуса": 1,
	"Ответ получен": 2
}


const _address_type = {
	Manual: '1',
	FIAS: '2'
}

const charge_import_status = {
	"Готово к отправке": 0,
	"Отправлено": 1,
	"Ошибка": 2
}

const charge_status = {
	"Сквитировано": "1",
	"Предварительно сквитировано": "2",
	"Не сквитировано": "3",
	"Сквитировано с отсутствующим платежом": "4",
	"Принудительно сквитировано": "5",
	"Черновик": "6",
	"Уточняемое": "7",
	"Аннулировано": "8",
	"Ошибка": "9",
	"Ошибка создания": "91",
	"Ошибка уточнения": "92",
	"Ошибка анулирования": "93",
	"Ошибка деанулирования": "94",
	"Ошибка квитирования": "95",
	"Отправлено": "10",
	"Создание начисления": "11",
	"Уточнение начисления": "12",
	"Аннулирование начисления": "13",
	"Деаннулирование начисления": "14",
	"Квитирование": "15",
	"Отмена квитирования": "16"
};

const refund_status = {
	"Черновик": "1",
	"Импортировано": "2",
	"Аннулировано": "3",
	"Ошибка": "4",
	"Создание возврата": "5",
	"Аннулирование возврата": "6",
	"Деаннулирование возврата": "7"
};

const importedTypeData = {
	importedCharge: "ImportedCharge",
	importedChange: "ImportedChange"
};

const meaning = {
	"clarify": "2",
	"annul": "3",
	"deannul": "4"
};

//режим открытия формы для начисления
const charge_mode = {
	"add": 1,
	"edit": 2
};

const request_types = [
	{
		id: 1,
		name: "Все неоплаченные начисления"
	},
	{
		id: 2,
		name: "Начисления, не полностью сквитированные с платежами"
	},
	{
		id: 3,
		name: "Начисления и статусы их квитирования"
	},
	{
		id: 4,
		name: "Неоплаченные предварительные начисления"
	},
	{
		id: 5,
		name: "Предварительные начисления, не полностью сквитированные с платежами"
	},
	{
		id: 6,
		name: "Предварительные начисления и статусы их квитирования"
	},
	{
		id: 7,
		name: "Неоплаченные предварительные начисление, сформированные ГИС ГМП"
	},
	{
		id: 8,
		name: "Предварительные начисления, сформированные ГИС ГМП, не полностью сквитированные с платежами"
	},
	{
		id: 9,
		name: "Предварительные начисления, сформированные ГИС ГМП, и статусы их квитирования"
	}
];

const charge_export_condition = [
	{
		id: 1,
		name: "За период"
	},
	{
		id: 2,
		name: "По плательщику"
	},
	{
		id: 3,
		name: "По уникальному идентификатору начисления (УИН)"
	}
];


function badResponse(message, data) {
	return {
		success: false,
		message: message,
		data: data
	};
}

function badRequest(message, data){
	return {
		success: false,
		message: message,
		data: data
	};
}


function generateSupplierBillId(senderIdentifier) {

	var decIdentifier = parseInt(senderIdentifier, 16) + '';
	while (decIdentifier.length < 8)
		decIdentifier = '0' + decIdentifier;
	var id = '';
	for (var i = 0; i < 4; i++) {
		id += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	}
	id = (parseInt(id, 16) + '').substr(0, 16);
	var supplierBillid = decIdentifier + id;
	var summ = 0, koef = 0;
	for (var i = 0; i < supplierBillid.length; i++) {
		koef = (koef == 10 ? 1 : koef + 1);
		summ += koef * supplierBillid[i];
	}
	koef = summ % 11;
	if (koef == 10) {
		koef = 2;
		summ = 0;
		for (var i = 0; i < supplierBillid.length; i++) {
			koef = (koef == 10 ? 1 : koef + 1);
			summ += koef * supplierBillid[i];
		}
		koef = summ % 11;
		if (koef == 10)
			koef = 0;
	}
	return supplierBillid + koef;
}

function getsenderidentifier(login) {
	//по логину тянем из users - sender_identifier

	var usersRecord = db.findbyparams("users", { login: login });

	var organizationRecord = db.findbyparams("organization", { recid: usersRecord[0].organizationid });

	return organizationRecord[0].sender_identifier;
}

function getorganizationid(login) {

	var usersRecord = db.findbyparams("users", { login: login });
	return usersRecord[0].organizationid;
}

function getdoccodebytype(payer_doctype) {
	if (payer_doctype == null || payer_doctype == "") return "";
	var doc_record = db.findbyrecid("doc_type", payer_doctype);
	return doc_record.reccode;
}

function get_payeridentifier(payer_type, payer_doctype, inn, kpp, kio, doc_ser_num, inn_enable, countryreg, taxpayerCode) {

	// https://rm.mfc.ru/issues/55393
	if (inn_enable == true) {
		const oksm = db.findbyrecid("oksm", countryreg);
		// 1 — 3 разряды - значение "300"
		let res = '300';
		// 4 — 17 разряды - значение поля "Код налогоплательщика", если значение содержит менее 14 символов, оно дополняется слева нулями до 14 символов.
		const tmp = ('00000000000000' + taxpayerCode).substring(taxpayerCode.length);
		res += tmp;
		// 18 — 19 разряды - "Буквенный код", соответствующий выбранному значению в поле "Страна регистрации", справочника ОКСМ(#55374)
		res += oksm.recname;
		// 20 — 22 разряды - "Код", соответствующий выбранному значению в поле "Страна регистрации", справочника ОКСМ(#55374)(#55374)
		res += oksm.reccode;
		return res;
	}

	payer_type = String(payer_type);

	//если payer_doctype длинее 2 то считаем что это гуид и ищем в бд код, если нет то считаем что уже пришел код и дополняем до 2 символов
	var payer_doctypecode;
	if (payer_doctype != null && payer_doctype.length > 2) {
		payer_doctypecode = getdoccodebytype(payer_doctype);
	} else if (payer_doctype != null) {
		payer_doctypecode = payer_doctype.length == 1 ? "0" + payer_doctype : payer_doctype;
	}

	var a = "";
	var b = "";
	var c = "";

	a = payer_type;
	//return a + b + c;
	//b
	if (payer_type === "2" || payer_type === "3" || payer_type === "4") {
		b = "00";
	}
	if (payer_type === "1") {
		b = payer_doctypecode;
	}

	//c
	if (payer_type === "2") {
		c = inn + kpp;
	}
	if (payer_type === "3" && inn !== "") {
		c = inn + kpp;
	}
	if (payer_type === "3" && kio !== "") {
		c = "00000" + kio + kpp;
	}
	if (payer_type === "4") {
		c = "0000000" + inn;
	}
	if (payer_type === "1") {
		var str = "0000000000000000000" + doc_ser_num;
		c = str.substring(str.length - 19);
	}

	var result = a + b + c;
	return result;
}

function delete_timezone(date) {
	if (date != null && date != "") {
		return date.replace(/\+[0-9][0-9]:[0-9][0-9]/, "Z");
	}
	else {
		return null;
	}
}

function get_names_payer() {
	var records_payer = db.findbyparams("payer", { is_dic: true });
	var records_result = {};
	records_result.value = [];
	if (records_payer && records_payer.length != 0) {
		for (var i = 0; i < records_payer.length; i++) {
			records_result.value.push({});
			records_result.value[i].recid = records_payer[i].recid;
			if (records_payer[i].payer_type != 1 && records_payer[i].payer_type != 4) {
				records_result.value[i].name = records_payer[i].orgname;
			}
			else if (records_payer[i].payer_type == 4) {
				records_result.value[i].name = records_payer[i].lastname + " ";
				records_result.value[i].name += records_payer[i].name + " ";
				records_result.value[i].name += records_payer[i].middlename;
			}
			else {
				records_result.value[i].name = records_payer[i].lastname + " ";
				records_result.value[i].name += records_payer[i].name + " ";
				records_result.value[i].name += records_payer[i].middlename;
				records_result.value[i].name += ", ";

				var record = db.findbyrecid("doc_type", records_payer[i].doc_type);
				var doc_type = record ? record.recname : "";
				records_result.value[i].name += doc_type + " " + records_payer[i].doc_ser_num;
			}
		}
	}

	return records_result;
}

function payer_savenewrecord(params) {
	params = params.values;

	var payer_info = {
		recid: params.recid,
		payer_type: params.payer_type,
		orgname: (params.payer_type != 1 ? params.orgname : ""),
		name: (params.payer_type == 1 || params.payer_type == 4 ? params.name : ""),
		lastname: (params.payer_type == 1 || params.payer_type == 4 ? params.lastname : ""),
		middlename: (params.payer_type == 1 || params.payer_type == 4 ? params.middlename : ""),
		address: params.address,
		doc_type: (params.payer_type == 1 ? db.findbyparams("doc_type", { reccode: params.doc_type })[0].recid : ""),
		doc_ser_num: (params.payer_type == 1 ? params.doc_ser_num : ""),
		inn: (params.payer_type != 1 && params.inn ? params.inn : ""),
		kpp: (params.payer_type != 1 && params.payer_type != 4 ? params.kpp : ""),
		kio: (params.payer_type == 3 && params.kio ? params.kio : ""),
		inn_enable: params.inn_enable,
		taxpayerCode: params.taxpayerCode ? params.taxpayerCode : "",
		countryreg: params.countryReg ? params.countryReg : null
	};

	if (payer_info.payer_type == 1 || payer_info.payer_type == 4) {
		payer_info.fullname = payer_info.lastname + " ";
		payer_info.fullname += payer_info.name + " ";
		payer_info.fullname += payer_info.middlename;
	}
	else {
		payer_info.fullname = payer_info.orgname;
	}

	payer_info.payeridentifier = get_payeridentifier(payer_info.payer_type, payer_info.doc_type, payer_info.inn,
		payer_info.kpp, payer_info.kio, payer_info.doc_ser_num,
		payer_info.inn_enable, payer_info.countryreg, payer_info.taxpayerCode);

	if (!params.recid) {
		try {
			payer_info.is_dic = true;
			var result = db.insert("payer", payer_info);
		}
		catch (ex) {
			return {
				success: false,
				message: ex,
				closeForm: true,
				data: result
			}
		}
	}
	else {
		try {
			payer_info.recupdated = new Date();
			var result = db.update("payer", payer_info);
		}
		catch (ex) {
			return {
				success: false,
				message: ex,
				closeForm: true,
				data: result
			}
		}
	}
	return {
		success: true,
		message: "Запись сохранена",
		closeForm: true,
		data: result
	}
}

function charge_annul(params) {
	var currentUser = check_can_submit();
	if (currentUser.can_submit == false) {
		return Forbidden();
	}

	//формируем xml
	var recid_params = { recordIdList: [params.recid] };
	//причина аннулирования
	recid_params.data = {};
	recid_params.data.reason = params.reason;

	var xml = buildxml_charge_annul(recid_params);
	if (xml.success == false) {
		return badResponse("Ошибка построения xml " + xml.message);
	}

	//отправляем
	var send = sendsmevrequest(xml, "charge", params.recid, _request_type.AnnulCharge);
	if (send.success == false) {
		return badResponse("Ошибка отправки запроса в СМЭВ " + send.message);
	}

	//ставим статус
	var state = set_charge_status(charge_status["Аннулирование начисления"], params.recid); //set_send_state(recid_params);
	if (state.success == false) {
		return badResponse("Ошибка обновления статуса начисления " + state.message);
	}

	return {
		success: true,
		message: "Запрос на аннулирование начисления отправлен",
		closeForm: true,
		showMessage: false,
		data: params
	};
}

function charge_deannul(params) {
	var currentUser = check_can_submit();
	if (currentUser.can_submit == false) {
		return Forbidden();
	}

	//формируем xml
	var recid_params = { recordIdList: [params.recid] };
	//причина деаннулирования
	recid_params.data = {};
	recid_params.data.reason = params.reason;

	var xml = buildxml_charge_deannul(recid_params);
	if (xml.success == false) {
		return badResponse("Ошибка построения xml " + xml.message);
	}

	//отправляем
	var send = sendsmevrequest(xml, "charge", params.recid, _request_type.DeannulCharge);
	if (send.success == false) {
		return badResponse("Ошибка отправки запроса в СМЭВ " + send.message);
	}

	//ставим статус
	var state = set_charge_status(charge_status["Деаннулирование начисления"], params.recid); //set_send_state(recid_params);
	if (state.success == false) {
		return badResponse("Ошибка обновления статуса начисления " + state.message);
	}

	return {
		success: true,
		message: "Запрос на деаннулирование начисления отправлен",
		closeForm: true,
		showMessage: false,
		data: params
	};
}

function charge_data_template_savenewrecord(params) {

	var values = params.values;
	values.recid = params.recid != '' ? params.recid : null;

	var charge_data_info = {
		recid: values.recid,
		name: values.name,
		total_amount: values.total_amount,
		purpose: values.purpose,
		kbk: values.kbk,
		oktmo: values.oktmo,
		origin: values.origin,
		valid_until: values.valid_until,
		// asd
		status: db.findbyparams("payer_status", { reccode: values.status })[0].recid,
		payt_reason: values.payt_reason,

		tax_period: values.tax_period,
		tax_docnumber: values.tax_docnumber,
		tax_doc_date: values.tax_doc_date
	};

	if (!values.recid) {
		try {
			var result = db.insert("charge_data_template", charge_data_info);
		}
		catch (ex) {
			return {
				success: false,
				message: ex,
				closeForm: true,
				data: result
			}
		}
	}
	else {
		try {
			charge_data_info.recupdated = new Date();
			var result = db.update("charge_data_template", charge_data_info);
		}
		catch (ex) {
			return {
				success: false,
				message: ex,
				closeForm: true,
				data: result
			}
		}
	}
	return {
		success: true,
		message: "Запись сохранена",
		closeForm: true,
		data: result
	}
}

function charge_clarify_form_submit(params) {

	if (params.values != null) {
		params = params.values;
	}

	try {

		if (params.send == true && params.btn_reason_send !== true) {
			return {
				showMessage: true,
				message: "Форма причины",
				success: true,
				data: params,
				closeForm: false,
				idNextForm: "2c08a7d6-d54d-4124-8723-33ee2b09b102"
			};
		}

		if (params.btn_reason_send == true) {
			var reason = params.reason;

			params = params.old.charge_universal_form;
			params.btn_reason_send = true;
		}

		if (params.payer_doctype != null && !is_guid(params.payer_doctype)) {
			params.payer_doctype =
				params.payer_doctype != null && params.payer_doctype != ""
					? db.findbyparams("doc_type", { reccode: params.payer_doctype })[0].recid
					: null;
		}

		params.chargedata_paytreason =
			params.chargedata_paytreason != null && params.chargedata_paytreason != ""
				? db.findbyparams("payt_reason", { reccode: params.chargedata_paytreason })[0].recid
				: null;

		params.chargedata_status =
			params.chargedata_status != null && params.chargedata_status != ""
				? db.findbyparams("payer_status", { reccode: params.chargedata_status })[0].recid
				: null;

		// меняем название страны регистрации на её recid
		if (params.countryReg != null && !is_guid(params.countryReg)) {
			params.countryReg =
				params.countryReg != null && params.countryReg != ""
					? db.findbyparams("oksm", { recdescription: params.countryReg })[0].recid
					: null;
		}

		if (params.chargedata_purpose != null) params.chargedata_purpose = params.chargedata_purpose.trim();
		if (params.chargedata_taxdocdate == "") params.chargedata_taxdocdate = null;
		if (params.payer_orgname != null) params.payer_orgname = params.payer_orgname.trim();
		if (params.payer_name != null) params.payer_name = params.payer_name.trim();
		if (params.payer_lastname != null) params.payer_lastname = params.payer_lastname.trim();
		if (params.payer_middlename != null) params.payer_middlename = params.payer_middlename.trim();
		//делаем копейки
		//if (params.chargedata_totalamount != null) params.chargedata_totalamount = params.chargedata_totalamount * 100;
		//if (params.discount_fixed_value != null) params.discount_fixed_value = params.discount_fixed_value * 100;

		//if (params.charge_data_template == "") params.charge_data_template = null; 
		if (params.discount_type == "") params.discount_type = null;
		//сравниваем поля пришедшие с формы с теми значениями которые были загружены чтобы понять какие поля были изменены
		var charge_record = db.findbyrecid("charge", params.recid);
		var payer_record = db.findbyrecid("payer", charge_record.payer);

		//данные по начислению по-любому будут в таблице charge независимо от того по шаблону или нет
		var chargedata_record = db.findbyrecid("charge_data", charge_record.charge_data);

		//if (charge_record.istemplate) {
		//	var chargedata_record = db.findbyrecid("charge_data_template", charge_record.charge_data_template);
		//} else {
		//	var chargedata_record = db.findbyrecid("charge_data", charge_record.charge_data);
		//}


		var charge_info_form = {

			"payee": params.payee,
			"supplier_bill_id": params.supplier_bill_id,
			"istemplate": params.istemplate,
			"acknowledgment_status": charge_status.Уточняемое,
			"bill_date": delete_timezone(params.bill_date),
			"payer_filling_type": params.payer_filling_type,
			"payer": params.payer,
			"charge_data": params.charge_data,
			"charge_data_template": params.charge_data_template,
			"valid_until": delete_timezone(params.valid_until),
			"discount_type": params.discount_type,
			"discount_size_value": params.discount_size_value,
			"discount_size_expiry": delete_timezone(params.discount_size_expiry),
			"discount_fixed_value":
				params.discount_fixed_value != null
					? parseInt(params.discount_fixed_value * 100, 10)
					: null,
			"discount_fixed_expiry": delete_timezone(params.discount_fixed_expiry),
			"multiplier_size_value": params.multiplier_size_value,
			"multiplier_size_expiry": delete_timezone(params.multiplier_size_expiry),
			"purpose": params.chargedata_purpose
		};
		if (params.chargedata_filltype == "2") { charge_info_form.istemplate = false; } else { charge_info_form.istemplate = true; }

		//если на форме указан шаблон то проверяем возможные изменения в шаблонах т.к мог быть выбран другой при редактировании, если ручной ввод то сравниваем поля формы с базой
		if (params.payer_filling_type == "2") {
			var payer_info_form = {
				orgname: params.payer_orgname,
				lastname: params.payer_lastname,
				name: params.payer_name,
				middlename: params.payer_middlename,
				address: params.payer_address,
				payer_type: params.payer_type,
				doc_type: params.payer_doctype,
				doc_ser_num: params.payer_docsernum,
				inn: params.payer_inn,
				kio: params.payer_kio,
				kpp: params.payer_kpp,
				inn_enable: params.inn_enable ? true : false,
				countryReg: params.countryReg ? params.countryReg : null,
				taxpayerCode: params.taxpayerCode ? params.taxpayerCode : null
			};
		}
		else {
			var payer_info_form = db.findbyrecid("payer", params.payer);
		}

		//если на форме указан шаблон то проверяем возможные изменения в шаблонах т.к мог быть выбран другой при редактировании, если ручной ввод то сравниваем поля формы с базой
		if (params.chargedata_filltype == "2") {
			var chargedata_info_form = {
				origin: params.chargedata_origin,
				purpose: params.chargedata_purpose,
				total_amount: params.chargedata_totalamount,
				kbk: params.chargedata_kbk,
				oktmo: params.chargedata_oktmo,
				status: params.chargedata_status,
				payt_reason: params.chargedata_paytreason,
				tax_docnumber: params.chargedata_taxdocnumber,
				tax_period: params.chargedata_taxperiod,
				tax_doc_date: params.chargedata_taxdocdate != null ? params.chargedata_taxdocdate.replace(/\+[0-9][0-9]:[0-9][0-9]/, "Z") : null
			};

			charge_info_form.totalamount = params.chargedata_totalamount;
			charge_info_form.amounttopay = params.chargedata_totalamount;
		} else {
			var chargedata_info = db.findbyrecid("charge_data_template", params.charge_data_template);
			var chargedata_info_form = {
				origin: chargedata_info.origin,
				purpose: chargedata_info.purpose,
				total_amount: chargedata_info.total_amount,
				kbk: chargedata_info.kbk,
				oktmo: chargedata_info.oktmo,
				status: chargedata_info.status,
				payt_reason: chargedata_info.payt_reason,
				tax_docnumber: chargedata_info.tax_docnumber,
				tax_period: chargedata_info.tax_period,
				valid_until: chargedata_info.valid_until,
				tax_doc_date:
					chargedata_info.tax_doc_date != null && chargedata_info.tax_doc_date != ""
						? chargedata_info.tax_doc_date.replace(/\+[0-9][0-9]:[0-9][0-9]/, "Z")
						: null
			};

			charge_info_form.totalamount = chargedata_info.total_amount;
			charge_info_form.amounttopay = chargedata_info.total_amount;
		}

		//сравниваем поля 
		var changes = {};

		//charge info

		//if (charge_info_form.payee != charge_record.payee) changes.payee = charge_info_form.payee;
		//if (charge_info_form.supplier_bill_id != charge_record.supplier_bill_id) changes.supplier_bill_id = charge_info_form.supplier_bill_id;
		//if (charge_info_form.istemplate != charge_record.istemplate) changes.istemplate = charge_info_form.istemplate;
		//if (charge_info_form.acknowledgment_status != charge_record.acknowledgment_status) changes.acknowledgment_status = charge_info_form.acknowledgment_status;
		if (new Date(charge_info_form.bill_date).getTime() != new Date(delete_timezone(charge_record.bill_date)).getTime()) changes.bill_date = charge_info_form.bill_date;//spy
		//if (charge_info_form.payer_filling_type != charge_record.payer_filling_type) changes.payer_filling_type = charge_info_form.payer_filling_type;
		//if (charge_info_form.payer != charge_record.payer) changes.payer = charge_info_form.payer;
		//if (charge_info_form.charge_data != charge_record.charge_data) changes.charge_data = charge_info_form.charge_data;
		//if (charge_info_form.charge_data_template != charge_record.charge_data_template) changes.charge_data_template = charge_info_form.charge_data_template;
		if (new Date(charge_info_form.valid_until).getTime() != new Date(charge_record.valid_until).getTime()) changes.valid_until = charge_info_form.valid_until;//spy

		if (params.discount_type == "1") {
			if (charge_info_form.discount_size_value != charge_record.discount_size_value || new Date(charge_info_form.discount_size_expiry).getTime() != new Date(charge_record.discount_size_expiry).getTime()) {
				changes.discount_size_value = charge_info_form.discount_size_value;//spy
				changes.discount_size_expiry = charge_info_form.discount_size_expiry;//spy
			}
		}
		//if (charge_info_form.discount_size_expiry != charge_record.discount_size_expiry) changes.discount_size_expiry = charge_info_form.discount_size_expiry;//spy

		if (params.discount_type == "2") {
			if (charge_info_form.discount_fixed_value != charge_record.discount_fixed_value || new Date(charge_info_form.discount_fixed_expiry).getTime() != new Date(charge_record.discount_fixed_expiry).getTime()) {
				changes.discount_fixed_value = charge_info_form.discount_fixed_value * 100;//spy //делаем копейки для отправки
				changes.discount_fixed_expiry = charge_info_form.discount_fixed_expiry;//spy
			}
		}
		//if (charge_info_form.discount_fixed_expiry != charge_record.discount_fixed_expiry) changes.discount_fixed_expiry = charge_info_form.discount_fixed_expiry;//spy

		if (params.discount_type == "3") {
			if (charge_info_form.multiplier_size_value != charge_record.multiplier_size_value || new Date(charge_info_form.multiplier_size_expiry).getTime() != new Date(charge_record.multiplier_size_expiry).getTime()) {
				changes.multiplier_size_value = charge_info_form.multiplier_size_value;//spy
				changes.multiplier_size_expiry = charge_info_form.multiplier_size_expiry;//spy
			}
		}
		//if (charge_info_form.multiplier_size_expiry != charge_record.multiplier_size_expiry) changes.multiplier_size_expiry = charge_info_form.multiplier_size_expiry;//spy

		//<<<<<<< HEAD
		//		//payer info
		//		//var i = Object.keys(changes).length;
		var payer_changed = false;
		//=======
		//if (payer_info_form.lastname != payer_record.lastname) changes.payer_lastname = payer_info_form.lastname;
		if (payer_info_form.name != payer_record.name || payer_info_form.lastname != payer_record.lastname || payer_info_form.middlename != payer_record.middlename || payer_info_form.orgname != payer_record.orgname) {

			if (payer_info_form.payer_type == 1 || payer_info_form.payer_type == 4) {
				changes.payer_name = payer_info_form.lastname + " " + payer_info_form.name + " " + payer_info_form.middlename;
			} else {
				changes.payer_name = payer_info_form.orgname;
			}

			//var name = payer_info_form.orgname;
			//if (payer_info_form.lastname || payer_info_form.name || payer_info_form.middlename)
			//	name = payer_info_form.name;
			//	changes.payer_name = payer_info_form.lastname + ' ' + name + ' ' + payer_info_form.middlename;//spy

			payer_changed = true;
		}
		//if (payer_info_form.middlename != payer_record.middlename) changes.payer_middlename = payer_info_form.middlename;

		//if (payer_info_form.address != payer_record.address) changes.payer_address = payer_info_form.address;

		//if (payer_info_form.payer_type != payer_record.payer_type) changes.payer_type = payer_info_form.payer_type;
		//if (payer_info_form.doc_type != payer_record.doc_type) changes.payer_doctype = payer_info_form.doc_type;
		//if (payer_info_form.doc_ser_num != payer_record.doc_ser_num) changes.payer_docsernum = payer_info_form.doc_ser_num;
		//if (payer_info_form.inn != payer_record.inn) changes.payer_inn = payer_info_form.inn;
		//if (payer_info_form.kio != payer_record.kio) changes.payer_kio = payer_info_form.kio;
		//if (payer_info_form.kpp != payer_record.kpp) changes.payer_kpp = payer_info_form.kpp;

		if (payer_info_form.payer_type != payer_record.payer_type ||
			payer_info_form.doc_type != payer_record.doc_type ||
			payer_info_form.doc_ser_num != payer_record.doc_ser_num ||
			payer_info_form.inn != payer_record.inn ||
			payer_info_form.kio != payer_record.kio ||
			payer_info_form.kpp != payer_record.kpp ||
			payer_info_form.inn_enable != payer_record.inn_enable ||
			payer_info_form.taxpayerCode != payer_record.taxpayerCode ||
			payer_info_form.countryReg != payer_record.countryReg) {
			payer_changed = true;
		}
		//>>>>>>> feature/gisgmp_n

		//if (Object.keys(changes).length > i) payer_changed = true;
		//chargedata info

		
		var i = Object.keys(changes).length;
		var chargedata_changed = false;
		if (chargedata_info_form.origin != chargedata_record.origin) changes.chargedata_origin = chargedata_info_form.origin;//spy
		if (chargedata_info_form.purpose != chargedata_record.purpose) changes.chargedata_purpose = chargedata_info_form.purpose;//spy
		if (chargedata_info_form.total_amount != chargedata_record.total_amount) changes.chargedata_totalamount = (chargedata_info_form.total_amount * 100).toFixed();//spy
		if (chargedata_info_form.kbk != chargedata_record.kbk) changes.chargedata_kbk = chargedata_info_form.kbk;//spy
		if (chargedata_info_form.oktmo != chargedata_record.oktmo) changes.chargedata_oktmo = chargedata_info_form.oktmo;//spy
		if (chargedata_info_form.status != chargedata_record.status) changes.chargedata_status = chargedata_info_form.status;//spy
		if (chargedata_info_form.payt_reason != chargedata_record.payt_reason) changes.chargedata_paytreason = chargedata_info_form.payt_reason;//spy
		if (chargedata_info_form.tax_docnumber != chargedata_record.tax_docnumber) changes.chargedata_taxdocnumber = chargedata_info_form.tax_docnumber;//spy
		if (chargedata_info_form.tax_period != chargedata_record.tax_period) changes.chargedata_taxperiod = chargedata_info_form.tax_period;//spy
		if (new Date(chargedata_info_form.tax_doc_date).getTime() != new Date(chargedata_record.tax_doc_date).getTime()) changes.chargedata_taxdocdate = chargedata_info_form.tax_doc_date == null ? "0" : chargedata_info_form.tax_doc_date;//spy
		if (Object.keys(changes).length > i) chargedata_changed = true;

		if (changes.chargedata_status != null) {
			var status_record = db.findbyrecid("payer_status", changes.chargedata_status);
			changes.chargedata_status = status_record.reccode;
		}
		if (changes.chargedata_paytreason != null) {
			var paytreason_record = db.findbyrecid("payt_reason", changes.chargedata_paytreason);
			changes.chargedata_paytreason = paytreason_record.reccode;
		}

		//return changes;

		if (params.payer_filling_type == "2" && (payer_changed || params.payer == null || params.payer == "")) {
			var payeridentifier = get_payeridentifier(params.payer_type, params.payer_doctype, params.payer_inn,
				params.payer_kpp, params.payer_kio, params.payer_docsernum,
				params.inn_enable, params.countryReg, params.taxpayerCode);

			if (payer_record.payeridentifier != payeridentifier) changes.payeridentifier = payeridentifier;//spy

			var existing_payer = db.findbyparams("payer", { payeridentifier: payeridentifier });

			//если такой плательщик уже есть базе то обновляем ему поля если нет то создаем нового
			if (existing_payer == null || existing_payer.length <= 0) {
				payer_info_form.payeridentifier = payeridentifier;
				var payer_record = db.insert("payer", payer_info_form);
				if (payer_record == null) {
					return badResponse("Ошибка при добавлении записи в таблицу " + "payer");
				}
				charge_info_form.payer = payer_record.recid;
			}
			else {
				payer_info_form.recid = existing_payer[0].recid;
				payer_info_form.recupdated = new Date();
				db.update("payer", payer_info_form);
				charge_info_form.payer = existing_payer[0].recid;
			}
		} else {
			charge_info_form.payer = params.payer;

		}


		//if (params.chargedata_filltype == "2" && chargedata_changed) {

		if (params.charge_data != null) {
			chargedata_info_form.recid = params.charge_data;
			chargedata_info_form.recupdated = new Date();
			db.update("charge_data", chargedata_info_form);
		} else {
			var new_chargedata = db.insert("charge_data", chargedata_info_form);
			charge_info_form.charge_data = new_chargedata.recid
		}
		//} else {
		//	//charge_info_form.charge_data_template = params.charge_data_template;
		//	//db.update("charge_data_template", chargedata_info_form);
		//}

		//удаляем значения чтобы при будущем выявлении изменений старые значения не висели в базе
		if (charge_info_form.discount_type != "1") { charge_info_form.discount_size_value = null; charge_info_form.discount_size_expiry = null; }
		if (charge_info_form.discount_type != "2") { charge_info_form.discount_fixed_value = null; charge_info_form.discount_fixed_expiry = null; }
		if (charge_info_form.discount_type != "3") { charge_info_form.multiplier_size_value = null; charge_info_form.multiplier_size_expiry = null; }
		
		if (charge_info_form.discount_type){
			charge_info_form.discount = true
		}

		charge_info_form.recid = params.recid;
		charge_info_form.clarify_changes = JSON.stringify(changes);
		charge_info_form.recupdated = new Date();

		db.update("charge", charge_info_form);
		
		if (params.btn_reason_send == true) {
			//нажата кнопка отправить, отправляем уточненное начисление

			//формируем xml
			var clarify_params = {
				recordIdList: [charge_info_form.recid],
				data: {
					reason: reason
				},
				role: params.role
			};
			var xml = buildxml_charge_clarify(clarify_params);
			if (xml.success == false) {
				return badResponse("Ошибка построения xml " + xml.message);
			}

			//отправляем
			var send = sendsmevrequest(xml, "charge", charge_info_form.recid, _request_type.ClarifyCharge);
			if (send.success == false) {
				return badResponse("Ошибка отправки запроса в СМЭВ " + send.message);
			}

			//ставим статус
			var state = set_charge_status(charge_status["Уточнение начисления"], charge_info_form.recid); //set_send_state(clarify_params);
			if (state.success == false) {
				return badResponse("Ошибка обновления статуса начисления " + state.message);
			}

			return {
				success: true,
				message: "Запись отправлена",
				closeForm: true,
				showMessage: false,
				data: params
			};
		} else {

			return {
				success: true,
				message: "Запись сохранена",
				closeForm: true,
				showMessage: false,
				data: params

			};
		}
		//return changes;
	}
	catch (ex) {
		return badResponse("Ошибка обновления записи: " + ex.message);
	}
}

function charge_form_submit(params) {
	try {
		var chargedata_info = {};
		var payer_info = {};
		var charge_info = {};
		var charge_record = null;

		var values = params.values;
		values.recid =
			params.pressButton.name != _gridToolbarNameSystemButtons.Add && params.recid != ''
				? params.recid
				: null;

		values.payer_doctype =
			values.payer_doctype != null && values.payer_doctype != ""
				? db.findbyparams("doc_type", { reccode: values.payer_doctype })[0].recid
				: null;

		values.chargedata_paytreason =
			values.chargedata_paytreason != null && values.chargedata_paytreason != ""
				? db.findbyparams("payt_reason", { reccode: values.chargedata_paytreason })[0].recid
				: null;

		values.chargedata_status =
			values.chargedata_status != null && values.chargedata_status != ""
				? db.findbyparams("payer_status", { reccode: values.chargedata_status })[0].recid
				: null;

		if (values.chargedata_purpose != null) values.chargedata_purpose = values.chargedata_purpose.trim();
		if (values.chargedata_taxdocdate == "") values.chargedata_taxdocdate = null;
		if (values.payer_orgname != null) values.payer_orgname = values.payer_orgname.trim();
		if (values.payer_name != null) values.payer_name = values.payer_name.trim();
		if (values.payer_lastname != null) values.payer_lastname = values.payer_lastname.trim();
		if (values.payer_middlename != null) values.payer_middlename = values.payer_middlename.trim();

		if (values.discount_type == "") {
			return badResponse("Выберите тип дополнительного условия оплаты");
		}

		// * * * * * * * * *
		// Данные начисления
		// * * * * * * * * *		
		switch (values.chargedata_filltype) {
			// Заполнение из шаблона
			case 1:
				var chargedatatemplate_record = db.findbyrecid("charge_data_template", values.charge_data_template);

				chargedata_info = {
					origin: chargedatatemplate_record.origin,
					purpose: chargedatatemplate_record.purpose,
					total_amount: chargedatatemplate_record.total_amount,
					kbk: chargedatatemplate_record.kbk,
					oktmo: chargedatatemplate_record.oktmo,

					// asd
					status: chargedatatemplate_record.status,
					payt_reason: chargedatatemplate_record.payt_reason,

					tax_docnumber: chargedatatemplate_record.tax_docnumber,
					tax_period: chargedatatemplate_record.tax_period,
					tax_doc_date:
						chargedatatemplate_record.tax_doc_date != null && chargedatatemplate_record.tax_doc_date != ""
							? delete_timezone(chargedatatemplate_record.tax_doc_date)
							: null
				};

				values.istemplate = true;		// Признак что данные вводились через шаблон
				values.amounttopay = chargedata_info.total_amount;
				break;

			// Ручной ввод
			case 2:
				chargedata_info = {
					origin: values.chargedata_origin ? values.chargedata_origin : null,
					purpose: values.chargedata_purpose,
					total_amount: values.chargedata_totalamount,
					kbk: values.chargedata_kbk,
					oktmo: values.chargedata_oktmo,
					status: values.chargedata_status,
					payt_reason: values.chargedata_paytreason,
					tax_docnumber: values.chargedata_taxdocnumber,
					tax_period: values.chargedata_taxperiod,
					tax_doc_date: values.chargedata_taxdocdate != null && values.chargedata_taxdocdate != ""
						? delete_timezone(values.chargedata_taxdocdate)
						: null
				};

				values.istemplate = false;
				values.charge_data_template = null;
				values.amounttopay = values.chargedata_totalamount;
				break;

			default:
				return badResponse("Указан не верный тип заполнения данных начисления: '" + values.chargedata_filltype + "'");
		}

		// Обновляем или создаем данные начисления в БД
		if (values.charge_data != null) {
			chargedata_info.recid = values.charge_data;
			chargedata_info.recupdated = new Date();
			db.update("charge_data", chargedata_info);
		}
		// создаем новую запись
		else {
			chargedata_info = db.insert("charge_data", chargedata_info);
			values.charge_data = chargedata_info.recid;
		}


		// * * * * * * * * *
		// Данные плательщика
		// * * * * * * * * *

		// Если ручной ввод плательщика
		// Примечание: При использовании из справочника - с формы тянется recid соотвествующий, поэтому нет else
		if (values.payer_filling_type == 2) {

			var payeridentifier = "";
			//	Если передается payeridentifier через api создания начисления, то тогда берем его что бы не писать обратный алгоритм
			if (values.payeridentifier_api) {
				payeridentifier = values.payeridentifier_api;
			}
			else {
				payeridentifier = get_payeridentifier(values.payer_type, values.payer_doctype, values.payer_inn, values.payer_kpp,
					values.payer_kio, values.payer_docsernum,
					values.inn_enable, values.countryReg, values.taxpayerCode);
			}

			payer_info = {
				orgname: values.payer_orgname,
				name: values.payer_name,
				lastname: values.payer_lastname,
				middlename: values.payer_middlename,
				address_type: !values.address_type ? _address_type.Manual : values.address_type,
				address: values.address_type == _address_type.Manual ? values.payer_address_manual : values.container.payer_address_fias,
				payer_type: values.payer_type,
				doc_type: values.payer_doctype,
				doc_ser_num: values.payer_docsernum,
				inn: values.payer_inn,
				inn_enable: values.inn_enable,
				taxpayercode: values.taxpayerCode,
				countryreg: values.countryReg,
				kpp: values.payer_kpp,
				kio: values.payer_kio,
				payeridentifier: payeridentifier
			};

			var existing_payer = db.findbyparams("payer", { payeridentifier: payeridentifier });

			// Если такой плательщик уже есть в базе - обновляем ему поля. Если нет - создаем нового
			if (existing_payer == null || existing_payer.length <= 0) {
				var payer_record = db.insert("payer", payer_info);
				if (payer_record == null) {
					return badResponse("Ошибка при добавлении нового плательщика в таблицу 'payer'");
				}
				values.payer = payer_record.recid;
			}
			else {
				payer_info.recid = existing_payer[0].recid;
				payer_info.recupdated = new Date();
				db.update("payer", payer_info);
				values.payer = existing_payer[0].recid;
			}
		}


		// * * * * * * * * *
		// Начисление
		// * * * * * * * * *

		var user = getcurrentuser();
		var userData = db.findbyparams("users", {login: user.login})[0]
		var organization = db.findbyrecid("organization", userData.organizationid)

		charge_info = {
			recid: values.recid,
			recupdated: new Date(),
			payee: values.payee,
			supplier_bill_id: values.supplier_bill_id,
			istemplate: values.istemplate,
			acknowledgment_status: values.acknowledgment_status,
			bill_date: delete_timezone(values.bill_date),
			payer_filling_type: values.payer_filling_type,
			payer: values.payer,
			charge_data: values.charge_data,
			charge_data_template: values.charge_data_template,
			valid_until: delete_timezone(values.valid_until),
			discount_type: values.discount_type,
			discount_size_value: values.discount_size_value,
			discount_size_expiry: delete_timezone(values.discount_size_expiry),
			discount_fixed_value: values.discount_fixed_value != null
				? parseInt(values.discount_fixed_value * 100, 10)
				: null,
			discount_fixed_expiry: delete_timezone(values.discount_fixed_expiry),
			multiplier_size_value: values.multiplier_size_value,
			multiplier_size_expiry: delete_timezone(values.multiplier_size_expiry),
			amounttopay: values.amounttopay,
			totalamount: chargedata_info.total_amount,
			purpose: chargedata_info.purpose,
			discount: values.discount,
			user_name: user.login,
			organization_name: organization.name
		};
		if (values.is_api) charge_info.generate_by_api = true;

		// Обновляем или создает новую запись
		if (values.recid != null) {
			db.update("charge", charge_info);
			charge_record = db.findbyrecid("charge", charge_info.recid);
		}
		else {
			try {
				charge_record = db.insert("charge", charge_info);
			} catch (ex) {
				db.delete("charge_data", chargedata_info.recid);
				return badResponse("Ошибка при добавлении записи в таблицу 'charge': " + ex.message);
			}
		}

		// Если нажата кнопка отправить, отправляем сохраненное начисление
		if (values.send == true) {
			try {
				//формируем xml
				var recid_params = { recordIdList: [charge_record.recid], role: values.role };
				var xml = buildxml_charge_import(recid_params);
				if (xml.success == false) {
					throw "Ошибка построения xml " + xml.message;
				}

				//отправляем
				var send = sendsmevrequest(xml, "charge", charge_record.recid, _request_type.NewCharge);
				if (send.success == false) {
					throw "Ошибка отправки запроса в СМЭВ " + send.message;
				}

				//ставим статус
				var state = set_charge_status(charge_status["Создание начисления"], charge_record.recid); //set_send_state(recid_params);
				if (state.success == false) {
					throw "Ошибка обновления статуса начисления " + state.message;
				}
			}
			catch (ex) {
				// Если ошибка для новой записи - удаляем запись из БД для исключения дублирования. https://rm.mfc.ru/issues/52824
				if (values.recid == null) {
					db.delete("charge", charge_record.recid);
					db.delete("charge_data", chargedata_info.recid);
				}
				return badResponse(ex);
			}

			return {
				success: true,
				message: "Запись отправлена",
				closeForm: true,
				showMessage: false,
				data: params
			};
		} else {
			return {
				success: true,
				message: "Запись сохранена",
				closeForm: true,
				showMessage: false,
				data: params
			};
		}
	}
	catch (ex) {
		return badResponse("Ошибка при добавлении записи в таблицу: " + ex.message);
	}
}

function get_payer_types() {

	var payer_types = [
		{ name: "Физическое лицо", id: "1" },
		{ name: "Юридическое лицо (резидент РФ)", id: "2" },
		{ name: "Юридическое лицо (нерезидент РФ)", id: "3" },
		{ name: "Индивидуальный предприниматель", id: "4" }
	];

	return payer_types;
}

function get_status_list() {

	var charge_status_list = [
		{ name: "Сквитировано", id: "1" },
		{ name: "Предварительно сквитировано", id: "2" },
		{ name: "Не сквитировано", id: "3" },
		{ name: "Сквитировано с отсутствующим платежом", id: "4" },
		{ name: "Принудительно сквитировано", id: "5" },
		{ name: "Черновик", id: "6" },
		{ name: "Уточняемое", id: "7" },
		{ name: "Аннулировано", id: "8" },
		{ name: "Ошибка", id: "9" },
		{ name: "Ошибка создания", id: "91" },
		{ name: "Ошибка уточнения", id: "92" },
		{ name: "Ошибка анулирования", id: "93" },
		{ name: "Ошибка деанулирования", id: "94" },
		{ name: "Ошибка квитирования", id: "95" },
		{ name: "Отправлено", id: "10" },
		{ name: "Создание начисления", id: "11" },
		{ name: "Уточнение начисления", id: "12" },
		{ name: "Аннулирование начисления", id: "13" },
		{ name: "Деаннулирование начисления", id: "14" },
		{ name: "Квитирование", id: "15" },
		{ name: "Отмена квитирования", id: "16" }
	];

	return charge_status_list;
}

//этот метод вызывает форма для получения записи по начислению
function charge_form_getrecord(params) {

	var check = check_params_pressButton(params);
	if (check.success == false) return check;
	if (params.recid == '') params.recid = null;

	var currentUser = check_can_submit();
	var record = {};

	var formMode = "";
	switch (params.pressButton.name) {
		case _gridToolbarNameSystemButtons.Add:
		case _gridToolbarNameSystemButtons.Edit:
		case _contextMenuSystemButtons.Edit:
			formMode = _charge_universal_form_mode.AddOrEdit;
			break;

		case "chargeEditBtn":
		case "chargeEditMenu":
			formMode = _charge_universal_form_mode.Clarify;
			break;

		case "viewChargeBtn":
		case "viewChargeMenu":
		case _contextMenuSystemActions.DoubleClick:
		case _contextMenuSystemActions.PressEnter:
			formMode = _charge_universal_form_mode.Info;
			break;

		default:
			return badResponse("Неизвестное место вызова формы. Определите режим работы формы для кнопки: " + params.pressButton.name);
			break;
	}

	try {

		// https://rm.mfc.ru/issues/55036
		// заранее подгружаем справочник назначения платежа
		const payt_reason_dic = db.find("payt_reason");
		const payer_status_dict = db.find("payer_status");

		//пришла запись, значит это редактирование/просмотр
		if (params.pressButton.name != _gridToolbarNameSystemButtons.Add && params.recid != null) {
			record = db.findbyrecid("charge", params.recid);
			record.chargedata_filltype = record.istemplate ? "1" : "2";
			var chargedata_record = db.findbyrecid("charge_data", record.charge_data);
			record.chargedata_origin = chargedata_record.origin;
			record.chargedata_purpose = chargedata_record.purpose;
			record.chargedata_totalamount = chargedata_record.total_amount; //делаем рубли
			//record.valid_until = chargedata_record.total_amount;
			record.chargedata_kbk = chargedata_record.kbk;
			record.chargedata_oktmo = chargedata_record.oktmo;

			//
			record.chargedata_status = getCodeByRecid(payer_status_dict, chargedata_record.status);
			// https://rm.mfc.ru/issues/55036
			// устанавливаем значение
			record.chargedata_paytreason = getCodeByRecid(payt_reason_dic, chargedata_record.payt_reason);

			record.chargedata_taxdocnumber = chargedata_record.tax_docnumber;
			record.chargedata_taxperiod = chargedata_record.tax_period;
			record.chargedata_taxdocdate = chargedata_record.tax_doc_date;

			//если инфа по плательщику была введена вручную то подгружаем эти данные из payer
			if (record.payer_filling_type == "2") {
				var payer_record = db.findbyrecid("payer", record.payer);
				record.payer_orgname = payer_record.orgname;
				record.payer_lastname = payer_record.lastname;
				record.payer_name = payer_record.name;
				record.payer_middlename = payer_record.middlename;

				record.address_type = payer_record.address_type != null ? payer_record.address_type : _address_type.Manual;

				if (payer_record.address_type == _address_type.FIAS) {
					record.container = {};
					record.container.payer_address_fias = payer_record.address;
				}
				else {
					record.payer_address_manual = payer_record.address;
				}

				record.payer_type = payer_record.payer_type;

				if (payer_record.doc_type != null) {
					const doc_type_db = db.findbyrecid("doc_type", payer_record.doc_type);
					record.payer_doctype = doc_type_db != null ? doc_type_db.reccode : null;
				}

				record.payer_docsernum = payer_record.doc_ser_num;
				record.payer_inn = payer_record.inn;
				record.payer_kio = payer_record.kio;
				record.payer_kpp = payer_record.kpp;
				record.inn_enable = payer_record.inn_enable;
				record.taxpayerCode = payer_record.taxpayercode;
				record.countryReg = payer_record.countryreg ? db.findbyrecid("oksm", payer_record.countryreg).recdescription : null;
			}



			//добавляем инфу по связанным платежам
			var payments = db.findbyparams("payment", { recstate: 1, supplier_bill_id: record.supplier_bill_id });
			record.payments_grid = payments;

			if (record.discount_type) {
				record.discount_type = String(record.discount_type);
			}

			if (record.discount_fixed_value) {
				record.discount_fixed_value = record.discount_fixed_value / 100.0
			}
		}
		//Иначе создание нового начисления
		else {
			if (currentUser == null || currentUser.login == null) {
				return badResponse("Ошибка при создании начисления: Не удалось получить логин текущего пользователя");
			}
			var senderIdentifier = getsenderidentifier(currentUser.login);
			var payee = getorganizationid(currentUser.login);
			var yin = generateSupplierBillId(senderIdentifier);

			record = {
				"supplier_bill_id": yin,
				"acknowledgment_status": charge_status.Черновик,
				"payee": payee,
				"mode": charge_mode.add,
				// https://rm.mfc.ru/issues/54670 - Реестр начислений. 
				// Указать значение по умолчанию в поле "Основание платежа"
				// (значение "0", определено форматоми взаимодействия)
				"chargedata_paytreason": '0'
			};
		}

		record = charge_form_fill_organization(record, record.payee);
		record.can_submit = currentUser ? currentUser.can_submit : null;

		record.charge_data_template_all = db.find("charge_data_template");
		// https://rm.mfc.ru/issues/55036
		if (record.charge_data_template_all && record.charge_data_template_all.length) {
			// необходимо переопределить поле для корректной работы валидации
			for (let i = 0; i < record.charge_data_template_all.length; i++) {
				record.charge_data_template_all[i].payt_reason = getCodeByRecid(payt_reason_dic, record.charge_data_template_all[i].payt_reason);
				record.charge_data_template_all[i].status = getCodeByRecid(payer_status_dict, record.charge_data_template_all[i].status);
			}
		}

		record._form_mode = formMode;
		record.payer_record = payer_record;

		record.role = record.sender_role;

		return df.load("charge", record);
	}
	catch (ex) {
		return badResponse("Ошибка при создании начисления: " + ex.message);
	}
}

/**
 * Возвращает reccode записи по recid
 * @param {*} dict массив с записями
 * @param {*} recid id
 * @returns reccode
 */
function getCodeByRecid(dict, recid) {
	if (!dict || !recid) return null;
	for (var i = 0; i < dict.length; i++) {
		if (dict[i].recid == recid) return dict[i].reccode;
	}
}

function charge_form_fill_organization(params, payee) {
	if (params != null && payee != null) {
		var record_db = db.findbyrecid("organization", payee);
		params.sender_identifier = record_db.sender_identifier;
		params.sender_role = record_db.sender_role;
		params.name = record_db.name;
		params.inn = record_db.inn;
		params.kpp = record_db.kpp;
		params.ogrn = record_db.ogrn;
		params.account_number = record_db.account_number;
		params.bank_name = record_db.bank_name;
		params.bik = record_db.bik;
		params.correspondent_bank_account = record_db.correspondent_bank_account;
		params.interaction_through_the_aggregator = record_db.interaction_through_the_aggregator;
		params.aggregator = record_db.aggregator;
		params.code_ubp = record_db.code_ubp;
	}

	return params;
}

function payment_form_getrecord(params) {

	try {

		charge_record = db.findbyparams("charge", { supplier_bill_id: params.supplier_bill_id });
		const payt_dict = db.find("payt_reason");

		if (charge_record != null || charge_record.length > 0) {
			params.charge = charge_record[0];

			if (params.charge.istemplate == true) {
				params.charge.chargedata_filltype = "1";
			}
			else {
				params.charge.chargedata_filltype = "2";
			}

			var chargedata_record = db.findbyrecid("charge_data", params.charge.charge_data);
			params.charge.chargedata_origin = chargedata_record.origin;
			params.charge.chargedata_purpose = chargedata_record.purpose;
			params.charge.chargedata_totalamount = chargedata_record.total_amount; //делаем рубли
			//params.valid_until = chargedata_record.total_amount;
			params.charge.chargedata_kbk = chargedata_record.kbk;
			params.charge.chargedata_oktmo = chargedata_record.oktmo;
			params.charge.chargedata_status = chargedata_record.status;
			// set value
			params.charge.chargedata_paytreason = getCodeByRecid(payt_dict, chargedata_record.payt_reason);
			params.charge.chargedata_taxdocnumber = chargedata_record.tax_docnumber;
			params.charge.chargedata_taxperiod = chargedata_record.tax_period;
			params.charge.chargedata_taxdocdate = chargedata_record.tax_doc_date;

			//если инфа по плательщику была введена вручную то подгружаем эти данные из payer
			if (params.charge.payer_filling_type == "2") {
				var payer_record = db.findbyrecid("payer", params.charge.payer);
				params.charge.payer_orgname = payer_record.orgname;
				params.charge.payer_lastname = payer_record.lastname;
				params.charge.payer_name = payer_record.name;
				params.charge.payer_middlename = payer_record.middlename;
				params.charge.payer_address = payer_record.address;
				params.charge.payer_type = payer_record.payer_type;
				params.charge.payer_doctype = payer_record.doc_type;
				params.charge.payer_docsernum = payer_record.doc_ser_num;
				params.charge.payer_inn = payer_record.inn;
				params.charge.payer_kio = payer_record.kio;
				params.charge.payer_kpp = payer_record.kpp;
			}
		}

		return {
			success: true,
			message: "",
			closeForm: false,
			showMessage: false,
			data: params

		};
	}
	catch (ex) {
		return {
			success: false,
			message: "Ошибка загрузки формы платежа: " + ex.message,
			closeForm: false,
			showMessage: false,
			data: params
		};
	}
}

//этот метод вызывает форма для получения записи при уточнении начисления
function charge_getrecord_clarify(params) {
	try {
		var currentUser = check_can_submit();

		//через recid полчучаем данные из таблицы charge т.к при вызове формы уточнения из стандартной карточки начисления, через params могут передаться не все поля нужные
		params = db.findbyrecid("charge", params.recid);

		//Получаем из записи и заполняем поля плательщика на форме для отображения в режиме ручного ввода
		var payer_record = db.findbyrecid("payer", params.payer);
		params.payer_orgname = payer_record.orgname;
		params.payer_lastname = payer_record.lastname;
		params.payer_name = payer_record.name;
		params.payer_middlename = payer_record.middlename;
		params.payer_address = payer_record.address;
		params.payer_type = payer_record.payer_type;

		if (payer_record.doc_type != null) {
			var doc_type_db = db.findbyrecid("doc_type", payer_record.doc_type);
			params.payer_doctype = doc_type_db != null ? doc_type_db.reccode : null;
		}
		params.payer_docsernum = payer_record.doc_ser_num;
		params.payer_inn = payer_record.inn;
		params.payer_kio = payer_record.kio;
		params.payer_kpp = payer_record.kpp;
		params.payer_dic = payer_record.is_dic;
		params.payer = payer_record.recid;

		//если ручной ввод данных об оплате у начисления
		if (!params.istemplate) {
			params.chargedata_filltype = "2";
			var chargedata_record = db.findbyrecid("charge_data", params.charge_data);

			params.chargedata_origin = chargedata_record.origin;
			params.chargedata_purpose = chargedata_record.purpose;
			params.chargedata_totalamount = chargedata_record.total_amount;
			//params.valid_until = chargedata_record.total_amount;
			params.chargedata_kbk = chargedata_record.kbk;
			params.chargedata_oktmo = chargedata_record.oktmo;
			params.chargedata_status = chargedata_record.status;
			params.chargedata_paytreason = chargedata_record.payt_reason;
			params.chargedata_taxdocnumber = chargedata_record.tax_docnumber;
			params.chargedata_taxperiod = chargedata_record.tax_period;
			params.chargedata_taxdocdate = chargedata_record.tax_doc_date;
		}
		else {
			params.chargedata_filltype = "1";
		}

		if (params.discount && params.discount_fixed_value) {
			params.discount_fixed_value = params.discount_fixed_value / 100.0
		}

		//добавляем инфу по связанным платежам
		var payments = db.findbyparams("payment", { recstate: 1, supplier_bill_id: params.supplier_bill_id });
		params.payments_grid = payments;

		params.acknowledgment_status = charge_status.Уточняемое;

		if (params.payee) {
			var record = db.findbyrecid("organization", params.payee);
			params.sender_identifier = record.sender_identifier;
			params.sender_role = record.sender_role;
			params.originator_id = record.originator_id;
			params.name = record.name;
			params.inn = record.inn;
			params.kpp = record.kpp;
			params.ogrn = record.ogrn;
			params.account_number = record.account_number;
			params.bank_name = record.bank_name;
			params.bik = record.bik;
			params.correspondent_bank_account = record.correspondent_bank_account;
		}
		if (params.discount_type) {
			params.discount_type = String(params.discount_type);
		}
		params.can_submit = currentUser.can_submit;

		return df.load("charge", params);
	}
	catch (ex) {
		return badResponse("Ошибка при создании начисления: " + ex.message);
	}
}

//получение информации о текущем пользователе
function getcurrentuser() {

	var url = String().concat(host, "/auth/userProfile");
	var headers = addAuthHeader(headers);
	var res = fetch(url, {
		headers: {
			'Authorization': headers.Authorization
		},
		"Method": "get"
	});

	if (!res.Success) {
		throw new Error(res.Message)
	}
	else {
		var data = JSON.parse(res.Data)
		return data;
	}
}

function splitKopRub(summa) {
	//kopeiki = String(kopeiki);
	//var rub;
	//var kop;
	//if (kopeiki > 99) {
	//	kop = kopeiki.substring(kopeiki.length - 2);
	//	rub = kopeiki.substring(0, kopeiki.length - 2);
	//}
	//else {
	//	rub = String(0);
	//	kop = kopeiki;
	//}

	var s = String(summa);
	s = s.split('.');
	var rub = s[0];
	var kop = s[1] != null
		? (s[1].length == 2 ? s[1] : s[1] + "0")
		: "00";

	return { rub: rub, kop: kop };
}

function charge_print(params) {
	try {
		//может есть смысл вынести выборку данных в хранимку
		var charge_record = db.findbyrecid("charge", params.recid);
		var organization_record = db.findbyrecid("organization", charge_record.payee);
		var payer_record = db.findbyrecid("payer", charge_record.payer);
		var doctype_record = payer_record.doc_type != null ? db.findbyrecid("doc_type", payer_record.doc_type) : {}; // у юр нет

		if (charge_record.istemplate == true) {
			var chargedata = db.findbyrecid("charge_data_template", charge_record.charge_data_template);
		} else {
			var chargedata = db.findbyrecid("charge_data", charge_record.charge_data);
		}

		var paytreason_record = db.findbyrecid("payt_reason", chargedata.payt_reason);

		var variable = {};

		variable["YIN"] = charge_record.supplier_bill_id;
		variable["PAYEENAME"] = organization_record.name; //наименование получателя платежа org.name
		variable["INN"] = organization_record.inn; //ИНН получателя платежа org.inn
		variable["OKTMO"] = chargedata.oktmo;//charge_data
		variable["ACCOUNTNUMBER"] = organization_record.account_number;//номер счета получателя платежа org.accNumber
		variable["BANKNAME"] = organization_record.bank_name;//наименование банка получателя платежа org.bankname
		variable["BIK"] = organization_record.bik;//org.bik
		variable["CORACCOUNT"] = organization_record.correspondent_bank_account;//Номер кор./сч. банка получателя платежа org.correspondent_bank_account
		variable["KBK"] = chargedata.kbk;//chargedata.kbk
		variable["PURPOSE"] = chargedata.purpose;//назначение платежа chargedata

		variable["PAYERADDRESS"] = payer_record.address ? payer_record.address : "";//Адрес плательщика payer.address

		var total_amount = splitKopRub(chargedata.total_amount);

		variable["SPR"] = total_amount.rub;//Сумма платежа руб charge_data.total_amount или может charge.amountToPay
		variable["SPK"] = total_amount.kop;//Сумма платежа коп

		//пока сделаем равным spr и spk
		variable["ITR"] = variable["SPR"];//Итого руб
		variable["ITK"] = variable["SPK"];//Итого коп
		variable["SPUR"] = "";
		variable["SPUK"] = "";

		var qrCorrespAcc;
		if (organization_record.correspondent_bank_account == null || organization_record.correspondent_bank_account == "") {
			qrCorrespAcc = "0";
		} else {
			qrCorrespAcc = organization_record.correspondent_bank_account;
		}

		// Вместо даты может быть 0 или дата может быть кривая
		var docDate =
			(chargedata.tax_doc_date == null || chargedata.tax_doc_date == "0" || chargedata.tax_doc_date == "" || new Date(chargedata.tax_doc_date) == 'Invalid Date')
				? '0'
				: new Date(chargedata.tax_doc_date);
		docDate = docDate != '0' ? ("0" + docDate.getDate()).slice(-2) + "." + ("0" + (docDate.getMonth() + 1)).slice(-2) + "." + ("0" + (docDate.getFullYear())).slice(-4) : docDate;

		if (payer_record.payer_type == 1 || payer_record.payer_type == 4) {
			var payerIdNum = payer_record.doc_ser_num;
			variable["PAYERTYPE"] = payer_record.payer_type == 1 ? "Ф.И.О. плательщика" : "Плательщик"
			variable["PAYERNAME"] = payer_record ? (
				((payer_record.lastname && payer_record.lastname != "null") ? payer_record.lastname + " " : "") +
				((payer_record.name && payer_record.name != "null") ? payer_record.name + " " : "") +
				((payer_record.middlename && payer_record.middlename != "null") ? payer_record.middlename : "")
			) : "";
		} else {
			var payerIdNum = payer_record.inn;
			variable["PAYERTYPE"] = "Плательщик"
			variable["PAYERNAME"] = ((payer_record && payer_record.orgname && payer_record.orgname != "null") ? payer_record.orgname : "");
		}

		// var snils = "";
		// if (doctype_record.reccode == 14) snils = payer_record.doc_ser_num; 

		var qrData = "ST00012" + "|"
			+ (organization_record.name.replace('"', '') ? "Name=" + organization_record.name.replace('"', '') + "|" : "")
			+ (organization_record.account_number || organization_record.account_number === 0 ? "PersonalAcc=" + organization_record.account_number + "|" : "")
			+ (organization_record.bank_name.replace('"', '') ? "BankName=" + organization_record.bank_name.replace('"', '') + "|" : "")
			+ (organization_record.bik || organization_record.bik === 0 ? "BIC=" + organization_record.bik + "|" : "")
			+ (qrCorrespAcc || qrCorrespAcc === 0 ? "CorrespAcc=" + qrCorrespAcc + "|" : "")
			+ (organization_record.inn || organization_record.inn === 0 ? "PayeeINN=" + organization_record.inn + "|" : "")
			+ (payer_record.lastname ? "lastName=" + payer_record.lastname + "|" : "")
			+ (payer_record.name ? "firstName=" + payer_record.name + "|" : "")
			+ (payer_record.middlename ? "middleName=" + payer_record.middlename + "|" : "")
			+ (payer_record.address ? "PayerAddress=" + payer_record.address + "|" : "")
			+ (payerIdNum || payerIdNum === 0 ? "PayerIdNum=" + payerIdNum + "|" : "")
			+ "Sum=" + total_amount.rub + '' + total_amount.kop + "|" // + chargedata.total_amount + "|" //by #51347
			+ (chargedata.purpose.replace('"', '') ? "Purpose=" + chargedata.purpose.replace('"', '') + "|" : "")
			+ (organization_record.kpp ? "KPP=" + organization_record.kpp + "|" : "")
			+ (chargedata.kbk ? "CBC=" + chargedata.kbk + "|" : "")
			+ (chargedata.oktmo ? "OKTMO=" + chargedata.oktmo + "|" : "")
			+ (chargedata.tax_docnumber || chargedata.tax_docnumber == 0 ? "DocNo=" + chargedata.tax_docnumber + "|" : "")
			+ "DocDate=" + docDate + "|"
			+ (paytreason_record && paytreason_record.reccode ? "PaytReason=" + paytreason_record.reccode + "|" : "")
			+ (charge_record.supplier_bill_id ? "UIN=" + charge_record.supplier_bill_id + "|" : "")
			+ (chargedata.tax_period ? "TaxPeriod=" + chargedata.tax_period + "|" : "")
			+ (doctype_record.reccode ? "PayerIdType=" + doctype_record.reccode + "|" : "")
			// + "snils=" + snils //by #51347
			;

		// Если последний символ | удаляем его //by #51347
		if (qrData.slice(-1) == '|') {
			qrData = qrData.slice(0, -1);
		}

		var base64QrContent1 = rdev.generateQrCode(qrData, "png", 1);
		var images = [
			{
				name: "QR_CODE1", // название соответствующего тега в документе
				content: base64QrContent1, // base64 строка, содержащая QR код
				dpi: 70 //чем меньше тем крупнее в документе (при 160 dpi и 10 pixelsPerModule в документе код 4 см)
			}
		];
		try {
			var payer_name = "";
			if (payer_record.lastname != null) payer_name = payer_name + payer_record.lastname + " ";
			if (payer_record.name != null) payer_name = payer_name + payer_record.name + " ";
			if (payer_record.middlename != null) payer_name = payer_name + payer_record.middlename;
			payer_name = payer_name.trim();

			var res = reports.generate("quitance", "docx", "Квитанция " + payer_name, "pdf", variable, params.recid, "charge", "quittance_file", images, true);
		} catch (ex) { return { "success": false, "message": "Ошибка формирования квитанции", filetodownload: res.recid, "err": ex }; }
		return { "success": true, "message": "Квитанция сформирована", filetodownload: res.recid };
	} catch (ex) { return { "success": false, "message": "Ошибка формирования кода", filetodownload: res.recid, "err": ex }; }
}

//создание xml для деаннулирования начисления
function buildxml_charge_deannul(params) {

	try {
		//сделать изменение статуса для начисления после успешной отправки
		var recId = params.recordIdList[0]; // получили recid текущей записи

		var procedureparams =
		{
			"name": "chargeimport_sel",
			"parameters": [{ "name": "charge_recid", "value": recId, "type": "SysGUID" }]

		};
		var dbrec = db.execprocedure(procedureparams);

		if (dbrec == null) {
			event.log("buildxml_charge_deannul", null, "Из базы вместо записи пришел null", 3, null);
			return { success: false, message: "Из базы вместо записи пришел null", data: null };
		};

		if (dbrec.length <= 0) {
			return { success: false, message: "Не удалось получить данные по начислению " + recId, data: null };
		};

		dbrec = dbrec[0];

		var request =
		{
			converterName: converters.deannul,
			form: {
				"Id": "G_" + recId,
				"timestamp": new Date(),
				"ImportedTypeData": importedTypeData.importedChange,
				"ImportedChangeItems": [
					{
						"ImportedChangeItemsId": "I_" + dbrec.recid,
						"originatorId":
							dbrec.interaction_through_the_aggregator
								? dbrec.sender_identifier
								: null,
						"SupplierBillId": dbrec.supplier_bill_id,
						"ChangeStatus": {
							"meaning": meaning.deannul,
							"Reason": params.data.reason,
							"ChangeDate": new Date()
						}
					}
				]
			},
			format: "xml",
			isBuildEnvelope: true,
			isProviderResponse: false,
			isTest: false
		};

		if (dbrec.interaction_through_the_aggregator) {
			request.form.senderIdentifier = dbrec.agr_sender_identifier;
			request.form.senderRole = dbrec.agr_sender_role;
		}
		else {
			request.form.senderRole = dbrec.sender_role;
			request.form.senderIdentifier = dbrec.sender_identifier;
		}

		// отправим эти данные для построения запроса в т.н. конвертор на шлюзе внутри RDEV
		var xml = rdev.buildXmlFromJson(request, host); // создадим необходимую обертку в MethodProvider

		// теперь в xml - запрос без подписей вообще - отправим его дальше по бизнес-процессу
		return { success: true, message: "Запрос для СМЭВ успешно построен", data: xml };
	} catch (ex) {
		return { success: false, message: ex, data: null };
	}
}

//создание xml для аннулирования начисления
function buildxml_charge_annul(params) {

	try {
		//сделать изменение статуса для начисления после успешной отправки
		var recId = params.recordIdList[0]; // получили recid текущей записи

		var procedureparams =
		{
			"name": "chargeimport_sel",
			"parameters": [{ "name": "charge_recid", "value": recId, "type": "SysGUID" }]

		};
		var dbrec = db.execprocedure(procedureparams);

		if (dbrec == null) {
			event.log("buildxml_charge_annul", null, "Из базы вместо записи пришел null", 3, null);
			return { success: false, message: "Из базы вместо записи пришел null", data: null };
		};

		if (dbrec.length <= 0) {
			return { success: false, message: "Не удалось получить данные по начислению " + recId, data: null };
		};

		dbrec = dbrec[0];

		var request =
		{
			converterName: converters.annul,
			form: {
				"Id": "G_" + recId,
				"timestamp": new Date(),
				"ImportedTypeData": importedTypeData.importedChange,
				"ImportedChangeItems": [
					{
						"ImportedChangeItemsId": "I_" + dbrec.recid,
						"originatorId":
							dbrec.interaction_through_the_aggregator
								? dbrec.sender_identifier
								: null,
						"SupplierBillId": dbrec.supplier_bill_id,
						"ChangeStatus": {
							"meaning": meaning.annul,
							"Reason": params.data.reason,
							"ChangeDate": new Date()
						}
					}
				]
			},
			format: "xml",
			isBuildEnvelope: true,
			isProviderResponse: false,
			isTest: false
		};

		if (dbrec.interaction_through_the_aggregator) {
			request.form.senderIdentifier = dbrec.agr_sender_identifier;
			request.form.senderRole = dbrec.agr_sender_role;
		}
		else {
			request.form.senderRole = dbrec.sender_role;
			request.form.senderIdentifier = dbrec.sender_identifier;
		}

		// отправим эти данные для построения запроса в т.н. конвертор на шлюзе внутри RDEV
		var xml = rdev.buildXmlFromJson(request, host); // создадим необходимую обертку в MethodProvider

		// теперь в xml - запрос без подписей вообще - отправим его дальше по бизнес-процессу
		return { success: true, message: "Запрос для СМЭВ успешно построен", data: xml };
	} catch (ex) {
		return { success: false, message: ex, data: null };
	}
}

//создание xml для импорта начисления
function buildxml_charge_import(params) {
	try {
		var importedChargeItems = [];
		var dbrec;
		for (var i = 0; i < params.recordIdList.length; i++) {
			var recId = params.recordIdList[i]; // получили recid текущей записи

			var procedureparams =
			{
				"name": "chargeimport_sel",
				"parameters": [{ "name": "charge_recid", "value": recId, "type": "SysGUID" }]

			};
			dbrec = db.execprocedure(procedureparams);


			if (dbrec == null) {
				event.log("buildxml_charge_import", null, "Из базы вместо записи пришел null", 3, null);
				return { success: false, message: "Из базы вместо записи пришел null", data: null };
			};

			if (dbrec.length <= 0) {
				return { success: false, message: "Не удалось получить данные по начислению " + recId, data: null };
			};


			dbrec = dbrec[0];

			// Если есть роль для отправки
			// то установим её
			if (params.role != null) {
				dbrec.sender_role = params.role;
			}

			var payer_name = "";
			if (dbrec.payer_type == 1 || dbrec.payer_type == 4) {
				if (dbrec.payer_lastname == null && dbrec.payer_lastname == null && dbrec.payer_middlename == null) {
					payer_name = "-";
				} else {
					if (dbrec.payer_lastname != null) payer_name = payer_name + dbrec.payer_lastname + " ";
					if (dbrec.payer_name != null) payer_name = payer_name + dbrec.payer_name + " ";
					if (dbrec.payer_middlename != null) payer_name = payer_name + dbrec.payer_middlename;

					payer_name = payer_name.trim();
				}
			}
			else {
				var payer_name = dbrec.payer_orgname != null ? dbrec.payer_orgname : "-";
			}

			var importChargeItem = {
				"ImportedChargeItemsId": "I_" + dbrec.recid,
				"supplierBillID": dbrec.supplier_bill_id,
				"billDate": dbrec.bill_date,
				"validUntil": dbrec.valid_until != null
					? (dbrec.valid_until.toString("yyyy-MM-dd") + " ").substring(0, 10)
					: null,
				"totalAmount": dbrec.total_amount,
				"purpose": dbrec.purpose,
				"kbk": dbrec.kbk,
				"oktmo": dbrec.oktmo,
				"legalAct": dbrec.legalAct ? dbrec.legalAct : null,
				"noticeTerm": dbrec.noticeTerm ? dbrec.noticeTerm : null,
				"Payee": {
					"name": dbrec.payee_name,
					"inn": dbrec.payee_inn,
					"kpp": dbrec.payee_kpp,
					"ogrn": dbrec.payee_ogrn,
					"accountNumber": dbrec.payee_account_number,
					"nameBank": dbrec.payee_bank_name,
					"bik": dbrec.payee_bik
					//"correspondentBankAccount": dbrec.payee_correspondent_bank_account
				},
				"Payer": {
					"payerIdentifier": dbrec.payeridentifier,
					"payerName": payer_name
				},
				"BudgetIndex": {
					"status": dbrec.payer_status,
					"taxPeriod": dbrec.tax_period != null ? dbrec.tax_period : "0",
					"taxDocNumber": dbrec.tax_docnumber != null ? dbrec.tax_docnumber : "0",
					"paytReason": dbrec.payt_reason,
					"taxDocDate": dbrec.tax_doc_date != null ? dbrec.tax_doc_date : "0"
					//"status": "01",//dbrec.payer_status,
					//"taxPeriod": "0",// dbrec.tax_period,
					//"taxDocNumber": "0" //dbrec.tax_docnumber
				}
			};

			if (dbrec.interaction_through_the_aggregator) {
				importChargeItem["originatorId"] = dbrec.sender_identifier;
			}

			if (dbrec.discount == true) {

				let discountTypeStringValue = "";
				switch (dbrec.discount_type) {
					case 1:
						discountTypeStringValue = "DiscountSize"
						break;
					case 2:
						discountTypeStringValue = "DiscountFixed"
						break;
					case 3:
						discountTypeStringValue = "MultiplierSize"
						break;
				}

				let discountItems = {
					"DiscountType": discountTypeStringValue,
				}

				switch (dbrec.discount_type) {
					// На форме выбрано "Процент"
					case 1:
						discountItems["DiscountSizeValue"] = dbrec.discount_size_value;

						if (dbrec.discount_size_expiry)
							discountItems["DiscountSizeExpiry"] = dbrec.discount_size_expiry.toString("yyyy-MM-dd").substring(0, 10);
						break;

					// На форме выбрано "Сумма"
					case 2:
						discountItems["DiscountFixedValue"] = dbrec.discount_fixed_value;

						if (dbrec.discount_fixed_expiry)
							discountItems["DiscountFixedExpiry"] = dbrec.discount_fixed_expiry.toString("yyyy-MM-dd").substring(0, 10);
						break;

					// На форме выбрано "Коэффициент"
					case 3:
						discountItems["MultiplierSizeValue"] = dbrec.multiplier_size_value.toString().replace(",", ".");

						if (dbrec.multiplier_size_expiry)
							discountItems["MultiplierSizeExpiry"] = dbrec.multiplier_size_expiry.toString("yyyy-MM-dd").substring(0, 10);
						break;
				};

				importChargeItem["Discount"] = discountItems;
			}

			if (dbrec.payee_correspondent_bank_account != null) importChargeItem.Payee.correspondentBankAccount = dbrec.payee_correspondent_bank_account;
			importedChargeItems.push(importChargeItem);
		}

		var request = {
			converterName: converters.import,
			form: {
				"Id": params.packageid != null ? "M_" + params.packageid : "G_" + params.recordIdList[0], // идентификатор всего пакета, при массовом импорте равен айди файла для импорта
				"timestamp": new Date(),
				"ImportedTypeData": importedTypeData.importedCharge,
				"ImportedChargeItems": importedChargeItems
			},
			format: "xml",
			isBuildEnvelope: true,
			isProviderResponse: false, //false,
			isTest: false //params.data.isemulator
		};

		if (dbrec.interaction_through_the_aggregator) {
			request.form.senderRole = dbrec.agr_sender_role;
			request.form.senderIdentifier = dbrec.agr_sender_identifier;
		}
		else {
			request.form.senderRole = dbrec.sender_role;
			request.form.senderIdentifier = dbrec.sender_identifier;
		}

		// отправим эти данные для построения запроса в т.н. конвертор на шлюзе внутри RDEV
		var xml = rdev.buildXmlFromJson(request, host); // создадим необходимую обертку в MethodProvider

		// теперь в xml - запрос без подписей вообще - отправим его дальше по бизнес-процессу
		return { success: true, message: "Запрос для СМЭВ успешно построен", data: xml };
	} catch (ex) {
		return { success: false, message: ex, data: null };
	}
}

//создание xml для уточнения начисления
function buildxml_charge_clarify(params) {
	try {

		var recId = params.recordIdList[0]; // получили recid текущей записи

		var procedureparams =
		{
			"name": "chargeimport_sel",
			"parameters": [{ "name": "charge_recid", "value": recId, "type": "SysGUID" }]

		};
		var dbrec = db.execprocedure(procedureparams);

		if (dbrec == null) {
			event.log("buildxml_charge_import", null, "Из базы вместо записи пришел null", 3, null);
			return { success: false, message: "Из базы вместо записи пришел null", data: null };
		};

		if (dbrec.length <= 0) {
			return { success: false, message: "Не удалось получить данные по начислению " + recId, data: null };
		};

		dbrec = dbrec[0];

		// Если есть роль для отправки
		// то установим её
		if (params.role != null) {
			dbrec.sender_role = params.role;
		}

		//изменения внесенные через форму уточнения
		var bd_changes = JSON.parse(dbrec.clarify_changes);
		bd_changes = bd_changes ? bd_changes : [];

		var changes = [];

		var fieldconverter = {
			bill_date: { "gmpName": "billDate", "field": "4" },
			valid_until: { "gmpName": "validUntil", "field": "1001" },
			chargedata_totalamount: { "gmpName": "totalAmount", "field": "7" },
			chargedata_purpose: { "gmpName": "purpose", "field": "24" },
			chargedata_kbk: { "gmpName": "kbk", "field": "104" },
			chargedata_oktmo: { "gmpName": "oktmo", "field": "105" },
			//chargedata_origin: { "gmpName": "origin", "field": "1002" },
			//Name: { "gmpName": "name", "field": "16" } //в данные получателя через форму уточнения нельзя внести изменения
			//Inn: { "gmpName": "inn", "field": "61" },//в данные получателя через форму уточнения нельзя внести изменения
			//Kpp: { "gmpName": "kpp", "field": "103" },//в данные получателя через форму уточнения нельзя внести изменения
			//Ogrn: { "gmpName": "ogrn", "field": "200" },//в данные получателя через форму уточнения нельзя внести изменения
			payeridentifier: { "gmpName": "payerIdentifier", "field": "201" },
			payer_name: { "gmpName": "payerName", "field": "8" },
			chargedata_status: { "gmpName": "status", "field": "101" },
			chargedata_paytreason: { "gmpName": "paytReason", "field": "106" },
			chargedata_taxperiod: { "gmpName": "taxPeriod", "field": "107" },
			chargedata_taxdocnumber: { "gmpName": "taxDocNumber", "field": "108" },
			chargedata_taxdocdate: { "gmpName": "taxDocDate", "field": "109" },
			//BankName: { "gmpName": "name", "field": "13" },//в данные получателя через форму уточнения нельзя внести изменения
			//Bik: { "gmpName": "bik", "field": "14" },//в данные получателя через форму уточнения нельзя внести изменения
			//CorrespondentBankAccount: { "gmpName": "correspondentBankAccount", "field": "15" },//в данные получателя через форму уточнения нельзя внести изменения
			//AccountNumber: { "gmpName": "accountNumber", "field": "17" } //в данные получателя через форму уточнения нельзя внести изменения
		};


		for (var property in bd_changes) {
			var converter = fieldconverter[property];
			if (converter == null) continue;

			// https://rm.mfc.ru/issues/55814
			const name = converter["gmpName"];
			const value = name === "validUntil"
				? (bd_changes.valid_until.toString("yyyy-MM-dd") + " ").substring(0, 10)
				: bd_changes[property];

			var change = {
				"ChangeValue": [{
					"name": name,
					"value": value
				}],
				"fieldNum": converter["field"]
			}

			changes.push(change);
		}

		function get_discount_change(value, expire, field) {
			var change = {
				"ChangeValue": [{
					"name": "Value",
					"value": value
				},
				{
					"name": "Expiry",
					"value": expire != null ? expire.substring(0, 10) : "0"
				}],
				"fieldNum": field
			}
			return change;
		}

		//отдельно формируем по скидкам т.к другая структура и надо передавать оба поля если есть хотя бы одно
		if (bd_changes["discount_fixed_value"] != null || bd_changes["discount_fixed_expiry"] != null) {
			var change = get_discount_change(bd_changes["discount_fixed_value"], bd_changes["discount_fixed_expiry"], "1020");
			changes.push(change);
		}
		if (bd_changes["discount_size_value"] != null || bd_changes["discount_size_expiry"] != null) {
			var change = get_discount_change(bd_changes["discount_size_value"], bd_changes["discount_size_expiry"], "1021");
			changes.push(change);
		}
		if (bd_changes["multiplier_size_value"] != null || bd_changes["multiplier_size_expiry"] != null) {
			var change = get_discount_change(bd_changes["multiplier_size_value"], bd_changes["multiplier_size_expiry"], "1022");
			changes.push(change);
		}



		var request = {
			converterName: converters.clarify,
			form: {
				"Id": "G_" + recId,
				"timestamp": new Date(),
				"ImportedTypeData": importedTypeData.importedChange,
				"ImportedChangeItems": [
					{
						"ImportedChangeItemsId": "I_" + dbrec.recid,
						"originatorId":
							dbrec.interaction_through_the_aggregator
								? dbrec.sender_identifier
								: null,
						"SupplierBillId": dbrec.supplier_bill_id,
						"Change": changes,
						"ChangeStatus": {
							"meaning": meaning.clarify,
							"Reason": params.data.reason,
							"ChangeDate": new Date()
						}
					}
				]
			},
			format: "xml",
			isBuildEnvelope: true,
			isProviderResponse: false,
			isTest: false
		};

		if (dbrec.interaction_through_the_aggregator) {
			request.form.senderIdentifier = dbrec.agr_sender_identifier;
			request.form.senderRole = dbrec.agr_sender_role;
		}
		else {
			request.form.senderRole = dbrec.sender_role;
			request.form.senderIdentifier = dbrec.sender_identifier;
		}

		// отправим эти данные для построения запроса в т.н. конвертор на шлюзе внутри RDEV
		var xml = rdev.buildXmlFromJson(request, host); // создадим необходимую обертку в MethodProvider

		// теперь в xml - запрос без подписей вообще - отправим его дальше по бизнес-процессу
		return { success: true, message: "Запрос для СМЭВ успешно построен", data: xml };
	} catch (ex) {
		return { success: false, message: ex, data: null };
	}
}

function set_sendimport_state(params) {
	try {
		var recid = params.recordIdList[0];

		set_charge_status(charge_status["Создание начисления"], recid);

		return { success: true, message: "Статус изменен на Создание начисления", data: params.data };
	}
	catch (ex) {
		return { success: false, message: ex, data: null };
	}
}

function set_sendclarify_state(params) {
	try {
		var recid = params.recordIdList[0];

		set_charge_status(charge_status["Уточнение начисления"], recid);

		return { success: true, message: "Статус изменен на Уточнение начисления", data: params.data };
	}
	catch (ex) {
		return { success: false, message: ex, data: null };
	}
}

function set_annul_state(params) {
	try {
		var recid = params.recordIdList[0];

		set_charge_status(charge_status.Аннулировано, recid);

		return { success: true, message: "Статус изменен на Аннулировано", data: params.data };
	}
	catch (ex) {
		return { success: false, message: ex, data: null };
	}
}

function set_deannul_state(params) {
	try {
		var recid = params.recordIdList[0];

		//найти статус который был у этой записи до аннулирования и поставить его
		var history = db.findbyparams("rdev___history", { recname: "charge", record_id: recid }, { reccreated: "desc" });
		var current_status = JSON.parse(history[0].record_data).acknowledgment_status;

		for (i = 1; i < history.length; i++) {
			var history_status = JSON.parse(history[i].record_data).acknowledgment_status;
			if (history_status != current_status) break;
		}

		set_charge_status(history_status, recid);

		return { success: true, message: "Начисление деаннулировано", data: params.data };
	}
	catch (ex) {
		return { success: false, message: ex, data: null };
	}
}

/**
 * Метод отправки запроса в СМЭВ
 * @param {any} params
 */
function sendsmevrequest(params, table_name, record_recid, request_type) {
	try {
		var reqDescriptor = "urn:SendRequest";

		rdev.sendSoapToSmev(params.data, reqDescriptor);	//Возвращается к сожалению null и никакой информации..

		var messageID = rdev.convertXmlToJson(params.data, true).Envelope.Body.SendRequestRequest.SenderProvidedRequestData.MessageID;
		var req = db.findbyparams("rsmev___requests", { requestid: messageID });

		if (table_name != null && record_recid != null) {
			var inser = db.insert("request_history",
				{
					recstate: 1,
					table_name: table_name,
					record_id: record_recid,
					request_id: req ? req[0].recid : _emptyGUID,
					request_smev_id: messageID,
					request_type: request_type
				}
			);
		}

		return { success: true, message: "Запрос успешно отправлен", data: params.data };
	} catch (ex) {
		return { success: false, message: ex, data: null };
	}
}


function set_charge_status(status, recid) {
	try {
		var charge_info = {
			recid: recid,
			recupdated: new Date(),
			acknowledgment_status: status,
			errorcode: null,
			errordescription: null
		};

		db.update("charge", charge_info);
		return { success: true, message: "Статус изменен", data: recid };
	}
	catch (ex) {
		return { success: false, message: ex, data: null };
	}
}

function send_chargeinfo_request(charge_recid, request_type) {

	var procedureparams =
	{
		"name": "chargeimport_sel",
		"parameters": [{ "name": "charge_recid", "value": charge_recid, "type": "SysGUID" }]

	};
	var dbrec = db.execprocedure(procedureparams);

	dbrec = dbrec[0];

	var request = {
		converterName: converters.chargeinfo,
		form: {
			"Id": "I_" + dbrec.recid,
			"timestamp": new Date(),
			"kind": "CHARGESTATUS",
			"requestType": "ChargesConditions",
			"SupplierBillID": [
				dbrec.supplier_bill_id
			]
		},
		format: "xml",
		isBuildEnvelope: true,
		isProviderResponse: false,
		isTest: false
	};

	if (dbrec.interaction_through_the_aggregator) {
		request.form.senderIdentifier = dbrec.agr_sender_identifier;
		request.form.senderRole = dbrec.agr_sender_role;
		request.form.originatorId = dbrec.sender_identifier;
	}
	else {
		request.form.senderRole = dbrec.sender_role;
		request.form.senderIdentifier = dbrec.sender_identifier;
	}

	var xml = rdev.buildXmlFromJson(request, host);

	var params = {
		data: xml
	};

	sendsmevrequest(params, "charge", dbrec.recid, request_type);
}

function qqq(params) {
	try {

		return db.update("refund", { recid: "46488813-8080-49f4-b60f-7f87af897c6a", recname: "ololo", recupdated: new Date(), testc: "sdfsdf" });
	}
	catch (ex) {
		return { success: false, message: ex, data: null };
	}
}


/**
 * Отправка запроса для не сквитированной или предварительно сквитированной записи.
 * @param {any} params
 */
function charge_info_actualize() {
	//придумать как отслеживать записи по которым уже отправен запрос на актуализацию, сейчас будет выбираться одна и та же
	try {
		var procedureparams =
		{
			"name": "find_unacknowledged_or_present",
			"parameters": []
		};

		var record = db.execprocedure(procedureparams);

		if (record && record.length !== 0) {
			//чтобы каждый раз не возвращалась одна и та же запись, при обработке обновим поле recupdated а при выборе отсортируем по recupdated
			//выбран такой вариант чтобы дополнительно не хранить и не обрабатывать допольнительно информацию о том по каким записям уже ушел запрос а по каким нет
			db.update("charge", { recid: record[0].recid, recupdated: new Date() });
			//не отправлять запрос если уже отправили вручную
			if (!record.actualize_status_request == 1){
				send_chargeinfo_request(record[0].recid, _request_type.StatusUpdateChargeShadowTask);
				//обновим запись что бы нельзя было отправить вручную т.к запрос был отправлен в фз
				db.update("charge", { recid: record[0].recid, recupdated: new Date(), actualize_status_request: actualize_status['Актуализация статуса'] });
			}

			return {
				success: true,
				message: null,
				data: "Операция выполнена успешно."
			}
		}
		return {
			success: true,
			message: null,
			data: "Нет подходящих записей для обработки."
		}
	}
	catch (ex) {
		return {
			success: false,
			message: ex,
			data: null
		}
	}
}


function charge_info_actualize_by_record(record) {
	try {
		db.update("charge", { recid: record.recid, recupdated: new Date(), actualize_status_request: actualize_status["Актуализация статуса"] });
		send_chargeinfo_request(record.recid, _request_type.StatusUpdateChargeContextButton);
		return {
			success: true,
			message: 'Запрос отправлен',
			data: "Операция выполнена успешно."
		}
	} catch (ex) {
		return {
			success: false,
			message: ex,
			data: null
		}
	}
}


/**
 * Метод получения первого элемента массива после поиска по регулярному выражению
 * @param {any} params
 */
function find_first_by_pattern(string, pattern) {
	if (string && pattern) {
		var result = string.match(pattern);
		return result ? result[0] : null;
	}

	return null;
}

/**
 * Метод получения второго элемента массива после функции Split
 * @param {any} params
 */
function find_second_after_split(string, splitSymbol) {
	if (string && splitSymbol) {

		var dividedResult = string.split(splitSymbol);

		if (dividedResult && dividedResult.length >= 2) {
			return dividedResult[1];
		}
	}

	return null;
}

function set_export_confirmed(recid) {
	var isExist = db.findbyrecid("rsmev___responses", recid)

	if (isExist) {
		var response_info = {
			recid: recid,
			is_export_confirmed: true,
			export_confirmed: new Date(),
			recupdated: new Date()
		};
	
		db.update("rsmev___responses", response_info);
	}
	
}

/**
 * Отправление запроса повторно после редактирования записи с ошибкой
 * @param {any} params
 */
function resend_request_charge(recid, role) {
	try {
		var recordCharge = db.findbyrecid("charge", recid);
		if (recordCharge && recordCharge.acknowledgment_status == "9") {

			//формируем xml
			var clarify_params = {
				recordIdList: [recordCharge.recid],
				data: {
					reason: "уточнение начисления"
				},
				role: role
			};
			var xml = buildxml_charge_clarify(clarify_params);
			if (xml.success == false) {
				return badResponse("Ошибка построения xml " + xml.message);
			}

			//отправляем
			var send = sendsmevrequest(xml, "charge", recordCharge.recid, _request_type.ClarifyChargeAfterError);
			if (send.success == false) {
				return badResponse("Ошибка отправки запроса в СМЭВ " + send.message);
			}

			//ставим статус
			var state = set_charge_status(charge_status["Уточнение начисления"], recid); // set_send_state(clarify_params);
			if (state.success == false) {
				return badResponse("Ошибка обновления статуса начисления " + state.message);
			}

			return {
				success: true,
				message: "Запись отправлена",
				closeForm: true,
				showMessage: false,
				data: "Запись отправлена"
			};
		}
	}
	catch (ex) {
		return {
			success: false,
			message: ex,
			data: null
		}
	}

	return {
		success: true,
		message: "Отредактированных записей с ошибками не было найдено.",
		data: "Отредактированных записей с ошибками не было найдено."
	}
}

function parse_importrefunds_response(record) {
	try {
		var responseprimarycontent = rdev.convertXmlToJson(record.responseprimarycontent, true);

		var entityid = responseprimarycontent["ImportRefundsResponse"]["ImportProtocol"]["@entityID"];
		if (entityid != null) entityid = entityid.substr(2);

		//успех импорта
		if (responseprimarycontent["ImportRefundsResponse"]["ImportProtocol"]["@code"] == "0") {

			var request = db.findbyparams("rsmev___requests", { requestid: record.originalmessageid });
			var request = request[0].requestbeforesign;

			//выясняем какой это был запрос - импорт, аннулирование, деаннулирование
			var importedRefund = find_first_by_pattern(request, /ImportedRefund/);
			//импорт
			if (importedRefund != null) {
				set_refund_status(refund_status.Импортировано, entityid);
			}

			var importedChange = find_first_by_pattern(request, /ImportedChange/);
			//аннул деаннул
			if (importedChange != null) {
				var request_meaning = find_first_by_pattern(request, /Meaning>\d</);
				if (request_meaning != null) {
					request_meaning = request_meaning.substring(request_meaning.length - 2, request_meaning.length - 1);
				}

				//аннул
				if (request_meaning == "3") {
					set_refund_status(refund_status.Аннулировано, entityid);
				}

				//деаннул
				if (request_meaning == "4") {
					set_refund_status(refund_status.Импортировано, entityid);
				}
			}



			//необходимо актуализировать данные в реестрах платежей и начислений, для этого отправить запрос информации о связанных платеже и начислении
			var refund_record = db.findbyrecid("refund", entityid);
			var params = { recid: refund_record.payment };
			payment_actualize(params);

			var payment_record = db.findbyrecid("payment", refund_record.payment);
			var charge_record = db.findbyparams("charge", { supplier_bill_id: payment_record.supplier_bill_id });
			send_chargeinfo_request(charge_record[0].recid, _request_type.StatusUpdateCharge);
		}
		else {
			var errorcode = responseprimarycontent["ImportRefundsResponse"]["ImportProtocol"]["@code"];
			var errordescription = responseprimarycontent["ImportRefundsResponse"]["ImportProtocol"]["@description"];
			set_refund_status(refund_status.Ошибка, entityid, errorcode, errordescription);

		}

		return { success: true };
	}
	catch (ex) {
		return { success: false, message: ex.message };
	}
}

function parse_importcharges_response(record) {

	var set_error_charge = function (status) {
		var charge_info = {
			recid: entityid,
			acknowledgment_status: status ? status : charge_status.Ошибка,
			errorcode: responseprimarycontent["ImportChargesResponse"]["ImportProtocol"]["@code"],
			errordescription: responseprimarycontent["ImportChargesResponse"]["ImportProtocol"]["@description"] + " MessageID=" + record.originalmessageid,
			recupdated: new Date()
		};

		db.update("charge", charge_info);
	};

	var set_history_comment = function (record_db, comment) {
		if (record_db != null) {
			db.update("request_history",
				{
					recid: record_db[0].recid,
					recupdated: new Date(),
					recdescription: comment
				}
			);
		}
	};

	try {
		var responseprimarycontent = rdev.convertXmlToJson(record.responseprimarycontent, true);
		//если ImportProtocol массив то это ответ по массовому импорту. ВОПРОС!! если ответ на запрос по массовому ипорту с одним начислением то тоже массив будет?
		if (Array.isArray(responseprimarycontent["ImportChargesResponse"]["ImportProtocol"])) {
			var success = 0;
			for (var i = 0; i < responseprimarycontent["ImportChargesResponse"]["ImportProtocol"].length; i++) {
				var item = responseprimarycontent["ImportChargesResponse"]["ImportProtocol"][i];
				var charge_id = item["@entityID"].substr(2);
				if (item["@code"] == "0") {
					success++;
					db.update("charge", { recid: charge_id, acknowledgment_status: charge_status["Не сквитировано"], recupdated: new Date(), actualize_status_request: actualize_status["Ответ получен"] });
				} else {

					db.update("charge", { recid: charge_id, errorcode: item["@code"], errordescription: item["@description"], acknowledgment_status: charge_status.Ошибка, recupdated: new Date() });
				}
			}
			var import_result = "Успешно импортировано " + success + " из " + responseprimarycontent["ImportChargesResponse"]["ImportProtocol"].length + " начислений";
			var sysfiles_record = db.findbyrecid("rdev___sysfiles", responseprimarycontent["ImportChargesResponse"]["@RqId"].substr(2));
			db.update("charge_import", { recid: sysfiles_record.entityid, result: import_result, recupdated: new Date() });
		} else {
			var entityid = responseprimarycontent["ImportChargesResponse"]["ImportProtocol"]["@entityID"];
			if (entityid != null) entityid = entityid.substr(2);

			//ищем по originalMessageId сам запрос
			var request_db = db.findbyparams("rsmev___requests", { requestid: record.originalmessageid });

			if (responseprimarycontent["ImportChargesResponse"]["ImportProtocol"]["@code"] == "0") {

				var request = request_db[0].requestbeforesign;

				//выясняем какой это был запрос - импорт, аннулирование, деаннулирование, уточнение
				var request_type;

				var importedCharge = find_first_by_pattern(request, /ImportedCharge/);
				if (importedCharge != null) request_type = importedTypeData.importedCharge;

				var importedChange = find_first_by_pattern(request, /ImportedChange/);
				if (importedChange != null) request_type = importedTypeData.importedChange;

				//если запрос на изменение то выясним тип запроса - уточнение, анн, деанн
				if (request_type == importedTypeData.importedChange) {

					var request_meaning = find_first_by_pattern(request, /Meaning>\d</);
					if (request_meaning != null) {
						request_meaning = request_meaning.substring(request_meaning.length - 2, request_meaning.length - 1);
					}


					if (request_meaning == meaning.annul) {
						set_charge_status(charge_status.Аннулировано, entityid);
					}
					if (request_meaning == meaning.deannul) {
						//необходимо отправить запрос информации о начислении, для актуализации статуса начисления. После этого начислению присваивается полученный из ГИС ГМП статус
						send_chargeinfo_request(entityid, _request_type.StatusUpdateCharge);

					}
					if (request_meaning == meaning.clarify) {

						//необходимо отправить запрос информации о начислении, для актуализации статуса начисления. После этого начислению присваивается полученный из ГИС ГМП статус
						send_chargeinfo_request(entityid, _request_type.StatusUpdateCharge);
					}
				}

				//если запрос на импорт
				if (request_type == importedTypeData.importedCharge) {
					//при успешном импорте ставим статус Не сквитировано
					set_charge_status(charge_status["Не сквитировано"], entityid);
					db.update("charge", {recid: entityid, recupdated: new Date(), actualize_status_request: actualize_status["Ответ получен"] });
				}
			} else {
				/* Обработка ситуации если пришла ошибка ГИС ГМП ФК, которая заключена в SenderProvidedResponseDataRequestStatus */
				var code_tmp = null;
				try {
					code_tmp = responseprimarycontent["SenderProvidedResponseDataRequestStatus"]["StatusCode"]
				} catch (ex) { }

				var code = code_tmp == null ? responseprimarycontent["ImportChargesResponse"]["ImportProtocol"]["@code"] : code_tmp;
				var history_record_db = db.findbyparams("request_history", { request_id: request_db[0].recid });

				// Создание начисления?
				var importedCharge = find_first_by_pattern(request_db[0].requestbeforesign, /ImportedCharge/);
				if (importedCharge != null) request_type = importedTypeData.importedCharge;

				// Уточнение начисления?
				var importedChange = find_first_by_pattern(request_db[0].requestbeforesign, /ImportedChange/);
				if (importedChange != null) request_type = importedTypeData.importedChange;

				//если запрос на изменение то выясним тип запроса - уточнение, анн, деанн
				if (request_type == importedTypeData.importedChange) {
					var request_meaning = find_first_by_pattern(request_db[0].requestbeforesign, /Meaning>\d</);
					if (request_meaning != null) {
						request_meaning = request_meaning.substring(request_meaning.length - 2, request_meaning.length - 1);
					}
				}

				switch (code) {
					// Системный сбой. Разовый отказ ГИС ГМП
					case "1":
						// Внутренняя ошибка ГИС ГМП ФК, отправляем повторно
						switch (request_type) {
							case importedTypeData.importedCharge:
								charge_send({ recid: entityid });
								break;

							case importedTypeData.importedChange:
								var func_params = {
									selectedRecords: [{ recid: entityid }],
									countOfSelectedRecords: 1,
									data: { reason: "Внесение корректировок в выставленное начисление" }
								}
								var clarify_result = charge_clarify_send_server(func_params);
								if (!clarify_result.success) {
									throw clarify_result.message;
								}
								break;

							default:
								set_error_charge();
								break;
						}

						break;

					// Предоставляемые участником данные уже присутствуют в системе
					case "5":
						// Убеждаемся что УИН уникальный (вызов процедуры, которая вернет {is_unique_uin, is_create_response, uin})
						// P.S.:функция всегда вернет 1 строку
						var procedureparams =
						{
							"name": "find_uin_and_response_exists",
							"parameters": [
								{ "name": "charge_id", "value": entityid, "type": "SysGUID" },
								{ "name": "request_type_input", "value": _request_type.NewCharge, "type": "SysString" }
							]
						};
						var db_result = db.execprocedure(procedureparams);

						//Если УИН уникальный
						if (db_result[0].is_unique_uin) {
							//Если уже были запросы на создание, не переводим в ошибочные, а пишем комментарий в истории запросов
							if (db_result[0].is_create_response) {
								set_history_comment(history_record_db, "Повторный запрос на импорт записи реестра");
								db.update("charge", { recid: entityid, acknowledgment_status: charge_status["Не сквитировано"], actualize_status_request: actualize_status["Ответ получен"] });
							}
							// Запросов не было - начисление в ошибку и комментарий в истории запросов
							else {
								set_error_charge();
								set_history_comment(history_record_db, "Не найден успешный запрос на импорт записи реестра");
							}
						}
						// УИН не уникален, пишем при это в истории запросов, в начисление в ошибку
						else {
							set_history_comment(history_record_db, "В АРМ ГИС ГМП уже есть запись реестра с таким УИН");
							set_error_charge(charge_status["Ошибка создания"]);
						}
						break;

					// Не найдено исходное извещение
					case "7":
						switch (request_meaning) {
							//	Запрос на уточнение
							//	Пишем в истории запросов комент и устанавливаем статус начислению
							case meaning.clarify:
								set_history_comment(history_record_db, "Начисление отсутствует в ГИС ГМП ФК, либо было ранее аннулировано");
								set_error_charge(charge_status["Ошибка уточнения"]);
								break;

							//	Запрос на анулирование или деанулирование
							//	Пишем в истории запросов комент и отправляем запрос информации
							case meaning.annul:
							case meaning.deannul:
								set_history_comment(history_record_db, "Начисление отсутствует в ГИС ГМП ФК, либо было ранее аннулировано. Будет отправлен запрос информации");
								send_chargeinfo_request(entityid, _request_type.StatusUpdateCharge);
								break;

							default:
								set_error_charge(charge_status["Ошибка"]);
								break;
						}
						break;

					//	Недопустимый формат изменяемых полей
					case "111":
						set_error_charge(charge_status["Ошибка уточнения"]);
						break;

					// Отсутствует факт принудительного квитирования начисления и факта оплаты по инициативе АН/ГАН
					case "325":
					// Отсутствует факт принудительного квитирования начисления с отсутствующим в ГИС ГМП извещением о приеме к исполнению рапоряжения
					case "326":
						// Начисление не переводить в статус «Ошибка квитирования». Проставить статус «Не сквитировано»
						db.update("charge", { recid: entityid, acknowledgment_status: charge_status["Не сквитировано"], actualize_status_request: actualize_status["Ответ получен"]});
						break;

					default:
						var record_status = charge_status["Ошибка"];
						if (request_type == importedTypeData.importedCharge) {
							record_status = charge_status["Ошибка создания"];
						}
						else {
							switch (request_meaning) {
								case meaning.annul:
									record_status = charge_status["Ошибка анулирования"];
									break;
								case meaning.clarify:
									record_status = charge_status["Ошибка уточнения"];
									break;
								case meaning.deannul:
									record_status = charge_status["Ошибка деанулирования"];
									break;
							}
						}
						set_error_charge(record_status);
						break;
				}
			}
		}

		return { success: true };
	}
	catch (ex) {
		return { success: false, message: ex.message };
	}
}

function parse_forcedacknowledgement_response(record) {
	try {
		var responseprimarycontent = rdev.convertXmlToJson(record.responseprimarycontent, true);

		//если есть done true то запрашиваем актуализацию статуса
		var done = responseprimarycontent["ForcedAcknowledgementResponse"]["Done"];

		if (done != null && done == "true") {

			var recid = responseprimarycontent["ForcedAcknowledgementResponse"]["@RqId"].substr(2);
			send_chargeinfo_request(recid, _request_type.StatusUpdateCharge);

		} else {

			var supplierBillID = responseprimarycontent["ForcedAcknowledgementResponse"]["Quittance"]["@supplierBillID"];
			//получаем начисление по supplierBillID
			var charge_record = db.findbyparams("charge", { supplier_bill_id: supplierBillID });

			//считаем что пришедший ответ это уже успех, ставим статус начислению
			var paymentId = responseprimarycontent["ForcedAcknowledgementResponse"]["Quittance"]["@paymentId"];

			if (paymentId == "PaymentNotLoaded") {
				//с отсутствующим платежом
				var charge_info = {
					recid: charge_record[0].recid,
					recupdated: new Date(),
					acknowledgment_status: charge_status["Сквитировано с отсутствующим платежом"],
					errorcode: null,
					errordescription: null,
					amounttopay: responseprimarycontent["ForcedAcknowledgementResponse"]["Quittance"]["@balance"] / 100
				};
				db.update("charge", charge_info);
			} else {
				//с платежом
				var charge_info = {
					recid: charge_record[0].recid,
					recupdated: new Date(),
					acknowledgment_status: charge_status["Принудительно сквитировано"],
					errorcode: null,
					errordescription: null,
					amounttopay: responseprimarycontent["ForcedAcknowledgementResponse"]["Quittance"]["@balance"] / 100
				};
				db.update("charge", charge_info);

				var quittance = responseprimarycontent.ForcedAcknowledgementResponse["Quittance"];

				if (Array.isArray(quittance)) {
					quittance.forEach(function (el) {
						var payment_record = db.findbyparams("payment", { paymentid: el["@paymentId"] });
						db.update("payment", { recid: payment_record[0].recid, recupdated: new Date(), supplier_bill_id: supplierBillID });
					});
				} else {
					var payment_record = db.findbyparams("payment", { paymentid: quittance["@paymentId"] });
					db.update("payment", { recid: payment_record[0].recid, recupdated: new Date(), supplier_bill_id: supplierBillID });
				}
			}
		}

		return { success: true };
	}
	catch (ex) {
		return { success: false, message: ex.message };
	}
}

function parse_exportpayments_response(record) {
	try {
		var response = rdev.convertXmlToJson(record.responseprimarycontent, true);
		response = response["ExportPaymentsResponse"];
		var payment_data = {};
		var RqId = response["@RqId"].substr(2);
		var hasMore = response["@hasMore"];
		var paymentInfo = response["PaymentInfo"];

		if (Array.isArray(paymentInfo)) {
			var paymentInfo = response["PaymentInfo"];
			for (let i = 0; i < paymentInfo.length; i++) {
				payment_data = {};
				payment_data.id = parse_string_to_guid(response["@Id"]);
				payment_data.recipientidentifier = response["@recipientIdentifier"];
				get_data_payment(paymentInfo[i], payment_data);
			}
		}
		else {
			payment_data.id = parse_string_to_guid(response["@Id"]);
			payment_data.recipientidentifier = response["@recipientIdentifier"];
			get_data_payment(paymentInfo, payment_data);
		}

		var requestRecord = db.findbyrecid("rsmev___requests", record.requestid);
		var exportRec = db.findbyrecid("payment_export", RqId);
		var requestData = JSON.parse(requestRecord.requestincoming);

		if (exportRec != null) {
			var procedureparams =
			{
				"name": "link_file",
				"parameters": [
					{ "name": "entityid_old", "value": record.recid, "type": "SysGUID" },
					{ "name": "entityid_new", "value": RqId, "type": "SysGUID" },
					{ "name": "columnname_in", "value": "data", "type": "SysString" },
					{ "name": "recname_in", "value": "page" + requestData.form.pageNumber + ".pdf", "type": "SysString" },
					{ "name": "entityname_in", "value": "payment_export", "type": "SysString" }
				]
			};
			db.execprocedure(procedureparams);
		}

		if (hasMore == "true") {
			if (requestRecord) {
				var requestData = JSON.parse(requestRecord.requestincoming);
				requestData.form.pageNumber = requestData.form.pageNumber + 1;
				sendtosmevgate(JSON.stringify(requestData));
			}
		}
		else {
			if (exportRec != null) {
				db.update("payment_export", {
					recid: exportRec.recid,
					recupdated: new Date(),
					status_request: payment_conditions.ОтветПолучен
				});
			}
		}


		return { success: true };
	}
	catch (ex) {
		return { success: false, message: ex.message };
	}
}

// Функция очищает строку от мусора и возвращает чистый гуид
function parse_string_to_guid(str) {
	var old_str = str;
	try {
		if (!is_guid(str)) {
			// Разбиваем по знаку "_"
			str = str.split('_');
			// Если подчеркиваний нет, то возвращаем весь guid иначе последнюю строку после "_".
			str = str.length == 1 ? str[0] : str[str.length - 1];
			if (!is_guid(str)) {
				// Очищаем первый символ "I"
				str = str.substr(1);
				if (!is_guid(str)) {
					// Если не получилось очистить, возвращаем то что получили
					str = old_str;
				}
			}
		}
	} catch (ex) {
		throw new Error("Ошибка response.id начисления");
	}
	return str;
}

// Проверяем является ли строка guid
function is_guid(str) {
	var isStr = str.match('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$');
	return isStr === null ? false : true;
}

function parse_exportcharges_response(record) {
	try {
		var responseprimarycontent = rdev.convertXmlToJson(record.responseprimarycontent, true);
		var status = null;

		if (!Array.isArray(responseprimarycontent["ExportChargesResponse"]["ChargeInfo"])){
			if (responseprimarycontent["ExportChargesResponse"]["ChargeInfo"]["ChangeStatusInfo"]["Meaning"] == meaning.annul) {
				status = charge_status["Аннулировано"];
			}
			else {
				status = responseprimarycontent["ExportChargesResponse"]["ChargeInfo"]["@acknowledgmentStatus"];
			}
		}

		// Получение подстроки с recid по регулярному выражению.
		var recid = responseprimarycontent["ExportChargesResponse"]["@RqId"].substr(2);
		const hasMore = responseprimarycontent["@hasMore"];

		var amountToPay = responseprimarycontent["ExportChargesResponse"]["ChargeInfo"]["@amountToPay"];

		var charge_info = {
			recid: recid,
			acknowledgment_status: status,
			amounttopay: amountToPay / 100,
			recupdated: new Date(),
			actualize_status_request: actualize_status["Ответ получен"]
		};

		//находим запрос на который получен этот ответ
		var request = db.findbyparams("rsmev___requests", { requestid: record.originalmessageid });
		if (request) {
			//	Находим в истории запросов запрос
			var history_db = db.findbyparams("request_history", { request_id: request[0].recid });
			if (history_db) {
				//	Если запрос был сформирован ФЗ
				if (history_db[0].request_type == _request_type.StatusUpdateChargeShadowTask) {
					var charge_db = db.findbyrecid("charge", recid);

					db.update("charge", {recid: recid, recupdated: new Date(), actualize_status_request: actualize_status["Ответ получен"]})
					//	Если статус записи уже не 2 (Предварительно сквитировано) или 3 (Не сквитировано), то игнорируем этот ответ
					//	https://rm.mfc.ru/issues/52566
					if (charge_db.acknowledgment_status != charge_status["Предварительно сквитировано"] && charge_db.acknowledgment_status != charge_status["Не сквитировано"]) {
						return { success: true };
					}
				}
			}

			const exportRec = db.findbyrecid("charge_export", recid);
			if (exportRec != null) {
				const requestData = JSON.parse(request[0].requestincoming);
				var procedureparams =
				{
					"name": "link_file",
					"parameters": [
						{ "name": "entityid_old", "value": record.recid, "type": "SysGUID" },
						{ "name": "entityid_new", "value": recid, "type": "SysGUID" },
						{ "name": "columnname_in", "value": "data", "type": "SysString" },
						{ "name": "recname_in", "value": "page" + requestData.form.pageNumber + ".pdf", "type": "SysString" },
						{ "name": "entityname_in", "value": "charge_export", "type": "SysString" }
					]
				};
				db.execprocedure(procedureparams);
			}

			if (hasMore == "true") {
				if (requestRecord) {
					const data = JSON.parse(requestRecord.requestincoming);
					data.form.pageNumber = data.form.pageNumber + 1;
					sendtosmevgate(JSON.stringify(data));
				}
			}
			else {
				if (exportRec != null) {
					db.update("charge_export", {
						recid: exportRec.recid,
						recupdated: new Date(),
						status_request: payment_conditions.ОтветПолучен
					});
				}
			}

		}

		db.update("charge", charge_info);

		return { success: true };
	}
	catch (ex) {
		return { success: false, message: ex.message };
	}
}

function parse_noroot_response(record) {
	try {
		//парсим весь ответ т.к в responseprimarycontent может быть иная структура, неожиданная
		var responsetext = rdev.convertXmlToJson(record.responsetext, true);
		var senderProvidedResponseData = responsetext.Envelope.Body.GetResponseResponse.ResponseMessage.Response.SenderProvidedResponseData;
		var error_code;
		var error_description;

		//находим запрос на который получен этот ответ
		var request = db.findbyparams("rsmev___requests", { requestid: record.originalmessageid });

		//проверка на SmevFault
		if (senderProvidedResponseData["AsyncProcessingStatus"] != null && senderProvidedResponseData.AsyncProcessingStatus.SmevFault != null) {
			//достаем код ошибки
			error_code = senderProvidedResponseData.AsyncProcessingStatus.SmevFault.Code["#text"] != null ? senderProvidedResponseData.AsyncProcessingStatus.SmevFault.Code["#text"] : senderProvidedResponseData.AsyncProcessingStatus.SmevFault.Code;
			error_description = senderProvidedResponseData.AsyncProcessingStatus.SmevFault.Description["#text"] != null ? senderProvidedResponseData.AsyncProcessingStatus.SmevFault.Description["#text"] : senderProvidedResponseData.AsyncProcessingStatus.SmevFault.Description;
		}

		//проверка на RequestStatus
		if (senderProvidedResponseData["RequestStatus"] != null) {
			//достаем код ошибки
			error_code = senderProvidedResponseData.RequestStatus.StatusCode["#text"] != null ? senderProvidedResponseData.RequestStatus.StatusCode["#text"] : senderProvidedResponseData.RequestStatus.StatusCode;
			error_description = senderProvidedResponseData.RequestStatus.StatusDescription["#text"] != null ? senderProvidedResponseData.RequestStatus.StatusDescription["#text"] : senderProvidedResponseData.RequestStatus.StatusDescription;
		}

		//проверка на RequestRejected
		if (senderProvidedResponseData["RequestRejected"] != null) {
			//достаем код ошибки
			error_code = senderProvidedResponseData.RequestRejected.RejectionReasonCode["#text"] != null ? senderProvidedResponseData.RequestRejected.RejectionReasonCode["#text"] : senderProvidedResponseData.RequestRejected.RejectionReasonCode;
			error_description = senderProvidedResponseData.RequestRejected.RejectionReasonDescription["#text"] != null ? senderProvidedResponseData.RequestRejected.RejectionReasonDescription["#text"] : senderProvidedResponseData.RequestRejected.RejectionReasonDescription;
		}
		var result = {
			success: true
		}

		if (request != null && request.length > 0 && (error_code != null || error_description != null)) {
			if (request[0].rootelement == "ImportChargesRequest" || request[0].rootelement == "ExportChargesRequest" || request[0].rootelement == "ForcedAcknowledgementRequest") {
				parse_charge_error_response(request[0].requestbeforesign, record, error_code, error_description, request[0].rootelement);
			}

			if (request[0].rootelement == "ExportPaymentsRequest") {
				result = parse_payment_error_response(request[0].requestbeforesign, record, error_code, error_description);
			}

			if (request[0].rootelement == "ImportRefundsRequest") {
				 parse_refund_error_response(request[0].requestbeforesign, error_code, error_description);
			}

			if (request[0].rootelement == "ExportIncomesRequest") {
				result = parse_income_error_response(record);
			}
		}

		return result;
	}
	catch (ex) {
		return { success: false, message: ex.message };
	}
}

function parse_income_error_response(responseRecord){
	
	// иногда шлюз не успевает обновить запись в БД и requestid равен null, пропускаем обработку
	if (!responseRecord.requestid){
		return {
			success: 'pass', 
		}
	}
	
	const requestRecord = db.findbyrecid("rsmev___requests", responseRecord.requestid);
	const requestData = JSON.parse(requestRecord.requestincoming)
	const RqId = requestData.form.Id.substr(2);

	const exportRec = db.findbyrecid("income_request", RqId);
	if (exportRec != null){
		const procedureparams =
		{
			"name": "link_file",
			"parameters": [
				{ "name": "entityid_old", "value": responseRecord.recid, "type": "SysGUID" },
				{ "name": "entityid_new", "value": RqId, "type": "SysGUID" },
				{ "name": "columnname_in", "value": "income_request_files", "type": "SysString" },
				{ "name": "recname_in", "value": "page" + requestData.form.pageNumber + ".pdf", "type": "SysString" },
				{ "name": "entityname_in", "value": "income_request", "type": "SysString" }
			]
		};
		db.execprocedure(procedureparams);
		db.update("income_request", { recid: exportRec.recid, recupdated: new Date(), errordescription: "Данные отсутствуют", income_request_status: _income_status_enum["Ответ получен"] });
	}

	return { success: true};
}

function parse_charge_error_response(request, response, errorcode, errordescription, rootelement) {

	var set_status_charge = function (entityid, status, errorcode, errordescription) {
		var charge_info = {
			recid: entityid,
			acknowledgment_status: status ? status : charge_status.Ошибка,
			errorcode: errorcode,
			errordescription: errordescription,
			recupdated: new Date()
		};
		if (status == charge_status["Не сквитировано"] || status == charge_status["Предварительно сквитировано"]){
			charge_info.actualize_status_request = actualize_status['Ответ получен']
		}

		db.update("charge", charge_info);
	};

	// https://rm.mfc.ru/issues/52586 - Если пришел ответ что начисление уже было ранее сквитировано с отсутствующим платежом, не переводить в ошибочный статус
	var is_quotas_with_missing_payment = (errorcode == 322);

	var json_request = rdev.convertXmlToJson(request, true);
	// Задаем идентификатор, на случай ошибки при парсинге
	var id = "0";
	try {
		//ищем в запросе Id, если первая М то массовый импорт
		id = json_request.Envelope.Body.SendRequestRequest.SenderProvidedRequestData.MessagePrimaryContent.ImportChargesRequest["@Id"];
	} catch (ex) {
		// Если произошла ошибка, то потому что тип запроса не равен ImportChargesRequest
	}

	if (rootelement == "ExportChargesRequest") {
		//экспорт платежей по условиям через экспорт платежей
		let recid_e = find_first_by_pattern(request, /Id=\"G_[0-9a-z-]+\"/);
		if (recid_e != null) {
			recid_e = find_second_after_split(recid_e, '"');
			recid_e = recid_e.substr(2);

			if (errorcode == "NO_DATA"){
				db.update("charge_export", {
					recid: recid_e,
					status_request: payment_conditions.ОтветПолучен,
					errorcode: errorcode,
					errordescription: errordescription,
					recupdated: new Date()
				});
					var procedureparams =
					{
						"name": "link_file",
						"parameters": [
							{ "name": "entityid_old", "value": response.recid, "type": "SysGUID" },
							{ "name": "entityid_new", "value": recid_e, "type": "SysGUID" },
							{ "name": "columnname_in", "value": "data", "type": "SysString" },
							{ "name": "recname_in", "value": "Report"  + ".pdf", "type": "SysString" },
							{ "name": "entityname_in", "value": "charge_export", "type": "SysString" }
						]
					};
					db.execprocedure(procedureparams);
			} else {
				db.update("charge_export", {
					recid: recid_e,
					status_request: payment_conditions.Ошибка,
					errorcode: errorcode,
					errordescription: errordescription,
					recupdated: new Date()
				});
			}		
		}	
	}

	//массовый импорт
	if (id[0] == "M") {
		var charges = json_request.Envelope.Body.SendRequestRequest.SenderProvidedRequestData.MessagePrimaryContent.ImportChargesRequest.ChargesPackage.ImportedCharge;
		var packageid = id.substr(2);
		for (var i = 0; i < charges.length; i++) {
			var charge_recid = charges[i]["@Id"].substr(2);
			//сохраняем ошибку 
			var charge_info = {
				recid: charge_recid,
				acknowledgment_status: charge_status["Ошибка создания"],
				errorcode: errorcode,
				errordescription: errordescription + " MessageID=" + response.originalmessageid,
				recupdated: new Date()
			};

			db.update("charge", charge_info);
		}
		var sysfiles_record = db.findbyrecid("rdev___sysfiles", packageid);
		db.update("charge_import", { recid: sysfiles_record.entityid, result: "Ошибка импорта", status: charge_import_status.Ошибка, recupdated: new Date() });
	}
	else {
		// из запроса вытаскиваем id начисления
		var recid = find_first_by_pattern(request, /Id=\"I_[0-9a-z-]+\"/);

		if (recid != null) {
			recid = find_second_after_split(recid, '"');
			recid = recid.substr(2);

			

			if (rootelement == "ForcedAcknowledgementRequest") {
				switch (errorcode.toString()) {
					case "7":
						send_chargeinfo_request(entityid, _request_type.StatusUpdateCharge);
						return;
						break;

					case "322":
						is_quotas_with_missing_payment = true;
						set_status_charge(recid, charge_status["Сквитировано с отсутствующим платежом"]);
						return;
						break;

					case "325":
						set_status_charge(recid, charge_status["Не сквитировано"]);
						var charge_db = db.findbyrecid("charge", recid);
						var payments_db = db.findbyparams("payment", { supplier_bill_id: charge_db.supplier_bill_id });
						if (payments_db) {
							for (let i = 0; i < payments_db.length; i++) {
								db.update("payment", { recid: payments_db[i].recid, recupdated: new Date(), supplier_bill_id: null });
							}
						}
						return;
						break;

					case "326":
						set_status_charge(recid, charge_status["Не сквитировано"]);
						return;
						break;
				}
			}




			//сохраняем ошибку 
			var charge_info = {
				recid: recid,
				errorcode:
					is_quotas_with_missing_payment === false
						? errorcode
						: null,
				errordescription:
					is_quotas_with_missing_payment === false
						? (errordescription + " MessageID=" + response.originalmessageid)
						: null,
				recupdated: new Date()
			};
			
			if (json_request.Envelope.Body.SendRequestRequest.SenderProvidedRequestData.MessagePrimaryContent.ImportChargesRequest.ChargesPackage.ImportedCharge) {
				charge_info.acknowledgment_status = charge_status["Ошибка создания"];
			}
			else if (json_request.Envelope.Body.SendRequestRequest.SenderProvidedRequestData.MessagePrimaryContent.ImportChargesRequest.ChargesPackage.ImportedChange) {
				charge_info.acknowledgment_status = charge_status["Ошибка уточнения"];
			}
			else if (rootelement == "ForcedAcknowledgementRequest") {
				charge_info.acknowledgment_status = charge_status["Ошибка квитирования"];
			}
			else {
				charge_info.acknowledgment_status = charge_status["Ошибка"];
			}

			db.update("charge", charge_info);
		}
	}
}

function parse_payment_error_response(request, response, errorcode, errordescription) {
	//если в запросе есть ExportPaymentsRequest а тут в ответе <ns2:RejectionReasonCode>NO_DATA</ns2:RejectionReasonCode> то это типа пустой ответ по платежам а не ошибка

	// иногда шлюз не успевает обновить запись в БД и requestid равен null, пропускаем обработку
	if (!response.requestid){
		return {
			success: 'pass', 
		}
	}

	if (errorcode == "NO_DATA") {
		var requestRecord = db.findbyrecid("rsmev___requests", response.requestid);
		var requestData = JSON.parse(requestRecord.requestincoming)
		var RqId = requestData.form.Id.substr(2);
		var exportRec = db.findbyrecid("payment_export", RqId);

		if (exportRec != null) {
			var procedureparams =
			{
				"name": "link_file",
				"parameters": [
					{ "name": "entityid_old", "value": response.recid, "type": "SysGUID" },
					{ "name": "entityid_new", "value": RqId, "type": "SysGUID" },
					{ "name": "columnname_in", "value": "data", "type": "SysString" },
					{ "name": "recname_in", "value": "page" + requestData.form.pageNumber + ".pdf", "type": "SysString" },
					{ "name": "entityname_in", "value": "payment_export", "type": "SysString" }
				]
			};
			db.execprocedure(procedureparams);
		}
	}
	//запрос актуализации по платежу из таблицы
	var recid_i = find_first_by_pattern(request, /Id=\"I_[0-9a-z-]+\"/);
	if (recid_i != null) {
		recid_i = find_second_after_split(recid_i, '"');
		recid_i = recid_i.substr(2);

		if (errorcode == "NO_DATA") {
			db.update("payment", { recid: recid_i, recupdated: new Date(), recdescription: "Данные актуальны по состоянию на " + new Date });
		} else {
			db.update("payment", { recid: recid_i, recupdated: new Date(), recdescription: "Получена ошибка при уточнении данных платежа: " + errordescription });
		}
	}

	//экспорт платежей по условиям через экспорт платежей
	var recid_e = find_first_by_pattern(request, /Id=\"E_[0-9a-z-]+\"/);
	if (recid_e != null) {
		recid_e = find_second_after_split(recid_e, '"');
		recid_e = recid_e.substr(2);

		if (errorcode == "NO_DATA") {
			db.update("payment_export", { recid: recid_e, recupdated: new Date(), recdescription: "Данные актуальны по состоянию на " + new Date, status_request: payment_conditions.ОтветПолучен });
		} else {
			db.update("payment_export", {
				recid: recid_e,
				recupdated: new Date(),
				errordescription: errordescription + " MessageID=" + response.originalmessageid,
				errorcode: errorcode,
				status_request: payment_conditions.Ошибка
			});
		}
	}

	//актуализация платежей через фоновую по актуализации платежей send_orginfo_request
	var recid_g = find_first_by_pattern(request, /Id=\"G_[0-9a-z-]+\"/);
	return {
		success: true
	}
}

function parse_refund_error_response(request, errorcode, errordescription) {
	//находим в запросе ид возврата
	var recid_i = find_first_by_pattern(request, /Id=\"I_[0-9a-z-]+\"/);
	if (recid_i != null) {
		recid_i = find_second_after_split(recid_i, '"');
		recid_i = recid_i.substr(2);

		set_refund_status(refund_status.Ошибка, recid_i, errorcode, errordescription);
	}
}

/**
 * Поиск корректных ответов СМЕВ по нестандартным условиям
 * @param {any} params
 */
function findCorrectSMEVResponses() {
	var url = String().concat(host, "/odata/rsmev___responses?$filter=((recstate eq 1) and (reccode ne 'fall') and (isexportconfirmed eq false))&$orderby=reccreated&$top=10");
	var result = sendRequest("GET", null, url, null);
	return (result != null && result.value.length > 0) ? result.value : null;
}

/**
 * Обработка ответов СМЕВ
 * @param {any} params
 */
function get_smev_responses() {

	let records = [];
	let errors_string = "";
	let errors_records_count = 0;

	try {
		records = findCorrectSMEVResponses();

		if ( records && records.length !== 0 ) {
			records.forEach(function (record, i, arr) {
				try {
					db.update("rsmev___responses", { recid: record.recid, is_exported: true, export_date: new Date(), recupdated: new Date() });
					var result;
					//ответ по импорту возвратов
					if (record.rootelement == "ImportRefundsResponse") {
						result = parse_importrefunds_response(record);
					}

					//ответ от гис гмп по импорту, аннулированию, деаннулированию, уточнению
					if (record.rootelement == "ImportChargesResponse") {
						result = parse_importcharges_response(record);
					}

					//ответ от гис гмп по принудительному квитированию
					if (record.rootelement == "ForcedAcknowledgementResponse") {
						result = parse_forcedacknowledgement_response(record);
					}

					//ответ по платежам
					if (record.rootelement == "ExportPaymentsResponse") {
						result = parse_exportpayments_response(record);
					}

					//ответ от гис гмп по актуализации статуса начисления
					if (record.rootelement == "ExportChargesResponse") {
						result = parse_exportcharges_response(record);
					}

					//	Ответ по зачислениям
					if(record.rootelement == "ExportIncomesResponse"){
						result = parse_ExportIncomesResponse_response(record);
					}

					//ответ не от гис гмп, вероятно от смэв
					if (record.rootelement == null) {
						result = parse_noroot_response(record);
					}

					if (result == undefined || result == null) {
						throw "Неизвестный ответ для записи " + record.recid;
					}

					if (result.success == false) {
						if (record.recid)
						var isExist = db.findbyrecid("rsmev___responses", record.recid)
						if (isExist){
							db.update("rsmev___responses", { recid: record.recid, reccode: 'fall', recupdated: new Date() });
						}
						db.insert("responses_log", { id_response: record ? record.recid : null, reccode: record.recid ? "Запись была найдена" : "Запись не была найдена", recname: "Неудачный парсинг ответа", recdescription: result.message, recupdated: new Date() });

						errors_records_count++;
						errors_string += "Ошибка обработки записи '" + record ? record.recid : null + "'. Сообщение: " + result.message + "     ";
					} else if (result.success == 'pass') {
						// пропускаем обработку ответа
						
					}
					else {
						set_export_confirmed(record.recid);
					}
				}
				catch (ex) {
					if (record.recid)
					var isExist = db.findbyrecid("rsmev___responses", record.recid)
					if (isExist){
						db.update("rsmev___responses", { recid: record.recid, reccode: 'fall', recupdated: new Date() });
					}
					db.insert("responses_log", { id_response: record ? record.recid : null, reccode: record.recid ? "Запись была найдена" : "Запись не была найдена", recname: "Исключение при работе ФЗ", recdescription: JSON.stringify(ex), recupdated: new Date() });
				}
			});
		}

		return {
			success: records ? records.length !== errors_records_count : true,
			message: null,
			data: "Операция выполнена. Успешно обработано записей "
				+ (records ? (records.length - errors_records_count).toString() : parseInt("0"))
				+ ", с ошибкой " + errors_records_count.toString() + ". Сообщения об ошибках: " + errors_string
		};
	}
	catch (ex) {
		return {
			success: false,
			message: ex,
			data: null
		};
	}
}

function get_data_payment(paymentInfo, payment_data) {
	//если какого-то поля нет в пришедшей xml то оно не будет апдейтиться в базе т.е если в ответе нет какого-то значения то в бд оно не null станет а останется старым
	payment_data.paymentId = paymentInfo["@paymentId"];
	if (paymentInfo["@supplierBillID"] != "0") {
		payment_data.supplier_bill_id = paymentInfo["@supplierBillID"];
	}
	payment_data.purpose = paymentInfo["@purpose"];
	payment_data.amount = paymentInfo["@amount"] / 100;
	payment_data.payment_date = paymentInfo["@paymentDate"];
	payment_data.receipt_date = paymentInfo["@receiptDate"];
	payment_data.kbk = paymentInfo["@kbk"];
	payment_data.oktmo = paymentInfo["@oktmo"];
	payment_data.delivery_date = paymentInfo["@deliveryDate"];
	payment_data.esia_id = paymentInfo["@ESIA_ID"];
	payment_data.payment_trans_kind = paymentInfo["@transKind"];
	payment_data.payment_exec_date = paymentInfo["@paymentExecDate"];

	if (paymentInfo["PaymentOrg"]) {
		var bank = paymentInfo["PaymentOrg"]["Bank"];
		if (bank) {
			payment_data.payment_name = bank["@name"];
			payment_data.payment_bik = bank["@bik"];
			payment_data.payment_correspondentbankaccount = bank["@correspondentBankAccount"];
		}
	}

	var payer = paymentInfo["Payer"];
	if (payer) {
		payment_data.payeridentifier = payer["@payerIdentifier"];
		payment_data.payer_name = payer["@payerName"];
		payment_data.payer_account = payer["@payerAccount"];
	}

	payment_data.ufk = paymentInfo["UFK"];
	payment_data.other = paymentInfo["Other"];

	var payee = paymentInfo["Payee"];
	if (payee) {
		payment_data.payee_name = payee["@name"];
		payment_data.payee_inn = payee["@inn"];
		payment_data.payee_kpp = payee["@kpp"];
		payment_data.payee_ogrn = payee["@ogrn"];

		var orgaccount = payee["OrgAccount"];
		if (orgaccount) {
			payment_data.payee_accountnumber = orgaccount["@accountNumber"];
			bank = orgaccount["Bank"];
			if (bank) {
				payment_data.payee_bank_name = bank["@name"];
				payment_data.payee_bik = bank["@bik"];
				payment_data.payee_correspondentbankaccount = bank["@correspondentBankAccount"];
			}
		}
	}

	var budgetindex = paymentInfo["BudgetIndex"];
	if (budgetindex) {
		var recordPayerStatus = db.findbyparams("payer_status", { reccode: budgetindex["@status"] });
		if (recordPayerStatus && recordPayerStatus.length != 0)
			payment_data.status = recordPayerStatus[0].recname;
		var recordPaytReason = db.findbyparams("payt_reason", { reccode: budgetindex["@paytReason"] });
		if (recordPaytReason && recordPaytReason.length != 0)
			payment_data.payt_reason = recordPaytReason[0].recname;
		payment_data.tax_period = budgetindex["@taxPeriod"];
		payment_data.tax_doc_number = budgetindex["@taxDocNumber"];
		payment_data.tax_doc_date = budgetindex["@taxDocDate"] != "0" ? budgetindex["@taxDocDate"] : null;
	}

	var accdoc = paymentInfo["AccDoc"];
	if (accdoc) {
		payment_data.acc_doc_no = accdoc["@accDocNo"];
		payment_data.acc_doc_date = accdoc["@accDocDate"];
	}

	var partialpayt = paymentInfo["PartialPayt"];
	if (partialpayt) {
		payment_data.budget_trans_kind = partialpayt["@transKind"];
		payment_data.payt_no = partialpayt["@paytNo"];
		payment_data.trans_content = partialpayt["@transContent"];
		payment_data.sum_residual_payt = partialpayt["@sumResidualPayt"];

		accdoc = partialpayt["AccDoc"];
		if (accdoc) {
			payment_data.partialpayt_acc_doc_no = accdoc["@accDocNo"];
			payment_data.partialpayt_acc_doc_date = accdoc["@accDocDate"];
		}
	}

	var changestatusinfo = paymentInfo["ChangeStatusInfo"];
	if (changestatusinfo) {
		payment_data.meaning = changestatusinfo["Meaning"];
		payment_data.partialpayt_reason = changestatusinfo["Reason"];
		payment_data.change_date = changestatusinfo["ChangeDate"];
	}

	var acknowledgmentinfo = paymentInfo["AcknowledgmentInfo"];
	if (acknowledgmentinfo) {
		payment_data.service_provided = acknowledgmentinfo["ServiceProvided"];
	}

	if (payment_data.payeridentifier) {
		payment_data.payer_type = payment_data.payeridentifier.substr(0, 1);
		payment_data.payer_doctype = payment_data.payeridentifier.substr(1, 2);

		if (payment_data.payer_type == "1") {
			payment_data.payer_series_number = payment_data.payeridentifier.substr(3, payment_data.payeridentifier.substr(3).length);
		}
		else if (payment_data.payer_type == "2") {
			payment_data.payer_inn = payment_data.payeridentifier.substr(3, 10);
			payment_data.payer_kpp = payment_data.payeridentifier.substr(13, 9);
		}
		else if (payment_data.payer_type == "3") {
			if (payment_data.payeridentifier.substr(3, 5) == "00000") {
				payment_data.payer_kio = payment_data.payeridentifier.substr(8, 5);
				payment_data.payer_kpp = payment_data.payeridentifier.substr(13, 9);
			}
			else {
				payment_data.payer_inn = payment_data.payeridentifier.substr(3, 10);
				payment_data.payer_kpp = payment_data.payeridentifier.substr(13, 9);
			}
		}
		else if (payment_data.payer_type == "4") {
			payment_data.payer_inn = payment_data.payeridentifier.substr(10, 12);
		}
	}

	var record = null;
	var payment_record = db.findbyparams("payment", { paymentid: payment_data.paymentId });

	if (payment_record != null && payment_record.length > 0) {
		payment_record = payment_record[0];

		//если в реестре платежей есть запись с такими же УИП, УИН и Meaning = 1, запись реестра обновлять не надо.
		if (payment_record.supplier_bill_id == payment_data.supplier_bill_id && payment_data.meaning == "1") {
		}
		//если в реестре платежей есть запись с таким же УИП, но УИН не совпадает или отсутствует, или Meaning != 1, необходимо обновить запись реестра платежей,
		else {
			payment_data.recid = payment_record.recid;
			payment_data.recupdated = new Date();
			payment_data.recdescription = "Данные по платежу были уточнены " + new Date();
			record = db.update("payment", payment_data);
		}
	}
	//если в реестре платежей нет записи с таким УИП, необходимо распарсить эту запись в реестр.
	else {
		record = db.insert("payment", payment_data);
	}
}

function charge_kvitirovat_cancel_getrecord(params) {
	var currentUser = check_can_submit();
	if (currentUser.can_submit == false) {
		return Forbidden(true);
	}

	var payments = db.findbyparams("payment", { supplier_bill_id: params.supplier_bill_id });
	params.payments = payments;
	return {
		success: true,
		message: "",
		closeForm: false,
		showMessage: false,
		data: params

	};
}


function charge_kvitirovat_cancel_submit(params) {
	var currentUser = check_can_submit();
	if (currentUser.can_submit == false) {
		return Forbidden();
	}

	try {

		//получаем выбранные записи по платежам
		var checked_payments = [];

		if (params.payments != null) {
			for (var i = 0; i < params.payments.length; i++) {
				if (params.payments[i].checked == true) {
					//checked_payments.push(params.payments[i]);
					checked_payments.push(params.payments[i].paymentid);
				}
			}
		}

		if (checked_payments.length > 100) {
			return {
				success: false,
				message: "Можно выбрать максимум 100 платежей. Вы выбрали " + checked_payments.length,
				closeForm: false,
				showMessage: false,
				data: null
			};
		}

		var procedureparams =
		{
			"name": "chargeimport_sel",
			"parameters": [{ "name": "charge_recid", "value": params.recid, "type": "SysGUID" }]

		};
		var dbrec = db.execprocedure(procedureparams);

		if (dbrec == null) {
			event.log("charge_kvitirovat_cancel_submit", null, "Из базы вместо записи пришел null", 3, null);
			return { success: false, message: "Из базы вместо записи пришел null", data: null };
		};

		if (dbrec.length <= 0) {
			return { success: false, message: "Не удалось получить данные по начислению " + params.recid, data: null };
		};

		dbrec = dbrec[0];

		var bodyObj = {
			"requestName": adapters.kvitirovanie,
			"isTest": false,
			"form": {
				"Id": "I_" + params.recid, //в обработке ответов на I завязана логика
				"timestamp": new Date(),
				"requestType": "AnnulmentReconcile",
				"supplierBillId": dbrec.supplier_bill_id
			}
		}

		if (dbrec.interaction_through_the_aggregator) {
			bodyObj.form.senderRole = dbrec.agr_sender_role;
			bodyObj.form.senderIdentifier = dbrec.agr_sender_identifier;
			bodyObj.form.originatorId = dbrec.sender_identifier;
		}
		else {
			bodyObj.form.senderRole = dbrec.sender_role;
			bodyObj.form.senderIdentifier = dbrec.sender_identifier;
		}

		if (checked_payments.length == 0) {
			//принудительное квитирование с отсутствующим платежом
			bodyObj.form.PaymentNotLoaded = "Да";
		}
		else {
			//принудительное квитирование начисления с платежами
			bodyObj.form.Payment = checked_payments;
			bodyObj.form.PaymentNotLoaded = "Нет";
		}

		try {
			var result = sendtosmevgate(JSON.stringify(bodyObj), "charge", dbrec.recid, "Отмена квитирования");

			if (result == null) {
				event.log("Отправка запроса на шлюз", null, "Шлюз не принял запрос на отмену квитирования", 4, body);

				return {
					success: false,
					message: "Шлюз не принял запрос по отмене принудительного квитирования",
					data: null
				};
			}
		}
		catch (ex) {
			return {
				success: false,
				message: "Шлюз не принял запрос по отмене принудительного квитирования: " + ex.message,
				data: null
			};
		}

		set_charge_status(charge_status["Отмена квитирования"], params.recid);

		return {
			success: true,
			message: "Запрос отправлен",
			closeForm: true,
			showMessage: false,
			data: params
		};
	}
	catch (ex) {
		return {
			success: false,
			message: "Ошибка отмены принудительного квитирования: " + ex.message,
			data: null
		};
	}
}

function kvitirovat_send(params, payments) {
	var procedureparams =
	{
		"name": "chargeimport_sel",
		"parameters": [{ "name": "charge_recid", "value": params.recid, "type": "SysGUID" }]

	};
	var dbrec = db.execprocedure(procedureparams);

	if (dbrec == null) {
		event.log("charge_kvitirovat_2_submit", null, "Из базы вместо записи пришел null", 3, null);
		return { success: false, message: "Из базы вместо записи пришел null", data: null };
	};

	if (dbrec.length <= 0) {
		return { success: false, message: "Не удалось получить данные по начислению " + params.recid, data: null };
	};

	dbrec = dbrec[0];

	var bodyObj = {
		"requestName": adapters.kvitirovanie,
		"isTest": false,
		"form": {
			"Id": "I_" + params.recid, //в обработке ответов на I завязана логика
			"timestamp": new Date(),
			"requestType": "Reconcile",
			"supplierBillId": dbrec.supplier_bill_id
		}
	}

	if (dbrec.interaction_through_the_aggregator) {
		bodyObj.form.senderRole = dbrec.agr_sender_role;
		bodyObj.form.senderIdentifier = dbrec.agr_sender_identifier;
		bodyObj.form.originatorId = dbrec.sender_identifier;
	}
	else {
		bodyObj.form.senderRole = dbrec.sender_role;
		bodyObj.form.senderIdentifier = dbrec.sender_identifier;
	}

	if (payments.length == 0) {
		//принудительное квитирование с отсутствующим платежом
		bodyObj.form.PaymentNotLoaded = "Да";
	}
	else {
		//принудительное квитирование начисления с платежами
		bodyObj.form.Payment = payments;
		bodyObj.form.PaymentNotLoaded = "Нет";
	}

	var result = sendtosmevgate(JSON.stringify(bodyObj), "charge", params.recid, "Квитирование");

	if (result == null) {
		event.log("Отправка запроса на шлюз", null, "Шлюз не принял запрос по принудительному квитированию", 4, body);

		return {
			success: false,
			message: "Шлюз не принял запрос по принудительному квитированию",
			closeForm: true,
			showMessage: true,
			data: null
		};
	} else {
		return {
			success: true,
			message: "Запрос отправлен на шлюз",
			closeForm: true,
			showMessage: true,
			data: null
		};
	}
}

function charge_kvitirovat_2_submit(params) {
	var currentUser = check_can_submit();
	if (currentUser.can_submit == false) {
		return Forbidden();
	}

	try {
		const filtered_payments_form = "cded3179-75f2-408f-81f4-8a45199c5073";

		//нажата кнопка далее
		if (params.next == true) {

			//заменяем на пустое значение в случае null т.к контроллр хранимок не пропустит null и в хранимке будем работать как с текстом
			const kbk = params.kbk != null ? params.kbk : "";
			const amount = params.amount != null ? params.amount : "";
			const payer_name = params.payer_name != null ? params.payer_name : "";
			const payment_date = params.payment_date != null ? params.payment_date : "";
			const oktmo = params.oktmo != null ? params.oktmo : "";

			const procedureparams =
			{
				"name": "payment_sel",
				"parameters": [
					{ "name": "kbk_in", "value": kbk, "type": "SysString" },
					{ "name": "amount_in", "value": amount.toString().replace(",", "."), "type": "SysString" },
					{ "name": "payer_name_in", "value": payer_name, "type": "SysString" },
					{ "name": "payment_date_in", "value": payment_date, "type": "SysString" },
					{ "name": "oktmo_in", "value": oktmo, "type": "SysString" }
				]
			};
			const payments = db.execprocedure(procedureparams);

			// for (let index = 0; index < payments.length; index++) {
			// 	let element = payments[index];
			// 	element.checked = false;
			// }

			return {
				showMessage: true,
				message: "Форма фильтрации",
				success: true,
				data: payments,
				closeForm: false,
				idNextForm: filtered_payments_form
			};
		}

		let send_result;
		//квитирование по уип
		if (params.options == "set_yip") {
			send_result = kvitirovat_send(params, [params.yip]);
		}

		//квитирование без платежа
		if (params.options == "kvitirovat") {
			send_result = kvitirovat_send(params, []);
		}

		if (send_result.success != true) {
			return send_result;
		}

		set_charge_status(charge_status.Квитирование, params.recid);

		return {
			success: true,
			message: "Запрос отправлен",
			closeForm: true,
			showMessage: true,
			data: null
		};
	}
	catch (ex) {
		return {
			success: false,
			message: "Ошибка принудительного квитирования: " + ex.message,
			data: null
		};
	}
}

function filtered_payments_submit(params) {
	try {
		var filtered_payments = params.old.charge_kvitirovat_2;
		var checked_payments = [];

		for (let i = 0; i < filtered_payments.length; i++) {
			if (filtered_payments[i].checked ) {
				checked_payments.push(filtered_payments[i].paymentid);
			}
		}

		if (checked_payments.length > 100) {
			return {
				success: false,
				message: "Можно выбрать максимум 100 платежей. Вы выбрали " + checked_payments.length,
				closeForm: false,
				showMessage: true,
				data: null
			};
		}

		const send_result = kvitirovat_send(params, checked_payments);
		if (send_result.success != true) {
			return send_result;
		}

		set_charge_status(charge_status.Квитирование, params.recid);

		return {
			success: true,
			message: "Запрос отправлен",
			closeForm: true,
			showMessage: true,
			data: checked_payments
		};
	}
	catch (ex) {
		return {
			success: false,
			message: "Ошибка принудительного квитирования: " + ex.message,
			data: null
		};
	}
}

// отправка запроса в шлюз
function sendtosmevgate(body, table_name, record_recid, request_type) {
	var SMEVGATEWAY_URL = host;
	var headers = {
		'Content-Type': "application/json"
	};

	var url = SMEVGATEWAY_URL + "/api/smev/sendrequest";

	var result = sendRequest("POST", headers, url, body);

	if (table_name != null && record_recid != null) {

		var req = db.findbyrecid("rsmev___requests", result.requestId);
		db.insert("request_history",
			{
				recstate: 1,
				table_name: table_name,
				record_id: record_recid,
				request_id: req ? req.recid : _emptyGUID,
				request_smev_id: req ? req.requestid : _emptyGUID,
				request_type: request_type
			}
		);
	}

	return result;
}

function guid() {
	function S4() {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	}
	return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

function send_orginfo_request() {

	var procedureparams =
	{
		"name": "find_organization",
		"parameters": []
	};

	try {
		var dbrec = db.execprocedure(procedureparams);
	}
	catch (ex) {
		return {
			success: false,
			message: ex,
			data: null
		}
	}

	if (dbrec && dbrec.length != 0) {
		dbrec = dbrec[0];
		var orgRecid = dbrec.recid;
		dbrec.recid = guid();

		var startDate = new Date();

		dbrec.end_date = startDate;
		dbrec.start_date = new Date(startDate.getFullYear(),
			startDate.getMonth(),
			(startDate.getDate() - 1),
			startDate.getHours(),
			startDate.getMinutes(),
			startDate.getSeconds(),
			startDate.getMilliseconds());
		dbrec.page_number = 1;

		var result = create_request(dbrec);

		if (result.success) {
			db.update("organization", { recid: orgRecid, recupdated: new Date(), page_number: 1 });
		}

		return result;
	}
	else {
		return {
			success: false,
			message: "Записей для отправления не было найдено",
			data: null
		}
	}
}

function create_request(dbrec) {

	if (dbrec) {
		var body = JSON.stringify({
			requestName: adapters.paymentinfo,
			isTest: false,
			form: {
				Id: "G_" + dbrec.recid,
				timestamp: new Date(),
				senderIdentifier: dbrec.sender_identifier,
				senderRole: dbrec.sender_role,
				pageNumber: dbrec.page_number,
				pageLength: 100,
				kind: "PAYMENT",
				requestType: "TimeConditions",
				startDate: dbrec.start_date,
				endDate: dbrec.end_date
			}
		});

		var headers = {
			'Content-Type': "application/json"
		};

		var url = host + "/api/smev/sendrequest";

		try {
			sendRequest("POST", headers, url, body);
			//db.insert("request", { recid: dbrec.recid, start_date: dbrec.start_date, end_date: dbrec.end_date, page_number: dbrec.page_number });
		}
		catch (ex) {
			return {
				success: false,
				message: ex,
				data: null
			}
		}

		return {
			success: true,
			message: "Операция выполнена успешно",
			data: "Операция выполнена успешно"
		};
	}
	return {
		success: false,
		message: "Запрос не был отправлен",
		data: null
	}
}

function get_transkind_types() {
	var transkind_types = [
		{ name: "Платежное поручение", id: 1 },
		{ name: "Инкассовое поручение", id: 6 },
		{ name: "Платежный ордер", id: 16 }
	];

	return transkind_types;
}

function payment_actualize(params) {
	try {
		var payment_record = db.findbyrecid("payment", params.recid);
		var organization_record = db.findbyparams("organization", { account_number: payment_record.payee_accountnumber });

		if (organization_record == null || organization_record.length <= 0)
			return badResponse("Не удалось получить данные по организации");

		organization_record = organization_record[0];

		var senderrole_record = db.findbyrecid("sender_role", organization_record.sender_role);

		var request = JSON.stringify({
			"requestName": adapters.paymentinfo,
			"isTest": false,
			"form": {
				"Id": "I_" + params.recid,
				"timestamp": new Date(),
				"senderIdentifier": organization_record.sender_identifier,
				"senderRole": senderrole_record.reccode,
				"pageNumber": 1,
				"pageLength": 100,
				"kind": "PAYMENTMODIFIED",
				//"kind": "PAYMENT",
				"requestType": "PaymentsConditions",
				"PaymentId": [
					payment_record.paymentid
				]
			}
		});

		try {
			var result = sendtosmevgate(request);

			if (result == null) {
				event.log("Отправка запроса на шлюз", null, "Шлюз не принял запрос", 4, body);

				return {
					success: false,
					message: "Шлюз не принял запрос",
					data: null
				};

			}
		}
		catch (ex) {
			return {
				success: false,
				message: "Шлюз не принял запрос: " + ex.message,
				data: null
			};
		}

		db.update("payment", { recid: params.recid, recupdated: new Date(), recdescription: "Отправлен запрос в ГИС ГМП на уточнение данных по платежу" });

		return {
			success: true,
			message: "Запрос отправлен",
			closeForm: false,
			showMessage: false,
			data: params
		};
	}
	catch (ex) {
		return {
			success: false,
			message: "Ошибка уточнения данных по платежам: " + ex.message,
			data: null
		};
	}
}

function charge_data_template_form_getrecord(params) {

	var check = check_params_pressButton(params);
	if (check.success == false) return check;

	if (params.recid == '') params.recid = null;

	if (params.pressButton.name != _gridToolbarNameSystemButtons.Add && params.recid != null) {
		var record = db.findbyrecid("charge_data_template", params.recid);
		if (record) {
			params.name = record.name;
			params.total_amount = record.total_amount;
			params.origin = record.origin;
			params.purpose = record.purpose;
			params.kbk = record.kbk;
			params.oktmo = record.oktmo;
			params.valid_until = record.valid_until;

			// asd
			params.status = db.findbyrecid("payer_status", record.status).reccode;
			params.payt_reason = record.payt_reason;

			params.tax_docnumber = record.tax_docnumber;
			params.tax_period = record.tax_period;
			params.tax_doc_date = record.tax_doc_date;
		}
	}
	return {
		success: true,
		message: "",
		closeForm: false,
		showMessage: false,
		data: params

	};
}

function get_names_requesttype() {
	var request_types = [
		{ name: "Все активные платежи", id: "1" },
		{ name: "Все платежи, имеющие статус уточнения или аннулирования", id: "2" },
		{ name: "Все активные платежи, для которых отсутствуют начисления", id: "3" },
		{ name: "Аннулированные платежи", id: "4" }
	];

	return request_types;
}

function get_names_condition() {
	var condition_types = [
		{ name: "За период", id: "1" },
		{ name: "По плательщику", id: "2" },
		{ name: "По уникальному идентификатору платежа (УИП)", id: "3" }
	];

	return condition_types;
}

function payer_getrecord(params) {
	var check = check_params_pressButton(params);

	if (check.success == false) return check;
	if (params.recid == '') params.recid = null;

	if (params.pressButton.name != _gridToolbarNameSystemButtons.Add && params.recid != null) {
		var record = db.findbyrecid("payer", params.recid);

		if (record) {
			params.payer_type = record.payer_type;
			params.orgname = record.orgname;
			params.lastname = record.lastname;
			params.name = record.name;
			params.middlename = record.middlename;
			params.payeridentifier = record.payeridentifier;
			params.inn = record.inn;
			params.kpp = record.kpp;
			params.kio = record.kio;
			params.inn_enable = record.inn_enable;
			params.countryReg = record.countryreg;
			params.taxpayerCode = record.taxpayercode;

			if (record.doc_type != null) {
				var doc_type_db = db.findbyrecid("doc_type", record.doc_type);
				params.doc_type = doc_type_db != null ? doc_type_db.reccode : null;
			}

			params.doc_ser_num = record.doc_ser_num;
			params.address = record.address;
		}
	}
	else { params = null; }
	return {
		success: true,
		message: "",
		closeForm: false,
		showMessage: false,
		data: params
	};
}

function user_add_submit(params) {

	var values = params.values;
	values.recid = params.recid != '' ? params.recid : null;

	try {
		var register_in_system = function () {
			//прописываем логин в системе
			var url = host + "/auth/register";
			var headers = {
				'Content-Type': "application/json"
			};
			var body = JSON.stringify({ "email": values.email, "firstname": values.name, "lastname": values.lastname, "patronymic": values.middlename, "login": values.login, "password": values.password, "passwordreset": true, "recstate": 0 });
			sendRequest("POST", headers, url, body);

			// т.к выше не возвращается recid то придется добыть его
			var user_record = db.findbyparams("rdev___auth_users", { "login": values.login });
			var user_recid = user_record[0].recid;

			//связываем с группой
			db.insert("rdev___auth_groupuser", { userid: user_recid, groupid: values.group });
		}

		var add_to_users = function () {
			// Придется делать селекты что бы добыть описание роли
			var auth_users = db.findbyparams("rdev___auth_users", { "login": values.login });
			var auth_groupuser = db.findbyparams("rdev___auth_groupuser", { userid: auth_users[0].recid });
			var auth_groups = db.findbyparams("rdev___auth_groups", { recid: auth_groupuser[0].groupid });

			db.insert("users",
				{
					login: values.login,
					organizationid: values.organization,
					charge_organization_read: values.charge_organization_read,
					charge_organization_write: values.charge_organization_write,
					role: auth_groups[0].recdescription
				});
		}

		//добавление пользователя
		if (params.pressButton.name == _gridToolbarNameSystemButtons.Add) {
			var user_auth_record = db.findbyparams("rdev___auth_users", { "login": values.login });
			var user_record = db.findbyparams("users", { "login": values.login });

			if (user_auth_record != null && user_auth_record.length > 0 && user_record != null && user_record.length > 0) {
				return {
					success: false,
					message: "Такой логин уже есть в системе",
					closeForm: false,
					data: values
				};
			}

			if (user_auth_record == null && user_record == null) {
				//добавляем в rdev___auth_users итд
				register_in_system();

				//добавляем пользователя в таблицу users
				add_to_users();
			}

			if (user_auth_record == null && user_record != null && user_record.length > 0) {
				//добавляем в rdev___auth_users итд
				register_in_system();
			}

			if (user_auth_record != null && user_auth_record.length > 0 && user_record == null) {
				//добавляем пользователя в таблицу users
				add_to_users();
			}


		}
		//редактирование пользователя
		else {
			var user_info = {
				recid: values.recid,
				recupdated: new Date(),
				organizationid: values.organization,
				charge_organization_read: values.charge_organization_read,
				charge_organization_write: values.charge_organization_write
			};
			db.update("users", user_info);

			db.update("rdev___auth_users", { recid: values.rdevauthusers_recid, recupdated: new Date(), firstname: values.name, lastname: values.lastname, patronymic: values.middlename, email: values.email });
			db.update("rdev___auth_groupuser", { recid: values.rdevauthgroupuser_recid, recupdated: new Date(), groupid: values.group });
		}

		return {
			success: true,
			message: "Операция выполнена успешно",
			closeForm: true,
			data: values
		};
	}
	catch (ex) {
		return {
			success: false,
			message: "Ошибка добавления пользователя " + ex.message,
			closeForm: false,
			data: values
		};
	}
}

function user_get_record(params) {
	var check = check_params_pressButton(params);
	if (check.success == false) return check;
	if (params.recid == '') params.recid = null;

	try {
		if (params.pressButton.name == _gridToolbarNameSystemButtons.Add) {
			return {
				success: true,
				message: "",
				closeForm: false,
				data: { adding: true },
				showMessage: false
			};
		} else {

			var users_record = db.findbyrecid("users", params.recid);
			var rdevauthusers_record = db.findbyparams("rdev___auth_users", { login: users_record.login });
			var rdevauthgroupuser_record = db.findbyparams("rdev___auth_groupuser", { userid: rdevauthusers_record[0].recid });

			var user_info = {
				recid: params.recid,
				rdevauthusers_recid: rdevauthusers_record[0].recid,
				rdevauthgroupuser_recid: rdevauthgroupuser_record[0].recid,
				login: users_record.login,
				email: rdevauthusers_record[0].email,
				name: rdevauthusers_record[0].firstname,
				lastname: rdevauthusers_record[0].lastname,
				middlename: rdevauthusers_record[0].patronymic,
				group: rdevauthgroupuser_record[0].groupid,
				organization: users_record.organizationid,
				charge_organization_read: users_record.charge_organization_read,
				charge_organization_write: users_record.charge_organization_write,
				adding: false
			};

			return {
				success: true,
				message: "",
				closeForm: false,
				data: user_info,
				showMessage: false
			};
		}
	}
	catch (ex) {
		return {
			success: false,
			message: ex.message,
			closeForm: false,
			data: params
		};
	}
}

function users_delete(params) {
	try {
		var user_recid = params.selectedRecords[0].recid;
		//Так как в табличном представлении нет колонки Login, то это поле не приходит в params.
		//Для того чтобы получить значение поля login, получаем всю запись из БД по recid.
		var user = db.findbyrecid("users", user_recid);
		var login = user.login;

		db.delete("users", user_recid);

		var procedureparams =
		{
			"name": "rdev___auth_users_del",
			"parameters": [{ "name": "login_in", "value": login, "type": "SysString" }]

		};
		var dbrec = db.execprocedure(procedureparams);

		return {
			success: true,
			message: "Пользователь удален",
			data: params
		};
	}
	catch (ex) {
		return {
			success: false,
			message: "Ошибка удаления пользователя " + ex.message,
			data: params
		};
	}
}

function getFileList(entityId, entityName, columnName) {
	var files = fetch(host + '/api/files/list/' + entityName + '/' + entityId, {
		method: 'GET'
	});
	if (files != null) {
		var output = [];
		var file_list = JSON.parse(files.data).data;
		for (let i = 0; i < file_list.length; i++) {
			if (file_list[i].columnName == columnName) {
				output.push(file_list[i]);
			}
		}
		return output;
	} else {
		return null;
	}
}


// https://rm.mfc.ru/issues/58000
function paymentexport_form_getrecord(params) {

	const check = check_params_pressButton(params);
	if (check.success == false) return check;

	if (params.pressButton.name == "sysAdd") {
		params.status_request = 1;
		params.recid = null;
		params.isEdit = true;
	} else {
		params.isEdit = params.pressButton.name == "onEdit" || params.pressButton.name == "sysEdit";
		const record = db.findbyrecid("payment_export", params.recid);
		// парсим УИПы
		params.paymentids = [];
		if (record.paymentid != null) {
			const pids = record.paymentid.split(",");
			pids.forEach(function (el) {
				params.paymentids.push({ "paymentid": el });
			});
		}

		const doc_types = db.find("doc_type");

		params.request_type = record.request_type;
		params.errordescription = record.errordescription;
		params.errorcode = record.errorcode;
		params.recdescription = record.recdescription;
		params.condition = record.condition;
		params.status_request = record.status_request ? record.status_request : 1;
		params.start_date = record.start_date;
		params.end_date = record.end_date;
		params.payeridentifier = record.payeridentifier;
		params.payerid = record.payerid;
		params.payer_type = record.payer_type;
		params.type_select_payer = record.type_select_payer;
		params.inn_disable = record.inn_disable;
		params.inn = record.inn;
		params.kpp = record.kpp;
		params.kio = record.kio;
		params.doc_type = record.doc_type ? getCodeByRecid(doc_types, record.doc_type) : null;
		params.doc_serial = record.doc_serial;
		params.taxpayercode = record.taxpayercode;
		params.countryreg = record.countryreg;

		params.data = getFileList(record.recid, "payment_export", "data");
	}

	return {
		success: true,
		message: "",
		closeForm: false,
		showMessage: false,
		data: params
	};
}

function payment_export_send(params) {
	return res = paymentExportSend(params.selectedRecords[0].recid, null);
}

function paymentexport_form_saverecord(params) {

	let result;
	const values = params.values;

	// сериализуем УИПы в строку
	let paymentids_str = "";
	if (values.paymentids != null && values.paymentids.length > 0) {
		values.paymentids.forEach(function (paymentid) {
			paymentids_str = paymentids_str + paymentid.paymentid + ",";
		});
		paymentids_str = paymentids_str.substring(0, paymentids_str.length - 1);
	}

	const payer_identifier = values.type_select_payer == 2
		? get_payeridentifier(values.payer_type, values.doc_type, values.inn, values.kpp, values.kio, values.doc_serial, values.inn_disable, values.countryreg, values.taxpayercode)
		: null;

	const doc_types = db.find("doc_type");

	let condition_view;
	if (values.condition == '1' )
		condition_view = 'С '.concat(dateFormat(values.start_date), ' по ', dateFormat(values.end_date));
	if (values.condition == '3' )
		condition_view = paymentids_str;
	if (values.condition == '2' && values.type_select_payer == '2' )
		condition_view = values.payeridentifier;
	if (values.condition == '2' && values.type_select_payer == '1' && values.payerid) {
		const payer = db.findbyrecid("payer", values.payerid )
		condition_view = payer.fullname;
	}

	const paymentexport_data = {
		recid: values.recid ? values.recid : null,
		recname: condition_view,
		request_type: values.request_type,
		condition: values.condition,
		status_request: values.status_request,
		start_date: values.start_date != "" ? values.start_date : null,
		end_date: values.end_date != "" ? values.end_date : null,
		payeridentifier: payer_identifier,
		payerid: values.type_select_payer == '2' ? null : values.payerid,
		type_select_payer: values.type_select_payer,
		paymentid: paymentids_str != "" ? paymentids_str : null,
		status_request: payment_conditions.Новое,
		payer_type: values.payer_type,
		inn_disable: values.inn_disable,
		inn: values.inn,
		kpp: values.kpp,
		kio: values.kio,
		doc_type: values.doc_type ? getrecidbycode(doc_types, values.doc_type) : null,
		doc_serial: values.doc_serial,
		taxpayercode: values.taxpayercode,
		countryreg: values.countryreg
	};

	if (params.pressButton.name == "sysAdd") {
		try {
			result = db.insert("payment_export", paymentexport_data);
			paymentexport_data.recid = result.recid;
		}
		catch (ex) {
			return {
				success: false,
				message: ex,
				closeForm: true,
				data: result
			}
		}
	} else {
		try {
			paymentexport_data.recupdated = new Date();
			result = db.update("payment_export", paymentexport_data);
		}
		catch (ex) {
			return {
				success: false,
				message: ex,
				closeForm: true,
				data: result
			}
		}
	}

	if (values.send) {
		return paymentExportSend(result.recid, paymentexport_data);
	}

	return {
		success: true,
		message: "Операция выполнена",
		closeForm: true,
		data: result
	};
}

// dd.mm.yyyy
function dateFormat(dateString) {
	const date = new Date(dateString);
	const d = date.getDate();
	const m = date.getMonth() + 1;
	const y = date.getFullYear();
	return ( d < 10 ? '0' + d : d ) + '.' + (m < 10 ? '0' + m : m ) + '.' + date.getFullYear();
}

function date_curent_timezone(){
	var currentTimeZoneOffsetInHours = new Date().getTimezoneOffset()
	const date = new Date();
	date.setHours(date.getHours() - (currentTimeZoneOffsetInHours / 60))
	return date
}

function paymentExportSend(recid, values) {

	let payment = values ? values : db.findbyrecid("payment_export", recid);

	const userRec = db.findbyparams("users", { login: getcurrentuser().login }, null, 1);
	const orgRec = db.findbyrecid("organization", userRec[0].organizationid);
	const roleRec = db.findbyrecid("sender_role", orgRec.sender_role);

	if (orgRec && roleRec) {

		let body = {
			requestName: adapters.paymentExport,
			isTest: false,
			form: {
				Id: "E_" + payment.recid,
				timestamp: date_curent_timezone(),
				pageNumber: 1,
				pageLength: 100,
				senderIdentifier: orgRec.sender_identifier,
				senderRole: roleRec.reccode
			}
		};

		if (orgRec.interaction_through_the_aggregator) {
			const orgAgr = db.findbyrecid("organization", aggregator);
			const roleAgr = db.findbyrecid("sender_role", orgAgr.sender_role);

			body.form.senderIdentifier = orgAgr.sender_identifier;
			body.form.senderRole = roleAgr.reccode;
			body.form.originatorId = orgRec.sender_identifier;
		}
		else {
			body.form.senderIdentifier = orgRec.sender_identifier;
			body.form.senderRole = roleRec.reccode;
		}

		if (payment.request_type == '1') {
			body.form.kind = "PAYMENT";
		}
		else if (payment.request_type == '2') {
			body.form.kind = "PAYMENTMODIFIED";
		}
		else if (payment.request_type == '3') {
			body.form.kind = "PAYMENTUNMATCHED";
		}
		else {
			body.form.kind = "PAYMENTCANCELLED";
		}

		if (payment.condition == "1") {
			body.form.requestType = "TimeConditions";
			body.form.startDate = payment.start_date;
			body.form.endDate = payment.end_date;
		}
		else if (payment.condition == '2') {
			body.form.requestType = "PayersConditions";
			body.form.PayerIdentifier = [];
			if (payment.type_select_payer == '1') {
				const payer = db.findbyrecid("payer", payment.payerid);
				body.form.PayerIdentifier.push(payer.payeridentifier);
			}
			else {
				body.form.PayerIdentifier.push(payment.payeridentifier);
			}
		}
		else {
			body.form.requestType = "PaymentsConditions";
			body.form.PaymentId = [];
			if (payment.paymentid != null && payment.paymentid.length > 0) {
				payment.paymentid.split(',').forEach(function (paymentid) {
					body.form.PaymentId.push(paymentid);
				});
			}

		}

		try {
			result = sendtosmevgate(JSON.stringify(body), "payment_export", payment.recid, "Запрос на импорт начислений");
		}
		catch (ex) {
			db.update("payment_export", {
				recid: payment.recid,
				recupdated: new Date(),
				status_request: payment_conditions.Ошибка,
				errorcode: "12",
				errordescription: ex.message
			});
			return {
				success: false,
				message: ex,
				data: result
			}
		}
		db.update("payment_export", {
			recid: payment.recid,
			recupdated: new Date(),
			errorcode: "",
			errordescription: "",
			status_request: payment_conditions.Отправлено
		});
		return {
			success: true,
			message: "Запрос отправлен",
			closeForm: true,
			data: payment
		};
	}
}

function payment_export_del(params) {
	if (params.selectedRecords[0].status_request != 1 && !checkUserRole(getcurrentuser(), "Administrators")) {
		return {
			success: false,
			message: "Нет прав на удаление записи",
			closeForm: true
		}
	}
	return tryDelete("payment_export", params.recid);
}


// https://rm.mfc.ru/issues/57998
function get_charge_export_requesttype() {
	return request_types;
}

function get_charge_export_condition() {
	return charge_export_condition;
}

function chargeexport_form_getrecord(params) {

	const check = check_params_pressButton(params);
	if (check.success == false) return check;

	if (params.pressButton.name == "sysAdd") {
		params.status_request = 1;
		params.recid = null;
		params.isEdit = true;
	} else {

		params.isEdit = params.pressButton.name == "onEdit" || params.pressButton.name == "sysEdit";
		const record = db.findbyrecid("charge_export", params.recid);
		
		params.errordescription = record.errordescription;
		params.errorcode = record.errorcode;
		params.recdescription = record.recdescription;
		params.status_request = record.status_request ? record.status_request : 1;


		params.request_type = record.request_type;
		params.condition = record.condition;

		if (params.condition == 1) {
			params.start_date = record.start_date;
			params.end_date = record.end_date;

			params.kbk_list = [];
			deSerialiseItems(record.kbk, params.kbk_list);

			params.set_recipient_data = record.set_recipient_data;

			if (params.set_recipient_data) {
				params.recipients = [];
				deSerialiseRecipients(record.recipients, params.recipients);
			}	
		}
		else if (params.condition == 2) {

			params.type_select_payer = record.type_select_payer;

			if (params.type_select_payer == 1)
				params.payerid = record.payerid;
			else if (params.type_select_payer == 2) {
				params.payeridentifier = record.payer_identifier;
				params.payer_type = record.payer_type;
				params.inn = record.payer_inn;
				params.kpp = record.payer_kpp;
				params.kio = record.payer_kio;
				params.inn_disable = record.payer_inn_disable;
				params.doc_type = record.payer_doc_type ? getCodeByRecid(db.find("doc_type"), record.payer_doc_type) : null;
				params.doc_serial = record.payer_doc_serial;
				params.taxpayercode = record.payer_taxpayercode;
				params.countryreg = record.payer_countryreg;
			}
			else if (params.type_select_payer == 3) {
				params.ul_inn_list = [];
				deSerialiseItems(record.payer_ul_inn, params.ul_inn_list)
			}
		}
		else if (params.condition == 3) {
			params.is_sbp = record.is_sbp;
			params.uins = [];
			deSerialiseItems(record.uins, params.uins)
		}

		params.data = getFileList(record.recid, "charge_export", "data");
	}

	return {
		success: true,
		message: "",
		closeForm: false,
		showMessage: false,
		data: params
	};
}

function charge_export_send(params) {
	return res = chargeExportSend(params.selectedRecords[0].recid, null);
}

function chargeexport_form_saverecord(params) {

	let result;
	const values = params.values;

	const payer_identifier = values.type_select_payer == 2
		? get_payeridentifier(values.payer_type, values.doc_type, values.inn, values.kpp, values.kio, values.doc_serial, values.inn_disable, values.countryreg, values.taxpayercode)
		: null;

	const payer_ul_inn_list = values.type_select_payer == 3 ? serialiseItems(values.ul_inn_list) : null;
	const uins_string = values.condition == 3 ? serialiseItems(values.uins) : null;

	let condition_view;
	if (values.condition == 1)
		condition_view = 'За временной интервал c '.concat(dateFormat(values.start_date), ' по ', dateFormat(values.end_date));
	if (values.condition == 3)
		condition_view = 'По УИНам: ' + uins_string.substr(0, 20);
	if (values.condition == 2 && values.type_select_payer == 2)
		condition_view = 'По идентификатору плательщика ' + payer_identifier;
	if (values.condition == 2 && values.type_select_payer == 3)
		condition_view = 'По ИНН юридических лиц: ' + payer_ul_inn_list.substr(0,8);
	if (values.condition == 2 && values.type_select_payer == 1 && values.payerid) {
		const payer = db.findbyrecid("payer", values.payerid)
		condition_view = 'По идентификатору плательщика ' + payer.fullname;
	}

	const chargexport_data = {

		recid: values.recid ? values.recid : null,
		recname: condition_view,
		status_request: 1,

		request_type: values.request_type,
		condition: values.condition,

		start_date: values.condition == 1 ? values.start_date : null,
		end_date: values.condition == 1 ? values.end_date : null,
		kbk: values.condition == 1 ? serialiseItems(values.kbk_list) : null,

		// addition
		set_recipient_data: values.condition == 1 ? values.set_recipient_data : false,
		recipients: values.condition == 1 && values.set_recipient_data ? serialiseRecipients(values.recipients) : null,

		// values.condition == 2 payer
		type_select_payer: values.type_select_payer,
		payer_id: values.condition == 2 && values.type_select_payer == 1 ? values.payerid : null,
		payer_type: values.condition == 2 && values.type_select_payer == 2 ? values.payer_type : null,
		payer_inn: values.condition == 2 && values.type_select_payer == 2 ? values.inn : null,
		payer_kpp: values.condition == 2 && values.type_select_payer == 2 ? values.kpp : null,
		payer_kio: values.condition == 2 && values.type_select_payer == 2 ? values.kio : null,
		payer_inn_disable: values.condition == 2 && values.type_select_payer == 2 ? values.inn_disable : null,
		payer_doc_type: values.condition == 2 && values.type_select_payer == 2 ? values.doc_type ? getrecidbycode(db.find("doc_type"), values.doc_type) : null : null,
		payer_doc_serial: values.condition == 2 && values.type_select_payer == 2 ? values.doc_serial : null,
		payer_taxpayercode: values.condition == 2 && values.type_select_payer == 2 ? values.taxpayercode : null,
		payer_countryreg: values.condition == 2 && values.type_select_payer == 2 ? values.countryreg : null,
		payer_identifier: values.condition == 2 && values.type_select_payer == 2 ? payer_identifier : null,

		// values.condition == 2 and type_select_payer == 3 INN UL
		payer_ul_inn: values.condition == 2 && values.type_select_payer == 3 ? payer_ul_inn_list : null,

		// values.condition == 3
		uins: values.condition == 3 ? uins_string : null,
		is_sbp: values.condition == 3 ? values.is_sbp : false
	};

	if (params.pressButton.name == "sysAdd") {
		try {
			result = db.insert("charge_export", chargexport_data);
			chargexport_data.recid = result.recid;
		}
		catch (ex) {
			return {
				success: false,
				message: ex,
				closeForm: true,
				data: result
			}
		}
	} else {
		try {
			chargexport_data.recupdated = new Date();
			result = db.update("charge_export", chargexport_data);
		}
		catch (ex) {
			return {
				success: false,
				message: ex,
				closeForm: true,
				data: result
			}
		}
	}

	if (values.send) {
		return chargeExportSend(result.recid, chargexport_data);
	}

	return {
		success: true,
		message: "Операция выполнена",
		closeForm: true,
		data: params
	};
}

function serialiseItems(items) {
	let str = "";
	if (items != null && items.length > 0) {
		items.forEach(function (item) {
			str += item.value + ",";
		});
		str = str.substring(0, str.length - 1);
	}
	return str;
}

function deSerialiseItems(str, list) {
	if (str != null && str != '' && list ) {
		const pids = str.split(",");
		pids.forEach(function (el) {
			list.push({ "value": el });
		});
	}
}

function serialiseRecipients(list) {
	let str = "";
	if (list != null && list.length > 0) {
		list.forEach(function (item) {
			str += item.inn + "-" + item.kpp + ',';
		});
		str = str.substring(0, str.length - 1);
	}
	return str;
}

function deSerialiseRecipients(str, list) {
	if (str && str != '' && list) {
		const pids = str.split(",");
		pids.forEach(function (el) {
			const item = el.split('-');
			list.push({ "inn": item[0], kpp: item[1] });
		});
	}
}


function chargeExportSend(recid, values) {

	let charge = values ? values : db.findbyrecid("charge_export", recid);

	const userRec = db.findbyparams("users", { login: getcurrentuser().login }, null, 1);
	const orgRec = db.findbyrecid("organization", userRec[0].organizationid);
	const roleRec = db.findbyrecid("sender_role", orgRec.sender_role);

	if (orgRec && roleRec) {
		
		let body = {
			requestName: adapters.chargeinfo,
			isTest: false,
			form: {
				Id: "G_" + recid,
				timestamp: new Date(),
				pageNumber: 1,
				pageLength: 100,
				senderIdentifier: orgRec.sender_identifier,
				senderRole: roleRec.reccode
			}
		};

		if (orgRec.interaction_through_the_aggregator) {
			const orgAgr = db.findbyrecid("organization", aggregator);
			const roleAgr = db.findbyrecid("sender_role", orgAgr.sender_role);

			body.form.senderIdentifier = orgAgr.sender_identifier;
			body.form.senderRole = roleAgr.reccode;
			body.form.originatorId = orgRec.sender_identifier;
		}
		else {
			body.form.senderIdentifier = orgRec.sender_identifier;
			body.form.senderRole = roleRec.reccode;
		}

		switch (parseInt(charge.request_type)) {
			case 1: {
				body.form.kind = "CHARGE";
				break;
			}
			case 2: {
				body.form.kind = "CHARGENOTFULLMATCHED";
				break;
			}
			case 3: {
				body.form.kind = "CHARGESTATUS";
				break;
			}
			case 4: {
				body.form.kind = "CHARGE-PRIOR";
				break;
			}
			case 5: {
				body.form.kind = "CHARGE-PRIOR-NOTFULLMATCHED";
				break;
			}
			case 6: {
				body.form.kind = "CHARGE-PRIOR-STATUS";
				break;
			}
			case 7: {
				body.form.kind = "TEMP-CHARGING";
				break;
			}
			case 8: {
				body.form.kind = "TEMP-CHARGING-NOTFULLMATCHED";
				break;
			}
			case 9: {
				body.form.kind = "TEMP-CHARGING-STATUS";
				break;
			}
		}

		if (charge.condition == "1") {
			body.form.requestType = "TimeConditions";
			body.form.startDate = charge.start_date;
			body.form.endDate = charge.end_date;

			if (charge.kbk && charge.kbk.length > 0) {
				body.form.kbk = [];
				charge.kbk.split(',').forEach(function (item) {
					body.form.kbk.push(item);
				});
			}

			if (charge.set_recipient_data) {
				body.form.BeneficiaryItem = [];
				charge.recipients.split(',').forEach(function (item) {
					const data = item.split('-');
					if (data.length > 1)
						body.form.BeneficiaryItem.push({ inn: data[0], kpp: data[1] });
					else body.form.BeneficiaryItem.push({ inn: data[0] });
				});
			}
		}
		else if (charge.condition == '2') {
			body.form.requestType = "PayersConditions";
			body.form.PayersConditionsType = "PayerIdentifier";
			body.form.setDatePayers = 'Нет';
			
			if (charge.type_select_payer == 1) {
				body.form.PayerIdentifier = [];
				const payer = db.findbyrecid("payer", charge.payer_id);
				body.form.PayerIdentifier.push(payer.payeridentifier);
			}
			else if (charge.type_select_payer == 2) {
				body.form.PayerIdentifier = [];
				body.form.PayerIdentifier.push(charge.payer_identifier);
			}
			else {
				body.form.PayersConditionsType = "PayerInn";
				body.form.PayerInn = [];
				if (charge.payer_ul_inn != null && charge.payer_ul_inn.length > 0) {
					charge.payer_ul_inn.split(',').forEach(function (inn) {
						body.form.PayerInn.push(inn);
					});
				}
			}
		}
		else {
			body.form.requestType = "ChargesConditions";
			body.form.SupplierBillID = [];
			if (charge.uins != null && charge.uins.length > 0) {
				charge.uins.split(',').forEach(function (uin) {
					body.form.SupplierBillID.push(uin);
				});
			}
			if (charge.is_sbp) {
				body.form.paymentMethod = 1;
			}
		}

		try {
			result = sendtosmevgate(JSON.stringify(body), "charge_export", charge.recid, "Запрос на экспорт начислений");
		}
		catch (ex) {
			db.update("charge_export", {
				recid: payment.recid,
				recupdated: new Date(),
				status_request: payment_conditions.Ошибка,
				errorcode: "12",
				errordescription: ex.message
			});
			return {
				success: false,
				message: ex,
				data: result
			}
		}
		db.update("charge_export", {
			recid: charge.recid,
			recupdated: new Date(),
			errorcode: "",
			errordescription: "",
			status_request: payment_conditions.Отправлено
		});

		return {
			success: true,
			message: "Запрос отправлен",
			closeForm: true,
			data: result
		};
	}
}

function charge_export_del(params) {
	if (params.selectedRecords[0].status_request != 1 && !checkUserRole(getcurrentuser(), "Administrators")) {
		return {
			success: false,
			message: "Нет прав на удаление записи",
			closeForm: true
		}
	}
	return tryDelete("charge_export", params.recid);
}





function refund_form_getrecord(params) {

	//редактирование возврата
	if (params.refund_id != null) {
		var refund_data = db.findbyrecid("refund", params.recid);
	} else {

		var payment_record = db.findbyrecid("payment", params.recid);
		var refund_id = generate_refund_id();


		var refund_data = {
			refund_id: refund_id,
			status: refund_status.Черновик,
			payeridentifier: payment_record.payeridentifier,
			payer_name: payment_record.payer_name,
			paymentid: payment_record.paymentid,
			payment: params.recid

		};
	}

	return {
		success: true,
		message: "",
		closeForm: false,
		showMessage: false,
		data: refund_data
	};
}

function set_refund_status(status, recid, errorcode, errordescription) {
	var refund_info = {
		recid: recid,
		recupdated: new Date(),
		status: status,
		errorcode: errorcode,
		errordescription: errordescription
	};

	db.update("refund", refund_info);

}

function refund_form_submit(params) {
	try {
		var refund_recid = refund_save_record(params);

		if (params.send == true) {

			var refundsend_params = { recid: refund_recid };
			var send = refund_send(refundsend_params);

			if (send.success == false) {
				return {
					success: false,
					message: send.message,
					closeForm: false,
					showMessage: false,
					data: null
				};
			}
			set_refund_status(refund_status["Создание возврата"], refund_recid);
		}

		return {
			success: true,
			message: "Операция выполнена успешно",
			closeForm: true,
			showMessage: false,
			data: null
		};
	}
	catch (ex) {
		return {
			success: false,
			message: ex,
			closeForm: false,
			showMessage: false,
			data: null
		};
	}
}

function refund_save_record(params) {

	var recid;

	//редактирование
	if (params.recid != null) {

		//если редактируется ошибочное то сбрасываем в черновик
		if (params.status == refund_status.Ошибка) {
			params.status = refund_status.Черновик;
			params.errorcode = null;
			params.errordescription = null;
		};
		db.update("refund", params);
		recid = params.recid;
	} else {
		//генерим номер заявки на возврат в нашей системе
		var appNum = generate_appnum();

		var new_record = {
			payment: params.payment,
			refund_id: params.refund_id,
			status: params.status,
			refund_date: params.refund_date,
			payer_name: params.payer_name,
			bank_account: params.bank_account,
			bik: params.bik,
			bank_name: params.bank_name,
			personal_account: params.personal_account,
			kbk: params.kbk,
			oktmo: params.oktmo,
			base_doc: params.base_doc,
			number: params.number,
			base_doc_date: params.base_doc_date,
			purpose: params.purpose,
			amount: params.amount,
			cash_type: params.cash_type,
			payeridentifier: params.payeridentifier,
			paymentid: params.paymentid,
			budget_level: params.budget_level,
			app_num: appNum,
			app_date: new Date()
		};

		var result = db.insert("refund", new_record);
		recid = result.recid;
	}

	return recid;
}

function refund_send(params) {
	var refund_recid = params.recid;

	var procedureparams =
	{
		"name": "refund_sel",
		"parameters": [{ "name": "refund_recid", "value": refund_recid, "type": "SysGUID" }]

	};
	var dbrec = db.execprocedure(procedureparams);

	dbrec = dbrec[0];

	var request = {
		"converterName": converters.refund,
		"form": {
			"Id": "G_" + refund_recid,
			"timestamp": new Date(),
			"senderIdentifier": dbrec.sender_identifier,
			"senderRole": dbrec.sender_role,
			"ImportedTypeData": "ImportedRefund",
			"ImportedRefundItems": [
				{
					"ImportedRefundItemsId": "I_" + refund_recid,
					"refundId": dbrec.refund_id,
					"refundDocDate": dbrec.refund_date,
					"budgetLevel": dbrec.budget_level,
					"kbk": dbrec.kbk != "" ? dbrec.kbk : null,
					"oktmo": dbrec.oktmo != "" ? dbrec.oktmo : null,
					"Payer": {
						"codeUBP": dbrec.code_ubp,
						"payerName": dbrec.payer_name,
						"inn": dbrec.inn,
						"kpp": dbrec.kpp
					},
					"Payee": {
						"payerIdentifier": dbrec.payeridentifier,
						"name": dbrec.payee_name,
						"bik": dbrec.bik,
						"correspondentBankAccount": dbrec.personal_account != "" ? dbrec.personal_account : null
					},
					"Application": {
						"appNum": dbrec.app_num,
						"appDate": dbrec.app_date,
						"paymentId": dbrec.paymentid,
						"cashType": dbrec.cash_type,
						"amount": dbrec.amount,
						"purpose": dbrec.purpose
					},
					"Basis": {
						"docKind": dbrec.base_doc,
						"docNumber": dbrec.number,
						"docDate": dbrec.base_doc_date
					}
				}
			]
		},
		format: "xml",
		isBuildEnvelope: true,
		isProviderResponse: false, //false,
		isTest: false //params.data.isemulator
	};

	var xml = rdev.buildXmlFromJson(request, host);

	var sendparams = { data: xml };

	return sendsmevrequest(sendparams);
}

function refund_annul_send(params) {


	var procedureparams =
	{
		"name": "refund_sel",
		"parameters": [{ "name": "refund_recid", "value": params.recid, "type": "SysGUID" }]

	};
	var dbrec = db.execprocedure(procedureparams);

	dbrec = dbrec[0];

	var request = {
		"converterName": converters.refund,
		"form": {
			"Id": "G_" + params.recid,
			"timestamp": new Date(),
			"senderIdentifier": dbrec.sender_identifier,
			"senderRole": dbrec.sender_role,
			"ImportedTypeData": "ImportedChange",
			"ImportedChangeItems": [
				{
					"ImportedChangeItemsId": "I_" + params.recid,
					"RefundId": dbrec.refund_id,
					"ChangeStatus": {
						"meaning": "3",
						"Reason": "Ошибка",
						"ChangeDate": new Date()
					}
				}]
		},
		format: "xml",
		isBuildEnvelope: true,
		isProviderResponse: false, //false,
		isTest: false //params.data.isemulator
	};

	var xml = rdev.buildXmlFromJson(request, host);

	var sendparams = { data: xml };

	sendsmevrequest(sendparams);

	set_refund_status(refund_status["Аннулирование возврата"], params.recid);

	return {
		success: true,
		message: "Операция выполнена успешно",
		closeForm: true,
		showMessage: false,
		data: null
	};
}

function refund_deannul_send(params) {
	var procedureparams =
	{
		"name": "refund_sel",
		"parameters": [{ "name": "refund_recid", "value": params.recid, "type": "SysGUID" }]

	};
	var dbrec = db.execprocedure(procedureparams);

	dbrec = dbrec[0];

	var request = {
		"converterName": converters.refund,
		"form": {
			"Id": "G_" + params.recid,
			"timestamp": new Date(),
			"senderIdentifier": dbrec.sender_identifier,
			// Если есть роль для отправки, то установим её
			"senderRole": params.role ? params.role : dbrec.sender_role,
			"ImportedTypeData": "ImportedChange",
			"ImportedChangeItems": [
				{
					"ImportedChangeItemsId": "I_" + params.recid,
					"RefundId": dbrec.refund_id,
					"ChangeStatus": {
						"meaning": "4",
						"Reason": "Ошибка",
						"ChangeDate": new Date()
					}
				}]
		},
		format: "xml",
		isBuildEnvelope: true,
		isProviderResponse: false, //false,
		isTest: false //params.data.isemulator
	};

	var xml = rdev.buildXmlFromJson(request, host);

	var sendparams = { data: xml };

	sendsmevrequest(sendparams);

	set_refund_status(refund_status["Деаннулирование возврата"], params.recid);

	return {
		success: true,
		message: "Операция выполнена успешно",
		closeForm: true,
		showMessage: false,
		data: null
	};
}

function generate_appnum() {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0');
	var yyyy = String(today.getFullYear()).substr(2);

	var a = dd + mm + yyyy;

	var b = "000" + String(today.getHours()) + String(today.getMinutes()) + String(today.getSeconds()) + String(today.getMilliseconds());
	b = b.substr(b.length - 9);

	return a + b;
}

function generate_refund_id() {
	//a - УРН участника, сформировавшего возврат в десятичном представлении
	//b - Дата возврата в формате «ДДММГГГГ»
	//c - Уникальный номер возврата в учетной системе участника. Номер слева дополняется нулями до 9 цифр

	var currentUser = getcurrentuser();
	if (currentUser == null || currentUser.login == null) {
		return badResponse("Ошибка при создании возврата: Не удалось получить логин текущего пользователя");
	}
	var senderIdentifier = getsenderidentifier(currentUser.login);
	var senderid_dec = "00000000" + parseInt(senderIdentifier, 16);
	var a = senderid_dec.substr(senderid_dec.length - 8);

	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0');
	var yyyy = today.getFullYear();
	var b = dd + mm + yyyy;

	var c = "000" + String(today.getHours()) + String(today.getMinutes()) + String(today.getSeconds()) + String(today.getMilliseconds());
	c = c.substr(c.length - 9);

	var refund_id = a + b + c;

	return refund_id;
}

function charge_import_submit(params) {

	const values = params.values ? params.values : params;
	values.recid = params.recid != '' ? params.recid : null;

	try {

		//можно приложить только один файл
		if (values.file_file != null && values.file_file.length > 1) {
			return {
				success: false,
				message: "Можно приложить только один файл",
				closeForm: false,
				showMessage: true,
				data: null,
			};
		}

		if (values.old != null) {
			//сохраняем запись импорта //сохраняем файл, используем его айди как айди пакета в дальнейшем
			const charge_import_info = {
				date: new Date(),
				amount: values.old.charge_import_add.valid_rows.length,
				status: charge_import_status["Готово к отправке"],
				result: 'Готово к отправке',
				organization: values.old.charge_import_add.payee,
			};
			const charge_import_record = db.insert("charge_import", charge_import_info);
			const recid = charge_import_record.recid;
			saveFile(values.old.file_file[0], "charge_import", recid, "file_file");
		}


		//второе условие values.old == null чтобы всё отработало только когда вызов идет с первой формы
		if (values.check == true && values.old == null) {

			var import_data;
			//получение по контенту
			var ext = values.file_file[0].recName.substr(values.file_file[0].recName.length - 3, 3);
			if (ext == "csv") {
				import_data = get_csv_data(values.file_file[0].content);
				import_data = import_data.data;

			} else {
				import_data = rdev.convertExcelToJson(values.file_file[0].content);
			}

			//проверка данных на соответствие ВС
			if (import_data != null && Array.isArray(import_data)) {
				var check_result = check_massimport_data(import_data);
				//данные на второй форме ждут нас по такому пути old.charge_import_add
				var data = {
					old: {
						file_file: values.file_file,
						charge_import_add: check_result
					}
				};
				return {
					showMessage: false,
					//message: "",
					success: true,
					data: data,
					//closeForm: false,
					idNextForm: "79054fbb-220c-41a8-9061-6b97e63acf65"
					//idNextForm: "06bc2631-f8db-44a2-a7a5-313db49ac34d" 
				};
			}
			return {
				success: false,
				message: "Не найдено записей для проверки",
				closeForm: false,
				showMessage: true
			};
		}

		return {
			success: true,
			message: "Операция выполнена успешно",
			closeForm: true,
			//showMessage: true,
			data: null,
		};
	}
	catch (ex) {
		return {
			success: false,
			message: ex.message,
			closeForm: false,
			showMessage: true,
			data: null
		};
	}
}

function send_massimport_charge() {
	try {
		//получаем запись из таблицы импорта со статусом 0 - Готово к отправке
		var charge_import_record = db.findbyparams("charge_import", { status: charge_import_status["Готово к отправке"] }, null, 1);
		if (charge_import_record == null) return { success: true, data: "Нет записей для обработки", message: null };
		//получаем айди файла
		var file_record = db.findbyparams("rdev___sysfiles", { entityid: charge_import_record[0].recid });
		if (file_record == null) return { success: true, data: "Не найден файл для записи массового импорта " + charge_import_record[0].recid, message: null };
		fileid = file_record[0].recid;

		//конвертим в json
		var import_data;
		var ext = file_record[0].recname.substr(file_record[0].recname.length - 3, 3);
		if (ext == "csv") {
			import_data = get_csv_data(null, fileid);
			import_data = import_data.data;

		} else {
			import_data = rdev.convertExcelToJson(null, 1, fileid);
		}
		if (import_data == null || import_data.length == 0) return { success: true, data: "Не удалось получить содержимое из файла " + fileid, message: null };

		//проверяем на соответствие условиям
		var check_result = check_massimport_data(import_data, charge_import_record[0].organization);

		//сохраняем из valid_row записи начислений с номером пакета
		var charge_recids = [];
		if (check_result.valid_rows.length > 0) {

			//справочники в виде объектов чтобы каждый раз не ломиться в бд
			var payt_reason_dic = db.find("payt_reason");
			var doc_type_dic = db.find("doc_type");
			var payer_status_dic = db.find("payer_status");

			for (var i = 0; i < check_result.valid_rows.length; i++) {
				var el = check_result.valid_rows[i];

				var payer_record = db.findbyparams("payer", { payeridentifier: el.payeridentifier });
				var payer_id;
				if (payer_record != null && payer_record.length > 0) {
					payer_id = payer_record[0].recid;
				} else {
					var payer_doctypecode = el["Документ"].length == 1 ? "0" + el["Документ"] : el["Документ"];
					//var doctype_record = db.findbyparams("doc_type", { reccode: payer_doctypecode });
					var doctype = getrecidbycode(doc_type_dic, payer_doctypecode);
					//для ИП ИНН содержится в поле Номер
					// в el["Номер"] может быть пробел в середине
					var doc_ser_num = null;
					var inn = null;
					if (el["Тип плательщика"] == 4) {
						inn = el["Номер"];
					} else if (el["Тип плательщика"] == 2 || el["Тип плательщика"] == 3) {
						inn = el["ИНН ЮЛ"];
					} else if (el["Тип плательщика"] == 1) {
						doc_ser_num = el["Номер"] != null ? el["Номер"].replace(" ", "") : el["Номер"];
					}
					//payerName пока считать равным "-"
					var payer_info = {
						//orgname: "-",
						//name: "-",
						//lastname: "-",
						//middlename: "-",
						//address: params.payer_address,
						payer_type: el["Тип плательщика"],
						doc_type: doctype,
						doc_ser_num: doc_ser_num,
						inn: inn,
						kpp: el["КПП ЮЛ"],
						kio: el["КИО"],
						payeridentifier: el.payeridentifier
					};
					var payer_record = db.insert("payer", payer_info);
					payer_id = payer_record.recid;
				}

				var status_id = getrecidbycode(payer_status_dic, el["Статус плательщика"]); // db.findbyparams("payer_status", { reccode: el["Статус плательщика"] });
				var paytreason_id = getrecidbycode(payt_reason_dic, el["Основание платежа"]);

				var chargedata_info = {
					purpose: el["Назначение платежа (новое)"],
					total_amount: el["Сумма"] / 100,
					kbk: el["КБК"],
					oktmo: el["ОКТМО"],
					status: status_id,
					payt_reason: paytreason_id,
					tax_docnumber: "0", //el["Показатель номера документа"], не будет передаваться в документе
					tax_period: "0", //el["Налоговый период"], не будет передаваться в документе
					tax_doc_date: null //el["Показатель даты документа"] не будет передаваться в документе
				};

				var chargedata_record = db.insert("charge_data", chargedata_info);


				const yin = generateSupplierBillId(check_result.sender_identifier);
				const charge_info = {
					payee: check_result.payee,
					supplier_bill_id: yin,
					istemplate: false,
					bill_date: new Date(el["Дата"]),
					purpose: el["Назначение платежа (новое)"],
					totalamount: el["Сумма"] / 100,
					amounttopay: el["Сумма"] / 100,
					payer_filling_type: 2,
					payer: payer_id,
					charge_data: chargedata_record.recid,
					package_id: fileid
				};
				const ins = db.insert("charge", charge_info);
				charge_recids.push(ins.recid);
				db.update("charge_import", { recid: charge_import_record[0].recid, recupdated: new Date(), status: charge_import_status["Отправлено"] });
			}
		}

		//передаем айди начислений с номером пакета на формирование xml

		var build_params = { recordIdList: charge_recids, packageid: fileid };
		var xml = buildxml_charge_import(build_params);

		if (xml.success == false) {
			const msg = "Ошибка построения xml " + xml.message;
			db.update("charge_import", { recid: charge_import_record[0].recid, recupdated: new Date(), result: msg });
			return badResponse(msg);
		}

		//отправляем xml
		var send = sendsmevrequest(xml, "charge", _emptyGUID, _request_type.MassiveImport);	//TODO избавиться от _emptyGUID, сделать что бы в историю папали все начисления
		if (send.success == false) {
			const msg = "Ошибка отправки запроса в СМЭВ " + send.message;
			return badResponse(msg);
		}

		//проставляем начислениям из пакета статус Отправлено
		for (var i = 0; i < charge_recids.length; i++) {
			set_charge_status(charge_status["Создание начисления"], charge_recids[i]);
			//записи импорта тоже
			const msg = "Успешно импортировано " + (++i) + " из " + charge_recids.length + " начислений";
			db.update("charge_import", {
				recid: charge_import_record[0].recid,
				recupdated: new Date(),
				result: msg,
				status: charge_import_status.Отправлено
			});
		}

		return { success: true, data: "Выполнено успешно", message: null };
	}
	catch (ex) {
		return { success: false, message: ex.message, data: null };
	}
}

function getrecidbycode(dictionary, code) {
	for (var i = 0; i < dictionary.length; i++) {
		if (dictionary[i].reccode == code) return dictionary[i].recid;
	}
	return null;
};

function check_massimport_data(import_data, organization) {

	//получаем инн организации под которой сидит текущий оператор
	if (organization != null) {
		var organizationRecord = db.findbyparams("organization", { recid: organization });
	}
	else {
		var currentUser = getcurrentuser();
		var usersRecord = db.findbyparams("users", { login: currentUser.login });
		var organizationRecord = db.findbyparams("organization", { recid: usersRecord[0].organizationid });
	}

	var inn = organizationRecord[0].inn;
	var payee = organizationRecord[0].recid;
	var sender_identifier = organizationRecord[0].sender_identifier;


	//ошибки проверки
	var checkerrors = []; //{ rec_number: "7", rec_error: "Некорре"}

	//записи прошедшие проверку
	var valid_rows = [];

	//справочники в виде объектов чтобы каждый раз не ломиться в бд
	var payt_reason_dic = db.find("payt_reason");
	var doc_type_dic = db.find("doc_type");
	var payer_status_dic = db.find("payer_status");

	//result.forEach(function (el) {
	for (var i = 0; i < import_data.length; i++) {
		var el = import_data[i];
		var row_errors = "";

		if (el["ИНН"] != inn) { row_errors += "ИНН не совпадает с ИНН организации оператора. "; }
		if (isdatetime(el["Дата"]) == false) { row_errors += "Формат даты в поле Дата не соответствует dd.MM.yyyy или dd.MM.yyyy hh:mm:ss. "; }
		if (ispositivenumber(el["Сумма"]) == false) { row_errors += "Некорректное значение поля Сумма. "; }
		if (istext(el["Назначение платежа (новое)"]) == false || el["Назначение платежа (новое)"].length > 210) { row_errors += "Некорректное значение поля Назначение платежа. "; } //затримить
		if (iskbk(el["КБК"]) == false) { row_errors += "Некорректное значение поля КБК. "; }
		if (!(el["ОКТМО"] != null && el["ОКТМО"] != "" && (el["ОКТМО"].replace(/\d{11}|\d{8}/, "") == "" || el["ОКТМО"] == "0"))) { row_errors += "Некорректное значение поля ОКТМО. "; }

		var payeridentifier;
		//для ИП ИНН содержится в поле Номер
		// в el["Номер"] может быть пробел в середине
		if (el["Тип плательщика"] == 4) {
			payeridentifier = get_payeridentifier(el["Тип плательщика"], el["Документ"], el["Номер"], el["КПП ЮЛ"], el["КИО"], el["Номер"]);
		} else if (el["inn_enable"]) {
			// todo 
			// payeridentifier = get_payeridentifier(el["Тип плательщика"], el["Документ"], el["Номер"],
			// 	el["КПП ЮЛ"], el["КИО"], el["Номер"],
			// 	el[""], el[""], el[""] );
		} else {
			payeridentifier = get_payeridentifier(el["Тип плательщика"], el["Документ"], el["ИНН ЮЛ"], el["КПП ЮЛ"], el["КИО"], el["Номер"] != null ? el["Номер"].replace(" ", "") : el["Номер"]);
		}

		if (payeridentifier.replace(/1((0[1-9])|(1[0-5])|(2[12456789])|(3[0]))[0-9a-zA-Zа-яА-Я]{19}|200\d{14}[A-Z0-9]{2}\d{3}|300\d{14}[A-Z0-9]{2}\d{3}|3[0]{7}\d{9}[A-Z0-9]{2}\d{3}|4[0]{9}\d{12}/, "") != "") {
			row_errors += "Некорректное значение Идентификатора плательщика. ";
		} else {
			el.payeridentifier = payeridentifier;
		}
		//payerName пока считать равным "-"

		if (el["Статус плательщика"] == null || el["Статус плательщика"].length != 2 || el["Статус плательщика"].replace(/\d+/, "") != "") { row_errors += "Некорректное значение Статус плательщика. "; }

		//Налоговый период не будет заполняться
		//if (el["Налоговый период"] == null || el["Налоговый период"].replace(/[МС,КВ,ПЛ,ГД]{2}\.\d{2}\.\d{4}|\d{8}|\d{2}\.\d{2}\.\d{4}|0/, "") != "") { row_errors += "Некорректное значение Налоговый период. "; }

		//Показатель номера документа не будет заполняться
		//if (el["Показатель номера документа"] == null || el["Показатель номера документа"].length > 15) { row_errors += "Некорректное значение Показатель номера документа. "; }

		if (el["Основание платежа"] == null || el["Основание платежа"].length > 2 || el["Основание платежа"].replace(/ТП|ЗД|БФ|ТР|РС|ОТ|РТ|ПБ|ПР|АП|АР|ИН|ТЛ|ЗТ|ДЕ|ПО|КТ|ИД|ИП|ТУ|БД|КП|ВУ|ДК|ПК|КК|ТК|ПД|КВ|00|0/, "") != "") {
			row_errors += "Некорректное значение Основание платежа. ";
		}

		//Показатель даты документа не будет заполняться
		//if (el["Показатель даты документа"] == null || el["Показатель даты документа"].replace(/((0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.\d{4})|0/, "") != "") { row_errors += "Некорректное значение Показатель даты документа. "; }

		//эти три запроса в бд надо ускорить а то 50 записей обрабатываются 2 минуты. Например считать справочники в объекты перед проверкой и пототм искать не в бд а в них
		if (el["Документ"] != null) {
			var payer_doctypecode = el["Документ"].length == 1 ? "0" + el["Документ"] : el["Документ"];
			//var doctype_record = db.findbyparams("doc_type", { reccode: payer_doctypecode });
			var doctype_record = getrecidbycode(doc_type_dic, payer_doctypecode);
			if (doctype_record == null) row_errors += "В справочнике типов документов не найден тип с кодом " + payer_doctypecode + ". ";
		}
		else {
			row_errors += "Неккоректное значение поля Документ. ";
		}

		if (el["Статус плательщика"] != null) {
			//var status_record = db.findbyparams("payer_status", { reccode: el["Статус плательщика"] });
			var status_record = getrecidbycode(payer_status_dic, el["Статус плательщика"]);
			if (status_record == null) row_errors += "В справочнике статусов плательщика не найден статус с кодом " + el["Статус плательщика"] + ". ";
		}

		if (el["Основание платежа"] != null) {
			//var paytreason_record = db.findbyparams("payt_reason", { reccode: el["Основание платежа"] });
			var paytreason_record = getrecidbycode(payt_reason_dic, el["Основание платежа"]);
			if (paytreason_record == null) row_errors += "В справочнике оснований платежа не найдена запись с кодом " + el["Основание платежа"] + ". ";
		}
		///////////


		if (row_errors != "") {
			checkerrors.push({ rec_number: "Запись " + i, rec_error: row_errors });
		} else {
			valid_rows.push(el);
		}
	}

	var res = {
		checkerrors: checkerrors,
		recs_total: import_data.length,
		recs_valid: valid_rows.length,
		valid_rows: valid_rows,
		payee: payee,
		sender_identifier: sender_identifier
	};

	return res;
}

function get_csv_data(content, fileid) {
	var url = host + "/api/gmp/importchargecsv";
	var headers = {
		'Content-Type': "application/json"
	};
	var body = JSON.stringify({
		fileid: fileid,
		content: content
	});

	return sendRequest("POST", headers, url, body);
}

function iskbk(value) {
	if (value != null && value != "" && (value.replace(/[0-9a-zA-Zа-яА-Я]{20}/, "") == "" || value == "0") && value != "00000000000000000000") {
		return true;
	} else {
		return false;
	}
}

function istext(value) {
	if (value != null && value.replace(/(\S+[\S\s]*\S+)*/, "") == "") {
		return true;
	} else {
		return false;
	}
}

function ispositivenumber(value) {
	if (value != null && value.replace(/\d+/, "") == "" && value > 0) {
		return true;
	} else {
		return false;
	}
}

function isdatetime(value) {
	//как-то так
	if (value != null && value.replace(/((0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[012]).\d{4} (?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d))|((0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[012]).\d{4})/, "") == "") {
		return true;
	} else {
		return false;
	}
}

function charge_import_getrecord(params) {
	var rec = null;

	var check = check_params_pressButton(params);
	if (check.success == false) return check;

	if (params.recid == '') params.recid = null;

	if (params.pressButton.name != _gridToolbarNameSystemButtons.Add && params.recid != null) {
		rec = db.findbyrecid("charge_import", params.recid);

		var sysfiles_rec = db.findbyparams("rdev___sysfiles", { entityid: params.recid });
		if (sysfiles_rec != null && sysfiles_rec.length > 0) {
			rec.file_file = [{ recName: sysfiles_rec[0].recname, recid: sysfiles_rec[0].recid }];
		}
	}
	//найти файл в sysfiles и сюда имя вначале

	return {
		success: true,
		message: "Операция выполнена успешно",
		closeForm: false,
		showMessage: false,
		data: rec
	};
}

function saveFile(file, entityName, entityId, columnName) {
	return fetch(host + '/api/files/uploadfilefromform', {
		method: 'POST',
		body: JSON.stringify({
			file: file.content,
			fileName: file.recName,
			entityName: entityName,
			entityId: entityId,
			columnName: columnName
		})
	});
}

function deleteFile(recid) {
	return fetch(host + '/api/files/delete/' + recid, {
		method: 'DELETE',
	});
}

function helper_re_kvitirovat(params) {
	try {
		var res = {};
		// для каждой записи меняем ее статус
		for (let it in params.value) {
			res[params.value[it].recid] = kvitirovat_send(params.value[it], []);
		}
		return res;
	} catch (ex) {
		return JSON.stringify(ex);
	}
}


function show_subsidiaries_input(params) {
	let message = "";
	let is_subsidiaries = false;

	let result_select = db.findbyparams("organization", { parent_organization: params.recid }, null, null, ["sender_identifier", "sender_role", "name"]);
	if (result_select != null) {
		is_subsidiaries = true;
		for (let i = 0; i < result_select.length; i++) {
			result_select[i].sender_role = db.findbyrecid("sender_role", result_select[i].sender_role).recname;
		}
	}
	else {
		message = "Нет дочерних организаций для '" + params.name + "'";
	}

	return {
		success: true,
		closeForm: !is_subsidiaries,
		showMessage: !is_subsidiaries,
		message: message,
		data: {
			data_grid: result_select
		}
	}
}

function records_smev_history_get_data(params) {

	var check = check_params_pressButton(params);
	if (check.success == false) return check;
	if (params.recid == '') params.recid = null;

	var data = [];
	var records = db.findbyparams("request_history", { table_name: params.tableName, record_id: params.recid }, { reccreated: null });
	var isNotSend
	if (records) {
		records.forEach(function (record, i, arr) {
			var error_type = "";
			var request = db.findbyrecid("rsmev___requests", record.request_id);
			if (request == null || request.length == 0) {
				return;
			}

			try {
				var response = db.findbyparams("rsmev___responses", { OriginalMessageId: request.requestid });
			} catch (err) {
				isNotSend = true
				return;
			}
			
			isNotSend = false

			var user = db.findbyrecid("rdev___auth_users", record.recupdatedby);

			//https://rm.mfc.ru/issues/55325
			if (response != null) {
				response = response[0];
				var response_json = rdev.convertXmlToJson(response.responsetext, true);

				/* * * * * * * * * * * *
				* Получена ошибка СМЭВ *
				* * * * * * * * * * * */
				//////Сори за такие огромные if
				//Смотрим по элементам, если все есть из описания модели с ошибкой (https://rm.mfc.ru/issues/55325), то значит это ошибка
				try {
					var SenderProvidedResponseData = response_json.Envelope.Body.GetResponseResponse.ResponseMessage.Response.SenderProvidedResponseData;
					if (SenderProvidedResponseData != null
						&& (
							(SenderProvidedResponseData.AsyncProcessingStatus != null && SenderProvidedResponseData.AsyncProcessingStatus.SmevFault != null)
							|| (SenderProvidedResponseData.RequestRejected != null && SenderProvidedResponseData.RequestRejected.RejectionReasonCode != null && SenderProvidedResponseData.RequestRejected.RejectionReasonCode != "NO_DATA")
						)
					) {
						error_type = "Получена ошибка СМЭВ"
					};

					if (error_type == "" &&
						(SenderProvidedResponseData.MessagePrimaryContent != null
							&& SenderProvidedResponseData.MessagePrimaryContent.ImportChargesResponse != null
							&& SenderProvidedResponseData.MessagePrimaryContent.ImportChargesResponse.ImportProtocol != null
							&& SenderProvidedResponseData.MessagePrimaryContent.ImportChargesResponse.ImportProtocol["@code"] != null
							&& SenderProvidedResponseData.MessagePrimaryContent.ImportChargesResponse.ImportProtocol["@code"] != 0
						)
						||
						(SenderProvidedResponseData.RequestStatus != null
							&& SenderProvidedResponseData.RequestStatus.StatusCode != null
							&& SenderProvidedResponseData.RequestStatus.StatusCode != 322
						)
					) {
						error_type = "Получена ошибка ГИС ГМП";
					};
				} catch (ex) { }
			}

			data.push(
				{
					request_status: request.isrequestsended ? "Запрос отправлен" : "Запрос не отправлен",
					request_reccreated: request.reccreated,
					request_smev_id: request.requestid,

					response_status:
						response != null
							? (response.recstate == 1 && response.reccode != 'fall' && response.isexportconfirmed == false)	//Условие выборки записей для ФЗ. Если соответствует, значит ФЗ не обработала еще
								? "Ответ от ГИС ГМП получен, но не обработан"
								: "Ответ от ГИС ГМП получен и обработан"
							: "Ответ от ГИС ГМП не получен",
					response_reccreated: response != null ? response.reccreated : null,
					response_smev_id: response != null ? response.messageid : null,

					request_type: record.request_type,
					root_element_request: request.rootelement,
					author: user ? user.recname : "Пользователь не найден",
					request_signed: request.requestsigned,
					response_text: response != null ? response.responsetext : null,
					error_type: error_type,
					comment: record.recdescription
				}
			);
		});
	}

	return {
		success: data.length > 0 ? true : false,
		message: isNotSend ? 'Запрос еще не был отправлен. Повторите запрос истории' : data.length > 0 ? "Успешно найдены" : "Не найдены запросы по данному начислению",
		showMessage: data.length == 0 ? true : false,
		closeForm: data.length == 0 ? true : false,
		data: {
			data_grid: data
		}
	};
}

//Массовое квитирование начислений с отсутствующим платежом из тулбара
function charge_kvitirovat_no_payment(params) {
	var currentUser = check_can_submit();
	if (currentUser.can_submit == false) {
		return Forbidden();
	}

	try {
		kvitirovat_send(params, []);

		set_charge_status(charge_status.Квитирование, params.recid);

		return {
			success: true,
			message: "Запрос отправлен",
			closeForm: true,
			showMessage: false,
			data: params
		};
	}
	catch (ex) {
		return {
			success: false,
			message: "Ошибка принудительного квитирования: " + ex.message,
			data: null
		};
	}
}


function check_params_pressButton(params) {
	if (params.pressButton == null) {
		return {
			success: false,
			message: "Error: pressButton is null. Включите в форме 'Поддержка обработки всех выделенных записей'",
			closeForm: true,
			showMessage: true,
		}
	}

	return {
		success: true
	}
}

// Отправка на создание начисления через тулбар/контекстное меню
function charge_send(params) {
	var currentUser = check_can_submit();
	if (currentUser.can_submit == false) {
		return Forbidden();
	}

	//формируем xml
	var recid_params = { recordIdList: [params.recid], role: params.role };
	var xml = buildxml_charge_import(recid_params);
	if (xml.success == false) {
		throw "Ошибка построения xml " + xml.message;
	}

	//отправляем
	var send = sendsmevrequest(xml, "charge", params.recid, _request_type.NewCharge);
	if (send.success == false) {
		throw "Ошибка отправки запроса в СМЭВ " + send.message;
	}

	//ставим статус
	var state = set_charge_status(charge_status["Создание начисления"], params.recid); //set_send_state(recid_params);
	if (state.success == false) {
		throw "Ошибка обновления статуса начисления " + state.message;
	}

	return {
		success: true,
		showMessage: true,
		message: "Запись отправлена",
		data: params
	}
}

// Отправка на уточнение начисления через тулбар/контекстное меню
function charge_clarify_send_server(params) {
	var currentUser = check_can_submit();
	if (currentUser.can_submit == false) {
		return Forbidden();
	}

	var sended = 0;
	var errors = "";

	params.selectedRecords.forEach(function (record, i, arr) {
		//формируем xml
		var clarify_params = {
			recordIdList: [record.recid],
			data: {
				reason: params.data.reason
			}
		};
		var xml = buildxml_charge_clarify(clarify_params);
		if (xml.success == false) {
			errors += "Запись " + (i + 1) + ": Ошибка построения xml " + xml.message + ", ";
			return;
		}

		//отправляем
		var send = sendsmevrequest(xml, "charge", record.recid, _request_type.ClarifyCharge);
		if (send.success == false) {
			errors += "Запись " + (i + 1) + ": Ошибка отправки запроса в СМЭВ " + send.message + ", ";
			return;
		}

		//ставим статус
		var state = set_charge_status(charge_status["Уточнение начисления"], record.recid); //set_send_state(clarify_params);
		if (state.success == false) {
			errors += "Запись " + (i + 1) + ": Ошибка обновления статуса начисления " + state.message + ", ";
			return;
		}

		sended++;
	});


	return {
		success: sended == params.countOfSelectedRecords,
		showMessage: true,
		message: sended + " из " + params.countOfSelectedRecords + " отправлено" +
			(sended != params.countOfSelectedRecords
				? (". " + errors)
				: ""),
		data: params
	}
}

function check_can_submit(currentUser) {
	if (currentUser == null) {
		var currentUser = getcurrentuser();
	}

	if (currentUser.groups != null) {
		// https://rm.mfc.ru/issues/50137 - Пользователь с ролью Помощник (Assistant) не может отправлять начисление 
		currentUser.can_submit = !currentUser.groups.some(function (val) {
			return val.recname === "Assistant";
		});
	}

	return currentUser;
}

function Forbidden(close_from) {
	return {
		success: false,
		message: "У Вас нет полномочий на данную операцию",
		showMessage: true,
		closeForm: close_from ? close_from : false
	}
}

function charge_universal_form_submit(params) {
	var result;

	// если установлена роль для отправки...
	// находим её запись и подкидываем её сreccode вместо recid
	if (params.values.role != null) {
		const rec = db.findbyrecid("sender_role", params.values.role);
		params.values.role = rec.reccode;
	}

	switch (params.values._form_mode) {
		case _charge_universal_form_mode.AddOrEdit:
			result = charge_form_submit(params);
			break;

		case _charge_universal_form_mode.Clarify:
			result = charge_clarify_form_submit(params.values != null ? params.values : params);
			break;

		default:
			result = badResponse("Неизвестный режим работы формы");
			break;
	}

	return result;
}

/**
 * https://rm.mfc.ru/issues/53691
 * @param {*} params 
 * @returns 
 */
function organization_roles_submit(params) {
	// выбранная роль
	const choisedRole = params.roles;
	// recid организации
	const organizationID = params.recid;

	// проверяем не назначена ли уже, выбранная роль организации
	const org_roles = db.findbyparams("organization_roles", { organizationid: organizationID });
	if (org_roles && org_roles.length) {
		for (let i = 0; i < org_roles.length; i++) {
			if (org_roles[i].sender_role == choisedRole)
				return {
					success: false,
					message: "Выбранная роль уже назначена организации",
					showMessage: true,
					closeForm: false,
				};
		}
	}

	// объект для записи
	const role = {
		organizationid: organizationID,
		sender_role: choisedRole
	};

	// пробуем вставить запись в таблицу
	try {
		db.insert("organization_roles", role);
	}
	catch (er) {
		return {
			success: false,
			message: "Не удалось добавить роль",
			showMessage: true,
			closeForm: true
		};
	}

	// успех 
	return {
		success: true,
		message: "Роль успешно добавлена.",
		showMessage: true,
		closeForm: false,
		data: params
	};
}

/**
 * 
 * @returns 
 */
function get_roles() {

	const currentUser = check_can_submit();
	if (currentUser == null || currentUser.login == null) {
		return badResponse("Ошибка при создании начисления: Не удалось получить логин текущего пользователя");
	}

	const payee = getorganizationid(currentUser.login);
	const org = db.findbyrecid("organization", payee);

	let roles = {
		value: []
	};

	// Добавляем значение по умолчанию
	const defaultRole = db.findbyrecid("sender_role", org.sender_role);
	roles.value.push(defaultRole);

	const org_roles = db.findbyparams("organization_roles", { organizationid: payee });
	if (org_roles && org_roles.length) {
		for (let i = 0; i < org_roles.length; i++) {
			if (org_roles[i].sender_role != defaultRole.recid) {
				const role = db.findbyrecid("sender_role", org_roles[i].sender_role);
				roles.value.push(role);
			}
		}
	}

	return roles;
}

function reestr_delete(params) {

	const table = params.tableName;
	const record = db.findbyrecid(table, params.recid);
	
	let user = getcurrentuser();
	user.organizationid = (db.findbyparams("users", { login: user.login })[0]).organizationid;

	// полный доступ
	if (checkUserRole(user, "Administrators")) {
		return tryDelete(table, record.recid);
	}
	// платежи могут удалять только администраторы
	else if (table == "payment") {
		return {
			success: false,
			message: "Нет прав на удаление",
			closeForm: false,
			showMessage: true
		}
	}
	else if ( !isBlank(table, record)) {
		return {
			success: false,
			message: "Можно удалять только черновики",
			closeForm: false,
			showMessage: true
		}
	}
	else if (checkUserRole(user, "Administrators_Region")) {
			return tryDelete(table, record.recid);
	}
	else if (checkUserRole(user, "Administrators_organization") || checkUserRole(user, "Main_operator") ) {
		if (isOwnOrg(user, table, record))
			return tryDelete(table, record.recid);
	}
	else if (checkUserRole(user, "Operator") || checkUserRole(user, "Assistant") ) {
		if (record.reccreatedby == user.recid)
			return tryDelete(table, record.recid);
		else return {
			success: false,
			message: "Можно удалять только свои записи",
			closeForm: false,
			showMessage: true,
			data: record
		}
	}

	return {
		success: false,
		message: "Нет прав на удаление",
		closeForm: false,
		showMessage: true,
		data: user
	}
}

// черновик?
function isBlank(table, record) {
	return table == "refund" ? record.status == 1 : record.acknowledgment_status == 6;
}

// проверяем назначена ли указаная роль пользователю 
function checkUserRole(user, role) {
	if (user.groups != null) {
		return user.groups.some(function (val) {
			return val.recname === role;
		});
	}
	return false;
}

// пытаемся удалить
function tryDelete(table, recid) {
	try {
		db.delete(table, recid);
	}
	catch (er) {
		return {
			success: false,
			message: "Ошибка удаления записи.",
			showMessage: true,
			data: er
		}
	}
	return {
		success: true,
		message: "Запись успешно удалена",
		showMessage: true
	}
}

// проверяем относится ли запись к организациям пользователя
function isOwnOrg(user, table, record) {
	let orgs = [];
	//orgs = db.findbyparams("organization", { parent_organization: user.organizationid });
	orgs.push(db.findbyrecid("organization", user.organizationid));
	const childOrgs = db.findbyparams("organization", { parent_organization: user.organizationid });
	if (childOrgs && childOrgs.length != 0) {
		childOrgs.forEach(function (item) {
			orgs.push(item);
		});
	}

	if (table == "charge")
		return orgs.some(function (val) {
			return val.recid == record.payee;
		});
	else if (table == "refund") {
		const payment = db.findbyrecid("payment", record.payment);
		if (payment) {
			return orgs.some(function (val) {
				return val.inn == payment.payee_inn;
			});
		}
	}
}

function find_request_collection(req_recid, field) {
	return db.findbyparams("income_request_collections_value",
		{
			recname: field,
			export_id: req_recid
		}
	);
}


function income_export_form_getrecord(params) {

	var fill_grid = function (input_arr, field_name) {
		let result_arr = [];
		if (input_arr && input_arr.length) {
			for (let i = 0; i < input_arr.length; i++) {
				let obj = {};
				obj[field_name] = input_arr[i].reccode;
				result_arr.push(obj);
			}
		}
		return result_arr;
	}

	var check = check_params_pressButton(params);
	if (check.success == false) return check;
	if (params.recid == '') params.recid = null;

	var currentUser = check_can_submit();
	var result = {};

	var formMode = "";
	switch (params.pressButton.name) {
		case _gridToolbarNameSystemButtons.Add:
		case _gridToolbarNameSystemButtons.Edit:
		case _contextMenuSystemButtons.Edit:
			formMode = _income_form_mode.AddOrEdit;
			break;

		case "viewIncomeRequestInfoBtn":
		case "viewIncomeRequestInfoMenu":
		case _contextMenuSystemActions.DoubleClick:
		case _contextMenuSystemActions.PressEnter:
			formMode = _income_form_mode.Info;
			break;

		default:
			return badResponse("Неизвестное место вызова формы. Определите режим работы формы для кнопки: " + params.pressButton.name);
			break;
	}
	result._form_mode = formMode;

	try {
		//	Запись уже есть, поэтому подгрузим данные из БД
		if (params.pressButton.name != _gridToolbarNameSystemButtons.Add && params.recid != null) {
			let record_db = db.findbyrecid("income_request", params.recid);
			result.errordescription = record_db.errordescription;
			result.request_condition = record_db.income_request_condition;

			//	Что бы не делать лишних запросов, смотрим какое условие
			switch (result.request_condition) {
				//	По уникальному идентификатору начисления (УИН)
				case _income_request_condition_enum.ChargesConditions:
					result.edit_grid_supplier_bill_id = fill_grid(
						find_request_collection(params.recid, "supplier_bill_id"),
						"supplier_bill_id");
					break;

				//	По идентификатору плательщика
				case _income_request_condition_enum.PayersConditions:
					result.payer_type = record_db.payer_type;
					//	Если из справочника
					if (result.payer_type == 1) {
						result.payer_identifier_select = record_db.payer_identifier_dictionary;
					}
					else {
						result.payer_identifier_manual = record_db.payer_identifier;
					}

					result.start_date = record_db.start_date;
					result.end_date = record_db.end_date;
					result.edit_grid_kbk = fill_grid(
						find_request_collection(params.recid, "kbk"),
						"kbk");
					break;

				//	По уникальному присваиваемому номеру операции (УПНО (УИП))
				case _income_request_condition_enum.PaymentsConditions:
					result.edit_grid_paymentid = fill_grid(
						find_request_collection(params.recid, "paymentid"),
						"paymentid");
					break;

				//	За период
				case _income_request_condition_enum.TimeConditions:
					result.start_date = record_db.start_date;
					result.end_date = record_db.end_date;
					result.edit_grid_kbk = fill_grid(
						find_request_collection(params.recid, "kbk"),
						"kbk");
					result.inn = record_db.inn;
					result.kpp = record_db.kpp;
					break;

				//	По уникальному идентификатору зачисления (УИЗ)
				case _income_request_condition_enum.IncomesConditions:
					result.edit_grid_income_id = fill_grid(
						find_request_collection(params.recid, "income_id"),
						"income_id");
					break;
			}

			//	TODO
			//	Сейчас нельзя убрать кнопки с компонента RDevFile и поэтому можно загружать и удалять файлы всегда, что нам не подходит
			// result.income_request_files = file.getlist("income_request", record_db.recid);

		}
		else {
			var organizationid = db.findbyparams("users", { login: currentUser.login })[0].organizationid;
			var payee = db.findbyrecid("organization",
				organizationid);
			result.inn = payee.inn;
			result.kpp = payee.kpp;
		}

	} catch (error) {
		return {
			success: false,
			message: error,
			closeForm: true,
			data: result
		}
	}

	return {
		success: true,
		showMessage: false,
		data: result
	}
}


function income_export_form_saverecord(params) {
	var values = params.values;
	values.recid =
		params.pressButton.name != _gridToolbarNameSystemButtons.Add && params.recid != ''
			? params.recid
			: null;

	var new_collection = [];	//	Массив для новых объектов коллекции
	var income_request = {};
	let income_db = {};


	try {
		if (values.edit_grid_supplier_bill_id) {
			if (values.edit_grid_supplier_bill_id.length > 100) {
				return badRequest("Указано более 100 УИН", values);
			}
			for (let i = 0; i < values.edit_grid_supplier_bill_id.length; i++) {
				new_collection.push({ recname: "supplier_bill_id", reccode: values.edit_grid_supplier_bill_id[i].supplier_bill_id });
			}
		}

		income_request.payer_type = values.payer_type;
		//	Из справочника
		if (income_request.payer_type == 1) {
			income_request.payer_identifier_dictionary = values.payer_identifier_select;
		}
		else {
			income_request.payer_identifier = values.payer_identifier_manual;
		}

		if (values.edit_grid_paymentid) {
			if (values.edit_grid_paymentid.length > 100) {
				return badRequest("Указано более 100 УИП", values);
			}
			for (let i = 0; i < values.edit_grid_paymentid.length; i++) {
				new_collection.push({ recname: "paymentid", reccode: values.edit_grid_paymentid[0].paymentid });
			}
		}

		if (values.edit_grid_income_id) {
			if (values.edit_grid_income_id.length > 100) {
				return badRequest("Указано более 100 УИЗ", values);
			}
			for (let i = 0; i < values.edit_grid_income_id.length; i++) {
				new_collection.push({ recname: "income_id", reccode: values.edit_grid_income_id[i].income_id });
			}
		}

		if (values.start_date && values.end_date) {
			income_request.start_date = delete_timezone(values.start_date);
			income_request.end_date = delete_timezone(values.end_date);
		}
		income_request.inn = values.inn;
		income_request.kpp = values.kpp;

		if (values.edit_grid_kbk) {
			if (values.edit_grid_kbk.length > 10) {
				return badRequest("Указано более 10 КБК", values);
			}
			for (let i = 0; i < values.edit_grid_kbk.length; i++) {
				new_collection.push({ recname: "kbk", reccode: values.edit_grid_kbk[i].kbk });
			}
		}

		income_request.income_request_status = _income_status_enum["Черновик"];
		income_request.income_request_condition = values.request_condition;

		//	Обновляем запись
		if (values.recid) {
			income_request.recid = values.recid;
			income_request.recupdated = new Date();
			db.update("income_request", income_request);
			income_db = income_request;
			income_db.recid = values.recid;
		}
		//	Или создаем
		else {
			income_db = db.insert("income_request", income_request);
		}

		//	Бекапим текущие значения коллекций для запроса: recstate = 99
		//	При ошибке вставки новых записей мы можем вернуть предыдущие данные.
		//	PS: функция всегда вернет '1', поэтому даже не записываем результат выполнения
		//	PPS: если это новая запись, то не будем тратить ресурсы на выполнение функции
		if (values.recid) {
			var procedureparams =
			{
				"name": "backup_income_export_collectionvalues",
				"parameters": [{ "name": "export_id_input", "value": income_db.recid, "type": "SysGUID" }]
			};
			db.execprocedure(procedureparams);
		}

		//	Заносим новые данные для коллекций
		for (let i = 0; i < new_collection.length; i++) {
			db.insert("income_request_collections_value",
				{
					export_id: income_db.recid,
					recname: new_collection[i].recname,
					reccode: new_collection[i].reccode
				}
			);
		}

		//	Если прошло все ок, то удаляем бекапные данные
		//	PS: функция всегда вернет '1', поэтому даже не записываем результат выполнения
		//	PPS: если это новая запись, то не будем тратить ресурсы на выполнение функции
		if (values.recid) {
			var procedureparams =
			{
				"name": "restore_backup_income_export_values",
				"parameters": [{ "name": "export_id_to_restore", "value": income_db.recid, "type": "SysGUID" }]
			};
			db.execprocedure(procedureparams);
		}

		if (values.submit) {
			return incomeExportSend(income_db.recid)
		}
	}
	catch (err) {
		//	Все пошло не по плану - восстанавливаем из бекапа
		//	PS: функция всегда вернет '1', поэтому даже не записываем результат выполнения
		//	PPS: если это новая запись, то не будем тратить ресурсы на выполнение функции
		if (values.recid) {
			var procedureparams =
			{
				"name": "backup_income_export_delete_values",
				"parameters": [{ "name": "export_id_to_del", "value": income_db.recid, "type": "SysGUID" }]
			};
			db.execprocedure(procedureparams);
		}

		//	Удаляем запись что бы не плодить
		db.delete("income_request", income_db.recid);

		return badRequest("Что-то пошло не так: " + err, values);
	}

	return {
		success: true,
		message: "Запрос создан",
		closeForm: true,
		data: null
	}
}

function incomeExportSend (recid){

	const income_db = db.findbyrecid("income_request", recid)
	const new_collection = db.findbyparams("income_request_collections_value", {export_id: recid}) || []

	var userRec = db.findbyparams("users", { login: getcurrentuser().login }, null, 1);
			var orgRec = db.findbyrecid("organization", userRec[0].organizationid);
			var roleRec = db.findbyrecid("sender_role", orgRec.sender_role);

			if (!orgRec || !roleRec) {
				throw "Невозможно определить организацию пользователя";
			}

			var body = {
				requestName: adapters.income_export,
				isTest: false,
				form: {
					Id: "G_" + income_db.recid,
					timestamp: date_curent_timezone(),
					kind: "INCOME",
					pageNumber: 1,
					pageLength: 1000	//	Что бы сразу побольше запросить
				}
			};

			if (orgRec.interaction_through_the_aggregator) {
				var orgAgr = db.findbyrecid("organization", aggregator);
				var roleAgr = db.findbyrecid("sender_role", orgAgr.sender_role);

				body.form.senderIdentifier = orgAgr.sender_identifier;
				body.form.senderRole = roleAgr.reccode;
				body.form.originatorId = orgRec.sender_identifier;
			}
			else {
				body.form.senderIdentifier = orgRec.sender_identifier;
				body.form.senderRole = roleRec.reccode;
			}

			switch (income_db.income_request_condition) {
				case _income_request_condition_enum.ChargesConditions:
					body.form.requestType = "ChargesConditions";
					body.form.SupplierBillID = [];
					for (let i = 0; i < new_collection.length; i++) {
						if (new_collection[i].recname == "supplier_bill_id")
							body.form.SupplierBillID.push(new_collection[i].reccode);
					}
					if (body.form.SupplierBillID.length == 0) {
						body.form.SupplierBillID = null;
					}
					break;

				case _income_request_condition_enum.PayersConditions:
					body.form.requestType = "PayersConditions";
					var payerIdentifier = "";
					if (income_db.payer_type == 1) {
						payerIdentifier = db.findbyrecid("payer", income_db.payer_identifier_dictionary).payeridentifier;
					}
					else {
						payerIdentifier = income_db.payer_identifier;
					}

					body.form.PayerIdentifier = [payerIdentifier];
					body.form.startDate = income_db.start_date;
					body.form.endDate = income_db.end_date;

					body.form.KBK = [];
					for (let i = 0; i < new_collection.length; i++) {
						if (new_collection[i].recname == "kbk")
							body.form.KBK.push(new_collection[i].reccode);
					}
					if (body.form.KBK.length == 0) {
						body.form.KBK = null;
					}

					break;

				case _income_request_condition_enum.PaymentsConditions:
					body.form.requestType = "PaymentsConditions";
					body.form.PaymentId = [];
					for (let i = 0; i < new_collection.length; i++) {
						if (new_collection[i].recname == "paymentid")
							body.form.PaymentId.push(new_collection[i].reccode);
					}
					if (body.form.PaymentId.length == 0) {
						body.form.PaymentId = null;
					}
					break;

				case _income_request_condition_enum.TimeConditions:
					body.form.requestType = "TimeConditions";
					body.form.startDate = income_db.start_date;
					body.form.endDate = income_db.end_date;
					body.form.BeneficiaryItem = [{ kpp: income_db.kpp, inn: income_db.inn }];
					body.form.KBK = [];
					for (let i = 0; i < new_collection.length; i++) {
						if (new_collection[i].recname == "kbk")
							body.form.KBK.push(new_collection[i].reccode);
					}
					if (body.form.KBK.length == 0) {
						body.form.KBK = null;
					}
					break;

				case _income_request_condition_enum.IncomesConditions:
					body.form.requestType = "IncomesConditions";
					body.form.IncomeId = [];
					for (let i = 0; i < new_collection.length; i++) {
						if (new_collection[i].recname == "income_id")
							body.form.IncomeId.push(new_collection[i].reccode);
					}
					if (body.form.IncomeId.length == 0) {
						bbody.form.IncomeId = null;
					}
					break;

				default:
					return badRequest("Ошибка построения JSON запроса: неизвестное условие запроса", values);
					break;
			}

			try {
				var result = sendtosmevgate(JSON.stringify(body), "income_request", income_db.recid, _request_type.ExportIncomeRequest);

				if (!result) {
					event.log("Отправка запроса экспорта зачислений на шлюз", income_db.recid, "Шлюз не принял запрос на экспорт зачислений", 4, body);
					return badRequest("Шлюз не принял запрос на экспорт зачислений. ");
				}

				db.update("income_request",
					{
						recid: income_db.recid,
						recupdated: new Date(),
						income_request_status: _income_status_enum["Запрос отправлен"],
						request_id: result.requestId
					}
				);
			}
			catch (ex) {
				return {
					success: false,
					message: "Ошибка на стадии отправки или обновления статуса: " + ex,
					data: null
				}
			}
			return {
				success: true,
				message: "Запрос отправлен",
				closeForm: true
			};
}

function income_export_send_button (params){
	incomeExportSend(params.recid)
	return {
		success: true,
		message: 'Запрос отправлен'
	}
}

function request_income_information(params){

}



function parse_income_test(){
	return parse_ExportIncomesResponse_response(db.findbyrecid("rsmev___responses",'d7243faa-6b17-480a-adc2-21d3522cf7dd'));
}

function parse_ExportIncomesResponse_response(responseRecord) {
	var link_income_file = function (entityid_old, entityid_new, pageNumber) {
		if (pageNumber == null) { pageNumber = 0; }
		var procedureparams =
		{
			"name": "link_file",
			"parameters": [
				{ "name": "entityid_old", "value": entityid_old, "type": "SysGUID" },
				{ "name": "entityid_new", "value": entityid_new, "type": "SysGUID" },
				{ "name": "columnname_in", "value": "income_request_files", "type": "SysString" },
				{ "name": "recname_in", "value": "page" + pageNumber + ".pdf", "type": "SysString" },
				{ "name": "entityname_in", "value": "income_request", "type": "SysString" }
			]
		};
		var dbrec = db.execprocedure(procedureparams);
	}

	try {
		var response = rdev.convertXmlToJson(responseRecord.responseprimarycontent, true)["ExportIncomesResponse"];

		const requestRecord = db.findbyrecid("rsmev___requests", responseRecord.requestid);
		const requestData = JSON.parse(requestRecord.requestincoming);

		const jsonTemplate = {
			"requestData": {
				"SupplierBillID": [''],
				"PayerIdentifier": [''],
				"BeneficiaryItem": [{"kpp": '', "inn": ''}],
				"PaymentId":[""],
				"IncomeId": [""],
				"KBK": [''],
				"endDate": '',
				"startDate": ''
			},
			"IncomeInfo": {}
		}
		
		
		Object.keys(response).forEach(function(key){
			if (key !== "IncomeInfo"){
				jsonTemplate[key] = response[key]
		}})

		Object.keys(requestData.form).forEach(function(key){
			jsonTemplate["requestData"][key] = requestData.form[key] || ['']
				
		})

		var responseId = response["@Id"];
		var incomeRequestId = response["@RqId"].substr(2);
		var hasMore = response["@hasMore"];
		var recipientIdentifier = response["@recipientIdentifier"];
		var exportRecord = db.findbyrecid("income_request", incomeRequestId);

		if (!response.IncomeInfo) {
			link_income_file(responseRecord.recid, incomeRequestId);
			db.insert("responses_log",
				{
					id_response: responseRecord.recid,
					reccode: "Информация при парсинге зачислений",
					recdescription: "В ответе '" + responseRecord.recid + "' не содержится зачислений",
				});
			if (exportRecord) {
				db.update("income_request",
					{
						recid: exportRecord.recid,
						recupdated: new Date(),
						income_request_status: _income_status_enum["Ответ получен"]
					}
				);
			}
			return { success: true, message: "В ответе не содержиться зачислений" };
		}

		var incomeInfo = response.IncomeInfo;

		if (!Array.isArray(incomeInfo)) {
			incomeInfo = [incomeInfo];
		}

		for (let i = 0; i < incomeInfo.length; i++) {
			let income = parse_income_response(incomeInfo[i], recipientIdentifier);
			const jsonIncomeData = generate_income_report(jsonTemplate, incomeInfo[i]) 

			//	Ищем начисление в БД
			var income_db = db.findbyparams("income", { income_id: income.income_id });
			if (!income_db) {
				income_db = db.insert("income", income);
			}
			else {
				if (income_db.length != 1) {
					throw "Ошибка при парсинге ответа зачислений: найден не уникальный УИЗ " + income.income_id;
				}
				
				income.recid=income_db[0].recid
				income.recupdated = new Date();

				db.update("income", income);
				income_db = db.findbyparams("income", { income_id: income.income_id })[0];
			}
			try {
			reports.stiGenerate(
				"income", // Наименование файла шаблона отчета
				"Report", // Наименование файла готового отчета
				"pdf", // Расширение файла готового отчета
				{
					"DataSourceType": 1, // Тип источника данных (0: БД; 1: JSON)
					"Data": JSON.stringify(jsonIncomeData) // Данные
				}, // Источник данных (необязательно)
				{}, // Переменные
				income_db.recid, // Идентификатор записи
				"income", // Наименование таблицы
				"income_data", // Наименование поля
				true, // Флаг "Удалить предыдущие отчеты"
				null,
				false // Номер страницы отчета, которая будет сгенерирована (необязательно)
			)} catch (err){
				db.insert("responses_log", {
					id_response: null,
					reccode: 'Ошибка генерации файла',
					recname: "Отсутсвует обязательное поле",
					recdescription: err.message,
					recupdated: new Date()
				});
			}
		};

		if (exportRecord) {
			link_income_file(responseRecord.recid, incomeRequestId, requestData.form.pageNumber + 1);
		}

		if (hasMore == "true") {
			if (requestRecord) {
				requestData.form.pageNumber = requestData.form.pageNumber + 1;
				sendtosmevgate(JSON.stringify(requestData), "income_request", exportRecord.recid, _request_type.ExportIncomeNextRequest);
				return { success: true, message: "Запрошена следующая страница: " + requestData.form.pageNumber };
			}
		}

		if (exportRecord) {
			db.update("income_request",
				{
					recid: exportRecord.recid,
					recupdated: new Date(),
					income_request_status: _income_status_enum["Ответ получен"]
				}
			);
		}


		return {
			responseId: responseId,
			incomeRequestId: incomeRequestId,
			hasMore: hasMore,
			recipientIdentifier: recipientIdentifier,
			isArray: Array.isArray(incomeInfo),
			incomeInfo: incomeInfo,
			// getresponse:getresponse("e724ab10-f71c-4150-87dd-0e67f975302c")
		}


	} catch (error) {
		let exportRecord = db.findbyrecid("income_request", incomeRequestId);
		if (exportRecord) {
			db.update("income_request",
				{
					recid: exportRecord.recid,
					recupdated: new Date(),
					income_request_status: _income_status_enum["Ошибка"],
					errordescription: error.toString()
				}
			);
		}

		return {
			success: false,
			message: 'Ошибка при парсинге зачисления ' + error.message
		}
	}

}

function generate_income_report(jsonTemplate, incomeData){
	Object.keys(incomeData).forEach(function(key){
		jsonTemplate['IncomeInfo'][key] = incomeData[key]
	})
	return jsonTemplate;
}


function parse_income_response(record, recipientIdentifier) {
	var income = {
		recipient_identifier: recipientIdentifier,
		supplier_bill_id: record["@supplierBillID"],
		purpose: record["@purpose"],
		amount: record["@amount"],
		receipt_date: record["@receiptDate"],
		payment_exec_date: record["@paymentExecDate"],
		kbk: record["@kbk"],
		oktmo: record["@oktmo"],
		trans_kind: record["@transKind"],
		income_id: record["@incomeId"],
		income_date: record["@incomeDate"],
		ed_code: record["@edCode"],
		ed_no: record["@edNo"],
		ed_date: record["@edDate"],
		transaction_id: record["@transactionID"],
		charge_off_date: record["@chargeOffDate"],
		is_uncertain: record["@isUncertain"],
		payment_id: record["@paymentId"],

		//	Payee
		payee_name: record.Payee["@name"],
		payee_inn: record.Payee["@inn"],
		payee_kpp: record.Payee["@kpp"],
		payee_ogrn: record.Payee["@ogrn"],
		payee_account_number: record.Payee.OrgAccount["@accountNumber"],
		payee_bank_name: record.Payee.OrgAccount.Bank["@name"],
		payee_bank_bik: record.Payee.OrgAccount.Bank["@bik"],
		payee_correspondent_bank_account: record.Payee.OrgAccount.Bank["@correspondentBankAccount"],

		//	ChangeStatusInfo
		meaning: record.ChangeStatusInfo.Meaning,
		reason: record.ChangeStatusInfo.Reason,
		change_date: record.ChangeStatusInfo.ChangeDate
	};


	//	IncomeIndex - контейнер может отсутствовать
	if (record.IncomeIndex) {
		income.income_index_kbk = record.IncomeIndex["@kbk"];
		income.income_index_oktmo = record.IncomeIndex["@oktmo"];
		income.income_index_inn = record.IncomeIndex["@inn"];
		income.income_index_kpp = record.IncomeIndex["@kpp"];
		income.income_index_account_number = record.IncomeIndex["@accountNumber"];
	}

	//	PaymentOrg
	//	PS: теги взаимоисключающие
	if (record.PaymentOrg.Bank) {
		income.payment_bank_name = record.PaymentOrg.Bank["@name"];
		income.payment_bik = record.PaymentOrg.Bank["@bik"];
		income.payment_correspondent_bank_account = record.PaymentOrg.Bank["@correspondentBankAccount"];
	}
	else if (record.PaymentOrg.UFK) {
		income.payment_ufk = record.PaymentOrg.UFK;
	}
	else if (record.PaymentOrg.Other) {
		income.payment_other = record.PaymentOrg.Other;
	}

	//	Payer - контейнер может отсутствовать
	if (record.Payer) {
		income.payer_identifier = record.Payer["@payerIdentifier"];
		income.payer_name = record.Payer["@payerName"];
		income.payer_account = record.Payer["@payerAccount"];
	}

	//	BudgetIndex - контейнер может отсутствовать
	if (record.BudgetIndex) {
		income.status = record.BudgetIndex["@status"]
		income.payt_reason = record.BudgetIndex["@paytReason"]
		income.tax_period = record.BudgetIndex["@taxPeriod"]
		income.tax_doc_number = record.BudgetIndex["@taxDocNumber"]
		income.tax_doc_date = record.BudgetIndex["@taxDocDate"]
	}

	//	AccDoc - контейнер может отсутствовать
	if (record.AccDoc) {
		income.acc_doc_no = record.AccDoc.accDocNo;
		income.acc_doc_date = record.AccDoc.accDocDate;
	}
	income.income_request_status = _income_status_enum["Ответ получен"]

	return income;
}


function getresponse(id){
	var url = String().concat(host, "/api/smev/getresponse/"+id); //TODO проверку
	var result = sendRequest("GET", null, url, null);
	return result;
}


function test_func(params) {
	var request = {
		"requestName": "TEST",
		"isTest": true,
		"form": {
			"Id": "G_" + guid(),
			"timestamp": new Date(),
			"senderIdentifier": "3102a1",
			"senderRole": "3",
			// "pageNumber": 1,
			// "pageLength": 100,
			"kind": "INCOME",
			"requestType": "IncomesConditions",
			//"requestType": "TimeConditions",
			"startDate": new Date(2020, 8, 28),
			"endDate": new Date(2020, 8, 30),
			"IncomeId": ["49999300920200000000000000301067"]
		}
	};

	var result = sendtosmevgate(JSON.stringify(request));

	return {
		request: request,
		result: result
	}
}


function send_income_request(){
	
	var procedureparams =
		{
			"name": "get_all_unique_organization",
			"parameters": []

		};
		const organizationList = db.execprocedure(procedureparams)

		const currentDate = new Date()   
		
		var startTime = '01:00:10';
		var endTime = '02:00:00';

		var startDate = new Date(currentDate.getTime());
		startDate.setHours(startTime.split(":")[0]);
		startDate.setMinutes(startTime.split(":")[1]);
		startDate.setSeconds(startTime.split(":")[2]);

		var endDate = new Date(currentDate.getTime());
		endDate.setHours(endTime.split(":")[0]);
		endDate.setMinutes(endTime.split(":")[1]);
		endDate.setSeconds(endTime.split(":")[2]);

		if (!(startDate < currentDate && endDate > currentDate)){
			return {
				success: false,
				message: "Вызов фз не попал во временной интервал или зачисления сегодня уже обновлялись",
				data: null	
			}
		} 
	
		

	const start_date = date_curent_timezone();
	start_date.setDate(start_date.getDate() - 1)

	const end_date = date_curent_timezone()

	organizationList.forEach(function(organization){
		if (organization.sender_role !== null){
			const income_request = {}
			income_request.start_date = start_date;
			income_request.end_date = end_date;
			const roleRec = db.findbyrecid("sender_role", organization.sender_role);
	
			var body = JSON.stringify({
				requestName: adapters.income_export,
				isTest: false,
				form: {
					Id: "G_" + roleRec.recid,
					timestamp: date_curent_timezone(),
					senderIdentifier: organization.sender_identifier,
					senderRole: roleRec.reccode,
					pageNumber: 1,
					pageLength: 100,
					kind: "INCOME",
					requestType: "TimeConditions",
					startDate: start_date,
					endDate: end_date
				}
			});
		
			try {
				var result = sendtosmevgate(body, "income_request", roleRec.recid, _request_type.ExportIncomeRequest);
		
				if (!result) {
					event.log("Отправка запроса зачислений на шлюз", roleRec.recid, "Шлюз не принял запрос на зачислений", 4, body);
					return badRequest("Шлюз не принял запрос на зачислений.");
				}
		
			} catch (ex) {
				return {
					success: false,
					message: "Ошибка на стадии отправки или обновления статуса: " + ex,
					data: null
				}
			}
		}
		
	})	
}


function income_actualize(params) {
	const incomeData = params.selectedRecords[0]

	try {
		const userRec = db.findbyparams("users", { login: getcurrentuser().login }, null, 1);
		const orgRec = db.findbyrecid("organization", userRec[0].organizationid);
		const roleRec = db.findbyrecid("sender_role", orgRec.sender_role);

		if (!orgRec || !roleRec) {
			throw "Невозможно определить организацию пользователя";
		}

		var body = JSON.stringify({
			requestName: adapters.income_export,
			isTest: false,
			form: {
				Id: "G_" + guid(),
				timestamp: new Date(),
				senderIdentifier: orgRec.sender_identifier,
				senderRole: roleRec.reccode,
				pageNumber: 1,
				pageLength: 100,
				kind: "INCOME",
				requestType: "IncomesConditions",
				IncomeId: [incomeData.income_id]
		}});

		

		try {
			var result = sendtosmevgate(body, "income", incomeData.recid, "Запрос на актуализацию зачисления");

			if (result == null) {
				event.log("Отправка запроса на шлюз", null, "Шлюз не принял запрос", 4, body);

				return {
					success: false,
					message: "Шлюз не принял запрос",
					data: null
				};

			}
		} catch (ex) {
			return {
				success: false,
				message: "Шлюз не принял запрос: " + ex.message,
				data: null
			};
		}

		const income_db = db.findbyrecid("income", incomeData.recid);

		income_db.recupdated = new Date();
		income_db.income_request_status = _income_status_enum["Запрос отправлен"];

		db.update("income", income_db)


		return {
			success: true,
			message: "Запрос отправлен",
			closeForm: false,
			showMessage: false,
			data: params
		};
	}
	catch (ex) {
		return {
			success: false,
			message: "Ошибка уточнения данных по платежам: " + ex.message,
			data: null
		};
	}
}

function delete_from_context (params){
	db.delete(params.tableName, params.recid)
	return {
		message: "Запись успешно удалена",
		success: true
	}	
}