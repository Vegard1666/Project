CREATE OR REPLACE FUNCTION public.chargeimport_sel(charge_recid uuid)
 RETURNS TABLE(recid uuid, sender_identifier text, sender_role text, originator_id text, supplier_bill_id text, bill_date timestamp without time zone, valid_until timestamp without time zone, total_amount numeric, purpose text, kbk text, oktmo text, payee_name text, payee_inn text, payee_kpp text, payee_ogrn text, payee_account_number text, payee_bank_name text, payee_bik text, payee_correspondent_bank_account text, payeridentifier text, payer_name text, payer_orgname text, payer_lastname text, payer_middlename text, payer_type integer, tax_period text, tax_docnumber text, payer_status text, payt_reason text, tax_doc_date text, clarify_changes text,
 		discount boolean,
		discount_type integer,
		discount_size_value integer,
		discount_size_expiry timestamp without time zone,
		discount_fixed_value integer,
		discount_fixed_expiry timestamp without time zone,
		multiplier_size_value double precision,
		multiplier_size_expiry timestamp without time zone,
		interaction_through_the_aggregator boolean,
		agr_sender_identifier text,
		agr_sender_role text)
 LANGUAGE plpgsql
AS $function$ 	
begin
	return query
	select 
		charge.recid,
		organization.sender_identifier,
		sender_role.reccode as sender_role,
		organization.originator_id,
		charge.supplier_bill_id,
		charge.bill_date,
		charge.valid_until,
		charge_data.total_amount*100 as total_amount,
--		CASE charge.istemplate WHEN true THEN charge_data_template.total_amount*100
--              					WHEN false THEN charge_data.total_amount*100
--              					end as total_amount,
charge_data.purpose as purpose,
--        CASE charge.istemplate WHEN true THEN charge_data_template.purpose
--              					WHEN false THEN charge_data.purpose
--              					end as purpose,
charge_data.kbk as kbk,
--                CASE charge.istemplate WHEN true THEN charge_data_template.kbk
--              					WHEN false THEN charge_data.kbk
--              					end as kbk,
charge_data.oktmo as oktmo,
--              	CASE charge.istemplate WHEN true THEN charge_data_template.oktmo
--              					WHEN false THEN charge_data.oktmo
--              					end as oktmo,
        organization.name as payee_name,
        organization.inn as payee_inn,
         organization.kpp as payee_kpp,
         organization.ogrn as payee_ogrn,
         organization.account_number as payee_account_number,
         organization.bank_name as payee_bank_name,
         organization.bik as payee_bik,
         organization.correspondent_bank_account as payee_correspondent_bank_account,
         payer.payeridentifier,
         payer.name as payer_name,
	 payer.orgname as payer_orgname,
         payer.lastname as payer_lastname,
         payer.middlename as payer_middlename,
         payer.payer_type as payer_type, 
         charge_data.tax_period as tax_period,
--                       	CASE charge.istemplate WHEN true THEN charge_data_template.tax_period
--              					WHEN false THEN charge_data.tax_period
--              					end as tax_period,
charge_data.tax_docnumber as tax_docnumber,
--              			CASE charge.istemplate WHEN true THEN charge_data_template.tax_docnumber
--              					WHEN false THEN charge_data.tax_docnumber
--              					end as tax_docnumber,
(select reccode from payer_status where payer_status.recid in (select status from charge_data where charge_data.recid = charge.charge_data)) as payer_status,
--              			CASE charge.istemplate WHEN true THEN (select reccode from payer_status where payer_status.recid in (select status from charge_data_template where charge_data_template.recid = charge.charge_data_template)) 
--              					WHEN false THEN (select reccode from payer_status where payer_status.recid in (select status from charge_data where charge_data.recid = charge.charge_data))
--              					end as payer_status,
(select reccode from public.payt_reason where public.payt_reason.recid in (select charge_data.payt_reason from charge_data where charge_data.recid = charge.charge_data)) as payt_reason,
--              			CASE charge.istemplate WHEN true THEN (select reccode from public.payt_reason where public.payt_reason.recid in (select charge_data_template.payt_reason from charge_data_template where charge_data_template.recid = charge.charge_data_template)) 
--              					WHEN false THEN (select reccode from public.payt_reason where public.payt_reason.recid in (select charge_data.payt_reason from charge_data where charge_data.recid = charge.charge_data))
--              					end as payt_reason,
charge_data.tax_doc_date as tax_doc_date,
--              			CASE charge.istemplate WHEN true THEN charge_data_template.tax_doc_date
--              					WHEN false THEN charge_data.tax_doc_date
--              					end as tax_doc_date,
         charge.clarify_changes,
		 charge.discount,
		 charge.discount_type,
		 charge.discount_size_value,
		 charge.discount_size_expiry,
		 charge.discount_fixed_value,
		 charge.discount_fixed_expiry,
		 charge.multiplier_size_value,
		 charge.multiplier_size_expiry,
		 organization.interaction_through_the_aggregator,
		 org2.sender_identifier as agr_sender_identifier,
		 r.reccode
	from charge
	left join organization on organization.recid = charge.payee
	left join sender_role on organization.sender_role = sender_role.recid
	--left join charge_data_template on charge_data_template.recid = charge.charge_data_template
	left join charge_data on charge_data.recid = charge.charge_data
	left join payer on payer.recid = charge.payer
	left join organization as org2 on org2.recid = organization.aggregator
	left join sender_role as r on org2.sender_role = r.recid
	where charge.recid=charge_recid
;
end
 $function$
;


CREATE OR REPLACE FUNCTION public.find_unacknowledged_or_present()
 RETURNS TABLE(recid uuid)
 LANGUAGE plpgsql
AS $function$ 	
begin
	return query
	select charge.recid from charge where acknowledgment_status=2 or acknowledgment_status=3 order by recupdated limit 1
	--	"Предварительно сквитировано": "2"
	-- "Не сквитировано": "3"
;
end
 $function$
;

CREATE OR REPLACE FUNCTION public.payment_sel(kbk_in text,amount_in text,payer_name_in text, payment_date_in text, oktmo_in text)
 RETURNS TABLE(recid uuid, recname text, reccode text, recdescription text, reccreated timestamp without time zone, recupdated timestamp without time zone, reccreatedby text, recupdatedby text, recstate integer, id uuid, recipientidentifier text, amount numeric, kbk text, oktmo text, payment_date timestamp without time zone, paymentid text, purpose text, supplier_bill_id text, payment_trans_kind integer, payment_bik text, payeridentifier text, payer_name text, payee_inn text, payee_kpp text, payee_name text, payee_accountnumber text, payee_bik text, payt_reason text, status text, tax_doc_date text, tax_doc_number text, tax_period text, meaning integer, summary text)
 LANGUAGE plpgsql
AS $function$ 	
begin
	return query
	SELECT payment.recid, 
	payment.recname, 
	payment.reccode, 
	payment.recdescription, 
	payment.reccreated, 
	payment.recupdated, 
	payment.reccreatedby, 
	payment.recupdatedby, 
	payment.recstate, 
	payment.id, 
	payment.recipientidentifier, 
	payment.amount, 
	payment.kbk, 
	payment.oktmo, 
	payment.payment_date, 
	payment.paymentid, 
	payment.purpose, 
	payment.supplier_bill_id, 
	payment.payment_trans_kind, 
	payment.payment_bik, 
	payment.payeridentifier, 
	payment.payer_name, 
	payment.payee_inn, 
	payment.payee_kpp, 
	payment.payee_name, 
	payment.payee_accountnumber, 
	payment.payee_bik, 
	payment.payt_reason, 
	payment.status, 
	payment.tax_doc_date, 
	payment.tax_doc_number, 
	payment.tax_period, 
	payment.meaning,
	payment.purpose as summary
	--payment.paymentid||','||payment.purpose||','||payment.payer_name||','||payment.purpose||','||payment.recid as summary
	FROM public.payment
	where payment.supplier_bill_id is null
	and (
			(kbk_in = '' or payment.kbk = kbk_in) and
			(amount_in ='' or payment.amount = amount_in::numeric) and
			(payer_name_in = '' or lower(payment.payer_name) like '%'||lower(payer_name_in)||'%') and
			(payment_date_in = '' or payment.payment_date::date = payment_date_in::date) and
			(oktmo_in = '' or payment.oktmo = oktmo_in)
		);
end
 $function$
;



CREATE OR REPLACE FUNCTION public.find_organization()
 RETURNS TABLE(recid uuid, sender_identifier text, sender_role text)
 LANGUAGE plpgsql
AS $function$ 	
begin
	return query
	select organization.recid, 
	organization.sender_identifier, 
	sender_role.reccode as sender_role 
	from organization 
	join sender_role on organization.sender_role=sender_role.recid 
	where organization.recupdated + interval '1 day' < current_timestamp
	or organization.page_number IS NULL order by organization.reccreated limit 1;
end
 $function$
;



CREATE OR REPLACE FUNCTION public.find_notsended_request(adapter_name text)
 RETURNS TABLE(recid uuid)
 LANGUAGE plpgsql
AS $function$ 	
begin
	return query
	select rsmev___requests.recid
	from rsmev___requests  
	where rsmev___requests.send_try_count > '9' 
	and rsmev___requests.is_request_sended='f' 
	and rsmev___requests.recname=adapter_name
	order by rsmev___requests.reccreated 
	limit 1;
end
 $function$
;

CREATE OR REPLACE FUNCTION public.link_file(entityid_old uuid, entityid_new uuid, columnname_in text, recname_in text, entityname_in text)
	RETURNS uuid
	LANGUAGE plpgsql
AS $function$
declare
	sysfiles_recid uuid;
begin
	select recid into sysfiles_recid from rdev___sysfiles where entityid = entityid_old limit 1;
	
	update rdev___sysfiles
	set recname = recname_in,
		entityid = entityid_new,
		columnname = columnname_in,
		entityname = entityname_in
	where recid = sysfiles_recid;

	return sysfiles_recid;
end;
 $function$
;

CREATE OR REPLACE FUNCTION public.refund_sel(refund_recid uuid)
	RETURNS table(sender_identifier text, sender_role text, refund_id text, refund_date timestamp, budget_level integer, kbk text, oktmo text, 
	code_ubp text, payer_name text, inn text, kpp text, payeridentifier text, payee_name text, bik text, personal_account text, app_num text, app_date timestamp, paymentid text, 
	cash_type integer, amount numeric, purpose text, base_doc text, "number" text, base_doc_date timestamp)
	LANGUAGE plpgsql
AS $function$ 	
	begin
		return query
		select organization.sender_identifier,
				sender_role.reccode as sender_role,
				refund.refund_id,
				refund.refund_date,
				refund.budget_level,
				refund.kbk,
				refund.oktmo,
				organization.code_ubp,
				organization."name" as payer_name,
				organization.inn,
				organization.kpp,
				refund.payeridentifier,
				refund.payer_name as payee_name,
				refund.bik,
				refund.personal_account,
				refund.app_num,
				refund.app_date,
				refund.paymentid,
				refund.cash_type,
				refund.amount,
				refund.purpose,
				refund.base_doc,
				refund."number",
				refund.base_doc_date
		from refund
		left join payment on payment.recid = refund.payment
		left join organization on organization.sender_identifier = payment.recipientidentifier
		left join sender_role on sender_role.recid = organization.sender_role
		where refund.recid = refund_recid;
	end
 $function$
;

CREATE OR REPLACE FUNCTION public.rdev___auth_users_del(login_in text)
 RETURNS integer
 LANGUAGE plpgsql
AS $function$ 	
	declare
	_user_recid uuid;
	begin
		select recid into _user_recid from rdev___auth_users where login = login_in;
		delete from rdev___auth_groupuser where userid = _user_recid;
		delete from rdev___auth_users where recid = _user_recid;
	return 1;
	end
 $function$
;

CREATE OR REPLACE FUNCTION public.find_uin_and_response_exists(charge_id uuid, request_type_input text)
 RETURNS TABLE(is_unique_uin boolean, is_create_response boolean, uin text)
 LANGUAGE plpgsql
AS $function$     
declare
    _is_unique_uin bool :=false;
    _is_create_response bool :=false;
    _supplier_bill_id text;
begin

/* Находим УИН по recid начисления */
select supplier_bill_id into _supplier_bill_id from charge where recid = charge_id and recstate = 1;

/* Смотрим уникальный ли УИН */
select
    case
        when count(*) < 2 then true
        else false
    end
into
    _is_unique_uin
from
    charge
where
    supplier_bill_id = _supplier_bill_id;

/* Смотрим был ли в истории запросов уже запрос на создание начисления */
select
    case
        when count(*) > 0 then true
        else false
    end
into
    _is_create_response
from
    request_history
where
    recstate = 1
    and table_name = 'charge'
    and record_id = charge_id
    and request_type = request_type_input;

/* Возвращаем все */
return query
select
    _is_unique_uin,
    _is_create_response,
    _supplier_bill_id;
end
 $function$
;

CREATE OR REPLACE FUNCTION public.get_all_unique_organization()
RETURNS TABLE (sender_identifier text, sender_role uuid)
LANGUAGE plpgsql
as $function$
begin
return query
select x.sender_identifier, x.sender_role from 
(select *, row_number() over (PARTITION BY inn, kpp order by name) rn from organization) x
 where rn = 1;
 end
 $function$
 ;

 CREATE OR REPLACE FUNCTION public.backup_income_export_collectionvalues(export_id_input uuid)
 RETURNS integer
 LANGUAGE plpgsql
AS $function$ 
begin
	/* Удаляем предыдущий бекап */	
	perform backup_income_export_delete_values(export_id_input);
	
	/* Делаем новый бекап */
	update
		income_request_collections_value
	set
		recstate = 99
	where
		export_id = export_id_input
		and recstate = 1;
	
	return 1;
end 
$function$
;

CREATE OR REPLACE FUNCTION public.backup_income_export_delete_values(export_id_to_del uuid)
 RETURNS integer
 LANGUAGE plpgsql
AS $function$ 
begin
	delete from income_request_collections_value where export_id = export_id_to_del and recstate = 99;
	
	return 1;
end 
$function$
;

CREATE OR REPLACE FUNCTION public.restore_backup_income_export_values(export_id_to_restore uuid)
 RETURNS integer
 LANGUAGE plpgsql
AS $function$ 
begin
	delete
	from
		income_request_collections_value
	where
		export_id = export_id_to_restore
		and recstate = 1;

	update
		income_request_collections_value
	set
		recstate = 1
	where
		export_id = export_id_to_restore
		and recstate = 99;
	
	return 1;
end 
$function$
;