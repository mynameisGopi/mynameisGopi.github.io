/*2. Handling Forms with JS (Practice)*/

window.onload=function(){
    var user = document.getElementById("name");
    console.log(user.value);
    console.log(user.type);
}

function inputHandler()
    {
        var myvalue = document.getElementById("myinput").value;
        document.getElementById("emptyParagraph").innerHTML = "Your Input: " + myvalue;

    }



/*Lab 6 - Forms (Part C) */


/* The following codes is to assign each user input/element a variable. */
function myfunc(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var check_box = document.querySelector('input[type="checkbox"]:checked').value;
    var radio_box = document.querySelector('input[type="radio"]:checked').value;
    var bigmsg = document.getElementById("bigmsg").value;

    
/*The following code is to send each user input/variable to the localstorage. This occurs when the user click the "submit" button at the bottom of the webpage.*/
    localStorage.setItem('ls_name', name);
    localStorage.setItem('ls_email', email);
    localStorage.setItem('ls_phone', phone);
    localStorage.setItem('ls_check_box', check_box);
    localStorage.setItem('ls_bigmsg', bigmsg);
    localStorage.setItem('ls_radio_box', radio_box)

}

/*This code is to enable the user to reset the form (emptying all text field) when clicking the reset button.*/ 
function clearForm() {
    document.getElementById('myform').reset();
}