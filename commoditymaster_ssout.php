<div align="right"><a href="commoditymaster_ss.php"><i class="fa fa-arrow-circle-left"></i>&nbsp; Back to Search</a></div>
<table class="table table-striped table-bordered gradienttable">
<thead>
<tr>

	<th>Commodity Code</th>
	<th>Commodity Name</th>
	<th>Commodity Rate</th>
<th width=300>Action</th>
</tr>
</thead>
<tbody>

<?php
GLOBAL $selecteddata_list;
foreach ($selecteddata_list as $row) {
	echo '<tr>';
	echo '<td>'.$row["cm_code"].'</td>';
	echo '<td>'.$row["cm_name"].'</td>';
	echo '<td>'.$row["cm_price"].'</td>';
	echo '<td width=300>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=commoditymaster&keyvalue='.$row["cm_tabreckey"].'&formrdfor=VIEW" title="'.$row["cm_tabreckey"].'">View</a>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=commoditymaster&keyvalue='.$row["cm_tabreckey"].'&formrdfor=EDIT" title="'.$row["cm_tabreckey"].'">EDIT</a>';

	echo '</td>';
	echo '</tr>';
}
?>
</tbody>
</table>
