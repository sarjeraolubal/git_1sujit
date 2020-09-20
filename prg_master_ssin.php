	<form id="prg_master"  class="form-horizontal"  name="prg_master" method="post" enctype="multipart/form-data" action="prg_master_ss.php">



	<div class="col-md-6 first">

	<div class="form-group<?php echo !empty($prg_file_Error)?'error':'';?>">

	<label for="Program Name" id="label_description" class="col-md-4 control-label">Program Name</label>
	<div class="col-md-7">
	<input type="text" name="prg_file" id="prg_file" class="form-control"    style="width:150px" maxlength="100" value="<?php echo !empty($prg_file)?$prg_file:'';?>" />
	</div>

	</div>
	</div>
		<button type="submit" name="submit" class="btn btn-success">Search&nbsp;<i class="fa fa-search"></i></button>
	</form>
