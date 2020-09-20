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
	$comcode = trim($_POST['comcode']);	

	if (empty($username) || empty($password)){
		$error_message = 'User id or password can not be blank';
	}
	else // validate in db
	{
		$pdo = DBconnectionUtil::connect();
		$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		$valid = true;

		try{
			//$encr_pass = sha1( $password );

			$sql = "select * from smestar_syscom where sys_co_email=? and sys_co_ak=? and sys_co_code=?";

			$q = $pdo->prepare($sql);
			$q->execute(array($username,$password,$comcode));
			$db_data = $q->fetch(PDO::FETCH_ASSOC);

			if (empty($db_data['sys_co_name']) || $db_data['sys_co_status'] <> 'ACTIVE'){
				$error_message = 'Invalid user/password or not registered or not active!!';	
				$valid = false;
			}
			else{
				session_start();
				$_SESSION['usertype']   = 'COMPADMIN';
				$_SESSION['username']   = $db_data['sys_co_name'];
				$_SESSION['usermobile'] = $db_data['sys_co_mobilenbr'];
				$_SESSION['useremail']  = $db_data['sys_co_email'];
				$_SESSION['regduser_recid']     = $db_data['sys_co_nbr'];
				$_SESSION['photoname']     = 'adminuser.png';	
				$_SESSION['regduser_lastsignin'] = ''; //$db_data['regduser_lastsignin'];	
				$_SESSION['regduser_signupdt']   = ''; //$db_data['regduser_signupdt'];	

				$_SESSION['sys_co_br_code'] =  'HO';
				$_SESSION['sys_co_code'] =  $db_data['sys_co_code'];
				$_SESSION['uprof_ddl_bycobr'] =  '';
				$_SESSION['uprof_ddl_byco'] = $db_data['sys_co_code'];
				$_SESSION['uprof_ddsp_byco'] =  $db_data['sys_co_code'];;
				$_SESSION['uprof_ddsp_bycobr'] =  '';

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

		if ($valid){header("Location:companylogged");}
	}
}

?>

<?php include "dist/inc/nonloginheader.php";
include "dist/inc/leftsidemenu_nl.php";
?>
<div class="content-wrapper">
<section class="content">
<h4>Company Admin user Login</h4>
<div class="row">
<section class="col-lg-13">
<section class="content-header">
	
<div id="loginbox" style="margin-top:50px;" class="mainbox col-md-4 col-md-offset-3 col-sm-8 col-sm-offset-2">   
   
<div class="panel panel-info" >
<div class="panel-heading" 	>
	<div class="panel-title">Sign In</div>
</div>     

<div style="padding-top:30px" class="panel-body" >

	<form id="loginform" class="form-horizontal" role="form" action="compadminaccess.php" method="post">
		<?php if (!empty($error_message)){echo '<p style="color:red">'.$error_message.'</p>';} ?>

		<div style="margin-bottom: 25px" class="input-group">
			<span class="input-group-addon"><i class="glyphicon glyphicon-barcode"></i></span>
			<input id="login-comcode" type="text" class="form-control" name="comcode" value="" placeholder="Company Code">                                        
		</div>
		
		<div style="margin-bottom: 25px" class="input-group">
			<span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
			<input id="login-username" type="text" class="form-control" name="username" value="" placeholder="Registered email id">                                        
		</div>
			
		<div style="margin-bottom: 25px" class="input-group">
			<span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
			<input id="login-password" type="password" class="form-control" name="password" placeholder="password">
		</div>
				
		<div style="margin-top:10px" class="form-group">
			<div class="col-sm-12 controls" style="text-align:right">
			  <button id="btn-login" href="#" class="btn btn-success">Login&nbsp;<i class="fa fa-arrow-circle-right"></i></button>
			</div>
		</div>

		<div class="form-group">
			<div class="col-md-12 control">
				<div style="border-top: 1px solid#888; padding-top:15px;" >
					Not registered yet ? <br>
				<a href="companymaster"> Sign Up Here</a>
				<br><a>Forgot Password?</a>
				</div>
			</div>
		</div>    
	</form>     
</div>  

</div>
</div>
</section>
</section>
</div>
<div class="clearfix"></div><br>
</section>
</div>
<?php include "dist/inc/footercontent.php";?>