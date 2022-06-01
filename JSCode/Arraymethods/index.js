// Array Methods

// Push Methods
const arr = [1,2,3,4,5,100]
console.log(arr.push(null));
console.log(arr);

// pop Methods
const arr1 = [1,2,3,4,5,100]
console.log(arr1.pop())

//shift method
const arr3 = [1,2,3,4,5,100]
console.log(arr3.shift());
console.log(arr3);

//unshift method
const arr4 = [1,2,3,4,5,100]
console.log("unshift return type",arr4.unshift(200));
console.log(arr4);

//slice method
const arr5 = [1,2,3,4,5,100]
console.log("return of slice",arr5.slice(2,4));
console.log("return of slice",arr5.slice(-2)); //negetive value can apply only with 2nd arg(end index)
console.log(arr5);

//splice method
const arr6 = [1,2,3,4,5,100]
//without 3rd arg
const resultsp = arr6.splice(1,2)
console.log(resultsp);
//with 3rd arg
const resultsp1 = arr6.splice(1,0,50,60)
console.log(resultsp1);
console.log(arr6);

//includes

// const arr7 = [1,2,3,4,5,6,7,8]
// const result7 = arr7.includes(7)
// console.log(result7);

//hetro array
const arr7 = [1,"arpitha",true,null,undefined]
const result7 = arr7.includes("arpitha")
console.log(result7);

//isArray
console.log(Array.isArray(arr7));

//join

const arr8 = [1,2,3,4,5]
const res8 = arr8.join("$")
console.log(res8);
console.log(typeof(res8));

//reverse

const arr9 = [1,2,3,4,5]
console.log(arr9.reverse()); //return length of array
console.log(arr9);

//foreach

const arr10 = [1,2,3,4,5]
// const res10 = arr10.forEach((v,i,a)=>{
//     //console.log(v);
//     console.log(v + 2);
// })

const res10 = arr10.forEach((v,i,a)=>{
    return v
})

console.log(res10);

//map

const arr11 = [1,2,3,4,5]
const res11 = arr11.map((v,i,a)=>{
   return v+1
})

console.log(res11);
console.log(arr11);