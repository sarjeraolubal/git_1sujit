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
require "dist/lib/lib_main_menu.php";

$errmsg = null;
$successmsg = null;
$OKToSearch = true;
$input_list = "INPUT";

if (!empty($_POST)) {
	$name_menu = null;
	if($_POST["name_menu"]){$name_menu = $_POST["name_menu"];}
	$id_menu = null;
	if($_POST["id_menu"]){$id_menu = $_POST["id_menu"];}

	$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Main Menu Master";

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
<h4>Main Menu Master</h4>
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
	if($input_list == "LIST"){ include "main_menu_ssout.php";
	}else{include "main_menu_ssin.php";}
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
