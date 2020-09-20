<?php

// set form values
function set_formpostvalue(){

	GLOBAL $pg_nm;
	$pg_nm = null;
	if($_POST["pg_nm"]){$pg_nm = $_POST["pg_nm"];}

	GLOBAL $prg_file;
	$prg_file = null;
	if($_POST["prg_file"]){$prg_file = $_POST["prg_file"];}
}

// validate form values
function validate_formvalue(){

	GLOBAL $errmsg;
	GLOBAL $OKtoSaveIntoDB;
	GLOBAL $prg_file;
	GLOBAL $prg_file_Error;
if (empty($prg_file) || $prg_file==null) {
	$prg_file_Error = "Company Name can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Company Name can not be blank in tab Company Info";
	$OKtoSaveIntoDB = false;
}
}

//-- insert or update db table
function prg_master_insupddb(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
GLOBAL $errmsg;
//-- For Company Info
	GLOBAL $pg_seq;
	GLOBAL $pg_nm;
	GLOBAL $prg_file;

try{

	if($_SESSION["FORMTRANMODE"] == "EDIT"){
		$sql = "INSERT INTO H_prog_file SELECT * FROM prog_file WHERE pg_seq=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($_SESSION["LASTSERIAL"]));

		$sql = "UPDATE prog_file SET pg_nm=?,prg_file=? WHERE pg_seq=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($pg_nm,$prg_file,$_SESSION["LASTSERIAL"]));
	}
	else{
		$sql = "INSERT INTO prog_file(pg_nm,prg_file)". 
		 " VALUES(?,?)";
		$q = $pdo->prepare($sql);
		$q->execute(array($pg_nm,$prg_file));

		$_SESSION["LASTSERIAL"]= $pdo->lastInsertId();
	}

}
catch (PDOException $sql_err) {
	$errmsg = "TechError: insert or update:".$sql_err->getMessage().", contact system administrator";
	error_log($errmsg,0);
	DBconnectionUtil::disconnect();
	return $errmsg;
}

DBconnectionUtil::disconnect();
return "SUCCESS";
}

//-- data extraction
function getdata_forviewedit(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
try{

	//-- Company Info
	$sql = "SELECT * FROM prog_file WHERE pg_seq=?";
	$q = $pdo->prepare($sql);
	$q->execute(array($_SESSION["LASTSERIAL"]));
	$extr_data = $q->fetch(PDO::FETCH_ASSOC);

	GLOBAL $pg_seq;
	$pg_seq = $extr_data["pg_seq"];

	GLOBAL $pg_nm;
	$pg_nm = $extr_data["pg_nm"];

	GLOBAL $prg_file;
	$prg_file = $extr_data["prg_file"];

	DBconnectionUtil::disconnect();
}
catch (PDOException $sql_err) {
	$errmsg = "TechError: data extract:".$sql_err->getMessage().", contact system administrator";
	error_log($errmsg,0);
	DBconnectionUtil::disconnect();
	return $errmsg;
}
}

//-- data list for search
function search_datalist(){

$extr_datalist = array();

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
try{
	$prg_file = null;
	if($_POST["prg_file"]){$prg_file = $_POST["prg_file"];}

	$sql = "SELECT * FROM prog_file WHERE 1=1";
	if (!empty($prg_file)){
		$sql = $sql." AND prg_file LIKE '%".$prg_file."%'";
	}

	if ($_SESSION["uprof_ddsp_byco"]=="YES"){$sql .= ' AND pg_nm = "'.$_SESSION["uprof_ddsp_byco"].'"';}
	if ($_SESSION["uprof_ddsp_bycobr"]=="YES"){$sql .= ' AND sys_co_br_code = "'.$_SESSION["uprof_ddsp_bycobr"].'"';}

	$q = $pdo->prepare($sql);
	$q->execute();
	$extr_datalist = $q->fetchAll();
}
catch (PDOException $sql_err) {
	$errmsg = "TechError: search data list:".$sql_err->getMessage().", contact system administrator";
	error_log($errmsg,0);
}
DBconnectionUtil::disconnect();
return $extr_datalist;
}

?>
