<?php

$datalistfor = $_POST["datalistfor"];

$HTMLvalue = "";
require "dist/lib/dbconnection.php";
$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

try{

if($datalistfor == "cm_code"){
		$cm_code = $_POST["jsvar_cm_code"];
		$sql ="SELECT count() dup_recs  FROM lp_commo_m WHERE   cm_code = ?";

		$q = $pdo->prepare($sql);
		$q->execute(array( $cm_code));

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
