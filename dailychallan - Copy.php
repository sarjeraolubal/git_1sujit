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
require "dist/lib/lib_dailychallan.php";
if (empty($_POST)) {getlist_clrm_code();}

$clrm_code_list = $_SESSION["CLRM_Code_list"];

if (empty($_POST)) {getlist_gm_badge_no();}

$gm_badge_no_list = $_SESSION["Gm_Badge_No_list"];

if (empty($_POST)) {getlist_cm_code();}

$cm_code_list = $_SESSION["Cm_Code_list"];

if (empty($_POST)) {getlist_wtm_code();}

$wtm_code_list = $_SESSION["Wtm_Code_list"];

if (empty($_POST)) {getlist_sys_co_code();}

$sys_co_code_list = $_SESSION["Sys_Co_Code_list"];

if (empty($_POST)) {getlist_vm_code();}

$vm_code_list = $_SESSION["Vm_Code_list"];

$workdetails_list=array();
$gangdetails_list=array();

$errmsg = null;
$successmsg = null;
$OKtoSaveIntoDB = true;
$v_nextformname = "";
if(!isset($_SESSION['FORMTRANMODE'])){$_SESSION["FORMTRANMODE"] = "NEW";};
if (!empty($_POST)) {
	set_formpostvalue();
	error_log('checking.....');
	
	validate_formvalue();

	if($OKtoSaveIntoDB){
		if (dailychallan_insupddb()=="SUCCESS"){
			$_SESSION["FORMTRANMODE"] = "VIEW";
			$_SESSION["ENTRYPAGE"]="prog_control.php?p_nm=Daily Challan";
			$_SESSION["SEARCHPAGE"]="dailychallan_ss.php";

			if (isset($_SESSION["CLRM_Code_list"])){
				unset($_SESSION["CLRM_Code_list"]);
			}

			if (isset($_SESSION["Gm_Badge_No_list"])){
				unset($_SESSION["Gm_Badge_No_list"]);
			}

			if (isset($_SESSION["Cm_Code_list"])){
				unset($_SESSION["Cm_Code_list"]);
			}

			if (isset($_SESSION["Wtm_Code_list"])){
				unset($_SESSION["Wtm_Code_list"]);
			}

			if (isset($_SESSION["Sys_Co_Code_list"])){
				unset($_SESSION["Sys_Co_Code_list"]);
			}

			if (isset($_SESSION["Vm_Code_list"])){
				unset($_SESSION["Vm_Code_list"]);
			}
			header("location:savemessage.php");
		}
	}else{$_SESSION['FORMTRANMODE'] = 'NEW';}
}
	if($_SESSION['FORMTRANMODE'] <> "NEW"){getdata_forviewedit();}

	if (!isset($dwd_date)){$dwd_date = null;}
	if ($dwd_date != null) { $dsp_dwd_date=date('d-m-Y',strtotime($dwd_date));}else{$dsp_dwd_date="";}
?>

<?php include "dist/inc/loginheader.php";
include "dist/inc/leftsidemenu.php";
?>
<div class="content-wrapper">
<section class="content">
<h4>Daily Challan</h4>
<div class="row">
<section class="col-lg-13">
<section class="content-header">
<div class="box box-primary">
<div class="box-body">

		<?php if(!empty($errmsg)){echo '<p class="error" align="justify">'.$errmsg.'</p>';}?>
	<form id="dailychallan"  class="form-horizontal"  name="dailychallan" method="post" enctype="multipart/form-data" action="dailychallan.php">

<div align="right">
	<label for="Total Amount" id="label_dwd_total_amount" class="control-label">Total Amount <font color="red">*</font></label>
	<input type="number"  min="0.00" max="9999999999999.00" step="0.01"  name="dwd_total_amount" id="dwd_total_amount" class="form-control"  style="width:150px;display:inline;background:yellow;" maxlength="20" value="<?php echo !empty($dwd_total_amount)?$dwd_total_amount:0;?>" />

	<label for="Matha" id="label_dwd_matha" class="control-label">Matha <font color="red">*</font></label>
	<input type="number" name="dwd_matha" id="dwd_matha"  class="form-control" style="width:150px;display:inline;background:yellow;" maxlength="4" value="<?php echo !empty($dwd_matha)?$dwd_matha:0;?>" />

	<label for="Person" id="label_dwd_totalperson" class="control-label">Person <font color="red">*</font></label>
	<input type="number" name="dwd_totalperson" id="dwd_totalperson" class="form-control"  style="width:150px;display:inline;background:yellow;" maxlength="2" value="<?php echo !empty($dwd_totalperson)?$dwd_totalperson:0;?>" />

	
	<a id="btn-search" href="dailychallan_ss.php" class="btn btn-primary">Search&nbsp;<i class="fa fa-search"></i></a>&nbsp;&nbsp;
	<?php if($_SESSION['FORMTRANMODE'] <> "VIEW"){echo '<button id="btn-save" class="btn btn-success">Save&nbsp;<i class="fa fa-save"></i></button>';}else{echo "You are in view mode";}
		if($_SESSION["FORMTRANMODE"] <> "NEW"){echo '<a id="btn-login" class="btn btn-default" href="'.$_SESSION["ENTRYPAGE"].'" >New&nbsp;<i class="fa fa-pencil"></i></a>';}
	?>
</div>

	<script type="text/javascript">
	// to add dynamic row
	function add_dyna_row_workdetails_Tab(){
		var table = document.getElementById("table_workdetails_Tab");
		var rowCount = table.rows.length;
		var row = table.insertRow(rowCount);

		var cell1 = row.insertCell(0);
		var element1 = document.createElement("input");
		element1.type = "checkbox";
		element1.name="add_delete_flag[]";
		element1.className="dynarow_checkbox";
		cell1.appendChild(element1);

		var fld_id = "";
		var cell1 = row.insertCell(1);
		var element1 = document.createElement("select");
		fld_id = "wtm_code_"+rowCount;
		element1.id =fld_id;
		element1.name = "wtm_code[]";
		element1.className = "form-control";
		var wtm_code_CF = "refresh_workrate("+rowCount+")";
		var onchangeFunction = new Function(wtm_code_CF);
		element1.onchange = onchangeFunction;
		var opt = document.createElement("option");
		opt.value = "";
		opt.innerHTML = "--Select--"
		element1.appendChild(opt);

		var jArray= <?php echo json_encode($wtm_code_list); ?>;
		var optnrowCount = jArray.length;
		for(var i=0;i<optnrowCount;i++){
			var opt = document.createElement('option');
			opt.value = jArray[i].wtm_code;
			opt.innerHTML = jArray[i].wtm_name;
			element1.appendChild(opt);
		}

		cell1.appendChild(element1);

		var cell2 = row.insertCell(2);
		var element2 = document.createElement("input"); element2.type = "amount";
		fld_id = "wtm_rate_"+rowCount;
		element2.id =fld_id;
		element2.name = "wtm_rate[]";
		element2.className = "form-control";
		element2.disabled = "true";
		cell2.appendChild(element2);

		var cell3 = row.insertCell(3);
		var element3 = document.createElement("input"); element3.type = "text";
		fld_id = "dwd_bags_"+rowCount;
		element3.id =fld_id;
		element3.name = "dwd_bags[]";
		element3.className = "form-control";
		var dwd_bags_CF = "calc_Wtm_Amount("+rowCount+")";
		var onchangeFunction = new Function(dwd_bags_CF);
		element3.onchange = onchangeFunction;
		cell3.appendChild(element3);

		var cell4 = row.insertCell(4);
		var element4 = document.createElement("input"); element4.type = "amount";
		fld_id = "wtm_amount_"+rowCount;
		element4.id =fld_id;
		element4.name = "wtm_amount[]";
		element4.className = "form-control";
		element4.disabled = "true";
		cell4.appendChild(element4);

	}

	// for delete dynamic selected row
	function del_dyna_row_workdetails_Tab(){
		try {
			var table = document.getElementById("table_workdetails_Tab");
			var rowCount = table.rows.length;

			for(var i=0; i<rowCount; i++) {
				var row = table.rows[i];
				var chkbox = row.cells[0].childNodes[0];
				if(null != chkbox && true == chkbox.checked) {
					table.deleteRow(i);
					rowCount--;
					i--;
				}
			}
		}catch(e) {alert(e);}
	}
	// to display existing values in dynamic row tab
	function dsp_dyna_row_workdetails_Tab(){

	var mTab_Array= <?php echo json_encode($workdetails_list); ?>;
	var mtab_rowCount = mTab_Array.length;

	if (mtab_rowCount >0 ){
		for(var mtab_row =0;mtab_row<mtab_rowCount;mtab_row++){
			var table = document.getElementById("table_workdetails_Tab");
			var rowCount = table.rows.length;
			var row = table.insertRow(rowCount);

			var cell1 = row.insertCell(0);
			var element1 = document.createElement("input");
			element1.type = "checkbox";
			element1.name="add_delete_flag[]";
			element1.className="dynarow_checkbox";
			cell1.appendChild(element1);

			var fld_id = "";
			var cell1 = row.insertCell(1);
			var element1 = document.createElement("select");
			fld_id = "wtm_code_"+rowCount;
			element1.id =fld_id;
			element1.name = "wtm_code[]";
			element1.className = "form-control";
			var wtm_code_CF = "refresh_workrate("+rowCount+")";
			var onchangeFunction = new Function(wtm_code_CF);
			element1.onchange = onchangeFunction;

			var jArray= <?php echo json_encode($wtm_code_list); ?>;
			var optnrowCount = jArray.length;
			for(var i=0;i<optnrowCount;i++){
				var opt = document.createElement('option');
				opt.value = jArray[i].wtm_code;
				opt.innerHTML = jArray[i].wtm_name;

				if (jArray[i].wtm_code==mTab_Array[mtab_row].wtm_code){opt.selected = true;};
				element1.appendChild(opt);
		}

			cell1.appendChild(element1);

			var cell2 = row.insertCell(2);
			var element2 = document.createElement("input"); element2.type = "amount";
			fld_id = "wtm_rate_"+rowCount;
			element2.id =fld_id;
			element2.name = "wtm_rate[]";
			element2.className = "form-control";
			element2.value = mTab_Array[mtab_row].wtm_rate;
			cell2.appendChild(element2);

			var cell3 = row.insertCell(3);
			var element3 = document.createElement("input"); element3.type = "text";
			fld_id = "dwd_bags_"+rowCount;
			element3.id =fld_id;
			element3.name = "dwd_bags[]";
			element3.className = "form-control";
			element3.value = mTab_Array[mtab_row].dwd_bags;
			var dwd_bags_CF = "calc_Wtm_Amount("+rowCount+")";
			var onchangeFunction = new Function(dwd_bags_CF);
			element3.onchange = onchangeFunction;
			cell3.appendChild(element3);

			var cell4 = row.insertCell(4);
			var element4 = document.createElement("input"); element4.type = "amount";
			fld_id = "wtm_amount_"+rowCount;
			element4.id =fld_id;
			element4.name = "wtm_amount[]";
			element4.className = "form-control";
			element4.value = mTab_Array[mtab_row].wtm_amount;
			cell4.appendChild(element4);

		}
	}
	}

	// to add dynamic row
	function add_dyna_row_gangdetails_Tab(){
		var table = document.getElementById("table_gangdetails_Tab");
		var rowCount = table.rows.length;
		var row = table.insertRow(rowCount);

		var cell1 = row.insertCell(0);
		var element1 = document.createElement("input");
		element1.type = "checkbox";
		element1.name="add_delete_flag[]";
		element1.className="dynarow_checkbox";
		cell1.appendChild(element1);

		var fld_id = "";
		var cell1 = row.insertCell(1);
		var element1 = document.createElement("input"); element1.type = "text";
		fld_id = "gm_gang_code_"+rowCount;
		element1.id =fld_id;
		element1.name = "gm_gang_code[]";
		element1.className = "form-control";
		var gm_gang_code_CF = "refresh_badgeno("+rowCount+")";
		var onchangeFunction = new Function(gm_gang_code_CF);
		element1.onchange = onchangeFunction;
		cell1.appendChild(element1);

		var cell2 = row.insertCell(2);
		var element2 = document.createElement("select");
		fld_id = "gm_badge_no_"+rowCount;
		element2.id =fld_id;
		element2.name = "gm_badge_no[]";
		element2.className = "form-control";
		var gm_badge_no_CF = "refresh_memcatg("+rowCount+")";
		var onchangeFunction = new Function(gm_badge_no_CF);
		element2.onchange = onchangeFunction;
		var opt = document.createElement("option");
		opt.value = "";
		opt.innerHTML = "--Select--"
		element2.appendChild(opt);

		var jArray= <?php echo json_encode($gm_badge_no_list); ?>;
		var optnrowCount = jArray.length;
		for(var i=0;i<optnrowCount;i++){
			var opt = document.createElement('option');
			opt.value = jArray[i].gm_badge_no;
			opt.innerHTML = jArray[i].gm_name;
			element2.appendChild(opt);
		}

		cell2.appendChild(element2);

		var cell3 = row.insertCell(3);
		var element3 = document.createElement("input"); element3.type = "text";
		fld_id = "gm_memcatg_"+rowCount;
		element3.id =fld_id;
		element3.name = "gm_memcatg[]";
		element3.className = "form-control";
		element3.disabled = "true";
		cell3.appendChild(element3);

		var cell4 = row.insertCell(4);
		var element4 = document.createElement("input"); element4.type = "text";
		fld_id = "gm_bankaccnbr_"+rowCount;
		element4.id =fld_id;
		element4.name = "gm_bankaccnbr[]";
		element4.className = "form-control";
		element4.disabled = "true";
		cell4.appendChild(element4);

	}

	// for delete dynamic selected row
	function del_dyna_row_gangdetails_Tab(){
		try {
			var table = document.getElementById("table_gangdetails_Tab");
			var rowCount = table.rows.length;

			for(var i=0; i<rowCount; i++) {
				var row = table.rows[i];
				var chkbox = row.cells[0].childNodes[0];
				if(null != chkbox && true == chkbox.checked) {
					table.deleteRow(i);
					rowCount--;
					i--;
				}
			}
		}catch(e) {alert(e);}
	}
	// to display existing values in dynamic row tab
	function dsp_dyna_row_gangdetails_Tab(){

	var mTab_Array= <?php echo json_encode($gangdetails_list); ?>;
	var mtab_rowCount = mTab_Array.length;

	if (mtab_rowCount >0 ){
		for(var mtab_row =0;mtab_row<mtab_rowCount;mtab_row++){
			var table = document.getElementById("table_gangdetails_Tab");
			var rowCount = table.rows.length;
			var row = table.insertRow(rowCount);

			var cell1 = row.insertCell(0);
			var element1 = document.createElement("input");
			element1.type = "checkbox";
			element1.name="add_delete_flag[]";
			element1.className="dynarow_checkbox";
			cell1.appendChild(element1);

			var fld_id = "";
			var cell1 = row.insertCell(1);
			var element1 = document.createElement("input"); element1.type = "text";
			fld_id = "gm_gang_code_"+rowCount;
			element1.id =fld_id;
			element1.name = "gm_gang_code[]";
			element1.className = "form-control";
			element1.value = mTab_Array[mtab_row].gm_gang_code;
			var gm_gang_code_CF = "refresh_badgeno("+rowCount+")";
			var onchangeFunction = new Function(gm_gang_code_CF);
			element1.onchange = onchangeFunction;
			cell1.appendChild(element1);

			var cell2 = row.insertCell(2);
			var element2 = document.createElement("select");
			fld_id = "gm_badge_no_"+rowCount;
			element2.id =fld_id;
			element2.name = "gm_badge_no[]";
			element2.className = "form-control";
			var gm_badge_no_CF = "refresh_memcatg("+rowCount+")";
			var onchangeFunction = new Function(gm_badge_no_CF);
			element2.onchange = onchangeFunction;

			var jArray= <?php echo json_encode($gm_badge_no_list); ?>;
			var optnrowCount = jArray.length;
			for(var i=0;i<optnrowCount;i++){
				var opt = document.createElement('option');
				opt.value = jArray[i].gm_badge_no;
				opt.innerHTML = jArray[i].gm_name;

				if (jArray[i].gm_badge_no==mTab_Array[mtab_row].gm_badge_no){opt.selected = true;};
				element2.appendChild(opt);
		}

			cell2.appendChild(element2);

			var cell3 = row.insertCell(3);
			var element3 = document.createElement("input"); element3.type = "text";
			fld_id = "gm_memcatg_"+rowCount;
			element3.id =fld_id;
			element3.name = "gm_memcatg[]";
			element3.className = "form-control";
			element3.value = mTab_Array[mtab_row].gm_memcatg;
			cell3.appendChild(element3);

			var cell4 = row.insertCell(4);
			var element4 = document.createElement("input"); element4.type = "text";
			fld_id = "gm_bankaccnbr_"+rowCount;
			element4.id =fld_id;
			element4.name = "gm_bankaccnbr[]";
			element4.className = "form-control";
			element4.value = mTab_Array[mtab_row].gm_bankaccnbr;
			cell4.appendChild(element4);

		}
	}
	}

	</script>

	<!-- for date picker if any date field -->
	<script type="text/javascript">
		$(function () {
			var dspdt=<?php echo json_encode($dsp_dwd_date);?>;
			$("#dtpik_dwd_date").datepicker({autoclose: true, todayHighlight: true}).datepicker('update', dspdt);;
		});
	</script>

	<ul id = "dailychallan_Tab"  class = "nav nav-tabs">
	<li class = "active"><a href = "#primayinfo_Tab" data-toggle = "tab">Primay Info</a></li>
	<li><a href = "#workdetails_Tab" data-toggle = "tab">Work Details</a></li>
	<li><a href = "#gangdetails_Tab" data-toggle = "tab">Gang Details</a></li>
	</ul>
	<div id = "dailychallan_TabContent" class = "tab-content">
	<div class = "tab-pane fade in active" id = "primayinfo_Tab"><br>
	<input type="hidden" id="dwd_tabreckey" name="dwd_tabreckey" value=<?php echo !empty($dwd_tabreckey)?$dwd_tabreckey:"";?>>
	<input type="hidden" id="dwd_cha_no" name="dwd_cha_no" value=<?php echo !empty($dwd_cha_no)?$dwd_cha_no:"";?>>


	<div class="col-md-6 first">

	<div class="form-group <?php echo !empty($sys_co_code_Error)?'error':'';?>">

	<label for="Company" id="label_sys_co_code" class="col-md-4 control-label">Company <font color="red">*</font></label>
	<div class="col-md-7">
	<?php
	$sys_co_code_selectedvalue = !empty($sys_co_code)?$sys_co_code:"";
	$sys_co_code_selectbox = '<select " name="sys_co_code" id="sys_co_code" class="form-control" required  ><option value=""></option>';
	foreach ($sys_co_code_list as $row):
		$sys_co_code_value = $row["sys_co_code"];
		$sys_co_code_desc = $row["sys_co_name"];
		$sys_co_code_selected = ($sys_co_code_selectedvalue == $sys_co_code_value)?" selected ":"";
		$sys_co_code_selectbox = $sys_co_code_selectbox .'<option value="'.$sys_co_code_value.'" '.$sys_co_code_selected.'>'.$sys_co_code_desc.'</option>';
	endforeach;
	$sys_co_code_selectbox .= "</select>";
	echo $sys_co_code_selectbox;?>
	</div>

	</div>

	<div class="form-group <?php echo !empty($dwd_date_Error)?'error':'';?>">

	<label for="Work Date" id="label_dwd_date" class="col-md-4 control-label">Work Date <font color="red">*</font></label>
	<div class="col-md-7">
	<div id="dtpik_dwd_date" class="input-group date" data-date-format="dd-M-yyyy" style="width:160px">
		 <input class="form-control" type="text" readonly name="dsp_dwd_date"/>
		 <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
	</div>
	</div>

	</div>

	<div class="form-group <?php echo !empty($dwd_slip_nbr_Error)?'error':'';?>">

	<label for="Slip Number" id="label_dwd_slip_nbr" class="col-md-4 control-label">Slip Number <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="text" name="dwd_slip_nbr" id="dwd_slip_nbr" class="form-control" required  onchange="check_dlychln();" style="width:150px" maxlength="4" value="<?php echo !empty($dwd_slip_nbr)?$dwd_slip_nbr:'';?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($vm_code_Error)?'error':'';?>">

	<label for="Vessel Name" id="label_vm_code" class="col-md-4 control-label">Vessel Name <font color="red">*</font></label>
	<div class="col-md-7">
	<?php
	$vm_code_selectedvalue = !empty($vm_code)?$vm_code:"";
	$vm_code_selectbox = '<select " name="vm_code" id="vm_code" class="form-control" required  ><option value=""></option>';
	foreach ($vm_code_list as $row):
		$vm_code_value = $row["vm_code"];
		$vm_code_desc = $row["vm_name"];
		$vm_code_selected = ($vm_code_selectedvalue == $vm_code_value)?" selected ":"";
		$vm_code_selectbox = $vm_code_selectbox .'<option value="'.$vm_code_value.'" '.$vm_code_selected.'>'.$vm_code_desc.'</option>';
	endforeach;
	$vm_code_selectbox .= "</select>";
	echo $vm_code_selectbox;?>
	</div>

	</div>
	</div>

	<div class="col-md-6 second">

	<div class="form-group <?php echo !empty($dwd_shed_Error)?'error':'';?>">

	<label for="Shed" id="label_dwd_shed" class="col-md-4 control-label">Shed</label>
	<div class="col-md-7">
	<select  name="dwd_shed" id="dwd_shed" class="form-control"   >
		<option value="SHED1" <?php echo (!empty($dwd_shed)&&($dwd_shed=="SHED1"))?'selected="selected"':'';?>>SHED1</option>
		<option value="SHED2" <?php echo (!empty($dwd_shed)&&($dwd_shed=="SHED2"))?'selected="selected"':'';?>>SHED2</option>
		<option value="SHED3" <?php echo (!empty($dwd_shed)&&($dwd_shed=="SHED3"))?'selected="selected"':'';?>>SHED3</option>
	</select>
	</div>

	</div>

	<div class="form-group <?php echo !empty($dwd_shift_Error)?'error':'';?>">

	<label for="Shift" id="label_dwd_shift" class="col-md-4 control-label">Shift</label>
	<div class="col-md-7">
	<select  name="dwd_shift" id="dwd_shift" class="form-control"   >
		<option value="SHIFT1" <?php echo (!empty($dwd_shift)&&($dwd_shift=="SHIFT1"))?'selected="selected"':'';?>>SHIFT1</option>
		<option value="SHIFT2" <?php echo (!empty($dwd_shift)&&($dwd_shift=="SHIFT2"))?'selected="selected"':'';?>>SHIFT2</option>
		<option value="SHIFT3" <?php echo (!empty($dwd_shift)&&($dwd_shift=="SHIFT3"))?'selected="selected"':'';?>>SHIFT3</option>
	</select>
	</div>

	</div>

	<div class="form-group <?php echo !empty($cm_code_Error)?'error':'';?>">

	<label for="Commodity" id="label_cm_code" class="col-md-4 control-label">Commodity <font color="red">*</font></label>
	<div class="col-md-7">
	<?php
	$cm_code_selectedvalue = !empty($cm_code)?$cm_code:"";
	$cm_code_selectbox = '<select " name="cm_code" id="cm_code" class="form-control" required  ><option value=""></option>';
	foreach ($cm_code_list as $row):
		$cm_code_value = $row["cm_code"];
		$cm_code_desc = $row["cm_name"];
		$cm_code_selected = ($cm_code_selectedvalue == $cm_code_value)?" selected ":"";
		$cm_code_selectbox = $cm_code_selectbox .'<option value="'.$cm_code_value.'" '.$cm_code_selected.'>'.$cm_code_desc.'</option>';
	endforeach;
	$cm_code_selectbox .= "</select>";
	echo $cm_code_selectbox;?>
	</div>

	</div>

	<div class="form-group <?php echo !empty($clrm_code_Error)?'error':'';?>">

	<label for="Labor Code" id="label_clrm_code" class="col-md-4 control-label">Labor Code <font color="red">*</font></label>
	<div class="col-md-7">
	<?php
	$clrm_code_selectedvalue = !empty($clrm_code)?$clrm_code:"";
	$clrm_code_selectbox = '<select " name="clrm_code" id="clrm_code" class="form-control" required  onchange="refresh_laborrate();"><option value=""></option>';
	foreach ($clrm_code_list as $row):
		$clrm_code_value = $row["clrm_code"];
		$clrm_code_desc = $row["clrm_desc"];
		$clrm_code_selected = ($clrm_code_selectedvalue == $clrm_code_value)?" selected ":"";
		$clrm_code_selectbox = $clrm_code_selectbox .'<option value="'.$clrm_code_value.'" '.$clrm_code_selected.'>'.$clrm_code_desc.'</option>';
	endforeach;
	$clrm_code_selectbox .= "</select>";
	echo $clrm_code_selectbox;?>
	</div>

	</div>

	<div class="form-group <?php echo !empty($clrm_rate_Error)?'error':'';?>">

	<label for="Labor Rate" id="label_clrm_rate" class="col-md-4 control-label">Labor Rate <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="number" name="clrm_rate" id="clrm_rate" class="form-control" required readonly   style="width:150px" maxlength="20" value="<?php echo !empty($clrm_rate)?$clrm_rate:0;?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($dwd_labors_Error)?'error':'';?>">

	<label for="Number of Labors" id="label_dwd_labors" class="col-md-4 control-label">Number of Labors <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="number" name="dwd_labors" id="dwd_labors" class="form-control" required  onchange="calc_Lab_Amount();" style="width:60px" maxlength="2" value="<?php echo !empty($dwd_labors)?$dwd_labors:0;?>" />
	</div>

	</div>

	<div class="form-group <?php echo !empty($dwd_lab_amount_Error)?'error':'';?>">

	<label for="Labor Amount" id="label_dwd_lab_amount" class="col-md-4 control-label">Labor Amount <font color="red">*</font></label>
	<div class="col-md-7">
	<input type="number"  min="0.00" max="9999999999999.00" step="0.01"  name="dwd_lab_amount" id="dwd_lab_amount" class="form-control" required readonly   style="width:150px" maxlength="20" value="<?php echo !empty($dwd_lab_amount)?$dwd_lab_amount:0;?>" />
	</div>

	</div>
	</div>
		<div align="right">
		<a class="btn btn-default btnNext" href="#workdetails_Tab" data-toggle="tab">Next&nbsp;<i class="fa fa-arrow-circle-right"></i></a>
		</div>
	</div>
	<div class = "tab-pane fade in" id = "workdetails_Tab"><br>
	<input type="hidden" id="dc_wdtl_tabreckey" name="dc_wdtl_tabreckey" value=<?php echo !empty($dc_wdtl_tabreckey)?$dc_wdtl_tabreckey:"";?>>
	<input type="hidden" id="dwd_tabreckey" name="dwd_tabreckey" value=<?php echo !empty($dwd_tabreckey)?$dwd_tabreckey:"";?>>

	<div style="overflow:scroll;">
	<table class="table table-striped table-bordered gradienttable" id="table_workdetails_Tab" style="width:1150px">
		<thead><tr>
		<td>Select</td>
		<td>Work Type</td>
		<td>Work Type Rate</td>
		<td>Number of Bags</td>
		<td>Work Amount</td>
	</tr></thead>
	<tbody>
			<script type="text/javascript">
						<?php if (count($workdetails_list) >0){ echo "dsp_dyna_row_workdetails_Tab();";}else{echo "add_dyna_row_workdetails_Tab();";}?>
			</script>
	</tbody>
	</table>
	</div>

		<div align="right">
			<a href="#" title="Add Row" id="addbutton" onclick="add_dyna_row_workdetails_Tab();"><img src="dist/img/addrow.png" width="50px" height="50px" > &nbsp;Add New Row</a>
			<a href="#" title="Delete Selected Row" id="delbutton" onclick="del_dyna_row_workdetails_Tab();"><img src="dist/img/deleterow.png" width="50px" height="50px" >&nbsp;Delete Selected Row </a>
		</div>

		<div align="right">
		<a class="btn btn-default btnPrevious" href="#primayinfo_Tab" data-toggle="tab"><i class="fa fa-arrow-circle-left"></i>&nbsp;Prev</a>
		<a class="btn btn-default btnNext" href="#gangdetails_Tab" data-toggle="tab">Next&nbsp;<i class="fa fa-arrow-circle-right"></i></a>
		</div>
	</div>
	<div class = "tab-pane fade in" id = "gangdetails_Tab"><br>
	<input type="hidden" id="dc_gdtl_tabreckey" name="dc_gdtl_tabreckey" value=<?php echo !empty($dc_gdtl_tabreckey)?$dc_gdtl_tabreckey:"";?>>
	<input type="hidden" id="dwd_tabreckey" name="dwd_tabreckey" value=<?php echo !empty($dwd_tabreckey)?$dwd_tabreckey:"";?>>

	<div style="overflow:scroll;">
	<table class="table table-striped table-bordered gradienttable" id="table_gangdetails_Tab" style="width:1120px">
		<thead><tr>
		<td>Select</td>
		<td>Gang Code</td>
		<td>Member ID</td>
		<td>Category</td>
		<td>Account Number</td>
	</tr></thead>
	<tbody>
			<script type="text/javascript">
						<?php if (count($gangdetails_list) >0){ echo "dsp_dyna_row_gangdetails_Tab();";}else{echo "add_dyna_row_gangdetails_Tab();";}?>
			</script>
	</tbody>
	</table>
	</div>

		<div align="right">
			<a href="#" title="Add Row" id="addbutton" onclick="add_dyna_row_gangdetails_Tab();"><img src="dist/img/addrow.png" width="50px" height="50px" > &nbsp;Add New Row</a>
			<a href="#" title="Delete Selected Row" id="delbutton" onclick="del_dyna_row_gangdetails_Tab();"><img src="dist/img/deleterow.png" width="50px" height="50px" >&nbsp;Delete Selected Row </a>
		</div>

		<div align="right">
		<a class="btn btn-default btnPrevious" href="#workdetails_Tab" data-toggle="tab"><i class="fa fa-arrow-circle-left"></i>&nbsp;Prev</a>
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

	function refresh_badgeno(element_no){
		var fld = "";
		fld = "gm_gang_code_"+element_no;
		var jsvar_gm_gang_code =  document.getElementById(fld).value;
		var valuetoPHP = 'datalistfor=gm_badge_no&jsvar_gm_gang_code=' + jsvar_gm_gang_code;

		var refresh_fld = "gm_badge_no_"+element_no;
		$("#"+refresh_fld).html("--select--");

		$.ajax({
			type: "POST",
			url: "dailychallan_jsajax.php",
			data: valuetoPHP,
			cache: false,
			success: function(responseResult){
				$("#"+refresh_fld).append(responseResult);
			}
		});
	}

	function refresh_laborrate(){
		var jsvar_clrm_code =  document.getElementById('clrm_code').value;
		var valuetoPHP = 'datalistfor=clrm_rate&jsvar_clrm_code=' + jsvar_clrm_code;

		$.ajax({
			type: "POST",
			url: "dailychallan_jsajax.php",
			data: valuetoPHP,
			cache: false,
			success: function(responseResult){
				ajax_clrm_rate = document.querySelector('#clrm_rate');
				ajax_clrm_rate.value = responseResult;
			}
		});
	}

	function refresh_workrate(element_no){
		var fld = "";
		fld = "wtm_code_"+element_no;
		var jsvar_wtm_code =  document.getElementById(fld).value;
		var valuetoPHP = 'datalistfor=wtm_rate&jsvar_wtm_code=' + jsvar_wtm_code;

		$.ajax({
			type: "POST",
			url: "dailychallan_jsajax.php",
			data: valuetoPHP,
			cache: false,
			success: function(responseResult){
				var reset_fld = "wtm_rate_"+element_no;
				ajax_wtm_rate = document.querySelector('#'+reset_fld);
				ajax_wtm_rate.value = responseResult;
			}
		});
	}

	function refresh_memcatg(element_no){
		var fld = "";
		fld = "gm_gang_code_"+element_no;
		var jsvar_gm_gang_code =  document.getElementById(fld).value;
		fld = "gm_badge_no_"+element_no;
		var jsvar_gm_badge_no =  document.getElementById(fld).value;
		var valuetoPHP = 'datalistfor=gm_memcatg|gm_bankaccnbr&jsvar_gm_gang_code=' + jsvar_gm_gang_code +'&jsvar_gm_badge_no=' + jsvar_gm_badge_no;

		$.ajax({
			type: "POST",
			url: "dailychallan_jsajax.php",
			data: valuetoPHP,
			cache: false,
			success: function(responseResult){
				var result_val = $.parseJSON(responseResult);

				var reset_fld = "gm_memcatg_"+element_no;
				ajax_gm_memcatg = document.querySelector('#'+reset_fld);
				ajax_gm_memcatg.value = result_val.gm_memcatg;

				var reset_fld = "gm_bankaccnbr_"+element_no;
				ajax_gm_bankaccnbr = document.querySelector('#'+reset_fld);
				ajax_gm_bankaccnbr.value = result_val.gm_bankaccnbr;

			}
		});
		
		var tot_gangs = (document.getElementById("table_gangdetails_Tab").rows.length)-1;
		document.querySelector('#dwd_totalperson').value = (tot_gangs);
		document.querySelector('#dwd_matha').value = (Number(document.getElementById('dwd_total_amount').value)/tot_gangs);
		
				
	}

	function calc_Lab_Amount(){
		var mem_clrm_rate =  document.getElementById('clrm_rate').value;
		var mem_dwd_labors =  document.getElementById('dwd_labors').value;
		var mem_dwd_lab_amount = (mem_dwd_labors *  mem_clrm_rate);
		document.querySelector('#dwd_lab_amount').value=mem_dwd_lab_amount;

	}

	function calc_Wtm_Amount(element_no){
		var fld = "";
		fld = "wtm_rate_"+element_no;
		var mem_wtm_rate =  document.getElementById(fld).value;

		fld = "dwd_bags_"+element_no;
		var mem_dwd_bags =  document.getElementById(fld).value;

		mem_wtm_amount = (mem_dwd_bags *  mem_wtm_rate);

		var reset_fld = "wtm_amount_"+element_no;
		ajax_mem_wtm_amount = document.querySelector('#'+reset_fld);
		ajax_mem_wtm_amount.value = mem_wtm_amount;
		
		var tot_dwd_total_amount = Number(document.getElementById('dwd_total_amount').value);
		tot_dwd_total_amount = tot_dwd_total_amount+ Number(mem_wtm_amount);
		
		document.querySelector('#dwd_total_amount').value = (tot_dwd_total_amount);

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
