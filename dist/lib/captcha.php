<?php
	session_start();
	include("phptextClass.php");	
	
	/*create class object*/
	$phptextObj = new phptextClass();	
	/*phptext function to genrate image with text*/
	$phptextObj->phpcaptcha('#4169E1','#fff',120,40,10,25);	
 ?>