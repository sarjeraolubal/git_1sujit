<?php

// set form values
function set_formpostvalue(){

	GLOBAL $gm_memcatg;
	$gm_memcatg = null;
	if($_POST["gm_memcatg"]){$gm_memcatg = $_POST["gm_memcatg"];}

	GLOBAL $dwd_date;
	$dwd_date = null;
	GLOBAL $dsp_dwd_date;
	if($_POST["dsp_dwd_date"]){$dwd_date = date('Y-m-d',strtotime($_POST["dsp_dwd_date"]));}

	GLOBAL $dwd_slip_nbr;
	$dwd_slip_nbr = null;
	if($_POST["dwd_slip_nbr"]){$dwd_slip_nbr = $_POST["dwd_slip_nbr"];}

	GLOBAL $cm_code;
	$cm_code = null;
	if($_POST["cm_code"]){$cm_code = $_POST["cm_code"];}

	GLOBAL $clrm_rate;
	$clrm_rate = null;
	if($_POST["clrm_rate"]){$clrm_rate = $_POST["clrm_rate"];}

	GLOBAL $dwd_lab_amount;
	$dwd_lab_amount = null;
	if($_POST["dwd_lab_amount"]){$dwd_lab_amount = $_POST["dwd_lab_amount"];}

	GLOBAL $dwd_total_amount;
	$dwd_total_amount = null;
	if($_POST["dwd_total_amount"]){$dwd_total_amount = $_POST["dwd_total_amount"];}

	GLOBAL $gm_badge_no;
	$gm_badge_no = null;
	if($_POST["gm_badge_no"]){$gm_badge_no = $_POST["gm_badge_no"];}

	GLOBAL $dwd_shift;
	$dwd_shift = null;
	if($_POST["dwd_shift"]){$dwd_shift = $_POST["dwd_shift"];}

	GLOBAL $clrm_code;
	$clrm_code = null;
	if($_POST["clrm_code"]){$clrm_code = $_POST["clrm_code"];}

	GLOBAL $dwd_labors;
	$dwd_labors = null;
	if($_POST["dwd_labors"]){$dwd_labors = $_POST["dwd_labors"];}

	GLOBAL $dwd_tabreckey;
	$dwd_tabreckey = null;
	if($_POST["dwd_tabreckey"]){$dwd_tabreckey = $_POST["dwd_tabreckey"];}

	GLOBAL $wtm_rate;
	$wtm_rate = null;
	if($_POST["wtm_rate"]){$wtm_rate = $_POST["wtm_rate"];}

	GLOBAL $gm_gang_code;
	$gm_gang_code = null;
	if($_POST["gm_gang_code"]){$gm_gang_code = $_POST["gm_gang_code"];}

	GLOBAL $dwd_totalperson;
	$dwd_totalperson = null;
	if($_POST["dwd_totalperson"]){$dwd_totalperson = $_POST["dwd_totalperson"];}

	GLOBAL $wtm_code;
	$wtm_code = null;
	if($_POST["wtm_code"]){$wtm_code = $_POST["wtm_code"];}

	GLOBAL $vm_code;
	$vm_code = null;
	if($_POST["vm_code"]){$vm_code = $_POST["vm_code"];}

	GLOBAL $wtm_amount;
	$wtm_amount = null;
	if($_POST["wtm_amount"]){$wtm_amount = $_POST["wtm_amount"];}

	GLOBAL $sys_co_code;
	$sys_co_code = null;
	if($_POST["sys_co_code"]){$sys_co_code = $_POST["sys_co_code"];}

	GLOBAL $dwd_cha_no;
	$dwd_cha_no = null;
	if($_POST["dwd_cha_no"]){$dwd_cha_no = $_POST["dwd_cha_no"];}

	GLOBAL $dwd_shed;
	$dwd_shed = null;
	if($_POST["dwd_shed"]){$dwd_shed = $_POST["dwd_shed"];}

	GLOBAL $dwd_matha;
	$dwd_matha = null;
	if($_POST["dwd_matha"]){$dwd_matha = $_POST["dwd_matha"];}

	GLOBAL $dwd_bags;
	$dwd_bags = null;
	if($_POST["dwd_bags"]){$dwd_bags = $_POST["dwd_bags"];}

	GLOBAL $gm_bankaccnbr;
	$gm_bankaccnbr = null;
	if($_POST["gm_bankaccnbr"]){$gm_bankaccnbr = $_POST["gm_bankaccnbr"];}
}

// validate form values
function validate_formvalue(){

	GLOBAL $errmsg;
	GLOBAL $OKtoSaveIntoDB;
	GLOBAL $sys_co_code;
	GLOBAL $sys_co_code_Error;
if (empty($sys_co_code) || $sys_co_code==null) {
	$sys_co_code_Error = "Company can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Company can not be blank in tab Primay Info";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $clrm_code;
	GLOBAL $clrm_code_Error;
if (empty($clrm_code) || $clrm_code==null) {
	$clrm_code_Error = "Labor Code can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Labor Code can not be blank in tab Primay Info";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $wtm_code;
	GLOBAL $wtm_code_Error;
if (count($wtm_code)==0){ 
	$wtm_code_Error = "Work Type can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Work Type can not be blank in tab Work Details";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $wtm_amount;
	GLOBAL $wtm_amount_Error;
if (count($wtm_amount)==0){ 
	$wtm_amount_Error = "Work Amount can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Work Amount can not be blank in tab Work Details";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $dwd_date;
	GLOBAL $dwd_date_Error;
if (empty($dwd_date) || $dwd_date==null) {
	$dwd_date_Error = "Work Date can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Work Date can not be blank in tab Primay Info";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $dwd_slip_nbr;
	GLOBAL $dwd_slip_nbr_Error;
if (empty($dwd_slip_nbr) || $dwd_slip_nbr==null) {
	$dwd_slip_nbr_Error = "Slip Number can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Slip Number can not be blank in tab Primay Info";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $dwd_matha;
	GLOBAL $dwd_matha_Error;
if (empty($dwd_matha) || $dwd_matha==null) {
	$dwd_matha_Error = "Matha can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Matha can not be blank in tab Primay Info";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $gm_gang_code;
	GLOBAL $gm_gang_code_Error;
if (count($gm_gang_code)==0){ 
	$gm_gang_code_Error = "Gang Code can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Gang Code can not be blank in tab Gang Details";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $vm_code;
	GLOBAL $vm_code_Error;
if (empty($vm_code) || $vm_code==null) {
	$vm_code_Error = "Vessel Name can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Vessel Name can not be blank in tab Primay Info";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $cm_code;
	GLOBAL $cm_code_Error;
if (empty($cm_code) || $cm_code==null) {
	$cm_code_Error = "Commodity can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Commodity can not be blank in tab Primay Info";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $gm_badge_no;
	GLOBAL $gm_badge_no_Error;
if (count($gm_badge_no)==0){ 
	$gm_badge_no_Error = "Member Id can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Member Id can not be blank in tab Gang Details";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $dwd_labors;
	GLOBAL $dwd_labors_Error;
if (empty($dwd_labors) || $dwd_labors==null) {
	$dwd_labors_Error = "Number Of Labors can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Number Of Labors can not be blank in tab Primay Info";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $dwd_total_amount;
	GLOBAL $dwd_total_amount_Error;
if (empty($dwd_total_amount) || $dwd_total_amount==null) {
	$dwd_total_amount_Error = "Total Amount can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Total Amount can not be blank in tab Primay Info";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $dwd_totalperson;
	GLOBAL $dwd_totalperson_Error;
if (empty($dwd_totalperson) || $dwd_totalperson==null) {
	$dwd_totalperson_Error = "Person can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Person can not be blank in tab Primay Info";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $dwd_lab_amount;
	GLOBAL $dwd_lab_amount_Error;
if (empty($dwd_lab_amount) || $dwd_lab_amount==null) {
	$dwd_lab_amount_Error = "Labor Amount can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Labor Amount can not be blank in tab Primay Info";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $dwd_bags;
	GLOBAL $dwd_bags_Error;
if (count($dwd_bags)==0){ 
	$dwd_bags_Error = "Number Of Bags can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Number Of Bags can not be blank in tab Work Details";
	$OKtoSaveIntoDB = false;
}
	// Add modified/new row into list to display

	// Work Details
	GLOBAL $workdetails_list;
	$workdetails_list  = array();

	GLOBAL $wtm_code;
	GLOBAL $wtm_rate;
	GLOBAL $dwd_bags;
	GLOBAL $wtm_amount;

	$v_totalrows = count($wtm_code);
	error_log('work logs - '.$v_totalrows);
	for ($mr_rownbr = 0; $mr_rownbr < $v_totalrows; $mr_rownbr++) {

	error_log("wtm_code:-".$wtm_code[$mr_rownbr]);
	
		$arr_value = array("wtm_code" => $wtm_code[$mr_rownbr]
			,"wtm_rate" => $wtm_rate[$mr_rownbr]
			,"dwd_bags" => $dwd_bags[$mr_rownbr]
			,"wtm_amount" => $wtm_amount[$mr_rownbr]
			);

		array_push($workdetails_list,$arr_value);

	}
	// Gang Details
	GLOBAL $gangdetails_list;
	$gangdetails_list  = array();

	GLOBAL $gm_gang_code;
	GLOBAL $gm_badge_no;
	GLOBAL $gm_memcatg;
	GLOBAL $gm_bankaccnbr;

	$v_totalrows = count($gm_badge_no);
	for ($mr_rownbr = 0; $mr_rownbr < $v_totalrows; $mr_rownbr++) {

		$arr_value = array("gm_gang_code" => $gm_gang_code[$mr_rownbr]
			,"gm_badge_no" => $gm_badge_no[$mr_rownbr]
			,"gm_memcatg" => $gm_memcatg[$mr_rownbr]
			,"gm_bankaccnbr" => $gm_bankaccnbr[$mr_rownbr]
			);

		array_push($gangdetails_list,$arr_value);

	}
}

//-- insert or update db table
function dailychallan_insupddb(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
GLOBAL $errmsg;
//-- For Primay Info
	GLOBAL $dwd_tabreckey;
	GLOBAL $sys_co_code;
	GLOBAL $dwd_date;
	GLOBAL $dwd_slip_nbr;
	GLOBAL $vm_code;
	GLOBAL $dwd_cha_no;
	GLOBAL $dwd_shed;
	GLOBAL $dwd_shift;
	GLOBAL $cm_code;
	GLOBAL $clrm_code;
	GLOBAL $dwd_labors;
	GLOBAL $dwd_lab_amount;
	GLOBAL $dwd_total_amount;
	GLOBAL $dwd_matha;
	GLOBAL $dwd_totalperson;

try{

	if($_SESSION["FORMTRANMODE"] == "EDIT"){
		$sql = "INSERT INTO H_lp_dc_pri_inf SELECT * FROM lp_dc_pri_inf WHERE DWD_TabRecKey=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($_SESSION["LASTSERIAL"]));

		$sql = "UPDATE lp_dc_pri_inf SET sys_co_code=?,dwd_date=?,dwd_slip_nbr=?,vm_code=?,dwd_cha_no=?,dwd_shed=?,dwd_shift=?,cm_code=?,clrm_code=?,dwd_labors=?,dwd_lab_amount=?,dwd_total_amount=?,dwd_matha=?,dwd_totalperson=? WHERE DWD_TabRecKey=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$dwd_date,$dwd_slip_nbr,$vm_code,$dwd_cha_no,$dwd_shed,$dwd_shift,$cm_code,$clrm_code,$dwd_labors,$dwd_lab_amount,$dwd_total_amount,$dwd_matha,$dwd_totalperson,$_SESSION["LASTSERIAL"]));
	}
	else{
		$sql = "INSERT INTO lp_dc_pri_inf(sys_co_code,dwd_date,dwd_slip_nbr,vm_code,dwd_cha_no,dwd_shed,dwd_shift,cm_code,clrm_code,dwd_labors,dwd_lab_amount,dwd_total_amount,dwd_matha,dwd_totalperson)". 
		 " VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$dwd_date,$dwd_slip_nbr,$vm_code,$dwd_cha_no,$dwd_shed,$dwd_shift,$cm_code,$clrm_code,$dwd_labors,$dwd_lab_amount,$dwd_total_amount,$dwd_matha,$dwd_totalperson));

		$_SESSION["LASTSERIAL"]= $pdo->lastInsertId();
	}

}
catch (PDOException $sql_err) {
	$errmsg = "TechError: insert or update:".$sql_err->getMessage().", contact system administrator";
	error_log($errmsg,0);
	DBconnectionUtil::disconnect();
	return $errmsg;
}
//-- For Work Details
	GLOBAL $dc_wdtl_tabreckey;
	GLOBAL $dwd_tabreckey;
	GLOBAL $wtm_code;
	GLOBAL $dwd_bags;
	GLOBAL $wtm_amount;

try{

	// multirow insert and update
	$v_totalrows = count($wtm_code);
	if ($v_totalrows <> 0){
		$sql = "INSERT INTO H_lp_dc_wdtl SELECT * FROM lp_dc_wdtl WHERE DWD_TabRecKey = ".$_SESSION["LASTSERIAL"];
		$q = $pdo->prepare($sql);
		$q->execute();
		$sql = "DELETE FROM lp_dc_wdtl WHERE DWD_TabRecKey = ".$_SESSION["LASTSERIAL"];
		$q = $pdo->prepare($sql);
		$q->execute();
	}

	for ($mr_rownbr = 0; $mr_rownbr < $v_totalrows; $mr_rownbr++) {
		$sql = 	"INSERT INTO lp_dc_wdtl(dwd_tabreckey,wtm_code,dwd_bags,wtm_amount)". 
		" VALUES(?,?,?,?)";
		$q = $pdo->prepare($sql);
		$q->execute(array($_SESSION["LASTSERIAL"],$wtm_code[$mr_rownbr],$dwd_bags[$mr_rownbr],$wtm_amount[$mr_rownbr]));

	}

}
catch (PDOException $sql_err) {
	$errmsg = "TechError: insert or update:".$sql_err->getMessage().", contact system administrator";
	error_log($errmsg,0);
	DBconnectionUtil::disconnect();
	return $errmsg;
}
//-- For Gang Details
	GLOBAL $dc_gdtl_tabreckey;
	GLOBAL $dwd_tabreckey;
	GLOBAL $gm_gang_code;
	GLOBAL $gm_badge_no;

try{

	// multirow insert and update
	$v_totalrows = count($gm_badge_no);
	if ($v_totalrows <> 0){
		$sql = "INSERT INTO H_lp_dc_gdtl SELECT * FROM lp_dc_gdtl WHERE DWD_TabRecKey = ".$_SESSION["LASTSERIAL"];
		$q = $pdo->prepare($sql);
		$q->execute();
		$sql = "DELETE FROM lp_dc_gdtl WHERE DWD_TabRecKey = ".$_SESSION["LASTSERIAL"];
		$q = $pdo->prepare($sql);
		$q->execute();
	}

	for ($mr_rownbr = 0; $mr_rownbr < $v_totalrows; $mr_rownbr++) {
		$sql = 	"INSERT INTO lp_dc_gdtl(dwd_tabreckey,gm_gang_code,gm_badge_no)". 
		" VALUES(?,?,?)";
		$q = $pdo->prepare($sql);
		$q->execute(array($_SESSION["LASTSERIAL"],$gm_gang_code[$mr_rownbr],$gm_badge_no[$mr_rownbr]));

	}

}
catch (PDOException $sql_err) {
	$errmsg = "TechError: insert or update:".$sql_err->getMessage().", contact system administrator";
	error_log($errmsg,0);
	DBconnectionUtil::disconnect();
	return $errmsg;
}
//-- For Primay Info
	GLOBAL $dwd_tabreckey;
	GLOBAL $sys_co_code;
	GLOBAL $dwd_date;
	GLOBAL $dwd_slip_nbr;
	GLOBAL $vm_code;
	GLOBAL $dwd_cha_no;
	GLOBAL $dwd_shed;
	GLOBAL $dwd_shift;
	GLOBAL $cm_code;
	GLOBAL $clrm_code;
	GLOBAL $dwd_labors;
	GLOBAL $dwd_lab_amount;
	GLOBAL $dwd_total_amount;
	GLOBAL $dwd_matha;
	GLOBAL $dwd_totalperson;

try{

	if($_SESSION["FORMTRANMODE"] == "EDIT"){
		$sql = "INSERT INTO H_lp_dc_pri_inf SELECT * FROM lp_dc_pri_inf WHERE DWD_TabRecKey=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($_SESSION["LASTSERIAL"]));

		$sql = "UPDATE lp_dc_pri_inf SET sys_co_code=?,dwd_date=?,dwd_slip_nbr=?,vm_code=?,dwd_cha_no=?,dwd_shed=?,dwd_shift=?,cm_code=?,clrm_code=?,dwd_labors=?,dwd_lab_amount=?,dwd_total_amount=?,dwd_matha=?,dwd_totalperson=? WHERE DWD_TabRecKey=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$dwd_date,$dwd_slip_nbr,$vm_code,$dwd_cha_no,$dwd_shed,$dwd_shift,$cm_code,$clrm_code,$dwd_labors,$dwd_lab_amount,$dwd_total_amount,$dwd_matha,$dwd_totalperson,$_SESSION["LASTSERIAL"]));
	}
	else{
		$sql = "INSERT INTO lp_dc_pri_inf(sys_co_code,dwd_date,dwd_slip_nbr,vm_code,dwd_cha_no,dwd_shed,dwd_shift,cm_code,clrm_code,dwd_labors,dwd_lab_amount,dwd_total_amount,dwd_matha,dwd_totalperson)". 
		 " VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$dwd_date,$dwd_slip_nbr,$vm_code,$dwd_cha_no,$dwd_shed,$dwd_shift,$cm_code,$clrm_code,$dwd_labors,$dwd_lab_amount,$dwd_total_amount,$dwd_matha,$dwd_totalperson));

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

//-- list for Wtm_Code
function getlist_wtm_code(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
try{
	$sql = 'SELECT wtm_code,wtm_name FROM lp_work_tm';
	if ($_SESSION["uprof_ddl_byco"]=="YES"){$sql .= ' AND sys_co_code = "'.$_SESSION["uprof_ddl_byco"].'"';}
	if ($_SESSION["uprof_ddl_bycobr"]=="YES"){$sql .= ' AND sys_co_br_code = "'.$_SESSION["uprof_ddl_bycobr"].'"';}

	$q = $pdo->prepare($sql);
	$q->execute();
	$extr_vl = $q->fetchAll();

	$_SESSION["Wtm_Code_list"] = $extr_vl;

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
	$sql = 'SELECT gm_badge_no,gm_name FROM lp_gang_m WHERE 1=2';
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

//-- list for Cm_Code
function getlist_cm_code(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
try{
	$sql = 'SELECT cm_code,cm_name FROM lp_commo_m';
	if ($_SESSION["uprof_ddl_byco"]=="YES"){$sql .= ' AND sys_co_code = "'.$_SESSION["uprof_ddl_byco"].'"';}
	if ($_SESSION["uprof_ddl_bycobr"]=="YES"){$sql .= ' AND sys_co_br_code = "'.$_SESSION["uprof_ddl_bycobr"].'"';}

	$q = $pdo->prepare($sql);
	$q->execute();
	$extr_vl = $q->fetchAll();

	$_SESSION["Cm_Code_list"] = $extr_vl;

	DBconnectionUtil::disconnect();
}
catch (PDOException $sql_err) {
	$errmsg = "TechError: list value:".$sql_err->getMessage().", contact system administrator";
	error_log($errmsg,0);
	DBconnectionUtil::disconnect();
	return $errmsg;
}
}

//-- list for Vm_Code
function getlist_vm_code(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
try{
	$sql = 'SELECT vm_code,vm_name FROM lp_vessel_m';
	if ($_SESSION["uprof_ddl_byco"]=="YES"){$sql .= ' AND sys_co_code = "'.$_SESSION["uprof_ddl_byco"].'"';}
	if ($_SESSION["uprof_ddl_bycobr"]=="YES"){$sql .= ' AND sys_co_br_code = "'.$_SESSION["uprof_ddl_bycobr"].'"';}

	$q = $pdo->prepare($sql);
	$q->execute();
	$extr_vl = $q->fetchAll();

	$_SESSION["Vm_Code_list"] = $extr_vl;

	DBconnectionUtil::disconnect();
}
catch (PDOException $sql_err) {
	$errmsg = "TechError: list value:".$sql_err->getMessage().", contact system administrator";
	error_log($errmsg,0);
	DBconnectionUtil::disconnect();
	return $errmsg;
}
}

//-- list for CLRM_Code
function getlist_clrm_code(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
try{
	$sql = 'SELECT clrm_code,clrm_desc FROM lp_labour_rm';
	if ($_SESSION["uprof_ddl_byco"]=="YES"){$sql .= ' AND sys_co_code = "'.$_SESSION["uprof_ddl_byco"].'"';}
	if ($_SESSION["uprof_ddl_bycobr"]=="YES"){$sql .= ' AND sys_co_br_code = "'.$_SESSION["uprof_ddl_bycobr"].'"';}

	$q = $pdo->prepare($sql);
	$q->execute();
	$extr_vl = $q->fetchAll();

	$_SESSION["CLRM_Code_list"] = $extr_vl;

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

	//-- Primay Info
	$sql = "SELECT * FROM lp_dc_pri_inf WHERE dwd_tabreckey=?";
	$q = $pdo->prepare($sql);
	$q->execute(array($_SESSION["LASTSERIAL"]));
	$extr_data = $q->fetch(PDO::FETCH_ASSOC);

	GLOBAL $dwd_tabreckey;
	$dwd_tabreckey = $extr_data["dwd_tabreckey"];

	GLOBAL $sys_co_code;
	$sys_co_code = $extr_data["sys_co_code"];

	GLOBAL $dwd_date;
	$dwd_date = $extr_data["dwd_date"];

	GLOBAL $dwd_slip_nbr;
	$dwd_slip_nbr = $extr_data["dwd_slip_nbr"];

	GLOBAL $vm_code;
	$vm_code = $extr_data["vm_code"];

	GLOBAL $dwd_cha_no;
	$dwd_cha_no = $extr_data["dwd_cha_no"];

	GLOBAL $dwd_shed;
	$dwd_shed = $extr_data["dwd_shed"];

	GLOBAL $dwd_shift;
	$dwd_shift = $extr_data["dwd_shift"];

	GLOBAL $cm_code;
	$cm_code = $extr_data["cm_code"];

	GLOBAL $clrm_code;
	$clrm_code = $extr_data["clrm_code"];

	GLOBAL $clrm_rate;
	$clrm_rate = $extr_data["clrm_rate"];

	GLOBAL $dwd_labors;
	$dwd_labors = $extr_data["dwd_labors"];

	GLOBAL $dwd_lab_amount;
	$dwd_lab_amount = $extr_data["dwd_lab_amount"];

	GLOBAL $dwd_total_amount;
	$dwd_total_amount = $extr_data["dwd_total_amount"];

	GLOBAL $dwd_matha;
	$dwd_matha = $extr_data["dwd_matha"];

	GLOBAL $dwd_totalperson;
	$dwd_totalperson = $extr_data["dwd_totalperson"];


	//-- Work Details
	$sql = "SELECT A.*,B.wtm_rate FROM lp_dc_wdtl A, lp_work_tm B WHERE A.dwd_tabreckey=? AND B.wtm_code=A.wtm_code";  
	$q = $pdo->prepare($sql);
	$q->execute(array($_SESSION["LASTSERIAL"]));

	GLOBAL $workdetails_list;
	$workdetails_list = $q->fetchAll();


	//-- Gang Details
	$sql = "SELECT * FROM lp_dc_gdtl WHERE dwd_tabreckey=?";
	$q = $pdo->prepare($sql);
	$q->execute(array($_SESSION["LASTSERIAL"]));

	GLOBAL $gangdetails_list;
	$gangdetails_list = $q->fetchAll();

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
	$sys_co_code = null;
	if($_POST["sys_co_code"]){$sys_co_code = $_POST["sys_co_code"];}

	$sql = "SELECT * FROM lp_dc_pri_inf WHERE 1=1";
	if (!empty($sys_co_code)){
		$sql = $sql." AND sys_co_code = '".$sys_co_code."'";
	}
	$dwd_slip_nbr = null;
	if($_POST["dwd_slip_nbr"]){$dwd_slip_nbr = $_POST["dwd_slip_nbr"];}
	if (!empty($dwd_slip_nbr)){
		$sql = $sql." AND dwd_slip_nbr = '".$dwd_slip_nbr."'";
	}
	$vm_code = null;
	if($_POST["vm_code"]){$vm_code = $_POST["vm_code"];}
	if (!empty($vm_code)){
		$sql = $sql." AND vm_code = '".$vm_code."'";
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
