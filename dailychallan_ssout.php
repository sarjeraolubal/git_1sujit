<div align="right"><a href="dailychallan_ss.php"><i class="fa fa-arrow-circle-left"></i>&nbsp; Back to Search</a></div>
<table class="table table-striped table-bordered gradienttable">
<thead>
<tr>

	<th>Company</th>
	<th>Work Date</th>
	<th>Slip Number</th>
	<th>Vessel Name</th>
	<th>Commodity</th>
	<th>Labour Amount</th>
	<th>Total Amount</th>
	<th>men(no.)</th>
	<th>Matha</th>
<th width=300>Action</th>
</tr>
</thead>
<tbody>

<?php
GLOBAL $selecteddata_list;
foreach ($selecteddata_list as $row) {
	echo '<tr>';
	echo '<td>'.$row["sys_co_code"].'</td>';

	$list_ts = strtotime($row["dwd_date"]);
	$list_dt = date('d-m-Y',$list_ts);
	echo '	<td>'. $list_dt. '</td>';

	echo '<td>'.$row["dwd_slip_nbr"].'</td>';
	echo '<td>'.$row["vm_code"].'</td>';
	echo '<td>'.$row["cm_code"].'</td>';
	echo '<td>'.$row["dwd_lab_amount"].'</td>';
	echo '<td>'.$row["dwd_total_amount"].'</td>';
	echo '<td>'.$row["dwd_totalperson"].'</td>';
	echo '<td>'.$row["dwd_matha"].'</td>';
	echo '<td width=300>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=dailychallan&keyvalue='.$row["dwd_tabreckey"].'&formrdfor=VIEW" title="'.$row["dwd_tabreckey"].'">View</a>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=dailychallan&keyvalue='.$row["dwd_tabreckey"].'&formrdfor=EDIT" title="'.$row["dwd_tabreckey"].'">EDIT</a>';

	echo '</td>';
	echo '</tr>';
}
?>
</tbody>
</table>
