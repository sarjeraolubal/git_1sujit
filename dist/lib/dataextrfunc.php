<?php
function get_picklist($p_type,$p_parent_code) {
	$pdo = DBconnectionUtil::connect();
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$dlm_list = array();
	
	try {
		$sql = "SELECT dlm_code list_value,dlm_desc list_desc ".
			"FROM dropdown_list_m WHERE dlm_type='".$p_type."'";
			
		if (!empty($p_parent_code)) {
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

function add_selectoption($p_picklist,$p_selectedvalue,$p_vname,$p_onchangecall) {

	$v_selectbox = '';
	
	if (!empty($p_vname)) {
		$v_selectbox = '<select name="'.$p_vname.'" id="'.$p_vname.'" class="form-control"';
		
		if (!empty($p_onchangecall)) {$v_selectbox .= 'onchange="'.$p_onchangecall.'"';}
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

//-------------------------------------------left menu funtion----------


function dyn_side_menu () {
	//session_start();
	//print_r($_SESSION);
try {
$pdo = new PDO ("mysql:host=localhost;dbname=mercombu_mercdmaps", "mercombu_mrm", "rameshbhau");
$pdo->setAttribute (PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {
    echo "Failed to get DB handle:" . $e->getMessage() . "\n";
    exit;
}
	$rolequery = $pdo->prepare("select `role` from `role_tbl`");
	$rolequery->execute();
	while ($role = $rolequery->fetch(PDO::FETCH_ASSOC))
	{
		//print_r($role);
	}
/*global $wppa;
$wppa = array ('Super_admin' => 's_adm', 'Admin' => 'adm', 'manager' => 'mgr', 'clerk' => 'cl', 'officer' => 'off', 'Executive' => 'exe', 'Member' => 'mbr', 'Employee' => 'emp', 'Lead' => 'ld', 'Visitor' => 'vst', 'Executive_head' => 'exe_hd', 'Line_manager' => 'li_mgr', 'Human_resource' => 'hu_reso', 'Account_manager' => 'acc_mgr', 'Senior_accountant' => 'sr_mgr');

echo $wppa;
if ( ! session_id() ) @ session_start();
if ( ! isset($_SESSION['wppa']) $_SESSION['wppa'] = array();

if ( ! isset($_SESSION['wppa']['album']) ) $_SESSION['wppa']['album'] = array();
$_SESSION['wppa']['album'][1234] = 1;

$wppa['elm1'] = 'newvalue1';

print_r($_SESSION);
*/
	$query = $pdo->prepare("select `name_menu` from `main_menu`");
    $query->execute();
    //$query1 = $pdo->prepare("SELECT * FROM `r_menu` ORDER BY `r_menu`.`order` ASC");
	$query1 = $pdo->prepare("SELECT * FROM `main_menu` WHERE `id_menu` IN (SELECT `m_option` FROM `menupermission` WHERE `role`='$_SESSION[role]') ORDER BY `main_menu`.`menu_sequence` ASC");
    $query1->execute();
	
echo "<li class='header'>".date('d/F/Y')."</li>";
    while($menu = $query1->fetch(PDO::FETCH_ASSOC)) {
echo "<li class='treeview'>";
    echo "<a id='menu-".$menu['id_menu']."' href='#'>";
        echo "<i class='".$menu['icon']."'></i>";
        echo "<span>".$menu['name_menu']."</span>";
        echo "<i class='fa fa-angle-left pull-right'></i>";
    echo "</a>";
    $id_menu = $menu['id_menu']; 
    //$query_sub_menu = $pdo->prepare("SELECT * FROM `r_menu_sub` WHERE `id_menu`='$id_menu' ORDER BY `order_sub_menu` ASC"); $query_sub_menu->execute();
	$query_sub_menu = $pdo->prepare("SELECT * FROM `sub_menu` WHERE `id_menu`='$id_menu' AND `id_sub_menu` IN (SELECT `sub_m_option` FROM `menupermission` WHERE `role`='$_SESSION[role]') ORDER BY `sub_menu_sequence` ASC"); $query_sub_menu->execute();
    $sub_menu_count = $query_sub_menu->rowCount();
    if($sub_menu_count > 0)
          {
          echo "<ul class='treeview-menu'>";
          $ilx=1; 
          while($sub_menu = $query_sub_menu->fetch(PDO::FETCH_ASSOC)) { 
              echo "<li>";             
                  echo "<a href='prog_control.php?p_nm=".$sub_menu['url']."' title='".$sub_menu['title']."'><i class='".$sub_menu['icon']."'></i><span class='wrap'>".$sub_menu['name_sub_menu']."</span>";
                  echo "</a>";
              echo "</li>";
          $ilx++;  }
          echo "</ul>";
          } 
    echo "</li>";
      }
    $pdo=null;
}
//return dyn_side_menu();
?>