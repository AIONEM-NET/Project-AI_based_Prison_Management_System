<?php

include "../config.php";


if(!empty($response["message"])) {
    echo
    '<script>
        var username = "police";
        localStorage.setItem("userUID", username);
        localStorage.setItem("userName", username);
        localStorage.setItem("userAccount", username);
        localStorage.setItem("userAccount1", username);
</script>';
    echo '<script> alert("Artificial Intelligence based Prison Management System Dashboard:\n\n---->  '. $response["message"] .'")</script>';
}

if($response["success"] === true) {
    echo '<script> window.location.replace("../dashboard/"); </script>';
}

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <title>Login - Artificial Intelligence based Prison Management System</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--===============================================================================================-->
    <link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="css/util.css">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <!--===============================================================================================-->
</head>
<body>

<div class="limiter" >
    <div class="" style="height: 100%; width: 100%; background-image: url('images/bg1.png'); background-repeat: no-repeat; background-position: center; background-size: cover;">
        <div class="text-center" style="height: 100%; width: 100%; background-color: rgba(0,81,133,0.49)">
            <div class="container-login100" style="background: rgba(0,81,133,0.49)">
                <div class="wrap-login100" style="background-color: rgba(255,255,255,0.56);">
					<span class="login100-form-title" style="color: #0445a9; text-transform: uppercase; font-size: 35px; margin-top: -100px;">
                        <u>Dashboard</u>
                        <br>
                        <br>
						Artificial Intelligence based Prison Management System
					</span>
                <div class="login100-pic js-tilt" data-tilt>
                    <img src="images/face_algorithm.png" alt="IMG">
                </div>

                <form action="" method="post" class="login100-form validate-form">
					<span class="login100-form-title">
						Admin Login
					</span>

                    <div class="wrap-input100 validate-input" data-validate = "Username is required">
                        <input class="input100" type="text" name="username" placeholder="Username" value="<?php echo $username; ?>">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
                    </div>

                    <div class="wrap-input100 validate-input" data-validate = "Password is required">
                        <input class="input100" type="password" name="password" placeholder="Password" value="">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
                    </div>

                    <div class="container-login100-form-btn">
                        <button class="login100-form-btn">
                            Login
                        </button>
                    </div>

                    <div class="text-center p-t-12">
						<span class="txt1" style="color: #FF0000; font-size: 18px;">
							<?php echo $response["message"]; ?>
						</span>
                    </div>

                    <div class="text-center p-t-12 hidden" style="display: none;">
						<span class="txt1">
							Forgot
						</span>
                        <a class="txt2" href="#">
                            Username / Password?
                        </a>
                    </div>

                    <div class="text-center p-t-136 hidden" style="display: none;">
                        <a class="txt2" href="#">
                            Create your Account
                            <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>




<!--===============================================================================================-->
<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
<script src="vendor/bootstrap/js/popper.js"></script>
<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
<script src="vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
<script src="vendor/tilt/tilt.jquery.min.js"></script>
<script >
    $('.js-tilt').tilt({
        scale: 1.1
    })
</script>
<!--===============================================================================================-->
<script src="js/main.js"></script>

</body>
</html>

