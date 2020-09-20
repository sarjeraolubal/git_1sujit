	<form id="submenumaster"  class="form-horizontal"  name="submenumaster" method="post" enctype="multipart/form-data" action="submenumaster_ss.php">



	<div class="col-md-6 first">

	<div class="form-group<?php echo !empty($role_Error)?'error':'';?>">

	<label for="Role Code" id="label_role" class="col-md-4 control-label">Sub Menu code</label>
	<div class="col-md-7">
	<input type="text" name="sub_menu_sequence" id="sub_menu_sequence" class="form-control"   onchange="check_rolecode();" style="width:150px" maxlength="20" value="<?php echo !empty($sub_menu_sequence)?$sub_menu_sequence:'';?>" />
	</div>

	</div>

	<div class="form-group<?php echo !empty($name_sub_menu_Error)?'error':'';?>">

	<label for="name_sub_menu" id="label_name_sub_menu" class="col-md-4 control-label">Sub Menu Name </label>
	<div class="col-md-7">
	<input type="text" name="name_sub_menu" id="name_sub_menu" class="form-control"    style="width:150px" maxlength="40" value="<?php echo !empty($name_sub_menu)?$name_sub_menu:'';?>" />
	</div>

	</div>
	</div>
		<button type="submit" name="submit" class="btn btn-success">Search&nbsp;<i class="fa fa-search"></i></button>
	</form>
