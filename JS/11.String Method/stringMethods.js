//strings are immutable

//toUpperCase method
let str='hello'
 str=str.toUpperCase()
 console.log(`str : ${str}`);

// toLowerCase method

str=str.toLowerCase()
console.log(`str : ${str}`);

// charAt method

let searchedCharacter=str.charAt(4)
console.log(`searchedCharacter : ${searchedCharacter}`);

//indexOf method

const indexOfE=str.indexOf('e')
console.log(`indexOfE: ${indexOfE}`)

//concat method
const greet=str.concat(', Good morning')
console.log(`greet- ${greet}`);

// includes method

const includesO= str.includes('O')
console.log(`includesO ${includesO}`);

//replace method

const replaceH=str.replace('h','H')
console.log(`replaceH ${replaceH}`);

// replace all

const replaceALLs=str.replaceAll('l','o')
console.log(`replaceALLs - ${replaceALLs}`)

// substr method 

const extractedString= str.substr(1,3)
console.log(`extractedString - ${extractedString}`);

// substring method

const extractedString1= str.substring(1,3)
console.log(`extractedString-substring - ${extractedString1}`);

//trim method

const note='       hello,  welcome to TY     '
const noteAfterTrim= note.trim()
console.log(`noteAfterTrim - ${noteAfterTrim}`)
// trimLeft

const noteAfterTrimLeft=note.trimLeft()
console.log(`noteAfterTrimLeft - ${noteAfterTrimLeft}`)

//trim right

const noteAfterTrimRight=note.trimRight()
console.log(`noteAfterTrimRight - ${noteAfterTrimRight}`)

// split

let data='hello';
let dataAfterSplit=data.split('')
console.log(`dataAfterSplit - ${dataAfterSplit}`);

// example- reverse a string

const reversedString=data.split('').reverse().join('')
console.log(`reversedString - ${reversedString}`);