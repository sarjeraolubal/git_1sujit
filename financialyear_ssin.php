	<form id="financialyear"  class="form-horizontal"  name="financialyear" method="post" enctype="multipart/form-data" action="financialyear_ss.php">



	<div class="col-md-6 first">

	<div class="form-group<?php echo !empty($fy_accyear_Error)?'error':'';?>">

	<label for="Accounting Year" id="label_fy_accyear" class="col-md-4 control-label">Accounting Year</label>
	<div class="col-md-7">
	<input type="text" name="fy_accyear" id="fy_accyear" class="form-control"    style="width:150px" maxlength="10" value="<?php echo !empty($fy_accyear)?$fy_accyear:'';?>" />
	</div>

	</div>

	<div class="form-group<?php echo !empty($fy_year_Error)?'error':'';?>">

	<label for="Year" id="label_fy_year" class="col-md-4 control-label">Year</label>
	<div class="col-md-7">
	<input type="text" name="fy_year" id="fy_year" class="form-control"    style="width:150px" maxlength="4" value="<?php echo !empty($fy_year)?$fy_year:'';?>" />
	</div>

	</div>
	</div>
		<button type="submit" name="submit" class="btn btn-success">Search&nbsp;<i class="fa fa-search"></i></button>
	</form>
