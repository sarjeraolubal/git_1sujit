<?php
function validatepage()
{
	if (session_status() !== PHP_SESSION_ACTIVE || session_id() == ""){session_start();}
	
	// user session info
	if(!isset($_SESSION['regduser_recid']) || empty($_SESSION['regduser_recid']) || $_SESSION['regduser_recid'] == 0){
		header("Location: pagesessionout.php");
	}
	
	// check session token
	if( $_SESSION['form_token'] != $_SESSION['ssntkn']){header("Location: pagesessionout.php");}

	// check session time

	$timeout = 10; // Set timeout minutes
	$timeout = $timeout * 60; // Converts minutes to seconds
	if (isset($_SESSION['start_time'])) {
		$elapsed_time = time() - $_SESSION['start_time'];
		if ($elapsed_time >= $timeout) {
			header("Location: pagesessionout.php");
		}
	}
	$_SESSION['start_time'] = time();

	$ktcentraldate = date_create()->format('Y-m-d H:i:s');
} 

//----------------------------------------------------------
function get_cnfpasskey()
{
	$digit = rand (1,4);
	$digit2 = rand (5,9);
	$s = substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz", 5)), 0, 5);
	$t = substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz", 3)), 0, 3);
	$q = substr(str_shuffle(str_repeat("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 4)), 0, 4);
	$z = substr(str_shuffle(str_repeat("~!@#$%^&*()_+-={}|[]\:;<>?,./", 1)), 0, 1);

	$retval=$digit.$s.$z.$q.$digit2.$t;

	$retval=remjunkchars($retval);

	return $retval;
}
//----------------------------------------------------------
function remjunkchars($p_datavalue) {
  $p_datavalue = trim($p_datavalue);
  $p_datavalue = stripslashes($p_datavalue);
  $p_datavalue = htmlspecialchars($p_datavalue);
  return $p_datavalue;
}


//----------------------------------------------------------
function allowonlychars($p_datavalue)
{
	if (!preg_match("/^[a-zA-Z ]*$/",$p_datavalue)) {
		return FALSE;
	}
	return TRUE;
}

//----------------------------------------------------------
function onlychars($p_datavalue)
{
	if (!preg_match("/^[a-zA-Z ]*$/",$p_datavalue)) {
		return FALSE;
	}
	return TRUE;
}


//----------------------------------------------------------
function verifymailinput($p_email)
{
	$r_msg ="PASS";

	if (empty($p_email)) {
		$r_msg = 'Email can not be blank';
	}
	
	if ( !filter_var($p_email,FILTER_VALIDATE_EMAIL) ) {
		$r_msg = 'Enter a valid Email Address';
	}

	if (strlen( $p_email) > 30){
		$r_msg = 'Incorrect Length for email, Max should be 30 characters';
	}

	return $r_msg;
}

//----------------------------------------------------------
function verifypassinput($p_pass)
{
	$r_msg = 'PASS';

	if (empty($p_pass)) {
		$r_msg = 'Password can not be blank';
	}

	if (strlen( $p_pass) > 20 || strlen($p_pass) < 8) {
		$r_msg  = 'Incorrect Length for Password, minimum should be 8 characters';
	}
	/*
	if (ctype_alnum($p_pass) != true){
		$r_msg  = "Password must be alpha numeric";
	}
	*/
	if (!preg_match_all('$\S*(?=\S{8,})(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[\d])(?=\S*[\W])\S*$', $p_pass)){
        $r_msg  = "Password must contain 1 lower case, 1 upper case, 1 number, 1 special characters";
	}

	return $r_msg;
}

//----------------------------------------------------------
function postemail($p_mailfor,$p_emailaddresslist){

if($p_mailfor=="ERROR")
{
	$err_msg = $_SESSION['dbtecherr'];
	$errlog_msg = 'program:-'.$_SESSION['techpagnm'].', requested URL:-'.$_SESSION['techurlnm'].
	          ', error message: '.$err_msg;

	$subject =  'Service Request - Error Report';
	$message =  'Dear Tech-Expertise Team, '."\r\n" .
				'Please check error below. Thank you '."\r\n".
				$errlog_msg;
}
elseif($p_mailfor=="CONSUMER_SERVICE_REQUEST")
{
	$subject =  'Service Request =  eWarranty';
	$message =  'Dear '.$cust_name."\r\n" .
				'You have requested for a service of '."\r\n" .
				'Product Name - '.$WD_ProdName."\r\n" .
				'Model - '.$WD_ProdModel."\r\n" .
				'Sr Nbr - '.$WD_SrNbr."\r\n" .
				'Outlet - '.$WD_Outlet."\r\n" .
				'Company - '.$WD_CoName."\r\n" .
				'Thank you';
}
elseif($p_mailfor=="SERVICE_STATUS_UPDATE")
{
	$subject =  'Service Request =  eWarranty';
	$message =  'Dear '.$cust_name."\r\n" .
				'You have updated service status of '."\r\n" .
				'Product Name - '.$WD_ProdName."\r\n" .
				'Model - '.$WD_ProdModel."\r\n" .
				'Sr Nbr - '.$WD_SrNbr."\r\n" .
				'Outlet - '.$WD_Outlet."\r\n" .
				'Company - '.$WD_CoName."\r\n" .
				'Thank you';
}

$headers = 'From: support@ewarrantycard.com' . "\r\n" .
	'Reply-To: support@ewarrantycard.com';

mail($p_emailaddresslist, $subject, $message, $headers);

}

//----------------------------------------------------------
function showerrmsg($p_prgname,$p_errmsg) {

	if(session_id() == ""){session_start();} 
	$_SESSION['techpagnm'] = $p_prgname;
	$_SESSION['dbtecherr'] = $p_errmsg;
	$_SESSION['techurlnm'] = $_SERVER['REQUEST_URI'];


	$errlog_msg = 'program:-'.$p_prgname.',uri-'.$_SERVER['REQUEST_URI'].', error message: '.$p_errmsg;
	error_log($errlog_msg,0);

	header("Location:");
}


?>
