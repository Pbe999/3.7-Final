const readLine = require(readLine-sync);

//1
function nameSwapper(){

    let first = readLine.question(“first name:”);

    let first = readLine.question(“last name:”);

    return (`${last}, ${first}`)

}
NameSwapper();
//2
function NumberGenerator(){



    let num1 = NumberreadLine.question((“Enter a digit between 0 and 9:”  ));

    let num2 = NumberreadLine.question((“Enter a digit between 0 and 9:”));



    let total = num1 * 10 + num2;



    return “Your number is” + total;

}

NumberGenerator();
//3
function AvrageTempatures(temp1,temp2,temp3,temp4,temp5,temp6,temp7){

    let totaltempature = temp1 + temp2 + temp3 + temp4 + temp5 + temp6 + temp7;

    let avragetempature = totaltempature/7;

    return "The avrage tempature is " + avragetempature.toFixed(2)

}

console.log(AvrageTempatures(110,60,81,72,90,45,100));
//4
function CharityCollectionRevised(){

    const numPeople = readLine.question("How many peopleare rasing money?");

    let TotalAmount = 0;



    for (let i = 0; i < numPeople; i++){

        const amount = readLine.question(`Amount raised by people ${i+1}`);

        TotalAmount += amount;

    }

    if (TotalAmount < 1000){

        TotalAmount += 100;

    } else if (TotalAmount >= 1000 && totalAmount <= 2000){

        tottalAmount *=2

    } else if (TotalAmount > 2000){

        TotalAmount = 2000 + (TotalAmount - 2000) * 2;

    }

    return TotalAmount.toFixed(2);

}

CharityCollectionRevist();
//5
function DartGame(){

    let round1 = readLine.question("input score 1");

    let round2 = readLine.question("input score 2");

    let score3 = readLine.question("input score 3");

    let total = round1 + round2 + round3;

    return total;

}

DartGame(11,11,11);
//6

//7
function LinearEquation(m, b){

    Return “y = “ + m + “x + “ + b;

}

LinearEquation();
//8
function LinearEquation(x1, y1, x2, y2){

    let slope = (y2 – y1) / (x2 – x1);

    return slope:

}

let slope1 = LinearEquation();

console.log(slope1);

let slope2 = LinearEquation();

console.log(slope2);