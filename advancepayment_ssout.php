<div align="right"><a href="advancepayment_ss.php"><i class="fa fa-arrow-circle-left"></i>&nbsp; Back to Search</a></div>
<table class="table table-striped table-bordered gradienttable">
<thead>
<tr>

	<th>Member ID</th>
	<th>Advance Date</th>
	<th>Slip Number</th>
	<th>Amount</th>
<th width=300>Action</th>
</tr>
</thead>
<tbody>

<?php
GLOBAL $selecteddata_list;
foreach ($selecteddata_list as $row) {
	echo '<tr>';
	echo '<td>'.$row["gm_badge_no"].'</td>';

	$list_ts = strtotime($row["am_advdate"]);
	$list_dt = date('d-m-Y',$list_ts);
	echo '	<td>'. $list_dt. '</td>';

	echo '<td>'.$row["am_slip_nbr"].'</td>';
	echo '<td>'.$row["am_amount"].'</td>';
	echo '<td width=300>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=advancepayment&keyvalue='.$row["am_tabreckey"].'&formrdfor=VIEW" title="'.$row["am_tabreckey"].'">View</a>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=advancepayment&keyvalue='.$row["am_tabreckey"].'&formrdfor=EDIT" title="'.$row["am_tabreckey"].'">EDIT</a>';

	echo '</td>';
	echo '</tr>';
}
?>
</tbody>
</table>
