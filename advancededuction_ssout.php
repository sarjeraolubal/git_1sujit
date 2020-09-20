<div align="right"><a href="advancededuction_ss.php"><i class="fa fa-arrow-circle-left"></i>&nbsp; Back to Search</a></div>
<table class="table table-striped table-bordered gradienttable">
<thead>
<tr>

	<th>Member ID</th>
	<th>Deduction Date</th>
	<th>Deduction Amount</th>
<th width=300>Action</th>
</tr>
</thead>
<tbody>

<?php
GLOBAL $selecteddata_list;
foreach ($selecteddata_list as $row) {
	echo '<tr>';
	echo '<td>'.$row["gm_badge_no"].'</td>';

	$list_ts = strtotime($row["adduct_date"]);
	$list_dt = date('d-m-Y',$list_ts);
	echo '	<td>'. $list_dt. '</td>';

	echo '<td>'.$row["adduct_amt"].'</td>';
	echo '<td width=300>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=advancededuction&keyvalue='.$row["adduct_tabreckey"].'&formrdfor=VIEW" title="'.$row["adduct_tabreckey"].'">View</a>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=advancededuction&keyvalue='.$row["adduct_tabreckey"].'&formrdfor=EDIT" title="'.$row["adduct_tabreckey"].'">EDIT</a>';

	echo '</td>';
	echo '</tr>';
}
?>
</tbody>
</table>
