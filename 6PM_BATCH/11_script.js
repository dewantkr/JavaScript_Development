//creation of a simple function with no args and execute a function
function greet() { // declaration or Definition
    console.log('Good Evening');
}
greet(); // function execution

//creation of a simple function with args
function greetArgs(name) {
    console.log('Good Evening ' + name);
}
greetArgs('John');

// executing a function with less number of params
function greetLessArgs(name,age) {
    console.log('Hello ' + name + ' You are ' + age + ' Years of Old');
}
greetLessArgs('John');

// executing a function with more number of params
function greetMoreArgs(name,age) {
    console.log('Hello ' + name + ' You are ' + age + ' Years of Old');
}

greetMoreArgs('Williams',35,50000);

//function overloading is not possible here


// functions with return values
function greetReturn(name) {
    var greeting = "Good Evening " + name;
    return greeting;
}
var greet = greetReturn('John');
console.log(greet);

//function with empty return /no return
function greetEmptyReturn(name) {
    var greeting = "Good Evening " + name;
}
var greetMsg = greetEmptyReturn('Williams');
console.log(greetMsg); // undefined

// function Expressions with name and execution
var greet = function greetFn(name) {
  console.log('Iam from Function Expression ' + name);
};
greet('John');

// Anonymous Function Expression and execution
var greetAnonymous = function(name) {
  console.log('Iam from Anonymous Function Expression ' + name);
};
greetAnonymous('Williams');

// Functions as arguments without args
function greet1(name) {
    console.log('Iam from Greet 1 ' + name);
}

function greet2(name) {
    console.log('Iam from Greet 2 ' + name);
}

function greetEngine(fName,name) {
    fName(name);
}

greetEngine(greet2,'Williams');

// Functions in Objects and Execution
var student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(student.fullName());

// Coding Exercise 1
/*
Create an employee obj and address object in it. add a property called
isFromState() to return true if a person from that state.
 */


// Default Function Arguments (arguments)

