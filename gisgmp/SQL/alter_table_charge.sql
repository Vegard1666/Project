ALTER TABLE charge
  ADD actualize_status_request int;

ALTER TABLE charge
  ADD organization_name text,
  ADD user_name text