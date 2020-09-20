<?php

// set form values
function set_formpostvalue(){

	GLOBAL $am_desc;
	$am_desc = null;
	if($_POST["am_desc"]){$am_desc = $_POST["am_desc"];}

	GLOBAL $gm_badge_no;
	$gm_badge_no = null;
	if($_POST["gm_badge_no"]){$gm_badge_no = $_POST["gm_badge_no"];}

	GLOBAL $am_advdate;
	$am_advdate = null;
	GLOBAL $dsp_am_advdate;
	if($_POST["dsp_am_advdate"]){$am_advdate = date('Y-m-d',strtotime($_POST["dsp_am_advdate"]));}

	GLOBAL $am_amount;
	$am_amount = null;
	if($_POST["am_amount"]){$am_amount = $_POST["am_amount"];}

	GLOBAL $sys_co_code;
	$sys_co_code = null;
	if($_POST["sys_co_code"]){$sys_co_code = $_POST["sys_co_code"];}

	GLOBAL $am_slip_nbr;
	$am_slip_nbr = null;
	if($_POST["am_slip_nbr"]){$am_slip_nbr = $_POST["am_slip_nbr"];}
}

// validate form values
function validate_formvalue(){

	GLOBAL $errmsg;
	GLOBAL $OKtoSaveIntoDB;
	GLOBAL $am_advdate;
	GLOBAL $am_advdate_Error;
if (empty($am_advdate) || $am_advdate==null) {
	$am_advdate_Error = "Advance Date can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Advance Date can not be blank in tab Payment Details";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $am_desc;
	GLOBAL $am_desc_Error;
if (empty($am_desc) || $am_desc==null) {
	$am_desc_Error = "Advance Description can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Advance Description can not be blank in tab Payment Details";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $gm_badge_no;
	GLOBAL $gm_badge_no_Error;
if (empty($gm_badge_no) || $gm_badge_no==null) {
	$gm_badge_no_Error = "Member Id can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Member Id can not be blank in tab Payment Details";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $am_slip_nbr;
	GLOBAL $am_slip_nbr_Error;
if (empty($am_slip_nbr) || $am_slip_nbr==null) {
	$am_slip_nbr_Error = "Slip Number can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Slip Number can not be blank in tab Payment Details";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $sys_co_code;
	GLOBAL $sys_co_code_Error;
if (empty($sys_co_code) || $sys_co_code==null) {
	$sys_co_code_Error = "Company can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Company can not be blank in tab Payment Details";
	$OKtoSaveIntoDB = false;
}
}

//-- insert or update db table
function advancepayment_insupddb(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
GLOBAL $errmsg;
//-- For Payment Details
	GLOBAL $am_tabreckey;
	GLOBAL $sys_co_code;
	GLOBAL $gm_badge_no;
	GLOBAL $am_advdate;
	GLOBAL $am_slip_nbr;
	GLOBAL $am_amount;
	GLOBAL $am_desc;

try{

	if($_SESSION["FORMTRANMODE"] == "EDIT"){
		$sql = "INSERT INTO H_lp_adv_m SELECT * FROM lp_adv_m WHERE AM_TabRecKey=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($_SESSION["LASTSERIAL"]));

		$sql = "UPDATE lp_adv_m SET sys_co_code=?,gm_badge_no=?,am_advdate=?,am_slip_nbr=?,am_amount=?,am_desc=? WHERE AM_TabRecKey=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$gm_badge_no,$am_advdate,$am_slip_nbr,$am_amount,$am_desc,$_SESSION["LASTSERIAL"]));
	}
	else{
		$sql = "INSERT INTO lp_adv_m(sys_co_code,gm_badge_no,am_advdate,am_slip_nbr,am_amount,am_desc)". 
		 " VALUES(?,?,?,?,?,?)";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$gm_badge_no,$am_advdate,$am_slip_nbr,$am_amount,$am_desc));

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

	//-- Payment Details
	$sql = "SELECT * FROM lp_adv_m WHERE am_tabreckey=?";
	$q = $pdo->prepare($sql);
	$q->execute(array($_SESSION["LASTSERIAL"]));
	$extr_data = $q->fetch(PDO::FETCH_ASSOC);

	GLOBAL $am_tabreckey;
	$am_tabreckey = $extr_data["am_tabreckey"];

	GLOBAL $sys_co_code;
	$sys_co_code = $extr_data["sys_co_code"];

	GLOBAL $gm_badge_no;
	$gm_badge_no = $extr_data["gm_badge_no"];

	GLOBAL $am_advdate;
	$am_advdate = $extr_data["am_advdate"];

	GLOBAL $am_slip_nbr;
	$am_slip_nbr = $extr_data["am_slip_nbr"];

	GLOBAL $am_amount;
	$am_amount = $extr_data["am_amount"];

	GLOBAL $am_desc;
	$am_desc = $extr_data["am_desc"];

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

	$sql = "SELECT * FROM lp_adv_m WHERE 1=1";
	if (!empty($gm_badge_no)){
		$sql = $sql." AND gm_badge_no = '".$gm_badge_no."'";
	}
	$am_advdate = null;
	if($_POST["dsp_am_advdate"]){$am_advdate = date('Y-m-d',strtotime($_POST["dsp_am_advdate"]));}
	if (!empty($am_advdate)){
		$sql = $sql." AND am_advdate = '".$am_advdate."'";
	}
	$am_slip_nbr = null;
	if($_POST["am_slip_nbr"]){$am_slip_nbr = $_POST["am_slip_nbr"];}
	if (!empty($am_slip_nbr)){
		$sql = $sql." AND am_slip_nbr = '".$am_slip_nbr."'";
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
