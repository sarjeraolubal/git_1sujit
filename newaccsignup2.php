<?php 

$error_message = '';

if(session_id() == ""){session_start();} 
$regduser_emailaddr = $_SESSION['uprof_login'];
$regduser_pwd = $_SESSION['uprof_accesskey'];

$user_group = '';

if (empty($regduser_emailaddr)){header("Location:newaccsignup.php");}

require 'dist/lib/commonfunc.php';
require 'dist/lib/dbconnection.php';

$valid = true;
if ( !empty($_POST)) 
{
	if(session_id() == ""){session_start();} 

	
	if(empty($_SESSION['captcha_code'] ) || strcasecmp($_SESSION['captcha_code'], $_POST['captcha_code']) != 0){ 
		$error_message .= ' Security code does not match!!';
		$valid = false;
	}
}

if ( !empty($_POST) && $valid) {
	$regduser_name = $_POST['regduser_name'];
	$regduser_mobile = $_POST['regduser_mobile'];
	
	
	if (empty($regduser_name)) {
		$error_message = ' Name can not be blank';
		$valid = false;
	}

	if (empty($regduser_mobile)) {
		$error_message = $error_message.' Primary phone can not be blank';
		$valid = false;
	}
	
	$pdo = DBconnectionUtil::connect();
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
	if ($valid){
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
	}
	
	if ($valid) {
		
		// $sql = "INSERT INTO h_smestar_up SELECT * FROM smestar_up WHERE Up_TabRecKey=?";
		//  $q = $pdo->prepare($sql);
		// $q->execute(array($regduser_recid));
		
		$sql = "INSERT INTO smestar_up (up_uid,up_ak,up_name,up_phone,up_status,up_regdate) VALUES(?,?,?,?,?,?)";
		$encr_pass = sha1( $regduser_pwd );
		$v_status  = 'ACTIVE';
		$v_signupdt = date_create()->format('Y-m-d H:i:s');
		
		try{
			$q = $pdo->prepare($sql);
			$q->execute(array($regduser_emailaddr,$encr_pass,$regduser_name,$regduser_mobile,$v_status,$v_signupdt));

			$regduser_recid = $pdo->lastInsertId();
			$_SESSION['regduser_recid']= $regduser_recid;

			
			unset($_SESSION['regduser_emailaddr']);		   
			unset($_SESSION['regduser_pwd']);
			
			DBconnectionUtil::disconnect();
		   
			header('Location:newaccsignup3.php');
		}
		catch (PDOException $sql_err) {
			$error_message = 'TechError: '.$sql_err->getMessage().', contact system administrator';
			$valid=false;
		}
	}
	DBconnectionUtil::disconnect();
}

require "dist/lib/dataextrfunc.php";

//$user_grplist_db = get_picklist('USERGROUP','');
//$user_grplist_form = add_selectoption($user_grplist_db,$user_group,'user_group','');

include "dist/inc/nonloginheader.php";
?>

<div class="container" style="min-height:500px;">
<div id="loginbox" style="margin-top:50px;" class="col-md-7 col-md-offset-2 col-sm-offset-2">                    
<div class="panel panel-info" >
<div class="panel-heading">
	<div class="panel-title">Register new account&nbsp&nbsp|&nbsp&nbsp;Credentials&nbsp;<i class="fa fa-arrow-circle-right"></i>&nbsp;<strong>Profile Info</strong>	</div>
</div>     

<div style="padding-top:30px" class="panel-body" >

<form id="loginform" class="form-horizontal" role="form" action="newaccsignup2.php" method="post">
<?php if (!empty($error_message)){echo '<p style="color:red">'.$error_message.'</p>';} ?>

<div class="col-md-8 col-sm-offset-1">

	
	<div style="margin-bottom: 25px" class="input-group">
		<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>		
		<input id="regduser_name" type="text" class="form-control" name="regduser_name" required placeholder="Name" value="<?php echo !empty($regduser_name)?$regduser_name:''; ?>">                                     
	</div>
	
</div>

<div class="col-md-5 col-sm-offset-1">
	
<div style="margin-bottom: 10px" class="input-group">
	<span class="input-group-addon"><i class="glyphicon glyphicon-phone"></i></span>
	<input id="regduser_mobile" type="text" class="form-control" name="regduser_mobile" placeholder="Primary Phone Number">
</div>
		
<div style="margin-bottom: 10px" class="input-group">
	<span class="input-group-addon"><i class="glyphicon glyphicon-barcode"></i></span>
	<input id="captcha_code" name="captcha_code" type="text" placeholder="Security code" 
	class="form-control"/>	
</div>
</div>

<div class="col-md-7 col-sm-offset-1">
<div style="margin-bottom: 25px" class="input-group">
	<img src="dist/lib/captcha.php?rand=<?php echo rand();?>" id='captchaimg'><br>
		Can't read the text? click <a href='javascript: refreshCaptcha();'>here</a> to refresh.

</div>
</div>
<div style="margin-top:10px" class="form-group">
	<div class="col-sm-12 controls" style="text-align:right">
	  <button id="btn-login" href="#" class="btn btn-success">Submit&nbsp;<i class="fa fa-arrow-circle-right"></i></button>
	</div>
</div>

</form>     

	<script type='text/javascript'>
	function refreshCaptcha(){
		var img = document.images['captchaimg'];
		img.src = img.src.substring(0,img.src.lastIndexOf("?"))+"?rand="+Math.random()*1000;
	}
	</script>
</div>  
</div>
</div> 	  
</div> <!-- /container -->

<?php include "dist/inc/footercontent.php";?>