var stdId = "";




async function fetchGrades(){    

    let response = await fetch('getUser.php'); //loading the user id from session
    let indexnum = await response.text();

    stdId = indexnum;
    

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'getResults.php?student_id='+stdId, true);

    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            var grades = JSON.parse(xhr.responseText);

            var table = document.getElementById("gradesBody");
            var repeattable = document.getElementById("repeatsBody");

            table.innerHTML = '';

            if (grades.length > 0){
                grades.forEach(function(grade){                    
                    var row = document.createElement('tr');
                    //adding custom colors to indicate pass/fail
                    if (grade.final == 'A' || grade.final == 'A+' || grade.final == 'A-' || grade.final == 'B+'){
                        row.classList.add('table-success');
                    } else {
                        row.classList.add('table-danger');
                    }
                    row.innerHTML = '<th scope="row">' + getSubject(grade.subject) + '</th>' +
                                    '<td class="text-center">' + grade.date + '</td>' +
                                    '<td class="ps-5">' + grade.cw + '</td>' +
                                    '<td class="ps-4">' + grade.exam + '</td>' +
                                    '<td class="ps-4">' + grade.final + '</td>';

                    if (!checkForRepeat(grade.subject)){
                        table.appendChild(row); //this is for skipping the repeats for the main table
                    } else {
                        repeattable.appendChild(row); //this is for placing repeat results in the repeat table
                    }
                    
                });
            } else {
                table.innerHTML = '<tr><td colspan="5">No grades found</td></tr>';
            }
        }
    };

    xhr.send();
}

function checkForRepeat(subject){
    var table = document.getElementById('gradesBody');
    var value = getSubject(subject);
    var column = 0;

    for (var i=1; i<table.rows.length; i++){
        var cell = table.rows[i].cells[column];
        if (cell.innerText == value){
            return true;
        }
    }
    return false;
}

function getSubject(subject){
    switch(subject){
        case 'ics':
            return 'Introduction to Computer Science';
        case 'mc':
            return 'Mathematics for Computing';
        case 'apf':
            return 'Algorithms and Programming Fundamentals';
        case 'dlc':
            return 'Digital Logic & Computer Organization'
        case 'oop':
            return 'Object Oriented Programming';
        case 'dm':
            return 'Data Management';
        case 'cn':
            return 'Computer Networks';
        case 'gui':
            return 'GUI Development';
        case 'se':
            return 'Software Engineering';
        case 'ead':
            return 'Enterprise Application Development';
        case 'dmw':
            return 'Developing Modern Web';
        case 'os':
            return 'Operating Systems';
        case 'ecs':
            return 'Effective Communication Skills';
        case 'final':
            return 'Business Solution Development Project';
        default:
            return 'Unknown Subject';
    }
}