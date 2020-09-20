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
require "dist/lib/lib_vesselmaster.php";

$errmsg = null;
$successmsg = null;
$OKtoSaveIntoDB = true;
$v_nextformname = "";
if(!isset($_SESSION['FORMTRANMODE'])){$_SESSION["FORMTRANMODE"] = "NEW";};
if (!empty($_POST)) {
	set_formpostvalue();
	validate_formvalue();

	if($OKtoSaveIntoDB){
		if (vesselmaster_insupddb()=="SUCCESS"){
			$_SESSION["FORMTRANMODE"] = "VIEW";
			$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Vessel Master";
			$_SESSION["SEARCHPAGE"]="vesselmaster_ss.php";
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
<h4>Vessel Master</h4>
<div class="row">
<section class="col-lg-13">
<section class="content-header">
<div class="box box-primary">
<div class="box-body">

		<?php if(!empty($errmsg)){echo '<p class="error" align="justify">'.$errmsg.'</p>';}?>
	<form id="vesselmaster"  class="form-horizontal"  name="vesselmaster" method="post" enctype="multipart/form-data" action="vesselmaster.php">

<div align="right">
	<a id="btn-search" href="vesselmaster_ss.php" class="btn btn-primary">Search&nbsp;<i class="fa fa-search"></i></a>&nbsp;&nbsp;
	<?php if($_SESSION['FORMTRANMODE'] <> "VIEW"){echo '<button id="btn-save" class="btn btn-success">Save&nbsp;<i class="fa fa-save"></i></button>';}else{echo "You are in view mode";}
		if($_SESSION["FORMTRANMODE"] <> "NEW"){echo '<a id="btn-login" class="btn btn-default" href="'.$_SESSION["ENTRYPAGE"].'" >New&nbsp;<i class="fa fa-pencil"></i></a>';}
	?>
</div>

	<ul id = "vesselmaster_Tab"  class = "nav nav-tabs">
	<li class = "active"><a href = "#vesseldetail_Tab" data-toggle = "tab">Vessel Detail</a></li>
	</ul>
	<div id = "vesselmaster_TabContent" class = "tab-content">
	<div class = "tab-pane fade in active" id = "vesseldetail_Tab"><br>
	<input type="hidden" id="vm_tabreckey" name="vm_tabreckey" value=<?php echo !empty($vm_tabreckey)?$vm_tabreckey:"";?>>
	<input type="hidden" id="sys_co_code" name="sys_co_code" value=<?php echo !empty($sys_co_code)?$sys_co_code:"";?>>


	<div class="col-md-6 first">

	<div class="form-group <?php echo !empty($vm_code_Error)?'error':'';?>">

	<label for="Vessel Code" id="label_vm_code" class="col-md-4 control-label">Vessel Code <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="vm_code" id="vm_code" class="form-control" required  onchange="check_vessel();" style="width:60px" maxlength="4" value="<?php echo !empty($vm_code)?$vm_code:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($vm_name_Error)?'error':'';?>">

	<label for="Vessel Name" id="label_vm_name" class="col-md-4 control-label">Vessel Name <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="vm_name" id="vm_name" class="form-control" required   style="width:150px" maxlength="40" value="<?php echo !empty($vm_name)?$vm_name:'';?>" />
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

	function check_vessel(){
		var jsvar_vm_code =  document.getElementById('vm_code').value;
		var valuetoPHP = 'datalistfor=vm_code&jsvar_vm_code=' + jsvar_vm_code;

		$.ajax({
			type: "POST",
			url: "vesselmaster_jsajax.php",
			data: valuetoPHP,
			cache: false,
			success: function(responseResult){
				if (responseResult != 0){
					alert("This is already exists, can not be duplicate");
					document.getElementById('vm_code').value="";
					document.vesselmaster.vm_code.focus();}
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
