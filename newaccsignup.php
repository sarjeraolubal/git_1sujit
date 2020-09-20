<?php 

$error_message = '';
require 'dist/lib/commonfunc.php';
require 'dist/lib/dbconnection.php';

if ( !empty($_POST)) 
{
	$regduser_pwd = null;

	// keep track post values
	$regduser_emailaddr = $_POST['regduser_emailaddr'];
	$regduser_pwd = $_POST['regduser_pwd'];

	$regduser_emailaddr = remjunkchars($_POST['regduser_emailaddr']);
	$regduser_pwd = remjunkchars($_POST['regduser_pwd']);

	$valid = true;
	if (empty($regduser_pwd)) {
		$error_message = 'Enter Password';
		$valid = false;
	}

	if (empty($regduser_emailaddr)) {
		$error_message = 'Enter Email Address';
		$valid = false;
	}


	$email_err = verifymailinput($regduser_emailaddr);

	if ($email_err <> 'PASS')
	{
		$valid = false;
		$error_message = $email_err;
	}
	
	$pass_err = verifypassinput($regduser_pwd);

	if ($pass_err <> 'PASS')
	{
		$valid = false;
		$error_message= $pass_err;
	}

	if ($valid) 
	{
		$pdo = DBconnectionUtil::connect();
		$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		$sql = "SELECT count(*) dup_recs FROM smestar_up where up_uid=?";

		try{
			$q = $pdo->prepare($sql);
			$q->execute(array($regduser_emailaddr));
			$au_data = $q->fetch(PDO::FETCH_ASSOC);

			$dup_recs = $au_data['dup_recs'];

		   if ($dup_recs <> 0){$error_message = "Email Id already exists";$valid=false;}
		}
		catch (PDOException $sql_err) {
			$error_message = 'TechError: '.$sql_err->getMessage().', contact system administrator';
			$valid=false;
		}
		DBconnectionUtil::disconnect();
	}

	if ($valid) {

		if(session_id() == ""){session_start();} 

		$_SESSION['uprof_login']= $regduser_emailaddr;
		$_SESSION['uprof_accesskey'] = $regduser_pwd;
		
		 unset($_SESSION['encoded_captcha']);
		
		header("Location:newaccsignup2.php");
	} 
}

include "dist/inc/nonloginheader.php";
?>

<div class="container" style="min-height:500px;">
<div id="loginbox" style="margin-top:50px;" class="col-md-7 col-md-offset-2 col-sm-offset-2">                    
<div class="panel panel-info" >
	<div class="panel-heading">
		<div class="panel-title">Register new account&nbsp&nbsp|&nbsp&nbsp;<strong>Credentials</strong>&nbsp;<i class="fa fa-arrow-circle-right"></i>&nbsp;Profile Info</div>
	</div>     

<div style="padding-top:30px" class="panel-body" >

<form id="loginform" class="form-horizontal" role="form" action="newaccsignup.php" method="post">
<?php if (!empty($error_message)){echo '<p style="color:red">'.$error_message.'</p>';} ?>

	<div class="col-md-6 col-sm-offset-1">
		<div style="margin-bottom: 25px" class="input-group">
			<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
			<input id="regduser_emailaddr" type="text" class="form-control" name="regduser_emailaddr" value="" placeholder="Enter email address">                                     
		</div>
		
		<div style="margin-bottom: 25px" class="input-group">
			<span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
			<input id="regduser_pwd" type="password" class="form-control" name="regduser_pwd" placeholder="Enter Password">
		</div>
		
	</div>
<div style="margin-top:10px" class="form-group">
	<div class="col-sm-12 controls" style="text-align:right">
	  <button id="btn-login" href="#" class="btn btn-success">Next&nbsp;<i class="fa fa-arrow-circle-right"></i></button>
	</div>
</div>

</form>     


</div>  
</div>
</div> 	  
</div> <!-- /container -->

<?php include "dist/inc/footercontent.php";?>