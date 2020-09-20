	<form id="dailychallan"  class="form-horizontal"  name="dailychallan" method="post" enctype="multipart/form-data" action="dailychallan_ss.php">



	<div class="col-md-6 first">

	<div class="form-group<?php echo !empty($sys_co_code_Error)?'error':'';?>">

	<label for="Company" id="label_sys_co_code" class="col-md-4 control-label">Company</label>
	<div class="col-md-7">
	<?php
	$sys_co_code_selectbox = '<select " name="sys_co_code" id="sys_co_code" class="form-control"   ><option value=""></option>';
	foreach ($sys_co_code_list as $row):
		$sys_co_code_value = $row["sys_co_code"];
		$sys_co_code_desc = $row["sys_co_name"];
		$sys_co_code_selectbox = $sys_co_code_selectbox .'<option value="'.$sys_co_code_value.'">'.$sys_co_code_desc.'</option>';
	endforeach;
	$sys_co_code_selectbox .= "</select>";
	echo $sys_co_code_selectbox;?>
	</div>

	</div>

	<div class="form-group<?php echo !empty($dwd_slip_nbr_Error)?'error':'';?>">

	<label for="Slip Number" id="label_dwd_slip_nbr" class="col-md-4 control-label">Slip Number</label>
	<div class="col-md-7">
	<input type="text" name="dwd_slip_nbr" id="dwd_slip_nbr" class="form-control"   onchange="check_dlychln();" style="width:150px" maxlength="8" value="<?php echo !empty($dwd_slip_nbr)?$dwd_slip_nbr:'';?>" />
	</div>

	</div>

	<div class="form-group<?php echo !empty($vm_code_Error)?'error':'';?>">

	<label for="Vessel Name" id="label_vm_code" class="col-md-4 control-label">Vessel Name</label>
	<div class="col-md-7">
	<?php
	$vm_code_selectbox = '<select " name="vm_code" id="vm_code" class="form-control"   ><option value=""></option>';
	foreach ($vm_code_list as $row):
		$vm_code_value = $row["vm_code"];
		$vm_code_desc = $row["vm_name"];
		$vm_code_selectbox = $vm_code_selectbox .'<option value="'.$vm_code_value.'">'.$vm_code_desc.'</option>';
	endforeach;
	$vm_code_selectbox .= "</select>";
	echo $vm_code_selectbox;?>
	</div>

	</div>
	</div>
		<button type="submit" name="submit" class="btn btn-success">Search&nbsp;<i class="fa fa-search"></i></button>
	</form>
