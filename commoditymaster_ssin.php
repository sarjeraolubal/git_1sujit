	<form id="commoditymaster"  class="form-horizontal"  name="commoditymaster" method="post" enctype="multipart/form-data" action="commoditymaster_ss.php">



	<div class="col-md-6 first">

	<div class="form-group<?php echo !empty($cm_code_Error)?'error':'';?>">

	<label for="Commodity Code" id="label_cm_code" class="col-md-4 control-label">Commodity Code</label>
	<div class="col-md-7">
	<input type="text" name="cm_code" id="cm_code" class="form-control"   onchange="check_commocode();" style="width:150px" maxlength="4" value="<?php echo !empty($cm_code)?$cm_code:'';?>" />
	</div>

	</div>

	<div class="form-group<?php echo !empty($cm_name_Error)?'error':'';?>">

	<label for="Commodity Name" id="label_cm_name" class="col-md-4 control-label">Commodity Name</label>
	<div class="col-md-7">
	<input type="text" name="cm_name" id="cm_name" class="form-control"    style="width:150px" maxlength="40" value="<?php echo !empty($cm_name)?$cm_name:'';?>" />
	</div>

	</div>
	</div>
		<button type="submit" name="submit" class="btn btn-success">Search&nbsp;<i class="fa fa-search"></i></button>
	</form>
