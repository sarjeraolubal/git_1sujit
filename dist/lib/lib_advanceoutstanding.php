<?php

// set form values
function set_formpostvalue(){

	GLOBAL $ao_process_schedule;
	$ao_process_schedule = null;
	if($_POST["ao_process_schedule"]){$ao_process_schedule = $_POST["ao_process_schedule"];}

	GLOBAL $ao_totadv;
	$ao_totadv = null;
	if($_POST["ao_totadv"]){$ao_totadv = $_POST["ao_totadv"];}

	GLOBAL $ao_recover_month;
	$ao_recover_month = null;
	if($_POST["ao_recover_month"]){$ao_recover_month = $_POST["ao_recover_month"];}

	GLOBAL $ao_recover_amt_pm;
	$ao_recover_amt_pm = null;
	if($_POST["ao_recover_amt_pm"]){$ao_recover_amt_pm = $_POST["ao_recover_amt_pm"];}

	GLOBAL $gm_badge_no;
	$gm_badge_no = null;
	if($_POST["gm_badge_no"]){$gm_badge_no = $_POST["gm_badge_no"];}

	GLOBAL $ao_totrecoverd;
	$ao_totrecoverd = null;
	if($_POST["ao_totrecoverd"]){$ao_totrecoverd = $_POST["ao_totrecoverd"];}

	GLOBAL $ao_date;
	$ao_date = null;
	GLOBAL $dsp_ao_date;
	if($_POST["dsp_ao_date"]){$ao_date = date('Y-m-d',strtotime($_POST["dsp_ao_date"]));}

	GLOBAL $ao_balance_amt;
	$ao_balance_amt = null;
	if($_POST["ao_balance_amt"]){$ao_balance_amt = $_POST["ao_balance_amt"];}

	GLOBAL $sys_co_code;
	$sys_co_code = null;
	if($_POST["sys_co_code"]){$sys_co_code = $_POST["sys_co_code"];}
}

// validate form values
function validate_formvalue(){

	GLOBAL $errmsg;
	GLOBAL $OKtoSaveIntoDB;
	GLOBAL $ao_recover_amt_pm;
	GLOBAL $ao_recover_amt_pm_Error;
if (empty($ao_recover_amt_pm) || $ao_recover_amt_pm==null) {
	$ao_recover_amt_pm_Error = "Amount To Recover Per Month can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Amount To Recover Per Month can not be blank in tab Advance Outstanding";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $ao_balance_amt;
	GLOBAL $ao_balance_amt_Error;
if (empty($ao_balance_amt) || $ao_balance_amt==null) {
	$ao_balance_amt_Error = "Balance As Of Date can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Balance As Of Date can not be blank in tab Advance Outstanding";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $ao_recover_month;
	GLOBAL $ao_recover_month_Error;
if (empty($ao_recover_month) || $ao_recover_month==null) {
	$ao_recover_month_Error = "Number Of Months To Recover can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Number Of Months To Recover can not be blank in tab Advance Outstanding";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $gm_badge_no;
	GLOBAL $gm_badge_no_Error;
if (empty($gm_badge_no) || $gm_badge_no==null) {
	$gm_badge_no_Error = "Member Id can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Member Id can not be blank in tab Advance Outstanding";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $ao_date;
	GLOBAL $ao_date_Error;
if (empty($ao_date) || $ao_date==null) {
	$ao_date_Error = "Advance Date can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Advance Date can not be blank in tab Advance Outstanding";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $sys_co_code;
	GLOBAL $sys_co_code_Error;
if (empty($sys_co_code) || $sys_co_code==null) {
	$sys_co_code_Error = "Company can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Company can not be blank in tab Advance Outstanding";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $ao_totadv;
	GLOBAL $ao_totadv_Error;
if (empty($ao_totadv) || $ao_totadv==null) {
	$ao_totadv_Error = "Total Advance can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Total Advance can not be blank in tab Advance Outstanding";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $ao_totrecoverd;
	GLOBAL $ao_totrecoverd_Error;
if (empty($ao_totrecoverd) || $ao_totrecoverd==null) {
	$ao_totrecoverd_Error = "Total Recoverd As Of Date can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Total Recoverd As Of Date can not be blank in tab Advance Outstanding";
	$OKtoSaveIntoDB = false;
}
}

//-- insert or update db table
function advanceoutstanding_insupddb(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
GLOBAL $errmsg;
//-- For Advance Outstanding
	GLOBAL $ao_tabreckey;
	GLOBAL $sys_co_code;
	GLOBAL $gm_badge_no;
	GLOBAL $ao_date;
	GLOBAL $ao_totadv;
	GLOBAL $ao_totrecoverd;
	GLOBAL $ao_balance_amt;
	GLOBAL $ao_recover_month;
	GLOBAL $ao_recover_amt_pm;
	GLOBAL $ao_process_schedule;

try{

	if($_SESSION["FORMTRANMODE"] == "EDIT"){
		$sql = "INSERT INTO H_lp_adv_os SELECT * FROM lp_adv_os WHERE AO_TabRecKey=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($_SESSION["LASTSERIAL"]));

		$sql = "UPDATE lp_adv_os SET sys_co_code=?,gm_badge_no=?,ao_date=?,ao_totadv=?,ao_totrecoverd=?,ao_balance_amt=?,ao_recover_month=?,ao_recover_amt_pm=?,ao_process_schedule=? WHERE AO_TabRecKey=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$gm_badge_no,$ao_date,$ao_totadv,$ao_totrecoverd,$ao_balance_amt,$ao_recover_month,$ao_recover_amt_pm,$ao_process_schedule,$_SESSION["LASTSERIAL"]));
	}
	else{
		$sql = "INSERT INTO lp_adv_os(sys_co_code,gm_badge_no,ao_date,ao_totadv,ao_totrecoverd,ao_balance_amt,ao_recover_month,ao_recover_amt_pm,ao_process_schedule)". 
		 " VALUES(?,?,?,?,?,?,?,?,?)";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$gm_badge_no,$ao_date,$ao_totadv,$ao_totrecoverd,$ao_balance_amt,$ao_recover_month,$ao_recover_amt_pm,$ao_process_schedule));

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
	$sql = 'SELECT gm_badge_no,gm_name FROM lp_gang_m';
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

	//-- Advance Outstanding
	$sql = "SELECT * FROM lp_adv_os WHERE ao_tabreckey=?";
	$q = $pdo->prepare($sql);
	$q->execute(array($_SESSION["LASTSERIAL"]));
	$extr_data = $q->fetch(PDO::FETCH_ASSOC);

	GLOBAL $ao_tabreckey;
	$ao_tabreckey = $extr_data["ao_tabreckey"];

	GLOBAL $sys_co_code;
	$sys_co_code = $extr_data["sys_co_code"];

	GLOBAL $gm_badge_no;
	$gm_badge_no = $extr_data["gm_badge_no"];

	GLOBAL $ao_date;
	$ao_date = $extr_data["ao_date"];

	GLOBAL $ao_totadv;
	$ao_totadv = $extr_data["ao_totadv"];

	GLOBAL $ao_totrecoverd;
	$ao_totrecoverd = $extr_data["ao_totrecoverd"];

	GLOBAL $ao_balance_amt;
	$ao_balance_amt = $extr_data["ao_balance_amt"];

	GLOBAL $ao_recover_month;
	$ao_recover_month = $extr_data["ao_recover_month"];

	GLOBAL $ao_recover_amt_pm;
	$ao_recover_amt_pm = $extr_data["ao_recover_amt_pm"];

	GLOBAL $ao_process_schedule;
	$ao_process_schedule = $extr_data["ao_process_schedule"];

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

	$sql = "SELECT * FROM lp_adv_os WHERE 1=1";
	if (!empty($gm_badge_no)){
		$sql = $sql." AND gm_badge_no = '".$gm_badge_no."'";
	}
	$ao_date = null;
	if($_POST["dsp_ao_date"]){$ao_date = date('Y-m-d',strtotime($_POST["dsp_ao_date"]));}
	if (!empty($ao_date)){
		$sql = $sql." AND ao_date = '".$ao_date."'";
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
