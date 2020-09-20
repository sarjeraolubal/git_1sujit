
Use stardev_db;
-- DROP TABLE prog_file;
CREATE TABLE  prog_file (
  pg_seq int(11) NOT NULL AUTO_INCREMENT,
  pg_nm varchar(100) DEFAULT NULL,
  prg_file varchar(100) DEFAULT NULL,
  PRIMARY KEY (pg_seq)
);

INSERT INTO prog_file (pg_nm,prg_file) VALUES('Company Master','companymaster');
INSERT INTO prog_file (pg_nm,prg_file) VALUES('Application User Registration','applicationuserregistration');
INSERT INTO prog_file (pg_nm,prg_file) VALUES('Gang Code Master','gangcodemaster');
INSERT INTO prog_file (pg_nm,prg_file) VALUES('Commodity Master','commoditymaster');
INSERT INTO prog_file (pg_nm,prg_file) VALUES('Vessel Master','vesselmaster');
INSERT INTO prog_file (pg_nm,prg_file) VALUES('Work Type Master','worktypemaster');
INSERT INTO prog_file (pg_nm,prg_file) VALUES('Casual Labour Rate Master','casuallabourratemaster');
INSERT INTO prog_file (pg_nm,prg_file) VALUES('Advance Payment','advancepayment');
INSERT INTO prog_file (pg_nm,prg_file) VALUES('Daily Challan','dailychallan');




