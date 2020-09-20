<html>

  <head>

    <title>

       Display Gangman wise  ledger  for payment  

   </title>
   <style>
   .textright{
	   text-align:right;
   }
   </style>

  </head>



  <body>

    <h1>Displaying Pay Register  for members  </h1>


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

         GLOBAL $List_Pay_MASTER ;

	    if((isset($_POST['year']))||(isset($_POST['badge_no']))||(isset($_POST['comp_code']))){
		if($_POST['year']==""){$post_year='%';}else {$post_year=$_POST['year'];}
		if($_POST['comp_code']==""){$post_comp_code='%';}else {$post_comp_code=$_POST['comp_code'];}
		if($_POST['badge_no']==""){$post_badge_no='%';}else {$post_badge_no=$_POST['badge_no'];}
		//$post_badge_no=$_POST['badge_no'];
		//$post_comp_code=$_POST['comp_code'];

		$selecteddata_list = search_datalist($post_year,$post_badge_no,$post_comp_code);

		

		$List_Pay_MASTER  = List_Pay_M($selecteddata_list);

		if ($List_Pay_MASTER == "SUCCESS"){ echo  $record_count . "  records inserted "; } 

                                     ELSE	{ echo  " NONE records inserted "; }

		

		

		

		   







     // mysqli_close($connection);

	}//close if


    ?>

   

  </body>

</html>



    <?php











          function search_datalist($post_year,$post_badge_no,$post_comp_code){

          $extr_datalist = array(); 

           $pdo = DBconnectionUtil::connect();

           $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


         try{
           /*

              $sql = "
					                
					                
                   SELECT lp_dc_pri_inf.sys_co_code AS co_code,
                          lp_dc_pri_inf.dwd_slip_nbr AS slip_no,
                          lp_dc_pri_inf.dwd_date AS slipdate,
						  lp_dc_gdtl.gm_badge_no AS badge_no,
						  lp_dc_gdtl.gm_gang_code AS gang_code,
						  lp_gang_m.gm_name AS name,
						  lp_dc_pri_inf.dwd_matha AS matha,
                          lp_dc_pri_inf.dwd_totalperson AS men_no,
                          lp_dc_pri_inf.dwd_total_amount AS amount,
                          lp_dc_wdtl.wtm_code,
                          lp_work_tm.wtm_name,
                          lp_dc_wdtl.dwd_bags,
						  lp_work_tm.wtm_rate,
                          lp_dc_wdtl.wtm_amount,
						  lp_dc_pri_inf.clrm_code,
                          lp_labour_rm.clrm_desc,
						  lp_dc_pri_inf.dwd_labors,
                          lp_labour_rm.clrm_rate,
						  lp_dc_pri_inf.dwd_lab_amount,
                          lp_dc_pri_inf.vm_code,
                          lp_dc_pri_inf.cm_code,
                          smestar_syscom.sys_co_name,
                          lp_vessel_m.vm_name
                        FROM lp_dc_pri_inf
                          INNER JOIN lp_dc_wdtl ON lp_dc_pri_inf.dwd_tabreckey =
                            lp_dc_wdtl.dwd_tabreckey
						  INNER JOIN lp_work_tm ON lp_dc_wdtl.wtm_code = lp_work_tm.wtm_code
						  INNER JOIN lp_dc_gdtl ON lp_dc_pri_inf.dwd_tabreckey =
                   						    lp_dc_gdtl.dwd_tabreckey
					  INNER JOIN lp_gang_m ON lp_dc_gdtl.gm_badge_no = lp_gang_m.gm_badge_no
                                             INNER JOIN smestar_syscom ON lp_dc_pri_inf.sys_co_code =
					    smestar_syscom.sys_co_code
                                             INNER JOIN lp_vessel_m ON lp_dc_pri_inf.vm_code = lp_vessel_m.vm_code
					  INNER JOIN lp_commo_m ON lp_dc_pri_inf.cm_code = lp_commo_m.cm_code
                                             INNER JOIN lp_labour_rm ON lp_dc_pri_inf.clrm_code = lp_labour_rm.clrm_code
                   			WHERE lp_dc_gdtl.gm_badge_no = 1  
                   				ORDER BY co_code,
                   				  badge_no, slipdate,  slip_no
                   				  
                             
                   
			                 ";   */
							 
							 
					   $sql = "
					                
					     Select lp_dc_gdtl.gm_badge_no  as badge_no, 
     lp_gang_m.gm_name   as name, 
     lp_dc_gdtl.gm_gang_code  as gang_code,
     lp_dc_pri_inf.dwd_date   as slipdate,
     lp_dc_pri_inf.dwd_slip_nbr   as  slip_no, 
     lp_dc_pri_inf.dwd_matha    as matha, 
     lp_dc_pri_inf.dwd_totalperson   as men_no,
     lp_dc_pri_inf.dwd_total_amount   as amount, 
     lp_dc_wdtl.wtm_code  as wtm_code, 
     lp_work_tm.wtm_name as wtm_name, 
     lp_dc_wdtl.dwd_bags as dwd_bags,
     lp_work_tm.wtm_rate   as wtm_rate, 
     lp_dc_wdtl.wtm_amount   as wtm_amount, 
     lp_dc_pri_inf.dwd_lab_amount  as dwd_lab_amount, 
     lp_dc_pri_inf.vm_code   as vm_code, 
     lp_dc_pri_inf.sys_co_code as co_code,
	 date_format(lp_dc_pri_inf.dwd_date,'%Y%m')    AS dwd_yymm
	 
From lp_dc_pri_inf 
Inner Join lp_dc_wdtl On lp_dc_pri_inf.dwd_tabreckey = lp_dc_wdtl.dwd_tabreckey 
Inner Join lp_dc_gdtl On lp_dc_pri_inf.dwd_tabreckey = lp_dc_gdtl.dwd_tabreckey 
Inner Join lp_gang_m On lp_dc_gdtl.gm_badge_no = lp_gang_m.gm_badge_no 
Inner Join lp_work_tm On lp_dc_wdtl.wtm_code = lp_work_tm.wtm_code 

WHERE lp_dc_pri_inf.sys_co_code like '".$post_comp_code."'  AND  date_format(lp_dc_pri_inf.dwd_date,'%Y%m')    like '".$post_year."' AND lp_dc_gdtl.gm_badge_no like '".$post_badge_no."'

Order By lp_dc_pri_inf.sys_co_code, 
                          dwd_yymm,
            lp_dc_gdtl.gm_badge_no, 
 
         lp_dc_pri_inf.dwd_slip_nbr  
        
                   
                             
                   
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


//-- List of  db table	 

 function Total_Pay_M($badge_no_w,$badge_no ,$sumamount,$co_code_w,$co_code,$dwd_yymm_w,$dwd_yymm,$name_w,$name) 
 
 
                    {
                global $badge_no_w;
				global $badge_no;
	  	        global $sumamount;
				GLOBAL $co_code_w,$co_code,$dwd_yymm_w,$dwd_yymm,$name_w,$name;
        //  if  ((int)$badge_no_w  != (int)$badge_no) 
          if  ($badge_no_w  != $badge_no) 
                        {
                
		echo "<tr>";
        echo 
		   "<td >", $co_code_w , "</td>
	  	   <td>",   $dwd_yymm_w   , "</td> 
  	  	   <td class='textright'>",   $badge_no_w    , "</td> 
		   <td class='textright'>", $sumamount ,  "</td> 

		   <td>",   $name_w        , "</td> 
    	   				   ";  
		    echo "</tr>";
			    $badge_no_w  = $badge_no; 
			 $co_code_w    = $co_code;
			 $dwd_yymm_w   = $dwd_yymm;
			 $name_w       = $name;
				
                  $sumamount    = 0;
                        }
			
			

                                               }
											   
											   
											   
											   
											   
											   
    function List_Pay_M(){


                       $pdo = DBconnectionUtil::connect();

                        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                       GLOBAL $errmsg;


                //-- For Gang Code

				

			    GLOBAL $selecteddata_list;



				global $record_count;

                $record_count   = count($selecteddata_list);
				
	

		
		 global $sumamount;	
		 GLOBAL $co_code_w,$co_code,$dwd_yymm_w,$dwd_yymm,$name_w,$name;

        global    $badge_no_w;
        global      $slip_no;
		global	   $slip_no_w;
		 $badge_no_w = 0;
	     $badge_no_w = 	$selecteddata_list[0][0]; 
		 $slip_no_w = 	$selecteddata_list[0][4]; 
         $slip_no_w =   0; 
	     $co_code_w = 	$selecteddata_list[0][15];
		 $dwd_yymm_w = 	$selecteddata_list[0][16];
	     $name_w = 	$selecteddata_list[0][1];

		  $company_name =    $selecteddata_list[0][15];
		 
		  echo "Challan wise ledger For    " . $company_name  ;
		  echo "  <br/>    ";
		  echo "No of Records  " . $record_count  ;
		 
		echo "  <br/>    ";
		 
				 
		
      echo "<table border='1'>";
      echo "<tr>";
	  
	      
	  
	  
      echo "<th>Co<br/>CD</th> <th> Year <br/>Mnth</th> <th> Badge <br/>(No.)</th>    <th> Matha </th>  <th> Name </th>
	  

                            ";

	       $totalamount      = 0;
	       $sumamount        = 0;
/*		   $dayamount        = 0;
           $daybag           = 0;			
           $date_w           = $selecteddata_list[0][4];			
           $vslbag           = 0;
           $vslamount        = 0;			
           $vsl_w            = $selecteddata_list[0][5]; ;				
		   $sumesic_e     = 0;
           $sumsalary     = 0;			
           $sumnet_salary = 0;			
	       $sumesic_o     = 0;
         */
			
		 $data_count = count($selecteddata_list);
		 
		// echo  "Challan wise ledger data    " . $selecteddata_list;

         foreach ($selecteddata_list as $row) 

      {
                global $badge_no_w;
                global $badge_no;
                global $sumamount;
	  
	  
	  
	  
	  			  $co_code      = $row['co_code'];
			      $slip_no      = $row['slip_no'];
				  $slipdate     = $row['slipdate'];
				  $dwd_yymm     = $row['dwd_yymm'];

				  $matha        = $row['matha'];
				
				  $badge_no     = $row['badge_no'];
				  $gang_code    = $row['gang_code'];
				  $name         = $row['name'];
			      $men_no       = $row['men_no'];
				  $amount       = $row['amount'];
				  $wtm_code     = $row['wtm_code'];
				  $wtm_name     = $row['wtm_name'];
				  $dwd_bags     = $row['dwd_bags'];
				  $wtm_rate     = $row['wtm_rate'];
				  $wtm_amount   = $row['wtm_amount'];
				 
				  $vm_code      = $row['vm_code'];
				 
			    $dwd_lab_amount = $row['dwd_lab_amount'];
				
			
				
				
	            Total_Pay_M($badge_no_w,$badge_no ,$sumamount,$co_code_w,$co_code,$dwd_yymm_w,$dwd_yymm,$name_w,$name);
				
				
				
				
				if  ($slip_no_w  != $slip_no)
					{ 
			             $sumamount     += $matha; 
				         $totalamount   += $matha;
                         $totalamount    = round($totalamount,2);  
						 
                         $slip_no_w      = $slip_no;  
					 }
				ELSE
				    {
				      IF  ($sumamount   == 0)
					  {
				         $sumamount      = $matha; 
				         $totalamount   += $matha;
					     $totalamount    = round($totalamount,2);  
 
					  } 
				   	}
				
			/*	
			echo "<tr>";
            echo  "<td>", $co_code, "</td>
				   <td class='textright'>", $badge_no     , "</td> 
				   <td>", $gang_code    , "</td> 
				   <td>", $name         , "</td> 
				   <td  class='textright'>", $matha        , "</td> 
				   <td  class='textright'>", $men_no       , "</td> 
				   <td  class='textright'>", $amount       , "</td> 
        		   <td>", $slip_no      , "</td> 
				   <td>", $slipdate     , "</td> 
				   <td>", $wtm_code     , "</td> 
				   <td>", $wtm_name     , "</td> 
				   <td  class='textright'>", $dwd_bags     , "</td> 
				   <td class='textright' >", $wtm_rate     , "</td> 
	  	  	  	   <td class='textright'>", $wtm_amount   , "</td> 
				   <td>", $vm_code   , "</td>   
		   ";  
			        echo "</tr>";
		
				*/
								} 
    		
// last transaction	 total	

        echo "<tr>";
        echo 
		   "<td >", $co_code_w , "</td>
	  	   <td>",   $dwd_yymm_w   , "</td> 
  	  	   <td class='textright'>",   $badge_no_w    , "</td> 
		   <td class='textright'>", $sumamount ,  "</td> 
		   <td>",   $name_w        , "</td> 
		   
    	   				   ";  
		    echo "</tr>";
			

// for grand total 

			
				 
	
		echo "<tr>";
        echo 
		   "<td >", "   " , "</td>
	  	   <td>", "   "    , "</td> 
  	  	   <td>", "   "    , "</td> 
		   <td>", "  GRAND Total  "        , "</td> 
		   <td class='textright'>", $totalamount         , "</td> 
    	   
		   
		   ";  
		
			 echo "</tr>";

	
	
	
	}
		
	
	  
	  
      



DBconnectionUtil::disconnect();



return "SUCCESS";






?>


