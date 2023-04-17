//create an object of key=value pairs
let contacts = {
    bff:12345676,
    mom:78124379819417,
    bro:192341313,
};
//log all
console.log(contacts);
//access a specific entry by its key name
console.log(contacts.bff);
//cant access if key doesnt exist
console.log(contacts.myself);
//add a new entry
contacts.sis = 12398131739174; //dont have to use push
console.log(contacts);
//update anm entry
contacts.bff = 11111111;
console.log(contacts);
//delete anm entry
delete contacts.mom;
console.log(contacts);
//is there a key called _____ in there?
console.log('bff' in contacts);
console.log('myself' in contacts);
//objects are like arrrays- pass by refrence location not by value
//notice the follwoing
let a ={
value : 20};
let b = a;
let c = {
    value : 20
};
console.log(a==b);//if a = b then print true
console.log(a==c);
console.log(b==c);
console.log(a.value == c.value); //because values are the same it comes back as true
//create 5 objects below:
let dog = {
    dogNMame:'Zelda',
    breed:"terrier",
    age:9,
    size:'medium',
    barks: true
};
console.log(dog);

let pet = {
    dogNMame:'Chuy',
    breed:"dont know",
    age:2,
    size:'medium',
    barks: true
};
console.log(pet);

let eye = {
    color:'brown',
    size:"average",
    red:false,
    visibility:true,
    dilated: false
};
console.log(eye);

let Doritos = {
    taste: 9,
    flavor: "cheesy",
    size: 'average',
    chessyness: '10',
    Worthit: true
};
console.log(Doritos);

let godofwar = {
    replayability:7,
    action:10,
    StoryDevelopemnt:10,
    CharacterDevelopment:10,
    OverallRating:9/1,
};
console.log(godofwar);