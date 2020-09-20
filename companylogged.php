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
<?php include "topsummary2.php";?>	

	<br><br>
		<div class="row">
		  <div class="col-md-12">
	

			  
	  <div class="boxbox box-solid bg-purple-gradient">
                <div class="box-header">
                  <img src="dist/img/bidsicon.png" width="20px" height="25px"/>
                  <h3 class="box-title">List of Authorized Software and Status</h3>
                </div><!-- /.box-header -->
                <div class="box-body">
				<div height="200px" style="overflow:scroll;">
					<table class="table table-striped table-bordered gradienttable">
					<thead>
					<tr>
						<th>Software</th>
						<th>License / AMC Date</th>
						<th>Units (User Base)</th>
						<th>Status</th>
					</tr>
					</thead>
					<tbody>

					<?php
					foreach ($v_po_pending_list as $row) {
						echo '<tr>';
						echo '<td></td>';
						echo '<td></td>';
						echo '<td></td>';
						echo '<td></td>';
						echo '</tr>';
					}
					?>
					</tbody>
					</table>
					</div>
                </div><!-- /.box-body -->

                <div class="box-footer clearfix no-border">
                  <!--<button class="btn btn-default pull-right"><i class="fa fa-plus"></i> Add New</button>-->
                </div>
              </div><!-- /.box -->


			  
			  
</section>
	</section>
	

  </div>
  	<div class="clearfix"></div>
	<?php include "graphscripts.php";?>

</div>
</div>
</section>
</section>
</div>
<div class="clearfix"></div><br>
</section>
</div>
<?php include "dist/inc/footercontent.php";?>
