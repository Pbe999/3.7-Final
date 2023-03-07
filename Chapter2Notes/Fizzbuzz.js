
let pb = 1;
while (pb <= 99){
    pb++;
    if(pb % 15==0)

        console.log("Fizzbuzz");
    else if(pb % 3==0)

        console.log("Fizz");
    else if(pb % 5==0)

        console.log("Buzz");
    else{
        console.log(pb);
    }
}