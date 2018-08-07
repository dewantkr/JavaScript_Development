/*
        Math Object Examples

     */

// Math PI and Sqrt
var piValue = Math.PI;
console.log('piValue : ' + piValue);

var sqrt = Math.sqrt(144);
console.log('sqrt 144 : ' + sqrt);

// find the min of 4 numbers
var min = Math.min(545,45,5,51,2,1,56,564,64,64,6);
console.log('min : ' + min);

// find the Max of 4 numbers
var max = Math.max(545,45,5,51,2,1,56,564,64,64,6);
console.log('max : ' + max);

// find the 'x' to the power of 'y' value, ex: 2^4
var pow = Math.pow(2,4);
console.log('2 ^ 4 is : ' + pow);

// generate the random numbers from 0 to 100
var random = Math.round(Math.random() * 100000);
console.log(random);
document.querySelector('#display').textContent
                                        = random.toString();

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

//String Functions

var str = "Good Morning";

var len = str.length;
console.log('len : ' + len);

var lowercase = str.toLowerCase();
console.log('lowercase : ' + lowercase);

var uppercase = str.toUpperCase();
console.log('uppercase : ' + uppercase);

var partialStr = str.substring(0,4);
console.log('partialStr : ' + partialStr);

var remStr = str.substring(5);
console.log('Rem String : ' + remStr);

// no of 'o's in the string
str = "Good Morning";
function countZero(str) {
    var count = 0;
    for(var i=0; i<str.length; i++){
        if(str.charAt(i) === 'o'){
            count++;
        }
    }
    return count;
}
console.log('no of Zeros ' + countZero(str));

// Reverse the String
str = "Good Morning";
function strReverse(str) {
    var tempStr = '';
    for(var i=str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
}
console.log('Rev String : ' + strReverse(str));

// "0123" => ZERO ONE TWO THREE
str = "123446546465464";
function strNumber(str) {
    var tempStr = '';
    var array = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
    for(var i=0; i<str.length; i++){
        tempStr += array[str.charAt(i)] + " ";
    }
    return tempStr;
}
console.log('Str Number ' + strNumber(str));

/*
    Date Object Examples

 */

// get today's date
var today = new Date();
console.log(today);

// get proper date
var date = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
console.log(date);

// get full day of the week using switch statement
var output = 'Today is : ';
today = new Date().getDay();
switch(today){
    case 0:
        output += 'Sunday';
        break;
    case 1:
        output += 'Monday';
        break;
    case 2:
        output += 'Tuesday';
        break;
    case 3:
        output += 'Wednesday';
        break;
    case 4:
        output += 'Thursday';
        break;
    case 5:
        output += 'Friday';
        break;
    case 6:
        output += 'Saturday';
        break;
    default:
        output += '';
        break;
}
console.log(output);
document.querySelector('#display').textContent = output;

// Display a Digital Clock on the web page
function digitalClock() {
    var today =  new Date();
    var options = {timeZone : 'Asia/Kolkata'};
    var time = today.toLocaleTimeString('en-US',options);
    document.querySelector('#clock').textContent = time;
}
setInterval(digitalClock,1000);


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/