	<form id="main_menu"  class="form-horizontal"  name="main_menu" method="post" enctype="multipart/form-data" action="main_menu_ss.php">



	<div class="col-md-6 first">

	<div class="form-group<?php echo !empty($id_menu_Error)?'error':'';?>">

	<label for="Main Menu Code" id="label_id_menu" class="col-md-4 control-label">Main Menu Code</label>
	<div class="col-md-7">
	<input type="text" name="id_menu" id="id_menu" class="form-control"   onchange="check_main_menu();" style="width:60px" maxlength="4" value="<?php echo !empty($id_menu)?$id_menu:'';?>" />
	</div>

	</div>

	<div class="form-group<?php echo !empty($name_menu_Error)?'error':'';?>">

	<label for="Main Menu Name" id="label_name_menu" class="col-md-4 control-label">Main Menu Name</label>
	<div class="col-md-7">
	<input type="text" name="name_menu" id="name_menu" class="form-control"    style="width:150px" maxlength="40" value="<?php echo !empty($name_menu)?$name_menu:'';?>" />
	</div>

	</div>
	</div>
		<button type="submit" name="submit" class="btn btn-success">Search&nbsp;<i class="fa fa-search"></i></button>
	</form>
