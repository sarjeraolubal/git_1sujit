<?php

require "dist/lib/dbconnection.php";
$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

try{

/* 	1.Get Transaction Date from Financial Year 

	2.Read Max date of Balance Table those O/S > 0 
		2a. create balance record
		2b. create auto deduction record, it can be overwritten by Authorized person

	3.Read New Advance Record by Badge No those record not in Balance Table, read authorized deducted amount
		3a. create balance record
		3b. create auto deduction record, it can be overwritten by Authorized person
				
*/
		//1
		$v_sys_co_code = $_SESSION['sys_co_code'];
		$v_ao_date =  date_create()->format('Y-m-d H:i:s');
		
		$sql ="SELECT fy_accyearstartdt, fy_accyearenddt FROM lp_adv_finyear WHERE fy_status='OPEN'"; // at a time only one record is expected to be in OPEN state
		$q = $pdo->prepare($sql);
		$q->execute();

		$finyear_rec = $q->fetch(PDO::FETCH_ASSOC);
		$v_fy_trandtfrom = $finyear_rec["fy_accyearstartdt"];
		$v_fy_trandtto = $finyear_rec["fy_accyearenddt"];
		
		
		//2
		$sql ="SELECT A.* FROM lp_adv_os A ".
			" WHERE A.ao_date BETWEEN ? AND ? AND A.ao_balance_amt >0 AND A.ao_date = ".
			" (SELECT MAX(B.ao_date) FROM lp_adv_os B WHERE B.gm_badge_no=A.gm_badge_no AND B.ao_date BETWEEN ? AND ?)";
		$q = $pdo->prepare($sql);
		$q->execute(array($v_fy_trandtfrom,$v_fy_trandtto,$v_fy_trandtfrom,$v_fy_trandtto));
		$advbal_list = $q->fetchAll();
		
		
		foreach ($advbal_list as $row){
			
			$v_gm_badge_no = $row["gm_badge_no"];			
						
			// get authorized deduction 
			$sql ="SELECT sum(adduct_amt) deducted_amt auth_deduct FROM lp_adv_deduct ".
				"WHERE gm_badge_no = ? AND ao_date >= ? AND ao_process_schedule='YES'";
			
			$q = $pdo->prepare($sql);
			$q->execute(array($v_gm_badge_no,$v_ao_date));
			$deduct_rec = $q->fetch(PDO::FETCH_ASSOC);
			$v_deducted_amt = $deduct_rec["deducted_amt"];
			
			$v_ao_balance_amt = $row["ao_balance_amt"];
			
			$v_ao_totadv = $row["ao_totadv"];
			$v_ao_totrecovered = $row["totrecovered"] + $v_deducted_amt;
			$v_ao_balance_amt = $v_ao_totadv - $v_ao_totrecovered;
			$v_ao_recover_month = 1;
			$v_ao_recover_amt_pm = $v_ao_balance_amt	;
			$v_ao_process_schedule = 'YES';
			
			//2a
			$sql ="INSERT INTO lp_adv_os (sys_co_code,gm_badge_no,ao_date,ao_totadv,ao_totrecovered,ao_balance_amt,ao_recover_month,".
				"ao_recover_amt_pm,ao_process_schedule) VALUES(?,?,?,?,?,?,?,?,?)";
			$q = $pdo->prepare($sql);
			$q->execute(array($v_sys_co_code,$v_gm_badge_no,$v_ao_date,$v_ao_totadv,$v_ao_totrecovered,$v_ao_balance_amt,$v_ao_recover_month,$v_ao_recover_amt_pm,$v_ao_process_schedule));

			//2b		
			$sql ="INSERT INTO lp_adv_deduct (sys_co_code, gm_badge_no, adduct_date, adduct_amt, adduct_auth) ".
				"VALUES(?,?,?,?,?)";
			$q = $pdo->prepare($sql);
			$q->execute(array($v_sys_co_code,$v_gm_badge_no,$v_ao_date,$v_ao_totadv,$v_ao_process_schedule ));			
			
		}
		
		//3 
		$sql ="SELECT gm_badge_no, sum(am_amount) am_amount FROM lp_adv_m WHERE am_advDate BETWEEN ? AND ? AND ".
			"gm_badge_no NOT IN(SELECT lp_adv_os.gm_badge_no FROM lp_adv_os ".
			"WHERE lp_adv_os.gm_badge_no=lp_adv_m.gm_badge_no AND ao_date BETWEEN ? AND ?) GROUP BY gm_badge_no";
 		$q = $pdo->prepare($sql);
		$q->execute(array($v_fy_trandtfrom,$v_fy_trandtto,$v_fy_trandtfrom,$v_fy_trandtto));
		$newadv_list = $q->fetchAll();
		
		//3a			
		foreach ($newadv_list as $row){	
			$v_gm_badge_no = $row["gm_badge_no"];			
			
			$v_ao_totadv = $row["am_amount"];	
			$v_ao_totrecover = 0;
			$v_ao_balance_amt = $row["am_amount"];
			$v_ao_recover_month = 1;
			$v_ao_recover_amt_pm = $row["am_amount"];	
			$v_ao_process_schedule = 'YES';

			$sql ="INSERT INTO lp_adv_os (sys_co_code,gm_badge_no,ao_date,ao_totadv,ao_totrecovered,ao_balance_amt,ao_recover_month,".
				"ao_recover_amt_pm,ao_process_schedule) VALUES(?,?,?,?,?,?,?,?,?)";
			$q = $pdo->prepare($sql);
			$q->execute(array($v_sys_co_code,$v_gm_badge_no,$v_ao_date,$v_ao_totadv,$v_ao_totrecover,$v_ao_balance_amt,$v_ao_recover_month,$v_ao_recover_amt_pm,$v_ao_process_schedule));

			//3b		
			$sql ="INSERT INTO lp_adv_deduct (sys_co_code, gm_badge_no, adduct_date, adduct_amt, adduct_auth) ".
				"VALUES(?,?,?,?,?)";
			$q = $pdo->prepare($sql);
			$q->execute(array($v_sys_co_code,$v_gm_badge_no,$v_ao_date,$v_ao_totadv,$v_ao_process_schedule ));
		}	
}
catch (PDOException $sql_err) {
	$errmsg = "TechError: dropdown change:".$sql_err->getMessage().", contact system administrator";
	error_log($errmsg,0);
}

DBconnectionUtil::disconnect();

?>
