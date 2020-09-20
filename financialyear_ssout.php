<div align="right"><a href="financialyear_ss.php"><i class="fa fa-arrow-circle-left"></i>&nbsp; Back to Search</a></div>
<table class="table table-striped table-bordered gradienttable">
<thead>
<tr>

	<th>Accounting Year</th>
	<th>Account Year Start Date</th>
	<th>Account Year End Date</th>
	<th>Year</th>
	<th>Month</th>
	<th>Transaction Date From</th>
	<th>Transaction Date To</th>
<th width=300>Action</th>
</tr>
</thead>
<tbody>

<?php
GLOBAL $selecteddata_list;
foreach ($selecteddata_list as $row) {
	echo '<tr>';
	echo '<td>'.$row["fy_accyear"].'</td>';

	$list_ts = strtotime($row["fy_accyearstartdt"]);
	$list_dt = date('d-m-Y',$list_ts);
	echo '	<td>'. $list_dt. '</td>';


	$list_ts = strtotime($row["fy_accyearenddt"]);
	$list_dt = date('d-m-Y',$list_ts);
	echo '	<td>'. $list_dt. '</td>';

	echo '<td>'.$row["fy_year"].'</td>';
	echo '<td>'.$row["fy_month"].'</td>';

	$list_ts = strtotime($row["fy_trandtfrom"]);
	$list_dt = date('d-m-Y',$list_ts);
	echo '	<td>'. $list_dt. '</td>';


	$list_ts = strtotime($row["fy_trandtto"]);
	$list_dt = date('d-m-Y',$list_ts);
	echo '	<td>'. $list_dt. '</td>';

	echo '<td width=300>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=financialyear&keyvalue='.$row["fy_tabreckey"].'&formrdfor=VIEW" title="'.$row["fy_tabreckey"].'">View</a>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=financialyear&keyvalue='.$row["fy_tabreckey"].'&formrdfor=EDIT" title="'.$row["fy_tabreckey"].'">EDIT</a>';

	echo '</td>';
	echo '</tr>';
}
?>
</tbody>
</table>
