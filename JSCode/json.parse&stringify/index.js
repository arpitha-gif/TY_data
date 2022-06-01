 const str = `["david","verma"]`  // this is string we used beackt-tics to create string
const obj = JSON.parse(str) // we are converting string into object
console.log(typeof(obj)); // cheaking type of variable

const str2 = JSON.stringify(obj) // we are converting strinobjectg to string
console.log(typeof(str2)); // cheaking type of variable


//obj to string
const objct = {
    name:"arpitha",
    age:26
}

const strr = JSON.stringify(objct)
console.log(typeof(strr));



// NOTE:- PRACTICE ONES WITH DIFFRENT EXAMPLE 

const str1 = `{"Arpitha":"jhjh"}`//return type of string is obj
const obj1 = JSON.parse(str1) //so we can't convert obj to obj
console.log(typeof(str1)); //error






