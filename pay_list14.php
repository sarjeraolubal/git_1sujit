<html>  <head>    <title>       Displaying TEMPA Register   </title>   <style>   .textright{	   text-align:right;   }   </style>  </head>  <body>    <h1>Displaying TEMPORARY Register  </h1>    <?php	//require "dist/lib/commonfunc.php";//validatepage();require "dist/lib/dbconnection.php";//require "dist/lib/dataextrfunc.php";				   //  function mysql_escape_string($string){return mysqli_escape_string($string);}	          	     GLOBAL $selecteddata_list;         GLOBAL $List_Pay_MASTER ;		$selecteddata_list = search_datalist();				$List_Pay_MASTER  = List_Pay_M($selecteddata_list);		if ($List_Pay_MASTER == "SUCCESS"){ echo  $record_count . "  records inserted "; }                                      ELSE	{ echo  " NONE records inserted "; }								        // mysqli_close($connection);    ?>   <p><a href=#>GO BACK MAIN MENU</a></p>  </body></html>    <?php          function search_datalist(){          $extr_datalist = array();            $pdo = DBconnectionUtil::connect();           $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);         try{              $sql = "Select gm_tabreckeyPrimary,			                 lp_pay_m.sys_co_code,                             lp_pay_m.py_year_mm,                             lp_pay_m.py_badge_no,                              lp_pay_m.py_gang_code,                              lp_gang_m.gm_name,                              lp_pay_m.basic,							 lp_pay_m.da,                              lp_pay_m.hra, 							 lp_pay_m.pf,                              lp_pay_m.ptax, 							 lp_pay_m.advance,                              lp_pay_m.esic_e, 							 lp_pay_m.net_salary,                             lp_pay_m.category,                              lp_pay_m.account_number,                              lp_pay_m.esic_o,                              lp_pay_m.no_of_days                  From        lp_gang_m                  Inner Join  lp_pay_m On lp_pay_m.py_badge_no = lp_gang_m.gm_badge_no 				  HAVING  lp_pay_m.category = 'TEMPORARY'                      Order By  lp_pay_m.sys_co_code, 				             lp_pay_m.py_year_mm, 				             lp_pay_m.py_badge_no			                 ";                $q = $pdo->prepare($sql);                $q->execute();        $extr_datalist = $q->fetchAll();								         }         catch (PDOException $sql_err) {	      $errmsg = "TechError: search data list:".$sql_err->getMessage().", contact system administrator";	        error_log($errmsg,0);                              }DBconnectionUtil::disconnect();return $extr_datalist;     }	 	 	 //-- List of  db table	                   function List_Pay_M(){                       $pdo = DBconnectionUtil::connect();                        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);                       GLOBAL $errmsg;                //-- For Gang Code							    GLOBAL $selecteddata_list;				global $record_count;                $record_count   = count($selecteddata_list);					//			foreach ($selecteddata_list as $row) {																																																							      echo "<table border='1'>";      echo "<tr>";      echo "<th>Sr.no</th> <th>Co-cd</th> <th>YYYYY<br/> MM </th> <th> Account Number</th><th> Badge <br/>No</th> <th> Name </th>  <th>GANG</th> <th>category </th> <th>basic</th> <th>DA </th> <th>basic + da</th>   <th>HRA </th>   <th>Gross</th>  <th>PF</th> <th>PTAX </th> <th>ESIC-<br/>EMP</th> <th>Salary </th> <th>Advance</th>  <th>Net Pay</th> <th>ESIC-<br/>Office </th>";	       $sumbasic      = 0;	       $sumda         = 0;		   $sumpay_da     = 0;           $sumgross      = 0;			           $sumhra        = 0;				       $sumpf         = 0;           $sumptax       = 0;			           $sumadvance    = 0;						   $sumesic_e     = 0;           $sumsalary     = 0;			           $sumnet_salary = 0;				       $sumesic_o     = 0;         									         foreach ($selecteddata_list as $row)       {                          $py_badge_no   =      $row['py_badge_no'] ;				//  strzero($py_badge_no,8);			//	str_pad($py_badge_no,4," ",STR_PAD_LEFT);                $py_gang_code   =     $row['py_gang_code'];                $gm_name   =          $row['gm_name'] ;                $basic   =            $row['basic'];				$sumbasic +=          $basic;               // $sum+= $value;                $da   =               $row['da'];				$sumda +=             $da;                $pay_da  =            $basic + $da;				$sumpay_da +=             $pay_da;                $hra   =              $row['hra'];  				$sumhra +=             $hra;	                $gross =              $pay_da + $hra;				$sumgross +=             $gross;                $pf   =               $row['pf']; 				$sumpf +=                $pf  ;                $ptax   =             $row['ptax']; 				$sumptax +=                $ptax  ;                $advance   =          $row['advance'];				$sumadvance +=                $advance  ;								                $esic_e   =           $row['esic_e'];				$sumesic_e +=                $esic_e  ;				                $salary     =         $gross - $pf - $esic_e;				$sumsalary +=                $salary  ;				                $net_salary   =       $row['net_salary'];				$sumnet_salary +=                $net_salary  ;				                $category   =         $row['category'];                $account_number =      $row['account_number'];                $esic_o   =           $row['esic_o'];				$sumesic_o +=                $esic_o ;                                                                                                                                           echo "<tr>";        echo "<td>", $row['gm_tabreckeyPrimary'], "</td><td>", $row['sys_co_code'], "</td><td>", $row['py_year_mm'], "</td>   <td>", $account_number, "</td>  <td class='textright'>", $py_badge_no,"</td><td>", 		$gm_name, "</td><td>", $py_gang_code, "</td><td>", $category, "</td><td class='textright'>",     	$basic, "</td><td class='textright'>", $da, "</td><td class='textright'>", $pay_da, "</td><td class='textright'>", 		$hra, "</td><td class='textright'>", $gross, "</td><td class='textright'>", $pf, "</td><td class='textright'>", $ptax, "</td><td class='textright'>", 		$esic_e,"</td><td class='textright'>", $salary, "</td><td class='textright'>", $advance, "</td><td class='textright'>", $net_salary,"</td><td class='textright'>", $esic_o;            echo "</tr>";      }	  	   echo "<tr>";        echo "<td>", "        ", "</td><td>", "                   ", "</td><td>", "         ", "</td>   <td>","      ", "</td>  <td>", "        ","</td><td>", 		"    ", "</td><td>", "          ", "</td><td>", "         ", "</td><td>",     	$sumbasic, "</td><td class='textright'>", $sumda, "</td><td class='textright' >", $sumpay_da, "</td><td class='textright'  >", 		$sumhra, "</td><td class='textright'  >", $sumgross, "</td><td class='textright'  >", $sumpf, "</td><td class='textright'  >", $sumptax, "</td><td class='textright' >", 		$sumesic_e,"</td><td class='textright' >", $sumsalary, "</td><td class='textright'  >", $sumadvance, "</td><td class='textright' >", $sumnet_salary,"</td><td class='textright' >", $sumesic_o;            echo "</tr>";	               		 		 	DBconnectionUtil::disconnect();return "SUCCESS";}?>