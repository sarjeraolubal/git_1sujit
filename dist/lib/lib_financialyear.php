<?php

// set form values
function set_formpostvalue(){

	GLOBAL $fy_accyearstartdt;
	$fy_accyearstartdt = null;
	GLOBAL $dsp_fy_accyearstartdt;
	if($_POST["dsp_fy_accyearstartdt"]){$fy_accyearstartdt = date('Y-m-d',strtotime($_POST["dsp_fy_accyearstartdt"]));}

	GLOBAL $fy_month;
	$fy_month = null;
	if($_POST["fy_month"]){$fy_month = $_POST["fy_month"];}

	GLOBAL $fy_trandtto;
	$fy_trandtto = null;
	GLOBAL $dsp_fy_trandtto;
	if($_POST["dsp_fy_trandtto"]){$fy_trandtto = date('Y-m-d',strtotime($_POST["dsp_fy_trandtto"]));}

	GLOBAL $fy_accyear;
	$fy_accyear = null;
	if($_POST["fy_accyear"]){$fy_accyear = $_POST["fy_accyear"];}

	GLOBAL $fy_year;
	$fy_year = null;
	if($_POST["fy_year"]){$fy_year = $_POST["fy_year"];}

	GLOBAL $fy_accyearenddt;
	$fy_accyearenddt = null;
	GLOBAL $dsp_fy_accyearenddt;
	if($_POST["dsp_fy_accyearenddt"]){$fy_accyearenddt = date('Y-m-d',strtotime($_POST["dsp_fy_accyearenddt"]));}

	GLOBAL $sys_co_code;
	$sys_co_code = null;
	if($_POST["sys_co_code"]){$sys_co_code = $_POST["sys_co_code"];}

	GLOBAL $fy_trandtfrom;
	$fy_trandtfrom = null;
	GLOBAL $dsp_fy_trandtfrom;
	if($_POST["dsp_fy_trandtfrom"]){$fy_trandtfrom = date('Y-m-d',strtotime($_POST["dsp_fy_trandtfrom"]));}

	GLOBAL $fy_status;
	$fy_status = null;
	if($_POST["fy_status"]){$fy_status = $_POST["fy_status"];}
}

// validate form values
function validate_formvalue(){

	GLOBAL $errmsg;
	GLOBAL $OKtoSaveIntoDB;
	GLOBAL $fy_month;
	GLOBAL $fy_month_Error;
if (empty($fy_month) || $fy_month==null) {
	$fy_month_Error = "Month can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Month can not be blank in tab Financial Year";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $fy_accyearstartdt;
	GLOBAL $fy_accyearstartdt_Error;
if (empty($fy_accyearstartdt) || $fy_accyearstartdt==null) {
	$fy_accyearstartdt_Error = "Account Year Start Date can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Account Year Start Date can not be blank in tab Financial Year";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $fy_trandtto;
	GLOBAL $fy_trandtto_Error;
if (empty($fy_trandtto) || $fy_trandtto==null) {
	$fy_trandtto_Error = "Transaction Date To can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Transaction Date To can not be blank in tab Financial Year";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $sys_co_code;
	GLOBAL $sys_co_code_Error;
if (empty($sys_co_code) || $sys_co_code==null) {
	$sys_co_code_Error = "Company can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Company can not be blank in tab Financial Year";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $fy_accyear;
	GLOBAL $fy_accyear_Error;
if (empty($fy_accyear) || $fy_accyear==null) {
	$fy_accyear_Error = "Accounting Year can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Accounting Year can not be blank in tab Financial Year";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $fy_accyearenddt;
	GLOBAL $fy_accyearenddt_Error;
if (empty($fy_accyearenddt) || $fy_accyearenddt==null) {
	$fy_accyearenddt_Error = "Account Year End Date can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Account Year End Date can not be blank in tab Financial Year";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $fy_year;
	GLOBAL $fy_year_Error;
if (empty($fy_year) || $fy_year==null) {
	$fy_year_Error = "Year can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Year can not be blank in tab Financial Year";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $fy_trandtfrom;
	GLOBAL $fy_trandtfrom_Error;
if (empty($fy_trandtfrom) || $fy_trandtfrom==null) {
	$fy_trandtfrom_Error = "Transaction Date From can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Transaction Date From can not be blank in tab Financial Year";
	$OKtoSaveIntoDB = false;
}
}

//-- insert or update db table
function financialyear_insupddb(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
GLOBAL $errmsg;
//-- For Financial Year
	GLOBAL $fy_tabreckey;
	GLOBAL $sys_co_code;
	GLOBAL $fy_accyear;
	GLOBAL $fy_accyearstartdt;
	GLOBAL $fy_accyearenddt;
	GLOBAL $fy_year;
	GLOBAL $fy_month;
	GLOBAL $fy_trandtfrom;
	GLOBAL $fy_trandtto;
	GLOBAL $fy_status;

try{

	if($_SESSION["FORMTRANMODE"] == "EDIT"){
		$sql = "INSERT INTO H_lp_adv_finyear SELECT * FROM lp_adv_finyear WHERE FY_TabRecKey=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($_SESSION["LASTSERIAL"]));

		$sql = "UPDATE lp_adv_finyear SET sys_co_code=?,fy_accyear=?,fy_accyearstartdt=?,fy_accyearenddt=?,fy_year=?,fy_month=?,fy_trandtfrom=?,fy_trandtto=?,fy_status=? WHERE FY_TabRecKey=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$fy_accyear,$fy_accyearstartdt,$fy_accyearenddt,$fy_year,$fy_month,$fy_trandtfrom,$fy_trandtto,$fy_status,$_SESSION["LASTSERIAL"]));
	}
	else{
		$sql = "INSERT INTO lp_adv_finyear(sys_co_code,fy_accyear,fy_accyearstartdt,fy_accyearenddt,fy_year,fy_month,fy_trandtfrom,fy_trandtto,fy_status)". 
		 " VALUES(?,?,?,?,?,?,?,?,?)";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$fy_accyear,$fy_accyearstartdt,$fy_accyearenddt,$fy_year,$fy_month,$fy_trandtfrom,$fy_trandtto,$fy_status));

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

//-- data extraction
function getdata_forviewedit(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
try{

	//-- Financial Year
	$sql = "SELECT * FROM lp_adv_finyear WHERE fy_tabreckey=?";
	$q = $pdo->prepare($sql);
	$q->execute(array($_SESSION["LASTSERIAL"]));
	$extr_data = $q->fetch(PDO::FETCH_ASSOC);

	GLOBAL $fy_tabreckey;
	$fy_tabreckey = $extr_data["fy_tabreckey"];

	GLOBAL $sys_co_code;
	$sys_co_code = $extr_data["sys_co_code"];

	GLOBAL $fy_accyear;
	$fy_accyear = $extr_data["fy_accyear"];

	GLOBAL $fy_accyearstartdt;
	$fy_accyearstartdt = $extr_data["fy_accyearstartdt"];

	GLOBAL $fy_accyearenddt;
	$fy_accyearenddt = $extr_data["fy_accyearenddt"];

	GLOBAL $fy_year;
	$fy_year = $extr_data["fy_year"];

	GLOBAL $fy_month;
	$fy_month = $extr_data["fy_month"];

	GLOBAL $fy_trandtfrom;
	$fy_trandtfrom = $extr_data["fy_trandtfrom"];

	GLOBAL $fy_trandtto;
	$fy_trandtto = $extr_data["fy_trandtto"];

	GLOBAL $fy_status;
	$fy_status = $extr_data["fy_status"];

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
	$fy_accyear = null;
	if($_POST["fy_accyear"]){$fy_accyear = $_POST["fy_accyear"];}

	$sql = "SELECT * FROM lp_adv_finyear WHERE 1=1";
	if (!empty($fy_accyear)){
		$sql = $sql." AND fy_accyear = '".$fy_accyear."'";
	}
	$fy_year = null;
	if($_POST["fy_year"]){$fy_year = $_POST["fy_year"];}
	if (!empty($fy_year)){
		$sql = $sql." AND fy_year = '".$fy_year."'";
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
