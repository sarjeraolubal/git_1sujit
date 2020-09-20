<?php

include("config.php");


if(isset($_REQUEST['id']))
 {
	  $id = $_REQUEST['id'];
	  $sql = "DELETE FROM `invoice` WHERE id = ?";
	  $row = $mysqli->prepare($sql);	
	  $response = $row->execute(array($id)); 
	  header("Location: display_invoice_home.php");
 }
?>

