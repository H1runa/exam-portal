<?php
include 'config.php';

session_start();

$email = $_SESSION['email'];

// Ensure the email is properly quoted
$sql = "DELETE FROM register WHERE email = '$email'";  // Enclose the email in quotes

$result = $conn->query($sql);

if ($result) {
    header("Location: logout.php");  // Make sure to use the correct URL for logout
    exit();
}

$conn->close();
?>
