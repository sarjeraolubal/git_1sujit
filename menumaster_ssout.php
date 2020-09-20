<div align="right"><a href="menumaster_ss.php"><i class="fa fa-arrow-circle-left"></i>&nbsp; Back to Search</a></div>
<table class="table table-striped table-bordered gradienttable">
<thead>
<tr>

	<th>Role Code</th>
    <th>Role Name</th>
 
	<th>Main Menu Code</th>
    <th>Main Menu Description</th>
 
	<th>Sub Menu Code</th>
    <th>Sub Menu Description</th>
 
<th width=200>Action</th>
</tr>
</thead>
<tbody>

<?php
GLOBAL $selecteddata_list;
foreach ($selecteddata_list as $row) {
	echo '<tr>';
	echo '<td>'.$row["role"].'</td>';
    echo '<td>'.$row["role_name"].'</td>';
 
	echo '<td>'.$row["m_option"].'</td>';
    echo '<td>'.$row["main_manu_name"].'</td>';
   
	echo '<td>'.$row["sub_m_option"].'</td>';
    echo '<td>'.$row["sub_menu_name"].'</td>';

	
	echo '<td width=200>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=menumaster&keyvalue='.$row["id"].'&formrdfor=VIEW" title="'.$row["id"].'">View</a>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=menumaster&keyvalue='.$row["id"].'&formrdfor=EDIT" title="'.$row["id"].'">EDIT</a>';

	echo '</td>';
	echo '</tr>';
}
?>
</tbody>
</table>
