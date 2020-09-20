<?php
	$openfilename = $_REQUEST['openfilename'];
	$recref = $_REQUEST['recref'];

	$error_message = '';
	require 'dist/lib/commonfunc.php';
	validatepage();

	require "dist/lib/dbconnection.php";

	$pdo = DBconnectionUtil::connect();
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	$FileExtn = strtolower(pathinfo($openfilename,PATHINFO_EXTENSION));
	
	$valid = true;
	try{
		$sql = "SELECT * FROM docs_m WHERE doc_recid = ?";
		$q = $pdo->prepare($sql);
		$q->execute(array($recref));
		$doc_ref = $q->fetch(PDO::FETCH_ASSOC);
		
		$sql = "SELECT * FROM docs_filemime WHERE file_extn = ?";
		$q = $pdo->prepare($sql);
		$q->execute(array($FileExtn));
		$f_mime = $q->fetch(PDO::FETCH_ASSOC);		
	}
	catch (PDOException $sql_err) {
		$error_message = 'Oops!! some technical error, please try after sometime!!';
		error_log($sql_err->getMessage());	
		$valid = false;
	}
	DBconnectionUtil::disconnect();		

	
	if (!empty($openfilename) && $valid){

		$target_path="content/". strtolower($doc_ref['doc_type'])."/".strtolower($doc_ref['doc_catg'])."/".strtolower($doc_ref['doc_subcatg']);
		
		if(!empty($doc_ref['doc_product'] )) {$target_path .= "/".strtolower($doc_ref['doc_product']);}
		$target_path .= "/".strtolower($doc_ref['doc_for']).'/';

		$filewithfullpath = $target_path.$openfilename;
		/*
		if ($FileExtn=="pdf")
		{
			header('Content-type:application/pdf');
			header('Content-Disposition:inline;filename="'.$openfilename.'"');
			header('Content-Transfer-Encoding:binary');
			header('Accept-Ranges:bytes');
			@readfile($filewithfullpath);
		}
		elseif($FileExtn=="png" || $FileExtn=="gif" || $FileExtn=="jpeg" || $FileExtn=="bmp"){echo '<img src="'.$filewithfullpath.'">';}
		else{		
			header('Content-Type: application/'.$f_mime['mime_type'].'"');
			header('Content-Disposition: attachment;filename="'.$openfilename.'"');
			header("Cache-Control: max-age=0");
		}
		header('Expires: 0');
    	header('Pragma: public');
    	header('Cache-Control: must-revalidate, post-check=0, pre-check=0, max-age=0 ');
		header("Content-disposition: attachment; filename={$filewithfullpath}"); //Tell the filename to the browser
		header('Content-Transfer-Encoding:binary');
		header('Content-type: application/octet-stream'); //Stream as a binary file! So it would force browser to download		
		readfile($file_path); //Read and stream the file	*/

		$fullPath = $filewithfullpath;

		if ($fd = fopen ($fullPath, "r")) {
			$fsize = filesize($fullPath);
			$path_parts = pathinfo($fullPath);
			$ext = strtolower($path_parts["extension"]);
			switch ($ext) {
				case "pdf":
				header("Content-type: application/pdf");
				header("Content-Disposition: attachment; filename=\"".$path_parts["basename"]."\""); // use 'attachment' to force a file download
				break;
				// add more headers for other content types here
				default;
				header("Content-type: application/octet-stream");
				header("Content-Disposition: filename=\"".$path_parts["basename"]."\"");
				break;
			}
			header("Content-length: $fsize");
			header("Cache-control: private"); //use this to open files directly
			while(!feof($fd)) {
				$buffer = fread($fd, 2048);
				echo $buffer;
			}
		}
		fclose ($fd);	
	}
	else{echo $error_message;}
?>

<br>
	
	<a href="javascript:window.close();" ><img src="dist/img/close.png" width="100px" height="40px"></a>
<br>