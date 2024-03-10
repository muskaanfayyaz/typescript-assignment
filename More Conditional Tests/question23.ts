// Tests for equality and inequality with strings
const string1: string = "hello";
const string2: string = "world";

console.log(string1 === string2); // false
console.log(string1 !== string2); // true

// Tests using the lower case function
const string3: string = "Hello";
const string4: string = "hello";

console.log(string3.toLowerCase() === string4.toLowerCase()); // true

// Numerical tests
const num1: number = 5;
const num2: number = 10;

console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // false
console.log(num1 < num2); // true
console.log(num1 >= num2); // false
console.log(num1 <= num2); // true

// Tests using "and" and "or" operators
const condition1: boolean = true;
const condition2: boolean = false;

console.log(condition1 && condition2); // false
console.log(condition1 || condition2); // true

// Test whether an item is in an array
const array: number[] = [1, 2, 3, 4, 5];
const item1: number = 3;
const item2: number = 6;

console.log(array.includes(item1)); // true
console.log(array.includes(item2)); // false

// Test whether an item is not in an array
console.log(!array.includes(item1)); // false
console.log(!array.includes(item2)); // true
