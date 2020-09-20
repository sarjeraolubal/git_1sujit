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
require "dist/lib/lib_advancepayment.php";
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
		if (advancepayment_insupddb()=="SUCCESS"){
			$_SESSION["FORMTRANMODE"] = "VIEW";
			$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Advance Payment";
			$_SESSION["SEARCHPAGE"]="advancepayment_ss.php";

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

	if (!isset($am_advdate)){$am_advdate = null;}
	if ($am_advdate != null) { $dsp_am_advdate=date('d-m-Y',strtotime($am_advdate));}else{$dsp_am_advdate="";}
?>

<?php include "dist/inc/loginheader.php";
include "dist/inc/leftsidemenu.php";
?>
<div class="content-wrapper">
<section class="content">
<h4>Advance Payment</h4>
<div class="row">
<section class="col-lg-13">
<section class="content-header">
<div class="box box-primary">
<div class="box-body">

		<?php if(!empty($errmsg)){echo '<p class="error" align="justify">'.$errmsg.'</p>';}?>
	<form id="advancepayment"  class="form-horizontal"  name="advancepayment" method="post" enctype="multipart/form-data" action="advancepayment.php">

<div align="right">
	<a id="btn-search" href="advancepayment_ss.php" class="btn btn-primary">Search&nbsp;<i class="fa fa-search"></i></a>&nbsp;&nbsp;
	<?php if($_SESSION['FORMTRANMODE'] <> "VIEW"){echo '<button id="btn-save" class="btn btn-success">Save&nbsp;<i class="fa fa-save"></i></button>';}else{echo "You are in view mode";}
		if($_SESSION["FORMTRANMODE"] <> "NEW"){echo '<a id="btn-login" class="btn btn-default" href="'.$_SESSION["ENTRYPAGE"].'" >New&nbsp;<i class="fa fa-pencil"></i></a>';}
	?>
</div>

	<!-- for date picker if any date field -->
	<script type="text/javascript">
		$(function () {
			var dspdt=<?php echo json_encode($dsp_am_advdate);?>;
			$("#dtpik_am_advdate").datepicker({autoclose: true, todayHighlight: true}).datepicker('update', dspdt);;
		});
	</script>

	<ul id = "advancepayment_Tab"  class = "nav nav-tabs">
	<li class = "active"><a href = "#paymentdetails_Tab" data-toggle = "tab">Payment Details</a></li>
	</ul>
	<div id = "advancepayment_TabContent" class = "tab-content">
	<div class = "tab-pane fade in active" id = "paymentdetails_Tab"><br>
	<input type="hidden" id="am_tabreckey" name="am_tabreckey" value=<?php echo !empty($am_tabreckey)?$am_tabreckey:"";?>>


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

	<div class="form-group <?php echo !empty($am_advdate_Error)?'error':'';?>">

	<label for="Advance Date" id="label_am_advdate" class="col-md-4 control-label">Advance Date <font color="red">*</font></label>
	<div class="col-md-7">
	<div id="dtpik_am_advdate" class="input-group date" data-date-format="dd-M-yyyy" style="width:160px">
		 <input class="form-control" type="text" readonly name="dsp_am_advdate"/>
		 <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
	</div>
	</div>

	</div>

	<div class="form-group <?php echo !empty($am_slip_nbr_Error)?'error':'';?>">

	<label for="Slip Number" id="label_am_slip_nbr" class="col-md-4 control-label">Slip Number <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="am_slip_nbr" id="am_slip_nbr" class="form-control" required  onchange="check_advpmt();" style="width:150px" maxlength="4" value="<?php echo !empty($am_slip_nbr)?$am_slip_nbr:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($am_amount_Error)?'error':'';?>">

	<label for="Amount" id="label_am_amount" class="col-md-4 control-label">Amount</label>
	<div class="col-md-7">
	<input type="number"  name="am_amount" id="am_amount" class="form-control"    style="width:100px" maxlength="20" value="<?php echo !empty($am_amount)?$am_amount:0;?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($am_desc_Error)?'error':'';?>">

	<label for="Advance Description" id="label_am_desc" class="col-md-4 control-label">Advance Description <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="am_desc" id="am_desc" class="form-control" required   style="width:150px" maxlength="30" value="<?php echo !empty($am_desc)?$am_desc:'';?>" />
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

	function check_advpmt(){
		var jsvar_am_slip_nbr =  document.getElementById('am_slip_nbr').value;
		var jsvar_am_advdate =  document.getElementById('am_advdate').value;
		var valuetoPHP = 'datalistfor=am_slip_nbr&jsvar_am_slip_nbr=' + jsvar_am_slip_nbr +'&jsvar_am_advdate=' + jsvar_am_advdate;

		$.ajax({
			type: "POST",
			url: "advancepayment_jsajax.php",
			data: valuetoPHP,
			cache: false,
			success: function(responseResult){
				if (responseResult != 0){
					alert("This is already exists, can not be duplicate");
					document.getElementById('am_slip_nbr').value="";
					document.advancepayment.am_slip_nbr.focus();}
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
