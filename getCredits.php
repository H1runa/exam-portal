<?php
    require 'config.php';

    header('Content-Type: application/json');

    $sql = "SELECT * FROM 241f_credit";

    $results = $conn ->query($sql);
    $credits = [];

    if ($results -> num_rows > 0){
        while ($row = $results -> fetch_assoc()){
            $credits[] = $row;
        }
    }

    echo json_encode($credits);

    $conn->close();
?>