//creation of a simple function with no args and execute a function
function greet() { // function definition
    var greeting = "Good Morning";
    console.log(greeting);
}
greet();// function call

//creation of a simple function with args
function greetArgs(name) {
    var greeting = "Good Morning " + name ;
    console.log(greeting);
}
greetArgs('John');

// executing a function with less number of params
function greetLessArgs(name,age) {
    var greeting = "Hello " + name + " You are " + age + " Years of Old!!";
    console.log(greeting);
}
greetLessArgs('John');

//executing a function with more number of params
function greetMoreArgs(name) {
    var greeting = "Hello " + name + " Good Morning";
    console.log(greeting);
}
greetMoreArgs('John',40);

//function overloading is not possible here

// functions with return values
function greetReturn(name) {
    var greeting = "Good Afternoon " + name;
    return greeting;
}
var output = greetReturn('Williams');
console.log(output);

//function with empty return /no return
function greetNoReturn(name) {
    var greeting = "Good Morning " + name;
}
output = greetNoReturn('Rajan');
console.log(output);

// function Expressions with name and execution
var greetExp = function greet() {
    console.log("Iam a function Expression");
};
greetExp();

// Anonymous Function Expression and execution
var greetAnonymous = function(name) {
  console.log(name + " !! Iam Am From Anonymous Function Expression");
};
greetAnonymous('John');

// Functions as arguments without args
function greet1(name) {
    console.log(name + ' I am from Greet 1');
}
function greet2(name) {
    console.log(name + ' I am from Greet 2');
}
function greetEngine(fName1,name) {
    fName1(name);
}
greetEngine(greet2,greet1,'Williams');

// Functions in Objects and Execution
var student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function () {
        console.log(this.firstName + " " + this.lastName);
    }
};
console.log(student.fullName());


// Coding Exercise 1
/*
Create an employee obj and address object in it. add a property called
isFromState() to return true if a person from that state.
 */
var employee = {
  name : 'John',
  age : 35,
  designation : 'Manager',
  address : {
      city : 'Hyderabad',
      state : 'Telangana',
      country : 'India'
  },
  isFromState : function(state) {
      return(state === this.address.state);
  }
};
console.log('Is from TS ? : ' + employee.isFromState("Telangana"));

// Default Function Arguments (arguments)
function defaultArgs() {
    console.log(arguments);
}
defaultArgs('John',40,'Manager');