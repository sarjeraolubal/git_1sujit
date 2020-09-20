<?php

// set form values
function set_formpostvalue(){
	
	
	GLOBAL $id_menu;
	$id_menu = null;
	if($_POST["id_menu"]){$id_menu = $_POST["id_menu"];}

	GLOBAL $name_menu;
	$name_menu = null;
	if($_POST["name_menu"]){$name_menu = $_POST["name_menu"];}

	GLOBAL $menu_sequence;
	$menu_sequence = null;
	if($_POST["menu_sequence"]){$menu_sequence = $_POST["menu_sequence"];}

	GLOBAL $icon;
	$icon = null;
	if($_POST["icon"]){$icon = $_POST["icon"];}
}

// validate form values
function validate_formvalue(){

	GLOBAL $errmsg;
	GLOBAL $OKtoSaveIntoDB;
	GLOBAL $id_menu;
	GLOBAL $id_menu_Error;
if (empty($id_menu) || $id_menu==null) {
	$id_menu_Error = "Main menu Code can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Main Menu Code can not be blank in tab Vessel Detail";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $name_menu;
	GLOBAL $name_menu_Error;
if (empty($name_menu) || $name_menu==null) {
	$name_menu_Error = "Main Menu Name can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Main Menu Name can not be blank in tab Vessel Detail";
	$OKtoSaveIntoDB = false;
}
}

//-- insert or update db table
function main_menu_insupddb(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
GLOBAL $errmsg;
//-- For Vessel Detail
	GLOBAL $icon;
	GLOBAL $menu_sequence;
	GLOBAL $id_menu;
	GLOBAL $name_menu;

try{

	if($_SESSION["FORMTRANMODE"] == "EDIT"){
		$sql = "INSERT INTO H_main_menu SELECT * FROM main_menu WHERE id_menu=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($_SESSION["LASTSERIAL"]));

		$sql = "UPDATE main_menu SET menu_sequence=?,name_menu=?,icon=? WHERE id_menu=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($menu_sequence,$name_menu,$icon,$id_menu));
	}
	else{
		$sql = "INSERT INTO main_menu(menu_sequence,id_menu,name_menu,icon)". 
		 " VALUES(?,?,?,?)";
		$q = $pdo->prepare($sql);
		$q->execute(array($menu_sequence,$id_menu,$name_menu,$icon));

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
	$sql = "SELECT * FROM main_menu WHERE id_menu=?";
	$q = $pdo->prepare($sql);
	$q->execute(array($_SESSION["LASTSERIAL"]));
	$extr_data = $q->fetch(PDO::FETCH_ASSOC);

	GLOBAL $id_menu;
	$id_menu = $extr_data["id_menu"];

	GLOBAL $menu_sequence;
	$menu_sequence = $extr_data["menu_sequence"];

	GLOBAL $icon;
	$icon = $extr_data["icon"];

	GLOBAL $name_menu;
	$name_menu = $extr_data["name_menu"];

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
	$id_menu = null;
	if($_POST["id_menu"]){$id_menu = $_POST["id_menu"];}

	$sql = "SELECT * FROM main_menu WHERE 1=1";
	if (!empty($id_menu)){
		$sql = $sql." AND id_menu = '".$id_menu."'";
	}
	$name_menu = null;
	if($_POST["name_menu"]){$name_menu = $_POST["name_menu"];}
	if (!empty($name_menu)){
		$sql = $sql." AND name_menu = '".$name_menu."'";
	}

 // if ($_SESSION["uprof_ddsp_byco"]=="YES"){$sql .= ' AND menu_sequence = "'.$_SESSION["uprof_ddsp_byco"].'"';}
 //	if ($_SESSION["uprof_ddsp_bycobr"]=="YES"){$sql .= ' AND sys_co_br_code = "'.$_SESSION["uprof_ddsp_bycobr"].'"';}

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
