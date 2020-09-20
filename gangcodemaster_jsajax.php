<?php

$datalistfor = $_POST["datalistfor"];

$HTMLvalue = "";
require "dist/lib/dbconnection.php";
$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

try{

if($datalistfor == "gm_bankaccnbr"){
		$gm_bankaccnbr = $_POST["jsvar_gm_bankaccnbr"];
		$sql ="SELECT count(gm_bankaccnbr) dup_recs  FROM lp_gang_m WHERE   gm_bankaccnbr = ?";

		$q = $pdo->prepare($sql);
		$q->execute(array( $gm_bankaccnbr));

		$HTMLvalue ="";

		$dup_db_value = $q->fetch(PDO::FETCH_ASSOC);
		$HTMLvalue = $dup_db_value["dup_recs"];

		echo $HTMLvalue;
	}

if($datalistfor == "gm_badge_no"){
		$gm_badge_no = $_POST["jsvar_gm_badge_no"];
		$sql ="SELECT count() dup_recs  FROM lp_gang_m WHERE   gm_badge_no = ?";

		$q = $pdo->prepare($sql);
		$q->execute(array( $gm_badge_no));

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
