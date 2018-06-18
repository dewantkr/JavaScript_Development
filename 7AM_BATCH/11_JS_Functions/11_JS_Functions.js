//creation of a simple function with no args and execute a function
function greet() {
    console.log('Iam a no-args function');
}
greet();

//creation of a simple function with args
function greetArgs(name) {
    var greetingMsg = "Good Morning " + name;
    console.log(greetingMsg);
    document.getElementById('display').innerHTML = greetingMsg;
}

greetArgs('John');

// executing a function with less number of params
function greetLessArgs(name,age) {
    var greetMsg = "Hello " + name + " You are " + age + " Years of Old !! ";
    console.log(greetMsg);
    document.getElementById('display').innerHTML = greetMsg;
}
greetLessArgs('John');

//executing a function with more number of params
function greetMoreArgs(name,age) {
    var greetMsg = "Hello " + name + " You are " + age + " Years of Old !! ";
    console.log(greetMsg);
    document.getElementById('display').innerHTML = greetMsg;
}
greetMoreArgs('John',40,'Manager');

//function overloading is not possible here
// no example, see above functions

// functions with return values
function greetReturn(name) {
    var greet = "Hello " + name + " Iam from greetReturn Function";
    return greet;
}

var greetingMsg  = greetReturn('Williams');
console.log(greetingMsg);
document.getElementById('display').innerHTML = greetingMsg;

//function with empty return /no return
function greetEmptyReturn(name) {
    var greet = "Hello " + name + " I am from greetEmptyReturn Function";
}

var greetMsg = greetEmptyReturn('John');
console.log(greetMsg);
document.getElementById('display').innerHTML = greetMsg;

// function Expressions with name and execution
var greetFn = function greet() {
    var output = "Hello I am from function Expression";
    console.log(output);
    document.getElementById('display').innerHTML = output;
};

greetFn();

// Anonymous Function Expression and execution
var greetAnonymousFn = function(name) {
    var output = "Hello " + name + " I am from greetAnonymousFn function";
    console.log(output);
    document.getElementById('display').innerHTML = output;
};

greetAnonymousFn('John');

// Functions as arguments without args
function greet1(name) {
    var output = "Hello " + name + " Iam from greet1 function";
    console.log(output);
    document.getElementById('display').innerHTML = output;
}
function greet2(name) {
    var output = "Hello " + name + " Iam from greet2 function";
    console.log(output);
    document.getElementById('display').innerHTML = output;
}
function greetEngine(fName,name) {
   fName(name);
}
greetEngine(greet1,'Williams');
greetEngine(greet2,'John');

// Functions as arguments with args args


// Functions in Objects and Execution


// this keyword for accessing objects props in function


// Coding Exercise 1
/*
Create an employee obj and address object in it. add a property called
isFromState() to return true if a person from that state.
 */


// Default Function Arguments (arguments)
