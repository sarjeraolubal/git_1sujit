<html>  <head>    <title>       Displaying all members Register   </title>   <style>   .textright{	   text-align:right;   }   </style>  </head>  <body>    <h1>Displaying all members Register  </h1>	       <form action="<?php $_SERVER['PHP_SELF']?>" method="post">        <label>Year(YYYYMM)</label><input type="year" name="year"/>        <label>BADGE NUMBER</label><input type="text" name="badge_no"/>        <label>Company Code</label><input type="text" name="comp_code"/>		<label>Category Code</label><input type="text" name="category"/>        <input type="submit"/>        </form>    <?php	//require "dist/lib/commonfunc.php";//validatepage();require "dist/lib/dbconnection.php";require('fpdf/fpdf.php');require "numtoword2.php";//require "dist/lib/dataextrfunc.php";				   //  function mysql_escape_string($string){return mysqli_escape_string($string);}	          	     GLOBAL $selecteddata_list;         GLOBAL $List_Pay_MASTER 		 //, $post_year,$post_comp_code,$post_badge_no,$post_category		 ;		 		if((isset($_POST['year']))||(isset($_POST['category']))||(isset($_POST['badge_no']))||(isset($_POST['comp_code']))){        if($_POST['year']==""){$post_year='%';}else {$post_year=$_POST['year'];}        if($_POST['comp_code']==""){$post_comp_code='%';}else {$post_comp_code=$_POST['comp_code'];}        if($_POST['badge_no']==""){$post_badge_no='%';}else {$post_badge_no=$_POST['badge_no'];}        if($_POST['category']==""){$post_category='%';}else {$post_category=$_POST['category'];}		$selecteddata_list = search_datalist($post_year,$post_comp_code,$post_badge_no,$post_category);				$List_Pay_MASTER  = List_Pay_M($selecteddata_list);		if ($List_Pay_MASTER == "SUCCESS"){ echo  $record_count . "  records inserted "; }                                      ELSE	{ echo  " NONE records inserted "; }     // mysqli_close($connection);}   //close if    ?>   <p><a href=loggeduserhome.php>GO BACK MAIN MENU</a></p>  </body></html>    <?php          function search_datalist($post_year,$post_comp_code,$post_badge_no,$post_category){          $extr_datalist = array();            $pdo = DBconnectionUtil::connect();           $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);         try{              $sql = "Select gm_tabreckeyPrimary,			                 lp_pay_m.sys_co_code,                             lp_pay_m.py_year_mm,                             lp_pay_m.py_badge_no,                              lp_pay_m.py_gang_code,                              lp_gang_m.gm_name,                              lp_pay_m.basic,							 lp_pay_m.da,                              lp_pay_m.hra, 							 lp_pay_m.pf,                              lp_pay_m.ptax, 							 lp_pay_m.advance,                              lp_pay_m.esic_e, 							 lp_pay_m.net_salary,                             lp_pay_m.category,                              lp_pay_m.account_number,                              lp_pay_m.esic_o,                              lp_pay_m.no_of_days                  From        lp_gang_m                  Inner Join  lp_pay_m On lp_pay_m.py_badge_no = lp_gang_m.gm_badge_no 				 				 HAVING    lp_pay_m.sys_co_code like '".$post_comp_code."'  AND  lp_pay_m.py_year_mm    like '".$post_year."' AND lp_pay_m.py_badge_no like '".$post_badge_no."' AND lp_pay_m.category like '".$post_category."'				                    Order By  lp_pay_m.sys_co_code, 				             lp_pay_m.py_year_mm, 				             lp_pay_m.py_badge_no			                 ";                $q = $pdo->prepare($sql);                $q->execute();        $extr_datalist = $q->fetchAll();								         }         catch (PDOException $sql_err) {	      $errmsg = "TechError: search data list:".$sql_err->getMessage().", contact system administrator";	        error_log($errmsg,0);                              }DBconnectionUtil::disconnect();return $extr_datalist;     }	 	 	 //-- List of  db table	                   function List_Pay_M(){                       $pdo = DBconnectionUtil::connect();                        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);                       GLOBAL $errmsg;                //-- For Gang Code							    GLOBAL $selecteddata_list;                global $net_salary,                      $py_badge_no, 								      $gm_name, 				      $basic,     				      $da,       				      $hra,        				      $pf,$yyMM,         				      $esic_e,                       $amount_word,					  				      $advance;    												global $record_count;                $record_count   = count($selecteddata_list);					//			foreach ($selecteddata_list as $row) {					 echo "<table border='1'>";																																																		     	       $sumbasic      = 0;	       $sumda         = 0;		   $sumpay_da     = 0;           $sumgross      = 0;			           $sumhra        = 0;				       $sumpf         = 0;           $sumptax       = 0;			           $sumadvance    = 0;						   $sumesic_e     = 0;           $sumsalary     = 0;			           $sumnet_salary = 0;				       $sumesic_o     = 0;                  									 		class PDF extends FPDF{	// page header	//	$this->SetMargins(0,0,0);    function Header(){		//$this->SetMargins(0,0,0,0);        $this->SetLeftMargin(0);	$this->SetXY(0, 0);		/* Logo	 //$this->Image('Capture.PNG',10,6,20);	// Arial bold 15	//$this->SetFont('Bookman Old Style','',16);	//$this->SetTextColor(220,50,50);	//$this->SetTextColor(24,117,231);	$this->SetTextColor(225,1,23);	// Move to the right	//$this->Cell(40);	// Title  	$this->SetFont('Arial','',16);    $this->Cell(0,15,'Office of the Electricity Ombudsman (Mumbai)',0,1,"C");	$this->Ln(0);	$this->SetTextColor(22,117,231);	$this->SetFont('Times','',10);    $this->Cell(0,2,' (Under Section 42(6) of the Electricity Act, 2003)',0,1,"C");	//$this->Ln(1);	$this->Cell(0,4,'606 Keshva Bandra Kurla Complex, Bandra (E), Mumbai - 400 051.',0,1,"C");	//$this->Ln(1);	$this->Cell(0,4,'Tel No. 022 2659 2965,2659 0339., Tele fax : 022 2659 2965..',0,1,"C");	//$this->Ln(10)	$this->Cell(0,4,'Email id : electricityombudsmanmumbai@gmail.com, Web site : www.mercombudsman.org.in',0,1,"C");	//$this->Ln(1);	//$this->Cell(0,5,'Web site : www.mercombudsman.org.in.',0,1,"C"); 	// Line break    $this->Ln(20);		*/			}function Footer(){    /*  // Position at 1.5 cm from bottom    $this->SetY(-15);    // Arial italic 8    $this->SetFont('Arial','I',8);    // Text color in gray    $this->SetTextColor(128);    // Page number    $this->Cell(0,10,'Page '.$this->PageNo(),0,0,'C');    */	}function ChapterTitle($num, $label){    // Arial 12    $this->SetFont('Arial','',12);    // Background color    $this->SetFillColor(200,220,255);    // Title    $this->Cell(0,6,"Chapter $num : $label",0,1,'L',true);    // Line break    $this->Ln(4);}//function ChapterBody($file)function ChapterBody(){		global $selecteddata_list;		foreach ($selecteddata_list as $row)       {		  		  GLOBAL $sumda,$sumhra,$sumesic_o;			                $py_badge_no   =      $row['py_badge_no'] ;				//  strzero($py_badge_no,8);			//	str_pad($py_badge_no,4," ",STR_PAD_LEFT);			    $py_year_mm     =     $row['py_year_mm']; 				$yyMM           =     substr($py_year_mm,2,2) ."/" . substr($py_year_mm,4,2);                $py_gang_code   =     $row['py_gang_code'];																								                $gm_name   =          $row['gm_name'] ;                $basic   =           round($row['basic']);                $da   =              round($row['da']);                $hra   =             round($row['hra']);  	            $pf   =              round($row['pf']);                 $ptax   =            round($row['ptax']);                 $advance   =         round($row['advance']);								                $esic_e   =           round($row['esic_e']);								                $net_salary   =      round($row['net_salary']);				                $category   =         $row['category'];                $account_number =      $row['account_number'];                $esic_o   =           $row['esic_o'];                $_SESSION["net_salary"]  = $net_salary;                                 $amount_word = Show_Amount_In_Words($net_salary);			  // $gm_name=substr($gm_name,0,21);	        /*global      $net_salary,                      $py_badge_no, 								      $gm_name, 				      $basic,     				      $da,       				      $hra,        				      $pf,$yyMM,         				      $esic_e,                       $amount_word,					  				      $advance;  */  	     //$this->SetFont('Arial','B',12);	 	$this->SetFont('Times','',12);	$this->SetLeftMargin(0);	//$this->SetMargins(0,0,0);    					$this->Cell(15,4,$yyMM,0,0,"R");    $this->Cell(12,4,$py_badge_no,0,0,"R");		$font_size = 12;		$decrement_step = 0.1;	$line_width = 58; // Line width (approx) in mm	$this->SetFont('Times', '', $font_size);	while($this->GetStringWidth($gm_name) > $line_width) {		  $this->SetFontSize($font_size -= $decrement_step);	}	$this->Cell($line_width, 4, $gm_name, 0, 0, "L");		$this->SetFont('Times','',12);			  //  $this->Cell(55,4,$gm_name,0,0,"L");			    $this->Cell(17,4,$basic,0,0,"R");	$this->Cell(17,4,$da,0,0,"R");	$this->Cell(15,4,$hra,0,0,"R");	$this->Cell(17,4,$pf,0,0,"R");	$this->Cell(12,4,$esic_e,0,0,"R");	$this->Cell(17,4,$advance,0,0,"R");	$this->Cell(20,4,$net_salary,0,1,"R");    $this->Ln(4);	$this->Cell(13,4,'     ',0,0,"L");    $this->Cell(10,4,'     ',0,0,"L");	$this->Cell(0,4.16, $amount_word,0,0,"L");				    $this->Ln(6);    $this->Ln(6);    $this->Ln(8);    //$this->Ln(6);    //$this->Ln(6);    //$this->Ln(6);    //$this->Ln(6);  	 				    $this->Ln(10);	/*    // Read text file      $txt = file_get_contents($file);    // Times 12    $this->SetFont('Times','',12);    // Output justified text 0 is set for whole line. // If you wants column output then set width for it    $this->MultiCell(0,5,$txt);	*/	  }}function PrintChapter($num)   {    $this->AddPage();    //$this->ChapterTitle($num,$title);    $this->ChapterBody();   }}			$pagesize=array(200,300);			//$pdf = new PDF();			$pdf = new PDF('P','mm',$pagesize);            $title = 'Electricity Ombudsman';            $pdf->SetTitle($title);            $pdf->SetAuthor('Jules Verne');            $pdf->PrintChapter(1,'Part 1','mukund.txt');             //$pdf->PrintChapter(2,'Mukund Part 2','mukund.txt');	        ob_end_clean();			$filename = "Payslip" . $py_badge_no . ".pdf";           			$pdf->Output($filename,'D');            $pdf->Output();			         echo 'PDF is genrated <a href="javascript:history.back()">go back</a>' ;							   			   			   			   			             /*             echo "<tr>";		        echo "<td>",             $yyMM, "</td>  		<td class='textright'>", $py_badge_no,"</td>		<td>",                   $gm_name,    "</td>        <td class='textright'>", $basic,      "</td>      	<td class='textright'>", $da,         "</td>        <td class='textright'>", $hra,        "</td>		<td class='textright'>", $pf,         "</td>		<td class='textright'>", $esic_e,     "</td>		<td class='textright'>", $advance,    "</td>	    <td class='textright'>", $net_salary, "</td>	 ";            echo "</tr>";												        echo "<tr>";              echo "<td>",   "    ", "</td>"  ;				echo "</tr>";		                 echo "<tr>";             echo "<td>", "    ", "</td><td>" , " ", "</td> <td>",    			 "</td> ";				echo "</tr>";				                 echo "<tr>";             echo " <td>", "<br />","<br>","<br/>","<br>", "<br />","<br>","<br/>", "</td>	";				echo "</tr>";				                 echo "<tr>";              echo "<td>",   "    ", "</td>	";				echo "</tr>";		        echo "<tr>";             echo " <td>",   "    ", "</td>	";				echo "</tr>";		*/		      	  	                		 		 	DBconnectionUtil::disconnect();return "SUCCESS";}			 	?>