	<form id="gangcodemaster"  class="form-horizontal"  name="gangcodemaster" method="post" enctype="multipart/form-data" action="gangcodemaster_ss.php">



	<div class="col-md-6 first">

	<div class="form-group<?php echo !empty($gm_gang_code_Error)?'error':'';?>">

	<label for="Gang Code" id="label_gm_gang_code" class="col-md-4 control-label">Gang Code</label>
	<div class="col-md-7">
	<input type="text" name="gm_gang_code" id="gm_gang_code" class="form-control"    style="width:60px" maxlength="4" value="<?php echo !empty($gm_gang_code)?$gm_gang_code:'';?>" />
	</div>

	</div>

	<div class="form-group<?php echo !empty($gm_badge_no_Error)?'error':'';?>">

	<label for="Badge Number" id="label_gm_badge_no" class="col-md-4 control-label">Badge Number</label>
	<div class="col-md-7">
	<input type="text" name="gm_badge_no" id="gm_badge_no" class="form-control"   onchange="check_badgeno();" style="width:150px" maxlength="4" value="<?php echo !empty($gm_badge_no)?$gm_badge_no:'';?>" />
	</div>

	</div>

	<div class="form-group<?php echo !empty($gm_memcatg_Error)?'error':'';?>">

	<label for="Member Category" id="label_gm_memcatg" class="col-md-4 control-label">Member Category</label>
	<div class="col-md-7">
	<select  name="gm_memcatg" id="gm_memcatg" class="form-control"   ><option value="">ALL</option>
		<option value="PERMANENT" <?php echo (!empty($gm_memcatg)&&($gm_memcatg=="PERMANENT"))?'selected="selected"':'';?>>PERMANENT</option>
		<option value="TEMPORARY" <?php echo (!empty($gm_memcatg)&&($gm_memcatg=="TEMPORARY"))?'selected="selected"':'';?>>TEMPORARY</option>
		<option value="DA" <?php echo (!empty($gm_memcatg)&&($gm_memcatg=="DA"))?'selected="selected"':'';?>>DA</option>
		<option value="OTHERS" <?php echo (!empty($gm_memcatg)&&($gm_memcatg=="OTHERS"))?'selected="selected"':'';?>>OTHERS</option>
	</select>
	</div>

	</div>

	<div class="form-group<?php echo !empty($gm_name_Error)?'error':'';?>">

	<label for="Member Name" id="label_gm_name" class="col-md-4 control-label">Member Name</label>
	<div class="col-md-7">
	<input type="text" name="gm_name" id="gm_name" class="form-control"    style="width:250px" maxlength="100" value="<?php echo !empty($gm_name)?$gm_name:'';?>" />
	</div>

	</div>
	</div>
		<button type="submit" name="submit" class="btn btn-success">Search&nbsp;<i class="fa fa-search"></i></button>
	</form>
