const readLine = require('readline-sync')
//1
let answer = Number(readLine.question("Pick a number\nYour number: "));
let secondanswer = Number(readLine.question("Pick a second number\nYour number: "));
let total = answer + secondanswer;{
    console.log(total)
}
//2
let equation = Number(readLine.question("Pick a number\nYour number: "));
let anotheranswer = Number(readLine.question("Pick a second number\nYour number: "));
let sum = equation - anotheranswer;{
    console.log(sum)
}
//3
let ok = Number(readLine.question("Pick a number\nYour number: "));
let okay = Number(readLine.question("Pick a second number\nYour number: "));
let alr = ok * okay;
{
    console.log(alr)
}
//4
let mhm = Number(readLine.question("Pick a number\nYour number: "));
let mh = Number(readLine.question("Pick a second number\nYour number: "));
let m = mhm / mh;
{
    console.log(m)
}
//5
let a = Number(readLine.question("Pick a number\nYour number: "));
let b = Number(readLine.question("Pick a second number\nYour number: "));
let c = a % b;
{
    console.log(c)
}
//6
let nameone = readLine.question("Whats Your First Name\nYour First Name: ");
let nametwo = readLine.question("Whats Your Last Name\nYour Last Name: ");

    console.log(` Greeting ${nametwo}, ${nameone} `);

    //7
let title = readLine.question("Whats Your Title\nYour Title: ");
let lastnameagain = readLine.question("Whats Your Last Name\nYour Last Name: ");
let suffix = readLine.question("Whats Your Suffix\nYour Suffix: ");

console.log(` Greetings ${title}, ${lastnameagain}, ${suffix} `);

//8
let streetnumber = readLine.question("Whats Your Street Number\nYour Street Number: ");
let streetname = readLine.question("Whats Your Street Name\nYour Street Name: ");
let streettype = readLine.question("Whats Your Street Type\nYour Street Type: ");
let city= readLine.question("Whats Your City\nYour City: ");
let state = readLine.question("Whats Your State\nYour State: ");
let zipcode = readLine.question("Whats Your Zip Code\nYour Zip Code: ");
console.log(` Greetings ${zipcode}, ${state}, ${city} ${streettype}, ${streetname}, ${streetnumber} `);