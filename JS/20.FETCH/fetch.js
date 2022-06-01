console.log('js started');
let url='https://jsonplaceholder.typicode.com/posts'

async function fetchPosts(){
    let response= await window.fetch(url);
    let data= await response.json();

    console.log('data-',data);
    let titleDisp=data.map((val)=>{
        return val.title
    })
   console.log(titleDisp);
}
fetchPosts()


//////  
function factorial(x) {

    // if number is 0
    if (x == 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}  

// take input from the user

// const num = prompt('Enter a positive number: ');

// // calling factorial() if num is positive
// if (num >= 0) {
//     const result = factorial(num);
//     console.log(`The factorial of ${num} is ${result}`);
// }
// else {
//     console.log('Enter a positive number.');
// }

