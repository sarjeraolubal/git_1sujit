<div align="right"><a href="worktypemaster_ss.php"><i class="fa fa-arrow-circle-left"></i>&nbsp; Back to Search</a></div>
<table class="table table-striped table-bordered gradienttable">
<thead>
<tr>

	<th>Code</th>
	<th>Name</th>
	<th>Rate</th>
<th width=300>Action</th>
</tr>
</thead>
<tbody>

<?php
GLOBAL $selecteddata_list;
foreach ($selecteddata_list as $row) {
	echo '<tr>';
	echo '<td>'.$row["wtm_code"].'</td>';
	echo '<td>'.$row["wtm_name"].'</td>';
	echo '<td>'.$row["wtm_rate"].'</td>';
	echo '<td width=300>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=worktypemaster&keyvalue='.$row["wtm_tabreckey"].'&formrdfor=VIEW" title="'.$row["wtm_tabreckey"].'">View</a>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=worktypemaster&keyvalue='.$row["wtm_tabreckey"].'&formrdfor=EDIT" title="'.$row["wtm_tabreckey"].'">EDIT</a>';

	echo '</td>';
	echo '</tr>';
}
?>
</tbody>
</table>
