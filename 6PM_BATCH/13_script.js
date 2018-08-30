//BOM Operations

// width of the browser
var width = window.innerWidth;
console.log('Width : ' + width + 'px');

// Height of the browser
var height = window.innerHeight;
console.log('Height : ' + height + 'px');

// Open a google page
//window.open('http://www.google.co.in');

// Print the current Document
//window.print();

// DOM Properties to get body , title , URL

var bodyElement = document.body;
console.log(bodyElement);

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

function revString(str) {
    var tempStr = '';
    for(var i=str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
     return tempStr;
}

/*
var h1Element = document.querySelector('#display');
h1Element.textContent = 'Good Morning';
h1Element.style.color = 'red';
h1Element.style.fontSize = '50px';

var h2Element = document.querySelector('h2');
h2Element.textContent = 'Just DOM Manipulation';
h2Element.style.backgroundColor = 'lightgreen';
*/

// Form Related Styles using JS
var inputElement = document.querySelector('#user');
inputElement.style.fontSize = '18px';
inputElement.style.textAlign = 'center';
inputElement.style.height = '35px';
inputElement.style.border = '2px solid gray';

var buttonElement = document.querySelector('#button');
buttonElement.style.backgroundColor = 'forestgreen';
buttonElement.style.color = 'white';
buttonElement.style.fontSize = '18px';
buttonElement.style.border = 'none';
buttonElement.style.padding = '10px 25px';
buttonElement.style.boxShadow = '0 0 15px black';
buttonElement.style.margin = '20px';

function getUser() {
    // get the textbox value
    var username = inputElement.value;
    var userError = document.querySelector('#user-error');
    if(username === ''){
        userError.style.color = 'white';
        userError.textContent = 'Please enter any value';
    }
    else{
        if(username === 'naveen'){
            inputElement.style.borderColor = 'forestgreen';
            inputElement.style.backgroundColor = 'lightgreen';
            userError.textContent = 'UserName is Valid';
            userError.style.color = 'forestgreen';
        }
        else{
            inputElement.style.borderColor = 'red';
            inputElement.style.backgroundColor = 'lightcoral';
            userError.textContent = 'UserName is Invalid';
            userError.style.color = 'red';
        }
    }


}