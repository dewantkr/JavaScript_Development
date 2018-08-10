//creation of a simple function with no args and execute a function
function greet() { // function definition
    console.log("Good Morning");
}
greet(); // function execution / call

//creation of a simple function with args
function greetArgs(name) {
    console.log("Hello " + name + " Good Morning");
}
greetArgs("John");

// executing a function with less number of params
function greetLessArgs(name,age) {
    console.log("Hello " + name + " You are " + age + " Years Old");
}
greetLessArgs('John');

//executing a function with more number of params
function greetMoreArgs(name,age) {
    console.log("Hello " + name + " You are " + age + " Years Old");
}
greetMoreArgs('Williams',35,'Manager');

//function overloading is not possible here

// functions with return values
function greetReturn(name) {
    var greeting = "Good Morning " + name;
    return greeting;
}

var greetMsg = greetReturn('John');
console.log(greetMsg);

//function with empty return /no return
function greetEmptyReturn(name) {
    var greeting = "Good Morning " + name;
}
var greetMessage = greetEmptyReturn('Williams');
console.log(greetMessage);

// function Expressions
var greetFn = function(name) {
  console.log("Hello " + name + " I am from Function Expression");
};

greetFn('Williams');


// Functions as arguments without args
function greet1(name) {
    console.log("Iam from Greet1 " + name);
}
function greet2(name) {
    console.log("Iam from Greet2 " + name);
}
function greetCaller(fName,name) {
    fName(name);
}
greetCaller(greet2,'John');


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

var employee = {
    name : 'Rajan',
    age : 22,
    course : 'Engg',
    address : {
        city : 'Hyderabad',
        state : 'Telangana'
    },
    isFromState : function (state) {
        return (this.address.state === state);
    }
};
console.log('is From Telangana ? ' + employee.isFromState('Telangana'));



// Default Function Arguments (arguments)

function defaultParams(){
    console.log(arguments);
}
defaultParams("John",40,'Manager');

