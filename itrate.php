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
require "dist/lib/lib_itrate.php";
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
		if (itrate_insupddb()=="SUCCESS"){
			$_SESSION["FORMTRANMODE"] = "VIEW";
			$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=IT Rate";
			$_SESSION["SEARCHPAGE"]="itrate_ss.php";

			if (isset($_SESSION["Sys_Co_Code_list"])){
				unset($_SESSION["Sys_Co_Code_list"]);
			}
			header("location:savemessage.php");
		}
	}else{$_SESSION['FORMTRANMODE'] = 'NEW';}
}
	if($_SESSION['FORMTRANMODE'] <> "NEW"){getdata_forviewedit();}

	if (!isset($itr_eff_dt)){$itr_eff_dt = null;}
	if ($itr_eff_dt != null) { $dsp_itr_eff_dt=date('d-m-Y',strtotime($itr_eff_dt));}else{$dsp_itr_eff_dt="";}
?>

<?php include "dist/inc/loginheader.php";
include "dist/inc/leftsidemenu.php";
?>
<div class="content-wrapper">
<section class="content">
<h4>IT Rate</h4>
<div class="row">
<section class="col-lg-13">
<section class="content-header">
<div class="box box-primary">
<div class="box-body">

		<?php if(!empty($errmsg)){echo '<p class="error" align="justify">'.$errmsg.'</p>';}?>
	<form id="itrate"  class="form-horizontal"  name="itrate" method="post" enctype="multipart/form-data" action="itrate.php">

<div align="right">
	<a id="btn-search" href="itrate_ss.php" class="btn btn-primary">Search&nbsp;<i class="fa fa-search"></i></a>&nbsp;&nbsp;
	<?php if($_SESSION['FORMTRANMODE'] <> "VIEW"){echo '<button id="btn-save" class="btn btn-success">Save&nbsp;<i class="fa fa-save"></i></button>';}else{echo "You are in view mode";}
		if($_SESSION["FORMTRANMODE"] <> "NEW"){echo '<a id="btn-login" class="btn btn-default" href="'.$_SESSION["ENTRYPAGE"].'" >New&nbsp;<i class="fa fa-pencil"></i></a>';}
	?>
</div>

	<!-- for date picker if any date field -->
	<script type="text/javascript">
		$(function () {
			var dspdt=<?php echo json_encode($dsp_itr_eff_dt);?>;
			$("#dtpik_itr_eff_dt").datepicker({autoclose: true, todayHighlight: true}).datepicker('update', dspdt);;
		});
	</script>

	<ul id = "itrate_Tab"  class = "nav nav-tabs">
	<li class = "active"><a href = "#itrate_Tab" data-toggle = "tab">IT Rate</a></li>
	</ul>
	<div id = "itrate_TabContent" class = "tab-content">
	<div class = "tab-pane fade in active" id = "itrate_Tab"><br>
	<input type="hidden" id="itr_tabreckey" name="itr_tabreckey" value=<?php echo !empty($itr_tabreckey)?$itr_tabreckey:"";?>>


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

	<div class="form-group <?php echo !empty($itr_eff_dt_Error)?'error':'';?>">

	<label for="Effective Date" id="label_itr_eff_dt" class="col-md-4 control-label">Effective Date <font color="red">*</font></label>
	<div class="col-md-7">
	<div id="dtpik_itr_eff_dt" class="input-group date" data-date-format="dd-M-yyyy" style="width:160px">
		 <input class="form-control" type="text" readonly name="dsp_itr_eff_dt"/>
		 <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
	</div>
	</div>

	</div>

	<div class="form-group <?php echo !empty($itr_slab_from_Error)?'error':'';?>">

	<label for="Slab From" id="label_itr_slab_from" class="col-md-4 control-label">Slab From <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="number"  min="0.00" max="9999999999999.00" step="0.01"  name="itr_slab_from" id="itr_slab_from" class="form-control" required   style="width:150px" maxlength="20" value="<?php echo !empty($itr_slab_from)?$itr_slab_from:0;?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($itr_slab_to_Error)?'error':'';?>">

	<label for="Slab To" id="label_itr_slab_to" class="col-md-4 control-label">Slab To <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="number"  min="0.00" max="9999999999999.00" step="0.01"  name="itr_slab_to" id="itr_slab_to" class="form-control" required   style="width:150px" maxlength="20" value="<?php echo !empty($itr_slab_to)?$itr_slab_to:0;?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($itr_taxperc_Error)?'error':'';?>">

	<label for="Tax in Percentage" id="label_itr_taxperc" class="col-md-4 control-label">Tax in Percentage <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="number"  min="0.00" max="9999999999999.00" step="0.01"  name="itr_taxperc" id="itr_taxperc" class="form-control" required   style="width:150px" maxlength="7" value="<?php echo !empty($itr_taxperc)?$itr_taxperc:0;?>" />
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
