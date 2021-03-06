<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>StarDev - ERP for Every Business</title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />    
    <link href="font-awesome-4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <link href="ionicons-2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css" />    
    <link href="dist/css/AdminLTE.min.css" rel="stylesheet" type="text/css" />
    <link href="dist/css/skins/_all-skins.min.css" rel="stylesheet" type="text/css" />
    <link href="plugins/iCheck/flat/blue.css" rel="stylesheet" type="text/css" />
    <link href="plugins/morris/morris.css" rel="stylesheet" type="text/css" />
    <link href="plugins/jvectormap/jquery-jvectormap-1.2.2.css" rel="stylesheet" type="text/css" />

    <link href="dist/css/extn.css" rel="stylesheet" type="text/css" />
	
	<script type="text/javascript" src="dist/js/jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="dist/js/jquery-ui-1.8.16.custom.min.js"></script>
	<script type="text/javascript" src="dist/js/common.js"></script>  
	    <script src="dist/tabgrid/jquery.watable.js" type="text/javascript" charset="utf-8"></script>
	    <link rel='stylesheet' href='dist/tabgrid/watable.css'/>

    <link href="plugins/datepicker/datepicker3.css" rel="stylesheet" type="text/css" />
	<link rel="shortcut icon" type="image/ico" href="dist/img/ewarranty.ico"/>		
	
	<script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>  
	<script type="text/javascript" src="plugins/datepicker/bootstrap-datepicker.js"></script> 

  </head>
  <body class="skin-blue sidebar-mini">
    <div class="wrapper">
      
      <header class="main-header">
        <a class="logo">
          <span class="logo-mini">*Dev</span>
           <span class="logo-lg"><img src="dist/img/smestarlogo.png" width="100px" height="50px" align="left">StarDev</span>
        </a>
        <nav class="navbar navbar-static-top" role="navigation">
		          <!-- Sidebar toggle button-->
          <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span class="sr-only">Menus</span>
          </a>
		  
		  <a style="font-size:20px;color:lightgrey;line-height:2.5em;">ERP for Every Business</a>
		  
		
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
			<!--<img src="dist/img/userprofile/companylogo.png" height="50px" width="60px" align="right">-->

			<!-- Messages: style can be found in dropdown.less-->
              <li class="dropdown messages-menu">
				
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Guide Line
                  <i class="fa fa-comments-o"></i>              
                </a>
                <ul class="dropdown-menu" style="width:400px;">
                  <li class="header">Help Line</li>
                  <li>
                    <!-- inner menu: contains the actual data -->
                    <ul class="menu">
                      <li><!-- start message -->
                        <a href="unavailable.php">
                          <div class="pull-left">
                            <img src="dist/img/technical_blog.png" class="img-circle" alt="Pic"/>
                          </div>
                          <h4>Technical Errors<small><i class="fa fa-calendar"></i>&nbsp;<?php $ktcentraldate = date_create()->format('Y-m-d H:i:s'); echo $ktcentraldate; ?></small></h4>
                          <p>Deployment, Inputs, Views, Search, Product Framework issues</p>
                        </a>
                      </li><!-- end message -->
					  
                      <li>
                        <a href="unavailable.php">
                          <div class="pull-left">
                            <img src="dist/img/configuration_blog.png" class="img-circle" alt="user image"/>
                          </div>
                          <h4>Errors due to Configuration<small><i class="fa fa-calendar"></i>&nbsp;<?php echo $ktcentraldate; ?></small></h4>
                          <p>Product, Master Data, User Defined Values etc</p>
                        </a>
                      </li>
                      <li>
                        <a href="unavailable.php">
                          <div class="pull-left">
                            <img src="dist/img/errorface.png" class="img-circle" alt="user image"/>
                          </div>
                          <h4>User Guide<small><i class="fa fa-clock-o"></i></small>
                          </h4>
                          <p>Operational, Deployment.</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="footer"><a href="#">See All Exceptions</a></li>
                </ul>
              </li>
              <!-- Notifications: style can be found in dropdown.less -->
			  
           <li class="dropdown user user-menu">
		   
		   
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <img src="dist/img/userprofile/<?php echo $_SESSION['photoname'];?>" class="user-image" alt="User Image"/>
                  <span class="hidden-xs"><?php echo $_SESSION['username'];?></span>
                </a>
                <ul class="dropdown-menu"  style="border:2px solid #888888">
                  <li class="user-header">
                    <img src="dist/img/userprofile/<?php echo $_SESSION['photoname'];?>" class="img-circle" alt="User Image" />
                    <p>
                      <?php echo $_SESSION['username'];?>
                    </p>
                  </li>
                  <li class="user-body">
						<p>Contact Number: <strong><?php echo $_SESSION['usermobile'];?></strong><br>
							Joined since: <strong><?php echo $_SESSION['regduser_signupdt'];?></strong><br>
							Last Login: <strong><?php echo $_SESSION['regduser_lastsignin'];?></strong>
						</p>
                  </li>
				  
                  <!-- Menu Footer-->
                  <li class="user-footer">
                    <div class="pull-left">
                      <a href="#" class="btn btn-success">Edit Profile</a>
                    </div>					
					<div class="pull-right">
                      <a href="signout.php" class="btn btn-danger">Logout <i class="fa fa-sign-out"></i></a>
                    </div>
					
                  </li>
                </ul>
              </li>			  		  
            </ul>
          </div>
        </nav>
      </header>

