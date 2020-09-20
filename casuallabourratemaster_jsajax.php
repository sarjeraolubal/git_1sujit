<?php

$datalistfor = $_POST["datalistfor"];

$HTMLvalue = "";
require "dist/lib/dbconnection.php";
$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

try{

if($datalistfor == "clrm_code"){
		$clrm_code = $_POST["jsvar_clrm_code"];
		$sql ="SELECT count() dup_recs  FROM lp_labour_rm WHERE   clrm_code = ?";

		$q = $pdo->prepare($sql);
		$q->execute(array( $clrm_code));

		$HTMLvalue ="";

		$dup_db_value = $q->fetch(PDO::FETCH_ASSOC);
		$HTMLvalue = $dup_db_value["dup_recs"];

		echo $HTMLvalue;
	}

	DBconnectionUtil::disconnect();
}
catch (PDOException $sql_err) {
	$errmsg = "TechError: dropdown change:".$sql_err->getMessage().", contact system administrator";
	error_log($errmsg,0);
	DBconnectionUtil::disconnect();
}
?>
