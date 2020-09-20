<div align="right"><a href="main_menu_ss.php"><i class="fa fa-arrow-circle-left"></i>&nbsp; Back to Search</a></div>
<table class="table table-striped table-bordered gradienttable">
<thead>
<tr>

	<th>Main Menu Code</th>
	<th>Main Menu Name</th>
<th width=300>Action</th>
</tr>
</thead>
<tbody>

<?php
GLOBAL $selecteddata_list;
foreach ($selecteddata_list as $row) {
	echo '<tr>';
	echo '<td>'.$row["id_menu"].'</td>';
	echo '<td>'.$row["name_menu"].'</td>';
	echo '<td width=300>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=main_menu&keyvalue='.$row["id_menu"].'&formrdfor=VIEW" title="'.$row["id_menu"].'">View</a>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=main_menu&keyvalue='.$row["id_menu"].'&formrdfor=EDIT" title="'.$row["id_menu"].'">EDIT</a>';

	echo '</td>';
	echo '</tr>';
}
?>
</tbody>
</table>
