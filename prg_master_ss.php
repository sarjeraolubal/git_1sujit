<?php
/*-------------------------------------------------------
Project: SMEStar
Role: Vaikunth Raul
Auto generated code using PHP RAD tool by Vaikunth Raul 
-------------------------------------------------------*/
require "dist/lib/commonfunc.php";
validatepage();
require "dist/lib/dbconnection.php";
require "dist/lib/dataextrfunc.php";
?>
<?php 
require "dist/lib/lib_prg_master.php";

$errmsg = null;
$successmsg = null;
$OKToSearch = true;
$input_list = "INPUT";

if (!empty($_POST)) {
	$prg_file = null;
	if($_POST["prg_file"]){$prg_file = $_POST["prg_file"];}

	$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Program Master";

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
<h4>Master Master</h4>
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
	if($input_list == "LIST"){ include "prg_master_ssout.php";
	}else{include "prg_master_ssin.php";}
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
