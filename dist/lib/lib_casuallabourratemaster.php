<?php

// set form values
function set_formpostvalue(){

	GLOBAL $sys_co_code;
	$sys_co_code = null;
	if($_POST["sys_co_code"]){$sys_co_code = $_POST["sys_co_code"];}

	GLOBAL $clrm_desc;
	$clrm_desc = null;
	if($_POST["clrm_desc"]){$clrm_desc = $_POST["clrm_desc"];}

	GLOBAL $clrm_rate;
	$clrm_rate = null;
	if($_POST["clrm_rate"]){$clrm_rate = $_POST["clrm_rate"];}

	GLOBAL $clrm_code;
	$clrm_code = null;
	if($_POST["clrm_code"]){$clrm_code = $_POST["clrm_code"];}
}

// validate form values
function validate_formvalue(){

	GLOBAL $errmsg;
	GLOBAL $OKtoSaveIntoDB;
	GLOBAL $clrm_code;
	GLOBAL $clrm_code_Error;
if (empty($clrm_code) || $clrm_code==null) {
	$clrm_code_Error = "Code can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Code can not be blank in tab Labour Rate";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $clrm_desc;
	GLOBAL $clrm_desc_Error;
if (empty($clrm_desc) || $clrm_desc==null) {
	$clrm_desc_Error = "Description can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Description can not be blank in tab Labour Rate";
	$OKtoSaveIntoDB = false;
}
}

//-- insert or update db table
function casuallabourratemaster_insupddb(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
GLOBAL $errmsg;
//-- For Labour Rate
	GLOBAL $clrm_tabreckey;
	GLOBAL $sys_co_code;
	GLOBAL $clrm_code;
	GLOBAL $clrm_desc;
	GLOBAL $clrm_rate;

try{

	if($_SESSION["FORMTRANMODE"] == "EDIT"){
		$sql = "INSERT INTO H_lp_labour_rm SELECT * FROM lp_labour_rm WHERE CLRM_TabRecKey=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($_SESSION["LASTSERIAL"]));

		$sql = "UPDATE lp_labour_rm SET sys_co_code=?,clrm_code=?,clrm_desc=?,clrm_rate=? WHERE CLRM_TabRecKey=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$clrm_code,$clrm_desc,$clrm_rate,$_SESSION["LASTSERIAL"]));
	}
	else{
		$sql = "INSERT INTO lp_labour_rm(sys_co_code,clrm_code,clrm_desc,clrm_rate)". 
		 " VALUES(?,?,?,?)";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$clrm_code,$clrm_desc,$clrm_rate));

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

	//-- Labour Rate
	$sql = "SELECT * FROM lp_labour_rm WHERE clrm_tabreckey=?";
	$q = $pdo->prepare($sql);
	$q->execute(array($_SESSION["LASTSERIAL"]));
	$extr_data = $q->fetch(PDO::FETCH_ASSOC);

	GLOBAL $clrm_tabreckey;
	$clrm_tabreckey = $extr_data["clrm_tabreckey"];

	GLOBAL $sys_co_code;
	$sys_co_code = $extr_data["sys_co_code"];

	GLOBAL $clrm_code;
	$clrm_code = $extr_data["clrm_code"];

	GLOBAL $clrm_desc;
	$clrm_desc = $extr_data["clrm_desc"];

	GLOBAL $clrm_rate;
	$clrm_rate = $extr_data["clrm_rate"];

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
	$clrm_code = null;
	if($_POST["clrm_code"]){$clrm_code = $_POST["clrm_code"];}

	$sql = "SELECT * FROM lp_labour_rm WHERE 1=1";
	if (!empty($clrm_code)){
		$sql = $sql." AND clrm_code = '".$clrm_code."'";
	}
	$clrm_desc = null;
	if($_POST["clrm_desc"]){$clrm_desc = $_POST["clrm_desc"];}
	if (!empty($clrm_desc)){
		$sql = $sql." AND clrm_desc = '".$clrm_desc."'";
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
