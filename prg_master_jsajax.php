<?php

$datalistfor = $_POST["datalistfor"];

$HTMLvalue = "";
require "dist/lib/dbconnection.php";
$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

try{

if($datalistfor == "pg_nm"){
		$pg_nm = $_POST["jsvar_pg_nm"];
		$sql ="SELECT count(pg_nm) dup_recs  FROM pg_nm_tbl WHERE   pg_nm = ?";

		$q = $pdo->prepare($sql);
		$q->execute(array( $pg_nm));

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
