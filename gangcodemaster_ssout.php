<div align="right"><a href="gangcodemaster_ss.php"><i class="fa fa-arrow-circle-left"></i>&nbsp; Back to Search</a></div>
<table class="table table-striped table-bordered gradienttable">
<thead>
<tr>

	<th>Gang Code</th>
	<th>Badge Number</th>
	<th>Member Category</th>
	<th>Member Name</th>
<th width=300>Action</th>
</tr>
</thead>
<tbody>

<?php
GLOBAL $selecteddata_list;
foreach ($selecteddata_list as $row) {
	echo '<tr>';
	echo '<td>'.$row["gm_gang_code"].'</td>';
	echo '<td>'.$row["gm_badge_no"].'</td>';
	echo '<td>'.$row["gm_memcatg"].'</td>';
	echo '<td>'.$row["gm_name"].'</td>';
	echo '<td width=300>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=gangcodemaster&keyvalue='.$row["gm_tabreckey"].'&formrdfor=VIEW" title="'.$row["gm_tabreckey"].'">View</a>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=gangcodemaster&keyvalue='.$row["gm_tabreckey"].'&formrdfor=EDIT" title="'.$row["gm_tabreckey"].'">EDIT</a>';

	echo '</td>';
	echo '</tr>';
}
?>
</tbody>
</table>
