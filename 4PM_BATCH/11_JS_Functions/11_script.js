//creation of a simple function with no args and execute a function
function greet() { // function definition
    console.log("Good Morning");
}
greet(); // function call or function execution

//creation of a simple function with args
function greetArgs(name) {
    console.log(" Hello " + name + " Good Morning");
}
greetArgs("John");

// executing a function with less number of params
function greetLessArgs(name,age) {
    console.log("Hello " + name + " You are " + age + " Years of Old !!");
}
greetLessArgs('John');

//executing a function with more number of params
function greetMoreArgs(name,age) {
    console.log("Hello " + name + " You are " + age + " Years of Old !!");
}
greetMoreArgs("Williams",40,'Manager');

//function overloading is not possible here


// functions with return values
function greetReturn(name) {
    var greeting = "Good Morning " + name;
    return greeting;
}
var greetMsg = greetReturn("John");
console.log(greetMsg);

//function with empty return /no return
function greetEmptyReturn(name) {
    var greeting = "Good Morning " + name;
}
var emptyMsg = greetEmptyReturn("Williams");
console.log(emptyMsg); // undefined

// function Expressions with name and execution


// Anonymous Function Expression and execution


// Functions as arguments without args



// Functions as arguments with args args


// Functions in Objects and Execution


// this keyword for accessing objects props in function


// Coding Exercise 1
/*
Create an employee obj and address object in it. add a property called
isFromState() to return true if a person from that state.
 */


// Default Function Arguments (arguments)

