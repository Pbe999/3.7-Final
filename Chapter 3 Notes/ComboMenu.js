const readline = require('readline-sync');

let sandwich = readline.question("What type of sandwich would you like(chicken, beef, or tofu):");

let sandwichPrices = {
    chicken: 5.25,
    beef:6.25,
    tofu:5.67
};
if(sandwichPrices.hasOwnProperty(sandwich)){
    console.log(`You selected a `+ sandwich + " sandwich for $" + sandwichPrices [sandwich] +`.`);
} else{
    console.log("Sorry we dont have that sandwich on the menu");
}

let wantbeverage = readline.question("Would you like a beverage? yes or no:");
console.log(`wantbeverage: ${wantbeverage}`);
let beveragePrices = {
    small: 1.00,
    medium: 1.75,
    large: 2.75
};

let beverageCost = 0;

if (wantbeverage == "yes"){
    let beverageSize = readline.question("What size beverage would you like? small, medium, or large :");

    if (beveragePrices.hasOwnProperty(beverageSize)) {
        beverageCost = beveragePrices[beverageSize];
        console.log(`You selected a` + beverageSize + ' beverage for $' + beverageCost + `.`)
    } else {
        console.log("Sorry, we don't have that beverage size on the menu.");
    }
}
let totalCost = sandwichPrices[sandwich] + beverageCost;
if (wantbeverage === "yes"){
    console.log(`Your total cost is $` + totalCost.toFixed(2) + '.');
}else{
    console.log("your total cost is $" + sandwichPrices[sandwich].toFixed(2) + '.');
}

let wantFries = readline.question("Would you like fries(yes or no):");
console.log(`wantFries: ${wantFries}`);
let friesPrices ={
    small:1.00,
    medium:1.50,
    large:2.00
};
let friesSize;
let friesCost = 0;
if(wantFries == "yes");{
friesSize = readline.question(" What size fries woudl you like? (small, medium, or large:")
}
