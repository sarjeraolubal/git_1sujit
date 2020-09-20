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
$OKtoSaveIntoDB = true;
$v_nextformname = "";
if(!isset($_SESSION['FORMTRANMODE'])){$_SESSION["FORMTRANMODE"] = "NEW";};
if (!empty($_POST)) {
	set_formpostvalue();
	validate_formvalue();

	if($OKtoSaveIntoDB){
		if (main_menu_insupddb()=="SUCCESS"){
			$_SESSION["FORMTRANMODE"] = "VIEW";
			$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Main Menu";
			$_SESSION["SEARCHPAGE"]="main_menu_ss.php";
			header("location:savemessage.php");
		}
	}else{$_SESSION['FORMTRANMODE'] = 'NEW';}
}
	if($_SESSION['FORMTRANMODE'] <> "NEW"){getdata_forviewedit();}
	// if (empty($sys_co_code) && $_SESSION['FORMTRANMODE'] == "NEW"){$sys_co_code = $_SESSION["sys_co_code"];}
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

		<?php if(!empty($errmsg)){echo '<p class="error" align="justify">'.$errmsg.'</p>';}?>
	<form id="main_menu"  class="form-horizontal"  name="main_menu" method="post" enctype="multipart/form-data" action="main_menu.php">

<div align="right">
	<a id="btn-search" href="main_menu_ss.php" class="btn btn-primary">Search&nbsp;<i class="fa fa-search"></i></a>&nbsp;&nbsp;
	<?php if($_SESSION['FORMTRANMODE'] <> "VIEW"){echo '<button id="btn-save" class="btn btn-success">Save&nbsp;<i class="fa fa-save"></i></button>';}else{echo "You are in view mode";}
	      if($_SESSION["FORMTRANMODE"] <> "NEW"){echo '<a id="btn-login" class="btn btn-default" href="'.$_SESSION["ENTRYPAGE"].'" >New&nbsp;<i class="fa fa-pencil"></i></a>';}
	?>
</div>

	<ul id = "main_menu_Tab"  class = "nav nav-tabs">
	<li class = "active"><a href = "#main_menudetail_Tab" data-toggle = "tab">Main Menu Detail</a></li>
	</ul>
	<div id = "main_menu_TabContent" class = "tab-content">
	<div class = "tab-pane fade in active" id = "main_menudetail_Tab"><br>
	<?php  /*
	<input type="hidden" id="icon" name="icon" value=<?php echo !empty($icon)?$icon:"";?>>
	<input type="hidden" id="menu_sequence" name="menu_sequence" value=<?php echo !empty($menu_sequence)?$menu_sequence:"";?>>
	*/
     ?>

	<div class="col-md-6 first">

	<div class="form-group <?php echo !empty($id_menu_Error)?'error':'';?>">

	<label for="Main Menu Code" id="label_id_menu" class="col-md-4 control-label">Main Menu Code <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="id_menu" id="id_menu" class="form-control" required  onchange="check_main_menu();" style="width:60px" maxlength="4" value="<?php echo !empty($id_menu)?$id_menu:'';?>" />
	</div>
	</div>

	<div class="form-group <?php echo !empty($name_menu_Error)?'error':'';?>">

	<label for="Main Menu Name" id="label_name_menu" class="col-md-4 control-label">Main Menu Name <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="name_menu" id="name_menu" class="form-control" required   style="width:150px" maxlength="40" value="<?php echo !empty($name_menu)?$name_menu:'';?>" />
	</div>
	</div>
	
	<div class="form-group <?php echo !empty($menu_sequence_Error)?'error':'';?>">

	<label for="Main Menu sequence" id="label_menu_sequence" class="col-md-4 control-label">Main Menu sequence <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="menu_sequence" id="menu_sequence" class="form-control" required   style="width:150px" maxlength="40" value="<?php echo !empty($menu_sequence)?$menu_sequence:'';?>" />
	</div>
	</div>
	
	<div class="form-group <?php echo !empty($icon_Error)?'error':'';?>">

	<label for="Main Menu icon" id="label_icon" class="col-md-4 control-label">Main Menu icon <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="icon" id="icon" class="form-control" required   style="width:150px" maxlength="40" value="<?php echo !empty($icon)?$icon:'';?>" />
	</div>
	</div>
	
		
	
	
	
	</div>
	</div>
	</div>

	</form>
	<script type="text/javascript">
		$('.btnNext').click(function(){
			$('.nav-tabs > .active').next('li').find('a').trigger('click');
		});

		$('.btnPrevious').click(function(){
			$('.nav-tabs > .active').prev('li').find('a').trigger('click');
		});
	</script>
	<script type="text/javascript">
		function previewImage(event){
			var output = document.getElementById('profimg');
			output.src = URL.createObjectURL(event.target.files[0]);}
	</script>

	<script type="text/javascript">

	function check_main_menu(){
		var jsvar_id_menu =  document.getElementById('id_menu').value;
		var valuetoPHP = 'datalistfor=id_menu&jsvar_id_menu=' + jsvar_id_menu;

		$.ajax({
			type: "POST",
			url: "main_menu_jsajax.php",
			data: valuetoPHP,
			cache: false,
			success: function(responseResult){
				if (responseResult != 0){
					alert("This is already exists, can not be duplicate");
					document.getElementById('name_menu').value="";
					document.main_menu.name_menu.focus();}
			}
		});
	}
	</script>
</div>
</div>
</section>
</section>
</div>
<div class="clearfix"></div><br>
</section>
</div>
<?php include "dist/inc/footercontent.php";?>
