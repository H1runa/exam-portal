<?php
include 'config.php';

session_start();


if(isset($_POST['update'])){
    $valIndex = $_POST['txtIndex'];
    $valEmail = $_POST['txtEmail'];
    $valPswd1 = $_POST['txtCPass'];        
    $valPswd2 = $_POST['txtNPass'];

    $passUpdate = false;

    if ($valPswd1 != "" && $valPswd2 != ""){
        if ($valPswd1 == $_SESSION['password']){            
            $sql = "UPDATE register SET `index`=?, password=? WHERE email=?";
            $params = [$valIndex,  $valPswd2, $valEmail];
            $passUpdate = true;
        } else {
            die("Invalid Password");
        }
    } else {
        $sql = "UPDATE register SET `index`=? WHERE email=?";
        $params = [$valIndex, $valEmail];
    }        

    $result = mysqli_execute_query($conn,$sql, $params);

    if($result == true){
        echo "Updated";
        $_SESSION['user'] = $valIndex;
        $_SESSION['email'] = $valEmail;
        if ($passUpdate){
            $_SESSION['password'] = $valPswd2;
        }
    }else {
        echo "Error: Invalid Input";
    }
}else{
    echo "Data not recieved";
}

?>