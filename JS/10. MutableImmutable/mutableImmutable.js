// primitive types are immutable

var name1='ajay'
var nameCopy=name1;

console.log(`name1 : ${name1}`);  // prints ajay
console.log(`nameCopy : ${nameCopy}`); // prints ajay

/* when we change the data of name1 variable it will not affect the data
of nameCopy variable */

var name1='girish';
console.log(`name1 : ${name1}`);  // prints girish
console.log(`nameCopy : ${nameCopy}`); // ajay

// reference data types are mutable
//example of mutable

const person ={
    name:'vijay',
    age:40
}

const personCopy=person 
console.log(person.name) //prints vijay

/* when we change the data of person object variable it will affect the data of 
personCopy variable because in memory both person and personCopy variables are pointing 
to same object  */

person.name='abhi'
console.log(`name ${person.name}`) //prints abhi
console.log(`nameCopy ${personCopy.name}`) //abhi

console.log('====================')

// make object behave like immutable (copy of original obj )
const person1 ={ 
    name:'vijay',
    age:40
}

const person2 = Object.assign({}, person1); //2 par 1.empty obj 2.obj to be passed in empty obj
person2.name='ela'
person2.age=70

console.log(`name1 ${person1.name}`);
console.log(`name2 ${person2.name}`);

console.log(`age1 ${person1.age}`);
console.log(`age2 ${person2.age}`);

// example for array mutable
let n=[10,20,30];
console.log(`n - ${n}`);
let n1=n;
n=[50]
console.log(`n - ${n}`);
console.log(`n1 - ${n1}`);

console.log('==================')

// // example for array immutable

let numbers=[10,20,30,40,50];
let numbersCopy=numbers.slice(1)
console.log(`numbers ${numbers}`);
console.log(`numbersCopy ${numbersCopy}`);
console.log('==================')