let answerList = ['yes','no','who knows','im not sure','quite possibly','yeah','i dont think so','future unclear'];
const readline = require('readline-sync');

readline.question('This program has been created to act as a magic 8 ball and give a response to any question you ask.Do you understand?:');
readline.question('Enter your yes or no question:');



let randomNum = Math.floor(Math.random()*answerList.length);
console.log(randomNum);
let randomAnswer = answerList[randomNum];
console.log(randomAnswer);

readline.question('Did you enjoy the program and do you have any feedback?');