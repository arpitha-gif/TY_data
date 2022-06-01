console.log("hi");

var fruits = ["apple", "banana", "orange", "mango"];
console.log("=================");
// debugger
console.log(fruits[0]);
console.log(fruits[1]);

console.log("================");

for (var i = 0; i < fruits.length; i++) {
  console.log(`fruits at index ${i} ${fruits[i]}`);
}

console.log("=================");

for (var i = fruits.length - 1; i >= 0; i--) {
  console.log(`fruits at index ${i} ${fruits[i]}`);
}

console.log("=================");

var person = ["Bharat Singh", 150, "brown", false, , ,];

for (var i = 0; i < person.length; i++) {
  console.log(person[i]);
}

var data = [null, undefined, 150, "string", false, , ,];

for (var i = 0; i < data.length; i++) {
  console.log(data[i]);
}

// for (var i=0;i<movies.length;i++){
//     console.log(movies[i])
// }
// movies.length=0;
// movies=[]; // to delete everything from array
// console.log(`movies : ${movies}`);

// array of objects

var books = [
  {
    title: "javascript",
    price: 1500,
  },
  {
    title: "java",
    price: 750,
  },
  {
    title: "python",
    price: 1000,
  },
];

// to get books price more than 1000

for (var i = 0; i < books.length; i++) {
  if (books[i].price > 1000) {
    console.log(books[i]);
  } else {
    console.log("No books available in this price");
  }
}

// books whose title length is more than 4

// for (var i=0;i<books.length;i++){
//     if(books[i].title.length>4){
//         console.log(books[i])
//     }else{
//         console.log("No books available");
//     }
// }
