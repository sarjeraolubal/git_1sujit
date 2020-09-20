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
require "dist/lib/lib_advancededuction.php";
if (empty($_POST)) {getlist_gm_badge_no();}

$gm_badge_no_list = $_SESSION["Gm_Badge_No_list"];


$errmsg = null;
$successmsg = null;
$OKToSearch = true;
$input_list = "INPUT";

if (!empty($_POST)) {
	$gm_badge_no = null;
	if($_POST["gm_badge_no"]){$gm_badge_no = $_POST["gm_badge_no"];}

	$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Advance Deduction";

	if($OKToSearch){
		GLOBAL $selecteddata_list;
		$selecteddata_list = search_datalist();
		$input_list = "LIST";

		if (isset($_SESSION["Gm_Badge_No_list"])){
			unset($_SESSION["Gm_Badge_No_list"]);
		}
	}
}
?>
<?php include "dist/inc/loginheader.php";
include "dist/inc/leftsidemenu.php";
?>
<div class="content-wrapper">
<section class="content">
<h4>Advance Deduction</h4>
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
	if($input_list == "LIST"){ include "advancededuction_ssout.php";
	}else{include "advancededuction_ssin.php";}
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
