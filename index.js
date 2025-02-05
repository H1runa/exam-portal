document.addEventListener('DOMContentLoaded', async function(){
    let res = await fetch('getUser.php');
    let indexnum = await res.text();

    if (indexnum != ""){
        $('#loginregister').hide();
        $('#gt_dashboard').show();
    } else {
        $('#loginregister').show();
        $('#gt_dashboard').hide();
    }
})
