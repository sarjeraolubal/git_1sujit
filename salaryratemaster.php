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
require "dist/lib/lib_salaryratemaster.php";
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
		if (salaryratemaster_insupddb()=="SUCCESS"){
			$_SESSION["FORMTRANMODE"] = "VIEW";
			$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Salary Rate Master";
			$_SESSION["SEARCHPAGE"]="salaryratemaster_ss.php";

			if (isset($_SESSION["Sys_Co_Code_list"])){
				unset($_SESSION["Sys_Co_Code_list"]);
			}
			header("location:savemessage.php");
		}
	}else{$_SESSION['FORMTRANMODE'] = 'NEW';}
}
	if($_SESSION['FORMTRANMODE'] <> "NEW"){getdata_forviewedit();}

	if (!isset($srm_eff_dt)){$srm_eff_dt = null;}
	if ($srm_eff_dt != null) { $dsp_srm_eff_dt=date('d-m-Y',strtotime($srm_eff_dt));}else{$dsp_srm_eff_dt="";}
?>

<?php include "dist/inc/loginheader.php";
include "dist/inc/leftsidemenu.php";
?>
<div class="content-wrapper">
<section class="content">
<h4>Salary Rate Master</h4>
<div class="row">
<section class="col-lg-13">
<section class="content-header">
<div class="box box-primary">
<div class="box-body">

		<?php if(!empty($errmsg)){echo '<p class="error" align="justify">'.$errmsg.'</p>';}?>
	<form id="salaryratemaster"  class="form-horizontal"  name="salaryratemaster" method="post" enctype="multipart/form-data" action="salaryratemaster.php">

<div align="right">
	<a id="btn-search" href="salaryratemaster_ss.php" class="btn btn-primary">Search&nbsp;<i class="fa fa-search"></i></a>&nbsp;&nbsp;
	<?php if($_SESSION['FORMTRANMODE'] <> "VIEW"){echo '<button id="btn-save" class="btn btn-success">Save&nbsp;<i class="fa fa-save"></i></button>';}else{echo "You are in view mode";}
		if($_SESSION["FORMTRANMODE"] <> "NEW"){echo '<a id="btn-login" class="btn btn-default" href="'.$_SESSION["ENTRYPAGE"].'" >New&nbsp;<i class="fa fa-pencil"></i></a>';}
	?>
</div>

	<!-- for date picker if any date field -->
	<script type="text/javascript">
		$(function () {
			var dspdt=<?php echo json_encode($dsp_srm_eff_dt);?>;
			$("#dtpik_srm_eff_dt").datepicker({autoclose: true, todayHighlight: true}).datepicker('update', dspdt);;
		});
	</script>

	<ul id = "salaryratemaster_Tab"  class = "nav nav-tabs">
	<li class = "active"><a href = "#salaryratemaster_Tab" data-toggle = "tab">Salary Rate Master</a></li>
	</ul>
	<div id = "salaryratemaster_TabContent" class = "tab-content">
	<div class = "tab-pane fade in active" id = "salaryratemaster_Tab"><br>
	<input type="hidden" id="srm_tabreckey" name="srm_tabreckey" value=<?php echo !empty($srm_tabreckey)?$srm_tabreckey:"";?>>


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

	<div class="form-group <?php echo !empty($srm_eff_dt_Error)?'error':'';?>">

	<label for="Effective Date" id="label_srm_eff_dt" class="col-md-4 control-label">Effective Date <font color="red">*</font></label>
	<div class="col-md-7">
	<div id="dtpik_srm_eff_dt" class="input-group date" data-date-format="dd-M-yyyy" style="width:160px">
		 <input class="form-control" type="text" readonly name="dsp_srm_eff_dt"/>
		 <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
	</div>
	</div>

	</div>

	<div class="form-group <?php echo !empty($srm_catg_Error)?'error':'';?>">

	<label for="Category" id="label_srm_catg" class="col-md-4 control-label">Category</label>
	<div class="col-md-7">
	<select  name="srm_catg" id="srm_catg" class="form-control"   >
		<option value="PERMANENT" <?php echo (!empty($srm_catg)&&($srm_catg=="PERMANENT"))?'selected="selected"':'';?>>PERMANENT</option>
		<option value="DA" <?php echo (!empty($srm_catg)&&($srm_catg=="DA"))?'selected="selected"':'';?>>DA</option>
		<option value="M" <?php echo (!empty($srm_catg)&&($srm_catg=="M"))?'selected="selected"':'';?>>M</option>
	</select>
	</div>

	</div>

	<div class="form-group <?php echo !empty($srm_da_Error)?'error':'';?>">

	<label for="DA in Percentage" id="label_srm_da" class="col-md-4 control-label">DA in Percentage <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="number"  min="0.00" max="9999999999999.00" step="0.01"  name="srm_da" id="srm_da" class="form-control" required   style="width:150px" maxlength="6" value="<?php echo !empty($srm_da)?$srm_da:0;?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($srm_hra_Error)?'error':'';?>">

	<label for="HRA in Percentage" id="label_srm_hra" class="col-md-4 control-label">HRA in Percentage <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="number"  min="0.00" max="9999999999999.00" step="0.01"  name="srm_hra" id="srm_hra" class="form-control" required   style="width:150px" maxlength="6" value="<?php echo !empty($srm_hra)?$srm_hra:0;?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($srm_pf_emp_Error)?'error':'';?>">

	<label for="PF Employee Contribution" id="label_srm_pf_emp" class="col-md-4 control-label">PF Employee Contribution <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="number"  min="0.00" max="9999999999999.00" step="0.01"  name="srm_pf_emp" id="srm_pf_emp" class="form-control" required   style="width:150px" maxlength="6" value="<?php echo !empty($srm_pf_emp)?$srm_pf_emp:0;?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($srm_pf_org_Error)?'error':'';?>">

	<label for="PF Org Contribution" id="label_srm_pf_org" class="col-md-4 control-label">PF Org Contribution <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="number"  min="0.00" max="9999999999999.00" step="0.01"  name="srm_pf_org" id="srm_pf_org" class="form-control" required   style="width:150px" maxlength="6" value="<?php echo !empty($srm_pf_org)?$srm_pf_org:0;?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($srm_esic_emp_Error)?'error':'';?>">

	<label for="ESIC Employee Contribution" id="label_srm_esic_emp" class="col-md-4 control-label">ESIC Employee Contribution <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="number"  min="0.00" max="9999999999999.00" step="0.01"  name="srm_esic_emp" id="srm_esic_emp" class="form-control" required   style="width:150px" maxlength="6" value="<?php echo !empty($srm_esic_emp)?$srm_esic_emp:0;?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($srm_esic_org_Error)?'error':'';?>">

	<label for="ESIC Org Contribution" id="label_srm_esic_org" class="col-md-4 control-label">ESIC Org Contribution <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="number"  min="0.00" max="9999999999999.00" step="0.01"  name="srm_esic_org" id="srm_esic_org" class="form-control" required   style="width:150px" maxlength="6" value="<?php echo !empty($srm_esic_org)?$srm_esic_org:0;?>" />
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
