<?php

// set form values
function set_formpostvalue(){

	GLOBAL $role;
	$role = null;
	if($_POST["role"]){$role = $_POST["role"];}

	GLOBAL $description;
	$description = null;
	if($_POST["description"]){$description = $_POST["description"];}
}

// validate form values
function validate_formvalue(){

	GLOBAL $errmsg;
	GLOBAL $OKtoSaveIntoDB;
	GLOBAL $description;
	GLOBAL $description_Error;
if (empty($description) || $description==null) {
	$description_Error = "Company Name can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Company Name can not be blank in tab Company Info";
	$OKtoSaveIntoDB = false;
}
}

//-- insert or update db table
function rolemaster_insupddb(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
GLOBAL $errmsg;
//-- For Company Info
	GLOBAL $id;
	GLOBAL $role;
	GLOBAL $description;

try{

	if($_SESSION["FORMTRANMODE"] == "EDIT"){
		$sql = "INSERT INTO H_role_tbl SELECT * FROM role_tbl WHERE id=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($_SESSION["LASTSERIAL"]));

		$sql = "UPDATE role_tbl SET role=?,description=? WHERE id=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($role,$description,$_SESSION["LASTSERIAL"]));
	}
	else{
		$sql = "INSERT INTO role_tbl(role,description)". 
		 " VALUES(?,?)";
		$q = $pdo->prepare($sql);
		$q->execute(array($role,$description));

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
	$sql = "SELECT * FROM role_tbl WHERE id=?";
	$q = $pdo->prepare($sql);
	$q->execute(array($_SESSION["LASTSERIAL"]));
	$extr_data = $q->fetch(PDO::FETCH_ASSOC);

	GLOBAL $id;
	$id = $extr_data["id"];

	GLOBAL $role;
	$role = $extr_data["role"];

	GLOBAL $description;
	$description = $extr_data["description"];

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
	$description = null;
	if($_POST["description"]){$description = $_POST["description"];}

	$sql = "SELECT * FROM role_tbl WHERE 1=1";
	if (!empty($description)){
		$sql = $sql." AND description LIKE '%".$description."%'";
	}

	if ($_SESSION["uprof_ddsp_byco"]=="YES"){$sql .= ' AND role = "'.$_SESSION["uprof_ddsp_byco"].'"';}
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
