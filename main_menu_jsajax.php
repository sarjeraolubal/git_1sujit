<?php

$datalistfor = $_POST["datalistfor"];

$HTMLvalue = "";
require "dist/lib/dbconnection.php";
$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

try{

if($datalistfor == "id_menu"){
		$id_menu = $_POST["jsvar_id_menu"];
		$sql ="select `id_menu` from `main_menu` group by `id_menu` having count(*)>=2";

		$q = $pdo->prepare($sql);
		$q->execute(array( $id_menu));

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
