<?php

// set form values
function set_formpostvalue(){

	GLOBAL $role;
	$role = null;
	if($_POST["role"]){$role = $_POST["role"];}

	GLOBAL $role_name;
	$role_name = null;
	if($_POST["role_name"]){$role_name = $_POST["role_name"];}

	GLOBAL $sub_m_option;
	$sub_m_option = null;
	if($_POST["sub_m_option"]){$sub_m_option = $_POST["sub_m_option"];}

	GLOBAL $m_option;
	$m_option = null;
	if($_POST["m_option"]){$m_option = $_POST["m_option"];}
}

// validate form values
function validate_formvalue(){

	GLOBAL $errmsg;
	GLOBAL $OKtoSaveIntoDB;
	GLOBAL $m_option;
	GLOBAL $m_option_Error;
if (empty($m_option) || $m_option==null) {
	$m_option_Error = "Main Menu code can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Main Menu code can not be blank in tab Role  Info";
	$OKtoSaveIntoDB = false;
}

	GLOBAL $errmsg;
	GLOBAL $OKtoSaveIntoDB;
	GLOBAL $sub_m_option;
	GLOBAL $sub_m_option_Error;
if (empty($sub_m_option) || $sub_m_option==null) {
	$sub_m_option_Error = "SUB Menu code can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Main Menu code can not be blank in tab Menu Info";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $role;
	GLOBAL $role_Error;
if (empty($role) || $role==null) {
	$role_Error = "role Code can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." role Code can not be blank in tab Role Info";
	$OKtoSaveIntoDB = false;
}
}

//-- insert or update db table
function menumaster_insupddb(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
GLOBAL $errmsg;
//-- For menupermission Info
	GLOBAL $id;	
	GLOBAL $role;
	GLOBAL $m_option;
	GLOBAL $sub_m_option;

try{

	if($_SESSION["FORMTRANMODE"] == "EDIT"){
		$sql = "INSERT INTO H_menupermission SELECT * FROM menupermission WHERE id=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($_SESSION["LASTSERIAL"]));

		$sql = "UPDATE menupermission SET role=?,m_option=?,sub_m_option=? WHERE id=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($role,$m_option,$sub_m_option,$_SESSION["LASTSERIAL"]));
	}
	else{
		$sql = "INSERT INTO menupermission(`role`, `m_option`, `sub_m_option`)". 
		 " VALUES(?,?,?)";
		$q = $pdo->prepare($sql);
		$q->execute(array($role,$m_option,$sub_m_option));

		$_SESSION["LASTSERIAL"]= $pdo->lastInsertId();
	}

}
catch (PDOException $sql_err) {
	$errmsg = "TechError: insert or update for menumaster:".$sql_err->getMessage().", contact system administrator";
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

	//-- menupermission Info
	$sql = "SELECT 	menupermission.id AS id,
					menupermission.role AS role,
					role_tbl.description AS role_name,
					menupermission.m_option AS m_option,
					main_menu.name_menu AS main_manu_name,
					menupermission.sub_m_option AS sub_m_option,
					sub_menu.name_sub_menu AS sub_menu_name
			FROM menupermission
					INNER JOIN role_tbl ON role_tbl.role = menupermission.role
					INNER JOIN sub_menu ON menupermission.sub_m_option = sub_menu.id_sub_menu
					INNER JOIN main_menu ON main_menu.id_menu = menupermission.m_option
			WHERE menupermission.id = ?
			ORDER BY role_tbl.role,
					 menupermission.m_option,
					 menupermission.sub_m_option";
	$q = $pdo->prepare($sql);
	$q->execute(array($_SESSION["LASTSERIAL"]));
	$extr_data = $q->fetch(PDO::FETCH_ASSOC);

	GLOBAL $id;
	$id = $extr_data["id"];

	GLOBAL $role;
	$role = $extr_data["role"];
	
	GLOBAL $role_name;
	$role_name = $extr_data["role_name"];

	GLOBAL $main_manu_name;
	$main_manu_name = $extr_data["main_manu_name"];
	
	GLOBAL $m_option;
	$m_option = $extr_data["m_option"];
	
	GLOBAL $sub_menu_name;
	$sub_menu_name = $extr_data["sub_menu_name"];

	GLOBAL $sub_m_option;
	$sub_m_option = $extr_data["sub_m_option"];

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
	$role = null;
	if($_POST["role"]){$role = $_POST["role"];}

//   $sql = "SELECT * FROM menupermission WHERE 1=1";
       $sql = "SELECT     menupermission.id AS id,
                    menupermission.role AS role,
                    role_tbl.description AS role_name,
                    menupermission.m_option AS m_option,
                    main_menu.name_menu AS main_manu_name,
                    menupermission.sub_m_option AS sub_m_option,
                    sub_menu.name_sub_menu AS sub_menu_name
            FROM menupermission
                    INNER JOIN role_tbl ON role_tbl.role = menupermission.role
                    INNER JOIN sub_menu ON menupermission.sub_m_option = sub_menu.id_sub_menu
                    INNER JOIN main_menu ON main_menu.id_menu = menupermission.m_option
            WHERE 1 = 1";
 
    
    
  
	if (!empty($role)){
		$sql = $sql." AND role = '".$role."'";
	}
	$m_option = null;
	if($_POST["m_option"]){$m_option = $_POST["m_option"];}
	if (!empty($m_option)){
		$sql = $sql." AND m_option = '".$m_option."'";
	}

//	if ($_SESSION["uprof_ddsp_byco"]=="YES"){$sql .= ' AND role = "'.$_SESSION["uprof_ddsp_byco"].'"';}
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






function getlist_role_code(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
try{
	$sql = 'SELECT * FROM role_tbl';
	if ($_SESSION["uprof_ddl_byco"]=="YES"){$sql .= ' AND sys_co_code = "'.$_SESSION["uprof_ddl_byco"].'"';}
	if ($_SESSION["uprof_ddl_bycobr"]=="YES"){$sql .= ' AND sys_co_br_code = "'.$_SESSION["uprof_ddl_bycobr"].'"';}

	$q = $pdo->prepare($sql);
	$q->execute();
	$extr_vl = $q->fetchAll();

	$_SESSION["role_code_list"] = $extr_vl;

	DBconnectionUtil::disconnect();
}
catch (PDOException $sql_err) {
	$errmsg = "TechError: list value:".$sql_err->getMessage().", contact system administrator";
	error_log($errmsg,0);
	DBconnectionUtil::disconnect();
	return $errmsg;
}
}



function getlist_main_menu(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
try{
	$sql = 'SELECT * FROM main_menu';
	if ($_SESSION["uprof_ddl_byco"]=="YES"){$sql .= ' AND sys_co_code = "'.$_SESSION["uprof_ddl_byco"].'"';}
	if ($_SESSION["uprof_ddl_bycobr"]=="YES"){$sql .= ' AND sys_co_br_code = "'.$_SESSION["uprof_ddl_bycobr"].'"';}

	$q = $pdo->prepare($sql);
	$q->execute();
	$extr_vl = $q->fetchAll();

	$_SESSION["main_menu_list"] = $extr_vl;

	DBconnectionUtil::disconnect();
}
catch (PDOException $sql_err) {
	$errmsg = "TechError: list value:".$sql_err->getMessage().", contact system administrator";
	error_log($errmsg,0);
	DBconnectionUtil::disconnect();
	return $errmsg;
}
}




function getlist_sub_menu(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
try{
	$sql = 'SELECT * FROM sub_menu';
	if ($_SESSION["uprof_ddl_byco"]=="YES"){$sql .= ' AND sys_co_code = "'.$_SESSION["uprof_ddl_byco"].'"';}
	if ($_SESSION["uprof_ddl_bycobr"]=="YES"){$sql .= ' AND sys_co_br_code = "'.$_SESSION["uprof_ddl_bycobr"].'"';}

	$q = $pdo->prepare($sql);
	$q->execute();
	$extr_vl = $q->fetchAll();

	$_SESSION["sub_menu_list"] = $extr_vl;

	DBconnectionUtil::disconnect();
}
catch (PDOException $sql_err) {
	$errmsg = "TechError: list value:".$sql_err->getMessage().", contact system administrator";
	error_log($errmsg,0);
	DBconnectionUtil::disconnect();
	return $errmsg;
}
}



?>
