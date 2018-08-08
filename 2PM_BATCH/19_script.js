// Get the Input Elements
var userField = document.querySelector('#username');
var emailField = document.querySelector('#email');
var passwordField = document.querySelector('#password');
var confirmPasswordField = document.querySelector('#password_confirm');


// Get Error Message Elements
var userError = document.querySelector('#name_error');
var emailError = document.querySelector('#email_error');
var passwordError = document.querySelector('#password_error');



function validate() {
    var isValid = true;

    // Required UserName Validation
    if(userField.value === ''){
        displayErrorMsg(userField,userError,'Required User Name');
        isValid = false;
        return isValid;
    }

    // Required Email Validation
    if(emailField.value === ''){

    }


    if(isValid === false){
        return false;
    }
    else{
        alert("Form Submitted");
        return true;
    }
}

function displayErrorMsg(inputField , inputError , message) {
    inputField.style.borderColor = 'red';
    inputField.style.backgroundColor = 'lightsalmon';
    inputError.textContent = message;
    inputError.style.color = 'red';
}