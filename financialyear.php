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
require "dist/lib/lib_financialyear.php";
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
		if (financialyear_insupddb()=="SUCCESS"){
			$_SESSION["FORMTRANMODE"] = "VIEW";
			$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Financial Year";
			$_SESSION["SEARCHPAGE"]="financialyear_ss.php";

			if (isset($_SESSION["Sys_Co_Code_list"])){
				unset($_SESSION["Sys_Co_Code_list"]);
			}
			header("location:savemessage.php");
		}
	}else{$_SESSION['FORMTRANMODE'] = 'NEW';}
}
	if($_SESSION['FORMTRANMODE'] <> "NEW"){getdata_forviewedit();}

	if (!isset($fy_accyearstartdt)){$fy_accyearstartdt = null;}
	if ($fy_accyearstartdt != null) { $dsp_fy_accyearstartdt=date('d-m-Y',strtotime($fy_accyearstartdt));}else{$dsp_fy_accyearstartdt="";}

	if (!isset($fy_accyearenddt)){$fy_accyearenddt = null;}
	if ($fy_accyearenddt != null) { $dsp_fy_accyearenddt=date('d-m-Y',strtotime($fy_accyearenddt));}else{$dsp_fy_accyearenddt="";}

	if (!isset($fy_trandtfrom)){$fy_trandtfrom = null;}
	if ($fy_trandtfrom != null) { $dsp_fy_trandtfrom=date('d-m-Y',strtotime($fy_trandtfrom));}else{$dsp_fy_trandtfrom="";}

	if (!isset($fy_trandtto)){$fy_trandtto = null;}
	if ($fy_trandtto != null) { $dsp_fy_trandtto=date('d-m-Y',strtotime($fy_trandtto));}else{$dsp_fy_trandtto="";}
?>

<?php include "dist/inc/loginheader.php";
include "dist/inc/leftsidemenu.php";
?>
<div class="content-wrapper">
<section class="content">
<h4>Financial Year</h4>
<div class="row">
<section class="col-lg-13">
<section class="content-header">
<div class="box box-primary">
<div class="box-body">

		<?php if(!empty($errmsg)){echo '<p class="error" align="justify">'.$errmsg.'</p>';}?>
	<form id="financialyear"  class="form-horizontal"  name="financialyear" method="post" enctype="multipart/form-data" action="financialyear.php">

<div align="right">
	<a id="btn-search" href="financialyear_ss.php" class="btn btn-primary">Search&nbsp;<i class="fa fa-search"></i></a>&nbsp;&nbsp;
	<?php if($_SESSION['FORMTRANMODE'] <> "VIEW"){echo '<button id="btn-save" class="btn btn-success">Save&nbsp;<i class="fa fa-save"></i></button>';}else{echo "You are in view mode";}
		if($_SESSION["FORMTRANMODE"] <> "NEW"){echo '<a id="btn-login" class="btn btn-default" href="'.$_SESSION["ENTRYPAGE"].'" >New&nbsp;<i class="fa fa-pencil"></i></a>';}
	?>
</div>

	<!-- for date picker if any date field -->
	<script type="text/javascript">
		$(function () {
			var dspdt=<?php echo json_encode($dsp_fy_accyearstartdt);?>;
			$("#dtpik_fy_accyearstartdt").datepicker({autoclose: true, todayHighlight: true}).datepicker('update', dspdt);;
			var dspdt=<?php echo json_encode($dsp_fy_accyearenddt);?>;
			$("#dtpik_fy_accyearenddt").datepicker({autoclose: true, todayHighlight: true}).datepicker('update', dspdt);;
			var dspdt=<?php echo json_encode($dsp_fy_trandtfrom);?>;
			$("#dtpik_fy_trandtfrom").datepicker({autoclose: true, todayHighlight: true}).datepicker('update', dspdt);;
			var dspdt=<?php echo json_encode($dsp_fy_trandtto);?>;
			$("#dtpik_fy_trandtto").datepicker({autoclose: true, todayHighlight: true}).datepicker('update', dspdt);;
		});
	</script>

	<ul id = "financialyear_Tab"  class = "nav nav-tabs">
	<li class = "active"><a href = "#financialyear_Tab" data-toggle = "tab">Financial Year</a></li>
	</ul>
	<div id = "financialyear_TabContent" class = "tab-content">
	<div class = "tab-pane fade in active" id = "financialyear_Tab"><br>
	<input type="hidden" id="fy_tabreckey" name="fy_tabreckey" value=<?php echo !empty($fy_tabreckey)?$fy_tabreckey:"";?>>


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

	<div class="form-group <?php echo !empty($fy_accyear_Error)?'error':'';?>">

	<label for="Accounting Year" id="label_fy_accyear" class="col-md-4 control-label">Accounting Year <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="fy_accyear" id="fy_accyear" class="form-control" required   style="width:150px" maxlength="10" value="<?php echo !empty($fy_accyear)?$fy_accyear:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($fy_accyearstartdt_Error)?'error':'';?>">

	<label for="Account Year Start Date" id="label_fy_accyearstartdt" class="col-md-4 control-label">Account Year Start Date <font color="red">*</font></label>
	<div class="col-md-7">
	<div id="dtpik_fy_accyearstartdt" class="input-group date" data-date-format="dd-M-yyyy" style="width:160px">
		 <input class="form-control" type="text" readonly name="dsp_fy_accyearstartdt"/>
		 <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
	</div>
	</div>

	</div>

	<div class="form-group <?php echo !empty($fy_accyearenddt_Error)?'error':'';?>">

	<label for="Account Year End Date" id="label_fy_accyearenddt" class="col-md-4 control-label">Account Year End Date <font color="red">*</font></label>
	<div class="col-md-7">
	<div id="dtpik_fy_accyearenddt" class="input-group date" data-date-format="dd-M-yyyy" style="width:160px">
		 <input class="form-control" type="text" readonly name="dsp_fy_accyearenddt"/>
		 <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
	</div>
	</div>

	</div>

	<div class="form-group <?php echo !empty($fy_year_Error)?'error':'';?>">

	<label for="Year" id="label_fy_year" class="col-md-4 control-label">Year <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="fy_year" id="fy_year" class="form-control" required   style="width:150px" maxlength="4" value="<?php echo !empty($fy_year)?$fy_year:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($fy_month_Error)?'error':'';?>">

	<label for="Month" id="label_fy_month" class="col-md-4 control-label">Month <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="fy_month" id="fy_month" class="form-control" required   style="width:150px" maxlength="2" value="<?php echo !empty($fy_month)?$fy_month:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($fy_trandtfrom_Error)?'error':'';?>">

	<label for="Transaction Date From" id="label_fy_trandtfrom" class="col-md-4 control-label">Transaction Date From <font color="red">*</font></label>
	<div class="col-md-7">
	<div id="dtpik_fy_trandtfrom" class="input-group date" data-date-format="dd-M-yyyy" style="width:160px">
		 <input class="form-control" type="text" readonly name="dsp_fy_trandtfrom"/>
		 <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
	</div>
	</div>

	</div>

	<div class="form-group <?php echo !empty($fy_trandtto_Error)?'error':'';?>">

	<label for="Transaction Date To" id="label_fy_trandtto" class="col-md-4 control-label">Transaction Date To <font color="red">*</font></label>
	<div class="col-md-7">
	<div id="dtpik_fy_trandtto" class="input-group date" data-date-format="dd-M-yyyy" style="width:160px">
		 <input class="form-control" type="text" readonly name="dsp_fy_trandtto"/>
		 <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
	</div>
	</div>

	</div>

	<div class="form-group <?php echo !empty($fy_status_Error)?'error':'';?>">

	<label for="Account Month Status" id="label_fy_status" class="col-md-4 control-label">Account Month Status</label>
	<div class="col-md-7">
	<select  name="fy_status" id="fy_status" class="form-control"   >
		<option value="OPEN" <?php echo (!empty($fy_status)&&($fy_status=="OPEN"))?'selected="selected"':'';?>>OPEN</option>
		<option value="CLOSE" <?php echo (!empty($fy_status)&&($fy_status=="CLOSE"))?'selected="selected"':'';?>>CLOSE</option>
	</select>
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
