<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>KT Central</title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />    
    <link href="font-awesome-4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <link href="ionicons-2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css" />    
    <link href="dist/css/AdminLTE.min.css" rel="stylesheet" type="text/css" />
    <link href="dist/css/skins/_all-skins.min.css" rel="stylesheet" type="text/css" />
    <link href="plugins/iCheck/flat/blue.css" rel="stylesheet" type="text/css" />
    <link href="plugins/morris/morris.css" rel="stylesheet" type="text/css" />
    <link href="plugins/jvectormap/jquery-jvectormap-1.2.2.css" rel="stylesheet" type="text/css" />
    <link href="plugins/datepicker/datepicker3.css" rel="stylesheet" type="text/css" />
    <link href="plugins/daterangepicker/daterangepicker-bs3.css" rel="stylesheet" type="text/css" />
    <link href="plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css" rel="stylesheet" type="text/css" />
    <link href="dist/css/extn.css" rel="stylesheet" type="text/css" />
	
	<script type="text/javascript" src="dist/js/jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="dist/js/jquery-ui-1.8.16.custom.min.js"></script>
	<script type="text/javascript" src="dist/js/common.js"></script>  
	    <script src="dist/tabgrid/jquery.watable.js" type="text/javascript" charset="utf-8"></script>
	    <link rel='stylesheet' href='dist/tabgrid/watable.css'/>
	
  </head>
  <body class="skin-blue sidebar-mini">
    <div class="wrapper">
      
      <header class="main-header">
        <a href="index2.html" class="logo">
          <span class="logo-mini"><b>KTC</b></span>
          <span class="logo-lg"><b>KT Central</b><img src="dist/img/docs.png" size="55px" width="55px" align="right"></span>
        </a>
        <nav class="navbar navbar-static-top" role="navigation">
		          <!-- Sidebar toggle button-->
          <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span class="sr-only">Toggle navigation</span>
          </a>
		  
		  <a style="font-size:20px;color:lightgrey;line-height:2.5em;">&nbsp;&nbsp;
		  Online Knowledge Transfer and Document Sharing</a>
		  
		
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
			<img src="dist/img/c2lbiz.png" height="50px" align="right">

			<!-- Messages: style can be found in dropdown.less-->
              <li class="dropdown messages-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Expert Forum
                  <i class="fa fa-comments-o"></i>
                  <span class="label label-danger">4</span>
                </a>
                <ul class="dropdown-menu" style="width:400px;">
                  <li class="header">4 Threads</li>
                  <li>
                    <!-- inner menu: contains the actual data -->
                    <ul class="menu">
                      <li><!-- start message -->
                        <a href="#">
                          <div class="pull-left">
                            <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="Pic"/>
                          </div>
                          <h4>Vaikunth<small><i class="fa fa-Calender"></i> 20-01-2015</small>
                          </h4>
                          <p>Mind-Bug?</p>
                        </a>
                      </li><!-- end message -->
                      <li>
                        <a href="#">
                          <div class="pull-left">
                            <img src="dist/img/user3-128x128.jpg" class="img-circle" alt="user image"/>
                          </div>
                          <h4>
                            AdminLTE Design Team
                            <small><i class="fa fa-clock-o"></i> 2 hours</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="pull-left">
                            <img src="dist/img/user4-128x128.jpg" class="img-circle" alt="user image"/>
                          </div>
                          <h4>
                            Developers
                            <small><i class="fa fa-clock-o"></i> Today</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="pull-left">
                            <img src="dist/img/user3-128x128.jpg" class="img-circle" alt="user image"/>
                          </div>
                          <h4>
                            Sales Department
                            <small><i class="fa fa-clock-o"></i> Yesterday</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="pull-left">
                            <img src="dist/img/user4-128x128.jpg" class="img-circle" alt="user image"/>
                          </div>
                          <h4>
                            Reviewers
                            <small><i class="fa fa-clock-o"></i> 2 days</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="footer"><a href="#">See All Messages</a></li>
                </ul>
              </li>
              <!-- Notifications: style can be found in dropdown.less -->
			  
           <li class="dropdown user user-menu">
		   
		   
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <img src="dist/img/userprofile/<?php echo $_SESSION['photoname'];?>" class="user-image" alt="User Image"/>
                  <span class="hidden-xs"><?php echo $_SESSION['username'];?></span>
                </a>
                <ul class="dropdown-menu">
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
                      <a href="#" class="btn btn-primary">Close</a>&nbsp;&nbsp;
                    </div>
                    <div class="pull-right">
                      <a href="editprofile.php" class="btn btn-default">Edit Profile</a>
                    </div>					
					<div class="pull-left">
                      <a href="signout.php" class="btn btn-danger">Logout <i class="fa fa-sign-out"></i></a>
                    </div>
					
                  </li>
                </ul>
              </li>			  		  
            </ul>
          </div>
        </nav>
      </header>

