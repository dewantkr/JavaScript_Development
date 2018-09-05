// creation of arrays
var array = [10,20,30,40,50];

// Accessing an array and its properties
console.log(array);
console.log(array[0]); // 10

// Access not existed property from an array
console.log(array[100]); // undefined

// adding properties to an array
array[5] = 60;
console.log(array);

// Accessing length of an Array
console.log('Length of the array is : ' + array.length);

// reverse the array using reverse()
array = [10,20,30,40,50];
console.log('Before : ' + array.join());
array.reverse();
console.log('After : ' + array.join());

// Remove the first value of the array: shift()
array = [10,20,30,40,50];
console.log('Before : ' + array.join());
array.shift();
console.log('After : ' + array.join());

// Add value to front of the array:unshift()
array = [10,20,30,40,50];
console.log('Before : ' + array.join());
array.unshift(60);
console.log('After : ' + array.join());

// Remove the last value of the array: pop()
array = [10,20,30,40,50];
console.log('Before : ' + array.join());
array.pop();
console.log('After : ' + array.join());

// Add value the end of the array: push()
array = [10,20,30,40,50];
console.log('Before : ' + array.join());
array.push(60);
console.log('After : ' + array.join());

// Remove an element from an Array , Arguments: colors.splice(pos,n):
array = [10,20,30,40,50];
console.log('Before : ' + array.join());
array.splice(1,1); // removes 20
console.log('After : ' + array.join());

// Create a copy of an array. Typically assigned to a new variable:slice();
var array1 = [10,20,30,40,50];
var array2 = array1.slice(); // create a separate copy
if(array1 === array2){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}

// indexOf()
array = [10,20,30,40,50];
var num = 200;
if(array.indexOf(num) === -1){
    console.log('The value is not Exists');
}
else{
    console.log('The value exists @ index : '
                                      + array.indexOf(num));
}

// Join()
array = [10,20,30,40,50];
var strArray = array.join(" - ");
console.log(strArray);

// Prove an array is an Object

// Logic for the Application
var itemsArray = [];
var h1Element = document.querySelector('#display');
function addItem() {
    var item = document.querySelector('#item').value;
    if(itemsArray.indexOf(item) === -1){
        itemsArray.push(item);
    }
    else{
        alert('Dude!! the Item already Exists!!');
        document.querySelector('#item').value = '';
    }
    document.querySelector('#item').value = '';
    h1Element.textContent = itemsArray.join(" , ");
}
function deleteItem() {
    var item = document.querySelector('#item').value;
    itemsArray.splice(itemsArray.indexOf(item),1);
    document.querySelector('#item').value = '';
    h1Element.textContent = itemsArray.join(" , ");
}


// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
