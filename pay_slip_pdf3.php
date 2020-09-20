<?php
    require 'dist/lib/dbconnection.php'; 
    
    require_once 'numtoword2.php';
    
    require_once 'html_table.php';
    
    GLOBAL $selecteddata_list;
    
    GLOBAL $List_Pay_MASTER;
    
    $selecteddata_list = search_datalist();
    
    $List_Pay_MASTER = List_Pay_M($selecteddata_list);
    
    //if ($List_Pay_MASTER == "SUCCESS") {$record_count = count($selecteddata_list); echo $record_count. "records inserted";}
    //else {echo "NONE records inserted";}
    function search_datalist() {
        $extr_datalist = array();
        $pdo = DBconnectionUtil::connect();
        $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        
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
                    smestar_syscom.sys_co_name
                FROM lp_pay_m
                    INNER JOIN smestar_syscom ON
                    lp_pay_m.sys_co_code = 
                    smestar_syscom.sys_co_code
                    INNER JOIN lp_gang_m ON lp_pay_m.py_badge_no
                    = lp_gang_m.gm_badge_no
                WHERE py_badge_no IN(1,4)
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
    DBconnectionUtil::disconnect();
    
    return $extr_datalist;
    }
    
    
    //-- List of db table
    
    function List_Pay_M ()
        {
        $pdo = DBconnectionUtil::connect();
        
        $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        
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
                
                $pdf=new PDF();
                $pdf->AddPage();
                $pdf->SetFont('Courier','',12);
            foreach ($selecteddata_list as $row)
                {
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
                    $sumesic_o            += $esic_o;
                    
                    $_SESSION["net_salary"] = $net_salary;
                    $amount_word    =    Show_Amount_In_Words($net_salary);
                    
                    
                    $html='<table><tr><th>'.$yyMM.'</th><th></th><th></th><th></th><th>'.$py_badge_no.'</th><th></th><th></th><th></th><th>'.$gm_name.'</th><th></th><th></th><th></th><th>'.$basic.'</th><th></th><th></th><th></th><th>'.$da.'</th><th></th><th></th><th></th><th>'.$hra.'</th><th></th><th></th><th></th><th>'.$pf.'</th><th></th><th></th><th></th><th>'.$esic_e.'</th><th></th><th></th><th></th><th>'.$net_salary.'</th></tr><tr></tr><tr><td></td><td></td><td>'.$amount_word.'</td></tr><tr></tr><tr></tr></table>';

                    $pdf->WriteHTML($html);
                }
                $pdf->Output();
        }
    ?>