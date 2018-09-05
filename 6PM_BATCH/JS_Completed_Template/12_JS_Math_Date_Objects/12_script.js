/*
        Math Object Examples

     */

// Math PI and Sqrt
var piValue = Math.PI;
console.log('PI Value : ' + piValue);

// Sqrt
var sqrt = Math.sqrt(144);
console.log('Sqrt of 144 is : ' + sqrt);

// find the min of 4 numbers
var min = Math.min(45,787,65,6565,9,94,46,464);
console.log('The Min Value is : ' + min);

// find the Max of 4 numbers
var max = Math.max(45,787,65,6565,9,94,46,464);
console.log('The Max value is : ' + max);

// find the 'x' to the power of 'y' value, ex: 2^4
var pow = Math.pow(2,4);
console.log('2 ^ 4 is : ' + pow);

// generate the random numbers from 0 to 100000

var randomNumber = Math.round(Math.random() * 100000);
console.log(randomNumber);
document.querySelector('#display').textContent = randomNumber.toString();

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/*
    Date Object Examples

 */

// get today's date
var today = new Date();
console.log('Today is : ' + today);

// get the Proper date
var date = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
console.log(date);


// Display a Digital Clock on the web page
function indianClock() {
    var today = new Date();
    var options = {timeZone :'Asia/Kolkata'};
    var time = today.toLocaleTimeString('en-US',options);
    document.querySelector('#clock').textContent = time;
}

setInterval(indianClock,1000);

/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

// String Examples
var str = "Good Morning";
console.log(str);

// lowercase
console.log(str.toLowerCase());

// Uppercase
console.log(str.toUpperCase());

// find out the no.of 'o' in the String
str = 'Good Morning';
function findZeros(str) {
    var count = 0;
    for(var i = 0; i< str.length; i++){
        var ch = str.charAt(i);
        if(ch === 'o'){
            count++;
        }
    }
    return count;
}

var count = findZeros(str);
console.log('The count is : ' + count);

// Write a logic to reverse the string
str = 'Good Morning';
function reverseStr(str) {
    var temp = '';
    for(var i= str.length-1; i>=0; i--){
        temp += str.charAt(i);
    }
    return temp;
}

var revStr = reverseStr(str);
console.log('Rev String is : ' + revStr);

// Get the Str representation of a number
var number = '12545643';
function getStrNumber(str) {
    var tempStr = '';
    var array = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
    for(var i = 0; i<str.length; i++){
        tempStr += array[parseInt(str.charAt(i))] + " ";
    }
    return tempStr;
}

var strNum = getStrNumber(number);
console.log('Str Number is : ' + strNum);

