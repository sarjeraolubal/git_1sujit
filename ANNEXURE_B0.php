 <meta charset="utf-8" />


<style type="text/css"/>


</style>



       




<?php

require('fpdf/fpdf.php');
define('DB_HOST','localhost');
define('DB_NAME','mercombu_mercdmaps');

//	   For local server 
   define('DB_USER','mercombu_mrm');
   define('DB_PASSWORD','rameshbhau');   


//	For local server 
//  define('DB_USER','root');
//  define('DB_PASSWORD','');
//       define('DB_HOST','localhost');

       	
		

$link = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);

if (!$link) {
die('Could not connect: ' . mysqli_error()) ;
}

$db_selected = mysqli_select_db($link,DB_NAME);

if ( !$db_selected) {
die('Can\'t use ' . DB_NAME . ': ' . mysqli_error());
}
else {
echo " database selected & connected sucessfully"; 
 }
?>	

	 
	    <?php
					        $id="";

		
	              if (isset($_REQUEST["id"])) {
           //       echo "rid=", $_REQUEST["id"], "<br>";
			        $id=$_REQUEST["id"];
          }
            // echo "represetation-id-value= ";
			// echo  $_REQUEST["id"], "<br>"; 
		  //   echo  "\$Request-id= ", $id, "<br>"; 

         $query = mysqli_query ($link,"SELECT * FROM invoice where id = '$id'") 
           
           or die (mysql_error());
		    

                        
             if (mysqli_num_rows($query)>=1) {
             WHILE ($res = mysqli_fetch_array($query)){
				 
				 
				 
           	$id                     = $res['id'];
 			$cname                  = $res['company_name'];
			$fullname               = $res['name'];
			$dob                    = $res['dob'];
			$designation            = $res['designation'];
			$nationality            = $res['nationality'];
			$identificationmark     = $res['identification_mark'];
			$residentialaddress     = $res['address'];
			$aadhar                 = $res['aadhar'];
			$id_no                  = $res['id_no'];
			$badge_no               = $res['badge_no'];
			$uploadimage            = "uploads/".$res['image'];  
					  
			  
			  
			  
			  
            #######  var_dump($row);    #############     
     

			 
		class PDF extends FPDF
{
	// page header
function Header()
{
	
	GLOBAL $cname;
	GLOBAL $uploadimage; 
	// Logo
	 //$this->Image($uploadimage,10,6,20);
	// Arial bold 15
	//$this->SetFont('Bookman Old Style','',16);
	//$this->SetTextColor(220,50,50);
	//$this->SetTextColor(24,117,231);
	$this->SetTextColor(225,1,23);
	// Move to the right
	//$this->Cell(40);
	// Title

	$this->SetFont('Arial','B',16);
    $this->Cell(0,20,$cname,0,1,"C");
	$this->Ln(0);
	$this->SetTextColor(22,117,231);
	$this->SetFont('Times','B',10);
    $this->Cell(0,2,' Clearing, Forwarding, Shipping, Stevedoring & Handling Contractors',0,1,"C");
	//$this->Ln(1);
	$this->SetFont('Times','B',8);
	$this->Cell(0,4,'115, Bharat Chambers, Baroda Street, Masjid Bunder (E),Mumbai - 400 009.',0,1,"C");
	//$this->Ln(1);
	$this->Cell(0,4,'Mob:+91 961971111, 9820186893. Email: mrmlogistics63@gmail.com',0,1,"C");
	$this->Cell(0,4,'_________________________________________________________________________',0,1,"C");
	//$this->Ln(10)	
	//$this->Cell( 40, 40, $this->Image($uploadimage, $this->GetX(), $this->GetY(), 3.78), 0, 0, 'L', false );
	//$this->Cell( 40, 40, $this->Image($uploadimage, $this->GetX(), $this->GetY(), 33.78), 0, 0, 'L', false );
	$image123 =  $this->Image($uploadimage,160,18,25,25,'JPG','');
	//  http://www.plus2net.com/php_tutorial/pdf-image.php
	//$this->Image('uploads/test1.jpg',20,60,20,20,'JPG','www.plus2net.com');     
    

	
		
}

function Footer()
{
    // Position at 1.5 cm from bottom
    $this->SetY(-15);
    // Arial italic 8
    $this->SetFont('Arial','I',8);
    // Text color in gray
    $this->SetTextColor(128);
    // Page number
    $this->Cell(0,10,'Page '.$this->PageNo(),0,0,'C');
}

function ChapterTitle($num, $label)
{
    // Arial 12
    $this->SetFont('Arial','',12);
    // Background color
    $this->SetFillColor(200,220,255);
    // Title
    $this->Cell(0,6,"Chapter $num : $label",0,1,'L',true);
    // Line break
    $this->Ln(4);
}

//function ChapterBody($file)
function ChapterBody()
{
	
	GLOBAL	$id ,               
	$cname       ,      
	$fullname     ,     
	$dob           ,    
	$designation    ,   
	$nationality     ,  
	$identificationmark,
	$residentialaddress,
	$aadhar            ,
	$id_no            ,
	$badge_no          ,
	$uploadimage       ;
	
	
        

     //$this->SetFont('Arial','B',12);
	$this->SetFillColor(155,65,133); 
	$this->SetFont('Times','B',10);
	$this->Cell(83,10,'                         ',0,0,"R");

	$this->Cell(24,8,'Reg.No Mo596',0,1,"R","TRUE");
	$this->SetFont('Times','',10);
	$this->Cell(0,6,'PERMIT / F / 017',0,1,"C");
	$this->Ln(1);
    $this->SetTextColor(0,0,0);
    $this->SetFont('Times','B',10);
    $this->Cell(0,6,'To,',0,1,"L");
    $this->Cell(0,6,'The Asst.Manager,',0,1,"L");
	$this->SetFont('Times','',10);
	$this->Cell(0,6,'Permit Section,',0,1,"L");
	$this->Cell(0,6,'Mumbai Port Trust.',0,1,"L");
	$this->Ln(2);
	
	

	
	
	$this->Ln(1);
		$this->Cell(0,8,'   Sub.: Inssurance of temporary Dock Entry Permit',0,1,"L");
	$this->Ln(1);

	    //$this->Ln(2);
        //$this->SetTextColor(0,0,0);
        //$this->SetFont('Times','B',10);
        //$this->Cell(10,12,'SUB:',0,0,"L");
     	//$this->Ln(1)
	
    $this->SetFont('Times','',10);
	$this->Cell(200,8,'Kindly Issue temporary Dock Entry Permit for a period of _____ days starting ',0,1,"L");
	$this->Cell(200,8,'from __________ to __________ for the person whose details are as:',0,1,"L");
	
	$this->Ln(3);
	$this->SetFont('Times','B',10);
	$this->Cell(40,8,'1) Full Name:',0,0,"L");
	$this->Cell(0,8,$fullname,0,1,"L");
    //$this->Ln(6);
	$this->Cell(40,8,'2) Date of Birth :',0,0,"L");
	$this->Cell(0,8,$dob,0,1,"L");
    //$this->Ln(6);
	$this->Cell(40,8,'3) Designation:',0,0,"L");
	$this->Cell(0,8,$designation,0,1,"L");
    //$this->Ln(6);
	$this->Cell(40,8,'4) Nationality:',0,0,"L");
	$this->Cell(0,8,$nationality,0,1,"L");
    //$this->Ln(6);
	$this->Cell(40,8,'5).Identification Mark:',0,0,"L");
	$this->Cell(0,8,$identificationmark,0,1,"L");
    //$this->Ln(2);
	$this->SetFont('times','B',10);
    $this->Cell(40,8,'6) Residential Address: ',0,0,"L");
	$this->MultiCell(180,8, $residentialaddress,0,"L");
	$this->Cell(40,10,'6) ID No: ',0,0,"L");
	$this->MultiCell(40,10, $id_no,0,"L");
	$this->Cell(40,10,'6) BADGE No: ',0,0,"L");
	$this->MultiCell(100,10, $badge_no,0,"L");
		//$this->Ln(6);
        $this->multiCell(170,6,'7) Place of Work:  I.D / V.D / P.D / B.PX. / S.T.P. / M.O.D. / F.B. / E-SHED / M.JETHA / NSWH / W.INC',0,"J",false);
		$this->multiCell(170,6,'8) Purpose of Work: Loading, Unloading,High Pilling,Stitching,Filling,Unhooking,Dock Clerk',0,"J",false);
		$this->Cell(70,6,'9) Aadhar / PAN / Election Card No. & Date:',0,0,"L");
        $this->Cell(0,6,$aadhar,0,1,"L");
		
       // $this->Ln(6);
		$this->Cell(170,6,'10) Signature of Pass Holder:',0,"J",false);
	    			   $this->Ln(4);
			   
			   $this->Cell(106,10,'13.	DECLARATION',0,1,"L");
               $this->MultiCell(0,6,'  I declare that the information furnished above is true. I hereby undertake full responsibility for ensuring good conduct of above person inside the port premised.I also undertake full responsibility for any criminal liability accuring due to misuse of DEP by above person.In the event of misuse of permits MBPT administration can take  action as deemed fit including cancellation of registration summarily and criminal prosecution',0,"J");
               $this->Cell(6,6,' Thanking you, ',0,1,"L");
			   $this->Ln(6);
			   $this->SetFont('Times','B',10);
			   $this->Cell(0,14,$cname,0,1,"R");
             
               $this->Cell(0,6,' Authorised Signatory ',0,1,"R");
			   
			   
}

function PrintChapter($num)
{
    $this->AddPage();
    //$this->ChapterTitle($num,$title);
    $this->ChapterBody();
}
}
	 
			$pdf = new PDF();
            $title = 'Electricity Ombudsman';
            $pdf->SetTitle($title);
            $pdf->SetAuthor('Jules Verne');
            $pdf->PrintChapter(1,'Part 1','mukund.txt');
             //$pdf->PrintChapter(2,'Mukund Part 2','mukund.txt');
	        ob_end_clean();
			$filename = "Annexure-B" . $id . ".pdf"; 

          
			$pdf->Output($filename,'D');
            $pdf->Output();
			
         echo 'PDF is genrated <a href="javascript:history.back()">go back</a>' ;
			 
			 
					
		?>	
            <a href="loginsuccess.php">GO BACK MAIN MENU</a>;

	   

	   <?php
		} 
		// ################else {####################
		?>
	    

		<?php
			 exit;
			 }
     	 ?>
	

