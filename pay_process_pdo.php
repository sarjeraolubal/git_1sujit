<html>
  <head>
    <title>
       Displaying PAYROLL PROCESSING
   </title>
  </head>

  <body>
    <h1>Displaying PAYROLL PROCESSING</h1>
	
	
		<form action="<?php $_SERVER['PHP_SELF']?>" method="post">
		<label>Year(YYYYMM)</label><input type="year" name="year"/>
		<label>Badge No</label><input type="text" name="badge_no"/>
		<label>Company Code</label><input type="text" name="comp_code"/>
		<input type="submit"/>
	    </form>

	
	

    <?php
	
//require "dist/lib/commonfunc.php";

//validatepage();

require "dist/lib/dbconnection.php";

//require "dist/lib/dataextrfunc.php";

	
	
	
	   //  function mysql_escape_string($string){return mysqli_escape_string($string);}
	
          
	     GLOBAL $selecteddata_list;
         GLOBAL $Insert_Pay_MASTER ;
		 
	    if((isset($_POST['year']))||(isset($_POST['badge_no']))||(isset($_POST['comp_code']))){
		if($_POST['year']==""){$post_year='%';}else {$post_year=$_POST['year'];}
		if($_POST['comp_code']==""){$post_comp_code='%';}else {$post_comp_code=$_POST['comp_code'];}
		if($_POST['badge_no']==""){$post_badge_no='%';}else {$post_badge_no=$_POST['badge_no'];}
		 //echo $post_year.$post_comp_code.$post_badge_no;
		$selecteddata_list = search_datalist($post_year,$post_badge_no,$post_comp_code);
		
		$Insert_Pay_MASTER  = Insert_Pay_M($selecteddata_list);
		if ($Insert_Pay_MASTER == "SUCCESS"){ echo  $record_count . "  records inserted "; } 
                                     ELSE	{ echo  " NONE records inserted "; }
		
		

     // mysqli_close($connection);
	 
	}//close if
	
	
    ?>
   <p><a href=loggeduserhome.php>GO BACK MAIN MENU</a></p>
  </body>
</html>

    <?php



          function search_datalist($post_year,$post_badge_no,$post_comp_code){



          $extr_datalist = array(); 



           $pdo = DBconnectionUtil::connect();

           $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

         try{
 

/*

	     $sql = "SELECT lp_dc_pri_inf.sys_co_code    AS sys_co_code,
                        lp_dc_gdtl.gm_badge_no    AS badge_no,
						lp_dc_pri_inf.dwd_date    AS dwd_date,
                        lp_gang_m.gm_name         AS gm_name,
						lp_gang_m. gm_gang_code   AS gm_gang_code,
                        lp_gang_m.gm_memcatg      AS gm_memcatg,
                    SUM(lp_dc_pri_inf.dwd_matha)  as basic
                  FROM (lp_dc_pri_inf)
            INNER JOIN  lp_dc_gdtl ON lp_dc_pri_inf.dwd_tabreckey =
                                      lp_dc_gdtl.dwd_tabreckey
            INNER JOIN  lp_gang_m ON lp_dc_gdtl.gm_badge_no =
			            lp_gang_m.gm_badge_no
            GROUP BY    lp_dc_pri_inf.sys_co_code,
                        lp_dc_gdtl.gm_badge_no
            ORDER BY    sys_co_code,
                        badge_no";
			*/			
	
 $sql = "
 
	      SELECT lp_dc_pri_inf.sys_co_code AS sys_co_code,
          lp_dc_pri_inf.dwd_date AS dwd_date,
		 date_format(lp_dc_pri_inf.dwd_date,'%Y%m')    AS dwd_yymm,
        
		  sum(lp_dc_pri_inf.dwd_matha) AS basic, 
          count(lp_dc_pri_inf.dwd_matha) AS no_of_days,
          lp_dc_gdtl.gm_badge_no AS badge_no,
          lp_gang_m.gm_name AS name,
          lp_gang_m.gm_memcatg  AS category,
          lp_gang_m.gm_bankaccnbr AS account_number,
          lp_adv_deduct.adduct_amt AS advance,
		  lp_gang_m.gm_gang_code AS gang_code
        FROM lp_dc_gdtl
          INNER JOIN lp_gang_m ON lp_gang_m.gm_badge_no = lp_dc_gdtl.gm_badge_no
          LEFT OUTER JOIN lp_adv_deduct ON lp_dc_gdtl.gm_badge_no = lp_adv_deduct.gm_badge_no
          INNER JOIN lp_dc_pri_inf ON lp_dc_pri_inf.dwd_tabreckey =
             lp_dc_gdtl.dwd_tabreckey
			 
		WHERE lp_dc_pri_inf.sys_co_code like '".$post_comp_code."'  AND
		date_format(lp_dc_pri_inf.dwd_date,'%Y%m')    like '".$post_year."' AND 
		lp_dc_gdtl.gm_badge_no like '".$post_badge_no."'
		
        GROUP BY lp_dc_pri_inf.sys_co_code,
                        dwd_yymm,
         lp_dc_gdtl.gm_badge_no
		 
        ORDER BY lp_dc_pri_inf.sys_co_code, dwd_yymm,
                      badge_no
";
	
	
	
	
	
	$q = $pdo->prepare($sql);

	$q->execute();

	$extr_datalist = $q->fetchAll();

         }

         catch (PDOException $sql_err) {

	      $errmsg = "TechError: search data list:".$sql_err->getMessage().", contact system administrator";

	        error_log($errmsg,0);

                              }
						  

DBconnectionUtil::disconnect();

return $extr_datalist;

     }
	 
	 
	 
//-- insert or update db table	 

                  function Insert_Pay_M(){



                       $pdo = DBconnectionUtil::connect();

                        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                       GLOBAL $errmsg;

                //-- For Gang Code
				
			    GLOBAL $selecteddata_list;

				global $record_count;
                $record_count   = count($selecteddata_list);

         foreach ($selecteddata_list as $row) {

		  $sys_co_code = $row['sys_co_code'];
		  $badge_no    = $row['badge_no'];
		    
		//	$Weddingdate = new DateTime($row2['weddingdate']);
        //  $formattedweddingdate = date_format($Weddingdate, 'd-m-Y');

              $Weddingdate = new DateTime($row['dwd_date']);
              $formattedweddingdate = date_format($Weddingdate, 'Ym');
			
			
		    $dwd_yymm         = $row['dwd_yymm'];
		  // $dwd_yymm     = date_format($date,"Ym");
		  //$date2        = date_format($date,"Y-m");
		  $category       = $row['category'];
		  $account_number = $row['account_number']; 
		  $py_gang_code   = $row['gang_code'];
          $mscode         = substr($py_gang_code,0,2);
		  
          $basic          =  $row['basic'];
		  
		  
		  
		  //   calculate DA
		 // Da changed from 64.62 to 64.47 and 34.21 to 34.06    as per directives of aniruddh
		  IF ($category ==   "PERMANANT") {		  
		  
		  $da          = ($basic * 64.47) /  100;
		                                 }
          elseif ($category ==   "DA") {
                 $da       = ($basic * 34.06) /  100;
		                                     }
		  else  {$da = 0 ;}	


		  

        //   calculate PF
		  
			  
		  $pf = 0 ;
		  
		  IF      ($category ==   "PERMANANT") {
		  
		  	      $pf          = ($basic + $da) * 0.12;	
		                                       }
    /*   As dicussed with aniruddh on 14 sept
		 IF ($category ==   "TEMPORARY") {
			 
			 
		     IF ($mscode == "MS") 
                        				 {
				 $pf          = ($basic + $da) * 0.12;	
				 
				 
				
		                                }}
										
										
					*/					
										
										
		  IF      ($category ==   "DA")        {
		  
		  	      $pf          = ($basic + $da) * 0.12;	
		                                       }	


	   //  calculate HRA OR PI 	
			
											   
			 $hra = 0 ;
								   
											   
          IF      (($category ==   "DA")   OR  
		          ($category ==  "PERMANANT")) 		    {
				  $hra       =   ($basic + $da) * 0.03;	
				                                        }		

											   
		  
		  
	      $no_of_days  =  $row['no_of_days'];

		  $advance     =  $row['advance'];
		  
		  // calculate ESIC employees (esic_o) and Empoyers(esic_o) contribution 
		  IF      ($category ==   "M") {
		  
          $esic_o      = 0 ;		  
		  $esic_e      = 0;		      }
		  
		  ELSE 
		  {
		  $esic_o      = ($basic + $da + $hra) * .0475 ;		  
		  $esic_e      = ($basic + $da + $hra) * .0175 ;
		  }
		  
		  
		  
		  //    changes made as per aniruddha
		  
		  $ptax      =  0;
		  /*
		  
		  $ptxamt      = ($basic + $da) ;
		  
		  IF ($ptxamt > 7500) {  $ptax = 200 ; }
		                  ELSEIF  ($ptxamt < '7500') { $ptax = 0; }
						  ELSE { $ptax = 175;}
		  */				  
                          
            If (empty($advance))  {$advance = 0;}             
                          
		  $basic       =  round($basic,2,PHP_ROUND_HALF_DOWN);
		  $da          =  round($da,2,PHP_ROUND_HALF_DOWN);
		  $hra         =  round($hra,2,PHP_ROUND_HALF_DOWN);
		  $pf          =  round($pf,4,PHP_ROUND_HALF_DOWN);
		  $esic_o      =  round($esic_o,2,PHP_ROUND_HALF_DOWN);
		  $esic_e      =  round($esic_e,2,PHP_ROUND_HALF_DOWN);
          $net_salary  = $basic + $da + $hra - $advance - $ptax - $pf - $esic_e;
          $net_salary  = round($net_salary,2,PHP_ROUND_HALF_DOWN);

try{

        $sql = "INSERT INTO  lp_pay_m ( sys_co_code ,    py_badge_no,    py_year_mm,                py_gang_code,       category,         account_number,     basic, da, hra,pf,   ptax, advance, esic_o,   esic_e, net_salary,   no_of_days )
                               values  ( '".$sys_co_code."',$badge_no,   $formattedweddingdate, '".$py_gang_code."', '".$category."', '".$account_number."', $basic,$da,$hra,$pf, $ptax,$advance, $esic_o, $esic_e, $net_salary, $no_of_days)";

		$q = $pdo->prepare($sql);

		$q->execute();

}

catch (PDOException $sql_err) {

	$errmsg = "TechError: insert or update:".$sql_err->getMessage().", contact system administrator";

	error_log($errmsg,0);

	DBconnectionUtil::disconnect();

	return $errmsg;

}

		 }

DBconnectionUtil::disconnect();

return "SUCCESS";

}



?>













