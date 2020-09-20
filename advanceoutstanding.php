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
require "dist/lib/lib_advanceoutstanding.php";
if (empty($_POST)) {getlist_gm_badge_no();}

$gm_badge_no_list = $_SESSION["Gm_Badge_No_list"];

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
		if (advanceoutstanding_insupddb()=="SUCCESS"){
			$_SESSION["FORMTRANMODE"] = "VIEW";
			$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Advance Outstanding";
			$_SESSION["SEARCHPAGE"]="advanceoutstanding_ss.php";

			if (isset($_SESSION["Gm_Badge_No_list"])){
				unset($_SESSION["Gm_Badge_No_list"]);
			}

			if (isset($_SESSION["Sys_Co_Code_list"])){
				unset($_SESSION["Sys_Co_Code_list"]);
			}
			header("location:savemessage.php");
		}
	}else{$_SESSION['FORMTRANMODE'] = 'NEW';}
}
	if($_SESSION['FORMTRANMODE'] <> "NEW"){getdata_forviewedit();}

	if (!isset($ao_date)){$ao_date = null;}
	if ($ao_date != null) { $dsp_ao_date=date('d-m-Y',strtotime($ao_date));}else{$dsp_ao_date="";}
?>

<?php include "dist/inc/loginheader.php";
include "dist/inc/leftsidemenu.php";
?>
<div class="content-wrapper">
<section class="content">
<h4>Advance Outstanding</h4>
<div class="row">
<section class="col-lg-13">
<section class="content-header">
<div class="box box-primary">
<div class="box-body">

		<?php if(!empty($errmsg)){echo '<p class="error" align="justify">'.$errmsg.'</p>';}?>
	<form id="advanceoutstanding"  class="form-horizontal"  name="advanceoutstanding" method="post" enctype="multipart/form-data" action="advanceoutstanding.php">

<div align="right">
	<a id="btn-search" href="advanceoutstanding_ss.php" class="btn btn-primary">Search&nbsp;<i class="fa fa-search"></i></a>&nbsp;&nbsp;
	<?php if($_SESSION['FORMTRANMODE'] <> "VIEW"){echo '<button id="btn-save" class="btn btn-success">Save&nbsp;<i class="fa fa-save"></i></button>';}else{echo "You are in view mode";}
		if($_SESSION["FORMTRANMODE"] <> "NEW"){echo '<a id="btn-login" class="btn btn-default" href="'.$_SESSION["ENTRYPAGE"].'" >New&nbsp;<i class="fa fa-pencil"></i></a>';}
	?>
</div>

	<!-- for date picker if any date field -->
	<script type="text/javascript">
		$(function () {
			var dspdt=<?php echo json_encode($dsp_ao_date);?>;
			$("#dtpik_ao_date").datepicker({autoclose: true, todayHighlight: true}).datepicker('update', dspdt);;
		});
	</script>

	<ul id = "advanceoutstanding_Tab"  class = "nav nav-tabs">
	<li class = "active"><a href = "#advanceoutstanding_Tab" data-toggle = "tab">Advance Outstanding</a></li>
	</ul>
	<div id = "advanceoutstanding_TabContent" class = "tab-content">
	<div class = "tab-pane fade in active" id = "advanceoutstanding_Tab"><br>
	<input type="hidden" id="ao_tabreckey" name="ao_tabreckey" value=<?php echo !empty($ao_tabreckey)?$ao_tabreckey:"";?>>


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

	<div class="form-group <?php echo !empty($gm_badge_no_Error)?'error':'';?>">

	<label for="Member ID" id="label_gm_badge_no" class="col-md-4 control-label">Member ID <font color="red">*</font></label>
	<div class="col-md-7">
	<?php
	$gm_badge_no_selectedvalue = !empty($gm_badge_no)?$gm_badge_no:"";
	$gm_badge_no_selectbox = '<select " name="gm_badge_no" id="gm_badge_no" class="form-control" required  ><option value=""></option>';
	foreach ($gm_badge_no_list as $row):
		$gm_badge_no_value = $row["gm_badge_no"];
		$gm_badge_no_desc = $row["gm_name"];
		$gm_badge_no_selected = ($gm_badge_no_selectedvalue == $gm_badge_no_value)?" selected ":"";
		$gm_badge_no_selectbox = $gm_badge_no_selectbox .'<option value="'.$gm_badge_no_value.'" '.$gm_badge_no_selected.'>'.$gm_badge_no_desc.'</option>';
	endforeach;
	$gm_badge_no_selectbox .= "</select>";
	echo $gm_badge_no_selectbox;?>
	</div>

	</div>

	<div class="form-group <?php echo !empty($ao_date_Error)?'error':'';?>">

	<label for="Advance Date" id="label_ao_date" class="col-md-4 control-label">Advance Date <font color="red">*</font></label>
	<div class="col-md-7">
	<div id="dtpik_ao_date" class="input-group date" data-date-format="dd-M-yyyy" style="width:160px">
		 <input class="form-control" type="text" readonly name="dsp_ao_date"/>
		 <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
	</div>
	</div>

	</div>

	<div class="form-group <?php echo !empty($ao_totadv_Error)?'error':'';?>">

	<label for="Total Advance" id="label_ao_totadv" class="col-md-4 control-label">Total Advance <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="number"  min="0.00" max="9999999999999.00" step="0.01"  name="ao_totadv" id="ao_totadv" class="form-control" required readonly   style="width:150px" maxlength="20" value="<?php echo !empty($ao_totadv)?$ao_totadv:0;?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($ao_totrecoverd_Error)?'error':'';?>">

	<label for="Total Recoverd as of date" id="label_ao_totrecoverd" class="col-md-4 control-label">Total Recoverd as of date <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="number"  min="0.00" max="9999999999999.00" step="0.01"  name="ao_totrecoverd" id="ao_totrecoverd" class="form-control" required readonly   style="width:150px" maxlength="20" value="<?php echo !empty($ao_totrecoverd)?$ao_totrecoverd:0;?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($ao_balance_amt_Error)?'error':'';?>">

	<label for="Balance as of date" id="label_ao_balance_amt" class="col-md-4 control-label">Balance as of date <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="number"  min="0.00" max="9999999999999.00" step="0.01"  name="ao_balance_amt" id="ao_balance_amt" class="form-control" required   style="width:150px" maxlength="20" value="<?php echo !empty($ao_balance_amt)?$ao_balance_amt:0;?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($ao_recover_month_Error)?'error':'';?>">

	<label for="Number of months to recover" id="label_ao_recover_month" class="col-md-4 control-label">Number of months to recover <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="ao_recover_month" id="ao_recover_month" class="form-control" required  onchange="calc_recov_Amount();" style="width:100px" maxlength="2" value="<?php echo !empty($ao_recover_month)?$ao_recover_month:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($ao_recover_amt_pm_Error)?'error':'';?>">

	<label for="Amount to recover per month" id="label_ao_recover_amt_pm" class="col-md-4 control-label">Amount to recover per month <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="number"  min="0.00" max="9999999999999.00" step="0.01"  name="ao_recover_amt_pm" id="ao_recover_amt_pm" class="form-control" required   style="width:150px" maxlength="20" value="<?php echo !empty($ao_recover_amt_pm)?$ao_recover_amt_pm:0;?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($ao_process_schedule_Error)?'error':'';?>">

	<label for="Schedule Deduction" id="label_ao_process_schedule" class="col-md-4 control-label">Schedule Deduction</label>
	<div class="col-md-7">
	<select  name="ao_process_schedule" id="ao_process_schedule" class="form-control"   >
		<option value="YES" <?php echo (!empty($ao_process_schedule)&&($ao_process_schedule=="YES"))?'selected="selected"':'';?>>YES</option>
		<option value="NO" <?php echo (!empty($ao_process_schedule)&&($ao_process_schedule=="NO"))?'selected="selected"':'';?>>NO</option>
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

	<script type="text/javascript">

	function calc_recov_Amount(){
		var mem_ao_amt =  document.getElementById('ao_amt').value;
		var mem_ao_recover_month =  document.getElementById('ao_recover_month').value;
		var mem_ao_recover_amt_pm = ( mem_ao_amt / mem_ao_recover_month);
		document.querySelector('#ao_recover_amt_pm').value=mem_ao_recover_amt_pm;

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
