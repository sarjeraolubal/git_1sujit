<?php 

if (!date_default_timezone_get("date.timezone"))
{
	date_default_timezone_set("Asia/Kolkata"); // put here default timezone
}

$errfilenm = 'errorlog_'.date('dmY').'.log';

error_reporting(E_ALL); 

$error_message = '';
require 'dist/lib/commonfunc.php';

if ( !empty($_POST)) {
	require 'dist/lib/dbconnection.php';

	$username = trim($_POST['username']);
	$password = trim($_POST['password']);

	if (empty($username) || empty($password)){
		$error_message = 'User id or password can not be blank';
	}
	else // validate in db
	{
		$pdo = DBconnectionUtil::connect();
		$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		$valid = true;

		try{
			$encr_pass = $password; //sha1( $password );
			//error_log($encr_pass );

			$sql = "select * from smestar_up where up_uid=? and up_ak=?";

			$q = $pdo->prepare($sql);
			$q->execute(array($username,$encr_pass));
			$db_data = $q->fetch(PDO::FETCH_ASSOC);

			if (empty($db_data['sys_co_code'])){
				$error_message = 'Invalid user/password or not registered or not active!!';	
				$valid = false;
			}
			else{
				/*
				$sql = "UPDATE regduserm set regduser_lastsignin = ?, regduser_isonline=true where regduser_recid=?";
				$v_date = date_create()->format('Y-m-d H:i:s');

				$q = $pdo->prepare($sql);
				$q->execute(array($v_date,$db_data['regduser_recid']));
				*/
				session_start();
				
				$_SESSION['username']   = 'LUBAL';
				$_SESSION['usermobile'] = '111';
				$_SESSION['useremail']  = 'abcd@abcd.com';
				$_SESSION['regduser_recid']     = $db_data['up_tabreckey'];
				$_SESSION['photoname']     ='mrprofile.png';	
				$_SESSION['regduser_lastsignin'] = ''; //$db_data['regduser_lastsignin'];	
				$_SESSION['regduser_signupdt']   = ''; //$db_data['regduser_signupdt'];	

				$_SESSION['sys_co_br_code'] =  'AJAY';
				$_SESSION['sys_co_code'] =  'AJAY';
				$_SESSION['uprof_ddl_bycobr'] =  'AJAY';
				$_SESSION['uprof_ddl_byco'] = 'AJAY';
				$_SESSION['uprof_ddsp_byco'] =  'AJAY';
				$_SESSION['uprof_ddsp_bycobr'] =  'AJAY';

				$form_token = bin2hex(mcrypt_create_iv(128, MCRYPT_DEV_RANDOM));
				$_SESSION['ssntkn'] = $form_token;
				$_SESSION['form_token'] = $form_token;
				$_SESSION['start_time'] = time();
			}			
		}
		catch (PDOException $sql_err) {
			$error_message = 'Oops!! some technical error, please try after sometime!!';
			error_log($sql_err->getMessage());	
			$valid = false;
		}

		DBconnectionUtil::disconnect();

		if ($valid){header("Location:loggeduserhome.php");}
	}
}

include "dist/inc/nonloginheader.php";?>


<div class="container" style="min-height:500px;">
<div id="loginbox" style="margin-top:50px;" class="mainbox col-md-4 col-md-offset-3 col-sm-8 col-sm-offset-2">   
   
<div class="panel panel-info" >
<div class="panel-heading" 	>
	<div class="panel-title">Sign In</div>
	<div style="float:right; font-size: 80%; position: relative; top:-10px"><a 
	href="forgot-password.php">Forgot password?</a></div>
</div>     

<div style="padding-top:30px" class="panel-body" >

	<form id="loginform" class="form-horizontal" role="form" action="useraccess.php" method="post">
		<?php if (!empty($error_message)){echo '<p style="color:red">'.$error_message.'</p>';} ?>

		<div style="margin-bottom: 25px" class="input-group">
			<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
			<input id="login-username" type="text" class="form-control" name="username" value="" placeholder="Registered email id">                                        
		</div>
			
		<div style="margin-bottom: 25px" class="input-group">
			<span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
			<input id="login-password" type="password" class="form-control" name="password" placeholder="password">
		</div>
				
		<div style="margin-top:10px" class="form-group">
			<div class="col-sm-12 controls" style="text-align:right">
			  <button id="btn-login" href="#" class="btn btn-success">Next&nbsp;<i class="fa fa-arrow-circle-right"></i></button>
			</div>
		</div>

		<div class="form-group">
			<div class="col-md-12 control">
				<div style="border-top: 1px solid#888; padding-top:15px; font-size:85%" >
					Not registered yet ? 
				<a href="newaccsignup.php"> Sign Up Here</a>
				</div>
			</div>
		</div>    
	</form>     
</div>  
</div>
</div> 	  
</div> 

<?php include "dist/inc/footercontent.php";?>