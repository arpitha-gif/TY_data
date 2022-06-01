/* referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
Where referenceNode is the node you want to put newNode after. 
If referenceNode is the last child within its parent element, that's fine,
because referenceNode.nextSibling will be null and insertBefore handles that case
by adding to the end of the list. */

const element = document.getElementById('test')
console.log('element',element);

// console.log(element.innerText);
// console.log(element.innerHTML);
// console.log(element.textContent);

element.innerText='<button>Good Evening</button>'
element.innerHTML='<button>Good Evening</button>'

document.write('welcome to JS class'); 

const pElement=document.createElement('p') 
pElement.textContent='monday mock';
// console.log('pElement', pElement)

// document.body.appendChild.pElement //to place the element at last position

// ************* ass1  to add <p> between good evening and hi

//1 method
// test.parentNode.insertBefore(pElement, test.nextSibling)

//2 method
element.insertAdjacentHTML('afterend' , '<p>MONDAY STRICT MOCK</p>')

//===========================================================

const h1Elements=document.getElementsByTagName('h1')
console.log('h1Elements -',h1Elements)

const demoClassElements=document.getElementsByClassName('demo')
console.log('demoClassElements -',demoClassElements)

const h1Element = document.querySelector('h1')
console.log('h1Element -',h1Element);

const pElements = document.querySelectorAll('p')
console.log('pElements -',pElements)

element.style.color='lightblue'
element.style.background='green'
element.style.width='40%';

const randomText = document.getElementById('randomText')

// randomText.className='randomStyle'  //for adding one class
randomText.classList='randomStyle randomStyle1' //for adding multiple classes

//********* */ ass   // apply different styles in demo class  by looping 

let loopStyle=document.querySelectorAll('.demo')
console.log(loopStyle);

for(let items of loopStyle){
    items.classList='demo1'
}