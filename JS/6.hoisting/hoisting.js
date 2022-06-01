// hoisting 

var a=10;
function test(){
    console.log(a)
    var a=40;
}
test()
console.log('===================');

// getId()
var getId=function(){
    console.log('12');
}
getId()

console.log('===================');

// wish() 
var wish=()=>{
    console.log("happy ahppy")
}
wish()

console.log('===================');

// wish1() 
function wish1(){
    console.log("function ahppy")
}
// wish1()