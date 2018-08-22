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


// Do while loop Example to display from 1 - 10 values


// Switch Statement Example to display full Day
