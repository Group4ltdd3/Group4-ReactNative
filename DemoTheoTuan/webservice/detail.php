<?php 
    require 'db.php';

    $page = $_GET["page"];
    settype($page,"int");
    $currentPage = 1;
    $from = ($page - 1) * $currentPage;

    $query = "SELECT * FROM sanpham LIMIT $from, $currentPage";
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