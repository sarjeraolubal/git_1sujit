<div align="right"><a href="submenumaster_ss.php"><i class="fa fa-arrow-circle-left"></i>&nbsp; Back to Search</a></div>
<table class="table table-striped table-bordered gradienttable">
<thead>
<tr>

	<th>Sub  Menu Code</th>
	<th>Sub  Menu Name</th>
	<th>sub Menu Sequence</th>
	<th>Main Menu COde</th>
<th width=300>Action</th>
</tr>
</thead>
<tbody>

<?php
GLOBAL $selecteddata_list;
foreach ($selecteddata_list as $row) {
	echo '<tr>';
	echo '<td>'.$row["id_sub_menu"].'</td>';
	
	echo '<td>'.$row["name_sub_menu"].'</td>';
    echo '<td>'.$row["sub_menu_sequence"].'</td>';
    echo '<td>'.$row["id_menu"].'</td>';
	echo '<td width=400>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=submenumaster&keyvalue='.$row["id_sub_menu"].'&formrdfor=VIEW" title="'.$row["id_sub_menu"].'">View</a>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=submenumaster&keyvalue='.$row["id_sub_menu"].'&formrdfor=EDIT" title="'.$row["id_sub_menu"].'">EDIT</a>';

	echo '</td>';
	echo '</tr>';
}
?>
</tbody>
</table>
