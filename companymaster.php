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
require "dist/lib/lib_companymaster.php";

$errmsg = null;
$successmsg = null;
$OKtoSaveIntoDB = true;
$v_nextformname = "";
if(!isset($_SESSION['FORMTRANMODE'])){$_SESSION["FORMTRANMODE"] = "NEW";};
if (!empty($_POST)) {
	set_formpostvalue();
	validate_formvalue();

	if($OKtoSaveIntoDB){
		if (companymaster_insupddb()=="SUCCESS"){
			$_SESSION["FORMTRANMODE"] = "VIEW";
			$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Company Master";
			$_SESSION["SEARCHPAGE"]="companymaster_ss.php";
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
<h4>Company Master</h4>
<div class="row">
<section class="col-lg-13">
<section class="content-header">
<div class="box box-primary">
<div class="box-body">

		<?php if(!empty($errmsg)){echo '<p class="error" align="justify">'.$errmsg.'</p>';}?>
	<form id="companymaster"  class="form-horizontal"  name="companymaster" method="post" enctype="multipart/form-data" action="companymaster.php">

<div align="right">
	<a id="btn-search" href="companymaster_ss.php" class="btn btn-primary">Search&nbsp;<i class="fa fa-search"></i></a>&nbsp;&nbsp;
	<?php if($_SESSION['FORMTRANMODE'] <> "VIEW"){echo '<button id="btn-save" class="btn btn-success">Save&nbsp;<i class="fa fa-save"></i></button>';}else{echo "You are in view mode";}
		if($_SESSION["FORMTRANMODE"] <> "NEW"){echo '<a id="btn-login" class="btn btn-default" href="'.$_SESSION["ENTRYPAGE"].'" >New&nbsp;<i class="fa fa-pencil"></i></a>';}
	?>
</div>

	<ul id = "companymaster_Tab"  class = "nav nav-tabs">
	<li class = "active"><a href = "#companyinfo_Tab" data-toggle = "tab">Company Info</a></li>
	</ul>
	<div id = "companymaster_TabContent" class = "tab-content">
	<div class = "tab-pane fade in active" id = "companyinfo_Tab"><br>
	<input type="hidden" id="sys_co_nbr" name="sys_co_nbr" value=<?php echo !empty($sys_co_nbr)?$sys_co_nbr:"";?>>


	<div class="col-md-6 first">

	<div class="form-group <?php echo !empty($sys_co_code_Error)?'error':'';?>">

	<label for="Company Code" id="label_sys_co_code" class="col-md-4 control-label">Company Code</label>
	<div class="col-md-7">
	<input type="text" name="sys_co_code" id="sys_co_code" class="smallform-control capcase"   onchange="check_compcode();" style="width:60px" maxlength="20" value="<?php echo !empty($sys_co_code)?$sys_co_code:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($sys_co_name_Error)?'error':'';?>">

	<label for="Company Name" id="label_sys_co_name" class="col-md-4 control-label">Company Name <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="sys_co_name" id="sys_co_name" class="form-control capcase" required   style="width:150px" maxlength="100" value="<?php echo !empty($sys_co_name)?$sys_co_name:'';?>" />
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

	function check_compcode(){
		var jsvar_sys_co_code =  document.getElementById('sys_co_code').value;
		var valuetoPHP = 'datalistfor=sys_co_code&jsvar_sys_co_code=' + jsvar_sys_co_code;

		$.ajax({
			type: "POST",
			url: "companymaster_jsajax.php",
			data: valuetoPHP,
			cache: false,
			success: function(responseResult){
				if (responseResult != 0){
					alert("This is already exists, can not be duplicate");
					document.getElementById('sys_co_code').value="";
					document.companymaster.sys_co_code.focus();}
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
