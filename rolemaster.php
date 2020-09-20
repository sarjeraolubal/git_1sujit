<?php
/*-------------------------------------------------------
Project: SMEStar
role: Vaikunth Raul
Auto generated code using PHP RAD tool by Vaikunth Raul 
-------------------------------------------------------*/
require "dist/lib/commonfunc.php";
validatepage();
require "dist/lib/dbconnection.php";
require "dist/lib/dataextrfunc.php";
?>
<?php 
require "dist/lib/lib_rolemaster.php";

$errmsg = null;
$successmsg = null;
$OKtoSaveIntoDB = true;
$v_nextformname = "";
if(!isset($_SESSION['FORMTRANMODE'])){$_SESSION["FORMTRANMODE"] = "NEW";};
if (!empty($_POST)) {
	set_formpostvalue();
	validate_formvalue();

	if($OKtoSaveIntoDB){
		if (rolemaster_insupddb()=="SUCCESS"){
			$_SESSION["FORMTRANMODE"] = "VIEW";
			$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Role Master";
			$_SESSION["SEARCHPAGE"]="rolemaster_ss.php";
			header("location:savemessage.php");
		}
	}else{$_SESSION['FORMTRANMODE'] = 'NEW';}
}
	if($_SESSION['FORMTRANMODE'] <> "NEW"){getdata_forviewedit();}
?>

<?php include "dist/inc/loginheader.php";
include "dist/inc/leftsidemenu.php";
?>
<div class="content-wrapper">
<section class="content">
<h4>role Master</h4>
<div class="row">
<section class="col-lg-13">
<section class="content-header">
<div class="box box-primary">
<div class="box-body">

		<?php if(!empty($errmsg)){echo '<p class="error" align="justify">'.$errmsg.'</p>';}?>
	<form id="rolemaster"  class="form-horizontal"  name="rolemaster" method="post" enctype="multipart/form-data" action="rolemaster.php">

<div align="right">
	<a id="btn-search" href="rolemaster_ss.php" class="btn btn-primary">Search&nbsp;<i class="fa fa-search"></i></a>&nbsp;&nbsp;
	<?php if($_SESSION['FORMTRANMODE'] <> "VIEW"){echo '<button id="btn-save" class="btn btn-success">Save&nbsp;<i class="fa fa-save"></i></button>';}else{echo "You are in view mode";}
		if($_SESSION["FORMTRANMODE"] <> "NEW"){echo '<a id="btn-login" class="btn btn-default" href="'.$_SESSION["ENTRYPAGE"].'" >New&nbsp;<i class="fa fa-pencil"></i></a>';}
	?>
</div>

	<ul id = "rolemaster_Tab"  class = "nav nav-tabs">
	<li class = "active"><a href = "#roleinfo_Tab" data-toggle = "tab">Role Info</a></li>
	</ul>
	<div id = "rolemaster_TabContent" class = "tab-content">
	<div class = "tab-pane fade in active" id = "roleinfo_Tab"><br>
	<input type="hidden" id="id" name="id" value=<?php echo !empty($id)?$id:"";?>>


	<div class="col-md-6 first">

	<div class="form-group <?php echo !empty($role_Error)?'error':'';?>">

	<label for="role Code" id="label_role" class="col-md-4 control-label">Role Code</label>
	<div class="col-md-7">
	<input type="text" name="role" id="role" class="form-control "   onchange="check_compcode();" style="width:60px" maxlength="20" value="<?php echo !empty($role)?$role:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($description_Error)?'error':'';?>">

	<label for="Role Name" id="label_description" class="col-md-4 control-label">Role Name <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="description" id="description" class="form-control" required   style="width:150px" maxlength="100" value="<?php echo !empty($description)?$description:'';?>" />
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
`
	function check_compcode(){
		var jsvar_role =  document.getElementById('role').value;
		var valuetoPHP = 'datalistfor=role&jsvar_role=' + jsvar_role;

		$.ajax({
			type: "POST",
			url: "rolemaster_jsajax.php",
			data: valuetoPHP,
			cache: false,
			success: function(responseResult){
				if (responseResult != 0){
					alert("This is already exists, can not be duplicate");
					document.getElementById('role').value="";
					document.rolemaster.role.focus();}
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
