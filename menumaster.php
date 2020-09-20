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
require "dist/lib/lib_menumaster.php";

if (empty($_POST)) {getlist_sub_menu() ;}
$sub_menu_list = $_SESSION["sub_menu_list"];
if (empty($_POST)) {getlist_main_menu();}
$main_menu_list = $_SESSION["main_menu_list"];
if (empty($_POST)) {getlist_role_code();}
$role_code_list = $_SESSION["role_code_list"];


$errmsg = null;
$successmsg = null;
$OKtoSaveIntoDB = true;
$v_nextformname = "";
if(!isset($_SESSION['FORMTRANMODE'])){$_SESSION["FORMTRANMODE"] = "NEW";};
if (!empty($_POST)) {
	set_formpostvalue();
	validate_formvalue();

	if($OKtoSaveIntoDB){
		if (menumaster_insupddb()=="SUCCESS"){
			$_SESSION["FORMTRANMODE"] = "VIEW";
			$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Menu Master";
			$_SESSION["SEARCHPAGE"]="menumaster_ss.php";
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
<h4>Menu Master</h4>
<div class="row">
<section class="col-lg-13">
<section class="content-header">
<div class="box box-primary">
<div class="box-body">

		<?php if(!empty($errmsg)){echo '<p class="error" align="justify">'.$errmsg.'</p>';}?>
	<form id="menumaster"  class="form-horizontal"  name="menumaster" method="post" enctype="multipart/form-data" action="menumaster.php">

<div align="right">
	<a id="btn-search" href="menumaster_ss.php" class="btn btn-primary">Search&nbsp;<i class="fa fa-search"></i></a>&nbsp;&nbsp;
	<?php if($_SESSION['FORMTRANMODE'] <> "VIEW"){echo '<button id="btn-save" class="btn btn-success">Save&nbsp;<i class="fa fa-save"></i></button>';}else{echo "You are in view mode";}
		if($_SESSION["FORMTRANMODE"] <> "NEW"){echo '<a id="btn-login" class="btn btn-default" href="'.$_SESSION["ENTRYPAGE"].'" >New&nbsp;<i class="fa fa-pencil"></i></a>';}
	?>
</div>

	<ul id = "menumaster_Tab"  class = "nav nav-tabs">
	<li class = "active"><a href = "#menumasterinfo_Tab" data-toggle = "tab">Menu Info</a></li>
	</ul>
	<div id = "menumaster_TabContent" class = "tab-content">
	<div class = "tab-pane fade in active" id = "menumasterinfo_Tab"><br>
	<input type="hidden" id="id" name="id" value=<?php echo !empty($id)?$id:"";?>>
	<input type="hidden" id="sys_co_code" name="sys_co_code" value=<?php echo !empty($sys_co_code)?$sys_co_code:"";?>>


	<div class="col-md-6 first">

	<div class="form-group <?php echo !empty($role_Error)?'error':'';?>">
	<div class="col-md-12">
	<label for="Menu Code" id="label_role" class="col-md-4 control-label">Role Code <font color="red">*</font></label>
	<div class="col-md-3">
	<input type="text" name="role" id="role" class="form-control" required  onchange="check_commocode();" style="width:100px" maxlength="30" value="<?php echo !empty($role)?$role:'';?>" />
	</div>
	<div class="col-md-4">
	<input type="text" name="role_name" id="role_name" class="form-control" required  onchange="check_commocode();" style="width:150px" maxlength="100" value="<?php echo !empty($role_name)?$role_name:'';?>" />
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
	
	
    <div class="form-group <?php echo !empty($sub_m_option_Error)?'error':'';?>">
	<div class="col-md-12">
	<label for="Sub Menu" id="label_sub_m_option" class="col-md-4 control-label">Sub Menu</label>
	<div class="col-md-3"><input type="text"  name="sub_m_option" id="sub_m_option" class="form-control"    style="width:50px" maxlength="20" value="<?php echo !empty($sub_m_option)?$sub_m_option:0;?>"/></div>
	<div class="col-md-4">
	<?php
	$sub_m_option_selectedvalue = !empty($sub_m_option)?$sub_m_option:"";
	$sub_m_option_selectbox = '<select " name="id_sub_menu" id="id_sub_menu" class="form-control" required  ><option value=""></option>';
	foreach ($sub_menu_list as $row):
		$sub_m_option_value = $row["id_sub_menu"];
		$sub_m_option_desc = $row["name_sub_menu"];
		$sub_m_option_selected = ($sub_m_option_selectedvalue == $sub_m_option_value)?" selected ":"";
		$sub_m_option_selectbox = $sub_m_option_selectbox .'<option value="'.$sub_m_option_value.'" '.$sub_m_option_selected.'>'.$sub_m_option_desc.'</option>';
	endforeach;
	$sub_m_option_selectbox .= "</select>";
	echo $sub_m_option_selectbox;
	$sub_m_option=$sub_m_option_value;
	?>
	</div>
	<!-- <div class="col-md-4"><input type="text"  name="sub_menu_name" id="sub_menu_name" class="form-control" style="width:150px" maxlength="100" value="<?php echo !empty($sub_menu_name)?$sub_menu_name:0;?>" /></div> -->
	</div>
    
    
	
	
	<!-- <div class="form-group <?php echo !empty($m_option_Error)?'error':'';?>">
	<label for="Main Menu Name" id="label_m_option" class="col-md-4 control-label">Main Menu Name <font color="red">*</font></label>
	<div class="col-md-12">
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
	</div> -->
	
	
	
	
	
	
	
	<!-- <div class="form-group <?php echo !empty($sub_m_option_Error)?'error':'';?>">

	<label for="Sub Menu Name" id="label_sub_m_option" class="col-md-4 control-label">Sub Menu Name <font color="red">*</font></label>
	<div class="col-md-12">
	<?php
	$sub_m_option_selectedvalue = !empty($sub_m_option)?$sub_m_option:"";
	$sub_m_option_selectbox = '<select " name="id_sub_menu" id="id_sub_menu" class="form-control" required  ><option value=""></option>';
	foreach ($sub_menu_list as $row):
		$sub_m_option_value = $row["id_sub_menu"];
		$sub_m_option_desc = $row["name_sub_menu"];
		$sub_m_option_selected = ($sub_m_option_selectedvalue == $sub_m_option_value)?" selected ":"";
		$sub_m_option_selectbox = $sub_m_option_selectbox .'<option value="'.$sub_m_option_desc.'" '.$sub_m_option_selected.'>'.$sub_m_option_value.'</option>';
	endforeach;
	$sub_m_option_selectbox .= "</select>";
	echo $sub_m_option_selectbox;
	$m_option=$m_option_value;
	?>
	</div>
	</div> -->
	
	
	
	
	
	
	
	<?php /*
	
	
	<div class="form-group <?php echo !empty($vm_code_Error)?'error':'';?>">

	<label for="Vessel Name" id="label_vm_code" class="col-md-4 control-label">Vessel Name <font color="red">*</font></label>
	<div class="col-md-7">
	<?php
	$vm_code_selectedvalue = !empty($vm_code)?$vm_code:"";
	$vm_code_selectbox = '<select " name="vm_code" id="vm_code" class="form-control" required  ><option value=""></option>';
	foreach ($vm_code_list as $row):
		$vm_code_value = $row["vm_code"];
		$vm_code_desc = $row["vm_name"];
		$vm_code_selected = ($vm_code_selectedvalue == $vm_code_value)?" selected ":"";
		$vm_code_selectbox = $vm_code_selectbox .'<option value="'.$vm_code_value.'" '.$vm_code_selected.'>'.$vm_code_desc.'</option>';
	endforeach;
	$vm_code_selectbox .= "</select>";
	echo $vm_code_selectbox;?>
	</div>
	------------------------------------------------------------
	
	
	
	
	
	
	<div class="form-group <?php echo !empty($m_option_Error)?'error':'';?>">
	<div class="col-md-12">
	<label for="Menu Name" id="label_m_option" class="col-md-4 control-label"> Main Menu <font color="red">*</font></label>
	<div class="col-md-3">
	<input type="text" name="m_option" id="m_option" class="form-control" required   style="width:50px" maxlength="100" value="<?php echo !empty($m_option)?$m_option:'';?>" />
	</div>
	<div class="col-md-4">
	<input type="text" name="main_manu_name" id="main_manu_name" class="form-control" required   style="width:150px" maxlength="100" value="<?php echo !empty($main_manu_name)?$main_manu_name:'';?>" />
	</div>
	</div>
	</div>
	
	
	<div class="form-group <?php echo !empty($sub_m_option_Error)?'error':'';?>">
	<div class="col-md-12">
	<label for="Sub Menu" id="label_sub_m_option" class="col-md-4 control-label">Sub Menu</label>
	<div class="col-md-3"><input type="text"  name="sub_m_option" id="sub_m_option" class="form-control"    style="width:50px" maxlength="20" value="<?php echo !empty($sub_m_option)?$sub_m_option:0;?>" /></div>
	<div class="col-md-4"><input type="text"  name="sub_menu_name" id="sub_menu_name" class="form-control" style="width:150px" maxlength="100" value="<?php echo !empty($sub_menu_name)?$sub_menu_name:0;?>" /></div>
	</div>
	
	</div>
	*/
	?>
	
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
			url: "menumaster_jsajax.php",
			data: valuetoPHP,
			cache: false,
			success: function(responseResult){
				if (responseResult != 0){
					alert("This is already exists, can not be duplicate");
					document.getElementById('role').value="";
					document.menumaster.role.focus();}
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