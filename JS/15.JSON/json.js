// can use this for deep copy

let person={
    name:'Ajay',
    age:13,
    color:"black",
    model:{
        year:8888,
    }
}
//to convert from js to json

const stringifiedPerson= JSON.stringify(person)
console.log('After conversion from JS to JSON',stringifiedPerson);

// console.log('===================================');

// //to convert from json to js

const jsPersonObject= JSON.parse(stringifiedPerson) // new deep copied object
console.log('After conversion from JSON to JS',jsPersonObject);

person.model.year=765; 
console.log(person.model.year);          
 //when this changes the below one doesnt changes
console.log(jsPersonObject.model.year);