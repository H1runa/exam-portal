function validation(){
    let email = document.forms["loginForm"]["txtEmail"].value;
    let pswd = document.forms["loginForm"]["txtPswd"].value;

    if(email == ""){
        alert("Please enter the Email!");
        return false;
    }

    if(pswd == ""){
        alert("Please enter the Password!");
        return false;
    }
    return true;
}

function checkLogin() {
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Create form data to send
    let formData = new FormData();      // Simulate form submission
    
    formData.append("login", "1"); //this is like the container for the data
    formData.append("txtEmail", email);
    formData.append("txtPswd", password);

    // Send data to PHP file
    fetch("login.php", {
        method: "POST",
        body: formData,
    })
    .then(response => response.text())  // Get response as text
    .then(data => {
        console.log("Server Response:", data); // Debugging

        if (data.includes("Logged in")) {
            alert("Logged in successfully");
            window.location.href = 'dashboard.html';
        } else {
            alert("Error: " + data);
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

function AddCustomFormSubmission(){    
    document.getElementById('loginform').addEventListener('submit', function(){
        event.preventDefault();
        if (validation()){
            checkLogin();
        }
    })
}