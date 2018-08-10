// creation of arrays
var array = [10,20,30,40,50];

// Accessing an array and its properties
console.log(array);
console.log(array[0]); // 10
console.log(array[3]); // 40

// Access not existed property from an array
console.log(array[100]); // undefined

// adding properties to an array
array[5] = 60;
console.log(array);

// Accessing length of an Array
console.log('Array length is : ' + array.length);

// reverse the array using reverse()
array = [10,20,30,40,50];
console.log(array);
array.reverse();
console.log(array);

// Remove the first value of the array: shift()
array = [10,20,30,40,50];
array.shift(); // removes '10'
console.log(array);

// Add value to front of the array:unshift()
array = [10,20,30,40,50];
array.unshift(60);
console.log(array);

// Remove the last value of the array: pop()
array = [10,20,30,40,50];
array.pop(); // removes '50'
console.log(array);

// Add value the end of the array: push()
array = [10,20,30,40,50];
array.push(60); // added '60'
console.log(array);

// Remove an element from an Array , Arguments: colors.splice(pos,n):
array = [10,20,30,40,50];
array.splice(2); // removes all from 30
console.log(array);

array = [10,20,30,40,50];
array.splice(2,1); // removes  30
console.log(array);

array = [10,20,30,40,50];
array.splice(2,1,60); // replaces 30 with 60
console.log(array);

// Create a copy of an array. Typically assigned to a new variable:slice();
var arr1 = [10,20,30,40,50];
var arr2 = arr1.slice(); // separate copy
console.log(arr2);

// indexOf()
array = [10,20,30,40,50];
var a = 40;
if(array.indexOf(a) === -1){
    // value NOT exists
    console.log("The value " + a + " is not exists");
}
else{
    console.log("The value " + a + " is exists at : "
                                        + array.indexOf(a));
}

// Join()
array = [10,20,30,40,50];
var strArray = array.join(" - ");
console.log(strArray);
console.log(typeof  strArray); // string

// loop through the array
array = [10,20,30,40,50];
array.forEach(function (elem) {
   console.log(elem);
});


// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

var colorsArray = [];
function addColor() {
    var color = document.querySelector('#color').value;
    if(colorsArray.indexOf(color) === -1){
        colorsArray.push(color);
    }
    else {
        alert('Dude!! ' + color + ' Already Exists.')
    }
    document.querySelector('#display').textContent = colorsArray.join(" , ");
    document.querySelector('#display').style.color = color;
    document.querySelector('#color').value = '';
}
function deleteColor() {
    var color = document.querySelector('#color').value;
    colorsArray.splice(colorsArray.indexOf(color),1);
    document.querySelector('#display').textContent = colorsArray.join(" , ");
    document.querySelector('#color').value = '';
}








