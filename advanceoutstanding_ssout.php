<div align="right"><a href="advanceoutstanding_ss.php"><i class="fa fa-arrow-circle-left"></i>&nbsp; Back to Search</a></div>
<table class="table table-striped table-bordered gradienttable">
<thead>
<tr>

	<th>Member ID</th>
	<th>Advance Date</th>
	<th>Total Advance</th>
	<th>Total Recoverd as of date</th>
	<th>Balance as of date</th>
	<th>Number of months to recover</th>
	<th>Amount to recover per month</th>
<th width=300>Action</th>
</tr>
</thead>
<tbody>

<?php
GLOBAL $selecteddata_list;
foreach ($selecteddata_list as $row) {
	echo '<tr>';
	echo '<td>'.$row["gm_badge_no"].'</td>';

	$list_ts = strtotime($row["ao_date"]);
	$list_dt = date('d-m-Y',$list_ts);
	echo '	<td>'. $list_dt. '</td>';

	echo '<td>'.$row["ao_totadv"].'</td>';
	echo '<td>'.$row["ao_totrecoverd"].'</td>';
	echo '<td>'.$row["ao_balance_amt"].'</td>';
	echo '<td>'.$row["ao_recover_month"].'</td>';
	echo '<td>'.$row["ao_recover_amt_pm"].'</td>';
	echo '<td width=300>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=advanceoutstanding&keyvalue='.$row["ao_tabreckey"].'&formrdfor=VIEW" title="'.$row["ao_tabreckey"].'">View</a>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=advanceoutstanding&keyvalue='.$row["ao_tabreckey"].'&formrdfor=EDIT" title="'.$row["ao_tabreckey"].'">EDIT</a>';

	echo '</td>';
	echo '</tr>';
}
?>
</tbody>
</table>
