let books = [
  { bname: "javascript", price: 250 },
  { bname: "React", price: 300 },
];

function getBooks() {
  setTimeout(() => {
    let res = "";
    books.forEach((data, index) => {
      //return type of foreach is undefined
      res = res + `<li>${data.bname}</li>`;
    });
    console.log(res);
    document.body.innerHTML = res;
  }, 1000);
}
getBooks();

function addBooks(data){
   setTimeout(()=>{
       books.push(data)
       console.log(books);
   },2000)
   
}

addBooks({bname:"node",price:150})



