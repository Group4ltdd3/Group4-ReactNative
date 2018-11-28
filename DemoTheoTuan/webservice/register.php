<?php 

$json = file_get_contents("php://input");
$obj = json_decode($json,TRUE);
$username = $obj["username"];
$password = md5($obj["password"]);
$email = $obj["email"];

$conn = mysqli_connect("localhost","root","");
    mysqli_select_db($conn,"data");
    mysqli_query($conn,"SET NAMES 'utf8'");


    $query = "INSERT INTO account VALUES(
        null, '$username', '$password', '$email'
    )";
    $data = mysqli_query($conn, $query);
?>