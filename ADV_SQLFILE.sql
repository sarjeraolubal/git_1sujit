

INSERT INTO prog_file (pg_nm,prg_file) VALUES('Balance Process','advancerecover_proc');
INSERT INTO prog_file (pg_nm,prg_file) VALUES('Advance Outstanding','advanceoutstanding');
INSERT INTO prog_file (pg_nm,prg_file) VALUES('Advance Deduction','advancededuction');
INSERT INTO prog_file (pg_nm,prg_file) VALUES('Financial Year','financialyear');

CREATE TABLE lp_adv_deduct
		(
adduct_tabreckey bigint not null auto_increment primary key
,sys_co_code varchar(20)
,gm_badge_no varchar(4)
,adduct_date date
,adduct_amt double
,adduct_auth varchar(3)
);

CREATE TABLE H_lp_adv_deduct SELECT * FROM lp_adv_deduct WHERE 1=2;

CREATE TABLE lp_adv_os
		(
ao_tabreckey bigint not null auto_increment primary key
,sys_co_code varchar(20)
,gm_badge_no varchar(4)
,ao_date date
,ao_totadv double
,ao_totrecoverd double
,ao_balance_amt double
,ao_recover_month integer
,ao_recover_amt_pm double
,ao_process_schedule varchar(3)
);
CREATE TABLE H_lp_adv_os SELECT * FROM lp_adv_os WHERE 1=2;

CREATE TABLE lp_adv_finyear
		(
fy_tabreckey bigint not null auto_increment primary key
,sys_co_code varchar(20)
,fy_accyear varchar(10)
,fy_accyearstartdt date
,fy_accyearenddt date
,fy_year integer
,fy_month integer
,fy_trandtfrom date
,fy_trandtto date
,fy_status varchar(6)
, UNIQUE KEY (fy_accyear)
, UNIQUE KEY (fy_year)
, UNIQUE KEY (fy_month)
);

CREATE TABLE H_lp_adv_finyear SELECT * FROM lp_adv_finyear WHERE 1=2;


