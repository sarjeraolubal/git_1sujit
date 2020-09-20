	<form id="advancededuction"  class="form-horizontal"  name="advancededuction" method="post" enctype="multipart/form-data" action="advancededuction_ss.php">



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
	</div>
		<button type="submit" name="submit" class="btn btn-success">Search&nbsp;<i class="fa fa-search"></i></button>
	</form>
