//1
const readLine = require('readline-sync')
let answer = readLine.question("Want to heard a Joke?\nYour answer: ");
if (answer == 'yes') {
    answer = readLine.question('Why Did The Chicken Cross the Road?\nYour answer:');
}
if (answer == 'why') {
    console.log('To Get to the other side');
}else {
    console.log('Okay');
}

//2
let program = readLine.question("Give me a number\nNumber: ");
if (program % 2 ==0){
    console.log('divisible by 2');
}
else{
    console.log("not divisible by 2")
}
//3
let month = readLine.question("Give me a number\nNumber: ");
if (month % 2 ==0){
    console.log('divisible by 2');
}
if (month % 3 ==0) {
    console.log("divisible by 3");
}
if (month % 4 == 0) {
    console.log("divisible by 4");
}
if (month % 5 == 0) {
    console.log("divisible by 5");
}
if (month % 6 == 0) {
    console.log("divisible by 6");
}
//4
let  nice= Number(readLine.question("Give me a number\nNumber: "));
if (nice == 69){
    console.log('correct');
}
if(nice>69){
    console.log('try lower');
}
if (nice<69){
    console.log("try higher");
}
//5

let  cost= Number(readLine.question("What is the cost\nCost: "));
let tax = cost * .08;
let amount = cost + tax;
console.log(amount.toFixed(2));

//6

let  money= Number(readLine.question("What is the cost\nCost: "));

    if (money<=0)
{
    console.log('invalid');
}

else {
let taxed = cost * .08;
let fianl = cost + tax;
console.log(amount);
}

//7-
let  meal= Number(readLine.question("What was the cost of the meal\nCost: "));
let greatservice=(readLine.question("Was the service great?\nyes or no: "));
if (greatservice == 'yes'){
    let tip = meal * .2;
   console.log(tip);
}
if (greatservice == 'no')
{
    console.log('okay');
let goodservice=(readLine.question("Was the service good?\nyes or no: "));}

if (goodservice == 'yes'){
    let tips = meal * .15;
    console.log(tips);
}
if (goodservice == 'no'){
    console.log('okay');
    let averageservice=(readLine.question("Was the service average?\nyes or no: "));
}
if (averageservice == 'yes'){
    let tipe = meal * .1;
    console.log(tipe);
}