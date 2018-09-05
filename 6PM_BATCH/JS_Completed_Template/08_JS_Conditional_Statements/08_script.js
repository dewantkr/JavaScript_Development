// If Else condition Example
var courseCompleted = true;
var practiceCompleted = false;
if(courseCompleted && practiceCompleted){
    console.log('You will get the Job Soon');
}
else if(courseCompleted && !practiceCompleted){
    console.log('Please start practicing');
}
else{
    console.log('Please join any Course');
}

// For loop Example to display from 1 - 10 values
var output = '';
for(var i=1; i<=10; i++){
    if(i <= 9){
        output += i + " , ";
    }
    else{
        output += i;
    }
}
console.log(output);
document.querySelector('#display').textContent = output;


// While loop Example to display from 1 - 10 values
output = '';
var i =1;
while(i <= 10){
    if(i <= 9){
        output += i + " - ";
    }
    else{
        output += i;
    }
    i++;
}
console.log(output);
document.querySelector('#display').textContent = output;

// Do while loop Example to display from 1 - 10 values
output = '';
var i =1;
do{
    if(i <= 9){
        output += i + " * ";
    }
    else{
        output += i;
    }
    i++;
}
while(i <= 10);
console.log(output);
document.querySelector('#display').textContent = output;

// Switch Statement Example to display full Day
var numberStr = "95464";
var messageStr = '';
for(var i=0; i<numberStr.length; i++){
    var char = parseInt(numberStr.charAt(i));
    switch(char){
        case 0:
            messageStr += ' ZERO ';
            break;
        case 1:
            messageStr += ' ONE ';
            break;
        case 2:
            messageStr += ' TWO ';
            break;
        case 3:
            messageStr += ' THREE ';
            break;
        case 4:
            messageStr += ' FOUR ';
            break;
        case 5:
            messageStr += ' FIVE ';
            break;
        case 6:
            messageStr += ' SIX ';
            break;
        case 7:
            messageStr += ' SEVEN ';
            break;
        case 8:
            messageStr += ' EIGHT ';
            break;
        case 9:
            messageStr += ' NINE ';
            break;
       default:
            messageStr += ' ';
            break;
    }
}
console.log(messageStr);





