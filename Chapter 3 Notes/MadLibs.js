const readline = require('readline-sync');







const nouns = [];



for( let i =1; i <= 7; i++){



    const noun = readline.question(`Enter a noun (${i}/7):`);



    nouns.push(noun);



}



const verbs = [];



for( let i =1; i <= 7; i++){



    const verb = readline.question(`Enter a plural verb (${i}/7):`);



    verbs.push(verb);



}



const adjectives = [];



for( let i =1; i <= 8; i++){



    const adjective = readline.question(`Enter a adjective (${i}/7):`);



    adjectives.push(adjective);



}

console.log(adjectives)

const story =



    `Do you ${adjectives[0]}    

  

I do not ${verbs[0]}, SAM-I-AM.   

  

I do not like ${nouns[0]}.   

  

Would you like ${nouns[1]} here or there?   

  

I would not like ${nouns[2]} here or there.   

  

I would not ${verbs[1]} anywhere.   

  

I do not like ${nouns[3]}.   

  

I do not like ${nouns[4]}, SAM-I-AM.   

  

Would you like ${nouns[5]} in a house?   

  

Would you like ${nouns[6]} with a mouse?   

  

I do not like ${nouns[7]} in a house.   

  

I do not like ${verbs[2]} with a mouse.    

  

I do not like ${verbs[3]} here or there.   

  

I do not like ${verbs[4]} anywhere.   

  

I do not like ${verbs[5]}.   

  

I do not like ${verbs[6]}, SAM-I-AM.   

  

Would you eat ${verbs[7]} in a box?   

  

Would you eat with a ${adjectives[1]} fox?   

  

Not in a ${adjectives[2]} box. Not with a ${adjectives[3]} fox.   

  

Not in a ${adjectives[4]} house. Not with a ${adjectives[5]} mouse.   

  

I would not eat ${adjectives[6]} here or there.   

  

I do not like ${adjectives[7]}, SAM-I-AM.`;

console.log(story);