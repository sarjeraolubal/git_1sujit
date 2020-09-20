CREATE TABLE lp_adv_m
		(
am_tabreckey bigint not null auto_increment primary key
,sys_co_code varchar(20)
,gm_badge_no varchar(4)
,am_advdate date
,am_slip_nbr varchar(4)
,am_amount double
,am_desc varchar(30)
);

CREATE TABLE H_lp_adv_m SELECT * FROM lp_adv_m WHERE 1=2;

CREATE TABLE smestar_up
		(
up_tabreckey bigint not null auto_increment primary key
,sys_co_code varchar(20)
,up_uid varchar(100)
,up_ak varchar(200)
,up_regdate date
,up_lockstatus varchar(30)
,up_status varchar(30)
,up_lastaccessdate date
,up_expdate date
,up_mid varchar(200)
,up_eid varchar(50)
,up_radt date
,up_rudt date
,up_rauid varchar(30)
,up_ruuid varchar(30)
);

CREATE TABLE H_smestar_up SELECT * FROM smestar_up WHERE 1=2;

CREATE TABLE lp_labour_rm
		(
clrm_tabreckey bigint not null auto_increment primary key
,sys_co_code varchar(20)
,clrm_code varchar(4)
,clrm_desc varchar(40)
,clrm_rate double
);

CREATE TABLE H_lp_labour_rm SELECT * FROM lp_labour_rm WHERE 1=2;

CREATE TABLE lp_commo_m
		(
cm_tabreckey bigint not null auto_increment primary key
,sys_co_code varchar(20)
,cm_code varchar(4)
,cm_name varchar(40)
,cm_price double
);

CREATE TABLE H_lp_commo_m SELECT * FROM lp_commo_m WHERE 1=2;

CREATE TABLE smestar_syscom
		(
sys_co_nbr bigint not null auto_increment primary key
,sys_co_code varchar(20)
,sys_co_name varchar(100)
);

CREATE TABLE H_smestar_syscom SELECT * FROM smestar_syscom WHERE 1=2;

CREATE TABLE lp_dc_pri_inf
		(
dwd_tabreckey bigint not null auto_increment primary key
,sys_co_code varchar(20)
,dwd_date date
,dwd_slip_nbr varchar(4)
,vm_code varchar(4)
,dwd_cha_no varchar(4)
,dwd_shed varchar(6)
,dwd_shift varchar(6)
,cm_code varchar(4)
,clrm_code varchar(4)
,dwd_labors integer
,dwd_lab_amount double
,dwd_total_amount double
,dwd_matha integer
,dwd_totalperson integer
, UNIQUE KEY (sys_co_code, dwd_slip_nbr)
);

CREATE TABLE H_lp_dc_pri_inf SELECT * FROM lp_dc_pri_inf WHERE 1=2;

CREATE TABLE lp_dc_wdtl
		(
dc_wdtl_tabreckey bigint not null auto_increment primary key
,dwd_tabreckey bigint, FOREIGN KEY (dwd_tabreckey) REFERENCES lp_dc_pri_inf(dwd_tabreckey) on update cascade on delete cascade 
,wtm_code varchar(4)
,dwd_bags integer
,wtm_amount double
);

CREATE TABLE H_lp_dc_wdtl SELECT * FROM lp_dc_wdtl WHERE 1=2;

CREATE TABLE lp_dc_gdtl
		(
dc_gdtl_tabreckey bigint not null auto_increment primary key
,dwd_tabreckey bigint, FOREIGN KEY (dwd_tabreckey) REFERENCES lp_dc_pri_inf(dwd_tabreckey) on update cascade on delete cascade 
,gm_gang_code varchar(4)
,gm_badge_no varchar(4)
);

CREATE TABLE H_lp_dc_gdtl SELECT * FROM lp_dc_gdtl WHERE 1=2;

CREATE TABLE lp_gang_m
		(
gm_tabreckey bigint not null auto_increment primary key
,sys_co_code varchar(20)
,gm_gang_code varchar(4)
,gm_badge_no varchar(4)
,gm_memcatg varchar(20)
,gm_name varchar(100)
,gm_bankaccnbr varchar(15)
,gm_email varchar(100)
,gm_mphonenbr varchar(10)
, UNIQUE KEY (gm_badge_no)
);

CREATE TABLE H_lp_gang_m SELECT * FROM lp_gang_m WHERE 1=2;

CREATE TABLE lp_vessel_m
		(
vm_tabreckey bigint not null auto_increment primary key
,sys_co_code varchar(20)
,vm_code varchar(4)
,vm_name varchar(40)
);

CREATE TABLE H_lp_vessel_m SELECT * FROM lp_vessel_m WHERE 1=2;

CREATE TABLE lp_work_tm
		(
wtm_tabreckey bigint not null auto_increment primary key
,sys_co_code varchar(20)
,wtm_code varchar(4)
,wtm_name varchar(40)
,wtm_rate double
);

CREATE TABLE H_lp_work_tm SELECT * FROM lp_work_tm WHERE 1=2;

