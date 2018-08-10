//BOM Operations

// width of the browser
var width = window.innerWidth;
console.log('width : ' + width + 'px');

// height of the browser
var height = window.innerHeight;
console.log('Height : ' + height + 'px');

// Open a new Tab with google page
//window.open('https://www.google.co.in');

// Print the current document
//window.print();

// DOM Properties to get body , title , URL
var body = document.body;
console.log(body);

var title = document.title;
console.log(title);

var url = document.URL;
console.log(url);


//DOM Methods
//document.getElementById();
//document.getElementsByClassName();
//document.getElementsByTagName();
//document.querySelector();
//document.querySelectorAll();

// Access and Change the Elements

// DOM Events
function revStr(str) {
    var tempStr = '';
    for(var i= str.length-1 ; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
}


var h1Element = document.querySelector('#display');
h1Element.textContent = revStr("Good Morning");
h1Element.style.fontSize = '50px';
h1Element.style.color = 'red';

var h2Element = document.querySelector('h2');
h2Element.style.backgroundColor = 'orangered';
h2Element.style.color = 'white';

var inputElement = document.querySelector('#username');
inputElement.style.fontSize = '18px';
inputElement.style.border = '2px solid gray';
inputElement.style.outline = 'none';

var submitButton = document.querySelector('#submit');
submitButton.style.fontSize = '18px';
submitButton.style.backgroundColor= 'green';
submitButton.style.color = 'white';

function getUser() {
    var username = inputElement.value;
    var userMsg = document.querySelector('#user-msg');
    if(username === 'naveen'){
        inputElement.style.borderColor = 'green';
        inputElement.style.backgroundColor = 'lightgreen';
        userMsg.textContent = 'Valid User Name';
        userMsg.style.color = 'green';
    }
    else{
        inputElement.style.borderColor = 'red';
        inputElement.style.backgroundColor = 'lightsalmon';
        userMsg.textContent = 'Invalid User Name';
        userMsg.style.color = 'red';
    }

}

// JS Event Listeners

// get the HTML Element
// ADD event Listener
// add logic with the function

submitButton = document.querySelector('#submit');
submitButton.addEventListener('click',getUserData);
function getUserData() {
    var username = inputElement.value;
    var userMsg = document.querySelector('#user-msg');
    if(username === 'naveen'){
        inputElement.style.borderColor = 'green';
        inputElement.style.backgroundColor = 'lightgreen';
        userMsg.textContent = 'Valid User Name';
        userMsg.style.color = 'green';
    }
    else{
        inputElement.style.borderColor = 'red';
        inputElement.style.backgroundColor = 'lightsalmon';
        userMsg.textContent = 'Invalid User Name';
        userMsg.style.color = 'red';
    }
}


// 'Keyup' event for Text Box

inputElement = document.querySelector('#username');
inputElement.addEventListener('keyup',validate);
function validate() {
    var username = inputElement.value;
    var userMsg = document.querySelector('#user-msg');
    if(username === 'naveen'){
        inputElement.style.borderColor = 'green';
        inputElement.style.backgroundColor = 'lightgreen';
        userMsg.textContent = 'Valid User Name';
        userMsg.style.color = 'green';
    }
    else{
        inputElement.style.borderColor = 'red';
        inputElement.style.backgroundColor = 'lightsalmon';
        userMsg.textContent = 'Invalid User Name';
        userMsg.style.color = 'red';
    }
}





