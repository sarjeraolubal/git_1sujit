	<form id="companymaster"  class="form-horizontal"  name="companymaster" method="post" enctype="multipart/form-data" action="companymaster_ss.php">



	<div class="col-md-6 first">

	<div class="form-group<?php echo !empty($sys_co_name_Error)?'error':'';?>">

	<label for="Company Name" id="label_sys_co_name" class="col-md-4 control-label">Company Name</label>
	<div class="col-md-7">
	<input type="text" name="sys_co_name" id="sys_co_name" class="form-control"    style="width:150px" maxlength="100" value="<?php echo !empty($sys_co_name)?$sys_co_name:'';?>" />
	</div>

	</div>
	</div>
		<button type="submit" name="submit" class="btn btn-success">Search&nbsp;<i class="fa fa-search"></i></button>
	</form>
