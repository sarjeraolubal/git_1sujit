	<form id="vesselmaster"  class="form-horizontal"  name="vesselmaster" method="post" enctype="multipart/form-data" action="vesselmaster_ss.php">



	<div class="col-md-6 first">

	<div class="form-group<?php echo !empty($vm_code_Error)?'error':'';?>">

	<label for="Vessel Code" id="label_vm_code" class="col-md-4 control-label">Vessel Code</label>
	<div class="col-md-7">
	<input type="text" name="vm_code" id="vm_code" class="form-control"   onchange="check_vessel();" style="width:60px" maxlength="4" value="<?php echo !empty($vm_code)?$vm_code:'';?>" />
	</div>

	</div>

	<div class="form-group<?php echo !empty($vm_name_Error)?'error':'';?>">

	<label for="Vessel Name" id="label_vm_name" class="col-md-4 control-label">Vessel Name</label>
	<div class="col-md-7">
	<input type="text" name="vm_name" id="vm_name" class="form-control"    style="width:150px" maxlength="40" value="<?php echo !empty($vm_name)?$vm_name:'';?>" />
	</div>

	</div>
	</div>
		<button type="submit" name="submit" class="btn btn-success">Search&nbsp;<i class="fa fa-search"></i></button>
	</form>
