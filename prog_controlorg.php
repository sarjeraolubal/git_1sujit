<?php 
require "dist/lib/commonfunc.php";
validatepage();
$p_pg_nm = remjunkchars($_REQUEST['p_nm']);
$error_message = '';
if ( !empty($p_pg_nm)) {
	require 'dist/lib/dbconnection.php';

	$pdo = DBconnectionUtil::connect();
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	$valid = true;
	$db_data = null;

	try{
		$sql = "select * from prog_file where pg_nm=?";

		$q = $pdo->prepare($sql);
		$q->execute(array($p_pg_nm));
		$db_data = $q->fetch(PDO::FETCH_ASSOC);
	}
	catch (PDOException $sql_err) {
		$error_message = 'Oops!! some technical error, please try after sometime!!';
		error_log($sql_err->getMessage());	
		$valid = false;
	}
	DBconnectionUtil::disconnect();
	if (!empty($db_data["prg_file"])){
		$_SESSION["FORMTRANMODE"] = "NEW";
		$redir_pg = 'location:'.$db_data["prg_file"].'.php';
		$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=".$db_data["pg_nm"];

		header($redir_pg);
	}else{header('location:signout.php');}
}