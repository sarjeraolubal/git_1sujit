<?php

// set form values
function set_formpostvalue(){

	GLOBAL $sys_co_code;
	$sys_co_code = null;
	if($_POST["sys_co_code"]){$sys_co_code = $_POST["sys_co_code"];}

	GLOBAL $wtm_code;
	$wtm_code = null;
	if($_POST["wtm_code"]){$wtm_code = $_POST["wtm_code"];}

	GLOBAL $wtm_rate;
	$wtm_rate = null;
	if($_POST["wtm_rate"]){$wtm_rate = $_POST["wtm_rate"];}

	GLOBAL $wtm_name;
	$wtm_name = null;
	if($_POST["wtm_name"]){$wtm_name = $_POST["wtm_name"];}
}

// validate form values
function validate_formvalue(){

	GLOBAL $errmsg;
	GLOBAL $OKtoSaveIntoDB;
	GLOBAL $wtm_name;
	GLOBAL $wtm_name_Error;
if (empty($wtm_name) || $wtm_name==null) {
	$wtm_name_Error = "Name can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Name can not be blank in tab Work Type";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $wtm_code;
	GLOBAL $wtm_code_Error;
if (empty($wtm_code) || $wtm_code==null) {
	$wtm_code_Error = "Code can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Code can not be blank in tab Work Type";
	$OKtoSaveIntoDB = false;
}
}

//-- insert or update db table
function worktypemaster_insupddb(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
GLOBAL $errmsg;
//-- For Work Type
	GLOBAL $wtm_tabreckey;
	GLOBAL $sys_co_code;
	GLOBAL $wtm_code;
	GLOBAL $wtm_name;
	GLOBAL $wtm_rate;

try{

	if($_SESSION["FORMTRANMODE"] == "EDIT"){
		$sql = "INSERT INTO H_lp_work_tm SELECT * FROM lp_work_tm WHERE Wtm_TabRecKey=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($_SESSION["LASTSERIAL"]));

		$sql = "UPDATE lp_work_tm SET sys_co_code=?,wtm_code=?,wtm_name=?,wtm_rate=? WHERE Wtm_TabRecKey=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$wtm_code,$wtm_name,$wtm_rate,$_SESSION["LASTSERIAL"]));
	}
	else{
		$sql = "INSERT INTO lp_work_tm(sys_co_code,wtm_code,wtm_name,wtm_rate)". 
		 " VALUES(?,?,?,?)";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$wtm_code,$wtm_name,$wtm_rate));

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

	//-- Work Type
	$sql = "SELECT * FROM lp_work_tm WHERE wtm_tabreckey=?";
	$q = $pdo->prepare($sql);
	$q->execute(array($_SESSION["LASTSERIAL"]));
	$extr_data = $q->fetch(PDO::FETCH_ASSOC);

	GLOBAL $wtm_tabreckey;
	$wtm_tabreckey = $extr_data["wtm_tabreckey"];

	GLOBAL $sys_co_code;
	$sys_co_code = $extr_data["sys_co_code"];

	GLOBAL $wtm_code;
	$wtm_code = $extr_data["wtm_code"];

	GLOBAL $wtm_name;
	$wtm_name = $extr_data["wtm_name"];

	GLOBAL $wtm_rate;
	$wtm_rate = $extr_data["wtm_rate"];

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
	$wtm_code = null;
	if($_POST["wtm_code"]){$wtm_code = $_POST["wtm_code"];}

	$sql = "SELECT * FROM lp_work_tm WHERE 1=1";
	if (!empty($wtm_code)){
		$sql = $sql." AND wtm_code = '".$wtm_code."'";
	}
	$wtm_name = null;
	if($_POST["wtm_name"]){$wtm_name = $_POST["wtm_name"];}
	if (!empty($wtm_name)){
		$sql = $sql." AND wtm_name = '".$wtm_name."'";
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
