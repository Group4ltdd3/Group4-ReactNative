<?php 
    require 'db.php';

    $query = "SELECT * FROM sanpham ORDER BY RAND()";
    $data = mysqli_query($conn, $query);

    $mang = array();
    while($row = mysqli_fetch_array($data)) {
        array_push($mang,new data(
            $row["id"],
            $row["img"],
            $row["des"],
            $row["title"],
            $row["price"]
        ));
    }
    sleep(3);
    echo json_encode($mang);
?>