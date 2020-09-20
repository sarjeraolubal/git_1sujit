<?php 

if (!date_default_timezone_get("date.timezone"))
{
	date_default_timezone_set("Asia/Kolkata"); // put here default timezone
}

$errfilenm = 'errorlog_'.date('dmY').'.log';

error_reporting(E_ALL); 

$error_message = '';
require 'dist/lib/commonfunc.php';



include "dist/inc/nonloginheader.php";
include "landpage.php";
include "dist/inc/footercontent.php";

?>