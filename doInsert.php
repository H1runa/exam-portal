<?php
include 'config.php';

session_start();

if(isset($_POST['signIn'])){
    $valIndex = $_POST['txtIndex'];
    $valEmail = $_POST['txtEmail'];
    $valPswd = $_POST['txtPswd'];

    $result = $conn->query("SELECT * FROM register WHERE email = '$valEmail'");
    if($result->num_rows > 0){
        echo "Email already exists!";
        die();
    }
    

    $sql = "INSERT INTO register (`index`, email, password)
    VALUES('$valIndex', '$valEmail', '$valPswd')";

    

    $result = mysqli_query($conn,$sql);

    if($result == true){
        echo "New record inserted";
        $_SESSION['user'] = $valIndex;
        $_SESSION['email'] = $valEmail;
        $_SESSION['password'] = $valPswd;
    }else {
        echo "Error: ".$sql."<br>".mysqli_error($conn);
    }
}else{
    echo "No data received";
}

?>