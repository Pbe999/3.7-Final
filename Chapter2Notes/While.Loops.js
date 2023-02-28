const readLine = require('readline-sync');

//11
let answer = readLine.question("Do you want to quit?: ");

while (answer != "Y" && answer != "N"){

    console.log("case sensitive");
    answer = readLine.question("Enter y or n: ");
}
console.log(`you decided ${answer}`);
//12
let nother = readLine.question("Do you want to quit: ");

while (nother != "Y" && nother != "N" && nother != "y" && nother != "n"){

    console.log("case sensitive");

    nother = readLine.question("Enter y or n: ");

}
console.log(`you decided ${nother}`);
//13
let enother = readLine.question("Pick One A,B, or C: ");

while (enother != "A" && enother != "B" && enother != "C"){

    console.log("okay");

    enother = readLine.question("Option A , B , or C ");

}
console.log(`you decided ${enother}`);
//14
let ok = readLine.question("Pick an option 1 , 2, or 3: ");

while (ok != "1" && ok != "2" && ok != "3"){

    console.log("okay");

    ok = readLine.question("Option 1 , 2 , or 3 ");

}
console.log(`you decided ${ok}`)
//15
let mkay = Number(readLine.question("Pick an option from 0-10: "));

while (mkay>10 || mkay<0 ){

    if (mkay > 10 ){
        console.log("invalid")
    }
    if(mkay < 0){
        console.log('invalid')
    }


    mkay = readLine.question("0-10, pick ");

}
console.log(`you decided ${mkay}`)
//16
