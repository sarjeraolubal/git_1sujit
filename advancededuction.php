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
require "dist/lib/lib_advancededuction.php";
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
		if (advancededuction_insupddb()=="SUCCESS"){
			$_SESSION["FORMTRANMODE"] = "VIEW";
			$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Advance Deduction";
			$_SESSION["SEARCHPAGE"]="advancededuction_ss.php";

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

	if (!isset($adduct_date)){$adduct_date = null;}
	if ($adduct_date != null) { $dsp_adduct_date=date('d-m-Y',strtotime($adduct_date));}else{$dsp_adduct_date="";}
?>

<?php include "dist/inc/loginheader.php";
include "dist/inc/leftsidemenu.php";
?>
<div class="content-wrapper">
<section class="content">
<h4>Advance Deduction</h4>
<div class="row">
<section class="col-lg-13">
<section class="content-header">
<div class="box box-primary">
<div class="box-body">

		<?php if(!empty($errmsg)){echo '<p class="error" align="justify">'.$errmsg.'</p>';}?>
	<form id="advancededuction"  class="form-horizontal"  name="advancededuction" method="post" enctype="multipart/form-data" action="advancededuction.php">

<div align="right">
	<a id="btn-search" href="advancededuction_ss.php" class="btn btn-primary">Search&nbsp;<i class="fa fa-search"></i></a>&nbsp;&nbsp;
	<?php if($_SESSION['FORMTRANMODE'] <> "VIEW"){echo '<button id="btn-save" class="btn btn-success">Save&nbsp;<i class="fa fa-save"></i></button>';}else{echo "You are in view mode";}
		if($_SESSION["FORMTRANMODE"] <> "NEW"){echo '<a id="btn-login" class="btn btn-default" href="'.$_SESSION["ENTRYPAGE"].'" >New&nbsp;<i class="fa fa-pencil"></i></a>';}
	?>
</div>

	<!-- for date picker if any date field -->
	<script type="text/javascript">
		$(function () {
			var dspdt=<?php echo json_encode($dsp_adduct_date);?>;
			$("#dtpik_adduct_date").datepicker({autoclose: true, todayHighlight: true}).datepicker('update', dspdt);;
		});
	</script>

	<ul id = "advancededuction_Tab"  class = "nav nav-tabs">
	<li class = "active"><a href = "#advancededuction_Tab" data-toggle = "tab">Advance Deduction</a></li>
	</ul>
	<div id = "advancededuction_TabContent" class = "tab-content">
	<div class = "tab-pane fade in active" id = "advancededuction_Tab"><br>
	<input type="hidden" id="adduct_tabreckey" name="adduct_tabreckey" value=<?php echo !empty($adduct_tabreckey)?$adduct_tabreckey:"";?>>


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

	<div class="form-group <?php echo !empty($adduct_date_Error)?'error':'';?>">

	<label for="Deduction Date" id="label_adduct_date" class="col-md-4 control-label">Deduction Date <font color="red">*</font></label>
	<div class="col-md-7">
	<div id="dtpik_adduct_date" class="input-group date" data-date-format="dd-M-yyyy" style="width:160px">
		 <input class="form-control" type="text" readonly name="dsp_adduct_date"/>
		 <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
	</div>
	</div>

	</div>

	<div class="form-group <?php echo !empty($adduct_amt_Error)?'error':'';?>">

	<label for="Deduction Amount" id="label_adduct_amt" class="col-md-4 control-label">Deduction Amount <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="number"  min="0.00" max="9999999999999.00" step="0.01"  name="adduct_amt" id="adduct_amt" class="form-control" required   style="width:150px" maxlength="20" value="<?php echo !empty($adduct_amt)?$adduct_amt:0;?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($adduct_auth_Error)?'error':'';?>">

	<label for="Is authorized" id="label_adduct_auth" class="col-md-4 control-label">Is authorized</label>
	<div class="col-md-7">
	<select  name="adduct_auth" id="adduct_auth" class="form-control"   >
		<option value="YES" <?php echo (!empty($adduct_auth)&&($adduct_auth=="YES"))?'selected="selected"':'';?>>YES</option>
		<option value="NO" <?php echo (!empty($adduct_auth)&&($adduct_auth=="NO"))?'selected="selected"':'';?>>NO</option>
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
