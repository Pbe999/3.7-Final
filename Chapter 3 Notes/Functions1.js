//1

function findAreaofRectangle(length, width){
    console.log(`${length} * ${width} = ${length * width} `);
}
findAreaofRectangle (2, 4);


//2
function findAreaOfCircle(num1, num2){

    console.log(`${num1} * ${num1} * ${num2}=${num1 * num1 * num2}`);

}

findAreaOfCircle(5, 3.14);
//3
function findMin(x, y){

    if (x>y){



        console.log(`the larger number is ${x}`);



    } else {



        console.log(`the larger number is ${y}`);



    }



}

findMin(2, 3);
//4
function checkEquality(x, y){



    if (x == y){

        console.log('they are equal');

    }else {

        console.log('they are not equal');

    }

}

checkEquality( 5, 5);
checkEquality(4, 3);
//5
function calculateLargestArea(length1, width1, length2, width2){

    console.log(`${length1} * ${width1} = ${length1 * width1} `);

    console.log(`${length2} * ${width2} = ${length2 * width2} `);

    if (length1 * width1 > length2 * width2){

        console.log('area 1 is greater');}

    else{

        console.log("area 2 is greater");

    }

}

calculateLargestArea (2, 4, 8, 10);
//6
function charityCollection(a, b, c,) {

    let d = a + b + c;

    if (d >= 1000) {

        console.log(d * 2);

    } else if (d < 1000) {


        console.log(d);

    }
}
    charityCollection(10,10,10);
//7
function stateofMatter(temp){
    if (temp < 0){
        console.log('solid');
    }
    else if (temp <= 177){
        console.log('liquid');
    }
    else{
            console.log("gas");
    }
}
stateofMatter(25);
stateofMatter(1000);
stateofMatter(-60);
//8
function findMaximumValue(d, e, f,) {



    if (d > e && d > f){

        console.log(`${d} greatest number`)}

    else if (e > d && e > f){

        console.log(`${e} is greatest number`)

    }

    else{

        console.log(`${f} greatest number`)

    }

}

findMaximumValue(24,16,7);
//9
function findMinimumValue(d, e, f,) {



    if (d < e && d < f){

        console.log(`${d} smallest number`)}

    else if (e < d && e < f){

        console.log(`${e} is smallest number`)

    }

    else{

        console.log(`${f} smallest number`)

    }

}

findMinimumValue(24,16,7);