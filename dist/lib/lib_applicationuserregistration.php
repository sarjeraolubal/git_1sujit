<?php

// set form values
function set_formpostvalue(){

	GLOBAL $sys_co_code;
	$sys_co_code = null;
	if($_POST["sys_co_code"]){$sys_co_code = $_POST["sys_co_code"];}

	GLOBAL $up_ak;
	$_SESSION["post_up"]=null;
	//GLOBAL $post_up;
	//$post_up = null;
	$up_ak = null;
    if($_POST["up_ak"]){$up_ak = $_POST["up_ak"];
                        $_SESSION["post_up"] = $up_ak;  
                       }
	
  /*  $encr_pass = 
              // $password; 
               sha1($up_ak);
          error_log($encr_pass );
    $up_ak  = $encr_pass;
*/
	GLOBAL $up_regdate;
	$up_regdate = null;
	GLOBAL $dsp_up_regdate;
	if($_POST["dsp_up_regdate"]){$up_regdate = date('Y-m-d',strtotime($_POST["dsp_up_regdate"]));}

	GLOBAL $up_radt;
	$up_radt = null;
	GLOBAL $dsp_up_radt;
	if($_POST["dsp_up_radt"]){$up_radt = date('Y-m-d',strtotime($_POST["dsp_up_radt"]));}

	GLOBAL $up_rudt;
	$up_rudt = null;
	GLOBAL $dsp_up_rudt;
	if($_POST["dsp_up_rudt"]){$up_rudt = date('Y-m-d',strtotime($_POST["dsp_up_rudt"]));}

	GLOBAL $up_rauid;
	$up_rauid = null;
	if($_POST["up_rauid"]){$up_rauid = $_POST["up_rauid"];}

	GLOBAL $up_mid;
	$up_mid = null;
	if($_POST["up_mid"]){$up_mid = $_POST["up_mid"];}

	GLOBAL $up_status;
	$up_status = null;
	if($_POST["up_status"]){$up_status = $_POST["up_status"];}

	GLOBAL $up_ruuid;
	$up_ruuid = null;
	if($_POST["up_ruuid"]){$up_ruuid = $_POST["up_ruuid"];}

	GLOBAL $up_lastaccessdate;
	$up_lastaccessdate = null;
	GLOBAL $dsp_up_lastaccessdate;
	if($_POST["dsp_up_lastaccessdate"]){$up_lastaccessdate = date('Y-m-d',strtotime($_POST["dsp_up_lastaccessdate"]));}

	GLOBAL $up_uid;
	$up_uid = null;
	if($_POST["up_uid"]){$up_uid = $_POST["up_uid"];}

	GLOBAL $up_lockstatus;
	$up_lockstatus = null;
	if($_POST["up_lockstatus"]){$up_lockstatus = $_POST["up_lockstatus"];}

	GLOBAL $up_expdate;
	GLOBAL $dsp_up_expdate;
	if($_POST["dsp_up_expdate"]){$up_expdate = date('Y-m-d',strtotime($_POST["dsp_up_expdate"]));}

	GLOBAL $up_eid;
	$up_eid = null;
	if($_POST["up_eid"]){$up_eid = $_POST["up_eid"];}
	
	GLOBAL $role;
	$role = null;
	if($_POST["role"]){$role = $_POST["role"];}
	
}

// validate form values
function validate_formvalue(){

	GLOBAL $errmsg;
	GLOBAL $OKtoSaveIntoDB;
	GLOBAL $up_uid;
	GLOBAL $up_uid_Error;
if (empty($up_uid) || $up_uid==null) {
	$up_uid_Error = "User Id can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." User Id can not be blank in tab User Registration";
	$OKtoSaveIntoDB = false;
}

	GLOBAL $up_eid;
	GLOBAL $up_eid_Error;
if (empty($up_eid) || $up_eid==null) {
	$up_eid_Error = "Employee Id can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Employee Id can not be blank in tab User Registration";
	$OKtoSaveIntoDB = false;
}
    GLOBAL $role;
	GLOBAL $role_Error;
if (empty($role) || $role==null) {
	$role_Error = "Role can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Role can not be blank in tab User Registration";
	$OKtoSaveIntoDB = false;
}

	GLOBAL $up_ak;
	GLOBAL $up_ak_Error;
if (empty($up_ak) || $up_ak==null) {
	$up_ak_Error = "Password can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Password can not be blank in tab User Registration";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $up_ak;
    GLOBAL $pre_up;
    GLOBAL $post_up;
	GLOBAL $up_ak_Error;
    $post_up = $_SESSION["post_up"];
    $pre_up  = $_SESSION["pre_up"];
if (!empty($up_ak)){
	if  ($post_up  = $pre_up) {$pass_validate = "PASS";}
	 else {
     $pass_validate = verifypassinput($up_ak);}
	if ($pass_validate <> "PASS"){
		$up_ak_Error = "Password invalid";
		if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg."  " . $up_ak ." is not valid password ";
		$OKtoSaveIntoDB = false;
	}
}
	GLOBAL $up_lockstatus;
	GLOBAL $up_lockstatus_Error;
if (empty($up_lockstatus) || $up_lockstatus==null) {
	$up_lockstatus_Error = "Lock Status can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Lock Status can not be blank in tab User Registration";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $up_status;
	GLOBAL $up_status_Error;
if (empty($up_status) || $up_status==null) {
	$up_status_Error = "Status can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Status can not be blank in tab User Registration";
	$OKtoSaveIntoDB = false;
}
	GLOBAL $up_regdate;
	GLOBAL $up_regdate_Error;
if (empty($up_regdate) || $up_regdate==null) {
	$up_regdate_Error = "Registration Date can not be blank";
	if (!empty($errmsg)){$errmsg = $errmsg.", ";} $errmsg = $errmsg." Registration Date can not be blank in tab User Registration";
	$OKtoSaveIntoDB = false;
}
}

//-- insert or update db table
function applicationuserregistration_insupddb(){

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
GLOBAL $errmsg;
//-- For User Registration
	GLOBAL $up_tabreckey;
	GLOBAL $sys_co_code;
	GLOBAL $up_uid;
	GLOBAL $up_ak;
    GLOBAL $pre_up;
    GLOBAL $post_up; 
    $post_up = $_SESSION["post_up"];
    $pre_up  = $_SESSION["pre_up"];
    
    
 if (empty($up_ak) || $up_ak==null) {} 
     
      else
       {
          if ($post_up == $pre_up ) {}
          else 
                
 {	          $encr_pass =   sha1($up_ak);        // $password; 
         error_log($encr_pass );
    $up_ak  = $encr_pass;
 }	}
	$_SESSION["post_up"] = null;
    $_SESSION["pre_up"] = null;
	GLOBAL $up_regdate;
	GLOBAL $up_lockstatus;
	GLOBAL $up_status;
	GLOBAL $up_lastaccessdate;
	GLOBAL $up_expdate;
	GLOBAL $up_mid;
	GLOBAL $up_eid;
	GLOBAL $role;
	GLOBAL $up_radt;
	GLOBAL $up_rudt;
	GLOBAL $up_rauid;
	GLOBAL $up_ruuid;

try{

	if($_SESSION["FORMTRANMODE"] == "EDIT"){
		$sql = "INSERT INTO H_smestar_up SELECT * FROM smestar_up WHERE Up_TabRecKey=?";
		$q = $pdo->prepare($sql);
		$q->execute(array(($_SESSION["LASTSERIAL"])));

		$sql = "UPDATE smestar_up SET sys_co_code=?,up_uid=?,up_ak=?,up_regdate=?,up_lockstatus=?,up_status=?,up_lastaccessdate=?,up_expdate=?,up_mid=?,up_eid=?,role=?,up_radt=?,up_rudt=?,up_rauid=?,up_ruuid=? WHERE Up_TabRecKey=?";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$up_uid,$up_ak,$up_regdate,$up_lockstatus,$up_status,$up_lastaccessdate,$up_expdate,$up_mid,$up_eid,$role,$up_radt,$up_rudt,$up_rauid,$up_ruuid,$_SESSION["LASTSERIAL"]));
	}
	else{
		$sql = "INSERT INTO smestar_up(sys_co_code,up_uid,up_ak,up_regdate,up_lockstatus,up_status,up_lastaccessdate,up_expdate,up_mid,up_eid,role,up_radt,up_rudt,up_rauid,up_ruuid)". 
		 " VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		$q = $pdo->prepare($sql);
		$q->execute(array($sys_co_code,$up_uid,$up_ak,$up_regdate,$up_lockstatus,$up_status,$up_lastaccessdate,$up_expdate,$up_mid,$up_eid,$role,$up_radt,$up_rudt,$up_rauid,$up_ruuid));

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

	//-- User Registration
	$sql = "SELECT * FROM smestar_up WHERE up_tabreckey=?";
	$q = $pdo->prepare($sql);
	$q->execute(array($_SESSION["LASTSERIAL"]));
	$extr_data = $q->fetch(PDO::FETCH_ASSOC);

	GLOBAL $up_tabreckey;
	$up_tabreckey = $extr_data["up_tabreckey"];

	GLOBAL $sys_co_code;
	$sys_co_code = $extr_data["sys_co_code"];

	GLOBAL $up_uid;
	$up_uid = $extr_data["up_uid"];

	GLOBAL $up_ak;
	GLOBAL $pre_up;
    $pre_up = null;
    $_SESSION["pre_up"] = null;
	$up_ak = null;
	$up_ak = $extr_data["up_ak"];
    $_SESSION["pre_up"]  = $extr_data["up_ak"];

	GLOBAL $up_regdate;
	$up_regdate = $extr_data["up_regdate"];

	GLOBAL $up_lockstatus;
	$up_lockstatus = $extr_data["up_lockstatus"];

	GLOBAL $up_status;
	$up_status = $extr_data["up_status"];

	GLOBAL $up_lastaccessdate;
	$up_lastaccessdate = $extr_data["up_lastaccessdate"];

	GLOBAL $up_expdate;
	$up_expdate = $extr_data["up_expdate"];

	GLOBAL $up_mid;
	$up_mid = $extr_data["up_mid"];

	GLOBAL $up_eid;
	$up_eid = $extr_data["up_eid"];
	
	GLOBAL $role;
	$role = $extr_data["role"];


	GLOBAL $up_radt;
	$up_radt = $extr_data["up_radt"];

	GLOBAL $up_rudt;
	$up_rudt = $extr_data["up_rudt"];

	GLOBAL $up_rauid;
	$up_rauid = $extr_data["up_rauid"];

	GLOBAL $up_ruuid;
	$up_ruuid = $extr_data["up_ruuid"];

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
	$up_uid = null;
	if($_POST["up_uid"]){$up_uid = $_POST["up_uid"];}

	$sql = "SELECT * FROM smestar_up WHERE 1=1";
	if (!empty($up_uid)){
		$sql = $sql." AND up_uid = '".$up_uid."'";
	}
	$up_lockstatus = null;
	if($_POST["up_lockstatus"]){$up_lockstatus = $_POST["up_lockstatus"];}
	if (!empty($up_lockstatus)){
		$sql = $sql." AND up_lockstatus = '".$up_lockstatus."'";
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
