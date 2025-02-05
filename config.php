<?php
    $servname = "sql213.infinityfree.com";
    $username = "if0_38251462";
    $password = "Qe4G78Nm7aWcDQ";
    $dbname = "if0_38251462_XXX";

    $conn = mysqli_connect($servname,$username , $password, $dbname);
    if (!$conn){
        die("Connection failed");
    }    
?>