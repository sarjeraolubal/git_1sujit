<?php 

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
			$encr_pass = sha1( $password );

			$sql = "select * from regduserm where regduser_emailaddr=? and regduser_pwd=?";

			$q = $pdo->prepare($sql);
			$q->execute(array($username,$encr_pass));
			$db_data = $q->fetch(PDO::FETCH_ASSOC);

			if (empty($db_data['regduser_name']) || $db_data['regduser_status'] <> 'ACTIVE'){
				$error_message = 'Invalid user/password or not registered or not active!!';	
				$valid = false;
			}
			else{
				$sql = "UPDATE regduserm set regduser_lastsignin = ?, regduser_isonline=true where regduser_recid=?";
				$v_date = date_create()->format('Y-m-d H:i:s');

				$q = $pdo->prepare($sql);
				$q->execute(array($v_date,$db_data['regduser_recid']));
			
				session_start();
				
				$_SESSION['username']   = $db_data['regduser_name'];
				$_SESSION['usermobile'] = $db_data['regduser_mobile'];
				$_SESSION['useremail']  = $db_data['regduser_emailaddr'];
				$_SESSION['userid']     = $db_data['regduser_recid'];
				$_SESSION['photoname']     = $db_data['regduser_photoname'];	
				$_SESSION['regduser_lastsignin'] = $db_data['regduser_lastsignin'];	
				$_SESSION['regduser_signupdt']   = $db_data['regduser_signupdt'];	

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
else{
    session_start();
	unset($_SESSION);
    session_unset();
    session_destroy();
    session_write_close();
    setcookie(session_name(),'',0,'/');
    session_regenerate_id(true);
}
include "dist/inc/nonloginheader.php";?>


<div class="container" style="min-height:500px;">
<div id="loginbox" style="margin-top:50px;" class="mainbox col-md-4 col-md-offset-3 col-sm-8 col-sm-offset-2">     
<div class="panel panel-info" >
<div class="panel-heading">
	<div class="panel-title">Sign In</div>
</div>     

<div style="padding-top:30px" class="panel-body" >

<div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>
<form id="loginform" class="form-horizontal" role="form" action="index.php" method="post">
<p style="color:red;"><strong>SESSION EXPIRED !! Please Re-Login</strong></p>
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
		<!-- Button -->
			
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