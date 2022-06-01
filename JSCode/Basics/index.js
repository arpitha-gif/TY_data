alert('This works!');

//datatypes
var x = 10 + "javascript"
console.log(x);
console.log(typeof(x));

//var keyword
var a = 10
console.log(a);
var b = 20
console.log(b);
var a = 15 //redclaration possible
console.log(a);
console.log(a==b);
a=50; //can be initialized without declaration
console.log(a);


//variables  -- let
let userName;
userName = 'Allen';
console.log(userName);
//let userName = 'smith' //error - can't redclare
userName = 'Miller'
console.log(userName);


//const
// const totalUsers;  //error - initialize the value while declration
// totalUsers = 20;  
const totalUsers = 20
console.log(totalUsers);
// totalUsers = 25
// console.log(totalUsers); //error - we can't change const

//undefined
let you;
console.log(typeof(you));
let y = undefined
console.log(you);

//null
let marks = 100
console.log(typeof(marks));
marks = null
console.log(typeof(marks));

//NaN
console.log(2*'hi');
let check = NaN
console.log(typeof(check));

//string interpolation
var myPet = 'dog'
console.log(`I own a pet ${myPet}`);
console.log('I own a pet ' + myPet);