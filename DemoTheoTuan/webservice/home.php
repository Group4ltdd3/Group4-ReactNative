<?php 
    require 'db.php';

    $query = "SELECT * FROM sanpham";
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

    echo json_encode($mang);
?>