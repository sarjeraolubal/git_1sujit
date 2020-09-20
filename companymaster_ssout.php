<div align="right"><a href="companymaster_ss.php"><i class="fa fa-arrow-circle-left"></i>&nbsp; Back to Search</a></div>
<table class="table table-striped table-bordered gradienttable">
<thead>
<tr>

	<th>Company Code</th>
	<th>Company Name</th>
<th width=300>Action</th>
</tr>
</thead>
<tbody>

<?php
GLOBAL $selecteddata_list;
foreach ($selecteddata_list as $row) {
	echo '<tr>';
	echo '<td>'.$row["sys_co_code"].'</td>';
	echo '<td>'.$row["sys_co_name"].'</td>';
	echo '<td width=300>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=companymaster&keyvalue='.$row["sys_co_nbr"].'&formrdfor=VIEW" title="'.$row["sys_co_nbr"].'">View</a>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=companymaster&keyvalue='.$row["sys_co_nbr"].'&formrdfor=EDIT" title="'.$row["sys_co_nbr"].'">EDIT</a>';

	echo '</td>';
	echo '</tr>';
}
?>
</tbody>
</table>
