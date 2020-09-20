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

//-------------------------------------------left menu funtion----------

function dyn_side_menu () {
   

//$pdo = new PDO("mysql:host=localhost;dbname=mercdmaps", "mercombudsman", "");
//$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

try {
$pdo = new PDO("mysql:host=localhost;dbname=mercdmaps", "mercdmuser", "Fez0^w10");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {
    echo "Failed to get DB handle:" . $e->getMessage() . "\n";
    exit;
}
    $query = $pdo->prepare("select `name_menu` from `main_menu`");
    $query->execute();
    $query1 = $pdo->prepare("SELECT * FROM `main_menu` ORDER BY `main_menu`.`menu_sequence` ASC");
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
    $query_sub_menu = $pdo->prepare("SELECT * FROM `sub_menu` WHERE `id_menu`='$id_menu' ORDER BY `sub_menu_sequence` ASC"); $query_sub_menu->execute();
    $sub_menu_count = $query_sub_menu->rowCount();
    if($sub_menu_count > 0)
          {
          echo "<ul class='treeview-menu'>";
          $ilx=1; 
          while($sub_menu = $query_sub_menu->fetch(PDO::FETCH_ASSOC)) { 
		  //$_SESSION['h_menu']=13; $mymenu=$_SESSION['h_menu']; $arramymenu=explode(",", $mymenu) ; if(in_array($sub_menu['id_sub_menu'], $arramymenu))
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
?>