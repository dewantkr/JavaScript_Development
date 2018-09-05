// Block scoping for FOR loop
for(var i=0; i<=10; i++){

}
console.log(i); // 11

//Block scoping for if Block
var course = 'CSE';
if(course === 'CSE'){
    var jobTitle = 'Software Engineer';
}
console.log(course); // CSE
console.log(jobTitle); // Software Engineer

// Function Scoping
var person = 'rich';
function getCar() {
    if(person === 'rich'){
        var car = 'Range Rover';
    }
}
getCar();
console.log(person);//rich
// console.log(car); // Cannot Access the 'car'

// coding exercises

// 1) output ? : No Output

var top = 20;
function something() {
    var inner = 30;
    console.log(inner);
}

// 2) output ? Output : 30
var top = 20;
function something() {
    var inner = 30;
    console.log(inner);
}
something();

// 3) output ? Output : 30
var top = 20;
var inner = 50;
function something() {
    var inner = 30;
    console.log(inner);
}
something();

// 4) output ? Output : 50

var top = 20;
var inner = 50;
function something() {
    var inner = 30;
}
something();
console.log(inner);

// 6) output ? Output : Hello John
var name = "Naveen";
function greet(name) {
    console.log("Hello " + name);
}

greet("John");

//  IIFE example
var courseCompleted = true;
(function () {
    if(courseCompleted === true){
        var status = 'You will get a Job';
        console.log(status);
    }
})();


// Read and Write Operations for variables


// Read and Write Operations for Functions


// Implications of Read and Write Operations

