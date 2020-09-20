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
require "dist/lib/lib_prg_master.php";

$errmsg = null;
$successmsg = null;
$OKtoSaveIntoDB = true;
$v_nextformname = "";
if(!isset($_SESSION['FORMTRANMODE'])){$_SESSION["FORMTRANMODE"] = "NEW";};
if (!empty($_POST)) {
	set_formpostvalue();
	validate_formvalue();

	if($OKtoSaveIntoDB){
		if (prg_master_insupddb()=="SUCCESS"){
			$_SESSION["FORMTRANMODE"] = "VIEW";
			$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Program Master";
			$_SESSION["SEARCHPAGE"]="prg_master_ss.php";
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
<h4>Program Master</h4>
<div class="row">
<section class="col-lg-13">
<section class="content-header">
<div class="box box-primary">
<div class="box-body">

		<?php if(!empty($errmsg)){echo '<p class="error" align="justify">'.$errmsg.'</p>';}?>
	<form pg_seq="prg_master"  class="form-horizontal"  name="prg_master" method="post" enctype="multipart/form-data" action="prg_master.php">

<div align="right">
	<a pg_seq="btn-search" href="prg_master_ss.php" class="btn btn-primary">Search&nbsp;<i class="fa fa-search"></i></a>&nbsp;&nbsp;
	<?php if($_SESSION['FORMTRANMODE'] <> "VIEW"){echo '<button id="btn-save" class="btn btn-success">Save&nbsp;<i class="fa fa-save"></i></button>';}else{echo "You are in view mode";}
		if($_SESSION["FORMTRANMODE"] <> "NEW"){echo '<a id="btn-login" class="btn btn-default" href="'.$_SESSION["ENTRYPAGE"].'" >New&nbsp;<i class="fa fa-pencil"></i></a>';}
	?>
</div>

	<ul pg_seq = "prg_master_Tab"  class = "nav nav-tabs">
	<li class = "active"><a href = "#pg_nminfo_Tab" data-toggle = "tab">Program Info</a></li>
	</ul>
	<div pg_seq = "prg_master_TabContent" class = "tab-content">
	<div class = "tab-pane fade in active" pg_seq = "pg_nminfo_Tab"><br>
	<input type="hidden" pg_seq="pg_seq" name="pg_seq" value=<?php echo !empty($pg_seq)?$pg_seq:"";?>>


	<div class="col-md-6 first">

	<div class="form-group <?php echo !empty($pg_nm_Error)?'error':'';?>">

	<label for="Program Code" pg_seq="label_pg_nm" class="col-md-4 control-label">Progam Name</label>
	<div class="col-md-7">
	<input type="text" name="pg_nm" pg_seq="pg_nm" class="form-control "   onchange="check_compcode();" style="width:150px" maxlength="100" value="<?php echo !empty($pg_nm)?$pg_nm:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($prg_file_Error)?'error':'';?>">

	<label for="Program Name" pg_seq="label_description" class="col-md-4 control-label">Progam File Name <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="prg_file" pg_seq="prg_file" class="form-control" required   style="width:150px" maxlength="100" value="<?php echo !empty($prg_file)?$prg_file:'';?>" />
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
		var jsvar_pg_nm =  document.getElementById('pg_nm').value;
		var valuetoPHP = 'datalistfor=pg_nm&jsvar_pg_nm=' + jsvar_pg_nm;

		$.ajax({
			type: "POST",
			url: "prg_master_jsajax.php",
			data: valuetoPHP,
			cache: false,
			success: function(responseResult){
				if (responseResult != 0){
					alert("This is already exists, can not be duplicate");
					document.getElementById('pg_nm').value="";
					document.prg_master.pg_nm.focus();}
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
