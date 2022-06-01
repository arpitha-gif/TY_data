var x= 10;          // global scope
console.log(x);

function test(){    //local (fdunctionm)scope
    var y=20;
    console.log(y);
}
test()
//console.log(y); error 

for (var i=0; i<5; i++){
    console.log(i);
}

console.log(i);

for (let i=0; i<5; i++){  // functional scope
    console.log(i);
}

console.log(i);


