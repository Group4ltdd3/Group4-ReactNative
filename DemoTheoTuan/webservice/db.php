<?php 

$conn = mysqli_connect("localhost","root","");
    mysqli_select_db($conn,"data");
    mysqli_query($conn,"SET NAMES 'utf8'");

    class data{
        public $id;
        public $img;
        public $des;
        public $title;
        public $price;

        function data($id, $img, $des, $title, $price){
            $this->id = $id;
            $this->img = $img;
            $this->des = $des;
            $this->title = $title;
            $this->price = $price;
        }
    }
?>