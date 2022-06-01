const person={
    pName:'ajay',
    age:30,
    year:{
        model:333,
    }
}

const personCopy={...person} //shallow copy
console.log(personCopy);

console.log('=====================');

const numbers=[10,20,30,40];
const numbersCopy=[...numbers];
console.log(numbersCopy);
console.log('=====================');

const person1={
    age:40,
    name:'guru'
}

const person2={    
    age:880,
    name:'Joku',
    color:'blue'
}

const address={
    city:'bangalore',
    pincode:560023
}
const personAddress={...person1,...address}
console.log(personAddress);

///////////////////////////////
console.log('=====================');

//age from person1 and color from person2
const {age, color}={...person1,...person2} 
console.log(age,color);