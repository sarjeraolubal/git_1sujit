<html>
<head>
	<title>Add Data</title>
</head>
<script type="text/javascript">	
</script>
<body>
<?php
include_once("config.php");
if(isset($_POST['Submit']))
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
  
  
  if(empty($name)){
   $errMSG = "Please Enter Username.";
  }
  else if(empty($company_name)){
   $errMSG = "Please Enter Your Company Name.";
  }
  else if(empty($imgFile)){
   $errMSG = "Please Select Image File.";
  }
  else
  {
   $upload_dir = 'uploads/'; 
 
   $imgExt = strtolower(pathinfo($imgFile,PATHINFO_EXTENSION)); 
   
   $valid_extensions = array('jpeg', 'jpg', 'png', 'gif');
 
   $userpic = rand(1000,1000000).".".$imgExt;   
 
   if(in_array($imgExt, $valid_extensions))
   {   
    
    if($imgSize < 5000000)    
    {
     	move_uploaded_file($tmp_dir,$upload_dir.$userpic);
    }
    else{
     $errMSG = "Sorry, your file is too large.";
    }
   }
   else{
    $errMSG = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";  
   }
  }
  
  
  // if no error occured, continue ....
  if(!isset($errMSG))
  {
   $stmt = $mysqli->prepare("INSERT INTO `invoice`(`name`, `company_name`, `dob`, `designation`, `nationality`, `identification_mark`, `address`, `aadhar`, `image`,`ID_NO`,`BADGE_NO`) VALUES (:name,:company_name,:dob,:designation,:nationality,:identification_mark,:address,:aadhar,:image,:ID_NO,:BADGE_NO)");
   $stmt->bindParam(':name',$name);
   $stmt->bindParam(':company_name',$company_name);
   $stmt->bindParam(':dob',$dob);
   $stmt->bindParam(':designation',$designation);
   $stmt->bindParam(':nationality',$nationality);
   $stmt->bindParam(':identification_mark',$identification_mark);
   $stmt->bindParam(':address',$address);
   $stmt->bindParam(':aadhar',$aadhar);
   $stmt->bindParam(':image',$userpic);   
   $stmt->bindParam(':ID_NO',$id_no);
   $stmt->bindParam(':BADGE_NO',$badge_no);
   if($stmt->execute())
   {
    $successMSG = "new record succesfully inserted ...";
    header("Location:display_invoice_home.php");
   }
   else
   {
    $errMSG = "error while inserting....";
   }
  }
 }

?>
</body>
</html>
