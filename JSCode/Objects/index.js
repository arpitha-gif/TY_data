var student = {
    fName : "Arpitha",
    lName : "Gowda",
    age : 28,
    marks : 100
}

console.log(student.fName);
//console.log(student["fName"]); 

//using new operator
var emp = new Object()
emp.fName = 'sandeep',
emp.age = 30

console.log(emp.fName);

var emp1 = new Object({ename:'chukki',age:20})
console.log(emp1.ename);

//using for-in
for(var key in student){
    console.log(student[key]);
}

//storing function in object
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

console.log(person.fullName());
console.log(person);

for(var key in person){
    console.log(person[key]);
}

//array of objects
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

 for(var i=0;i<=books.length;i++){
     console.log(books[i]);
 } 

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
  