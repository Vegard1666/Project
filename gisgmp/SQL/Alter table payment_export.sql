
ALTER TABLE payment_export
  ADD type_select_payer INTEGER,
  ADD payer_type INTEGER,
  ADD doc_type UUID,
  ADD doc_serial TEXT,
  ADD inn TEXT,
  ADD kpp TEXT,
  ADD kio TEXT,
  ADD inn_disable BOOLEAN,
  ADD taxpayercode TEXT,
  ADD countryreg UUID;
