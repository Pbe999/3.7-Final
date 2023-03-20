//parameters are placeholder variables that allow
//us to reuse functions

//Examples 1: Without Parameter(s)
function printyes( ){
    console.log('yes');
}
printyes();

//Example 2: With Parameter
function printtext(text){   //text is a parameter
    console.log(text);
}

printtext("Happy Thursday");
printtext("Tomorrow is Friday!");

//Return statements provide values to the rest of the program

//Returned values can be used by other parts of the code

//console.log only produces "side effects" that cannot be used by other lines of the code

//Example 3: Without Return
function double(num){
    console.log(num*2);
}

double(3);
double(67);

//Example 4: With Return
function triple(num){
    return (num*3);
}

//console.log(triple(7));
let answer = triple(12);
answer -=2;
console.log(answer);

//Example 5: Another Return
function loselife(lives){
    return (lives - 1);
}

let totalLives= 10;
totalLives = loselife(totalLives);
console.log(totalLives);

//Scope is the part of the program where the binding
//(value of a variable) is visible. Global scope:
//created outside all {} amd accessible everywhere
//Local scope: Created inside a specific {} and only
//accessible inside those {}

//Example 6: Different Scopes
let x = 10; //global x
if (true) {
    let y = 20; //local y
    let z = 30; //local z
    console.log(x + y + z);
}
console.log(x); //z and y cannot be used at end of code because it is inside of curly brackets. x is outside curly brackets and can be used outside of them

//Example 7: no naming conflict
function half(n){
    return(n/2);
}

let n = 10; //global n
console.log(half(100)); //plugs in 100 for n then gets divided by 2 and becomes 50
console.log(n); //this n is global and prints out 10 because let n = 10 is outside of the brackets