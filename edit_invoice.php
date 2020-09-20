<?php
// including the database connection file
include_once("config.php");
if(isset($_REQUEST['id']) && !empty($_REQUEST['id']))
 {
  $id = $_REQUEST['id'];
  $stmt_edit = $mysqli->prepare('SELECT * FROM invoice WHERE id=:uid');
  $stmt_edit->execute(array(':uid'=>$id));
  $edit_row = $stmt_edit->fetch(PDO::FETCH_ASSOC);
  extract($edit_row); 
 }
 else
 {
  header("Location: index.php");
 }
if(isset($_POST['update']))
 {
  $name = ( $_POST['fullname']);
  $company_name = ($_POST['cname']);
  $dob = ( $_POST['dob']);
  $designation =  $_POST['designation'];
  $nationality = ( $_POST['nationality']);
  $identification_mark = ($_POST['identificationmark']);
  $address = ($_POST['residentialaddress']);
  $aadhar = ( $_POST['aadhar']);
  $id_no = ( $_POST['id_no']);
  $badge_no = ( $_POST['badge_no']); 
  $imgFile = $_FILES['imageUpload']['name'];
  $tmp_dir = $_FILES['imageUpload']['tmp_name'];
  $imgSize = $_FILES['imageUpload']['size'];
     
  if($imgFile)
  {
   $upload_dir = 'uploads/'; // upload directory 
   $imgExt = strtolower(pathinfo($imgFile,PATHINFO_EXTENSION)); // get image extension
   $valid_extensions = array('jpeg', 'jpg', 'png', 'gif'); // valid extensions
   $userpic = rand(1000,1000000).".".$imgExt;
   if(in_array($imgExt, $valid_extensions))
   {   
    if($imgSize < 5000000)
    {
     unlink($upload_dir.$edit_row['image']);
     move_uploaded_file($tmp_dir,$upload_dir.$userpic);
    }
    else
    {
     $errMSG = "Sorry, your file is too large it should be less then 5MB";
    }
   }
   else
   {
    $errMSG = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";  
   } 
  }
  else
  {
   // if no image selected the old image remain as it is.
   $userpic = $edit_row['image']; // old image from database
  } 
      
  
  // if no error occured, continue ....
  if(!isset($errMSG))
  {
   $stmt = $mysqli->prepare('UPDATE invoice 
              SET name=:name, 
               company_name=:company_name, 
               dob=:dob,designation=:designation, nationality=:nationality, identification_mark=:identification_mark, address=:address, aadhar=:aadhar, image=:image, ID_NO=:id_no, BADGE_NO=:badge_no
               WHERE id=:uid');
   $stmt->bindParam(':name',$name);
   $stmt->bindParam(':company_name',$company_name);
   $stmt->bindParam(':dob',$dob);
   $stmt->bindParam(':designation',$designation);
   $stmt->bindParam(':nationality',$nationality);
   $stmt->bindParam(':identification_mark',$identification_mark);
   $stmt->bindParam(':address',$address);
   $stmt->bindParam(':aadhar',$aadhar);
   $stmt->bindParam(':image',$userpic);
   $stmt->bindParam(':id_no',$id_no);
   $stmt->bindParam(':badge_no',$badge_no);
   $stmt->bindParam(':uid',$id);    
   if($stmt->execute()){
    ?>
                <script>
    alert('Successfully Updated ...');
    window.location.href='display_invoice_home.php';
    </script>
                <?php
   }
   else{
    $errMSG = "Sorry Data Could Not Updated !";
   }
  }    
 }
?>
<!DOCTYPE html>
<html lang="en">
    <head> 
		<meta name="viewport" content="width=device-width, initial-scale=1">


		<!-- Website CSS style -->
		<link href="css/bootstrap.min.css" rel="stylesheet">

		<!-- Website Font style -->
	    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
		<link rel="stylesheet" href="style.css">
		<!-- Google Fonts -->
		<link href='https://fonts.googleapis.com/css?family=Passion+One' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'>

		<title>Admin</title>
	</head>
	<body>
		<div class="container">
			<div class="row main">
				<a class="btn btn-success" href="display_invoice_home.php">Home</a>
				<div class="main-login main-center">				
					<form class="" method="post"  action="" method="post" name="form1"  enctype="multipart/form-data">
						<div class="form-group">
							<label for="name" class="cols-sm-2 control-label">Company Name</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" class="form-control" name="cname" id="name"  placeholder="Enter your Company" value="<?php echo $edit_row['company_name'];?>"/>
								</div>
							</div>
						</div>
						<div class="form-group">
							<label for="name" class="cols-sm-2 control-label">Your Name</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" class="form-control" name="fullname" id="name"  placeholder="Enter your Name" value="<?php echo $edit_row['name'];?>"/>
								</div>
							</div>
						</div>
						<div class="form-group">
							<label for="name" class="cols-sm-2 control-label">Date of Birth</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" class="form-control" name="dob" id="name"  placeholder="DOB" value="<?php echo $edit_row['dob'];?>"/>
								</div>
							</div>
						</div>
						<div class="form-group">
							<label for="name" class="cols-sm-2 control-label">Designation</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" class="form-control" name="designation" id="name"  placeholder="Designation" value="<?php echo $edit_row['designation'];?>"/>
								</div>
							</div>
						</div>
						<div class="form-group">
							<label for="name" class="cols-sm-2 control-label">Nationality</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" class="form-control" name="nationality" id="name"  placeholder="Nationality" value="<?php echo $edit_row['nationality'];?>"/>
								</div>
							</div>
						</div>
						<div class="form-group">
							<label for="name" class="cols-sm-2 control-label">Identification Mark</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" class="form-control" name="identificationmark" id="name"  placeholder="identification mark" value="<?php echo $edit_row['identification_mark'];?>"/>
								</div>
							</div>
						</div>
						<div class="form-group">
							<label for="name" class="cols-sm-2 control-label">Residential Address</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
									<!-- <input type="text" class="form-control" name="dob" id="name"  placeholder="DOB"/> -->
									<textarea class="form-control" name="residentialaddress" ><?php echo $edit_row['address'];?></textarea value="<?php echo $edit_row['address'];?>">
								</div>
							</div>
						</div>
						<div class="form-group">
							<label for="name" class="cols-sm-2 control-label">Aadhar / PAN / Election Card No. & Date</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" class="form-control" name="aadhar" value="<?php echo $edit_row['aadhar'];?>"/>
								</div>
							</div>
						</div>						
						<div class="form-group">
							<label for="name" class="cols-sm-2 control-label">ID No</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" class="form-control" name="id_no" value="<?php echo $edit_row['id_no'];?>"/>
								</div>
							</div>
						</div>
						<div class="form-group">
							<label for="name" class="cols-sm-2 control-label">Badge No</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" class="form-control" name="badge_no" value="<?php echo $edit_row['badge_no'];?>"/>
								</div>
							</div>
						</div>
						<div class="form-group">
							<label for="name" class="cols-sm-2 control-label">Upload Image</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="file" class="form-control" name="imageUpload" id="imageUpload" value="<?php echo $edit_row['image2wbmp(	)'];?>"/>
								</div>
							</div>
						</div>
						<div class="form-group ">
							<input type="hidden" name="id" value=<?php echo $_REQUEST['id'];?>>							
							<button class="btn btn-primary" type="submit" name="update">Update</button>
						</div>						
					</form>
				</div>
			</div>
		</div>

		 <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
	</body>
</html>