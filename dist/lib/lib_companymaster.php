<?php

// set form values
function set_formpostvalue(){

	GLOBAL $sys_co_code;
	$sys_co_code = null;
	if($_POST["sys_co_code"]){$sys_co_code = strtoupper($_POST["sys_co_code"]);}

	GLOBAL $sys_co_name;
	$sys_co_name = null;
	if($_POST["sys_co_name"]){$sys_co_name = strtoupper($_POST["sys_co_name"]);}
}

// validate form values
function validate_formvalue(){

	GLOBAL $errmsg;
	GLOBAL $OKtoSaveIntoDB;
	GLOBAL $sys_co_name;
	GLOBAL $sys_co_name_Error;
if (empty($sys_co_name) || $sys_co_name==null) {
	$sys_co_name_Error = "Company Name can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Company Name can not be blank in tab Company Info";
	$OKtoSaveIntoDB = false;
}
}

//-- insert or update db table
function companymaster_insupddb(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
GLOBAL $errmsg;
//-- For Company Info
	GLOBAL $sys_co_nbr;
	GLOBAL $sys_co_code;
	GLOBAL $sys_co_name;

try{

	if($_SESSION["FORMTRANMODE"] == "EDIT"){
		$sql = "INSERT INTO H_smestar_syscom SELECT * FROM smestar_syscom WHERE Sys_Co_Nbr=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($_SESSION["LASTSERIAL"]));

		$sql = "UPDATE smestar_syscom SET sys_co_code=?,sys_co_name=? WHERE Sys_Co_Nbr=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$sys_co_name,$_SESSION["LASTSERIAL"]));
	}
	else{
		$sql = "INSERT INTO smestar_syscom(sys_co_code,sys_co_name)". 
		 " VALUES(?,?)";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$sys_co_name));

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
	$sql = "SELECT * FROM smestar_syscom WHERE sys_co_nbr=?";
	$q = $pdo->prepare($sql);
	$q->execute(array($_SESSION["LASTSERIAL"]));
	$extr_data = $q->fetch(PDO::FETCH_ASSOC);

	GLOBAL $sys_co_nbr;
	$sys_co_nbr = $extr_data["sys_co_nbr"];

	GLOBAL $sys_co_code;
	$sys_co_code = $extr_data["sys_co_code"];

	GLOBAL $sys_co_name;
	$sys_co_name = $extr_data["sys_co_name"];

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
	$sys_co_name = null;
	if($_POST["sys_co_name"]){$sys_co_name = $_POST["sys_co_name"];}

	$sql = "SELECT * FROM smestar_syscom WHERE 1=1";
	if (!empty($sys_co_name)){
		$sql = $sql." AND sys_co_name LIKE '%".$sys_co_name."%'";
	}

	if ($_SESSION["uprof_ddsp_byco"]=="YES"){$sql .= ' AND sys_co_code = "'.$_SESSION["uprof_ddsp_byco"].'"';}
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
