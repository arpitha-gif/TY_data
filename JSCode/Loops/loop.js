// //for-of loop -- looping over an array
// var fruits = ['apple','orrange','mango',,,,,'banana']

// for (const key of fruits) {
//     console.log(`fruits: ${key}`);

// }

// var fruits = ['apple','orrange','mango','banana']
// let fruit = []

// for (const key of fruits) {
//     fruit += key
//     console.log(fruit);
//     // console.log(typeof(fruit));
// }

// //for-of loop --- looping over a string
// var Pname = "Sandeep"

// for (const key of Pname) {
//     console.log(key);
// }

// //for-of -- doesn't work with obj
// var student = {
//     sname:"john",
//     age:20
// }
// for (const i of student) {
//     console.log(student);
// }

//for-in loop

// //object example

// let car={
//     name:'bmw',
//     price:55000,
// }
// for(var key in car){
//     console.log(`${key} -- ${car[key]}`);
// }

// //for-in -- array
// const ary = [1,2,3,4,5,6,,]

// for(let i in ary){
//     //console.log(i); // only index
//     console.log(ary[i]);//if we want print value use var(array name) name with index
// }

// const obj ={
//     name:"arpita",
//     hName:'sandeep'
// }

// for(let j in obj )
// {
//     console.log(j);
//     console.log(obj[j]);
// }

//foreach loop

var names = ['Chethan','Arpitha','Hamsa']
names.forEach((val,index,arr)=> {
    console.log(`Value at ${index} is ${val}`);
    console.log(arr);
});







const aeryObj = [
    {
        fName:"Davdi",
        lNmae:"Verma"
    },
    {
        fName:"duleshwar",
        lNmae:"Verma"  
    }
    
]



for(let k of aeryObj){
    console.log(k);
}
