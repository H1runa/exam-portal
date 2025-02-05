async function loadUser(){
    let res = await fetch('getUser.php');
    let index = await res.text();

    stdId = index;
}
async function loadEmail(){
    let res = await fetch('getEmail.php');
    let em = await res.text();

    email = em;
}

var stdId = " ";
var email = "";

// Using an array for this didnt work. But object works.
var credits = {};

function addButtonListeners(){        
    document.getElementById("examResults").addEventListener('click', function(){
        window.location.href = "results.html";
    })
    document.getElementById("gpaCalculation").addEventListener('click', function(){
        window.location.href = "manual_calc.html";
    })
    document.getElementById("updateBtn").addEventListener('click', function(){
        window.location.href = "edit_user.html";
    });
    document.getElementById("gpaBox").addEventListener('click', function(){
        window.location.href = "howItWorks.html";
    })
}

async function fetchCredits(){
    var response = await fetch('getCredits.php');
    var credits_json = await response.json();
   
    credits_json.forEach(c => {
        credits[c.subject] = parseFloat(c.credit);
    });
}

async function dash_update(){      
    await loadUser();
    await loadEmail();
    await fetchCredits();  

    //setting the values for dynamic values in the html code
    document.getElementById('indexNumber').innerText = stdId.toUpperCase();
    document.getElementById('profileEmail').innerText = email.toLowerCase();
    document.getElementById('profileIndex').innerText = stdId.toUpperCase();

    document.getElementById('acknowledgeDelete').addEventListener('click', function(){
       window.location.href="doDelete.php";
    })

    var arr = {
        'ics':-1, 'mc':-1, 'apf':-1, 'dlc':-1, 'oop':-1, 'dm':-1, 'cn':-1, 'gui':-1, 
        'se':-1, 'ead':-1, 'dmw':-1, 'os':-1, 'final':-1, 'ecs':-1
    };
    var gptotal = 0;
    var credittotal = 0;
    var gpa = 0;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'getResults.php?student_id='+stdId, true);

    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            var grades = JSON.parse(xhr.responseText);                       

            if (grades.length > 0){
                grades.forEach(function(grade){   
                    // Translating grades into GPA
                    switch (grade.final){
                        case 'A+':
                        case 'A':
                            arr[grade.subject] = 4.00;
                            break;
                        case 'A-':
                            arr[grade.subject] = 3.7;
                            break;
                        case 'B+':
                            arr[grade.subject] = 3.3;
                            break;
                        default:
                            arr[grade.subject] = 0;
                            break;
                    }                                                                            
                });

                // Get rid of subjects with no grades set
                for (let key in arr){
                    if (arr[key] == -1){
                        delete arr[key];
                    }
                }

                // Getting the total with credits
                for (let key in arr){                    
                    if (credits[key] !== undefined) { // Ensure the subject exists in credits
                        gptotal += arr[key] * credits[key];
                        credittotal += credits[key];
                    }
                }

                // Calculating GPA
                if (credittotal !== 0) {
                    gpa = gptotal / credittotal;
                    gpa = Math.round((gpa + Number.EPSILON) * 100) / 100; 
                    document.getElementById("gpalabel").innerText = gpa;
                } else {
                    alert("No credits available for GPA calculation.");
                }
            } else {
                alert("Error retrieving grades.");
            }
        }
    };

    xhr.send();
}
