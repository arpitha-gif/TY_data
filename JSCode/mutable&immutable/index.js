//primitive types are immutable

// var name = "arpitha"
// console.log("before changes");
// var copyName = name
// console.log(name);
// console.log(copyName);
// console.log("after changes");

// copyName ="sandeep"
// console.log(name);
// console.log(copyName);

// with object

//non-primitive types are mutable

// const obj = {
//     fName:"arpitha",
//     lName:"sandeep"
// }

// const objCopy = obj
// console.log(obj);
// console.log(objCopy);
// console.log("after change");
// objCopy.fName="hero"
// console.log(obj);
// console.log(objCopy);

// // example for array mutable
// let n=[10,20,30];
// console.log(n);
// let n1=n;
//  n1.push(50)
// console.log(`n - ${n}`);
// console.log(`n1 - ${n1}`);

// example for array immutable

let numbers=[10,20,30,40,50];
console.log(numbers);
let numbersCopy=numbers.slice(1)
console.log(numbers);
console.log(numbersCopy);
console.log('==================')

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





