<?php
    require 'config.php';

    header('Content-Type: application/json');

    if (isset($_GET['student_id']) && !empty($_GET['student_id'])){
        $std_id = $_GET['student_id'];

        $sql = "SELECT * FROM grades WHERE index_num = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $std_id);
        $stmt->execute();
        $result = $stmt->get_result();

        $grades = [];
        while ($row = $result->fetch_assoc()) {
            $grades[] = $row;
        }

        echo json_encode($grades);
    } else {
        echo json_encode(["error"=> "No student ID"]);
    }

    $conn->close();
?>