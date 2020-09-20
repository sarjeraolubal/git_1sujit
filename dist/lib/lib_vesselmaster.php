<?php

// set form values
function set_formpostvalue(){

	GLOBAL $vm_name;
	$vm_name = null;
	if($_POST["vm_name"]){$vm_name = $_POST["vm_name"];}

	GLOBAL $sys_co_code;
	$sys_co_code = null;
	if($_POST["sys_co_code"]){$sys_co_code = $_POST["sys_co_code"];}

	GLOBAL $vm_code;
	$vm_code = null;
	if($_POST["vm_code"]){$vm_code = $_POST["vm_code"];}
}

// validate form values
function validate_formvalue(){

	GLOBAL $errmsg;
	GLOBAL $OKtoSaveIntoDB;
	GLOBAL $vm_code;
	GLOBAL $vm_code_Error;
if (empty($vm_code) || $vm_code==null) {
	$vm_code_Error = "Vessel Code can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Vessel Code can not be blank in tab Vessel Detail";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $vm_name;
	GLOBAL $vm_name_Error;
if (empty($vm_name) || $vm_name==null) {
	$vm_name_Error = "Vessel Name can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Vessel Name can not be blank in tab Vessel Detail";
	$OKtoSaveIntoDB = false;
}
}

//-- insert or update db table
function vesselmaster_insupddb(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
GLOBAL $errmsg;
//-- For Vessel Detail
	GLOBAL $vm_tabreckey;
	GLOBAL $sys_co_code;
	GLOBAL $vm_code;
	GLOBAL $vm_name;

try{

	if($_SESSION["FORMTRANMODE"] == "EDIT"){
		$sql = "INSERT INTO H_lp_vessel_m SELECT * FROM lp_vessel_m WHERE Vm_TabRecKey=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($_SESSION["LASTSERIAL"]));

		$sql = "UPDATE lp_vessel_m SET sys_co_code=?,vm_code=?,vm_name=? WHERE Vm_TabRecKey=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$vm_code,$vm_name,$_SESSION["LASTSERIAL"]));
	}
	else{
		$sql = "INSERT INTO lp_vessel_m(sys_co_code,vm_code,vm_name)". 
		 " VALUES(?,?,?)";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$vm_code,$vm_name));

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

	//-- Vessel Detail
	$sql = "SELECT * FROM lp_vessel_m WHERE vm_tabreckey=?";
	$q = $pdo->prepare($sql);
	$q->execute(array($_SESSION["LASTSERIAL"]));
	$extr_data = $q->fetch(PDO::FETCH_ASSOC);

	GLOBAL $vm_tabreckey;
	$vm_tabreckey = $extr_data["vm_tabreckey"];

	GLOBAL $sys_co_code;
	$sys_co_code = $extr_data["sys_co_code"];

	GLOBAL $vm_code;
	$vm_code = $extr_data["vm_code"];

	GLOBAL $vm_name;
	$vm_name = $extr_data["vm_name"];

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
	$vm_code = null;
	if($_POST["vm_code"]){$vm_code = $_POST["vm_code"];}

	$sql = "SELECT * FROM lp_vessel_m WHERE 1=1";
	if (!empty($vm_code)){
		$sql = $sql." AND vm_code = '".$vm_code."'";
	}
	$vm_name = null;
	if($_POST["vm_name"]){$vm_name = $_POST["vm_name"];}
	if (!empty($vm_name)){
		$sql = $sql." AND vm_name = '".$vm_name."'";
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
