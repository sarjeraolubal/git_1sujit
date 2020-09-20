<div align="right"><a href="applicationuserregistration_ss.php"><i class="fa fa-arrow-circle-left"></i>&nbsp; Back to Search</a></div>
<table class="table table-striped table-bordered gradienttable">
<thead>
<tr>

	<th>User ID</th>
	<th>Password</th>
	<th>Registration Date</th>
	<th>Lock Status</th>
	<th>Status</th>
	<th>Last Access Date</th>
	<th>Expiry Date</th>
<th width=300>Action</th>
</tr>
</thead>
<tbody>

<?php
GLOBAL $selecteddata_list;
foreach ($selecteddata_list as $row) {
	echo '<tr>';
	echo '<td>'.$row["up_uid"].'</td>';
	echo '<td>'.$row["up_ak"].'</td>';

	$list_ts = strtotime($row["up_regdate"]);
	$list_dt = date('d-m-Y',$list_ts);
	echo '	<td>'. $list_dt. '</td>';

	echo '<td>'.$row["up_lockstatus"].'</td>';
	echo '<td>'.$row["up_status"].'</td>';

	$list_ts = strtotime($row["up_lastaccessdate"]);
	$list_dt = date('d-m-Y',$list_ts);
	echo '	<td>'. $list_dt. '</td>';


	$list_ts = strtotime($row["up_expdate"]);
	$list_dt = date('d-m-Y',$list_ts);
	echo '	<td>'. $list_dt. '</td>';

	echo '<td width=300>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=applicationuserregistration&keyvalue='.$row["up_tabreckey"].'&formrdfor=VIEW" title="'.$row["up_tabreckey"].'">View</a>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=applicationuserregistration&keyvalue='.$row["up_tabreckey"].'&formrdfor=EDIT" title="'.$row["up_tabreckey"].'">EDIT</a>';

	echo '</td>';
	echo '</tr>';
}
?>
</tbody>
</table>
