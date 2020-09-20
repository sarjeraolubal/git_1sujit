	<?php $dsp_ao_date="";?>

	<!-- for date picker if any date field -->
	<script type="text/javascript">
		$(function () {
			var dspdt=<?php echo json_encode($dsp_ao_date);?>;
			$("#dtpik_ao_date").datepicker({autoclose: true, todayHighlight: true}).datepicker('update', dspdt);;
		});
	</script>

	<form id="advanceoutstanding"  class="form-horizontal"  name="advanceoutstanding" method="post" enctype="multipart/form-data" action="advanceoutstanding_ss.php">



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

	<div class="form-group<?php echo !empty($ao_date_Error)?'error':'';?>">

	<label for="Advance Date" id="label_ao_date" class="col-md-4 control-label">Advance Date</label>
	<div class="col-md-7">
	<div id="dtpik_ao_date" class="input-group date" data-date-format="dd-M-yyyy" style="width:160px">
		 <input class="form-control" type="text" readonly name="dsp_ao_date"/>
		 <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
	</div>
	</div>

	</div>
	</div>
		<button type="submit" name="submit" class="btn btn-success">Search&nbsp;<i class="fa fa-search"></i></button>
	</form>
