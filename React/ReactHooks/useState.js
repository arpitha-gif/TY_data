function MyApp(){
    // const myState = React.useState("Ajith")
    // console.log(myState);
   
    const [name, setName] = React.useState('Ajith')
    // const [isAdmin,setIsAdmin] = React.useState(true)

//    let updateName =  (a)=>{
//         console.log(a);
//         // console.log(isAdmin);
//         setName('Guru') //setState(changing state)
//         // setIsAdmin(false)
//     }
    let updateName =  ()=>{
        console.log(name);
        // console.log(isAdmin);
        setName('Guru') //setState(changing state)
        // setIsAdmin(false)
    }
   

    return(
        <div>
            <p>{name}</p>
        {/* <button onClick={()=>{updateName("abc")}}>UpdateName</button> */}
        <button onClick={updateName}>UpdateName</button>
        </div>
    )
}

ReactDOM.render(<MyApp/>,document.getElementById('container'))