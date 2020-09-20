<div align="right"><a href="salaryratemaster_ss.php"><i class="fa fa-arrow-circle-left"></i>&nbsp; Back to Search</a></div>
<table class="table table-striped table-bordered gradienttable">
<thead>
<tr>

	<th>Effective Date</th>
	<th>DA in Percentage</th>
	<th>HRA in Percentage</th>
	<th>PF Employee Contribution</th>
	<th>PF Org Contribution</th>
	<th>ESIC Employee Contribution</th>
	<th>ESIC Org Contribution</th>
<th width=300>Action</th>
</tr>
</thead>
<tbody>

<?php
GLOBAL $selecteddata_list;
foreach ($selecteddata_list as $row) {
	echo '<tr>';

	$list_ts = strtotime($row["srm_eff_dt"]);
	$list_dt = date('d-m-Y',$list_ts);
	echo '	<td>'. $list_dt. '</td>';

	echo '<td>'.$row["srm_da"].'</td>';
	echo '<td>'.$row["srm_hra"].'</td>';
	echo '<td>'.$row["srm_pf_emp"].'</td>';
	echo '<td>'.$row["srm_pf_org"].'</td>';
	echo '<td>'.$row["srm_esic_emp"].'</td>';
	echo '<td>'.$row["srm_esic_org"].'</td>';
	echo '<td width=300>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=salaryratemaster&keyvalue='.$row["srm_tabreckey"].'&formrdfor=VIEW" title="'.$row["srm_tabreckey"].'">View</a>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=salaryratemaster&keyvalue='.$row["srm_tabreckey"].'&formrdfor=EDIT" title="'.$row["srm_tabreckey"].'">EDIT</a>';

	echo '</td>';
	echo '</tr>';
}
?>
</tbody>
</table>
