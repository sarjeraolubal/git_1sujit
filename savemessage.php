<?php
/*-------------------------------------------------------
Project: Banking
Company: Clifford Software
Auto generated code using PHP RAD tool by Vaikunth Raul 
-------------------------------------------------------*/
require "dist/lib/commonfunc.php";
require "dist/lib/dataextrfunc.php";
validatepage();
?>

<?php include "dist/inc/loginheader.php";
include "dist/inc/leftsidemenu.php";
?>
<div class="content-wrapper">
<section class="content">
<div class="row">
<section class="col-lg-13">
<section class="content-header">
<p><img src="dist/img/success.png">&nbsp;Entered information saved successfully !!&nbsp;&nbsp;<img src="dist/img/successface.png" height="50px" width="50px"><p>
<p>Reference number to note if required : <strong><?php echo $_SESSION["LASTSERIAL"];?></strong><p>

	<a id="btn-login" class="btn btn-default" href="<?php echo $_SESSION["ENTRYPAGE"];?>" >New&nbsp;<i class="fa fa-pencil"></i></a>
	<a id="btn-login" class="btn btn-success" href="<?php echo $_SESSION["SEARCHPAGE"];?>">Search&nbsp;<i class="fa fa-search"></i></a>

</section>
</section>
</div>
<div class="clearfix"></div><br>
</section>
</div>
<?php include "dist/inc/footercontent.php";?>
