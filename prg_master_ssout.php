<div align="right"><a href="prg_master_ss.php"><i class="fa fa-arrow-circle-left"></i>&nbsp; Back to Search</a></div>
<table class="table table-striped table-bordered gradienttable">
<thead>
<tr>

	<th>Program Code</th>
	<th>Program Name</th>
<th width=300>Action</th>
</tr>
</thead>
<tbody>

<?php
GLOBAL $selecteddata_list;
foreach ($selecteddata_list as $row) {
	echo '<tr>';
	echo '<td>'.$row["pg_nm"].'</td>';
	echo '<td>'.$row["prg_file"].'</td>';
	echo '<td width=300>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=prg_master&keyvalue='.$row["pg_seq"].'&formrdfor=VIEW" title="'.$row["pg_seq"].'">View</a>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=prg_master&keyvalue='.$row["pg_seq"].'&formrdfor=EDIT" title="'.$row["pg_seq"].'">EDIT</a>';

	echo '</td>';
	echo '</tr>';
}
?>
</tbody>
</table>
