//Variables store data for later use

//Create a variable with let
//Only use let when creating a new variable

let myVariable = "value";
let myNewVariable = 7;
let myBool = true;

// Accessing variable values

console.log(myVariable);

console.log(myNewVariable + 5);

console.log(myBool && true);

//Update value stored in variable

myNewVariable = 10;

console.log(myNewVariable);



// Increase by 1

myNewVariable = myNewVariable + 1;

console.log(myNewVariable);



// Decrease by 1

myNewVariable = myNewVariable - 1;

console.log(myNewVariable);



// Multiply by 3

myNewVariable = myNewVariable * 3;

console.log(myNewVariable);



// Divide by 3

myNewVariable = myNewVariable / 3;

console.log(myNewVariable);



// Divide and return the remainder

myNewVariable = myNewVariable % 2; // 10/2 = 5 with 0 remainder

console.log(myNewVariable);



// Shortcuts!

let x=100;

x = x+1; //add 1
console.log(x);
x++; //add 1
console.log(x);


x = x - 1; //subtract 1
console.log(x);
x--; //subtract 1
console.log(x);


x = x + 5; //add 5
console.log(x);
x+= 5; //add 5
console.log(x);


x = x - 2; //subtract 2

x -= 2; //subtract 2



x = x * 10; //times 10

x *= 10; //times 10



x = x / 10; //divide by 10

x /= 10; //divide by 10





// Keywords

const pi = 3.14;

const userName = "myUser123";

// constants cannot change values

var old = 123;

// var is the old way to create variables. Don't use it.

let secret=10;
let guess=5;
console.log(guess==secret);
