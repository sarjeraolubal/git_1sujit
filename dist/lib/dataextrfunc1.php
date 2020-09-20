<?php

function get_picklist($p_type,$p_parent_code){
	$pdo = DBconnectionUtil::connect();
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$dlm_list = array();
	
	try{
		$sql = "SELECT dlm_code list_value,dlm_desc list_desc ".
			"FROM dropdown_list_m WHERE dlm_type='".$p_type."'";
			
		if (!empty($p_parent_code)){
			$sql = $sql." AND dlm_parentcode = '".$p_parent_code."'";
		}
		$q = $pdo->prepare($sql);
		$q->execute();
		$dlm_list = $q->fetchAll();		
	}
	catch (PDOException $sql_err) {
		error_log('Error while extraction of dropdown list - '.$sql_err->getMessage());	
	}
	DBconnectionUtil::disconnect();
	return $dlm_list;

} 

function add_selectoption($p_picklist,$p_selectedvalue,$p_vname,$p_onchangecall){

	$v_selectbox = '';
	
	if (!empty($p_vname)){
		$v_selectbox = '<select name="'.$p_vname.'" id="'.$p_vname.'" class="form-control"';
		
		if (!empty($p_onchangecall)){$v_selectbox .= 'onchange="'.$p_onchangecall.'"';}
		$v_selectbox .= '>';
	}
	
	$v_selectbox .= '<option value="" disabled selected style="display:none">Select from here</option>'; 	
	
	foreach ($p_picklist as $row):
	  $v_selected = ($row["list_value"] == $p_selectedvalue)? " selected " : "";

	  $v_selectbox .= '<option value="'.$row["list_value"].'" '.$v_selected.'>'.$row["list_desc"].'</option>';

	endforeach;
	if (!empty($p_vname)){	$v_selectbox .= "</select>";}
	
	return $v_selectbox;				
}
?>
