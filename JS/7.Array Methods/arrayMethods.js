// Array helper methods 

// forEach method-> return type undefined
//1 
var numbers= [10,20,30] 
numbers.forEach(function(value,index){
    console.log(`value of index: ${index} is ${value}`)
})

console.log('================================================');

// fat arrow way 
var numbers= [10,20,30] 
numbers.forEach((value,index)=>console.log(`value of index: ${index} is ${value}`));

console.log('================================================');

var animals=['lion','tiger','monkey','elephant', 'cat'];
animals.forEach((value,index)=>{
    console.log(`animals in index is ${index} is ${value}`);
})

console.log('================================================');

//2 
var books=[
    {
        title:'java',
        price:1000
    },

    {
        title:'javascript',
        price:10000
    },

    {
        title:'mava',
        price:99
    },
]

books.forEach((value,index)=>{
    console.log('books in index is ' ,index +' is ',value);
    // console.log(value.price);
    if(value.price>1000){
        console.log(value.title)
    }
})

console.log('========================');

// isArray methods
//1 
var numbers= [10,20,30]
console.log(Array.isArray(numbers));
console.log('========================');

//2 
var person={
    name:"dfdffo",
    age:33,
}
var isPersonArray= Array.isArray(person)
console.log(`person is array: ${isPersonArray}`);

console.log('========================');

// push method->add element at last in array => return type number

var numbers= [10,20,30,40,50,60]
var newLength=numbers.push(90,100,80)

console.log(`new length after push: ${newLength}`);
console.log(`numbers data after push: ${numbers}`);

console.log('========================');
// pop method=> remove last element from array=> return type is the type of element removed

var removedElement= numbers.pop()
console.log(`Removed element: ${removedElement}`);
console.log(`numbers data after pop: ${numbers}`);
console.log('========================');

// includes => return type boolean

const hasThirty= numbers.includes(30)
console.log(`has thirty : ${hasThirty}`)

const hasElement= numbers.includes(35000)
console.log(`has 35000 : ${hasElement}`)

const hasTwenty= numbers.includes(20,1)
console.log(`has twenty : ${hasTwenty}`)

console.log('========================');

// splice-> return type= deleted elements

const n=[10,20,30,40,50]
console.log(`n before splice ${n}`);
const deletedElements=n.splice(0,1,100)
console.log(`n after splice- ${n}`);
console.log(`deletedElements - ${deletedElements}`);

console.log('========================');

const n1= [20,40,50,60]
console.log(`n1 before splice ${n1}`);
const removedElements=n1.splice(2,2,70,100)
console.log(`n1 after splice- ${n1}`);
console.log(`removedElements - ${removedElements}`);

console.log('========================');

//slice->  returns the sliced elemrnts                      

const n2=[10,20,30,40,50];
console.log(`n2 before slice ${n2}`);
const elements=n2.slice(1,4)
console.log(`n2 after slice- ${n2}`);
console.log(`elements - ${elements}`);
console.log('========================');

//indexOf gives index no. of element if present else return -1

const d=[10,20,30,40]
let presentOrNot=d.indexOf(30)
if(presentOrNot===-1){
    console.log(`30 not present`);
}
else{
    console.log(`30 is present`);
}
console.log('========================');

//join
const e=[10,20,30,40]
const numbsWithHifen= d.join('-');
console.log(`numbsWithHifen- ${numbsWithHifen}`);

console.log('========================');
// map
const nums=[100,200,300]
let plusTen=nums.map(function(value,index){
  return value+10;
})

console.log(plusTen);
console.log(nums);

// using arrow
console.log('========================');
const nums1=[100,200,300]
let plusTen1=nums1.map((val)=>{
  return val+10;
})
console.log(plusTen1);
console.log(nums1);

console.log('========================');

// using arrow single line

const nums2=[100,200,300]
let plusTen2=nums2.map(val=>val+10)
console.log(plusTen2);
console.log(nums2);

console.log('========================');

// filter
const num3=[100,200,300];
const filerUsingArrow=num3.filter((val,index)=>{
    return val>150;
})
console.log(`filerUsingArrow- ${filerUsingArrow}`);
console.log('========================');

// *** assignment

// coffee reward 

const fruits=['Apple', 'Orange', 'Kiwi','Grapes']
//3
let fruitsToUpperCase=fruits.map((e)=>{
    return (e.toUpperCase())
})

console.log(`Fruits in upper case: ${fruitsToUpperCase}`)

//2 
let ifLengthGreaterThanFive=fruits.filter((f)=>{
    if(f.length>5){
       return true
    }
    else{
        return false
    }
})
console.log(`Fruits greater than length 5: ${ifLengthGreaterThanFive}`)

//1
let ePresentOrNot=fruits.filter((e)=>{
    if(e.includes('e')){
        return true
    }
    else{
        return false
    }
})
console.log(`e present: ${ePresentOrNot}`)

//ass2

const items=[
    {
        id:'1',
        name:'Lipstick',
        price:600
},
{
    id:'2',
    name:'Bangles',
    price:1000
},
{
    id:'3',
    name:'Trimmer',
    price:2300
},
{
    id:'4',
    name:'BeardOil',
    price:100
}]
//1 
let priceMoreThan800= items.filter(val=>val.price>800)
console.log('priceMoreThan800 ', priceMoreThan800);

//2 name length>8
let nameLengthMoreThan8= items.filter(val=> {val.name.length>8
return true
})
console.log('nameLengthMoreThan8 ', nameLengthMoreThan8);

//3 add 100 to price

let addHundredToPrice= items.filter(val=>{
    val.price += val.price+ 100 
    return val
})
console.log('addHundredToPrice',addHundredToPrice);

//4 names to uppercase

let namesToUpperCase= items.map(val=>{
    val.name=val.name.toUpperCase()
    return val
})
console.log('namesToUpperCase',namesToUpperCase);

// console.log('items', items)


// shallow & deep copy
// demo1 
const person1={
    name:'ajay',
    age:40,
    hobbies:['cricket','kabaddi'],
    address:{
        city:'bangalore',
        pincode:560062
    }
}

const p=Object.assign({},person1)
person1.address.city='hyderabad' 
console.log(person1.address.city); //hyderabad
console.log(p.address.city);   //hyderabad

person1.name='Abhi';
console.log(person1.name); //abhi
console.log(p.name);       //ajay


// demo2
const items1=[
    {
        id:'1',
        name:'Lipstick',
        price:600
    },
    {
        id:'2',
        name:'Bangles',
        price:1000
    }
]

const addToPrice1=items1.map(val=>{
    const valCopy = Object.assign({},val)
    valCopy.price += 100
    return console.log(valCopy);
})

const bike11={
    color:'red',
    price:900,
    brand:'tvs',
}
for(let key in bike11){
    console.log(` loop items -> ${key}: ${bike11[key]}`);
}

////////////////////////////////
// const items2=[
//     {
//         id:'1',
//         name:'Lipstick',
//         price:600
//     },
//     {
//         id:'2',
//         name:'Bangles',
//         price:1000
//     }
// ]

// let loopArr=items.map((e)=>{
//     let copyObj=Object.assign({},e)
//     return console.log(copyObj)
// })
