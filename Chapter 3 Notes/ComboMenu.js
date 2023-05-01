const readline = require('readline-sync');



let sandwichPrices = {

    chicken: 5.25,

    beef: 6.25,

    tofu: 5.67

};



let beveragePrices = {

    small: 1.00,

    medium: 1.75,

    large: 2.75

};



let friesPrices = {

    small: 1.00,

    medium: 1.50,

    large: 2.00

};



while (true) {

    let sandwich = readline.question("What type of sandwich would you like (chicken, beef, or tofu)? ");



    if (!sandwichPrices.hasOwnProperty(sandwich)) {

        console.log("Invalid sandwich selection. Please choose from chicken, beef, or tofu.");

        continue;

    }



    let wantBeverage = readline.question("Would you like a beverage? (yes or no): ");



    if (wantBeverage !== "yes" && wantBeverage !== "no") {

        console.log("Invalid selection. Please enter yes or no.");

        continue;

    }



    let beverageCost = 0;

    let beverageSize = "none";



    if (wantBeverage === "yes") {

        while (true) {

            beverageSize = readline.question("What size beverage would you like? (small, medium, or large): ");



            if (!beveragePrices.hasOwnProperty(beverageSize)) {

                console.log("Invalid beverage size. Please choose from small, medium, or large.");

                continue;

            }



            beverageCost = beveragePrices[beverageSize];

            break;

        }

    }



    let wantFries = readline.question("Would you like fries? (yes or no): ");



    if (wantFries !== "yes" && wantFries !== "no") {

        console.log("Invalid selection. Please enter yes or no.");

        continue;

    }



    let friesSize = "none";

    let friesCost = 0;



    if (wantFries === "yes") {

        while (true) {

            friesSize = readline.question("What size fries would you like? (small, medium, or large): ");



            if (!friesPrices.hasOwnProperty(friesSize)) {

                console.log("Invalid fries size. Please choose from small, medium, or large.");

                continue;

            }



            friesCost = friesPrices[friesSize];



            if (friesSize === "small") {

                let megaSize = readline.question("Would you like to mega-size your fries? (yes or no): ");



                if (megaSize === "yes") {

                    friesSize = "large";

                    friesCost = friesPrices[friesSize];

                }

            }



            break;

        }

    }



    let wantKetchupPackets = readline.question("How many ketchup packets would you like? (enter a positive integer): ");



    if (!/^\d+$/.test(wantKetchupPackets)) {

        console.log("Invalid input. Please enter a positive integer.");

        continue;

    }



    let ketchupPackets = parseInt(wantKetchupPackets);

    let ketchupCost = ketchupPackets * 0.25;



    let totalCost = sandwichPrices[sandwich] + beverageCost + friesCost + ketchupCost;



    if (sandwichPrices.hasOwnProperty(sandwich) && wantFries === "yes" && wantBeverage === "yes") {

        console.log("Combo sale: You get $1.00 off!");

        totalCost -= 1.00;

    }



    console.log("----Order Summary----");

    let subtotal = totalCost + ketchupCost;



    let tax = subtotal * 0.07;



    let total = subtotal + tax;







    console.log(`Subtotal: $${subtotal.toFixed(2)}`);



    console.log(`Tax (7%): $${tax.toFixed(2)}`);



    console.log(`Total: $${total.toFixed(2)}`); }