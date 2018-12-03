<?php 
$conn = mysqli_connect("localhost","root","");
mysqli_select_db($conn,"data");
mysqli_query($conn,"SET NAMES 'utf8'");

// check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$json = file_get_contents("php://input");
$obj = json_decode($json,TRUE);

$username = $obj['username'];
$password = md5($obj['password']);

    $sql = "SELECT * FROM account WHERE username='$username' AND password ='$password'";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_array($result);
    if ($row['username'] != "") {
        if ($row['username'] == $username && $row['password'] == $password){
            echo json_encode("true");
        }
        else {
            echo json_encode("false");
        }
    }
    else {
        echo json_encode('try again');
    }

?>