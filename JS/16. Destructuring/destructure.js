// destructuring

//object destructure

//demo1
const person={
    name1:"Maamu",
    age:20,
    color:"blue"
}

const {name1,age}= person;

console.log('name1 ',name1);
console.log(`age : ${age}`);

console.log('=====================');

//demo2
const personData={
    name1:'Abhi',
    age:33,
    color:'white',
    address:{
        city:"bangalore",
        pincode:909990
    },
    hobbies:['reading','googling','numismatic']
}
// const {city, pincode}=personData.address; 

// we can also do like this
const {address:{city, pincode}}=personData 

const {hobbies:[hoby1,hoby2]}=personData;
console.log('city ',city);
console.log(`pincode : ${pincode}`);

console.log('hoby1 ',hoby1);
console.log(`hoby2 : ${hoby2}`);

console.log('=====================');

//array destructure

const hobbies=[ 'dancing', 'rampwalk','travelling','swimming']
const [hobby1,hobby2,hobby3]= hobbies;

console.log(`hobby1- ${hobby1}`);
console.log(`hobby2- ${hobby2}`);
console.log(`hobby3- ${hobby3}`);

// prac
let buzu={
    namo:'puxu',
    ageo:77,
    design:{
        no1:'aswem',
        no2:'bosem',
    },
    gola:['bada','chota']
}

const {namo,ageo,design:{no1,no2},gola:[bub1,bub2]}=buzu
console.log(namo,ageo,bub1,no2);