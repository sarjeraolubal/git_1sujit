<?php

$datalistfor = $_POST["datalistfor"];

$HTMLvalue = "";
require "dist/lib/dbconnection.php";
$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

try{

if($datalistfor == "gm_badge_no"){
		$gm_gang_code = $_POST["jsvar_gm_gang_code"];
		$sql ="SELECT gm_badge_no rowvalue,gm_name rowdesc  FROM lp_gang_m WHERE   gm_gang_code = ?";

		$q = $pdo->prepare($sql);
		$q->execute(array( $gm_gang_code));

		$HTMLvalue ="";

		$dd_list = $q->fetchAll();
		$HTMLvalue ="<option value=''></option>";
		foreach ($dd_list as $row){
			$HTMLvalue = $HTMLvalue."<option value='".$row["rowvalue"]."'>".$row["rowdesc"]."</option>";
		}

		echo $HTMLvalue;
	}

if($datalistfor == "clrm_rate"){
		$clrm_code = $_POST["jsvar_clrm_code"];
		$sql ="SELECT clrm_rate FROM lp_labour_rm WHERE   clrm_code = ?";

		$q = $pdo->prepare($sql);
		$q->execute(array( $clrm_code));

		$HTMLvalue ="";

		$assigndb_value = $q->fetch(PDO::FETCH_ASSOC);

		$HTMLvalue = $assigndb_value["clrm_rate"];

		echo $HTMLvalue;

	}

if($datalistfor == "wtm_rate"){
		$wtm_code = $_POST["jsvar_wtm_code"];
		$sql ="SELECT wtm_rate FROM lp_work_tm WHERE   wtm_code = ?";

		$q = $pdo->prepare($sql);
		$q->execute(array( $wtm_code));

		$HTMLvalue ="";

		$assigndb_value = $q->fetch(PDO::FETCH_ASSOC);

		$HTMLvalue = $assigndb_value["wtm_rate"];

		echo $HTMLvalue;

	}

if($datalistfor == "gm_memcatg|gm_bankaccnbr"){
		$gm_gang_code = $_POST["jsvar_gm_gang_code"];
		$gm_badge_no = $_POST["jsvar_gm_badge_no"];
		$sql ="SELECT gm_memcatg,gm_bankaccnbr FROM lp_gang_m WHERE   gm_gang_code = ? AND gm_badge_no = ?";

		$q = $pdo->prepare($sql);
		$q->execute(array( $gm_gang_code, $gm_badge_no));

		$HTMLvalue ="";

		$assigndb_value = $q->fetch(PDO::FETCH_ASSOC);

		$return_HTMLvalue = array(
				"gm_memcatg" => $assigndb_value["gm_memcatg"],
				"gm_bankaccnbr" => $assigndb_value["gm_bankaccnbr"]
				);

		echo json_encode($return_HTMLvalue);

	}

if($datalistfor == "gangbadgelist"){
		$gm_gang_code = $_POST["jsvar_gm_gang_code"];
		$gm_badge_no = $_POST["jsvar_gm_badge_no"];

		//error_log('gang code -'.$gm_gang_code);
		
		$sql = 'SELECT gm_badge_no rowvalue,gm_name rowdesc FROM lp_gang_m WHERE gm_gang_code =?';
		//if ($_SESSION["uprof_ddl_byco"]=="YES"){$sql .= ' AND sys_co_code = "'.$_SESSION["uprof_ddl_byco"].'"';}
		//if ($_SESSION["uprof_ddl_bycobr"]=="YES"){$sql .= ' AND sys_co_br_code = "'.$_SESSION["uprof_ddl_bycobr"].'"';}

		$q = $pdo->prepare($sql);
		$q->execute(array($gm_gang_code));
		//$extr_vl = $q->fetchAll();
		
		$HTMLvalue ="";

		$dd_list = $q->fetchAll();
		$HTMLvalue ="<option value=''></option>";
		foreach ($dd_list as $row){
			if ($gm_badge_no==$row["rowvalue"]){
				$HTMLvalue = $HTMLvalue."<option value='".$row["rowvalue"]."' selected=true >".$row["rowdesc"]." </option>";
			}
			else{
				$HTMLvalue = $HTMLvalue."<option value='".$row["rowvalue"]."'>".$row["rowdesc"]."</option>";
			}
		}

		echo $HTMLvalue;
		

		//$_SESSION["Gm_Badge_No_list"] = $extr_vl;
		//error_log($_SESSION["Gm_Badge_No_list"]);
		//$return_HTMLvalue = $extr_vl;
		//echo json_encode($return_HTMLvalue);

	}
	
	DBconnectionUtil::disconnect();
}
catch (PDOException $sql_err) {
	$errmsg = "TechError: dropdown change:".$sql_err->getMessage().", contact system administrator";
	error_log($errmsg,0);
	DBconnectionUtil::disconnect();
}
?>
