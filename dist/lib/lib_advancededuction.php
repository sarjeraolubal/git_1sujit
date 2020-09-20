<?php

// set form values
function set_formpostvalue(){

	GLOBAL $adduct_amt;
	$adduct_amt = null;
	if($_POST["adduct_amt"]){$adduct_amt = $_POST["adduct_amt"];}

	GLOBAL $adduct_auth;
	$adduct_auth = null;
	if($_POST["adduct_auth"]){$adduct_auth = $_POST["adduct_auth"];}

	GLOBAL $gm_badge_no;
	$gm_badge_no = null;
	if($_POST["gm_badge_no"]){$gm_badge_no = $_POST["gm_badge_no"];}

	GLOBAL $adduct_date;
	$adduct_date = null;
	GLOBAL $dsp_adduct_date;
	if($_POST["dsp_adduct_date"]){$adduct_date = date('Y-m-d',strtotime($_POST["dsp_adduct_date"]));}

	GLOBAL $sys_co_code;
	$sys_co_code = null;
	if($_POST["sys_co_code"]){$sys_co_code = $_POST["sys_co_code"];}
}

// validate form values
function validate_formvalue(){

	GLOBAL $errmsg;
	GLOBAL $OKtoSaveIntoDB;
	GLOBAL $adduct_date;
	GLOBAL $adduct_date_Error;
if (empty($adduct_date) || $adduct_date==null) {
	$adduct_date_Error = "Deduction Date can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Deduction Date can not be blank in tab Advance Deduction";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $sys_co_code;
	GLOBAL $sys_co_code_Error;
if (empty($sys_co_code) || $sys_co_code==null) {
	$sys_co_code_Error = "Company can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Company can not be blank in tab Advance Deduction";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $gm_badge_no;
	GLOBAL $gm_badge_no_Error;
if (empty($gm_badge_no) || $gm_badge_no==null) {
	$gm_badge_no_Error = "Member Id can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Member Id can not be blank in tab Advance Deduction";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $adduct_amt;
	GLOBAL $adduct_amt_Error;
if (empty($adduct_amt) || $adduct_amt==null) {
	$adduct_amt_Error = "Deduction Amount can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Deduction Amount can not be blank in tab Advance Deduction";
	$OKtoSaveIntoDB = false;
}
}

//-- insert or update db table
function advancededuction_insupddb(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
GLOBAL $errmsg;
//-- For Advance Deduction
	GLOBAL $adduct_tabreckey;
	GLOBAL $sys_co_code;
	GLOBAL $gm_badge_no;
	GLOBAL $adduct_date;
	GLOBAL $adduct_amt;
	GLOBAL $adduct_auth;

try{

	if($_SESSION["FORMTRANMODE"] == "EDIT"){
		$sql = "INSERT INTO H_lp_adv_deduct SELECT * FROM lp_adv_deduct WHERE ADduct_TabRecKey=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($_SESSION["LASTSERIAL"]));

		$sql = "UPDATE lp_adv_deduct SET sys_co_code=?,gm_badge_no=?,adduct_date=?,adduct_amt=?,adduct_auth=? WHERE ADduct_TabRecKey=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$gm_badge_no,$adduct_date,$adduct_amt,$adduct_auth,$_SESSION["LASTSERIAL"]));
	}
	else{
		$sql = "INSERT INTO lp_adv_deduct(sys_co_code,gm_badge_no,adduct_date,adduct_amt,adduct_auth)". 
		 " VALUES(?,?,?,?,?)";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$gm_badge_no,$adduct_date,$adduct_amt,$adduct_auth));

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

//-- list for Sys_Co_Code
function getlist_sys_co_code(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
try{
	$sql = 'SELECT sys_co_code,sys_co_name FROM smestar_syscom';
	if ($_SESSION["uprof_ddl_byco"]=="YES"){$sql .= ' AND sys_co_code = "'.$_SESSION["uprof_ddl_byco"].'"';}
	if ($_SESSION["uprof_ddl_bycobr"]=="YES"){$sql .= ' AND sys_co_br_code = "'.$_SESSION["uprof_ddl_bycobr"].'"';}

	$q = $pdo->prepare($sql);
	$q->execute();
	$extr_vl = $q->fetchAll();

	$_SESSION["Sys_Co_Code_list"] = $extr_vl;

	DBconnectionUtil::disconnect();
}
catch (PDOException $sql_err) {
	$errmsg = "TechError: list value:".$sql_err->getMessage().", contact system administrator";
	error_log($errmsg,0);
	DBconnectionUtil::disconnect();
	return $errmsg;
}
}

//-- list for Gm_Badge_No
function getlist_gm_badge_no(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
try{
	$sql = 'SELECT gm_badge_no,gm_name FROM lp_gang_m  ORDER BY  gm_name ASC';
	if ($_SESSION["uprof_ddl_byco"]=="YES"){$sql .= ' AND sys_co_code = "'.$_SESSION["uprof_ddl_byco"].'"';}
	if ($_SESSION["uprof_ddl_bycobr"]=="YES"){$sql .= ' AND sys_co_br_code = "'.$_SESSION["uprof_ddl_bycobr"].'"';}

	$q = $pdo->prepare($sql);
	$q->execute();
	$extr_vl = $q->fetchAll();

	$_SESSION["Gm_Badge_No_list"] = $extr_vl;

	DBconnectionUtil::disconnect();
}
catch (PDOException $sql_err) {
	$errmsg = "TechError: list value:".$sql_err->getMessage().", contact system administrator";
	error_log($errmsg,0);
	DBconnectionUtil::disconnect();
	return $errmsg;
}
}

//-- data extraction
function getdata_forviewedit(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
try{

	//-- Advance Deduction
	$sql = "SELECT * FROM lp_adv_deduct WHERE adduct_tabreckey=?";
	$q = $pdo->prepare($sql);
	$q->execute(array($_SESSION["LASTSERIAL"]));
	$extr_data = $q->fetch(PDO::FETCH_ASSOC);

	GLOBAL $adduct_tabreckey;
	$adduct_tabreckey = $extr_data["adduct_tabreckey"];

	GLOBAL $sys_co_code;
	$sys_co_code = $extr_data["sys_co_code"];

	GLOBAL $gm_badge_no;
	$gm_badge_no = $extr_data["gm_badge_no"];

	GLOBAL $adduct_date;
	$adduct_date = $extr_data["adduct_date"];

	GLOBAL $adduct_amt;
	$adduct_amt = $extr_data["adduct_amt"];

	GLOBAL $adduct_auth;
	$adduct_auth = $extr_data["adduct_auth"];

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
	$gm_badge_no = null;
	if($_POST["gm_badge_no"]){$gm_badge_no = $_POST["gm_badge_no"];}

	$sql = "SELECT * FROM lp_adv_deduct WHERE 1=1";
	if (!empty($gm_badge_no)){
		$sql = $sql." AND gm_badge_no = '".$gm_badge_no."'";
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
