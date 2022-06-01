console.log('js started');

// promises
//demo1
const promiseExample=new Promise(function(resolve,reject){
    if(10>5){
        resolve('10 is greater than 5')
    }else{
        reject('10 is less than 5')
    }
})

promiseExample.then(function(result){
    console.log(result);
}).catch(function(reject){
    console.log(reject)
})

//////
function greet(){
    console.log('good morning');
}
greet()

console.log('js ended');