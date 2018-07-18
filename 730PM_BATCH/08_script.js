// If Else condition Example
var courseCompleted = true;
var practiceCompleted = false;
if(courseCompleted && practiceCompleted){
    console.log('You will get a job Soon');
}
else if(courseCompleted &&
    !practiceCompleted){
    console.log('Keep practicing');
}
else{
    console.log('Please Join any Course');
}

// For loop Example to display from 1 - 10 values
var output = '';
for(var i = 1; i<= 10; i++){
    if(i <= 9){
        output += i + " , ";
    }
    else{
        output += i;
    }
}
console.log(output);
document.getElementById('display')
    .innerHTML = output;

// While loop Example to display from 1 - 10 values


// Do while loop Example to display from 1 - 10 values


// Switch Statement Example to display full Day
