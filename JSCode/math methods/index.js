console.log(Math.round(1.8));
console.log(Math.abs(-6)); //absolute number
console.log(Math.pow(2,8));
console.log(Math.min(5,6)); //can take n num of elemewnt
console.log(Math.max(5,6,90));

// const result = Math.max(1,2,3,4,45,6,6,6,)
// console.log(result);

console.log(Math.ceil(12.5)); //upper value
console.log(Math.floor(12.2)); // lower value
console.log(Math.random());

// generate random Node. between 1 to 100 

console.log(Math.ceil(Math.random()*100)+1)
//random number generates below 1, if i multiply by 100 random num generates below 100 for 50 below 50

//assignment - generate random name

const namVal = ["Arpitha","Chtean","Hamsa","Vijendra","Satyam",
"David","Deepthi-mam","nilim","ajay-beda","stylish"]

const randomName =Math.floor( Math.random()*namVal.length)
console.log("who will pay coffee bill");
console.log(namVal[randomName]);