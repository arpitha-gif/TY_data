const obj1 ={
    fName:"Arpitha",
    lName:"Sandeep"
}

const obj2 = obj1 //referance copy 
console.log("=====Before Change=========");
console.log(obj1);
console.log(obj2);
console.log("=====After Change=========");

obj2.fName="deepu"
console.log(obj1); // will get deepu in both the object so this is a problem 
console.log(obj2);

// to overcome this kind of problme's we have shallow copy we can achive shallow copy by using "..." 
//  means spread operator


// console.log("=====Shallow Copy Exapmle =========");

// const obj3 ={
//     fName:"Arpitha",
//     lName:"Sandeep",
// }

// const obj4 = {...obj3} // shallow copy using "3 dot" "..."

// console.log("=====Before Change=========");
// console.log(obj3);
// console.log(obj4);
// console.log("=====After Change=========");
// obj3.fName='gowda'
// console.log(obj3);
// console.log(obj4);

//obj inside obj (Deep copy)
// console.log("=====Deep Copy Exapmle =========");

// const obj3 ={
//     fName:"Arpitha",
//     lName:"Sandeep",
//     moreDetails:{
//         mobile:123456789

//     },
//     lessDetails:{
//         ph:6765675
//     }
// }

// const obj4 = {
//     ...obj3,
//     moreDet:{...obj3.moreDetails}
// } // Deep copy using "3 dot" "..."

// const obj5 = {
//     ...obj3,
//     lessDetails:{...obj3.lessDetails}  //for each level we have to use ... operator for changes
// }

// console.log("=====Before Change=========");
// console.log(obj3);
// console.log(obj4);
// console.log("=====After Change=========");
// obj4.moreDetails.mobile = 0987654321
// obj5.lessDetails.ph = 7786786767
// console.log(obj3);
// console.log(obj5);

//Deep copy using json.parse()
console.log("=====Deep Copy Exapmle =========");

const obj3 ={
    fName:"Arpitha",
    lName:"Sandeep",
    moreDetails:{
        mobile:123456789

    },
    lessDetails:{
        ph:6765675
    }
}

const obj4 = JSON.parse(JSON.stringify(obj3))
// Deep copy using json.parse

console.log("=====Before Change=========");
console.log(obj3);
console.log(obj4);
console.log("=====After Change=========");
obj4.moreDetails.mobile = 0987654321
obj4.lessDetails.ph = 9790
console.log(obj3);
console.log(obj4);




































// const obj = {
//     fName:"Arpitha",
//     lName:"sandeep",
//     // moredetails:{
//     //     age:26
//     // }
// }

// const objCopy = {...obj}
// console.log("before changing");
// console.log("original obj",obj);
// console.log("copy obj",objCopy);

// console.log("after changing");
// objCopy.fName="Deepu"
// console.log("original obj",obj);
// console.log("copy obj",objCopy);