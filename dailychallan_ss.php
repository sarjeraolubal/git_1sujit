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
require "dist/lib/lib_dailychallan.php";
if (empty($_POST)) {getlist_sys_co_code();}

$sys_co_code_list = $_SESSION["Sys_Co_Code_list"];

if (empty($_POST)) {getlist_vm_code();}

$vm_code_list = $_SESSION["Vm_Code_list"];


$errmsg = null;
$successmsg = null;
$OKToSearch = true;
$input_list = "INPUT";

if (!empty($_POST)) {
	$vm_code = null;
	if($_POST["vm_code"]){$vm_code = $_POST["vm_code"];}
	$dwd_slip_nbr = null;
	if($_POST["dwd_slip_nbr"]){$dwd_slip_nbr = $_POST["dwd_slip_nbr"];}
	$sys_co_code = null;
	if($_POST["sys_co_code"]){$sys_co_code = $_POST["sys_co_code"];}

	$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Daily Challan";

	if($OKToSearch){
		GLOBAL $selecteddata_list;
		$selecteddata_list = search_datalist();
		$input_list = "LIST";

		if (isset($_SESSION["Sys_Co_Code_list"])){
			unset($_SESSION["Sys_Co_Code_list"]);
		}

		if (isset($_SESSION["Vm_Code_list"])){
			unset($_SESSION["Vm_Code_list"]);
		}
	}
}
?>
<?php include "dist/inc/loginheader.php";
include "dist/inc/leftsidemenu.php";
?>
<div class="content-wrapper">
<section class="content">
<h4>Daily Challan</h4>
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
	if($input_list == "LIST"){ include "dailychallan_ssout.php";
	}else{include "dailychallan_ssin.php";}
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
