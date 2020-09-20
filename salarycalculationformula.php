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
require "dist/lib/lib_salarycalculationformula.php";
if (empty($_POST)) {getlist_sce_ff();}

$sce_ff_list = $_SESSION["SCE_FF_list"];

if (empty($_POST)) {getlist_sys_co_code();}

$sys_co_code_list = $_SESSION["Sys_Co_Code_list"];


$errmsg = null;
$successmsg = null;
$OKtoSaveIntoDB = true;
$v_nextformname = "";
if(!isset($_SESSION['FORMTRANMODE'])){$_SESSION["FORMTRANMODE"] = "NEW";};
if (!empty($_POST)) {
	set_formpostvalue();
	validate_formvalue();

	if($OKtoSaveIntoDB){
		if (salarycalculationformula_insupddb()=="SUCCESS"){
			$_SESSION["FORMTRANMODE"] = "VIEW";
			$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Salary Calculation Formula";
			$_SESSION["SEARCHPAGE"]="salarycalculationformula_ss.php";

			if (isset($_SESSION["SCE_FF_list"])){
				unset($_SESSION["SCE_FF_list"]);
			}

			if (isset($_SESSION["Sys_Co_Code_list"])){
				unset($_SESSION["Sys_Co_Code_list"]);
			}
			header("location:savemessage.php");
		}
	}else{$_SESSION['FORMTRANMODE'] = 'NEW';}
}
	if($_SESSION['FORMTRANMODE'] <> "NEW"){getdata_forviewedit();}

	if (!isset($sce_eff_dt)){$sce_eff_dt = null;}
	if ($sce_eff_dt != null) { $dsp_sce_eff_dt=date('d-m-Y',strtotime($sce_eff_dt));}else{$dsp_sce_eff_dt="";}
?>

<?php include "dist/inc/loginheader.php";
include "dist/inc/leftsidemenu.php";
?>
<div class="content-wrapper">
<section class="content">
<h4>Salary Calculation Formula</h4>
<div class="row">
<section class="col-lg-13">
<section class="content-header">
<div class="box box-primary">
<div class="box-body">

		<?php if(!empty($errmsg)){echo '<p class="error" align="justify">'.$errmsg.'</p>';}?>
	<form id="salarycalculationformula"  class="form-horizontal"  name="salarycalculationformula" method="post" enctype="multipart/form-data" action="salarycalculationformula.php">

<div align="right">
	<a id="btn-search" href="salarycalculationformula_ss.php" class="btn btn-primary">Search&nbsp;<i class="fa fa-search"></i></a>&nbsp;&nbsp;
	<?php if($_SESSION['FORMTRANMODE'] <> "VIEW"){echo '<button id="btn-save" class="btn btn-success">Save&nbsp;<i class="fa fa-save"></i></button>';}else{echo "You are in view mode";}
		if($_SESSION["FORMTRANMODE"] <> "NEW"){echo '<a id="btn-login" class="btn btn-default" href="'.$_SESSION["ENTRYPAGE"].'" >New&nbsp;<i class="fa fa-pencil"></i></a>';}
	?>
</div>

	<!-- for date picker if any date field -->
	<script type="text/javascript">
		$(function () {
			var dspdt=<?php echo json_encode($dsp_sce_eff_dt);?>;
			$("#dtpik_sce_eff_dt").datepicker({autoclose: true, todayHighlight: true}).datepicker('update', dspdt);;
		});
	</script>

	<ul id = "salarycalculationformula_Tab"  class = "nav nav-tabs">
	<li class = "active"><a href = "#salarycalculationformula_Tab" data-toggle = "tab">Salary Calculation Formula</a></li>
	</ul>
	<div id = "salarycalculationformula_TabContent" class = "tab-content">
	<div class = "tab-pane fade in active" id = "salarycalculationformula_Tab"><br>
	<input type="hidden" id="sce_tabreckey" name="sce_tabreckey" value=<?php echo !empty($sce_tabreckey)?$sce_tabreckey:"";?>>


	<div class="col-md-6 first">

	<div class="form-group <?php echo !empty($sys_co_code_Error)?'error':'';?>">

	<label for="Company" id="label_sys_co_code" class="col-md-4 control-label">Company <font color="red">*</font></label>
	<div class="col-md-7">
	<?php
	$sys_co_code_selectedvalue = !empty($sys_co_code)?$sys_co_code:"";
	$sys_co_code_selectbox = '<select " name="sys_co_code" id="sys_co_code" class="form-control" required  ><option value=""></option>';
	foreach ($sys_co_code_list as $row):
		$sys_co_code_value = $row["sys_co_code"];
		$sys_co_code_desc = $row["sys_co_name"];
		$sys_co_code_selected = ($sys_co_code_selectedvalue == $sys_co_code_value)?" selected ":"";
		$sys_co_code_selectbox = $sys_co_code_selectbox .'<option value="'.$sys_co_code_value.'" '.$sys_co_code_selected.'>'.$sys_co_code_desc.'</option>';
	endforeach;
	$sys_co_code_selectbox .= "</select>";
	echo $sys_co_code_selectbox;?>
	</div>

	</div>

	<div class="form-group <?php echo !empty($sce_eff_dt_Error)?'error':'';?>">

	<label for="Effective Date" id="label_sce_eff_dt" class="col-md-4 control-label">Effective Date <font color="red">*</font></label>
	<div class="col-md-7">
	<div id="dtpik_sce_eff_dt" class="input-group date" data-date-format="dd-M-yyyy" style="width:160px">
		 <input class="form-control" type="text" readonly name="dsp_sce_eff_dt"/>
		 <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
	</div>
	</div>

	</div>

	<div class="form-group <?php echo !empty($sce_catg_Error)?'error':'';?>">

	<label for="Add or Deduct" id="label_sce_catg" class="col-md-4 control-label">Add or Deduct <font color="red">*</font></label>
	<div class="col-md-7">
	<select  name="sce_catg" id="sce_catg" class="form-control" required  >
		<option value="ADD" <?php echo (!empty($sce_catg)&&($sce_catg=="ADD"))?'selected="selected"':'';?>>ADD</option>
		<option value="DEDUCT" <?php echo (!empty($sce_catg)&&($sce_catg=="DEDUCT"))?'selected="selected"':'';?>>DEDUCT</option>
	</select>
	</div>

	</div>

	<div class="form-group <?php echo !empty($sce_opr_Error)?'error':'';?>">

	<label for="Operator" id="label_sce_opr" class="col-md-4 control-label">Operator <font color="red">*</font></label>
	<div class="col-md-7">
	<select  name="sce_opr" id="sce_opr" class="form-control" required  >
		<option value="(" <?php echo (!empty($sce_opr)&&($sce_opr=="("))?'selected="selected"':'';?>>(</option>
		<option value="*" <?php echo (!empty($sce_opr)&&($sce_opr=="*"))?'selected="selected"':'';?>>*</option>
		<option value="+" <?php echo (!empty($sce_opr)&&($sce_opr=="+"))?'selected="selected"':'';?>>+</option>
		<option value="-" <?php echo (!empty($sce_opr)&&($sce_opr=="-"))?'selected="selected"':'';?>>-</option>
		<option value=")" <?php echo (!empty($sce_opr)&&($sce_opr==")"))?'selected="selected"':'';?>>)</option>
		<option value="%" <?php echo (!empty($sce_opr)&&($sce_opr=="%"))?'selected="selected"':'';?>>%</option>
		<option value="/" <?php echo (!empty($sce_opr)&&($sce_opr=="/"))?'selected="selected"':'';?>>/</option>
		<option value="OR" <?php echo (!empty($sce_opr)&&($sce_opr=="OR"))?'selected="selected"':'';?>>OR</option>
		<option value="AND" <?php echo (!empty($sce_opr)&&($sce_opr=="AND"))?'selected="selected"':'';?>>AND</option>
	</select>
	</div>

	</div>

	<div class="form-group <?php echo !empty($sce_ff_cons_Error)?'error':'';?>">

	<label for="Form Field or Constant Value" id="label_sce_ff_cons" class="col-md-4 control-label">Form Field or Constant Value <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="sce_ff_cons" id="sce_ff_cons" class="form-control" required   style="width:150px" maxlength="10" value="<?php echo !empty($sce_ff_cons)?$sce_ff_cons:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($sce_cons_val_Error)?'error':'';?>">

	<label for="Constant Value" id="label_sce_cons_val" class="col-md-4 control-label">Constant Value <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="sce_cons_val" id="sce_cons_val" class="form-control" required   style="width:150px" maxlength="10" value="<?php echo !empty($sce_cons_val)?$sce_cons_val:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($sce_ff_Error)?'error':'';?>">

	<label for="Form Field" id="label_sce_ff" class="col-md-4 control-label">Form Field <font color="red">*</font></label>
	<div class="col-md-7">
	<?php
	$sce_ff_selectedvalue = !empty($sce_ff)?$sce_ff:"";
	$sce_ff_selectbox = '<select " name="sce_ff" id="sce_ff" class="form-control" required  ><option value=""></option>';
	foreach ($sce_ff_list as $row):
		$sce_ff_value = $row["smd_field"];
		$sce_ff_desc = $row["smd_desc"];
		$sce_ff_selected = ($sce_ff_selectedvalue == $sce_ff_value)?" selected ":"";
		$sce_ff_selectbox = $sce_ff_selectbox .'<option value="'.$sce_ff_value.'" '.$sce_ff_selected.'>'.$sce_ff_desc.'</option>';
	endforeach;
	$sce_ff_selectbox .= "</select>";
	echo $sce_ff_selectbox;?>
	</div>

	</div>

	<div class="form-group <?php echo !empty($sce_totexpr_Error)?'error':'';?>">

	<label for="Expression" id="label_sce_totexpr" class="col-md-4 control-label">Expression <font color="red">*</font></label>
	<div class="col-md-7">
	<textarea  name="sce_totexpr" id="sce_totexpr" class="form-control" required   rows="3"><?php echo !empty($sce_totexpr)?$sce_totexpr:'';?></textarea>
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
<?php include "dist/inc/footercontent.php";?>
