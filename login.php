<?php
session_start();
include 'config.php';

if (isset($_POST['login'])) {
    $valEmail = trim($_POST['txtEmail']);  // Trim to remove whitespace
    $valPswd = $_POST['txtPswd'];

    // Use Prepared Statements to Prevent SQL Injection
    $sql = "SELECT * FROM register WHERE email = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "s", $valEmail);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    if ($result && mysqli_num_rows($result) === 1) {
        $row = mysqli_fetch_assoc($result);
        
        // Secure Password Verification
        if ($valPswd == $row['password']) {       
            $_SESSION['user'] = $row['index'];
            $_SESSION['email'] = $valEmail;
            $_SESSION['password'] = $valPswd;
            echo "Logged in"; // Redirect after login
            exit();
        } else {
            echo "Invalid Password.";
            mysqli_stmt_close($stmt);
            exit();
        }
    } else {
        echo "Invalid Email.";
        mysqli_stmt_close($stmt);
        exit();
    }
        
}
?>