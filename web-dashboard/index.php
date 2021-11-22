<?php

include "config.php";

set_error_handler(function($errno, $errstr, $errfile, $errline) {
    if(0 === error_reporting()) return false;
    if(false) {
        throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
    }
});


$down = 1;
try {
    if ($down) {
        $down = $down["down"];
    }
}catch (Error $e) {

}

try {
    // echo "Warning error";
    include ("external_file.php");
}catch (Error $e) {

}

try {
    $a="Defined error";
    // echo "Notice error";
    echo $b;
}catch (Error $e) {

}

try {
    function sub(){
        $sub = 6 - 1;
        echo "The sub= " . $sub;
    }
    div();
}catch (Error $e) {

}

if(empty($username)) {
    header("Location: " . "login/");
}

?>