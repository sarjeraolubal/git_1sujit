	<form id="applicationuserregistration"  class="form-horizontal"  name="applicationuserregistration" method="post" enctype="multipart/form-data" action="applicationuserregistration_ss.php">



	<div class="col-md-6 first">

	<div class="form-group<?php echo !empty($up_uid_Error)?'error':'';?>">

	<label for="User ID" id="label_up_uid" class="col-md-4 control-label">User ID</label>
	<div class="col-md-7">
	<input type="mail" name="up_uid" id="up_uid" class="form-control"    maxlength="100" value="<?php echo !empty($up_uid)?$up_uid:'';?>" />
	</div>

	</div>

	<div class="form-group<?php echo !empty($up_lockstatus_Error)?'error':'';?>">

	<label for="Lock Status" id="label_up_lockstatus" class="col-md-4 control-label">Lock Status</label>
	<div class="col-md-7">
	<select  name="up_lockstatus" id="up_lockstatus" class="form-control"   ><option value="">ALL</option>
		<option value="NO LOCK" <?php echo (!empty($up_lockstatus)&&($up_lockstatus=="NO LOCK"))?'selected="selected"':'';?>>NO LOCK</option>
		<option value="LOCKED" <?php echo (!empty($up_lockstatus)&&($up_lockstatus=="LOCKED"))?'selected="selected"':'';?>>LOCKED</option>
	</select>
	</div>

	</div>
	</div>
		<button type="submit" name="submit" class="btn btn-success">Search&nbsp;<i class="fa fa-search"></i></button>
	</form>
