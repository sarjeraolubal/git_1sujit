<div align="right"><a href="salarymetadata_ss.php"><i class="fa fa-arrow-circle-left"></i>&nbsp; Back to Search</a></div>
<table class="table table-striped table-bordered gradienttable">
<thead>
<tr>

	<th>Field Name</th>
	<th>Field Description</th>
<th width=300>Action</th>
</tr>
</thead>
<tbody>

<?php
GLOBAL $selecteddata_list;
foreach ($selecteddata_list as $row) {
	echo '<tr>';
	echo '<td>'.$row["smd_fld_nm"].'</td>';
	echo '<td>'.$row["smd_fld_desc"].'</td>';
	echo '<td width=300>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=salarymetadata&keyvalue='.$row["smd_tabreckey"].'&formrdfor=VIEW" title="'.$row["smd_tabreckey"].'">View</a>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=salarymetadata&keyvalue='.$row["smd_tabreckey"].'&formrdfor=EDIT" title="'.$row["smd_tabreckey"].'">EDIT</a>';

	echo '</td>';
	echo '</tr>';
}
?>
</tbody>
</table>
