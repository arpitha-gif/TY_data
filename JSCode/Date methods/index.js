//way1

// const date = new Date()
// // console.log(date.now()); //same as getDate()
// console.log(date.getDate()); // to get current system date
// console.log(date.getFullYear())
// console.log(date.getDay())
// console.log(date.getMonth())
// console.log(date.getMilliseconds())
// console.log(date.getMinutes())
// console.log(date.getHours())


//way2

// const dateone = new Date(2022,02,06,10,10,6,256)
// console.log(dateone);
// console.log(dateone.getDate()); // to get current system date
// console.log(dateone.getFullYear())
// console.log(dateone.getDay())
// console.log(dateone.getMonth())
// console.log(dateone.getMilliseconds())
// console.log(dateone.getMinutes())
// console.log(dateone.getHours())

//way3

const dateMilliseconds = new Date(100000000000) //from 1st jan 1970 it calculate specified milisec nd gives the res
console.log(dateMilliseconds);

//way4

const dateTwo = new Date('1 july 2020')
const aryMoth = ["january","faburary","march","april","june","july",
"august","september","october","november","december"]
const aryMoth2 = dateTwo.getMonth()
console.log(`${aryMoth} ${aryMoth2}`);