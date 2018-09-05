//creation of objects , adding properties ,  retrieval
var car = {};
car.model = 'BENZ';
car.year = 2018;
car.mileage = '10kmpl';
console.log(car);

//declaring Object Literals
var fridge = {
  company : 'Samsung',
  color : 'silver',
  capacity : '300Ltr',
  price : 30000
};
console.log(fridge);

//Access existing properties
console.log(fridge.company); // Samsung

//Access Non Existing Properties
console.log(fridge.size); // Undefined

// Usage of Dot and [] notations
console.log(fridge.color); // Silver
console.log(fridge['color']); // Silver

// use of [] notation where dot is not used for invalid identifiers
// use of [] notation for accessing dynamic properties
var mobile = {
    company : 'Lenovo',
    color : 'black',
    RAM : '2GB',
    capacity : '16GB',
    100 : 'test' // invalid property
};

var dynaProp = 'company';
console.log(mobile[dynaProp]); // Lenovo

dynaProp = 'color';
console.log(mobile[dynaProp]); // black

// nested Objects creation
var student = {
  name : 'Rajan',
  age : 22,
  course : 'Engineering',
  address : {
      city : 'Hyderabad',
      state : 'Telangana',
      country : 'India'
  }
};
console.log(student);

//Accessing them using dot notation
console.log(student.address.city); // Hyderabad

//Accessing them using mix of dot and [] notation
console.log(student.address['city']); // Hyderabad

// Add some properties to nested object and access them
student.address.street = 'Ameerpet';
console.log(student.address);

// === operator demo for objects (if pointing to same location in memory)
var employee1 = {
    name : 'John',
    age : 40
};

var employee2 = employee1;
if(employee1 === employee2){
    console.log('Both are Equal');
}
else{
    console.log('both are NOT Equal');
}

// deleting a property from an object
delete  employee1.name;
console.log(employee1);
