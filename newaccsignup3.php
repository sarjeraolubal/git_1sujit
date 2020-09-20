<?php 

$error_message = '';

if(session_id() == ""){session_start();} 

$regduser_recid = $_SESSION['regduser_recid'];

if (empty($regduser_recid) || $regduser_recid == 0){header("Location:newaccsignup.php");}

require 'dist/lib/commonfunc.php';
require 'dist/lib/dbconnection.php';


$valid = true;
$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

if ( !empty($_POST)){ 
	// update alternate number and profile photo path
    $role = $_POST['role'];
	$regduser_altcont = $_POST['regduser_altcont'];
	$profilephoto_link = 'PP_'.$regduser_recid.'_'. basename($_FILES["profilephoto_name"]["name"]);
	
	// validate if profile photo file is available
	if ( !empty($profilephoto_link)){
		$target_file =basename($_FILES["profilephoto_name"]["name"]);
		$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
		$check = getimagesize($_FILES["profilephoto_name"]["tmp_name"]);

		if (($_FILES["profilephoto_name"]["size"] >= 5000000) || ($_FILES["profilephoto_name"]["size"] == 0)){
			$error_message="File size is too large, allowed size upto 100 KB or file not in disk";
			$valid = false;
		}

		if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
		&& $imageFileType != "gif" && $imageFileType != "pdf") {
			$error_message="Sorry, only JPG, JPEG, PNG, GIF, PDF files are allowed";
			$valid = false;
		}
	}			
	if ((!empty($regduser_altcont) || !empty($role) ||!empty($profilephoto_link)) && ($valid)){
		
		
		//$sql = "INSERT INTO h_smestar_up SELECT * FROM smestar_up WHERE Up_TabRecKey=?";
	//	$q = $pdo->prepare($sql);
	//	$q->execute(array($regduser_recid));
		
		
		$sql = "UPDATE smestar_up SET  up_phone_1 =?,role =?,up_photoname=? where up_tabreckey = ?";
		try{
			$q = $pdo->prepare($sql);
			
			$q->execute(array($regduser_altcont,$role,$profilephoto_link,$regduser_recid));
			
			DBconnectionUtil::disconnect();
			
			if (!empty($profilephoto_link)){
				// upload image file
				$target_file = 'dist/img/userprofile/PP_'.$regduser_recid.'_'. basename($_FILES["profilephoto_name"]["name"]);
				if(!move_uploaded_file($_FILES["profilephoto_name"]["tmp_name"],$target_file)){
					error_log('Unable to load profile photo');
				}	
			}				
			header('Location:newaccsignupsuccess.php');			
		}
		catch (PDOException $sql_err) {
			$error_message = 'TechError: '.$sql_err->getMessage().', contact system administrator';
			$valid=false;
		}
	}
}

$sql = "SELECT * FROM smestar_up where up_tabreckey = ?";
try{
	$q = $pdo->prepare($sql);
	$q->execute(array($regduser_recid));
	$usr_data = $q->fetch(PDO::FETCH_ASSOC);

	if (empty($usr_data['up_name'])){$valid=false;}
	else{
		$regduser_emailaddr = $usr_data['up_uid'];
		$regduser_name = $usr_data['up_name'];
		$regduser_mobile =$usr_data['up_phone'];
		//$regduser_title = strtoupper($usr_data['regduser_title']);		
	}
}
catch (PDOException $sql_err) {
	$error_message = 'TechError: '.$sql_err->getMessage().', contact system administrator';
	$valid=false;
}
DBconnectionUtil::disconnect();

if (!$valid && empty($_POST)){header("Location:newaccsignup.php");}

	
include "dist/inc/nonloginheader.php";
?>

<div class="container" style="min-height:500px;">
<div id="loginbox" style="margin-top:50px;" class="col-md-12">                    
<div class="panel panel-info" >
<div class="panel-heading">
	<div class="panel-title">Register new account</div>
</div>     

<div style="padding-top:30px" class="panel-body" >

<form id="loginform" class="form-horizontal" role="form" action="newaccsignup3.php" method="post" enctype="multipart/form-data">
<p style="color:green"><img src="dist/img/success.png">New Account Successfully Registered. You can add your profile photograph and alternate contact details</p>
<hr>
<?php if (!empty($error_message)){echo '<p style="color:red">'.$error_message.'</p>';} ?>

<div class="col-md-6">

	<div class="form-group">
		<label class="col-md-3 control-label">Login Email Address</label>
		<div class="col-md-7">
			<input type="text" class="form-control" name="regduser_emailaddr" value="<?php echo $regduser_emailaddr;?>" readonly>		
		</div>
	</div>

	<div class="form-group">
		<label class="col-md-3 control-label">Name</label>
		<div class="col-md-7">
			<input type="text" class="form-control" name="regduser_name" value="<?php echo $regduser_name;?>" readonly>		
		</div>	
	</div>

	<div class="form-group">
		<label class="col-md-3 control-label">Primary Contact Nbr</label>
		<div class="col-md-7">
			<input type="text" class="form-control" name="regduser_mobile" value="<?php echo $regduser_mobile;?>" readonly>		
		</div>		
	</div>


</div>

<div class="col-md-6">
	<div class="form-group">
		<label class="col-md-3 control-label">Alternate Contact Nbr</label>
		<div class="col-md-7">
			<input type="text" class="form-control" name="regduser_altcont">		
		</div>		
	</div>
	
	<div class="form-group">
		<label class="col-md-3 control-label">Role </label>
		<div class="col-md-7">
			<input type="text" class="form-control" name="role">		
		</div>		
	</div>
	
	

	<div class="form-group">
		<label class="col-md-3 control-label">Profile Photo</label>
		<div class="col-md-7">		
			<img id="profimg" name="profimg" src="<?php if($regduser_title=='MR'){echo 'dist/img/mrprofile.png';}else{echo 'dist/img/msprofile.png';}?>" width="100px" height="100px" style="border:1px solid #eee;">
			<input type="file" class="form-control" name="profilephoto_name" accept="image/*" onchange="previewImage(event);">
		</div>		
	</div>

	<div class="form-group">
		<label class="col-md-3 control-label">&nbsp;</label>
			<div class="col-sm-7">
		  <button id="btn-login" href="#" class="btn btn-success">Submit&nbsp;<i class="fa fa-arrow-circle-up"></i></button>
		   <button id="btn-login" href="#" class="btn btn-default">Skip&nbsp;<i class="fa fa-arrow-circle-right"></i></button>
		</div>
	</div>
</div>

</form>

<script type="text/javascript">
function previewImage(event)
	{
	var output = document.getElementById('profimg');
	output.src = URL.createObjectURL(event.target.files[0]);
  };
</script>
			
</div>  
</div>
</div> 	  
</div> <!-- /container -->

<?php include "dist/inc/footercontent2.php";?>