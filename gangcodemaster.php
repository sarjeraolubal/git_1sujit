<?php
/*-------------------------------------------------------
Project: SMEStar
Company: Vaikunth Raul
Auto generated code using PHP RAD tool by Vaikunth Raul 
-------------------------------------------------------*/
require "dist/lib/commonfunc.php";
validatepage();
require "dist/lib/dbconnection.php";
require "dist/lib/dataextrfunc.php";
?>
<?php 
require "dist/lib/lib_gangcodemaster.php";

$errmsg = null;
$successmsg = null;
$OKtoSaveIntoDB = true;
$v_nextformname = "";
if(!isset($_SESSION['FORMTRANMODE'])){$_SESSION["FORMTRANMODE"] = "NEW";};
if (!empty($_POST)) {
	set_formpostvalue();
	validate_formvalue();

	if($OKtoSaveIntoDB){
		if (gangcodemaster_insupddb()=="SUCCESS"){
			$_SESSION["FORMTRANMODE"] = "VIEW";
			$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Gang Code Master";
			$_SESSION["SEARCHPAGE"]="gangcodemaster_ss.php";
			header("location:savemessage.php");
		}
	}else{$_SESSION['FORMTRANMODE'] = 'NEW';}
}
	if($_SESSION['FORMTRANMODE'] <> "NEW"){getdata_forviewedit();}
	if (empty($sys_co_code) && $_SESSION['FORMTRANMODE'] == "NEW"){$sys_co_code = $_SESSION["sys_co_code"];}
?>

<?php include "dist/inc/loginheader.php";
include "dist/inc/leftsidemenu.php";
?>
<div class="content-wrapper">
<section class="content">
<h4>Gang Code Master</h4>
<div class="row">
<section class="col-lg-13">
<section class="content-header">
<div class="box box-primary">
<div class="box-body">

		<?php if(!empty($errmsg)){echo '<p class="error" align="justify">'.$errmsg.'</p>';}?>
	<form id="gangcodemaster"  class="form-horizontal"  name="gangcodemaster" method="post" enctype="multipart/form-data" action="gangcodemaster.php">

<div align="right">
	<a id="btn-search" href="gangcodemaster_ss.php" class="btn btn-primary">Search&nbsp;<i class="fa fa-search"></i></a>&nbsp;&nbsp;
	<?php if($_SESSION['FORMTRANMODE'] <> "VIEW"){echo '<button id="btn-save" class="btn btn-success">Save&nbsp;<i class="fa fa-save"></i></button>';}else{echo "You are in view mode";}
		if($_SESSION["FORMTRANMODE"] <> "NEW"){echo '<a id="btn-login" class="btn btn-default" href="'.$_SESSION["ENTRYPAGE"].'" >New&nbsp;<i class="fa fa-pencil"></i></a>';}
	?>
</div>

	<ul id = "gangcodemaster_Tab"  class = "nav nav-tabs">
	<li class = "active"><a href = "#gangcode_Tab" data-toggle = "tab">Gang Code</a></li>
	</ul>
	<div id = "gangcodemaster_TabContent" class = "tab-content">
	<div class = "tab-pane fade in active" id = "gangcode_Tab"><br>
	<input type="hidden" id="gm_tabreckey" name="gm_tabreckey" value=<?php echo !empty($gm_tabreckey)?$gm_tabreckey:"";?>>
	<input type="hidden" id="sys_co_code" name="sys_co_code" value=<?php echo !empty($sys_co_code)?$sys_co_code:"";?>>


	<div class="col-md-6 first">

	<div class="form-group <?php echo !empty($gm_gang_code_Error)?'error':'';?>">

	<label for="Gang Code" id="label_gm_gang_code" class="col-md-4 control-label">Gang Code <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="gm_gang_code" id="gm_gang_code" class="form-control" required   style="width:60px" maxlength="4" value="<?php echo !empty($gm_gang_code)?$gm_gang_code:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($gm_badge_no_Error)?'error':'';?>">

	<label for="Badge Number" id="label_gm_badge_no" class="col-md-4 control-label">Badge Number <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="gm_badge_no" id="gm_badge_no" class="form-control" required  onchange="check_badgeno();" style="width:150px" maxlength="4" value="<?php echo !empty($gm_badge_no)?$gm_badge_no:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($gm_memcatg_Error)?'error':'';?>">

	<label for="Member Category" id="label_gm_memcatg" class="col-md-4 control-label">Member Category <font color="red">*</font></label>
	<div class="col-md-7">
	<select  name="gm_memcatg" id="gm_memcatg" class="form-control" required  >
		<option value="PERMANENT" <?php echo (!empty($gm_memcatg)&&($gm_memcatg=="PERMANENT"))?'selected="selected"':'';?>>PERMANENT</option>
		<option value="TEMPORARY" <?php echo (!empty($gm_memcatg)&&($gm_memcatg=="TEMPORARY"))?'selected="selected"':'';?>>TEMPORARY</option>
		<option value="DA" <?php echo (!empty($gm_memcatg)&&($gm_memcatg=="DA"))?'selected="selected"':'';?>>DA</option>
		<option value="OTHERS" <?php echo (!empty($gm_memcatg)&&($gm_memcatg=="OTHERS"))?'selected="selected"':'';?>>OTHERS</option>
	</select>
	</div>

	</div>

	<div class="form-group <?php echo !empty($gm_name_Error)?'error':'';?>">

	<label for="Member Name" id="label_gm_name" class="col-md-4 control-label">Member Name <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="gm_name" id="gm_name" class="form-control capcase" required   maxlength="100" value="<?php echo !empty($gm_name)?$gm_name:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($gm_bankaccnbr_Error)?'error':'';?>">

	<label for="Bank Account Number" id="label_gm_bankaccnbr" class="col-md-4 control-label">Bank Account Number <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="gm_bankaccnbr" id="gm_bankaccnbr" class="smallform-control" required  onchange="check_bankacc();" style="width:150px" maxlength="15" value="<?php echo !empty($gm_bankaccnbr)?$gm_bankaccnbr:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($gm_email_Error)?'error':'';?>">

	<label for="eMail Address" id="label_gm_email" class="col-md-4 control-label">eMail Address</label>
	<div class="col-md-7">
	<input type="text" name="gm_email" id="gm_email" class="form-control"    maxlength="100" value="<?php echo !empty($gm_email)?$gm_email:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($gm_mphonenbr_Error)?'error':'';?>">

	<label for="Mobile Phone Number" id="label_gm_mphonenbr" class="col-md-4 control-label">Mobile Phone Number</label>
	<div class="col-md-7">
	<input type="text" name="gm_mphonenbr" id="gm_mphonenbr" class="form-control"    maxlength="10" value="<?php echo !empty($gm_mphonenbr)?$gm_mphonenbr:'';?>" />
	</div>

	</div>
	</div>
	</div>
	</div>

	</form>
	<script type="text/javascript">
		$('.btnNext').click(function(){
			$('.nav-tabs > .active').next('li').find('a').trigger('click');
		});

		$('.btnPrevious').click(function(){
			$('.nav-tabs > .active').prev('li').find('a').trigger('click');
		});
	</script>
	<script type="text/javascript">
		function previewImage(event){
			var output = document.getElementById('profimg');
			output.src = URL.createObjectURL(event.target.files[0]);}
	</script>

	<script type="text/javascript">

	function check_bankacc(){
		var jsvar_gm_bankaccnbr =  document.getElementById('gm_bankaccnbr').value;
		var valuetoPHP = 'datalistfor=gm_bankaccnbr&jsvar_gm_bankaccnbr=' + jsvar_gm_bankaccnbr;

		$.ajax({
			type: "POST",
			url: "gangcodemaster_jsajax.php",
			data: valuetoPHP,
			cache: false,
			success: function(responseResult){
				if (responseResult != 0){
					alert("This is already exists, can not be duplicate");
					document.getElementById('gm_bankaccnbr').value="";
					document.gangcodemaster.gm_bankaccnbr.focus();}
			}
		});
	}

	function check_badgeno(){
		var jsvar_gm_badge_no =  document.getElementById('gm_badge_no').value;
		var valuetoPHP = 'datalistfor=gm_badge_no&jsvar_gm_badge_no=' + jsvar_gm_badge_no;

		$.ajax({
			type: "POST",
			url: "gangcodemaster_jsajax.php",
			data: valuetoPHP,
			cache: false,
			success: function(responseResult){
				if (responseResult != 0){
					alert("This is already exists, can not be duplicate");
					document.getElementById('gm_badge_no').value="";
					document.gangcodemaster.gm_badge_no.focus();}
			}
		});
	}
	</script>
</div>
</div>
</section>
</section>
</div>
<div class="clearfix"></div><br>
</section>
</div>
<?php include "dist/inc/footercontent.php";?>
