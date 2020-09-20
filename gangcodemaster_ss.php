<?php
/*-------------------------------------------------------
Project: SMEStar
Company: Vaikunth Raul
Auto generated code using PHP RAD tool by Vaikunth Raul 
-------------------------------------------------------*/
require "dist/lib/commonfunc.php";
validatepage();
require "dist/lib/dbconnection.php";
require "dist/lib/dataextrfunc.php";
?>
<?php 
require "dist/lib/lib_gangcodemaster.php";

$errmsg = null;
$successmsg = null;
$OKToSearch = true;
$input_list = "INPUT";

if (!empty($_POST)) {
	$gm_badge_no = null;
	if($_POST["gm_badge_no"]){$gm_badge_no = $_POST["gm_badge_no"];}
	$gm_name = null;
	if($_POST["gm_name"]){$gm_name = $_POST["gm_name"];}
	$gm_gang_code = null;
	if($_POST["gm_gang_code"]){$gm_gang_code = $_POST["gm_gang_code"];}
	$gm_memcatg = null;
	if($_POST["gm_memcatg"]){$gm_memcatg = $_POST["gm_memcatg"];}
if (!empty($gm_name)){
	if (!allowonlychars($gm_name)){
		$gm_name_Error = "$Member Name has invalid value";
		$errmsg = $errmsg." Member Name has invalid value, allowed characters only ";
		$OKToSearch = false;
	}
}

//	$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Gang Code Master";    //changes made as program name mastr changed

	$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=gangcodemaster";


	if($OKToSearch){
		GLOBAL $selecteddata_list;
		$selecteddata_list = search_datalist();
		$input_list = "LIST";
	}
}
?>
<?php include "dist/inc/loginheader.php";
include "dist/inc/leftsidemenu.php";
?>
<div class="content-wrapper">
<section class="content">
<h4>Gang Code Master</h4>
<div class="row">
<section class="col-lg-13">
<section class="content-header">
<div class="box box-primary">
<div class="box-body">
	<div class="formtitle">Search and List&nbsp;&nbsp;
		<a id="btn-login" class="btn btn-default" href="<?php echo $_SESSION["ENTRYPAGE"];?>" >New&nbsp;<i class="fa fa-pencil"></i></a>
	</div>
	<hr></hr>
		<?php if(!empty($errmsg)){echo '<p class="error">'.$errmsg.'</p>';}?>
<?php
	if($input_list == "LIST"){ include "gangcodemaster_ssout.php";
	}else{include "gangcodemaster_ssin.php";}
?>
</div>
</div>
</section>
</section>
</div>
<div class="clearfix"></div><br>
</section>
</div>
<?php include "dist/inc/footercontent.php";?>
