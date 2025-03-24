"use strict";
// Static typing
// Typescript is a statically typed language
// This means that the type of a variable is known at compile time
// This allows for better error checking and code completion
let message = "Hey there!";
// Error - Type 'number' is not assignable to type 'string'.
// message = 10;
let number = 40;
let check = true;
console.log(`Message: ${message}, Type: ${typeof message}, Number: ${number}, Type: ${typeof number}, Check: ${check}, Type: ${typeof check}`);
// any - The any type is used to opt-out of type checking
// Varaible declared with any can be assigned to any type of value
let x;
console.log(`X: ${x}, Type: ${typeof x}`);
x = 20;
console.log(`X: ${x}, Type: ${typeof x}`);
x = "Hello";
console.log(`X: ${x}, Type: ${typeof x}`);
x = true;
console.log(`X: ${x}, Type: ${typeof x}`);
// union type - allows a variable to have multiple types
let y; // y can be a number or a string
y = 20;
console.log(`Y: ${y}, Type: ${typeof y}`);
y = "Hello";
console.log(`Y: ${y}, Type: ${typeof y}`);
// Error - Type 'boolean' is not assignable to type 'string | number'.
// y = true
function addNumber(a, b) {
    return a + b;
}
console.log(`Add Number: ${addNumber(10, 20)}`);
let result = addNumber(30, 42);
console.log(`Result: ${result}`);
let arr = [1, 2, 3, 4, 5];
