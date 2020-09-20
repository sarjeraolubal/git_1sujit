	<form id="menumaster"  class="form-horizontal"  name="menumaster" method="post" enctype="multipart/form-data" action="menumaster_ss.php">



	<div class="col-md-6 first">

	<div class="form-group<?php echo !empty($role_Error)?'error':'';?>">

	<label for="Role Code" id="label_role" class="col-md-4 control-label">Role Code</label>
	<div class="col-md-7">
	<input type="text" name="role" id="role" class="form-control"   onchange="check_rolecode();" style="width:150px" maxlength="20" value="<?php echo !empty($role)?$role:'';?>" />
	</div>

	</div>

	<div class="form-group<?php echo !empty($m_option_Error)?'error':'';?>">

	<label for="menu Name" id="label_m_option" class="col-md-4 control-label">Main Menu code</label>
	<div class="col-md-7">
	<input type="text" name="m_option" id="m_option" class="form-control"    style="width:150px" maxlength="40" value="<?php echo !empty($m_option)?$m_option:'';?>" />
	</div>

	</div>
	</div>
		<button type="submit" name="submit" class="btn btn-success">Search&nbsp;<i class="fa fa-search"></i></button>
	</form>
