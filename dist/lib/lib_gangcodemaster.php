<?php

ob_start();


// set form values

function set_formpostvalue() {



	GLOBAL $sys_co_code;

	$sys_co_code = null;

	 // if($_POST["sys_co_code"]){$sys_co_code = $_POST["sys_co_code"];}



	GLOBAL $gm_email;

	$gm_email = null;

	if($_POST["gm_email"]){$gm_email = $_POST["gm_email"];}



	GLOBAL $gm_bankaccnbr;

	$gm_bankaccnbr = null;

	if($_POST["gm_bankaccnbr"]){$gm_bankaccnbr = $_POST["gm_bankaccnbr"];}



	GLOBAL $gm_name;

	$gm_name = null;

	if($_POST["gm_name"]){$gm_name = strtoupper($_POST["gm_name"]);}



	GLOBAL $gm_gang_code;

	$gm_gang_code = null;

	if($_POST["gm_gang_code"]){$gm_gang_code = $_POST["gm_gang_code"];}



	GLOBAL $gm_mphonenbr;

	$gm_mphonenbr = null;

	if($_POST["gm_mphonenbr"]){$gm_mphonenbr = $_POST["gm_mphonenbr"];}



	GLOBAL $gm_badge_no;

	$gm_badge_no = null;

	if($_POST["gm_badge_no"]){$gm_badge_no = $_POST["gm_badge_no"];}



	GLOBAL $gm_memcatg;

	$gm_memcatg = null;

	if($_POST["gm_memcatg"]){$gm_memcatg = $_POST["gm_memcatg"];}

}



// validate form values

function validate_formvalue(){



	GLOBAL $errmsg;

	GLOBAL $OKtoSaveIntoDB;

	GLOBAL $gm_badge_no;

	GLOBAL $gm_badge_no_Error;

if (empty($gm_badge_no) || $gm_badge_no==null) {

	$gm_badge_no_Error = "Badge Number can not be blank";

	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Badge Number can not be blank in tab Gang Code";

	$OKtoSaveIntoDB = false;

}

	GLOBAL $gm_email;

	GLOBAL $gm_email_Error;

if (!empty($gm_email)){

	if (!allowonlychars($gm_email)){

		$gm_email_Error = "$Email Address has invalid value";

		if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Email Address has invalid value, allowed characters only ";

		$OKtoSaveIntoDB = false;

	}

}

	GLOBAL $gm_gang_code;

	GLOBAL $gm_gang_code_Error;

if (empty($gm_gang_code) || $gm_gang_code==null) {

	$gm_gang_code_Error = "Gang Code can not be blank";

	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Gang Code can not be blank in tab Gang Code";

	$OKtoSaveIntoDB = false;

}

	GLOBAL $gm_memcatg;

	GLOBAL $gm_memcatg_Error;

if (empty($gm_memcatg) || $gm_memcatg==null) {

	$gm_memcatg_Error = "Member Category can not be blank";

	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Member Category can not be blank in tab Gang Code";

	$OKtoSaveIntoDB = false;

}

	GLOBAL $gm_bankaccnbr;

	GLOBAL $gm_bankaccnbr_Error;

if (empty($gm_bankaccnbr) || $gm_bankaccnbr==null) {

	$gm_bankaccnbr_Error = "Bank Account Number can not be blank";

	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Bank Account Number can not be blank in tab Gang Code";

	$OKtoSaveIntoDB = false;

}

	GLOBAL $gm_name;

	GLOBAL $gm_name_Error;

if (empty($gm_name) || $gm_name==null) {

	$gm_name_Error = "Member Name can not be blank";

	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Member Name can not be blank in tab Gang Code";

	$OKtoSaveIntoDB = false;

}

	GLOBAL $gm_name;

	GLOBAL $gm_name_Error;

if (!empty($gm_name)){

	if (!allowonlychars($gm_name)){

		$gm_name_Error = "$Member Name has invalid value";

		if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Member Name has invalid value, allowed characters only ";

		$OKtoSaveIntoDB = false;

	}

}

	GLOBAL $gm_mphonenbr;

	GLOBAL $gm_mphonenbr_Error;

if (!empty($gm_mphonenbr)){

	if (!allowonlychars($gm_mphonenbr)){

		$gm_mphonenbr_Error = "$Mobile Phone Number has invalid value";

		if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Mobile Phone Number has invalid value, allowed characters only ";

		$OKtoSaveIntoDB = false;

	}

}

}



//-- insert or update db table

function gangcodemaster_insupddb(){



$pdo = DBconnectionUtil::connect();

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

GLOBAL $errmsg;

//-- For Gang Code

	GLOBAL $gm_tabreckey;

	GLOBAL $sys_co_code;

	GLOBAL $gm_gang_code;

	GLOBAL $gm_badge_no;

	GLOBAL $gm_memcatg;

	GLOBAL $gm_name;

	GLOBAL $gm_bankaccnbr;

	GLOBAL $gm_email;

	GLOBAL $gm_mphonenbr;



try{



	if($_SESSION["FORMTRANMODE"] == "EDIT"){

		$sql = "INSERT INTO H_lp_gang_m SELECT * FROM lp_gang_m WHERE Gm_TabRecKey=?";

		$q = $pdo->prepare($sql);

		$q->execute(array($_SESSION["LASTSERIAL"]));



		$sql = "UPDATE lp_gang_m SET gm_gang_code=?,gm_badge_no=?,gm_memcatg=?,gm_name=?,gm_bankaccnbr=?,gm_email=?,gm_mphonenbr=? WHERE Gm_TabRecKey=?";

		$q = $pdo->prepare($sql);

		$q->execute(array($gm_gang_code,$gm_badge_no,$gm_memcatg,$gm_name,$gm_bankaccnbr,$gm_email,$gm_mphonenbr,$_SESSION["LASTSERIAL"]));

	}

	else{

		$sql = "INSERT INTO lp_gang_m(gm_gang_code,gm_badge_no,gm_memcatg,gm_name,gm_bankaccnbr,gm_email,gm_mphonenbr)". 

		 " VALUES(?,?,?,?,?,?,?)";

		$q = $pdo->prepare($sql);

		$q->execute(array($gm_gang_code,$gm_badge_no,$gm_memcatg,$gm_name,$gm_bankaccnbr,$gm_email,$gm_mphonenbr));



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



	//-- Gang Code

	$sql = "SELECT * FROM lp_gang_m WHERE gm_tabreckey=?";

	$q = $pdo->prepare($sql);

	$q->execute(array($_SESSION["LASTSERIAL"]));

	$extr_data = $q->fetch(PDO::FETCH_ASSOC);



	GLOBAL $gm_tabreckey;

	$gm_tabreckey = $extr_data["gm_tabreckey"];



	//  GLOBAL $sys_co_code;

	GLOBAL $gm_gang_code;

	$gm_gang_code = $extr_data["gm_gang_code"];



	GLOBAL $gm_badge_no;

	$gm_badge_no = $extr_data["gm_badge_no"];



	GLOBAL $gm_memcatg;

	$gm_memcatg = $extr_data["gm_memcatg"];



	GLOBAL $gm_name;

	$gm_name = $extr_data["gm_name"];



	GLOBAL $gm_bankaccnbr;

	$gm_bankaccnbr = $extr_data["gm_bankaccnbr"];



	GLOBAL $gm_email;

	$gm_email = $extr_data["gm_email"];



	GLOBAL $gm_mphonenbr;

	$gm_mphonenbr = $extr_data["gm_mphonenbr"];



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

	$gm_gang_code = null;

	if($_POST["gm_gang_code"]){$gm_gang_code = $_POST["gm_gang_code"];}



	$sql = "SELECT * FROM lp_gang_m WHERE 1=1";

	if (!empty($gm_gang_code)){

		$sql = $sql." AND gm_gang_code = '".$gm_gang_code."'";

	}

	$gm_badge_no = null;

	if($_POST["gm_badge_no"]){$gm_badge_no = $_POST["gm_badge_no"];}

	if (!empty($gm_badge_no)){

		$sql = $sql." AND gm_badge_no = '".$gm_badge_no."'";

	}

	$gm_memcatg = null;

	if($_POST["gm_memcatg"]){$gm_memcatg = $_POST["gm_memcatg"];}

	if (!empty($gm_memcatg)){

		$sql = $sql." AND gm_memcatg = '".$gm_memcatg."'";

	}

	$gm_name = null;

	if($_POST["gm_name"]){$gm_name = $_POST["gm_name"];}

	if (!empty($gm_name)){

		$sql = $sql." AND gm_name LIKE '%".$gm_name."%'";

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

 ob_end_flush();

?>