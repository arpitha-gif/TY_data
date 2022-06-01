console.log("hi");

var fruits = ["apple", "banana", "orange", "mango"];
console.log("=================");
// debugger
console.log(fruits[0]);
console.log(fruits[1]);
 
console.log("================");
//accessing array from the begining
for (var i = 0; i < fruits.length; i++) {
    console.log(`fruits at index ${i} ${fruits[i]}`);
  }

console.log("=================");
//accessing array from last index
for (var i = fruits.length - 1; i >= 0; i--) {
    console.log(`fruits at index ${i} ${fruits[i]}`);
  }
  
console.log("=================");
//hetrogeneous array
var person = ["Bharat Singh", 150, "brown", false, ,];

for (var i = 0; i < person.length; i++) {
  console.log(person[i]);
}

var data = [null, undefined, 150, "string", false, , ,];

for (var i = 0; i < data.length; i++) {
  console.log(data[i]);
}

console.log("===================");
//Modifying an array
var fruits = ['Apple','Orrange','Mango','Banana']
fruits[1] = 'Grapes'

for(var i=0;i<=fruits.length-1;i++){
    console.log(`fruits at index ${i} ${fruits[i]}`);
}

console.log("====================");
//To delete everything from an array
var movies = ['Love mocktail','Arasu','abhi']

for (var i=0;i<movies.length;i++){
        console.log(movies[i])
    }
 console.log(movies.length);  
 movies.length = 0
 console.log(movies.length);
 for (var i=0;i<movies.length;i++){
    console.log(movies[i])
}
 

 //Array using new keyword
 var fruits = new Array('Apple','Orrange','Mango','Banana')
 
 for(var i=0;i<=fruits.length-1;i++){
     console.log(`fruits at index ${i} ${fruits[i]}`);
 }