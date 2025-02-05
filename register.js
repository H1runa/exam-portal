document.addEventListener('DOMContentLoaded', function(){    
    addCustomFormSubmit();
    
})

function validation(){    
    let index = document.forms["registerForm"]["txtIndex"].value;
    let email = document.forms["registerForm"]["txtEmail"].value;
    let pswd = document.forms["registerForm"]["txtPswd"].value;
    let conPswd = document.forms["registerForm"]["txtConPswd"].value;

    if(index == ""){
        alert("Please enter the Student Index Number!");
        return false;
    }

    if(email == ""){
        alert("Please enter the Email address!");
        return false;
    }

    if(pswd == ""){
        alert("Please enter the Password!");
        return false;
    }

    if(conPswd == ""){
        alert("Please confirm your Password!");
        return false;
    }

    if(conPswd !== pswd){
        alert("Please enter the Correct Password!");
        return false;
    }

    else{
        alert("Successfully signed in!");
    }
    return true;
    
}

function insertData() {
    let index = document.getElementById('inputIndex').value;
    let email = document.getElementById('inputEmail4').value;
    let password = document.getElementById('inputPassword4').value;
    
    // Create form data to send
    let formData = new FormData();
    formData.append("signIn", "1");  // Simulate form submission
    formData.append("txtIndex", index);
    formData.append("txtEmail", email);
    formData.append("txtPswd", password);

    // Send data to PHP file
    fetch("doInsert.php", {
        method: "POST",
        body: formData,
    })
    .then(response => response.text())  // Get response as text
    .then(data => {
        console.log("Server Response:", data); // Debugging

        if (data.includes("New record inserted")) {
            alert("Data inserted successfully!");
            window.location.href = 'dashboard.html';
        } else {
            alert("Error: " + data);
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

function addCustomFormSubmit(){    
    document.getElementById("registerForm").addEventListener('submit', function(event){        
        event.preventDefault();
        if (validation()){
            insertData();
        }        
    });
}
