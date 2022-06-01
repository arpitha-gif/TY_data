//without callback
function first(){
    setTimeout(function(){
        console.log("first function")
    }, 5000)
}

function second(){
    console.log("second function")
}
function third(){
    console.log("third function")
}

first()
second()
third()

// with callback
function first(test){
    setTimeout(function(){
        console.log("first function")
        test() //second()
    }, 5000)
}

function second(){
    console.log("second function")
}
function third(){
    console.log("third function")
}
first(second)
first(third)



