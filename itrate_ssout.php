<div align="right"><a href="itrate_ss.php"><i class="fa fa-arrow-circle-left"></i>&nbsp; Back to Search</a></div>
<table class="table table-striped table-bordered gradienttable">
<thead>
<tr>

	<th>Effective Date</th>
	<th>Slab From</th>
	<th>Slab To</th>
	<th>Tax in Percentage</th>
<th width=300>Action</th>
</tr>
</thead>
<tbody>

<?php
GLOBAL $selecteddata_list;
foreach ($selecteddata_list as $row) {
	echo '<tr>';

	$list_ts = strtotime($row["itr_eff_dt"]);
	$list_dt = date('d-m-Y',$list_ts);
	echo '	<td>'. $list_dt. '</td>';

	echo '<td>'.$row["itr_slab_from"].'</td>';
	echo '<td>'.$row["itr_slab_to"].'</td>';
	echo '<td>'.$row["itr_taxperc"].'</td>';
	echo '<td width=300>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=itrate&keyvalue='.$row["itr_tabreckey"].'&formrdfor=VIEW" title="'.$row["itr_tabreckey"].'">View</a>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=itrate&keyvalue='.$row["itr_tabreckey"].'&formrdfor=EDIT" title="'.$row["itr_tabreckey"].'">EDIT</a>';

	echo '</td>';
	echo '</tr>';
}
?>
</tbody>
</table>
