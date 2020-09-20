	<?php $dsp_am_advdate="";?>

	<!-- for date picker if any date field -->
	<script type="text/javascript">
		$(function () {
			var dspdt=<?php echo json_encode($dsp_am_advdate);?>;
			$("#dtpik_am_advdate").datepicker({autoclose: true, todayHighlight: true}).datepicker('update', dspdt);;
		});
	</script>

	<form id="advancepayment"  class="form-horizontal"  name="advancepayment" method="post" enctype="multipart/form-data" action="advancepayment_ss.php">



	<div class="col-md-6 first">

	<div class="form-group<?php echo !empty($gm_badge_no_Error)?'error':'';?>">

	<label for="Member ID" id="label_gm_badge_no" class="col-md-4 control-label">Member ID</label>
	<div class="col-md-7">
	<?php
	$gm_badge_no_selectbox = '<select " name="gm_badge_no" id="gm_badge_no" class="form-control"   ><option value=""></option>';
	foreach ($gm_badge_no_list as $row):
		$gm_badge_no_value = $row["gm_badge_no"];
		$gm_badge_no_desc = $row["gm_name"];
		$gm_badge_no_selectbox = $gm_badge_no_selectbox .'<option value="'.$gm_badge_no_value.'">'.$gm_badge_no_desc.'</option>';
	endforeach;
	$gm_badge_no_selectbox .= "</select>";
	echo $gm_badge_no_selectbox;?>
	</div>

	</div>

	<div class="form-group<?php echo !empty($am_advdate_Error)?'error':'';?>">

	<label for="Advance Date" id="label_am_advdate" class="col-md-4 control-label">Advance Date</label>
	<div class="col-md-7">
	<div id="dtpik_am_advdate" class="input-group date" data-date-format="dd-M-yyyy" style="width:160px">
		 <input class="form-control" type="text" readonly name="dsp_am_advdate"/>
		 <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
	</div>
	</div>

	</div>

	<div class="form-group<?php echo !empty($am_slip_nbr_Error)?'error':'';?>">

	<label for="Slip Number" id="label_am_slip_nbr" class="col-md-4 control-label">Slip Number</label>
	<div class="col-md-7">
	<input type="text" name="am_slip_nbr" id="am_slip_nbr" class="form-control"   onchange="check_advpmt();" style="width:150px" maxlength="4" value="<?php echo !empty($am_slip_nbr)?$am_slip_nbr:'';?>" />
	</div>

	</div>
	</div>
		<button type="submit" name="submit" class="btn btn-success">Search&nbsp;<i class="fa fa-search"></i></button>
	</form>
