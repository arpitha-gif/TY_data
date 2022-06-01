//demo2 // 

const promiseExample1=new Promise(function(resolve,reject){
    if(10>5){
        const data=[100,200,300,400]
        resolve(data)
    }else{
        reject('failed to fetch')
    }
})

promiseExample1.then(result=>{
   const filterRes= result.filter(val=> val>200)
       console.log(filterRes);
       return filterRes  // return statement is neccessary to access the value in next .then
}).then(filterRes=>{
    console.log('filterRes',filterRes);
})
.catch((error)=>{
    console.error(error)
})

