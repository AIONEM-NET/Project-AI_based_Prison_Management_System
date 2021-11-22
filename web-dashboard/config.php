<?php

$demo_website = "http://192.168.1.103/AIONEM.NET_Job/NPC_2021_Website_Monitoring_Alerting_App/demo-website.com/";


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Access-Control-Allow-Origin, Accept");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Methods: POST");


if(!isset($_POST)) {
    if (file_get_contents('php://input') != null) {
        foreach (json_decode(file_get_contents('php://input')) as $key => $value) {
            $_POST[$key] = urldecode($value);
        }
    }
}


$response = array();
$response["code"] = "200";
$response["success"] = false;
$response["message"] = "";


$serverName = "127.0.0.1";
$serverUsername = "root";
$serverPassword = "";
$serverDatabase = "aionem.net.job_cstraiprisonmanagementsystem";

$connection = new mysqli($serverName, $serverUsername, $serverPassword, $serverDatabase);


$username = !empty($_POST['username']) ? ($_POST['username']) : (!empty($_GET['username']) ? $_GET['username'] : (!empty($_SERVER['PHP_AUTH_USER']) ? $_SERVER['PHP_AUTH_USER'] : ""));
$password = !empty($_POST['password']) ? ($_POST['password']) : (!empty($_GET['password']) ? $_GET['password'] : (!empty($_SERVER['PHP_AUTH_PW']) ? $_SERVER['PHP_AUTH_PW'] : ""));
$token = !empty($_POST['token']) ? ($_POST['token']) : (!empty($_GET['token']) ? $_GET['token'] : "");

$password_hashed = password_hash($password, PASSWORD_DEFAULT);

if(!empty($username)) {

$sql = " SELECT * FROM `users` WHERE username='$username' ";

$result = $connection->query($sql);

if ($result != null && $result->num_rows > 0) {
    while ($rowUserLoad = $result->fetch_assoc()) {

        if(password_verify($password, $rowUserLoad["password"])) {

            $response["success"] = true;
            $response["message"] = "Login successful";

            $response["user"] = array();
            $response["user"]["id"] = $rowUserLoad["user_id"];
            $response["user"]["username"] = $rowUserLoad["username"];
            $response["user"]["token"] = $rowUserLoad["token"];

        }else {
            $response["message"] = "Invalid Credentials";
            http_response_code_message(505, $response["message"]);
        }

    }
}else {
    $response["message"] = "Invalid Credentials";
    http_response_code_message(505, $response["message"]);
}
}



function http_response_code_message($code = NULL, $message="") {
    if ($code !== NULL) {
        switch ($code) {
            case 100: $text = 'Continue';
                break;
            case 101: $text = 'Switching Protocols';
                break;
            case 200: $text = 'OK';
                break;
            case 201: $text = 'Created';
                break;
            case 202: $text = 'Accepted';
                break;
            case 203: $text = 'Non-Authoritative Information';
                break;
            case 204: $text = 'No Content';
                break;
            case 205: $text = 'Reset Content';
                break;
            case 206: $text = 'Partial Content';
                break;
            case 300: $text = 'Multiple Choices';
                break;
            case 301: $text = 'Moved Permanently';
                break;
            case 302: $text = 'Moved Temporarily';
                break;
            case 303: $text = 'See Other';
                break;
            case 304: $text = 'Not Modified';
                break;
            case 305: $text = 'Use Proxy';
                break;
            case 400: $text = 'Bad Request';
                break;
            case 401: $text = 'Unauthorized';
                break;
            case 402: $text = 'Payment Required';
                break;
            case 403: $text = 'Forbidden';
                break;
            case 404: $text = 'Not Found';
                break;
            case 405: $text = 'Method Not Allowed';
                break;
            case 406: $text = 'Not Acceptable';
                break;
            case 407: $text = 'Proxy Authentication Required';
                break;
            case 408: $text = 'Request Time-out';
                break;
            case 409: $text = 'Conflict';
                break;
            case 410: $text = 'Gone';
                break;
            case 411: $text = 'Length Required';
                break;
            case 412: $text = 'Precondition Failed';
                break;
            case 413: $text = 'Request Entity Too Large';
                break;
            case 414: $text = 'Request-URI Too Large';
                break;
            case 415: $text = 'Unsupported Media Type';
                break;
            case 500: $text = 'Internal Server Error';
                break;
            case 501: $text = 'Not Implemented';
                break;
            case 502: $text = 'Bad Gateway';
                break;
            case 503: $text = 'Service Unavailable';
                break;
            case 504: $text = 'Gateway Time-out';
                break;
            case 505: $text = 'HTTP Version not supported';
                break;
            default:
                exit('Unknown http status code "' . htmlentities($code) . '"');
                break;
        }
        $protocol = (isset($_SERVER['SERVER_PROTOCOL']) ? $_SERVER['SERVER_PROTOCOL'] : 'HTTP/1.0');
        header($protocol . ' ' . $code . ' ' . (!empty($message) ? $message : $text));
        $GLOBALS['http_response_code'] = $code;
    } else {
        $code = (isset($GLOBALS['http_response_code']) ? $GLOBALS['http_response_code'] : 200);
    }
    // header('Content-type: application/json');
    // echo json_encode($response);
    http_response_code($code);
    return $code;
}

?>