<?php
    $servname = "localhost";
    $username = "root";
    $password = "";
    $dbname = "student_db";

    $conn = mysqli_connect($servname,$username , $password, $dbname);
    if (!$conn){
        die("Connection failed");
    }    
?>