// string length
const str  = "Sndeep and Arpitha"
const rsult = str.length
console.log(rsult);

// string upperCase

const str1 = "welcome to testYantra"
const result1 = str1.toUpperCase()
console.log(result1);

// string LoweCase

const str2 = "WELCOME TO TECHNO ELEVATE"
const result2 = str2.toLocaleLowerCase()
console.log(result2);

// concate 
const str3 = "welcome"
const str4 =" Javascript"
const str5 =" react.js"
const result4 = str3.concat( str4,str5)
console.log(result4);


// includes


const str6 = "hello david"
const result6 = str6.includes('l')
console.log(result6);


// startsWith 

const str7 = "windows"
const result7 = str7.startsWith("wi")
console.log(result7);

// endstWith 

const str8 = "windows"
const result8 = str8.endsWith("s")
console.log(result8);

// Replace 
const str9 = "Google"
const res9 = str9.replace("Google","Flipkart" )
console.log(res9);

//Search 
const str10 = "welcome "
const res = str10.search("da")
console.log("serach",res);


//trimStart

const str11 = "     yahoo      "
console.log(str11);
const result11 = str11.trimStart() //remove white space in the start
console.log(result11);

//trimEnd()

const str12 = "     yahoo      "
//console.log(str12);
const result12 = str12.trimEnd() //remove white space in the start
console.log(result12);

//trim

const str13 = "     yahoo      "
//console.log(str12);
const result13 = str13.trim() //remove white space in the start
console.log(result13);