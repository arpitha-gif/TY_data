var str ='Hello'
console.log('str ', str);
console.log('window str ', window.str);

console.log('========================');

function getName(){
    return 'marobozu'
}

console.log('getName ', getName());
console.log('window getName' , window.getName());

console.log('========================');

console.log(window);

console.log('========================');

console.log('inner height ', window.innerHeight);
console.log('inner width ', window.innerWidth);

// alert

// window.alert("Hi guys; good afternoon") 

// const isEligible = window.confirm('is your age greater than 18 ?')
// console.log('isEligible :',isEligible)
// if (isEligible){
//     console.log('Eligible for voting')
// }else{
//     console.log('Not Eligible for voting')
// }
console.log('========================');

// const age =window.prompt('please enter your age');
// console.log(`Age : ${age}`);
// if (age>18){
//     // console.log('Eligible for voting')
//     window.open('https://www.flipkart.com')
// }else{
//     // console.log('Not Eligible for voting') 
//     window.open('https://www.firstcry.com')
// }

console.log('location ',location);
console.log('history ',history);
console.log('navigator ',navigator);

navigator.geolocation.getCurrentPosition(loc=>{
    console.log('location ',loc)
})