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
require "dist/lib/lib_applicationuserregistration.php";

$errmsg = null;
$successmsg = null;
$OKtoSaveIntoDB = true;
$v_nextformname = "";
if(!isset($_SESSION['FORMTRANMODE'])){$_SESSION["FORMTRANMODE"] = "NEW";};
if (!empty($_POST)) {
	set_formpostvalue();
	validate_formvalue();

	if($OKtoSaveIntoDB){
		if (applicationuserregistration_insupddb()=="SUCCESS"){
			$_SESSION["FORMTRANMODE"] = "VIEW";
			$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Application User Registration";
			$_SESSION["SEARCHPAGE"]="applicationuserregistration_ss.php";
			header("location:savemessage.php");
		}
	}else{$_SESSION['FORMTRANMODE'] = 'NEW';}
}
	if($_SESSION['FORMTRANMODE'] <> "NEW"){getdata_forviewedit();}
	if (empty($sys_co_code) && $_SESSION['FORMTRANMODE'] == "NEW"){$sys_co_code = $_SESSION["sys_co_code"];}
	if (empty($up_regdate) &&  $_SESSION['FORMTRANMODE'] == "NEW"){$up_regdate = date_create()->format('Y-m-d H:i:s');}

	if (!isset($up_regdate)){$up_regdate = null;}
	if ($up_regdate != null) { $dsp_up_regdate=date('d-m-Y',strtotime($up_regdate));}else{$dsp_up_regdate="";}

	if (!isset($up_lastaccessdate)){$up_lastaccessdate = null;}
	if ($up_lastaccessdate != null) { $dsp_up_lastaccessdate=date('d-m-Y',strtotime($up_lastaccessdate));}else{$dsp_up_lastaccessdate="";}

	if (!isset($up_expdate)){$up_expdate = null;}
	if ($up_expdate != null) { $dsp_up_expdate=date('d-m-Y',strtotime($up_expdate));}else{$dsp_up_expdate="";}

	if (!isset($up_radt)){$up_radt = null;}
	if ($up_radt != null) { $dsp_up_radt=date('d-m-Y',strtotime($up_radt));}else{$dsp_up_radt="";}

	if (!isset($up_rudt)){$up_rudt = null;}
	if ($up_rudt != null) { $dsp_up_rudt=date('d-m-Y',strtotime($up_rudt));}else{$dsp_up_rudt="";}
?>

<?php include "dist/inc/loginheader.php";
include "dist/inc/leftsidemenu.php";
?>
<div class="content-wrapper">
<section class="content">
<h4>Application User Registration</h4>
<div class="row">
<section class="col-lg-13">
<section class="content-header">
<div class="box box-primary">
<div class="box-body">

		<?php if(!empty($errmsg)){echo '<p class="error" align="justify">'.$errmsg.'</p>';}?>
	<form id="applicationuserregistration"  class="form-horizontal"  name="applicationuserregistration" method="post" enctype="multipart/form-data" action="applicationuserregistration.php">

<div align="right">
	<a id="btn-search" href="applicationuserregistration_ss.php" class="btn btn-primary">Search&nbsp;<i class="fa fa-search"></i></a>&nbsp;&nbsp;
	<?php if($_SESSION['FORMTRANMODE'] <> "VIEW"){echo '<button id="btn-save" class="btn btn-success">Save&nbsp;<i class="fa fa-save"></i></button>';}else{echo "You are in view mode";}
		if($_SESSION["FORMTRANMODE"] <> "NEW"){echo '<a id="btn-login" class="btn btn-default" href="'.$_SESSION["ENTRYPAGE"].'" >New&nbsp;<i class="fa fa-pencil"></i></a>';}
	?>
</div>

	<!-- for date picker if any date field -->
	<script type="text/javascript">
		$(function () {
			var dspdt=<?php echo json_encode($dsp_up_regdate);?>;
			$("#dtpik_up_regdate").datepicker({autoclose: true, todayHighlight: true}).datepicker('update', dspdt);;
			var dspdt=<?php echo json_encode($dsp_up_lastaccessdate);?>;
			$("#dtpik_up_lastaccessdate").datepicker({autoclose: true, todayHighlight: true}).datepicker('update', dspdt);;
			var dspdt=<?php echo json_encode($dsp_up_expdate);?>;
			$("#dtpik_up_expdate").datepicker({autoclose: true, todayHighlight: true}).datepicker('update', dspdt);;
			var dspdt=<?php echo json_encode($dsp_up_radt);?>;
			$("#dtpik_up_radt").datepicker({autoclose: true, todayHighlight: true}).datepicker('update', dspdt);;
			var dspdt=<?php echo json_encode($dsp_up_rudt);?>;
			$("#dtpik_up_rudt").datepicker({autoclose: true, todayHighlight: true}).datepicker('update', dspdt);;
		});
	</script>

	<ul id = "applicationuserregistration_Tab"  class = "nav nav-tabs">
	<li class = "active"><a href = "#userregistration_Tab" data-toggle = "tab">User Registration</a></li>
	</ul>
	<div id = "applicationuserregistration_TabContent" class = "tab-content">
	<div class = "tab-pane fade in active" id = "userregistration_Tab"><br>
	<input type="hidden" id="up_tabreckey" name="up_tabreckey" value=<?php echo !empty($up_tabreckey)?$up_tabreckey:"";?>>
	<input type="hidden" id="sys_co_code" name="sys_co_code" value=<?php echo !empty($sys_co_code)?$sys_co_code:"";?>>
	<input type="hidden" id="up_radt" name="up_radt" value=<?php echo !empty($up_radt)?$up_radt:"";?>>
	<input type="hidden" id="up_rudt" name="up_rudt" value=<?php echo !empty($up_rudt)?$up_rudt:"";?>>
	<input type="hidden" id="up_rauid" name="up_rauid" value=<?php echo !empty($up_rauid)?$up_rauid:"";?>>
	<input type="hidden" id="up_ruuid" name="up_ruuid" value=<?php echo !empty($up_ruuid)?$up_ruuid:"";?>>


	<div class="col-md-6 first">

	<div class="form-group <?php echo !empty($up_uid_Error)?'error':'';?>">

	<label for="User ID" id="label_up_uid" class="col-md-4 control-label">User ID <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="mail" name="up_uid" id="up_uid" class="form-control" required  maxlength="100" value="<?php echo !empty($up_uid)?$up_uid:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($up_ak_Error)?'error':'';?>">

	<label for="Password" id="label_up_ak" class="col-md-4 control-label">Password <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="password" name="up_ak" id="up_ak" class="form-control" required   maxlength="200" value="<?php echo !empty($up_ak)?$up_ak:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($up_regdate_Error)?'error':'';?>">

	<label for="Registration Date" id="label_up_regdate" class="col-md-4 control-label">Registration Date <font color="red">*</font></label>
	<div class="col-md-7">
	<div id="dtpik_up_regdate" class="input-group date" data-date-format="dd-M-yyyy" style="width:160px">
		 <input class="form-control" type="text" readonly name="dsp_up_regdate"/>
		 <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
	</div>
	</div>

	</div>

	<div class="form-group <?php echo !empty($up_lockstatus_Error)?'error':'';?>">

	<label for="Lock Status" id="label_up_lockstatus" class="col-md-4 control-label">Lock Status <font color="red">*</font></label>
	<div class="col-md-7">
	<select  name="up_lockstatus" id="up_lockstatus" class="form-control" required  >
		<option value="NO LOCK" <?php echo (!empty($up_lockstatus)&&($up_lockstatus=="NO LOCK"))?'selected="selected"':'';?>>NO LOCK</option>
		<option value="LOCKED" <?php echo (!empty($up_lockstatus)&&($up_lockstatus=="LOCKED"))?'selected="selected"':'';?>>LOCKED</option>
	</select>
	</div>

	</div>

	<div class="form-group <?php echo !empty($up_status_Error)?'error':'';?>">

	<label for="Status" id="label_up_status" class="col-md-4 control-label">Status <font color="red">*</font></label>
	<div class="col-md-7">
	<select  name="up_status" id="up_status" class="form-control" required  >
		<option value="ACTIVE" <?php echo (!empty($up_status)&&($up_status=="ACTIVE"))?'selected="selected"':'';?>>ACTIVE</option>
		<option value="EXPIRED" <?php echo (!empty($up_status)&&($up_status=="EXPIRED"))?'selected="selected"':'';?>>EXPIRED</option>
	</select>
	</div>

	</div>

	<div class="form-group <?php echo !empty($up_lastaccessdate_Error)?'error':'';?>">

	<label for="Last Access Date" id="label_up_lastaccessdate" class="col-md-4 control-label">Last Access Date</label>
	<div class="col-md-7">
	<div id="dtpik_up_lastaccessdate" class="input-group date" data-date-format="dd-M-yyyy" style="width:160px">
		 <input class="form-control" type="text" readonly name="dsp_up_lastaccessdate"/>
		 <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
	</div>
	</div>

	</div>

	<div class="form-group <?php echo !empty($up_expdate_Error)?'error':'';?>">

	<label for="Expiry Date" id="label_up_expdate" class="col-md-4 control-label">Expiry Date</label>
	<div class="col-md-7">
	<div id="dtpik_up_expdate" class="input-group date" data-date-format="dd-M-yyyy" style="width:160px">
		 <input class="form-control" type="text" readonly name="dsp_up_expdate"/>
		 <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
	</div>
	</div>

	</div>
	</div>

	<div class="col-md-6 second">

	<div class="form-group <?php echo !empty($up_mid_Error)?'error':'';?>">

	<label for="Member ID" id="label_up_mid" class="col-md-4 control-label">Member ID</label>
	<div class="col-md-7">
	<input type="text" name="up_mid" id="up_mid" class="form-control"    style="width:150px" maxlength="200" value="<?php echo !empty($up_mid)?$up_mid:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($up_eid_Error)?'error':'';?>">

	<label for="Employee ID" id="label_up_eid" class="col-md-4 control-label">Employee ID <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="up_eid" id="up_eid" class="form-control" required   style="width:150px" maxlength="50" value="<?php echo !empty($up_eid)?$up_eid:'';?>" />
	</div>

	</div>
    
    <div class="form-group <?php echo !empty($up_eid_Error)?'error':'';?>">

    <label for="ROLE ID" id="label_role_id" class="col-md-4 control-label">ROLE ID <font color="red">*</font></label>
    <div class="col-md-7">
    <input type="text" name="role_id" id="role_id" class="form-control" required   style="width:150px" maxlength="50" value="<?php echo !empty($role_id)?$role_id:'';?>" />
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
