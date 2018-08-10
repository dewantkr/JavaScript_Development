// Block scoping for FOR loop
for(var i=0; i<=10; i++){

}
console.log(i); // 11

//Block scoping for if Block
var course = 'mpc';
if(course === 'mpc'){
    var dept = "Engineering";
}
console.log(dept); // Engineering

// Function Scoping
function allocateDept() {
    if(course === 'mpc'){
        var college = 'NIT';
    }
}
allocateDept();
//console.log(college); // cannot Access child variable from parent

// coding exercises

// 1) output ? ANS : no output

var top = 20;
function something() {
    var inner = 30;
    console.log(inner);
}

// 2) output ? ANS : 30
var top = 20;
function something() {
    var inner = 30;
    console.log(inner);
}
something();

// 3) output ? ANS : 30
var top = 20;
var inner = 50;
function something() {
    var inner = 30;
    console.log(inner);
}
something();

// 4) output ? ANS : 50

var top = 20;
var inner = 50;
function something() {
    var inner = 30;
}
something();
console.log(inner);

// 6) output ? ANS : Hello John
var name = "Naveen";
function greet(name) {
    console.log("Hello " + name);
}
greet("John");

//  IIFE example
// Immediately Invoked Function Expression
course = "mpc";
(function(){
    var dept = "Engineering";
    console.log(dept);
})();


// Read and Write Operations for variables


// Read and Write Operations for Functions


// Implications of Read and Write Operations

