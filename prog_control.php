<?php 
require "dist/lib/commonfunc.php";
validatepage();
$p_pg_nm = remjunkchars($_REQUEST['p_nm']);
$error_message = '';
if ( !empty($p_pg_nm)) {
	
		$_SESSION["FORMTRANMODE"] = "NEW";
		$redir_pg = 'location:'.$p_pg_nm.'.php';
		$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=".$p_pg_nm;

		header($redir_pg);
}
else
{    
    
    
	header('location:signout.php');
}