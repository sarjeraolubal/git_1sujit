<?php

// set form values
function set_formpostvalue(){

	GLOBAL $sys_co_code;
	$sys_co_code = null;
	if($_POST["sys_co_code"]){$sys_co_code = $_POST["sys_co_code"];}

	GLOBAL $cm_code;
	$cm_code = null;
	if($_POST["cm_code"]){$cm_code = $_POST["cm_code"];}

	GLOBAL $cm_price;
	$cm_price = null;
	if($_POST["cm_price"]){$cm_price = $_POST["cm_price"];}

	GLOBAL $cm_name;
	$cm_name = null;
	if($_POST["cm_name"]){$cm_name = $_POST["cm_name"];}
}

// validate form values
function validate_formvalue(){

	GLOBAL $errmsg;
	GLOBAL $OKtoSaveIntoDB;
	GLOBAL $cm_name;
	GLOBAL $cm_name_Error;
if (empty($cm_name) || $cm_name==null) {
	$cm_name_Error = "Commodity Name can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Commodity Name can not be blank in tab Commodity Info";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $cm_code;
	GLOBAL $cm_code_Error;
if (empty($cm_code) || $cm_code==null) {
	$cm_code_Error = "Commodity Code can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Commodity Code can not be blank in tab Commodity Info";
	$OKtoSaveIntoDB = false;
}
}

//-- insert or update db table
function commoditymaster_insupddb(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
GLOBAL $errmsg;
//-- For Commodity Info
	GLOBAL $cm_tabreckey;
	GLOBAL $sys_co_code;
	GLOBAL $cm_code;
	GLOBAL $cm_name;
	GLOBAL $cm_price;

try{

	if($_SESSION["FORMTRANMODE"] == "EDIT"){
		$sql = "INSERT INTO H_lp_commo_m SELECT * FROM lp_commo_m WHERE Cm_TabRecKey=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($_SESSION["LASTSERIAL"]));

		$sql = "UPDATE lp_commo_m SET sys_co_code=?,cm_code=?,cm_name=?,cm_price=? WHERE Cm_TabRecKey=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$cm_code,$cm_name,$cm_price,$_SESSION["LASTSERIAL"]));
	}
	else{
		$sql = "INSERT INTO lp_commo_m(sys_co_code,cm_code,cm_name,cm_price)". 
		 " VALUES(?,?,?,?)";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$cm_code,$cm_name,$cm_price));

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

	//-- Commodity Info
	$sql = "SELECT * FROM lp_commo_m WHERE cm_tabreckey=?";
	$q = $pdo->prepare($sql);
	$q->execute(array($_SESSION["LASTSERIAL"]));
	$extr_data = $q->fetch(PDO::FETCH_ASSOC);

	GLOBAL $cm_tabreckey;
	$cm_tabreckey = $extr_data["cm_tabreckey"];

	GLOBAL $sys_co_code;
	$sys_co_code = $extr_data["sys_co_code"];

	GLOBAL $cm_code;
	$cm_code = $extr_data["cm_code"];

	GLOBAL $cm_name;
	$cm_name = $extr_data["cm_name"];

	GLOBAL $cm_price;
	$cm_price = $extr_data["cm_price"];

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
	$cm_code = null;
	if($_POST["cm_code"]){$cm_code = $_POST["cm_code"];}

	$sql = "SELECT * FROM lp_commo_m WHERE 1=1";
	if (!empty($cm_code)){
		$sql = $sql." AND cm_code = '".$cm_code."'";
	}
	$cm_name = null;
	if($_POST["cm_name"]){$cm_name = $_POST["cm_name"];}
	if (!empty($cm_name)){
		$sql = $sql." AND cm_name = '".$cm_name."'";
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
