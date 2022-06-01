function getName(fruit1, fruit2) {
    console.log(this);   
    console.log(fruit1);
    console.log(fruit2);
}

// getName()

const person = {
    firstName : 'Ajay',
    age : 24
}

const teacher = {
    subject : 'Maths'
}
// person.getName()

// window.getName.call(person)
getName.call(person, 'Apple', 'Orange')

const john = {
    firstName : 'John',
    lastName : 'D',
    presentation : function(formal, test) {
        console.log('presentation func executed');
        console.log('test', test);
        console.log('formal', formal);
        if (formal === 'Formal') {
            console.log(`Welcome ${this.firstName}`);
        } else {
            console.log(`Hey Whatsup ${this.firstName}`);
        }
    }
}

const emily = {
    firstName : 'Emily',
    lastName : 'S'
}

john.presentation.call(emily, 'Formal')
john.presentation.call(emily, 'Casual')
john.presentation.apply(emily, ['Formal', 'value'])

console.log('------------------------------------------------');

const bindCopyFunc = john.presentation.bind(emily, 'Formal')
bindCopyFunc('Bike')
bindCopyFunc('Car')
bindCopyFunc('Jaguar')
bindCopyFunc('Mac')
bindCopyFunc('Icecream')
bindCopyFunc('Cake')

console.log('------------------------------------------------');




