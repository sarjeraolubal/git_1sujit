<div align="right"><a href="rolemaster_ss.php"><i class="fa fa-arrow-circle-left"></i>&nbsp; Back to Search</a></div>
<table class="table table-striped table-bordered gradienttable">
<thead>
<tr>

	<th>Role Code</th>
	<th>Role Name</th>
<th width=300>Action</th>
</tr>
</thead>
<tbody>

<?php
GLOBAL $selecteddata_list;
foreach ($selecteddata_list as $row) {
	echo '<tr>';
	echo '<td>'.$row["role"].'</td>';
	echo '<td>'.$row["description"].'</td>';
	echo '<td width=300>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=rolemaster&keyvalue='.$row["id"].'&formrdfor=VIEW" title="'.$row["id"].'">View</a>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=rolemaster&keyvalue='.$row["id"].'&formrdfor=EDIT" title="'.$row["id"].'">EDIT</a>';

	echo '</td>';
	echo '</tr>';
}
?>
</tbody>
</table>
