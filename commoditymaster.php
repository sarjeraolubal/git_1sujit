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
require "dist/lib/lib_commoditymaster.php";

$errmsg = null;
$successmsg = null;
$OKtoSaveIntoDB = true;
$v_nextformname = "";
if(!isset($_SESSION['FORMTRANMODE'])){$_SESSION["FORMTRANMODE"] = "NEW";};
if (!empty($_POST)) {
	set_formpostvalue();
	validate_formvalue();

	if($OKtoSaveIntoDB){
		if (commoditymaster_insupddb()=="SUCCESS"){
			$_SESSION["FORMTRANMODE"] = "VIEW";
			$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Commodity Master";
			$_SESSION["SEARCHPAGE"]="commoditymaster_ss.php";
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
<h4>Commodity Master</h4>
<div class="row">
<section class="col-lg-13">
<section class="content-header">
<div class="box box-primary">
<div class="box-body">

		<?php if(!empty($errmsg)){echo '<p class="error" align="justify">'.$errmsg.'</p>';}?>
	<form id="commoditymaster"  class="form-horizontal"  name="commoditymaster" method="post" enctype="multipart/form-data" action="commoditymaster.php">

<div align="right">
	<a id="btn-search" href="commoditymaster_ss.php" class="btn btn-primary">Search&nbsp;<i class="fa fa-search"></i></a>&nbsp;&nbsp;
	<?php if($_SESSION['FORMTRANMODE'] <> "VIEW"){echo '<button id="btn-save" class="btn btn-success">Save&nbsp;<i class="fa fa-save"></i></button>';}else{echo "You are in view mode";}
		if($_SESSION["FORMTRANMODE"] <> "NEW"){echo '<a id="btn-login" class="btn btn-default" href="'.$_SESSION["ENTRYPAGE"].'" >New&nbsp;<i class="fa fa-pencil"></i></a>';}
	?>
</div>

	<ul id = "commoditymaster_Tab"  class = "nav nav-tabs">
	<li class = "active"><a href = "#commodityinfo_Tab" data-toggle = "tab">Commodity Info</a></li>
	</ul>
	<div id = "commoditymaster_TabContent" class = "tab-content">
	<div class = "tab-pane fade in active" id = "commodityinfo_Tab"><br>
	<input type="hidden" id="cm_tabreckey" name="cm_tabreckey" value=<?php echo !empty($cm_tabreckey)?$cm_tabreckey:"";?>>
	<input type="hidden" id="sys_co_code" name="sys_co_code" value=<?php echo !empty($sys_co_code)?$sys_co_code:"";?>>


	<div class="col-md-6 first">

	<div class="form-group <?php echo !empty($cm_code_Error)?'error':'';?>">

	<label for="Commodity Code" id="label_cm_code" class="col-md-4 control-label">Commodity Code <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="cm_code" id="cm_code" class="form-control" required  onchange="check_commocode();" style="width:150px" maxlength="4" value="<?php echo !empty($cm_code)?$cm_code:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($cm_name_Error)?'error':'';?>">

	<label for="Commodity Name" id="label_cm_name" class="col-md-4 control-label">Commodity Name <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="cm_name" id="cm_name" class="form-control" required   style="width:150px" maxlength="40" value="<?php echo !empty($cm_name)?$cm_name:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($cm_price_Error)?'error':'';?>">

	<label for="Commodity Rate" id="label_cm_price" class="col-md-4 control-label">Commodity Rate</label>
	<div class="col-md-7">
	<input type="number"  min="0.00" max="9999999999999.00" step="0.01"  name="cm_price" id="cm_price" class="form-control"    style="width:60px" maxlength="20" value="<?php echo !empty($cm_price)?$cm_price:0;?>" />
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

	function check_commocode(){
		var jsvar_cm_code =  document.getElementById('cm_code').value;
		var valuetoPHP = 'datalistfor=cm_code&jsvar_cm_code=' + jsvar_cm_code;

		$.ajax({
			type: "POST",
			url: "commoditymaster_jsajax.php",
			data: valuetoPHP,
			cache: false,
			success: function(responseResult){
				if (responseResult != 0){
					alert("This is already exists, can not be duplicate");
					document.getElementById('cm_code').value="";
					document.commoditymaster.cm_code.focus();}
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
