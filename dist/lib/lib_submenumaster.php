<?php

// set form values
function set_formpostvalue(){

	GLOBAL $sub_menu_sequence;
	$sub_menu_sequence = null;
	if($_POST["sub_menu_sequence"]){$sub_menu_sequence = $_POST["sub_menu_sequence"];}

	GLOBAL $name_sub_menu;
	$name_sub_menu = null;
	if($_POST["name_sub_menu"]){$name_sub_menu = $_POST["name_sub_menu"];}
	
	
	GLOBAL $url;
	$url = null;
	if($_POST["url"]){$url = $_POST["url"];}
	
	GLOBAL $title ;
	$title  = null;
	if($_POST["title"]){$title  = $_POST["title"];}
	
	
	GLOBAL $icon ;
	$icon  = null;
	if($_POST["icon"]){$icon  = $_POST["icon"];}
	
	 
	GLOBAL $id_menu;
	$id_menu = null;
	if($_POST["id_menu"]){$id_menu = $_POST["id_menu"];}
	
	GLOBAL $name_menu;
	$name_menu = null;
	if($_POST["name_menu"]){$name_menu = $_POST["name_menu"];}
	
	
	
}

// validate form values
function validate_formvalue(){

	GLOBAL $errmsg;
	GLOBAL $OKtoSaveIntoDB;
	
	
	GLOBAL $id_menu;
	GLOBAL $id_menu_Error;
if (empty($id_menu) || $id_menu==null) {
	$id_menu_Error = "id_menu can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." id_menu can not be blank in tab  Info";
	$OKtoSaveIntoDB = false;
}

    GLOBAL $title ;
	GLOBAL $title_Error;

if (empty($title ) || $title ==null) {
	$title_Error = "Title can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Title can not be blank in tab   Info";
	$OKtoSaveIntoDB = false;
}


	GLOBAL $url;
	GLOBAL $url_Error;

if (empty($url) || $url==null) {
	$url_Error = "URL can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." URL can not be blank in tab   Info";
	$OKtoSaveIntoDB = false;
}


	GLOBAL $icon;
	GLOBAL $icon_Error;

if (empty($icon) || $icon==null) {
	$icon_Error = "icon can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." icon can not be blank in tab   Info";
	$OKtoSaveIntoDB = false;
}

	
	GLOBAL $sub_menu_sequence;
	GLOBAL $sub_menu_sequence_Error;
if (empty($sub_menu_sequence) || $sub_menu_sequence==null) {
	$sub_menu_sequence_Error = "SUB Menu sequence can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." sub menu sequence can not be blank in tab Info";
	$OKtoSaveIntoDB = false;
}






	GLOBAL $name_sub_menu;
	GLOBAL $name_sub_menu_Error;
if (empty($name_sub_menu) || $name_sub_menu==null) {
	$name_sub_menu_Error = "sub_menu Name can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Submenu Name can not be blank in tab sub_menu Info";
	$OKtoSaveIntoDB = false;
}
}

//-- insert or update db table
function submenumaster_insupddb(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
GLOBAL $errmsg;
//-- For sub_menu Info
	GLOBAL $id_sub_menu;
    GLOBAL $name_sub_menu;	
	GLOBAL $id_menu;
	GLOBAL $sub_menu_sequence;
	GLOBAL $name_menu;
	GLOBAL $url;
    GLOBAL $title;
    GLOBAL $icon;
   
	

try{

	if($_SESSION["FORMTRANMODE"] == "EDIT"){
		$sql = "INSERT INTO H_sub_menu SELECT * FROM sub_menu WHERE id_sub_menu=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($_SESSION["LASTSERIAL"]));

		$sql = "UPDATE sub_menu SET  name_sub_menu=?,id_menu=?,
		sub_menu_sequence=?,url=?,title=?,icon=? WHERE id_sub_menu=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($name_sub_menu,$id_menu,$sub_menu_sequence,$url,$title,$icon,$_SESSION["LASTSERIAL"]));
	}
	else{
		$sql = "INSERT INTO sub_menu(`name_sub_menu`,`id_menu`,`sub_menu_sequence`, `url`, `title`,`icon`)". 
		 " VALUES(?,?,?,?,?,?)";
		$q = $pdo->prepare($sql);
		$q->execute(array($name_sub_menu,$id_menu,$sub_menu_sequence,$url,$title,$icon));

		$_SESSION["LASTSERIAL"]= $pdo->lastInsertId();
	}

}
catch (PDOException $sql_err) {
	$errmsg = "TechError: insert or update for submenumaster:".$sql_err->getMessage().", contact system administrator";
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

	//-- sub_menu Info
	$sql = "SELECT sub_menu.id_sub_menu AS id_sub_menu,
                   sub_menu.name_sub_menu AS name_sub_menu,
                   sub_menu.id_menu AS id_menu,
				   main_menu.name_menu AS name_menu,
				   sub_menu.sub_menu_sequence AS sub_menu_sequence,
				   sub_menu.url AS url,
				   sub_menu.title AS title,
				   sub_menu.icon AS icon
			FROM main_menu
					INNER JOIN sub_menu ON main_menu.id_menu = sub_menu.id_menu
			WHERE sub_menu.id_sub_menu = ?";
	$q = $pdo->prepare($sql);
	$q->execute(array($_SESSION["LASTSERIAL"]));
	$extr_data = $q->fetch(PDO::FETCH_ASSOC);

	GLOBAL $id_sub_menu;
	$id_sub_menu = $extr_data["id_sub_menu"];

	GLOBAL $sub_menu_sequence;
	$sub_menu_sequence = $extr_data["sub_menu_sequence"];
	
	GLOBAL $name_menu;
	$name_menu = $extr_data["name_menu"];
	
	GLOBAL $id_menu;
	$id_menu = $extr_data["id_menu"];
	
	GLOBAL $name_sub_menu;
	$name_sub_menu = $extr_data["name_sub_menu"];
	
	GLOBAL $url;
	$url = $extr_data["url"];
	
	GLOBAL $title;
	$title = $extr_data["title"];

	GLOBAL $icon;
	$icon = $extr_data["icon"];

	DBconnectionUtil::disconnect();
}
catch (PDOException $sql_err) {
	$errmsg = "TechError: data extract:".$sql_err->getMessage().", contact system administrator";
	error_log($errmsg,0);
	DBconnectionUtil::disconnect();
	return $errmsg;
}
}

// get data for main menu


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
























//-- data list for search
function search_datalist(){

$extr_datalist = array();

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
try{
	$id_sub_menu = null;
	if($_POST["id_sub_menu"]){$id_sub_menu = $_POST["id_sub_menu"];}

	$sql = "SELECT * FROM sub_menu WHERE 1=1";
	if (!empty($id_sub_menu)){
		$sql = $sql." AND id_sub_menu = '".$id_sub_menu."'";
	}
	$id_menu = null;
	if($_POST["id_menu"]){$id_menu = $_POST["id_menu"];}
	if (!empty($id_menu)){
		$sql = $sql." AND id_menu = '".$id_menu."'";
	}

	if ($_SESSION["uprof_ddsp_byco"]=="YES"){$sql .= ' AND id_sub_menu = "'.$_SESSION["uprof_ddsp_byco"].'"';}
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
