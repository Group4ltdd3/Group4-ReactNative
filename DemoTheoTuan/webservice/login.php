<?php 
$json = file_get_contents("php://input");
$obj = json_decode($json,TRUE);

$conn = mysqli_connect("localhost","root","");
    mysqli_select_db($conn,"data");
    mysqli_query($conn,"SET NAMES 'utf8'");

$username = $obj["username"];
$password = $obj["password"];


if ($obj['username'] != "") {
    $result = $mysqli->query("SELECT * FROM account WHERE username='$username'
    and password='$password'");

    if ($result->num_rows==0){
        echo json_encode('Nothing');
    }
    else {
        echo json_encode('ok');
    }
}
else {
    echo json_encode('try again');
}
?>