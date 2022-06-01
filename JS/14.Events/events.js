function showName(){
    const h1Element=document.querySelector('.showHideName')
    console.log(h1Element);
    h1Element.style.visibility="visible"
}

function hideName(){
    const h1Element=document.querySelector('.showHideName')
    console.log(h1Element);
    h1Element.style.visibility="hidden";
}

function showHideName(){
    const h1Element=document.querySelector('.showHideName')
    console.log(h1Element);
    
    if(h1Element.style.visibility==="visible"){
        h1Element.style.visibility="hidden"
    }else{
        h1Element.style.visibility="visible"
    }
    
}
/////////////////////////////////////////////////////////////
//keydown
function getPrice(){
    console.log('price')
    const priceElement= document.getElementById('price')
    console.log('value - ', priceElement.value);
}
//keyup
function showPrice(){
    console.log('show Price')
    const priceElement= document.getElementById('price');
    console.log('value - ', priceElement.value);

    //display value in div tag 
    const divElement=document.getElementById('priceValue')
    divElement.innerText=priceElement.value
}

// eventlistener

const buttonEle = document.getElementById('clickEvent')
buttonEle.addEventListener('click', function(event){
    console.log('kavitha Clicked the button');
    console.log(event);
})

buttonEle.addEventListener('mouseover', function(){
    console.log('mouse over');
})
//input tag
const inputEle=document.getElementById('nameValue')
inputEle.addEventListener('keyup',(event)=>{
    console.log(event);
    if(event.key==='Enter'){
        console.log('value - ',event.target.value)
    }
})

// /////////////////////////////////////////////////////
// manipulate checkbox by button click
const butEle= document.getElementById('checkAgree')
butEle.addEventListener('click',()=>{
    document.getElementById('agree').checked=true
})
//prac
const rEle=document.getElementById('cliko')
rEle.addEventListener('click',function(event){
    console.log('pussy')
    console.log(event)
})