<?php
error_reporting(0);
?><html>

  <head>

    <title>

       Display Vessel Costing Report 

   </title>
   <style>
   .textright{
	   text-align:right;
   }
   </style>

  </head>



  <body>

    <h1>Display Vessel Costing Report  </h1>



    <?php

	

//require "dist/lib/commonfunc.php";



//validatepage();



require "dist/lib/dbconnection.php";



//require "dist/lib/dataextrfunc.php";



	

	

	

	   //  function mysql_escape_string($string){return mysqli_escape_string($string);}

	

          

	     GLOBAL $selecteddata_list;
		 GLOBAL $bags;
	     GLOBAL $amount_work;
		 GLOBAL $dwd_dd,$dwd_dd32;
         GLOBAL $wtm_code,$wtm_code50;
                $dwd_dd32   = 32;
                $wtm_code50  = 50;

		 
                $bags = array();
                $amount_work = array();
				

         GLOBAL $List_Pay_MASTER ;

		$selecteddata_list = search_datalist();

		

		$List_Pay_MASTER  = List_Pay_M($selecteddata_list);

		if ($List_Pay_MASTER == "SUCCESS"){ echo  $record_count . "  records inserted "; } 

                                     ELSE	{ echo  " NONE records inserted "; }

		print_table();


     // mysqli_close($connection);



    ?>

   

  </body>

</html>



    <?php

          function search_datalist(){

          $extr_datalist = array(); 

           $pdo = DBconnectionUtil::connect();

           $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


         try{


              $sql = "

SELECT lp_dc_wdtl.wtm_code,
  lp_work_tm.wtm_name,
  lp_work_tm.wtm_tabreckey  as wtm_key,	
  Sum(lp_dc_wdtl.dwd_bags) as sumbag,
  Sum(lp_dc_wdtl.wtm_amount) as sumamount,
  lp_dc_pri_inf.dwd_date,
    lp_dc_pri_inf.dwd_date,
     date_format(lp_dc_pri_inf.dwd_date,'%d')    AS dwd_dd,

  lp_dc_pri_inf.vm_code,
  lp_vessel_m.vm_name,
  smestar_syscom. sys_co_name ,
  lp_dc_pri_inf.sys_co_code
FROM lp_vessel_m
  INNER JOIN lp_dc_pri_inf ON lp_dc_pri_inf.vm_code = lp_vessel_m.vm_code
  INNER  JOIN lp_dc_wdtl ON lp_dc_wdtl.dwd_tabreckey = lp_dc_pri_inf.dwd_tabreckey
  INNER JOIN lp_work_tm ON lp_work_tm.wtm_code = lp_dc_wdtl.wtm_code
  INNER JOIN smestar_syscom ON lp_dc_pri_inf.sys_co_code =
    smestar_syscom.sys_co_code
GROUP BY lp_dc_wdtl.wtm_code,
  lp_dc_pri_inf.dwd_date,
  lp_dc_pri_inf.vm_code,
  lp_dc_pri_inf.sys_co_code
 HAVING lp_dc_pri_inf.vm_code = 'AK' AND lp_dc_pri_inf.sys_co_code = '01'  
ORDER BY lp_dc_pri_inf.sys_co_code,
  lp_dc_pri_inf.vm_code,
  lp_dc_pri_inf.dwd_date,
  lp_dc_wdtl.wtm_code

			  
							 
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
	 
	function print_table(){
		
	     GLOBAL $bags;
	     GLOBAL $amount_work;
		 GLOBAL $dwd_dd,$dwd_dd32;
         GLOBAL $wtm_code,$wtm_code50;
		 // $bags = array();
          // $amount_work = array();

            echo "<tr>";
         //   echo "<td style=' width: 250px; overflow: hidden;display: inline-block; white-space: nowrap;'>Datewise work type wise report</td>";
            echo "<td colspan='5'> Datewise work type wise report BAGS AND AMOUNT </td>";
          //  echo "<td colspan='4'></td>";    
        
            echo "</tr>";

							
	
//----------------------------------------------------------------

  ksort($bags);
foreach ($bags as $key => $row) {
    $dwd_dd[$key]  = $row['dwd_dd'];
	 ksort($bags[$key]);
}
ksort($amount_work);
foreach ($amount_work as $key => $row) {
    $dwd_dd[$key]  = $row['dwd_dd'];
	 ksort($amount_work[$key]);
}



//---------------------- line one variable heading 




     $k11=array();
	 $cnt=1;



   foreach ($bags AS $key=>$Values){
		if($key ==32){	
	echo "<tr>";
	echo "<td> Work Type </td>";
        foreach ($Values AS $key1=>$Inner){
            
		    $K11[$cnt] = $key1;
			$cnt++;
			
			if($key1!=50){	
			
			echo "<td colspan='2'> $key1 </td>";
			//echo "<td >$key1(amount)</td>";	
			}
			else{
				echo "<td colspan='2'> Total </td>";
				// echo "<td > bags(total) </td>";	
			    }
			
		}
		
		echo "</tr>";
		}
}

//---------------------- line one constant  heading 


foreach ($bags AS $key=>$Values){
		if($key ==32){	
	echo "<tr>";
	echo "<td> Date  </td>";
        foreach ($Values AS $key1=>$Inner){
            
		    
			
			if($key1!=50){	
			
			echo "<td >Bags(no.)</td>";
			echo "<td >Aamount(Rs)</td>";	
			}
			else{
				echo "<td > Bags(no.) </td>";
				echo "<td > Aamount(Rs) </td>";	
			    }
			
		}
		
		echo "</tr>";
		}
}
















//----------------------


//------------------------------------
$zerovalue =0;
foreach ($bags AS $key=>$Values){
	echo "<tr>";
	if ($key != 32) { echo "<td>$key</td>";	}	else {	echo "<td> Total</td>";}
	$cnt  = 1;
        foreach ($Values AS $key1=>$Inner){
			
			
			
			while  ($K11[$cnt] != $key1)
				
			    {   echo "<td class='textright' >$zerovalue</td>";
				    echo "<td class='textright' >$zerovalue</td>";
					$cnt++;
				}
			
			    echo "<td class='textright' >$Inner[0]</td>";
			    echo "<td class='textright'  >$Inner[1]</td>";
				$cnt++;
            			
		}
		
		echo "</tr>";
}





}    
			   
			   
			   

		
	                        
	 
	 
	 


//-- List of  db table	 



    function List_Pay_M(){


                       $pdo = DBconnectionUtil::connect();

                        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                       GLOBAL $errmsg;


                //-- For Gang Code

		 GLOBAL $bags;
         GLOBAL $amount_work;
         GLOBAL $dwd_dd32,$dwd_dd;
         GLOBAL $wtm_code,$wtm_code50;
                $dwd_dd32   = 32;
                $wtm_code50  = 50;
                $bags = array();
                $amount_work = array();

			    GLOBAL $selecteddata_list;



				global $record_count;

                $record_count   = count($selecteddata_list);
				
	

			
			
		


							
	     $Vessel_name = 	$selecteddata_list[0]['vm_name'];
		 $company_name =    $selecteddata_list[0]['sys_co_name'];
		 
		 echo "Vessel costing report For    " . $company_name  ;
		 echo "  <br/>    ";
		 echo "Vessel Name   " . $Vessel_name  ;
		 
		echo "  <br/>    ";
		 
		 
		 
		
      echo "<table border='1'>";
      echo "<tr>";
	  
	  
	    
	  
	  
      echo "<th>Co-cd</th> <th>VSL  <br/> code </th> <th> CD </th> <th> Work Type</th>   <th> bags <br/>(No.)</th> <th> Amount </th> 
	  <th> DA </th><th> PAY +<br/>DA </th><th> LAVY </th><th> TOTAL </th>
                            ";

	       $totalamount      = 0;
	       $totalbag         = 0;
		   $dayamount        = 0;
           $daybag           = 0;			
           $date_w           = $selecteddata_list[0]['dwd_date'];			
           $vslbag           = 0;
           $vslamount        = 0;			
           $vsl_w            = $selecteddata_list[0]['vm_code'];				
		   $sumesic_e        = 0;
           $sumsalary        = 0;			
           $sumnet_salary    = 0;			
	       $sumesic_o        = 0;
         
			
		 $data_count = count($selecteddata_list);

         foreach ($selecteddata_list as $row) 

      {

	  
	  
	  
		  $sumbag        = $row['sumbag'];
	      $totalbag     += $sumbag;	
		  $sumamount     = $row['sumamount'];
		  $basic         = $sumamount ;
		  $da            = round((($sumamount * 58.94 )  / 100),2);
		  $basic_da      = round($sumamount + $da ,2);
		  $lavy          = round(($basic_da * 40.25 / 100),2);
		  $totalcost     = round($basic_da + $lavy,2);
		  $totalamount  += $sumamount;  
          $dwd_date      = $row['dwd_date'];
		  $dwd_dd        = $row['dwd_dd'];
 		  $wtm_key       = $row['wtm_key'];
          $wtm_name      = $row['wtm_name'];
          $wtm_code      = $row['wtm_code'];
		  
		  


	     $bags[$dwd_dd][$wtm_code][0] += $sumbag;
	     $bags[$dwd_dd][$wtm_code][1] += $sumamount;
	     $bags[$dwd_dd32][$wtm_code][0] += $sumbag;
	     $bags[$dwd_dd32][$wtm_code][1] += $sumamount;	
	     $bags[$dwd_dd32][$wtm_code50][0] += $sumbag;
	     $bags[$dwd_dd32][$wtm_code50][1] += $sumamount;	
	     $bags[$dwd_dd][$wtm_code50][0] += $sumbag;
	     $bags[$dwd_dd][$wtm_code50][1] += $sumamount;
		 
         
		 
		  //  this is for  datewise totals 
		  
	  if  ($date_w  == $dwd_date) 
		                        {
		 // $temp              =  $row[];
          $daybag       += $sumbag;
		  $dayamount    += $sumamount;
         



		   
	                             }
      ELSE		
	  {
		  
		  $daybasic         = $dayamount ;
		  $dayda            = round((($daybasic * 58.94 )  / 100),2);
		  $daybasic_da      = round(($daybasic + $dayda) ,2);
		  $daylavy          = round(($daybasic_da * 40.25 / 100),2);
		  $daytotalcost     = round(($daybasic_da + $daylavy),2);

		  
        echo "<tr>";
        echo "<td>", "        ", "</td>
		<td>", "                   ", "</td>
		<td>", "                   ", "</td>
		
		<td>", $date_w, "</td>


		<td class='textright'>",   $daybag, "</td>
		<td class='textright'>",   $dayamount, "</td>
		
		<td class='textright'>",   $dayda, "</td>
		<td class='textright'>",   $daybasic_da, "</td>
		<td class='textright'>",   $daylavy, "</td>
		<td class='textright'>",   $daytotalcost,   "</td>"
		 
		;    

		   $dayamount       = $sumamount;
           $daybag          = $sumbag;;	
		   $date_w          = $dwd_date;
	  }
		  
          $wtm_code      = $row['wtm_code'];
		  $vm_code       = $row['vm_code'];
		  $vm_name       = $row['vm_name'];
		  $sys_co_code   = $row['sys_co_code'];
		  $sys_co_name   = $row['sys_co_name'];  
		  /*
		write_vsl_costing($sumbag,      
		                    $sumamount,   
		                    $basic,       
		                    $da,          
		                    $basic_da,    
		                    $lavy, 
                            $wtm_code,    
                            $vm_code,     
                            $vm_name,    
                            $sys_co_code, 
                            $sys_co_name, 
     	                    $totalcost,   
		                    $dwd_date,    
		                    $dwd_dd,      
		                    $wtm_key,
                            $wtm_code,							
		                   $wtm_name);
                           
            */               
                                      
         
        echo "<tr>";
        echo "<td>", $sys_co_code, "</td>
		      <td>", $vm_code, "</td> 

		
		<td>", $wtm_code, "</td>  
		<td>", $wtm_name, "</td>  

		<td class='textright' >", $sumbag, "</td> 
		
		<td  class='textright'>", $sumamount, "</td>
	
		<td  class='textright'>", $da, "</td>
		<td  class='textright'>", $basic_da, "</td>
        <td  class='textright'>", $lavy, "</td>
		<td  class='textright'>", $totalcost, "</td>"
		;    
        echo "</tr>";
      }
	  
      
       echo "<tr>";
        echo "<td>", "        ", "</td>
        <td>", "                   ", "</td>
        <td>", "                   ", "</td>
      
        <td>", $date_w, "</td>


        <td class='textright'>",   $daybag,    "</td>
        <td class='textright'>",   $dayamount, "</td>
       <td class='textright'>",    $dayda, "</td>
		<td class='textright'>",   $daybasic_da, "</td>
		<td class='textright'>",   $daylavy, "</td>
		<td class='textright'>",   $daytotalcost,   "</td>" 
	
        ;
      
          $finalbasic         = $totalamount ;
		  $finalda            = round((($finalbasic * 58.94 )  / 100),2);
		  $finalbasic_da      = round(($finalbasic + $finalda) ,2);
		  $finallavy          = round(($finalbasic_da * 40.25 / 100),2);
		  $finaltotalcost     = round(($finalbasic_da + $finallavy),2);
  
      
	   echo "<tr>";
        echo "<td>", "   Total     ", "</td>
		<td>", "                   ", "</td>
	
		<td>", "                   ", "</td>
        <td>", "                   ", "</td>
         

		<td class='textright'>",   $totalbag, "</td>
		<td class='textright'>",   $totalamount,    "</td>
		
        <td class='textright'>",   $finalda, "</td>
		<td class='textright'>",   $finalbasic_da, "</td>
		<td class='textright'>",   $finallavy, "</td>
		<td class='textright'>",   $finaltotalcost,   "</td>" 

		
		;     
        echo "</tr>";
	  
       
      

		 
		 
	


DBconnectionUtil::disconnect();



return "SUCCESS";



}


?>


