// Create two variables and display their sum
var a = 10;
var b = 20;
var sum = a + b;
console.log("Sum of a , b is : " + sum);
document.getElementById('display').innerHTML = "Sum of a , b is : " + sum;

// Find the biggest value between 2 numbers
var p = 20;
var q = 30;
if(p > q){
    console.log("The big value is : " + p);
}
else{
    console.log("The big value is : " + q);
}

// Find the biggest value among 3 numbers
var x = 10;
var y = 20;
var z = 30;
if(x > y && x > z){
    console.log("The Biggest value is : " + x);
}
else if(y > z){
    console.log("The Biggest value is : " + y);
}
else{
    console.log("The Biggest value is : " + z);
}