// Get the Input Elements
var userField = document.querySelector('#username');
var emailField = document.querySelector('#email');
var passwordField = document.querySelector('#password');
var confirmPasswordField = document.querySelector('#password_confirm');


// Get Error Message Elements
var userError = document.querySelector('#name_error');
var emailError = document.querySelector('#email_error');
var passwordError = document.querySelector('#password_error');

// Add Blur Event Listeners
userField.addEventListener('blur',checkUser);
emailField.addEventListener('blur',checkEmail);
passwordField.addEventListener('blur',checkPassword);
confirmPasswordField.addEventListener('blur',checkPassword);

function checkPassword() {
    clearErrorMsg(passwordField,passwordError);
    clearErrorMsg(confirmPasswordField,passwordError);
}
function checkEmail() {
    clearErrorMsg(emailField,emailError);
}
function checkUser() {
    clearErrorMsg(userField,userError);
}

function validate() {
    var isValid = true;

    // Required UserName Validation
    if(userField.value === ''){
        displayErrorMsg(userField,userError,'Required User Name');
        isValid = false;
        return isValid;
    }

    // UserName Length Validation
    if(userField.value.length < 5){
        displayErrorMsg(userField,userError,'Enter at least 5 letters');
        isValid = false;
        return isValid;
    }

    // User Name RegEx Validation
    if(!userField.value.match(/^[A-Za-z0-9_]{1,15}$/)){
        displayErrorMsg(userField,userError,'Pattern Not Matched');
        isValid = false;
        return isValid;
    }

    // Required Email Validation
    if(emailField.value === ''){
        displayErrorMsg(emailField,emailError,'Required Email');
        isValid = false;
        return isValid;
    }

    // Required Password
    if(passwordField.value === ''){
        displayErrorMsg(passwordField,passwordError,'Required Password');
        isValid = false;
        return isValid;
    }

    // Required Confirm Password
    if(confirmPasswordField.value === ''){
        displayErrorMsg(confirmPasswordField,passwordError,'Required Confirm Password');
        isValid = false;
        return isValid;
    }

    // Passwords  Match Validation
    if(passwordField.value !== confirmPasswordField.value){
        displayErrorMsg(passwordField,passwordError,'Passwords did not Match');
        confirmPasswordField.style.borderColor = 'red';
        confirmPasswordField.style.backgroundColor = 'lightsalmon';
        isValid = false;
        return isValid;
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

function clearErrorMsg(inputField , inputError) {
    inputField.style.borderColor = 'gray';
    inputField.style.backgroundColor = 'white';
    inputError.textContent = '';
}
