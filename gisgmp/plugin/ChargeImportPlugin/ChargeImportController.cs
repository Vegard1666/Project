using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace ChargeImportPlugin
{

	[Route("api/gmp")]
	public class ChargeImportController : ControllerBase
	{
		private readonly IConfiguration _configuration;
		public ChargeImportController(IConfiguration configuration)
		{
			_configuration = configuration;
		}

		private List<string> Encodings = new List<string>()
		{
			"windows-1251",
			"utf-8"
		};

		[HttpPost("importchargecsv")]
		public MethodResult ChargeImportCsv([FromBody] JObject data)
		{
			try
			{
				Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

				var content = data["content"];
				var fileid = data["fileid"];
				byte[] tempBytes = null;

				if (content != null && content.ToString().Length > 0)
				{
					tempBytes = Convert.FromBase64String(content.ToString());
				}
				if (fileid != null && fileid.ToString().Length > 0)
				{
					var db = new DatabaseHelper(_configuration);
					var file_record = db.ExecuteSql($"select * from rdev___sysfiles where recid ='{fileid}'");
					tempBytes = (byte[])file_record[0]["body"];
				}

				Encoding encoding = null;
				string teststring = null;
				var rowValues = new List<Dictionary<string, string>>();

				foreach (var name in Encodings)
				{
					encoding = Encoding.GetEncoding(name);
					teststring = encoding.GetString(tempBytes);
					if (teststring.Substring(0, 4) == "Дата")
					{
						rowValues = GetCsvData(teststring);
						break;
					}
				}

				var result = new MethodResult();

				result.Data = rowValues;
				result.Success = true;
				return result;
			}
			catch (Exception ex)
			{
				return new MethodResult{ Success = false, Message = ex.Message };
			}

		}

		//[HttpPost("importcharge")]
		//public MethodResult ChargeImport([FromBody] JObject data)
		//{
		//	try
		//	{
		//		var result = new MethodResult();

		//		var content = data["content"];
		//		var fileid = data["fileid"];

		//		Stream stream = null;

		//		if (content != null && content.ToString().Length > 0)
		//		{
		//			var tempBytes = Convert.FromBase64String(content.ToString());
		//			stream = new MemoryStream(tempBytes);
		//		}

		//		if (fileid != null && fileid.ToString().Length > 0)
		//		{
		//			var db = new DatabaseHelper(_configuration);
		//			var file_record = db.ExecuteSql($"select * from rdev___sysfiles where recid ='{fileid}'");
		//			stream = new MemoryStream((byte[])file_record[0]["body"]);
		//		}

		//		var rowValues = GetExcelData(stream);
		//		result.Data = rowValues;
		//		result.Success = true;
		//		return result;
		//	}
		//	catch (Exception ex)
		//	{
		//		return new MethodResult { Success = false, Message = ex.Message };
		//	}

		//}

		private List<Dictionary<string, string>> GetCsvData(string content)
		{
			if (string.IsNullOrEmpty(content)) { return null; }

			var rowValues = new List<Dictionary<string, string>>();
			var contentRows = content.Split("\r\n");
			var fieldNames = contentRows[0].Split(",");

			for (int i = 1; i < contentRows.Length; i++)
			{
				var row = contentRows[i];
				if (string.IsNullOrEmpty(row)) continue;

				var fieldValues = row.Split(",");

				var rowResult = new Dictionary<string, string>();
				for (int j = 0; j < fieldNames.Length; j++)
				{
					rowResult.Add(fieldNames[j], fieldValues[j] != "" ? fieldValues[j] : null);
				}
				rowValues.Add(rowResult);
			}
			
			return rowValues;
		}

		//private List<Dictionary<string, string>> GetExcelData(Stream stream)
		//{
		//	var rowValues = new List<Dictionary<string, string>>();
		//	System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);

		//	using (var reader = ExcelReaderFactory.CreateReader(stream))
		//	{

		//		//do
		//		//{

		//		//первая строчка уходит под названия полей
		//		reader.Read();
		//		var fieldNames = new List<string>();
		//		for (int column = 0; column < reader.FieldCount; column++)
		//		{
		//			var value = reader.GetValue(column);
		//			fieldNames.Add(value?.ToString());
		//		}

		//		while (reader.Read()) //по строкам
		//		{
		//			var fieldValues = new Dictionary<string, string>();

		//			for (int column = 0; column < reader.FieldCount; column++)
		//			{
		//				var value = reader.GetValue(column);

		//				fieldValues.Add(fieldNames[column], value?.ToString());
		//			}
		//			rowValues.Add(fieldValues);
		//		}

		//		//} while (reader.NextResult()); //по листам

		//		//result.Data = JsonConvert.SerializeObject(rowValues);

		//	}

		//	return rowValues;
		//}
	}

	public class MethodResult
	{
		public MethodResult(bool success, string message = null, object data = null)
		{
			Success = success;
			Message = message;
			Data = data;
		}

		public MethodResult(bool success, string message = null)
		{
			Success = success;
			Message = message;
		}

		public MethodResult(bool success, object data = null)
		{
			Success = success;
			Data = data;
		}

		public MethodResult(bool success)
		{
			Success = success;
		}

		public MethodResult()
		{

		}

		public object AdditionalData { get; set; }
		public bool Success { get; set; }
		public string Message { get; set; }
		public object Data { get; set; }
	}

	public class DatabaseHelper
	{
		private readonly IConfiguration _configuration;
		private readonly string _connectionString;

		public DatabaseHelper(IConfiguration configuration)
		{
			_configuration = configuration;
			_connectionString = configuration["ConnectionStrings:DefaultConnection"];
		}

		public List<Dictionary<string, object>> ExecuteSql(string script)
		{
			using (NpgsqlConnection connection = new NpgsqlConnection(_connectionString))
			{
				var rowValues = new List<Dictionary<string, object>>();

				connection.Open();

				using (var command = new NpgsqlCommand(script))
				{
					command.Connection = connection;

					using (var reader = command.ExecuteReader())
					{
						while (reader.Read())
						{
							var fieldValues = new Dictionary<string, object>();

							foreach (var row in reader.GetColumnSchema())
							{
								var field = row.ColumnName;
								var value = reader[row.ColumnName];

								fieldValues.Add(field, value);
							}
							rowValues.Add(fieldValues);
						}
					}
				}
				connection.Close();
				return rowValues;
			}
		}
	}
}
