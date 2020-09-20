<?php
if(isset($_POST['submit'])) {

    //collect form data
    $year = $_POST['year'];
    $badge_no = $_POST['badge_no'];
    $comp_code = $_POST['comp_code'];
    
    //check Year is set
    if($year =='' || $comp_code =='') {
        $error[] = 'Year And Comp_code have required';
    }
    
    //if no errors carry on
    if(!isset($error)) {

        //create html of the data
        ob_start();
 
        $body = ob_get_clean();

        $body = iconv("UTF-8","UTF-8//IGNORE",$body);

        

GLOBAL $selecteddata_list;
    
GLOBAL $List_Pay_MASTER;
$extr_datalist = array();
$pdo = new PDO("mysql:host=localhost;dbname=mercdmaps", "mercdmuser", "Fez0^w10");
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        try {
            $sql = "
            SELECT lp_pay_m.sys_co_code,
                    lp_pay_m.py_year_mm,
                    lp_pay_m.py_badge_no,
                    lp_pay_m.py_gang_code,
                    lp_pay_m.category,
                    lp_pay_m.account_number,
                    lp_pay_m.basic,
                    lp_pay_m.da,
                    lp_pay_m.hra,
                    lp_pay_m.pf,
                    lp_pay_m.ptax,
                    lp_pay_m.advance,
                    lp_pay_m.esic_e,
                    lp_pay_m.esic_o,
                    lp_pay_m.no_of_days,
                    lp_pay_m.net_salary,
                    lp_gang_m.gm_name,
                    lp_gang_m.gm_gang_code,
                    lp_gang_m.gm_email,
                    lp_gang_m.gm_mphonenbr,
                    smestar_syscom.sys_co_name
                FROM lp_pay_m
                    INNER JOIN smestar_syscom ON
                    lp_pay_m.sys_co_code = 
                    smestar_syscom.sys_co_code
                    INNER JOIN lp_gang_m ON lp_pay_m.py_badge_no
                    = lp_gang_m.gm_badge_no
                WHERE lp_pay_m.sys_co_code = ".$_POST['comp_code']." AND lp_pay_m.py_badge_no = ".$_POST['badge_no']. " AND lp_pay_m.py_year_mm = ".$_POST['year']."
                ORDER BY
                    lp_pay_m.sys_co_code,
                    lp_pay_m.py_year_mm,
                    lp_pay_m.py_badge_no
                    
                ";    
                    
            $q = $pdo->prepare($sql);
            
            $q->execute();
            
            $extr_datalist = $q->fetchAll();
            
        }
        
        catch (PDOException $sql_err) {
            $errmsg = "TechError: search data
            list:".$sql_err->getMessage().", contact system administrator
            ";
            
            error_log($errmsg,0);
        
        }  

         //print_r($extr_datalist);
         //die();

                
        GLOBAL $errmsg;
        
        //--FOR Gang Code
        
        GLOBAL $selecteddata_list;
        
        GLOBAL $net_salary,
                $py_badge_no,
                $gm_name,
                $sys_co_name,
                $basic,
                $da,
                $hra,
                $pf,$yyMM,
                $esic_e,
                $amount_word,
                $advance;
                
        GLOBAL $record_count;
                $record_count = count($selecteddata_list);
                $sumbasic    = 0;
                $sumda        = 0;
                $sumpay_da    = 0;
                $sumgross    = 0;
                $sumhra        = 0;
                $sumpf        = 0;
                $sumptax    = 0;
                $sumadvance    = 0;
                $sumesic_e    = 0;
                $sumsalary    = 0;
                $sumnet_salary = 0;
                $sumesic_o    = 0;

             
 //PDF Creation
        
// Include the main TCPDF library (search for installation path).
require_once('tcpdf_include.php');
//include('numtoword2.php');

// create new PDF document
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('Lubal Sir');
$pdf->SetTitle('Pay Slip Register');
$pdf->SetSubject('PDF Monthly PAY SLIP');
$pdf->SetKeywords('TCPDF, PDF, example, test, guide');


// set default header data
$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH.'', PDF_HEADER_TITLE.'', PDF_HEADER_STRING);

// set header and footer fonts
$pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
$pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

// set default monospaced font
$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

// set margins
$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
$pdf->SetFooterMargin(PDF_MARGIN_FOOTER); 
// set auto page breaks
$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

// set image scale factor
$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

// set some language-dependent strings (optional)
if (@file_exists(dirname(__FILE__).'/lang/eng.php')) {
    require_once(dirname(__FILE__).'/lang/eng.php');
    $pdf->setLanguageArray($l);
}

// ---------------------------------------------------------

// set font
$pdf->SetFont('freeserif', '', 15);

// add a page
$pdf->AddPage();
 foreach ($extr_datalist as $row)
                {
// writeHTML($html, $ln=true, $fill=false, $reseth=false, $cell=false, $align='')
// writeHTMLCell($w, $h, $x, $y, $html='', $border=0, $ln=0, $fill=0, $reseth=true, $align='', $autopadding=true)
// set color for text
// get the current page break margin
$bMargin = $pdf->getBreakMargin();
// get current auto-page-break mode
$auto_page_break = $pdf->getAutoPageBreak();
// disable auto-page-break
$pdf->SetAutoPageBreak(false, 0);
// set bacground image
// restore auto-page-break status
$pdf->SetAutoPageBreak($auto_page_break, $bMargin);
// set the starting point for the page content
$pdf->setPageMark();
            
                    $py_badge_no        = $row['py_badge_no'];
                    
                    //strzero($py_badge_no,8);
                    //str_pad($py_badge_no,4,"",STR_PAD_LEFT);
                    $py_year_mm            = $row['py_year_mm'];
                    $yyMM                = substr($py_year_mm,2,2) ."/". substr($py_year_mm,4,2);
                    $py_gang_code        = $row['py_gang_code'];
                    $sys_co_name        = $row['sys_co_name'];
                    $gm_name            = $row['gm_name'];
                    $basic                = round($row['basic']);
                    // $sum+= $value;
                    $da                    = round($row['da']);
                    $sumda                 += $da;
                    $hra                = round($row['hra']);
                    $sumhra                += $hra;
                    $pf                    = round($row['pf']);
                    $ptax                = round($row['ptax']);
                    $advance            = round($row['advance']);
                    $esic_e                = round($row['esic_e']);
                    $net_salary            = round($row['net_salary']);
                    $category            = round($row['category']);
                    $account_number        = $row['category'];
                    $esic_o                = $row['account_number'];
                    $gm_email                = $row['gm_email'];
                    $gm_mphonenbr                = $row['gm_mphonenbr'];
                    //$sumesic_o            += $esic_o;
                    
                    $_SESSION["net_salary"] = $net_salary;
                    //$amount_word    =    Show_Amount_In_Words($net_salary);
                    $amount_word    =    $net_salary;
                    $totalamount = $basic+$da+$hra;
                    $deduction = $pf+$esic_e;
                    
                     // create some HTML content
            $html = '<h1>Pay slip </h1>
            <table border="1" cellspacing="2" cellpadding="4"> 
                <tr> 
                    
                    <th colspan="3">Badge No: '.$py_badge_no.' Gang Code ['.$py_gang_code.'] </th> 
                    <th>'.$py_year_mm.' </th>
                </tr> 
                <tr> 
                    <td colspan="2"> 
                            <strong>SYS CO NAME:</strong><br>'.$sys_co_name.'  
                    </td> 
                    <td colspan="2"> 
                            <strong>Employee:</strong><br> '.$gm_name.' 
                    </td> 
                </tr> 

                <tr> 
                    <th>Basic</th> 
                    <th>DA</th> 
                    <th>HRA</th> 
                    <th>PF</th> 
                </tr> 
                <tr> 
                    <td>'.$basic.'</td> 
                    <td>'.$da.'</td> 
                    <td>'.$hra.'</td> 
                    <td>'.$pf.'</td> 
                </tr> 
                <tr> 
                    <td>Esic_e</td> 
                    <td>'.$esic_e.'</td> 
                    <td></td> 
                    <td> </td> 
                </tr> 
                    <tr> 
                        <th colspan="2">Subtotal</th> 
                        <td> '.$basic.' + '.$da.' + '.$hra.' </td> 
                        <td>'.$totalamount.' </td> 
                    </tr> 
                    <tr> 
                        <th colspan="2">Deduction</th> 
                        <td> '.$pf.' + '.$esic_e.' </td> 
                        <td>'.$deduction.'</td> 
                    </tr> 
                    <tr> 
                        <th colspan="3">Grand Total</th> 
                        <td>'.$net_salary.'</td> 
                    </tr>
            </table>
            '; 
            
        
        //End PDF Creation 
        // output the HTML content
        $pdf->writeHTML($html, true, false, true, false, '');
        // reset pointer to the last page
$pdf->lastPage();  
// ---------------------------------------------------------

        
            }
            //Close and output PDF document
$pdf->Output('pay_slip_pdf.pdf', 'I');
    }
}

//if their are errors display them
if(isset($error)){
    foreach($error as $error){
        echo "<p style='color:#ff0000'>$error</p>";
    }
}
?> 

<form action='<?php $_SERVER['PHP_SELF']?>' method='post'>
<h1>Payroll Register</h1>
       <p><label>Year(YYYYMM)</label><br><input type="year" name="year"/></p>
       <p><label>BADGE NUMBER</label><br><input type="text" name="badge_no"/></p>
       <p><label>Company Code</label><br><input type="text" name="comp_code"/></p>
       <p><input type='submit' name='submit' value='Get PDF'></p> 
</form>