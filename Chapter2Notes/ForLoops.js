//For Loops



//for(let i = 0; i<=10; i++){
//console.log("hi")
//}

//prints once as 0 then gradually increases till equal to 10
//for every increase it reprints "hi"



//for(let i = 0; i<=10; i++){
//  console.log(i)
//}
//This will print out I instead of a word which means it basically pastes the number I represents as it changes till it reaches 10

//for(let i = 0; i<1000; i++){
//    console.log(i)
//}
//It will print every number starting from 0 until it is 1 off of 1000


//for(let i = 100; i>=12; i--){
//  console.log(i)
//}
//as long as I is greater it continues to decrease until is equal to 12



//for(let i = 100; i<=300; i++){
//if(i % 2 ==0) {
//  console.log(i)
//}
//  }
//Prints out all even numbers between 100 and 300


//let sum = 0;
//for(let i = 100; i<=300; i++) {
//  sum += i;
//}
//console.log(sum);
//only prints the sum of the value


let sum = 0;
for(let i = 100; i<=300; i++) {
    if(i % 2 ==0) {
        sum += i;
    }
}
console.log(`sum: ${sum}`);
//prints out sum if even