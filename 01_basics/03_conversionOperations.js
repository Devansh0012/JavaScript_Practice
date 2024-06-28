let score = 33
console.log(typeof score) // number

let scoreString = score.toString() // convert number to string
console.log(typeof scoreString) // string

let stringScore = '33'
console.log(typeof stringScore) // string

let stringScoreNumber = parseInt(stringScore) // convert string to number
console.log(typeof stringScoreNumber) // number

/*
Conversion Operations
- Number to String: number.toString()
- String to Number: parseInt(string), parseFloat(string)
- String to Number: Number(string)
- Number to Boolean: Boolean(number)
- String to Boolean: Boolean(string)
- Number to String: String(number)
- Boolean to String: String(boolean)
- Boolean to Number: Number(boolean)
*/
