//1
function firstElement(arr){
    if (arr.length === 0){
        console.log('empty array');
    } else {
        console.log(arr);
    }
}
let myNumbs = ['3', '4', '5', '6'];
firstElement(myNumbs[0]);
//2
firstElement(myNumbs[3]);
//3
let zero = [];
firstElement(zero);
//4
function reverseElement(arr){
    for(let i = arr.length-1; i>=0; i--){
        console.log(arr[i])
    }
}
reverseElement(myNumbs);
//5
const arr = [3,4,5,6,7,8,9,10,11,12];

for(let i =2; i < arr.length; i++){
    if ((i-2) % 3 ===0){
        console.log(arr[i]);
    }
}
//6
function everySecond(arr) {
    for (let i = 2; i<arr.length; i=i+2)
    { console.log(arr[i])
    }
}
everySecond([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]);
//7
function biggerThanFour(arr){
    for (let i =0; i<arr.length; i++) {
        let item = arr[i];
        if (item > 4){
        console.log(item);
    }
    }
}
biggerThanFour([-10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]);
//8
function biggerThanNum(arr, num){
    for (let i =0; i<arr.length; i++){
        let item = arr[i];
        if (item > num) {
            console.log(item);
        }
    }
}
biggerThanNum([-10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60], 20);