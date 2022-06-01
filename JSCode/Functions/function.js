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

(function product(n1,n2){
    var product =n1*n2;
    console.log(`product ${product}`)
})(10,20)


// 4. Arrow functions 
// single line- return statement will be added by js engine 
var divide=(n1,n2)=>n1/n2;

var d=divide(10,20)
console.log(`value: ${d}`);

//if we are passing single arg () not required and for single stmt {} not required
var message = a => console.log(a);

message('Chethan')

//If are using multiple statement {} mandatory
var text = (a,b)=>{
    console.log(a+b);
    console.log(a-b);
}

text(18,18)

// nested function
function findSquare(n1){
    return function(){
        console.log(`square of the number ${n1*n1}`);
       return function(){
           return console.log('hi my name is ' ,n1);
        }
    }
}
var squareFunction=findSquare(10) ;//getting inside function into the variable
squareFunction()();
//or 
//findSquare(10)();
// findSquare(10)()();

console.log('================================');

// callback function 

function test( callbackFunc){
    console.log('test function');
    callbackFunc()
}

function sample(){
    console.log('sample function');
}

test(sample);


