// forOf loop 

var fruits=['apple','banana',,'orange']

var allFruits=[]
for(var item of fruits){
    console.log(`fruit: ${item}`);
    // allFruits += item 
}
// let hypenFruit=fruits.join('-')
// console.log(Array.isArray(fruits));
// console.log(`fruit: ${fruits}`);
// console.log(`All fruits: ${(hypenFruit)}`);

console.log('================');

// forIn loop 
//object example

let car={
    name:'bmw',
    price:55000,
}
for(var key in car){
    console.log(`${key} -- ${car[key]}`);
}
console.log('====================');

// forIn 1 (obj) 
var fruits={
    fruit1:'apple',
    fruit2:'banana',
    fruit3:'orange'}
for(var key in fruits){
    console.log(`fruit: ${fruits[key]}`);
}

console.log('====================');
//array
//forIn also ignores empty elements

var fruits=['apple','banana',,,'orange',''];
for (var index in fruits){
    console.log(index,fruits[index]);
}
console.log('====================');

var book={
    title:'web Fundamentals',
    price:1200,
}

var books=['web Fundamentals','java','javascript']

books[0]='python';
books['element']='mava' // works in forIn loop but not in for loop
books['elemento']='gava'

for(var i=0;i<books.length;i++){
    console.log(books[i]);
}

console.log('====================');

for(var index in books ){
    console.log(books[index]);
}