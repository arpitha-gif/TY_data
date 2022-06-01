// 1. named functions 

function add(n1,n2){
    return n1+n2;
}

var result=add(10,20)
console.log(`result: ${result}`);

// 2. anonymous function 
//treating variable as a function
var sub= function(n1,n2){
    return n1-n2
}

var res=sub(10,20)
console.log(`result: ${res}`);

// 3.IIFE (Immediately invoked function expression) OR self invoked function 

(function(n1,n2){
    var product =n1*n2;
    console.log(`product ${product}`)
})(10,20)

// 4. Arrow functions 
// single line- return statement will be added by js engine 
var divide=(n1,n2)=>n1/n2;

var d=divide(10,20)
console.log(`value: ${d}`);

//single parameter - Paranthesis is optional 

var greet = name=>{
 return ` welcome to the team, ${name}`
}
console.log(greet('elevate'));

// no parameter - paranthesis is mandatory

var printTenNumbers = ()=>{
    for (var i=0; i<10;i++){
        // console.log(printTenNumbers[i]);
    }
}
// console.log(printTenNumbers());

var greet = name=>` welcometo the team, ${name}`
   console.log(greet('elevate'));

   console.log('================================');

// nested function
function findSquare(n1){
    return function(){
        console.log(`square of the number ${n1*n1}`);
       return function(){
           return console.log('hi my name is ' ,n1);
        }
    }
}
// var squareFunction=findSquare(10) ;//getting inside function into the variable
// squareFunction();
//or 
findSquare(10)();
findSquare(10)()();

console.log('================================');


// callback function 

function test(){
    console.log('test function');
    // callbackFunc()
}

function sample(){
    console.log('sample function');
}

// test(sample);

//prac
(function(s1,s2){
    let prod=s1*s2;
    console.log(prod);
})(10,20)

//callback prac
function test(callBack){
    callBack()
    console.log('i m test');
}

function sample(){
    console.log("i m sample");
}

test(sample)