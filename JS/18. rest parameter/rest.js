//rest parameter

function addNumbers(...nums){
    let sum = 0 
    for (let i=0; i<nums.length;i++){
        sum +=nums[i]
    }
    console.log(`sum - ${sum}`);
}
addNumbers(10,20,30)
addNumbers(10,20)
addNumbers(10,50)

// default parameter
// default is abhishek when no value is passed in greet()
function greet(name='abhishek'){     
    console.log(`welcome : ${name}`);
}

greet('ajay')  // ajay