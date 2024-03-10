// Tests for equality and inequality with strings
var string1 = "hello";
var string2 = "world";
console.log(string1 === string2); // false
console.log(string1 !== string2); // true
// Tests using the lower case function
var string3 = "Hello";
var string4 = "hello";
console.log(string3.toLowerCase() === string4.toLowerCase()); // true
// Numerical tests
var num1 = 5;
var num2 = 10;
console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // false
console.log(num1 < num2); // true
console.log(num1 >= num2); // false
console.log(num1 <= num2); // true
// Tests using "and" and "or" operators
var condition1 = true;
var condition2 = false;
console.log(condition1 && condition2); // false
console.log(condition1 || condition2); // true
// Test whether an item is in an array
var array = [1, 2, 3, 4, 5];
var item1 = 3;
var item2 = 6;
console.log(array.includes(item1)); // true
console.log(array.includes(item2)); // false
// Test whether an item is not in an array
console.log(!array.includes(item1)); // false
console.log(!array.includes(item2)); // true
