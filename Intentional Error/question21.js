// Define an array of fruits
var fruits = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];
// Accessing invalid index  to produce an index error
//console.log(fruits[10]); // Attempting to access index 10 which doesn't exist
// This line won't be reached because an error will be thrown above
console.log("This line will not be executed due to the index error.");
// Accessing a valid index
console.log(fruits[2]); // Outputs: Orange
