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
require "dist/lib/lib_salarymetadata.php";

$errmsg = null;
$successmsg = null;
$OKtoSaveIntoDB = true;
$v_nextformname = "";
if(!isset($_SESSION['FORMTRANMODE'])){$_SESSION["FORMTRANMODE"] = "NEW";};
if (!empty($_POST)) {
	set_formpostvalue();
	validate_formvalue();

	if($OKtoSaveIntoDB){
		if (salarymetadata_insupddb()=="SUCCESS"){
			$_SESSION["FORMTRANMODE"] = "VIEW";
			$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Salary Meta Data";
			$_SESSION["SEARCHPAGE"]="salarymetadata_ss.php";
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
<h4>Salary Meta Data</h4>
<div class="row">
<section class="col-lg-13">
<section class="content-header">
<div class="box box-primary">
<div class="box-body">

		<?php if(!empty($errmsg)){echo '<p class="error" align="justify">'.$errmsg.'</p>';}?>
	<form id="salarymetadata"  class="form-horizontal"  name="salarymetadata" method="post" enctype="multipart/form-data" action="salarymetadata.php">

<div align="right">
	<a id="btn-search" href="salarymetadata_ss.php" class="btn btn-primary">Search&nbsp;<i class="fa fa-search"></i></a>&nbsp;&nbsp;
	<?php if($_SESSION['FORMTRANMODE'] <> "VIEW"){echo '<button id="btn-save" class="btn btn-success">Save&nbsp;<i class="fa fa-save"></i></button>';}else{echo "You are in view mode";}
		if($_SESSION["FORMTRANMODE"] <> "NEW"){echo '<a id="btn-login" class="btn btn-default" href="'.$_SESSION["ENTRYPAGE"].'" >New&nbsp;<i class="fa fa-pencil"></i></a>';}
	?>
</div>

	<ul id = "salarymetadata_Tab"  class = "nav nav-tabs">
	<li class = "active"><a href = "#salarymetadata_Tab" data-toggle = "tab">Salary Meta Data</a></li>
	</ul>
	<div id = "salarymetadata_TabContent" class = "tab-content">
	<div class = "tab-pane fade in active" id = "salarymetadata_Tab"><br>
	<input type="hidden" id="smd_tabreckey" name="smd_tabreckey" value=<?php echo !empty($smd_tabreckey)?$smd_tabreckey:"";?>>


	<div class="col-md-6 first">

	<div class="form-group <?php echo !empty($smd_fld_nm_Error)?'error':'';?>">

	<label for="Field Name" id="label_smd_fld_nm" class="col-md-4 control-label">Field Name <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="smd_fld_nm" id="smd_fld_nm" class="form-control" required   style="width:150px" maxlength="30" value="<?php echo !empty($smd_fld_nm)?$smd_fld_nm:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($smd_fld_desc_Error)?'error':'';?>">

	<label for="Field Description" id="label_smd_fld_desc" class="col-md-4 control-label">Field Description <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="smd_fld_desc" id="smd_fld_desc" class="form-control" required   style="width:150px" maxlength="30" value="<?php echo !empty($smd_fld_desc)?$smd_fld_desc:'';?>" />
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
</div>
</div>
</section>
</section>
</div>
<div class="clearfix"></div><br>
</section>
</div>
<?php include "../general/dist/inc/footercontent.php";?>
