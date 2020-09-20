<html>

  <head>

    <title>

       Displaying TEMPA Register

   </title>
   <style>
   .textright{
	   text-align:right;
   }
   </style>

  </head>



  <body>

    <h1>Displaying TEMPORARY Register  </h1>



    <?php

	

//require "dist/lib/commonfunc.php";



//validatepage();



require "dist/lib/dbconnection.php";



//require "dist/lib/dataextrfunc.php";



	

	

	

	   //  function mysql_escape_string($string){return mysqli_escape_string($string);}

	

          

	     GLOBAL $selecteddata_list;

         GLOBAL $List_gang_list ;

		$selecteddata_list = search_datalist();

		

		$List_gang_master  = List_gang_list($selecteddata_list);

		if ($List_gang_master == "SUCCESS")
			
		
		        { echo "   Total    " . $record_count . "  records READ  AND  ";
				   echo "  Total    " . $duplcate_count  . "  DUPLICATE records found ";
				} 

         ELSE	{ echo "      " . " NONE records  READ "; }

		

		

		

		   







     // mysqli_close($connection);



    ?>

   <p><a href=#>GO BACK MAIN MENU</a></p>

  </body>

</html>



    <?php











          function search_datalist(){

          $extr_datalist = array(); 

           $pdo = DBconnectionUtil::connect();

           $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


         try{


              $sql = "
			  
			  
			  SELECT lp_gang_m.gm_name,
 			         lp_gang_m.gm_badge_no,
  			         lp_gang_m.gm_gang_code,
  			         lp_gang_m.gm_bankaccnbr,
					 lp_gang_m.gm_memcatg,
  			         lp_gang_m.gm_tabreckey
	   FROM lp_gang_m
			  ORDER BY lp_gang_m.gm_name,
  			  lp_gang_m.gm_badge_no
			  
			  
			  
							 
							 
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



                  function List_gang_list(){


                       $pdo = DBconnectionUtil::connect();

                        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                       GLOBAL $errmsg;


                //-- For Gang Code

				

			    GLOBAL $selecteddata_list;



				global $record_count  ;
				global $duplcate_count ;

                $record_count   = count($selecteddata_list);
				
				$gm_name_lst  =  $selecteddata_list[0][1];
				$duplcate     = "";
				
				// echo "total records read = " . $record_count. "     ";
				
					
      echo "<table border='1'>";
      echo "<tr>";
      echo "<th>Name</th> <th>badge_no</th> <th>Gang Code<br/> record key no </th> <th> Account Number</th><th>category </th> ";

	     
		

         foreach ($selecteddata_list as $row) 

      {
          
                $gm_name       =  $row['gm_name'];
                $gm_badge_no   =  $row['gm_badge_no'] ;
                $gm_gang_code  =  $row['gm_gang_code'];
				$gm_tabreckey  =  $row['gm_tabreckey'];
				$gm_bankaccnbr =  $row['gm_bankaccnbr'];  
			    $gm_memcatg   =   $row['gm_memcatg'];
           

		    IF ($gm_name_lst  == $gm_name)
		 {
			 $duplcate  = "DUPLICATE";
			 $duplcate_count =  $duplcate_count + 1 ;
		 }
          ELSE 
		  {			  
		    $duplcate  = "";
			$gm_name_lst  = $gm_name;
		  }
                    
        echo "<tr>";
        echo "<td>", $gm_name, "</td><td  class='textright'  >", $gm_badge_no, "</td> 
		<td >", $gm_gang_code, "</td>   <td>", $gm_bankaccnbr, "</td> 
		<td>", $gm_memcatg, "</td><td >",$gm_tabreckey , "</td><td >",$duplcate;
		
		echo "</tr>";
		
		
      }
	  
	   
	  
     //  echo " Total duplicate record =  " .  $duplcate_count  .  "     " ;
      

		 
		 
	


DBconnectionUtil::disconnect();



return "SUCCESS";



}







?>


