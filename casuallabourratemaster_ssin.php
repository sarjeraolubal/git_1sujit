	<form id="casuallabourratemaster"  class="form-horizontal"  name="casuallabourratemaster" method="post" enctype="multipart/form-data" action="casuallabourratemaster_ss.php">



	<div class="col-md-6 first">

	<div class="form-group<?php echo !empty($clrm_code_Error)?'error':'';?>">

	<label for="Code" id="label_clrm_code" class="col-md-4 control-label">Code</label>
	<div class="col-md-7">
	<input type="text" name="clrm_code" id="clrm_code" class="form-control"   onchange="check_labcode();" style="width:60px" maxlength="4" value="<?php echo !empty($clrm_code)?$clrm_code:'';?>" />
	</div>

	</div>

	<div class="form-group<?php echo !empty($clrm_desc_Error)?'error':'';?>">

	<label for="Description" id="label_clrm_desc" class="col-md-4 control-label">Description</label>
	<div class="col-md-7">
	<input type="text" name="clrm_desc" id="clrm_desc" class="form-control"    style="width:150px" maxlength="40" value="<?php echo !empty($clrm_desc)?$clrm_desc:'';?>" />
	</div>

	</div>
	</div>
		<button type="submit" name="submit" class="btn btn-success">Search&nbsp;<i class="fa fa-search"></i></button>
	</form>
