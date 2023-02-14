const readLine = require('readline-sync');
//says that it needs to come from readline
let answer = readLine.question("What day is it?\nYour answer: ");
console.log(answer);
//asks what day it si then asks for an answer

let username = readLine.question("Enter username: ");
let password = readLine.question("Enter password: ");
//asks for a username then password
if (password == "abc"){
    console.log(`Welcome ${username}`);
} else {
    console.log("invalid");
}
//password must be abc and if it is then it says Welcome followed by the input username. If the password is anything else then invalid will pop up and next code will run "Enter current price"

let currentPrice = readLine.question("Enter current price: ");
let originalPrice = readLine.question("Enter original price: ");
let diff = originalPrice-currentPrice;
let discount = (diff/originalPrice).toFixed(2);
console.log(`discount: ${discount}`);
//This is how u can do math with input

// Exponents
let base = Number(readLine.question("Enter the base: "));
let exp = Number(readLine.question("Enter the exponent: "));
let answer2 = base ** exp;
console.log(`${base} to the power of ${exp} = ${answer2}`);
//must enter digits ONLY that what Number does
//Must be capital N


// Rounding
console.log(5.7);
console.log(Math.round(5.7));
console.log(5.3);
console.log(Math.round(5.3));
console.log(-5.3);
console.log(Math.round(-5.3));