<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title> BANK STATEMENT FOR SALARY </title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<link rel="stylesheet" type="text/css" href="css/styles.css" />
<link rel="stylesheet" type="text/css" href="css/table.css" />
<script type="text/javascript" src="js/autofill.js"></script>
<script language="JavaScript">
function Check(chk)
{ 
if(document.myform.Check_ctr.checked==true)
{
for (var i = 0; i < chk.length; i++)
{
chk[i].checked = true ;
}
}
else
{
for (i = 0; i < chk.length; i++)
chk[i].checked = false ;
}
}
</script>
<script type="text/javascript">
function confirmDelete() 
{
	var msg = "Are you sure you want to delete?";       
    return confirm(msg);
}
</script>
<script language="javascript">
function download()
{
	window.location='Bank_statement.xls';
}
</script>
<style type="text/css">
.textright{
	text-align:right;
}
</style>
</head>
<body>
<div id="wrapper">
       
	    <form action="<?php $_SERVER['PHP_SELF']?>" method="post">
		<label>Year(YYYYMM)</label><input type="year" name="year"/>
		<label>Badge No</label><input type="text" name="badge_no"/>
		<label>Category Code</label><input type="text" name="category_code"/>
		<label>Company Code</label><input type="text" name="comp_code"/>
		<input type="submit"/>
	    </form>



<!--<table width="660" border="1" cellpadding="1" cellspacing="0">
  <tr>
    <td width="149" bgcolor="#33CC00"><strong>ACCOUNT <br/>No.</strong></td>
    <td width="323" bgcolor="#33CC00"><strong>Name of Employee</strong></td>
    <td width="82" bgcolor="#33CC00"><strong>Cur <br/>code</strong></td>
	<td width="82" bgcolor="#33CC00"><strong>branch  <br/>code</strong></td>
    <td width="82" bgcolor="#33CC00"><strong>TRN <br/> TYPE </strong></td>
    <td width="82" bgcolor="#33CC00"><strong>Amount </strong></td>


    <td width="88" bgcolor="#33CC00"><strong>TRANSACTION</strong></td>
  </tr>-->
  <?php
 require "dist/lib/dbconnection.php";
 GLOBAL $List_excel, $selecteddata_list, $sumnet_salary;

  GLOBAL $List_Pay_MASTER ;  
  if((isset($_POST['year']))||(isset($_POST['badge_no']))||(isset($_POST['category_code']))||(isset($_POST['comp_code']))){
		if($_POST['year']==""){$post_year='%';}else {$post_year=$_POST['year'];}
		if($_POST['comp_code']==""){$post_comp_code='%';}else {$post_comp_code=$_POST['comp_code'];}
		if($_POST['category_code']==""){$post_category_code='%';}else {$post_category_code=$_POST['category_code'];}
		if($_POST['badge_no']==""){$post_badge_no='%';}else {$post_badge_no=$_POST['badge_no'];}
/*	
     require_once("config.php");
$from=$_POST['from'];
$to=$_POST['to'];
*/
$selecteddata_list = search_datalist($post_year,$post_badge_no,$post_comp_code,$post_category_code);

		
   $List_Pay_MASTER  = List_Pay_M($selecteddata_list);
    //$List_Pay_MASTER  = bank_stmtxls($selecteddata_list);


if ($List_Pay_MASTER == "SUCCESS"){ echo  $record_count . "  records inserted "; } 

                                     ELSE	{ echo  " NONE records inserted "; }
  
   $List11_excel =   bank_stmtxls($selecteddata_list);
    if ($List11_excel == "SUCCESS"){ echo  $record_count . "  records inserted "; } 

                                     ELSE	{ echo  " NONE records inserted "; }
  


  }//close if
 ?>
 
 <p><a href="javascript:void(0);" onClick="download();"><img src="img/preview.png" alt="" /></a></p>
	
  <p><a href=loggeduserhome.php>GO BACK MAIN MENU</a></p>
 </div>
</body>
</html
 
 <?php
 
          function search_datalist($post_year,$post_badge_no,$post_comp_code,$post_category_code)
		  
		  {

          $extr_datalist = array(); 

           $pdo = DBconnectionUtil::connect();

           $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


         try{


               $sql = "Select gm_tabreckeyPrimary,
			                 lp_pay_m.sys_co_code,

                             lp_pay_m.py_year_mm,
                             lp_pay_m.py_badge_no, 
                             lp_pay_m.py_gang_code, 
                             lp_gang_m.gm_name,
                             smestar_syscom.sys_co_name,
                             smestar_syscom.sys_acc_number,
                             lp_pay_m.basic,
							 lp_pay_m.da, 
                             lp_pay_m.hra, 
							 lp_pay_m.pf, 
                             lp_pay_m.ptax, 
							 lp_pay_m.advance, 
                             lp_pay_m.esic_e, 
							 lp_pay_m.net_salary,
                             lp_pay_m.category, 
                             lp_pay_m.account_number, 
                             lp_pay_m.esic_o, 
                             lp_pay_m.no_of_days 
                 From        lp_gang_m 
			
                 Inner Join  lp_pay_m On lp_pay_m.py_badge_no = lp_gang_m.gm_badge_no 
				 INNER JOIN smestar_syscom ON  lp_pay_m.sys_co_code = smestar_syscom.sys_co_code
		         WHERE lp_pay_m.sys_co_code like '".$post_comp_code."'  AND  
				 lp_pay_m.py_year_mm  like '".$post_year."' AND 
				 lp_pay_m.category  like '".$post_category_code."' AND 

				 lp_pay_m.py_badge_no like '".$post_badge_no."'
             	 Order By  lp_pay_m.sys_co_code, 
				             lp_pay_m.py_year_mm, 
				             lp_pay_m.py_badge_no
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






                  function List_Pay_M()
				  
				  {


                       $pdo = DBconnectionUtil::connect();

                        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                       GLOBAL $errmsg;


                //-- For Gang Code

				

			    GLOBAL $selecteddata_list;



				global $record_count;
				global $sumnet_salary;
				
                $record_count   = count($selecteddata_list);
				

				
							
				
				
				
		 
		// $company_name =    $selecteddata_list[0][7];
		 $py_year_mm   =    $selecteddata_list[0][2];
	    echo "Bank Statement  For for the year   " . $py_year_mm  ;
		 echo "  <br/>    ";
		// echo "for the year    " .  $py_year_mm   ;
	//	 echo "  <br/>    ";
		 		
				
				
				
				
		echo '<a href="billreport.xls" ">Excel Download<img src="img/preview.png" alt="" /></a><br/>';		
				
      echo "<table border='1'>";
      echo "<tr>";
      echo "<th>Fifteen Digit <br/>AC No. </th> <th>Name of Employee </th> <th> Currency <br/>code</th><th> branch  <br/>code </th> <th> type of <br/> transaction </th> <th>Amount </th> <th>Transaction 30 Characters </th> ";

	    
           $sumnet_salary = 0;			
	      
         
			
			
			

         foreach ($selecteddata_list as $row) 

      {
          
                $py_badge_no   =      $row['py_badge_no'] ;
			    $py_year_mm1   =      $row['py_year_mm'] . "01";
                $py_gang_code   =     $row['py_gang_code'];
                $gm_name   =          $row['gm_name'] ;
                $py_year_mm      =    date('M - Y',strtotime($py_year_mm1) );
                $net_salary      =    $row['net_salary'];
				
				$net_salary      =  round($net_salary,0,PHP_ROUND_HALF_DOWN);
			     $net_salary      = number_format($net_salary  , 2, '.', '');
		           $sumnet_salary +=  $net_salary;

          		$sys_co_name      =      $row['sys_co_name'];

				//$sumnet_salary   +=     $net_salary  ;
	            $temp_date1 = strtotime($py_year_mm1);
                $account_number =      $row['account_number'];
				
        echo "<tr>";
        echo "<td>", $account_number, "</td>  
		<td>", $gm_name, "</td> 
		<td>", "INR", "</td> <td>", substr($account_number,0,3),"</td> 
		
		<td >", "CR", "</td> <td class='textright'>", $net_salary ,  "</td> 
		<td >", substr($sys_co_name,0,5),  " WAGES FOR MONTH OF " .$py_year_mm, "</td>"
		;    
        echo "</tr>";
      }

	   echo "<tr>";
        echo "<td>", "", "</td>  
		<td>", "", "</td> 
		<td>", "  ", "</td> 
		<td>", "  ", " </td> 
		<td >", "  ", "</td> 
		<td class='textright'>", $sumnet_salary ,  "</td> 
		
		<td >", "", "</td>"
		;    
        echo "</tr>";
     //  DBconnectionUtil::disconnect();



return "SUCCESS";



}





     function bank_stmtxls($selecteddata_list)
 {

error_reporting (E_ALL ^ E_NOTICE);
//require "dist/lib/dbconnection.php";

//  require_once("config.php");
error_reporting (E_ALL ^ E_NOTICE);
global $sumnet_salary;
//  require_once("config.php");
require_once("excelwriter.class.php");

$excel=new ExcelWriter("billreport.xls");
if($excel==false)	
echo $excel->error;
$myArr=array("");
$heading = "<h1>".$selecteddata_list[0]['sys_co_name']."</h1>";
$co_account_number = $selecteddata_list[0]['sys_acc_number'];
$myArr=array($heading);
$excel->writeLine($myArr);
$myArr=array("");
$excel->writeLine($myArr);
$myArr=array("ACCOUNT NUMBER","CUR CODE","BRN CODE","TRN TYPE","AMOUNT","TRANSATION");
$excel->writeLine($myArr);;
//$from=$_POST['from'];
//  $to=$_POST['to'];
//$qry=mysql_query("select * from products where itemnum between '$from' and '$to'");
// if($qry!=false)

//	$i=1;
$myArr=array($co_account_number,  "INR",
		             substr($co_account_number,0,3),
		             "CR",
		             $sumnet_salary,
					 substr($selecteddata_list[0]['sys_co_name'],0,5)." WAGES FOR MONTH OF ".date('M - Y',strtotime($selecteddata_list[0]['py_year_mm'] . "01") ) )        
					                          ;
$excel->writeLine($myArr);
	foreach ($selecteddata_list as $row)
	{
		
		        $py_badge_no   =      $row['py_badge_no'] ;
			    $py_year_mm1   =      $row['py_year_mm'] . "01";
                $py_gang_code   =     $row['py_gang_code'];
                $gm_name   =          $row['gm_name'] ;
                $py_year_mm      =    date('M - Y',strtotime($py_year_mm1) );
                $net_salary      =    $row['net_salary'];
				
				$net_salary      =  round($net_salary,0,PHP_ROUND_HALF_DOWN);
			     $net_salary      = number_format($net_salary  , 2, '.', '');
				$sys_co_name      =      $row['sys_co_name'];

				$sumnet_salary1   +=     $net_salary  ;
	            $temp_date1 = strtotime($py_year_mm1);
                $account_number =      $row['account_number'];
		
		
		
		
		$myArr=array($account_number,  "INR",
		             substr($account_number,0,3),
		             "CR",
		             $net_salary,
					 substr($sys_co_name,0,5)." WAGES FOR MONTH OF ".$py_year_mm )        
					                          ;
		            $excel->writeLine($myArr);
		
	}
	$myArr=array('','','','',$sumnet_salary);
		            $excel->writeLine($myArr);
	
	
DBconnectionUtil::disconnect();

return "SUCCESS"	;

}
?>


