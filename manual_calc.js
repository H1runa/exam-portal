async function fetchCredits(){
    try{
        var response = await fetch("getCredits.php");
        var credits = await response.json();

        //getting the credits from the json and parsing them to float because apparently it comes in string form
        ics_credit = parseFloat(credits.find(c => c.subject == 'ics').credit);
        mc_credit = parseFloat(credits.find(c => c.subject == 'mc').credit);
        apf_credit = parseFloat(credits.find(c => c.subject == 'apf').credit);
        dlc_credit = parseFloat(credits.find(c => c.subject == 'dlc').credit);
        oop_credit = parseFloat(credits.find(c => c.subject == 'oop').credit);
        dm_credit = parseFloat(credits.find(c => c.subject == 'dm').credit);
        cn_credit = parseFloat(credits.find(c => c.subject == 'cn').credit);
        gui_credit = parseFloat(credits.find(c => c.subject == 'gui').credit);
        se_credit = parseFloat(credits.find(c => c.subject == 'se').credit);
        ead_credit = parseFloat(credits.find(c => c.subject == 'ead').credit);
        dmw_credit = parseFloat(credits.find(c => c.subject == 'dmw').credit);
        os_credit = parseFloat(credits.find(c => c.subject == 'os').credit);
        final_credit = parseFloat(credits.find(c => c.subject == 'final').credit);
        ecs_credit = parseFloat(credits.find(c => c.subject == 'ecs').credit);        
        
    } catch (error){
        console.error("Error occured while fetching credit data.", error);
    }
}
var ics_credit = 0; //probably better if it was an array but changing the whole code to fit that would take too much time rn
var mc_credit = 0;
var apf_credit = 0;
var dlc_credit = 0;
var oop_credit = 0;
var dm_credit = 0;
var cn_credit = 0;
var gui_credit = 0;
var se_credit = 0;
var ead_credit = 0;
var dmw_credit = 0;
var os_credit = 0;
var final_credit =  0;
var ecs_credit = 0;

fetchCredits();

var ttoal = ics_credit + mc_credit + apf_credit;

var gpa = 0;


function calculateGPA(){
    var totalgp = 0;
    var totalcredit = 0;

    //getting which radio button is selected
    var ics_selected = document.querySelector('input[name="ics"]:checked').id;
    var mc_selected = document.querySelector('input[name="mc"]:checked').id;
    var dlc_selected = document.querySelector('input[name="dlc"]:checked').id;
    var apf_selected = document.querySelector('input[name="apf"]:checked').id;
    var oop_selected = document.querySelector('input[name="oop"]:checked').id;
    var dm_selected = document.querySelector('input[name="dm"]:checked').id;
    var cn_selected = document.querySelector('input[name="cn"]:checked').id;
    var gui_selected = document.querySelector('input[name="gui"]:checked').id;
    var se_selected = document.querySelector('input[name="se"]:checked').id;
    var ead_selected = document.querySelector('input[name="ead"]:checked').id;
    var dmw_selected = document.querySelector('input[name="dmw"]:checked').id;
    var os_selected = document.querySelector('input[name="os"]:checked').id;
    var ecs_selected = document.querySelector('input[name="ecs"]:checked').id;
    var final_selected = document.querySelector('input[name="final"]:checked').id;


    //calculating gpa based on the selections made
    switch(ics_selected){
        case 'ics0':            
            break;
        case 'ics1':
            totalgp += 4.00*ics_credit;
            totalcredit += ics_credit;
            break;
        case 'ics1a':
            totalgp += 3.7*ics_credit;
            totalcredit += ics_credit;
            break;
        case 'ics2':
            totalgp += 3.3*ics_credit;
            totalcredit += ics_credit;
            break;
        case 'ics3':
            totalgp += 0*ics_credit;
            totalcredit += ics_credit;
            break;
        default:
            break;
    }

    switch(mc_selected){
        case 'mc0':            
            break;
        case 'mc1':            
            totalgp += 4.00*mc_credit;
            totalcredit += mc_credit;
            break;
        case 'mc1a':
            totalgp += 3.7*mc_credit;
            totalcredit += mc_credit;
            break;
        case 'mc2':
            totalgp += 3.3*mc_credit;
            totalcredit += mc_credit;
            break;
        case 'mc3':
            totalgp += 0*mc_credit;
            totalcredit += mc_credit;
            break;
        default:
            break;
    }

    switch(apf_selected) {
        case 'apf0':            
            break;
        case 'apf1':            
            totalgp += 4.00*apf_credit;
            totalcredit += apf_credit;
            break;
        case 'apf1a':
            totalgp += 3.7*apf_credit;
            totalcredit += apf_credit;
            break;
        case 'apf2':
            totalgp += 3.3*apf_credit;
            totalcredit += apf_credit;
            break;
        case 'apf3':
            totalgp += 0*apf_credit;
            totalcredit += apf_credit;
            break;
        default:
            break;
    }
    

    switch(dlc_selected){
        case 'dlc0':            
            break;
        case 'dlc1':            
            totalgp += 4.00*dlc_credit;
            totalcredit += dlc_credit;
            break;
        case 'dlc1a':
            totalgp += 3.7*dlc_credit;
            totalcredit += dlc_credit;
            break;
        case 'dlc2':
            totalgp += 3.3*dlc_credit;
            totalcredit += dlc_credit;
            break;
        case 'dlc3':
            totalgp += 0*dlc_credit;
            totalcredit += dlc_credit;
            break;
        default:
            break;
    }

    switch(oop_selected) {
        case 'oop0':            
            break;
        case 'oop1':            
            totalgp += 4.00*oop_credit;
            totalcredit += oop_credit;
            break;
        case 'oop1a':
            totalgp += 3.7*oop_credit;
            totalcredit += oop_credit;
            break;
        case 'oop2':
            totalgp += 3.3*oop_credit;
            totalcredit += oop_credit;
            break;
        case 'oop3':
            totalgp += 0*oop_credit;
            totalcredit += oop_credit;
            break;
        default:
            break;
    }

    switch(dm_selected) {
        case 'dm0':            
            break;
        case 'dm1':            
            totalgp += 4.00*dm_credit;
            totalcredit += dm_credit;
            break;
        case 'dm1a':
            totalgp += 3.7*dm_credit;
            totalcredit += dm_credit;
            break;
        case 'dm2':
            totalgp += 3.3*dm_credit;
            totalcredit += dm_credit;
            break;
        case 'dm3':
            totalgp += 0*dm_credit;
            totalcredit += dm_credit;
            break;
        default:
            break;
    }

    switch(cn_selected) {
        case 'cn0':            
            break;
        case 'cn1':            
            totalgp += 4.00*cn_credit;
            totalcredit += cn_credit;
            break;
        case 'cn1a':
            totalgp += 3.7*cn_credit;
            totalcredit += cn_credit;
            break;
        case 'cn2':
            totalgp += 3.3*cn_credit;
            totalcredit += cn_credit;
            break;
        case 'cn3':
            totalgp += 0*cn_credit;
            totalcredit += cn_credit;
            break;
        default:
            break;
    }

    switch(gui_selected) {
        case 'gui0':            
            break;
        case 'gui1':            
            totalgp += 4.00*gui_credit;
            totalcredit += gui_credit;
            break;
        case 'gui1a':
            totalgp += 3.7*gui_credit;
            totalcredit += gui_credit;
            break;
        case 'gui2':
            totalgp += 3.3*gui_credit;
            totalcredit += gui_credit;
            break;
        case 'gui3':
            totalgp += 0*gui_credit;
            totalcredit += gui_credit;
            break;
        default:
            break;
    }

    switch(se_selected) {
        case 'se0':            
            break;
        case 'se1':            
            totalgp += 4.00*se_credit;
            totalcredit += se_credit;
            break;
        case 'se1a':
            totalgp += 3.7*se_credit;
            totalcredit += se_credit;
            break;
        case 'se2':
            totalgp += 3.3*se_credit;
            totalcredit += se_credit;
            break;
        case 'se3':
            totalgp += 0*se_credit;
            totalcredit += se_credit;
            break;
        default:
            break;
    }

    switch(ead_selected) {
        case 'ead0':            
            break;
        case 'ead1':            
            totalgp += 4.00*ead_credit;
            totalcredit += ead_credit;
            break;
        case 'ead1a':
            totalgp += 3.7*ead_credit;
            totalcredit += ead_credit;
            break;
        case 'ead2':
            totalgp += 3.3*ead_credit;
            totalcredit += ead_credit;
            break;
        case 'ead3':
            totalgp += 0*ead_credit;
            totalcredit += ead_credit;
            break;
        default:
            break;
    }

    switch(dmw_selected) {
        case 'dmw0':            
            break;
        case 'dmw1':            
            totalgp += 4.00*dmw_credit;
            totalcredit += dmw_credit;
            break;
        case 'dmw1a':
            totalgp += 3.7*dmw_credit;
            totalcredit += dmw_credit;
            break;
        case 'dmw2':
            totalgp += 3.3*dmw_credit;
            totalcredit += dmw_credit;
            break;
        case 'dmw3':
            totalgp += 0*dmw_credit;
            totalcredit += dmw_credit;
            break;
        default:
            break;
    }

    switch(os_selected) {
        case 'os0':            
            break;
        case 'os1':            
            totalgp += 4.00*os_credit;
            totalcredit += os_credit;
            break;
        case 'os1a':
            totalgp += 3.7*os_credit;
            totalcredit += os_credit;
            break;
        case 'os2':
            totalgp += 3.3*os_credit;
            totalcredit += os_credit;
            break;
        case 'os3':
            totalgp += 0*os_credit;
            totalcredit += os_credit;
            break;
        default:
            break;
    }

    switch(ecs_selected) {
        case 'ecs0':            
            break;
        case 'ecs1':            
            totalgp += 4.00*ecs_credit;
            totalcredit += ecs_credit;
            break;
        case 'ecs1a':
            totalgp += 3.7*ecs_credit;
            totalcredit += ecs_credit;
            break;
        case 'ecs2':
            totalgp += 3.3*ecs_credit;
            totalcredit += ecs_credit;
            break;
        case 'ecs3':
            totalgp += 0*ecs_credit;
            totalcredit += ecs_credit;
            break;
        default:
            break;
    }

    switch(final_selected) {
        case 'final0':            
            break;
        case 'final1':            
            totalgp += 4.00*final_credit;
            totalcredit += final_credit;
            break;
        case 'final1a':
            totalgp += 3.7*final_credit;
            totalcredit += final_credit;
            break;
        case 'final2':
            totalgp += 3.3*final_credit;
            totalcredit += final_credit;
            break;
        case 'final3':
            totalgp += 0*final_credit;
            totalcredit += final_credit;
            break;
        default:
            break;
    }
    

    

    if(totalgp == 0 || totalcredit==0){
        return 0;
    }

    gpa = totalgp/totalcredit;
    gpa = Math.round((gpa + Number.EPSILON) * 100) / 100;
    return gpa;
}

function updateGPA(){
    let temp_gpa = calculateGPA();
    let gpa_element = document.getElementById("gpavalue");
    gpa_element.innerText = temp_gpa;
    if (temp_gpa == 0){
        gpa_element.style.color = "black";
    } else if (temp_gpa>=3.3){
        gpa_element.style.color = "green";
    } else {
        gpa_element.style.color = "darkred";
    }
}

function addChangeListeners(){
    const input_groups = document.querySelectorAll(".input-group");
    for(let group of input_groups){
        group.addEventListener('change', function(event){
            if (event.target.type == 'radio'){
                updateGPA();
            }
        })
    }
    
}

