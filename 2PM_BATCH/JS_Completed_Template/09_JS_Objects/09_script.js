var employee = {
    name : 'John',
    age : 40,
    designation : 'Manager',
    address : {
        city : 'Hyderabad',
        state : 'Telangana'
    }
};

// access the obj
console.log(employee);

// add a prop 'salary' to employee obj
employee.salary = 80000;
console.log(employee);

// add a prop 'country' to address obj
employee.address.country = 'India';
console.log(employee.address);

// Dot Notation & [] Notation
console.log(employee.name); // John
console.log(employee["name"]); // John

// Accessing Dynamic Properties using [] Notation
var dynaProp = 'name';
console.log(employee[dynaProp]); // John

dynaProp = 'age';
console.log(employee[dynaProp]); // 40














