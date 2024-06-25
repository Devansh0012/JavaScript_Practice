const accountId = 120932 // Recommended to use const in modern JavaScript
let accountEmail = "devansh@google.com" // Recommended to use let in modern JavaScript
var accountPassword = "password123" // Not recommended to use var in modern JavaScript
accountCity = "Varanasi" // No keyword used, so it is a global variable
let accountState; // Declaring variable without value, so it is undefined
// accountId = 123456 // Error: Assignment to constant variable. Not allowed
/*
Difference between let and var
var is function scoped and let is block scoped variable declaration keyword in JavaScript
var can be re-declared and updated within the same scope
let can be updated but not re-declared within the same scope
let can be block scoped, var can't be block scoped
let is the preferred way of declaring variables in JavaScript
var is not recommended to use in modern JavaScript
Example:
var x = 10
{
  var x = 20
}
console.log(x) // Output: 20
var x = 10
{
  let x = 20
}
console.log(x) // Output: 10
*/

accountEmail = "dev@abc.com" // Re-assigning value to let variable
accountPassword = "password@123" // Re-assigning value to var variable
accountCity = "Pune" // Re-assigning value to global variable

console.log(accountId) // simple log
console.log(accountState); // log undefined variable value (no value assigned)
console.log(accountEmail, accountPassword, accountCity) // Normal format
console.log(accountEmail + " " + accountPassword + " " + accountCity) // Concatenation
console.log(`${accountEmail} ${accountPassword} ${accountCity}`) // Template literals
console.table([ accountEmail, accountPassword, accountCity ]) // Table format with index from 0
console.table({ accountEmail, accountPassword, accountCity }) // Table format with index name as key

