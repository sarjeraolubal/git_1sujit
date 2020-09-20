<?php

$datalistfor = $_POST["datalistfor"];

$HTMLvalue = "";
require "dist/lib/dbconnection.php";
$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

try{

if($datalistfor == "am_slip_nbr"){
		$am_slip_nbr = $_POST["jsvar_am_slip_nbr"];
		$am_advdate = $_POST["jsvar_am_advdate"];
		$sql ="SELECT count() dup_recs  FROM lp_adv_m WHERE   am_slip_nbr = ? AND am_advdate = ?";

		$q = $pdo->prepare($sql);
		$q->execute(array( $am_slip_nbr, $am_advdate));

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
