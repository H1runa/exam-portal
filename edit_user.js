document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('updateForm').addEventListener('submit', function(){
        event.preventDefault();
        updateUser();        
    })

    fillTheForm();
    
})

async function fillTheForm(){
    let res = await fetch('getEmail.php');
    let email = await res.text();

    res = await fetch('getUser.php');
    let ind = await res.text();

    document.getElementById('email').value = email;
    document.getElementById('index').value = ind;
}

async function updateUser(){
    let em = document.getElementById('email').value;
    let index = document.getElementById('index').value;
    let curPass = document.getElementById('currentPassword').value;
    let newPass = document.getElementById('newPassword').value;

    let formData = new FormData();
    formData.append("update", "1");
    formData.append('txtIndex', index);
    formData.append('txtEmail', em);
    formData.append('txtCPass', curPass);
    formData.append('txtNPass', newPass);

    let res = await fetch('doUpdate.php', {
        method: "POST",
        body: formData,
    });
    let result = await res.text();

    if (result.includes("Invalid Password Input")){
        alert("Invalid Password Input");
    } else if (result.includes("Updated")){
        alert("Updated Successfully");
    } else {
        alert("Error: "+result);
    }
}