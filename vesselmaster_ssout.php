<div align="right"><a href="vesselmaster_ss.php"><i class="fa fa-arrow-circle-left"></i>&nbsp; Back to Search</a></div>
<table class="table table-striped table-bordered gradienttable">
<thead>
<tr>

	<th>Vessel Code</th>
	<th>Vessel Name</th>
<th width=300>Action</th>
</tr>
</thead>
<tbody>

<?php
GLOBAL $selecteddata_list;
foreach ($selecteddata_list as $row) {
	echo '<tr>';
	echo '<td>'.$row["vm_code"].'</td>';
	echo '<td>'.$row["vm_name"].'</td>';
	echo '<td width=300>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=vesselmaster&keyvalue='.$row["vm_tabreckey"].'&formrdfor=VIEW" title="'.$row["vm_tabreckey"].'">View</a>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=vesselmaster&keyvalue='.$row["vm_tabreckey"].'&formrdfor=EDIT" title="'.$row["vm_tabreckey"].'">EDIT</a>';

	echo '</td>';
	echo '</tr>';
}
?>
</tbody>
</table>
