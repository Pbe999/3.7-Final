//1
function sequentialIntigers(n) {

    var arr = [];

    for(var i = 1; i <= n; i++){

        arr.push(i);

    }

    console.log(arr);

}

sequentialIntigers(7);
//2
function negativeNumber(n) {

    if (n <= 0){

        console.log('invalid');

        return;

    }

    var arr = [];

    for(var i = 1; i <= n; i++){

        arr.push(i);

    }

    console.log(arr);

}

negativeNumber(-5);
//3
function replaceArrayValues(arr, x){

    for (let i = 0; i < arr.length; i++){

        arr[i] = x;

    }

    console.log(arr);

}

replaceArrayValues([1,2,3,4,5],12);
//4
function createNewArray(array, x){

    const newArr = new Array(array.length);

    for(let i = 0; i < newArr.length; i++){

        newArr[i] = x;

    }

    console.log('Orgiginal array:', array);

    console.log('New Array:', newArr);

}

createNewArray([1,2,3,4,5],0);
//5
function replaceArray(arr) {

    const firstVal = arr[0];

    const lastVal = arr[arr.length - 1];

    const biggerVal = firstVal > lastVal ? firstVal : lastVal;

    for (let i = 0; i < arr.length; i++){

        arr[i] = biggerVal;

    }

    console.log('Updated Array:', arr);

}

replaceArray([1,2,3,4,5]);
//6
function replaceArrValues(arr){

    const firstValue = arr[0];

    const lastValue = arr[arr.length - 1];

    const biggerValue = firstValue > lastValue ? firstValue : lastValue;

    const newArray = Array(arr.length).fill(biggerValue);

    console.log(`Original Array: [${arr}]`);

    console.log(`New Array: [${newArray}]`);

}

replaceArrValues([3,4,5,6,7]);
//7
function replaceArryValues(arr){

    const firstValue = arr[0];

    const lastValue = arr[arr.length - 1];

    const smallerValue = firstValue < lastValue ? firstValue : lastValue;

    const newArray = arr.map(() => smallerValue);

    console.log(`Original Array: [${arr}]`);

    console.log(`New Array: [${newArray}]`);

}

replaceArryValues([1,2,3,4,5,6]);
//8
function replaceValues(arr){

    const firstValue = arr[0];

    const lastValue = arr[arr.length - 1];

    const smallerValue = firstValue < lastValue ? firstValue : lastValue;

    const newArray = Array(arr.length).fill(smallerValue);

    console.log(`Original Array: [${arr}]`);

    console.log(`New Array: [${newArray}]`);

}

replaceValues([1,2,3,4,5,6]);
//9
function replace(arr){

    const product = arr.reduce((accumulator, currentValue) => accumulator * currentValue);

    const newArray = arr.map((value) => product / value);

    console.log(`Original array:[${arr}]`);

    console.log(`New array:[${newArray}]`);

}

replace([1,2,3,4]);
//10
function replaceVal(arr){

    const product = arr.reduce((accumulator, currentValue) => accumulator * currentValue);

    const newArray = arr.map((value) => product/value);

    console.log(`Original array: [${arr}]`);

    console.log(`New Array: [${newArray}]`);

}

replaceVal([1,2,3,4]);