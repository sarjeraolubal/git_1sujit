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
require "dist/lib/lib_submenumaster.php";
if (empty($_POST)) {getlist_main_menu();}
$main_menu_list = $_SESSION["main_menu_list"];
$errmsg = null;
$successmsg = null;
$OKtoSaveIntoDB = true;
$v_nextformname = "";
if(!isset($_SESSION['FORMTRANMODE'])){$_SESSION["FORMTRANMODE"] = "NEW";};
if (!empty($_POST)) {
	set_formpostvalue();
	validate_formvalue();

	if($OKtoSaveIntoDB){
		if (submenumaster_insupddb()=="SUCCESS"){
			$_SESSION["FORMTRANMODE"] = "VIEW";
			$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Menu Master";
			$_SESSION["SEARCHPAGE"]="submenumaster_ss.php";
			header("location:savemessage.php");
		}
	}else{$_SESSION['FORMTRANMODE'] = 'NEW';}
}
	if($_SESSION['FORMTRANMODE'] <> "NEW"){getdata_forviewedit();}
	if (empty($sys_co_code) && $_SESSION['FORMTRANMODE'] == "NEW"){$sys_co_code = $_SESSION["sys_co_code"];}
?>

<?php include "dist/inc/loginheader.php";
include "dist/inc/leftsidemenu.php";
?>
<div class="content-wrapper">
<section class="content">
<h4>Sub Menu Master</h4>
<div class="row">
<section class="col-lg-13">
<section class="content-header">
<div class="box box-primary">
<div class="box-body">

		<?php if(!empty($errmsg)){echo '<p class="error" align="justify">'.$errmsg.'</p>';}?>
	<form id="submenumaster"  class="form-horizontal"  name="submenumaster" method="post" enctype="multipart/form-data" action="submenumaster.php">

<div align="right">
	<a id="btn-search" href="submenumaster_ss.php" class="btn btn-primary">Search&nbsp;<i class="fa fa-search"></i></a>&nbsp;&nbsp;
	<?php if($_SESSION['FORMTRANMODE'] <> "VIEW"){echo '<button id="btn-save" class="btn btn-success">Save&nbsp;<i class="fa fa-save"></i></button>';}else{echo "You are in view mode";}
		if($_SESSION["FORMTRANMODE"] <> "NEW"){echo '<a id="btn-login" class="btn btn-default" href="'.$_SESSION["ENTRYPAGE"].'" >New&nbsp;<i class="fa fa-pencil"></i></a>';}
	?>
</div>

	<ul id = "submenumaster_Tab"  class = "nav nav-tabs">
	<li class = "active"><a href = "#submenumasterinfo_Tab" data-toggle = "tab">Menu Info</a></li>
	</ul>
	<div id = "submenumaster_TabContent" class = "tab-content">
	<div class = "tab-pane fade in active" id = "submenumasterinfo_Tab"><br>
	<input type="hidden" id="id_sub_menu" name="id_sub_menu" value=<?php echo !empty($id_sub_menu)?$id_sub_menu:"";?>>
	<input type="hidden" id="sys_co_code" name="sys_co_code" value=<?php echo !empty($sys_co_code)?$sys_co_code:"";?>>


	<div class="col-md-6 first">

	<div class="form-group <?php echo !empty($sub_menu_sequence_Error)?'error':'';?>">
	<div class="col-md-12">
	<label for="sub_menu_sequence" id="label_sub_menu_sequence" class="col-md-4 control-label">Sub Menu Sequence <font color="red">*</font></label>
	<div class="col-md-3">
	<input type="text" name="sub_menu_sequence" id="sub_menu_sequence" class="form-control" required  onchange="check_commocode();" style="width:50px" maxlength="4" value="<?php echo !empty($sub_menu_sequence)?$sub_menu_sequence:'';?>" />
	</div>
	<div class="col-md-4">
	<input type="text" name="name_sub_menu" id="name_sub_menu" class="form-control" required  onchange="check_commocode();" style="width:150px" maxlength="150" value="<?php echo !empty($name_sub_menu)?$name_sub_menu:'';?>" />
	</div>
	</div>
	</div>

	
	

	
	<div class="form-group <?php echo !empty($m_option_Error)?'error':'';?>">
	<div class="col-md-12">
	<label for="Menu Name" id="label_m_option" class="col-md-4 control-label"> Main Menu <font color="red">*</font></label>
	<div class="col-md-3">
	<input type="text" name="m_option" id="m_option" class="form-control" required   style="width:50px" maxlength="50" value="<?php echo !empty($m_option)?$m_option:'';?>" />
	</div>
	<div class="col-md-4">
	<?php
	$m_option_selectedvalue = !empty($m_option)?$m_option:"";
	$m_option_selectbox = '<select " name="id_menu" id="id_menu" class="form-control" required  ><option value=""></option>';
	foreach ($main_menu_list as $row):
		$m_option_value = $row["id_menu"];
		$m_optione_desc = $row["name_menu"];
		$m_option_selected = ($m_option_selectedvalue == $m_option_value)?" selected ":"";
		$m_option_selectbox = $m_option_selectbox .'<option value="'.$m_option_value.'" '.$m_option_selected.'>'.$m_optione_desc.'</option>';
	endforeach;
	$m_option_selectbox .= "</select>";
	echo $m_option_selectbox;
	GLOBAL $m_option;
	$m_option=$m_option_value;
	?>
	</div>
	<!-- <div class="col-md-4">
	<input type="text" name="main_manu_name" id="main_manu_name" class="form-control" required   style="width:150px" maxlength="100" value="<?php echo !empty($main_manu_name)?$main_manu_name:'';?>" />
	</div> -->
	</div>
	</div>	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

<?php 	
	
/*
	<div class="form-group <?php echo !empty($id_menu_option_Error)?'error':'';?>">
	<div class="col-md-12">
	<label for="Main Menu" id="label_id_menu" class="col-md-4 control-label"> Main Menu <font color="red">*</font></label>
	<div class="col-md-3">
	<input type="text" name="id_menu" id="id_menu" class="form-control" required   style="width:50px" maxlength="100" value="<?php echo !empty($id_menu)?$id_menu:'';?>" />
	</div>
	<div class="col-md-4">
	<input type="text" name="name_menu" id="name_menu" class="form-control" required   style="width:150px" maxlength="100" value="<?php echo !empty($name_menu)?$name_menu:'';?>" />
	</div>
	</div>
	</div>
	
*/
?>	
	
	
	<div class="form-group <?php echo !empty($url_Error)?'error':'';?>">
	<div class="col-md-12">
	<label for="url" id="label_url" class="col-md-4 control-label">URL  </label>
	<div class="col-md-3">
	<input type="text"  name="url" id="icon" class="form-control" style="width:150px" maxlength="100" value="<?php echo !empty($url)?$url:"";?>" />
	</div>
	</div>
	</diV>
	
	<div class="form-group <?php echo !empty($icon_Error)?'error':'';?>">
	<div class="col-md-12">
	<label for="icon" id="label_icon" class="col-md-4 control-label">ICON </label>
	<div class="col-md-3">
	<input type="text"  name="icon" id="icon" class="form-control" style="width:150px" maxlength="100" value="<?php echo !empty($icon)?$icon:"";?>" />
	</div>
	</div>
	</div>
	
	<div class="form-group <?php echo !empty($title_Error)?'error':'';?>">
	<div class="col-md-12">
	<label for="icon" id="label_title" class="col-md-4 control-label">Title  </label>
	<div class="col-md-4">
	<input type="text"  name="title" id="title" class="form-control" style="width:150px" maxlength="100" value="<?php echo !empty($title)?$title:"";?>" /></div>
		
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

	function check_commocode(){
		var jsvar_role =  document.getElementById('role').value;
		var valuetoPHP = 'datalistfor=role&jsvar_role=' + jsvar_role;

		$.ajax({
			type: "POST",
			url: "submenumaster_jsajax.php",
			data: valuetoPHP,
			cache: false,
			success: function(responseResult){
				if (responseResult != 0){
					alert("This is already exists, can not be duplicate");
					document.getElementById('role').value="";
					document.submenumaster.role.focus();}
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
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script type="text/javascript">
	$('#id_menu').change(function(){
	var opt = $(this).find('option:selected');
	$('#m_option').val(opt.val());
	$('#main_manu_name').val(opt.html());
});

	$('#id_sub_menu').change(function(){
	var opt = $(this).find('option:selected');
	$('#sub_m_option').val(opt.val());
	$('#sub_menu_name').val(opt.html());
});
</script>