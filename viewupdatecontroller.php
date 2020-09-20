<?php
  ob_start();

/*-------------------------------------------------------
Project: Banking
Company: Clifford Software
Auto generated code using PHP RAD tool by Vaikunth Raul 
-------------------------------------------------------*/
require "dist/lib/commonfunc.php";
validatepage();

require "dist/lib/dbconnection.php";
require "dist/lib/dataextrfunc.php";

$formnm = $_REQUEST['formnm'];
$keyvalue = $_REQUEST['keyvalue'];
$formrdfor = $_REQUEST['formrdfor'];

$lib_prog = "dist/lib/lib_".$formnm.".php";
require $lib_prog;

$_SESSION["LASTSERIAL"] = $keyvalue;

$_SESSION["FORMTRANMODE"] = $formrdfor;

$redirect_url = "location:".$formnm.".php";
header($redirect_url); exit;

 ob_end_flush();

?>