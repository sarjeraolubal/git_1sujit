<div align="right"><a href="casuallabourratemaster_ss.php"><i class="fa fa-arrow-circle-left"></i>&nbsp; Back to Search</a></div>
<table class="table table-striped table-bordered gradienttable">
<thead>
<tr>

	<th>Code</th>
	<th>Description</th>
	<th>Rate</th>
<th width=300>Action</th>
</tr>
</thead>
<tbody>

<?php
GLOBAL $selecteddata_list;
foreach ($selecteddata_list as $row) {
	echo '<tr>';
	echo '<td>'.$row["clrm_code"].'</td>';
	echo '<td>'.$row["clrm_desc"].'</td>';
	echo '<td>'.$row["clrm_rate"].'</td>';
	echo '<td width=300>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=casuallabourratemaster&keyvalue='.$row["clrm_tabreckey"].'&formrdfor=VIEW" title="'.$row["clrm_tabreckey"].'">View</a>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=casuallabourratemaster&keyvalue='.$row["clrm_tabreckey"].'&formrdfor=EDIT" title="'.$row["clrm_tabreckey"].'">EDIT</a>';

	echo '</td>';
	echo '</tr>';
}
?>
</tbody>
</table>
