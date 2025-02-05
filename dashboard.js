var gpa = 0;
var passRate = 10;
var stdId = "";
var email = "";
var passed = [];
var credits = {};
var gpaChart = null; // Store the chart instance globally
var passedChart = null;

// This function is used to update the existing GPA chart
function updateGPAChart() {
    if (gpaChart) { // Check if the chart is already initialized
        // Update the GPA chart with the new GPA value
        gpaChart.updateSeries([ (gpa / 4) * 100 ]); // Update the series
    }
}

function updatePassedChart(){
    if(passedChart){
        passedChart.updateSeries([passRate]);
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    //adding functionalities to buttons
    document.getElementById("examBtn").addEventListener('click', function(){
        window.location.href = "results.html";
    });
    document.getElementById("howBtn").addEventListener('click', function(){
        window.location.href = "howItWorks.html";
    });
    document.getElementById("calcBtn").addEventListener('click', function(){
        window.location.href = "manual_calc.html";
    });

    await loadGPA();

    // Initial chart options
    var gpaOptions = {
        chart: {
            type: 'radialBar',
            height: 350, // Same height for both charts
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 2000 // Animation speed (2 seconds)
            }
        },
        series: [(gpa / 4) * 100], // Initial value for the GPA (0% by default)
        plotOptions: {
            radialBar: {
                hollow: { size: '50%' }, // Hollow size of the gauge
                dataLabels: {
                    show: true,
                    value: {
                        formatter: function(val) {
                            return (val / 100 * 4).toFixed(2) + " GPA"; // Convert back to GPA scale
                        }
                    }
                }
            }
        },
        labels: ['GPA']
    };

    // Initialize the chart once when the page loads
    gpaChart = new ApexCharts(document.querySelector("#gpaGauge"), gpaOptions);
    gpaChart.render();

    // Pass Rate chart options (identical to GPA chart)
    var passRateOptions = {
        chart: {
            type: 'radialBar',
            height: 350, // Same height for both charts
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 2000 // Animation speed (2 seconds)
            }
        },
        series: [passRate], // Pass Rate placeholder value (75%)
        plotOptions: {
            radialBar: {
                hollow: { size: '50%' }, // Hollow size of the gauge
                dataLabels: {
                    show: true,
                    value: {
                        formatter: function(val) {
                            return val + "%"; // Display percentage value
                        }
                    }
                }
            }
        },
        labels: ['Pass Rate']
    };

    passedChart = new ApexCharts(document.querySelector("#passRateChart"), passRateOptions);
    passedChart.render();
});

async function fetchCredits() {
    var response = await fetch('getCredits.php');
    var credits_json = await response.json();
   
    credits_json.forEach(c => {
        credits[c.subject] = parseFloat(c.credit);
    });
}

async function loadEmail() {
    let res = await fetch('getEmail.php');
    let em = await res.text();

    email = em;
}

async function loadUser() {
    let res = await fetch('getUser.php');
    let index = await res.text();

    stdId = index;
}

async function loadGPA() {      
    await loadUser();
    await loadEmail();
    await fetchCredits();  

    var arr = {
        'ics': -1, 'mc': -1, 'apf': -1, 'dlc': -1, 'oop': -1, 'dm': -1, 'cn': -1, 'gui': -1, 
        'se': -1, 'ead': -1, 'dmw': -1, 'os': -1, 'final': -1, 'ecs': -1
    };
    var gptotal = 0;
    var credittotal = 0;
    gpa = 0;
    passed = []; // Clear the passed array before recalculating

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'getResults.php?student_id=' + stdId, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var grades = JSON.parse(xhr.responseText);                       

            if (grades.length > 0) {
                grades.forEach(function(grade) {   
                    // Translating grades into GPA
                    switch (grade.final) {
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
                for (let key in arr) {
                    if (arr[key] == -1) {
                        delete arr[key];
                    }
                }

                // Getting the total with credits
                for (let key in arr) {                    
                    if (credits[key] !== undefined) { // Ensure the subject exists in credits
                        gptotal += arr[key] * credits[key];
                        credittotal += credits[key];
                    }
                }

                // Count the number of passed subjects
                for (let key in arr) {
                    if (arr[key] > 0) { // Consider it passed if the GPA is greater than 0
                        passed.push(arr[key]);
                    }
                }

                // Calculate pass rate as a percentage of passed subjects
                passRate = (passed.length / Object.keys(arr).length) * 100;
                passRate = passRate.toFixed(2);
                //alert("Passed rate: " + passRate);
                updatePassedChart();

                // Calculating GPA
                if (credittotal !== 0) {
                    gpa = gptotal / credittotal;
                    gpa = Math.round((gpa + Number.EPSILON) * 100) / 100;   
                    updateGPAChart(); // Update the GPA chart
                } else {
                    alert("No credits available for GPA calculation.");
                }
            } else {
                alert("Error retrieving grades.");
            }
        }
    };

    xhr.send();
};
