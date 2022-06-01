var x= 10;          // global scope
console.log(x);

function test(){    //local scope
    var x=20;
    console.log(x);
}
test()

for (var i=0; i<5; i++){
    console.log(i);
}

console.log('=============================='); 
console.log(i);
console.log('==============================');

// introduced in es6 
// let keyword
let a= 10;
console.log('global access',a);
console.log('==============================');

function accessLetvariables(){
    console.log('inside function', a)
}
accessLetvariables();

console.log('==============================');

for(let j=0; j<3;j++){
    console.log(j);
}
// console.log(j); //ReferenceError: j is not defined because of block level

console.log('==============================');

//console.log(b);
// let b=88;  //Cannot access 'b' before initialization

console.log('==============================');

let c=30;
//let c=99;
//console.log(c); //Identifier 'c' has already been declared

console.log('==============================');

let d=30;
d=80
console.log(d);

console.log('==============================');

// const keyword

//console.log(p);
//const p =30; //Cannot access 'p' before initialization
console.log('==============================');

// for (const k =0;k<3;k++){  //Assignment to constant variable.
//     console.log(k)
// }

console.log('==============================');

if (10>6){
    const name='ajay';
    console.log(`name: ${name}`)
}

console.log('==============================');

function constFunctionScope(){
    const r=90
    console.log(r);
}
constFunctionScope()
//console.log(r) // r is not defined
console.log('==============================');

const n=480;
// const n=467;
console.log(n); // Identifier 'n' has already been declared

console.log('==============================');

const h=480;
// h=467; 
console.log(h); //ncaught TypeError.Assignment to constant variable.

console.log('==============================');

const fruits= ['apple','mango','grapes'];
fruits.push('KIWI') // in const we can use array methods but cant assign values directly
console.log(fruits);

console.log('==============================');


// assignment
const n8 = [10, 20 ,30]
	const n1 = n8.slice(0)
    console.log(n1);