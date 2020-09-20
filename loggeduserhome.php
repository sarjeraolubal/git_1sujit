<?php 

$error_message = '';
require 'dist/lib/commonfunc.php';
validatepage();

require "dist/lib/dbconnection.php";
require "dist/lib/dataextrfunc.php";

$doc_catg = '';
$doc_subcatg = '';
$doc_product = '';
$doc_for = '';

$pdo = DBconnectionUtil::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$valid = true;
$v_po_pending_list = array();
$v_rm_stock_closebal =0;
$v_prod_stock_closebal =0;
/*
try{
	

	$sql = "select coalesce(A.rm_stock_closebal,0) from raw_mat_stock A where A.sys_co_code=? and A.sys_co_br_code=? AND A.rm_stock_dt = ".
			"(select max(B.rm_stock_dt) FROM raw_mat_stock B where B.sys_co_code = A.sys_co_code and B.sys_co_br_code = A.sys_co_br_code)";
		
	$q = $pdo->prepare($sql);
	$q->execute(array($_SESSION['sys_co_code'],$_SESSION['sys_co_br_code']));
	$db_data = $q->fetch(PDO::FETCH_ASSOC);

	$v_rm_stock_closebal = $db_data['rm_stock_closebal'];

	
	$sql = "select ifnull(A.prod_stock_closebal,0) from productstock A where A.sys_co_code=? and A.sys_co_br_code=? AND A.prod_stock_dt = ".
			"(select max(B.prod_stock_dt) FROM productstock B where B.sys_co_code = A.sys_co_code and B.sys_co_br_code = A.sys_co_br_code)";
			
	$q = $pdo->prepare($sql);
	$q->execute(array($_SESSION['sys_co_code'],$_SESSION['sys_co_br_code']));
	$db_data = $q->fetch(PDO::FETCH_ASSOC);

	$v_prod_stock_closebal = $db_data['prod_stock_closebal'];

	$sql = "select A.*,(select sum(B.rm_po_units) from raw_mat_po_d B WHERE B.rm_po_nbr = A.rm_po_nbr) tot_units from raw_mat_po_h A where A.rm_po_status='PENDING'".
			" and A.sys_co_code=? and A.sys_co_br_code=?";	
	$q = $pdo->prepare($sql);
	$q->execute(array($_SESSION['sys_co_code'],$_SESSION['sys_co_br_code']));
	$v_po_pending_list = $q->fetchAll();
	

}
catch (PDOException $sql_err) {
	$error_message = 'Oops!! some technical error, please try after sometime!!';
	error_log($sql_err->getMessage());	
	$valid = false;
}
*/
DBconnectionUtil::disconnect();

?>
<?php include "dist/inc/loginheader.php";
include "dist/inc/leftsidemenu.php";
?>
<div class="content-wrapper">
<section class="content">
<h4>Statistics</h4>
<div class="row">
<section class="col-lg-13">
<section class="content-header">
<div class="box box-primary">
<div class="box-body">

<div class="row">
	<section class="col-lg-6">
	<section class="content-header">
	<p>NONE - To be designed</p>	
	
</div>
</section>
</section>
</div>
<div class="clearfix"></div><br>
</section>
</div>
<?php include "dist/inc/footercontent.php";?>
