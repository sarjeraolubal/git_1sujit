	<form id="worktypemaster"  class="form-horizontal"  name="worktypemaster" method="post" enctype="multipart/form-data" action="worktypemaster_ss.php">



	<div class="col-md-6 first">

	<div class="form-group<?php echo !empty($wtm_code_Error)?'error':'';?>">

	<label for="Code" id="label_wtm_code" class="col-md-4 control-label">Code</label>
	<div class="col-md-7">
	<input type="text" name="wtm_code" id="wtm_code" class="form-control"   onchange="check_worktype();" style="width:60px" maxlength="4" value="<?php echo !empty($wtm_code)?$wtm_code:'';?>" />
	</div>

	</div>

	<div class="form-group<?php echo !empty($wtm_name_Error)?'error':'';?>">

	<label for="Name" id="label_wtm_name" class="col-md-4 control-label">Name</label>
	<div class="col-md-7">
	<input type="text" name="wtm_name" id="wtm_name" class="form-control"    style="width:150px" maxlength="40" value="<?php echo !empty($wtm_name)?$wtm_name:'';?>" />
	</div>

	</div>
	</div>
		<button type="submit" name="submit" class="btn btn-success">Search&nbsp;<i class="fa fa-search"></i></button>
	</form>
