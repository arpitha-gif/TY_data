//without props
function Sample (){
    return <h1>Dummy Data</h1>
}

//props in functional component
// function Header (props){
//     return <h1>Header {props.logo} {props.brand} {props.price} </h1>
// }

//using destructuring
function Header ({logo, price, brand}){
    return <h1>Header {logo} {brand} {price} </h1>
}

function Content (props){
    return <p>Content {props.userName}</p>
}

function Footer ({person}){
    return <h2>Footer {person.firstName} {person.lastName}</h2>

}

ReactDOM.render(<div>
<Sample/>
<Header logo = "car.jpg" brand = "volvo" price= "120000000000" />
<Content userName= "Akshay"/>
<Footer person = {{firstName: "Ajay", lastName:"k"}} />
</div>, document.getElementById('container'))