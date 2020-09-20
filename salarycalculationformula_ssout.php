<div align="right"><a href="salarycalculationformula_ss.php"><i class="fa fa-arrow-circle-left"></i>&nbsp; Back to Search</a></div>
<table class="table table-striped table-bordered gradienttable">
<thead>
<tr>

	<th>Add or Deduct</th>
	<th>Operator</th>
	<th>Form Field or Constant Value</th>
	<th>Constant Value</th>
	<th>Form Field</th>
	<th>Expression</th>
	<th>Effective Date</th>
<th width=300>Action</th>
</tr>
</thead>
<tbody>

<?php
GLOBAL $selecteddata_list;
foreach ($selecteddata_list as $row) {
	echo '<tr>';
	echo '<td>'.$row["sce_catg"].'</td>';
	echo '<td>'.$row["sce_opr"].'</td>';
	echo '<td>'.$row["sce_ff_cons"].'</td>';
	echo '<td>'.$row["sce_cons_val"].'</td>';
	echo '<td>'.$row["sce_ff"].'</td>';
	echo '<td>'.$row["sce_totexpr"].'</td>';

	$list_ts = strtotime($row["sce_eff_dt"]);
	$list_dt = date('d-m-Y',$list_ts);
	echo '	<td>'. $list_dt. '</td>';

	echo '<td width=300>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=salarycalculationformula&keyvalue='.$row["sce_tabreckey"].'&formrdfor=VIEW" title="'.$row["sce_tabreckey"].'">View</a>';

	echo '<a class="textbutton"  href="viewupdatecontroller.php?formnm=salarycalculationformula&keyvalue='.$row["sce_tabreckey"].'&formrdfor=EDIT" title="'.$row["sce_tabreckey"].'">EDIT</a>';

	echo '</td>';
	echo '</tr>';
}
?>
</tbody>
</table>
