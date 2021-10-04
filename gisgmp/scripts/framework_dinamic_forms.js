/* v 2020.03.24 */
/*
 * Проектный объект для каждой формы, описывается аналитиком. Они необходимы для работы обработчика форм.
 * Тип объекта const/var выбирается аналитиком на свое усмотрение, в зависимости от необходимой кастомной логики.
 * Наименование объекта выбирается аналитиком.
 * Основные правила заполнения:
 * 1) Имя объекта = имени контейнера на форме ( в свою очередь имена контейнеров должны совпадать с именами таблиц в БД)
 * 2) Для объекта имени доступны следующие свойства:
 *		2.1) firstTable - true, указывается для первой таблицы, с которой происходит вызов формы.
 *		2.2) parentTable - строка, содержащая наименование родительской таблицы, идентификатор которой служит в качестве ключа.
 *		2.3) relationField - строка, содержащая имя поля, хранящего ключ.
 *		2.4) underTable - объект, содержащий объекты описания подтаблиц, используемых в текущей таблице.
 *						  доступны следующие свойства:
 *				2.4.1) relationField -  строка, содержащая имя поля, хранящего ключ. (родителем всегда является владелец параметра)
 *
 * ДОПУСКАЕТСЯ внесение родительских таблиц для первой.
 * В этом случае для родительских таблиц указываем параметр
 *   firstField - строка, имя поля первой таблицы, где хранится ключ для поиска, (поиск по родительской происходит только для поля recid).
 *   parentTable - не указывается! 
 */

/* ПРИМЕР ЗАПОЛНЕНИЯ ПРОЕКТНОГО ОБЪЕКТА ФОРМЫ
const form_prj = {
	"customer": {
		firstField: "reccode"
	},
	"request": {
		firstTable: true
	},
	"doxod": {
		parentTable: "request",
		relationField: "recid"
	},
	"inoy_doxod": {
		parentTable: "doxod",
		relationField: "reccode"
	},
	"rasxod": {
		parentTable: "request",
		relationField: "reccode",
		underTable: {
			"tc": {
				relationField: "reccode"
			},
			"stock": {
				relationField: "reccode"
			},
			"land": {
				relationField: "reccode"
			}
		}
	}
};
*/

///////***DINAMIC FORM FRAMEWORK***////////////////////////////////////////
/////////////////////////////////// СУПЕРМЕТОДЫ СОХРАНЕНИЯ/ЗАГРУЗКИ
///////////////////////////////////////////////////////////////////////////
var df = {
	/**
	 * Поиск всех данных для формы в БД и дальнейшая их отправка на форму 
	 * @param {object} form_prj Объект с зависимостями таблиц, где ключ - название таблицы, а значение - объект, который содержит table: "название таблицы
	 * зависит данная таблица", relation: "поле зависимости".
	 * Таблица на которой вызывается форма должна быть со значением table: null.
	 * @param {object} params Объект, который возвращается при открытии формы на записи в таблице
	 * @returns {object} Возвращает объект с данными со всех таблиц, описанных в obj
	 */
	loadForm: function (form_prj, params) {
		var keys = [];
		var res = null;
		var relation_field = {};
		var output = {};
		// поиск таблицы, на которой вызывается форма
		for (let key in form_prj) {
			if (form_prj[key].hasOwnProperty("firstTable")) {
				var super_table = key;
				var super_table_relation = form_prj[key].relationField;
				output[super_table] = params; //df.searchAll(params.recid, super_table);
				output[super_table] = df.getFileList(output[super_table], key);
				break;
			}
		}

		if (super_table) {
			for (let key in form_prj) {
				if (form_prj[key].parentTable == super_table) {
					relation_field[form_prj[key].relationField] = params.recid;
					res = df.searchAll(relation_field, key);
					delete relation_field[form_prj[key].relationField];
					// наполняем массив для того, чтобы потом отследить зависимости
					if (res) {
						output[key] = res;
						keys.push(key);
					}
				}
				// главная таблица
				else if (key === form_prj[key].parentTable) {
					output[key] = df.searchAll(params[super_table_relation], key);
				}
			}
			for (let key in form_prj) {
				if (form_prj[key].parentTable != super_table) {
					// поиск значений в ранее созданном массиве, это означает, что выводить данные со связанных таблиц можно
					if (!(keys.indexOf(form_prj[key].parentTable) == -1)) {
						relation_field[form_prj[key].relationField] = output[form_prj[key].parentTable].recid;
						res = df.searchAll(relation_field, key);
						delete relation_field[form_prj[key].relationField];
						if (res) output[key] = res;
					}
				}
			}
		} else {
			return df.formatLoad(false, null,  true, "Название таблицы на которой вызывается форма не найдена. Должна быть null", false); 
		}
		return df.formatLoad(true, output, false, "", false); 
	},

	load: function (form_prj, params) {
		var output = {};
		// Находим первую(текущую) таблицу
		for (let key in form_prj) {
			if (form_prj[key].firstTable) {
				var super_table = key;
				output[super_table] = params; //df.searchAll(params.recid, super_table);
				output[super_table] = df.getFileList(output[super_table], key);
				break;
			}
		}
		// В объекте нет первой таблицы, возвращаем полученные данные
		if (!super_table) { return df.formatLoad(true, params, false, "", false); }
		// Проходим по всем таблицам, и ищем их по взаимосвязи с parentTable
		for (let key in form_prj) {
			var obj = form_prj[key];
			// Ищем все варианты с привязанными таблицами
			if (obj.parentTable && obj.relationField && !obj.firstTable && output[obj.parentTable] && output[obj.parentTable].recid) {
				// поиск данных в таблице
				if (obj.relationField == "recid") {
					var searchId = output[obj.parentTable].recid;
				} else {
					searchId = {};
					searchId[obj.relationField] = output[obj.parentTable].recid;
				}
				output[key] = df.searchAll(searchId, key);
				if (!!output[key] && !!obj.underTable) {
					output[key] = df.searchAllInside(obj.underTable, output[key]);
				}
			} // Загружаем родителя первой
			else if (!!obj.firstField && !!output[super_table][obj.firstField]) {
				output[key] = df.searchAll(output[super_table][obj.firstField], key);
			}
		}

		return df.formatLoad(true, output, false, false);
	},

	first_load: function (form_prj, params) {
		var output = {};
		// Находим первую(текущую) таблицу
		for (let key in form_prj) {
			if (form_prj[key].firstTable) {
				var super_table = key;
				output[super_table] = params;
				output[super_table] = df.getFileList(output[super_table], key);
				// для достижения универсальности ленивой загрузки
				output['lazy_load_save'] = output[super_table];
				break;
			}
		}
		// В объекте нет первой таблицы, возвращаем полученные данные
		if (!super_table) { return df.formatLoad(true, params, false, "", false); }

		return df.formatLoad(true, output, false, "", false);
	},
	lazy_load: function (form_prj, params) {
		// Если нет флага ленивой загрузки, то нужна первая партия данных
		if (!params.lazy_load_save) { return df.first_load(form_prj, params); }
		var output = {};
		// Находим первую(текущую) таблицу
		for (let key in form_prj) {
			if (form_prj[key].firstTable) {
				var super_table = key;
				output[super_table] = params;
				output[super_table] = df.getFileList(output[super_table], key);
				break;
			}
		}
		// В объекте нет первой таблицы, возвращаем полученные данные
		if (!super_table) { return df.formatLoad(true, params, false, "", false); }
		// Проходим по всем таблицам, и ищем их по взаимосвязи с parentTable
		for (let key in form_prj) {
			var obj = form_prj[key];
			// Ищем все варианты с привязанными таблицами
			if (obj.parentTable && obj.relationField && !obj.firstTable && output[obj.parentTable] && output[obj.parentTable].recid) {
				// поиск данных в таблице
				if (obj.relationField == "recid") {
					var searchId = output[obj.parentTable].recid;
				} else {
					searchId = {};
					searchId[obj.relationField] = output[obj.parentTable].recid;
				}
				output[key] = df.searchAll(searchId, key);
				if (!!output[key] && !!obj.underTable) {
					output[key] = df.searchAllInside(obj.underTable, output[key]);
				}
			}
			else if (!!obj.firstField && !!output[super_table][obj.firstField]) {
				output[key] = df.searchAll(output[super_table][obj.firstField], key);
			}
		}
		// Данные по уже загруженным панелям не обновляем.
		delete output[super_table];
		// Для ленивой загрузки не используется формат данных формы. Отправляем просто объект.
		return output; 
	},
	/**
	 * Сохранения всех данных с формы в соответствующие таблицы 
	 * @param {object} form_prj Объект с зависимостями таблиц, где ключ - название таблицы, а значение - объект, который содержит table: "название таблицы
	 * зависит данная таблица", relation: "поле зависимости".
	 * Таблица на которой вызывается форма должна быть со значением table: null.
	 * @param {object} params Объект, который приходит после события Submit на форме
	 * @return {any} true/ex
	 */
	save: function (form_prj, params) {
		var keys = {};
		var res = null;
		var relation_field = {};
		// поиск таблицы, на которой вызывается форма
		for (let key in form_prj) {
			if (form_prj[key].hasOwnProperty("firstTable")) {
				var super_table = key;
				df.insertOrUpdate(key, params[key]);
				break;
			}
		}
		if (super_table) {
			// ищем зависимые таблицы от таблицы на которой вызывается форма
			for (let key in form_prj) {
				if (form_prj[key].parentTable == super_table) {
					// создаем ключ-значение для передачи в another_data
					relation_field[form_prj[key].relationField] = params[super_table].recid;
					res = df.insertOrUpdate(key, params[key], relation_field);
					// очищаем ключ-значение для того чтобы всегда передавать 1 пару
					delete relation_field[form_prj[key].relationField];
					// наполняем объект для того, чтобы потом отследить зависимости
					if (res) {
						keys[key] = res;
					}
				}
				// главная таблица
				else if (key == form_prj[key].parentTable) {
					df.insertOrUpdate(key, params[key]);
				}
			}
			// ищем таблицы, у которых другие зависимости
			for (let key in form_prj) {
				if (form_prj[key].parentTable != super_table) {
					// поиск ключей в ранее созданном объекте, это означает, что создавать зависимую таблицу можно
					if (keys.hasOwnProperty(form_prj[key].parentTable)) {
						relation_field[form_prj[key].relationField] = keys[form_prj[key].parentTable];
						df.insertOrUpdate(key, params[key], relation_field);
						delete relation_field[form_prj[key].relationField];
					}
				}
			}
		} else {
			return df.formatSave(false, "Название таблицы на которой вызывается форма не найдена. Должна быть null", false);
		}
		return df.formatSave(true, "Сохранение прошло успешно", true);
	},

	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////Работа с БД
	///////////////////////////////////////////////////////////////////////////
	/**
	 * Сохранение, обновление данных и файлов в БД, а также удаление записей из БД, если эти записи были удалены на форме
	 * @param {string} name Название таблицы
	 * @param {any} jp Объект или массив объектов для сохранения или обновления
	 * @param {object} another_data Объект, в котором могут содержаться дополнительные данные (например, зависимости), которые будут добавлены к общему объекту перед 
	 * сохранением/обновлением данных с БД. Если в jp передается массив объектов, обязательно указать зависимости таблиц
	 * @returns {string} Возвращает recid созданной, или обновленной записи
	 */
	insertOrUpdate: function (name, jp, another_data) {
		// Защита от пустых контейнеров(нужно доработать удаление)
		if (!jp) { return; }
		// Очистка переменных контейнера от JSON, для поддержки мульти селекта
		var file = {
			files: [],
			column_names: []
		};
		var res_id = null;
		var ids = [];
		jp = Array.isArray(jp) ? jp : [jp];
		var all_data = another_data ? db.findbyparams(name, another_data) : null;
		for (let k in jp) {
			res_id = null;
			file = df.searchFiles(jp[k], file.files, file.column_names);
			jp[k] = file.jp;
			// Сохранение/обновление
			if (!!jp[k].recid && df.checkRecid(name, jp[k].recid)) {
				ids.push(jp[k].recid);
				jp[k].recupdated = null;
				db.update(name, df.StringifyJSON(jp[k]));

			} else {
				// Если !another_data вернется только jp[k]
				res_id = db.insert(name, df.assign_objects(df.StringifyJSON(jp[k]), another_data)).recid;
			}
			// Сохраннение файлов
			df.saveFile(file.files, name, (res_id ? res_id : jp[k].recid), file.column_names);

			file.files.splice(0, file.files.length);
			file.column_names.splice(0, file.column_names.length);
		}
		// проверка удаленных строк из клонируемых полей
		if (all_data) {
			for (let i = 0; i < all_data.length; i++) {
				!(ids.indexOf(all_data[i].recid) != -1) ? db.delete(name, all_data[i].recid) : null;
			}
			ids.splice(0, ids.length);
		}
		// обязательно возращаем ИД
		return res_id ? res_id : jp[k].recid;
	},

	/**
	 * Поиск всех записей по параметрам и их файлов
	 * @param {any} searchId Параметр поиска (может быть строкой (recid), или объектом)
	 * @param {string} tableName Название таблицы
	 * @returns {any} Возвращает объект, если в searchId была передана строка, или массив объектов, если в searchId был передан объект
	 */
	searchAll: function (searchId, tableName) {
		var result = (typeof (searchId) == 'string') ?
			db.findbyrecid(tableName, searchId) :
			db.findbyparams(tableName, searchId);

		if (!result) { return null; }
		result = df.getFileList(result, tableName);

		result = df.clean_from_db(result);

		return result;
	},


	/**
	 * Поиск всех записей по параметрам и их файлов
	 * @param {any} under_table Подтаблицы в виде объекта
	 * @param {any} output Родительский элемент
	 * @returns {any} Родительский объект + вложенные объекты дочерних таблиц
	 */
	searchAllInside: function (under_table, output) {
		var isArr = Array.isArray(output);
		output = !isArr ? [output] : output;

		// Проходим по массиву объектов
		for (let it in output) {
			for (let its in under_table) {
				if (under_table.relationField == "recid") {
					var searchId = output[it].recid;
				} else {
					searchId = {};
					searchId[under_table[its].relationField] = output[it].recid;
				}
				output[it][its] = df.searchAll(searchId, its);
			}
		}
		return !isArr ? output[0] : output;
	},


	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////Работа с файлами
	///////////////////////////////////////////////////////////////////////////
	/**
	 * Поиск всех файлов для записи по столбцу
	 * @param {string} entityId Идентификатор записи, к которой прикреплен файл
	 * @param {string} entityName Название таблицы
	 * @param {string} columnName Название столбца в таблице к которому прикреплен файл
	 * @returns {Array} Возвращает все данные о файлах в виде массива объектов в случае, если файлы есть
	 */
	getFiles: function (entityId, entityName, columnName) {

		var files = fetch(host + '/api/files/list/' + entityName + '/' + entityId, {
			method: 'GET'
		});
		if (!files) {
			return false;
		}
		var output = [];
		var file_list = JSON.parse(files.data).data;
		for (let i in file_list) {
			if (file_list[i].columnName == columnName) {
				output.push(file_list[i]);
			}
		}
		return output;

	},

	getFileList: function (result, tableName) {
		var isArr = Array.isArray(result);
		result = isArr ? result : [result];

		for (let i in result) {
			for (var key in result[i]) {
				if (key.indexOf("_file") != -1) {
					files = df.getFiles(result[i].recid, tableName, key);
					files ? result[i][key] = files : result[i][key] = null;
				}
			}
		}

		return isArr ? df.RecoveryJSON(result) : df.RecoveryJSON(result[0]);
	},

	searchFiles: function (jp, files, column_names) {
		var isArr = Array.isArray(jp);
		jp = !isArr ? [jp] : jp;

		for (let it in jp) {
			for (var key in jp[it]) {
				if (key.indexOf("_file") != -1) {
					if (jp[it][key] != null) {
						for (let i in jp[it][key]) {
							if (!jp[it][key][i].recId) {
								files.push(jp[it][key][i]);
								column_names.push(key);
							}
						}
						delete jp[it][key];
					}
				}
			}
		}
		jp = !isArr ? jp[0] : jp;
		return { jp: jp, files: files, column_names: column_names };
	},

	saveFile: function (files, entityName, entityId, columnName) {
		for (let ii in files) {
			return fetch(host + '/api/files/uploadfilefromform', {
				method: 'POST',
				body: JSON.stringify({
					file: files[ii].content,
					fileName: files[ii].recName,
					entityName: entityName,
					entityId: entityId,
					columnName: columnName[ii]
				})
			});
		}
	},

	deleteFile: function (recid) {
		return fetch(host + '/api/files/delete/' + recid, {
			method: 'DELETE'
		});
	},


	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////Вспомогательные методы
	///////////////////////////////////////////////////////////////////////////
	/**
	 * Очистка данных из БД. Можно привязать логику от аналитика, можно отключать ненужные очистки.
	 * @param {object} result массив/объект для очистки
	 * @return {object} массив/объект после очистки
	 */
	clean_from_db: function (result) {
		result = df.cleanNullObject(result);
		// Строки в JSON
		result = df.RecoveryJSON(result);
		// Удаляем штатные данные rdev
		result = df.deleteRdevFields(result);
		return result;
	},



	/**
	 * Нахождение JSON объектов и приведение их к строке.
	 * @param {object} res На вход может быть подан как объект, так и массив объектов.
	 * @return {object} возвращается тот же объект, но со строками вместо JSON
	 */
	StringifyJSON: function (res) {
		var isArr = Array.isArray(res);
		res = !isArr ? [res] : res;

		for (let it in res) {
			for (let its in res[it]) {
				if (typeof res[it][its] == "object" && res[it][its] != null) {
					try {
						res[it][its] = JSON.stringify(res[it][its]);
					} catch (ex) {/**/ }
				}
			}
		}
		return !isArr ? res[0] : res;
	},

	/**
	 * Нахождение и восстановление JSON объектов из строк.
	 * @param {object} res На вход может быть подан как объект, так и массив объектов.
	 * @return {object} возвращается тот же объект, но с JSON
	 */
	RecoveryJSON: function (res) {
		var isArr = Array.isArray(res);
		res = !isArr ? [res] : res;

		for (let it in res) {
			for (let its in res[it]) {
				if (typeof res[it][its] == "string" && (res[it][its][0] == "{" || res[it][its][0] == "[")) {
					try {
						res[it][its] = JSON.parse(res[it][its]);
					} catch (ex) {/**/ }
				}
			}
		}
		return !isArr ? res[0] : res;
	},

	/**
	 * Сливание двух объектов
	 * @param {any} obj1 obj1
	 * @param {any} obj2 obj2
	 * @returns {object} obj(1&2)
	 */
	assign_objects: function (obj1, obj2) {
		for (let key in obj2) {
			obj1[key] = obj2[key];
		}
		return obj1;
	},

	/**
	 * Удаление в объекте всех ключей со значением null или ""
	 * @param {any} obj Исходный объект
	 * @returns {object} obj
	 */
	cleanNullObject: function (obj) {
		for (let key in obj) {
			if (obj[key] == null || obj[key] == "") delete obj[key];
		}
		return obj;
	},

	/**
	 * Удаление в объекте всех ключей rdev
	 * @param {any} obj Исходный объект
	 * @returns {object} obj
	 */
	deleteRdevFields: function (obj) {
		delete obj['@odata.context'];
		return obj;
	},


	// Проверка наличия recid в БД
	checkRecid: function (name, recid) {
		if (!recid) { return false; }
		try {
			return !!db.findbyrecid(name, recid);
		} catch (ex) { return false; }
	},

	/**
	 * Форматирование данных при запросе данных на форму
	 * 
	 * @param {any} is_success флаг успеха выполнения
	 * @param {any} data Данные для формы
	 * @param {any} is_show флаг отображения сообщения
	 * @param {any} message Текст сообщения
	 * @param {any} is_close флаг закрытия формы(не понятно зачем это нужно)
	 * 
	 * @return {any} Объект для корректного ответа данных форме
	 */
	formatLoad: function (is_success, data, is_show, message, is_close) {
		return {
			showMessage: is_show,
			message: message,
			success: is_success,
			data: data,
			closeForm: is_close
		};
	},

	/**
	 * Форматирование данных для формы при завершении сохранения данных с формы
	 * 
	 * @param {any} is_success флаг успеха выполнения
	 * @param {any} message текст сообщения
	 * @param {any} is_close флаг закрытия формы
	 * 
	 * @return {any} Объект для корректного ответа форме
	 */
	formatSave: function (is_success, message, is_close) {
		return {
			message: message,
			success: is_success,
			closeForm: is_close
		};
	}
};