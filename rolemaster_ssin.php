	<form id="rolemaster"  class="form-horizontal"  name="Rolemaster" method="post" enctype="multipart/form-data" action="rolemaster_ss.php">



	<div class="col-md-6 first">

	<div class="form-group<?php echo !empty($description_Error)?'error':'';?>">

	<label for="Role Name" id="label_description" class="col-md-4 control-label">Role Name</label>
	<div class="col-md-7">
	<input type="text" name="description" id="description" class="form-control"    style="width:150px" maxlength="100" value="<?php echo !empty($description)?$description:'';?>" />
	</div>

	</div>
	</div>
		<button type="submit" name="submit" class="btn btn-success">Search&nbsp;<i class="fa fa-search"></i></button>
	</form>
