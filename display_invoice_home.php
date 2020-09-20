<?php
include_once("config.php");

$stmt = $mysqli->prepare("SELECT * FROM invoice ORDER BY id DESC");
$stmt->execute(); 
?>

<html>
<head>	
	<title>Homepage</title>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">	
	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<!-- Latest compiled JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.4/css/jquery.dataTables.css">
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>   
    <script type="text/javascript" src="https://cdn.datatables.net/1.10.4/js/jquery.dataTables.min.js"></script>
    <link rel="stylesheet" href="style.css">
    <script type="text/javascript">
		$(document).ready(function() 
		{
			$('#book-table').DataTable();
		});
	</script>
</head>

<body>
<div class="container">
	<div class="row_fluid">
		<a class="btn btn-success" href="add.php">Add New Data</a><br/><br/>

		<table  id="book-table" class="table table-bordered  datatables">
			<thead>
                <tr>
                  	<th></th>                  
                  	<th>Company Name</th>
					<th>Full Name</th>
					<th>Date of Birth</th>
					<th>Designation</th>
					<th>Nationality</th>		
					<th>Update</th>            
                </tr>
              </thead>
              <tbody>
              	<?php
              	 $i=1; 	
			while($row=$stmt->fetch(PDO::FETCH_ASSOC)) { 		
				echo "<tr>";
				echo "<td>".$i++."</td>";
				echo "<td>".$row['company_name']."</td>";
				echo "<td>".$row['name']."</td>";
				echo "<td>".$row['dob']."</td>";
				echo "<td>".$row['designation']."</td>";
				echo "<td>".$row['nationality']."</td>";	
				echo "<td><a class='btn btn-success' href=\"edit_invoice.php?id=$row[id]\">Edit</a> | <a class='btn btn-danger'  href=\"delete_invoice.php?id=$row[id]\" onClick=\"return confirm('Are you sure you want to delete?')\">Delete</a> | <a class='btn btn-primary' href=\"ANNEXURE_B0.php?id=$row[id]\">PDF</a></td>";		
			}
			?>
              </tbody>			
		</table>
	</div>
	
</div>

</body>
</html>
