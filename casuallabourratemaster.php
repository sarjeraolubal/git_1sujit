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
require "dist/lib/lib_casuallabourratemaster.php";

$errmsg = null;
$successmsg = null;
$OKtoSaveIntoDB = true;
$v_nextformname = "";
if(!isset($_SESSION['FORMTRANMODE'])){$_SESSION["FORMTRANMODE"] = "NEW";};
if (!empty($_POST)) {
	set_formpostvalue();
	validate_formvalue();

	if($OKtoSaveIntoDB){
		if (casuallabourratemaster_insupddb()=="SUCCESS"){
			$_SESSION["FORMTRANMODE"] = "VIEW";
			$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Casual Labour Rate Master";
			$_SESSION["SEARCHPAGE"]="casuallabourratemaster_ss.php";
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
<h4>Casual Labour Rate Master</h4>
<div class="row">
<section class="col-lg-13">
<section class="content-header">
<div class="box box-primary">
<div class="box-body">

		<?php if(!empty($errmsg)){echo '<p class="error" align="justify">'.$errmsg.'</p>';}?>
	<form id="casuallabourratemaster"  class="form-horizontal"  name="casuallabourratemaster" method="post" enctype="multipart/form-data" action="casuallabourratemaster.php">

<div align="right">
	<a id="btn-search" href="casuallabourratemaster_ss.php" class="btn btn-primary">Search&nbsp;<i class="fa fa-search"></i></a>&nbsp;&nbsp;
	<?php if($_SESSION['FORMTRANMODE'] <> "VIEW"){echo '<button id="btn-save" class="btn btn-success">Save&nbsp;<i class="fa fa-save"></i></button>';}else{echo "You are in view mode";}
		if($_SESSION["FORMTRANMODE"] <> "NEW"){echo '<a id="btn-login" class="btn btn-default" href="'.$_SESSION["ENTRYPAGE"].'" >New&nbsp;<i class="fa fa-pencil"></i></a>';}
	?>
</div>

	<ul id = "casuallabourratemaster_Tab"  class = "nav nav-tabs">
	<li class = "active"><a href = "#labourrate_Tab" data-toggle = "tab">Labour Rate</a></li>
	</ul>
	<div id = "casuallabourratemaster_TabContent" class = "tab-content">
	<div class = "tab-pane fade in active" id = "labourrate_Tab"><br>
	<input type="hidden" id="clrm_tabreckey" name="clrm_tabreckey" value=<?php echo !empty($clrm_tabreckey)?$clrm_tabreckey:"";?>>
	<input type="hidden" id="sys_co_code" name="sys_co_code" value=<?php echo !empty($sys_co_code)?$sys_co_code:"";?>>


	<div class="col-md-6 first">

	<div class="form-group <?php echo !empty($clrm_code_Error)?'error':'';?>">

	<label for="Code" id="label_clrm_code" class="col-md-4 control-label">Code <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="clrm_code" id="clrm_code" class="form-control" required  onchange="check_labcode();" style="width:60px" maxlength="4" value="<?php echo !empty($clrm_code)?$clrm_code:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($clrm_desc_Error)?'error':'';?>">

	<label for="Description" id="label_clrm_desc" class="col-md-4 control-label">Description <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="clrm_desc" id="clrm_desc" class="form-control" required   style="width:150px" maxlength="40" value="<?php echo !empty($clrm_desc)?$clrm_desc:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($clrm_rate_Error)?'error':'';?>">

	<label for="Rate" id="label_clrm_rate" class="col-md-4 control-label">Rate</label>
	<div class="col-md-7">
	<input type="number"  name="clrm_rate" id="clrm_rate" class="form-control"    style="width:60px" maxlength="20" value="<?php echo !empty($clrm_rate)?$clrm_rate:0;?>" />
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

	function check_labcode(){
		var jsvar_clrm_code =  document.getElementById('clrm_code').value;
		var valuetoPHP = 'datalistfor=clrm_code&jsvar_clrm_code=' + jsvar_clrm_code;

		$.ajax({
			type: "POST",
			url: "casuallabourratemaster_jsajax.php",
			data: valuetoPHP,
			cache: false,
			success: function(responseResult){
				if (responseResult != 0){
					alert("This is already exists, can not be duplicate");
					document.getElementById('clrm_code').value="";
					document.casuallabourratemaster.clrm_code.focus();}
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
