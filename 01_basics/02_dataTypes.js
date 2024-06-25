"use strict"; // Enable strict mode to avoid common programming errors in JavaScript (optional)
// treats all JS code as newest version of JavaScript

alert("Data Types in JavaScript") // Alert box with message 
// we are using nodejs to run this file not browser, so alert will not work here.


// Data Types in JavaScript

let name = "Devansh"; // String
let age = 20; // Number
let isApproved = true; // Boolean
let firstName = undefined; // Undefined
let lastName = null; // Null

// JavaScript is a dynamically typed language, so we don't have to specify the data type of a variable.
// JavaScript automatically assigns the data type to a variable based on the value it holds.

// primitive data types => string, number, bigint, boolean, undefined, null, symbol

// Number => range is -2^53 to 2^53
// bigint => also a number but can hold larger numbers than number data type
// string => sequence of characters
// boolean => true or false
// undefined => variable is declared but not assigned any value
// null => explicitly assigned no value
// symbol => unique identifier

// reference data types => object, array, function

// object => collection of key value pairs
// array => collection of elements
// function => block of code that can be called by name

console.log(typeof null) // object
console.log(typeof undefined) // undefined
