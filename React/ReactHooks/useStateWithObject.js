function MyApp(){
    
    const [name, setName] = React.useState({
        fname:'Arpitha',
        lname:'Sandeep'
    })
   
      const updateName = () =>{
        console.log(name);
        //without rest
        // setName({
        //     fname:'deepu'
        // })

        //with rest
        setName({
            ...name,
            fname:'deepu'
        })
    }
    return(
        <div>
            <p>{name.fname}</p>
        <button onClick={updateName}>UpdateName</button>
        </div>
    )
}

ReactDOM.render(<MyApp/>,document.getElementById('container'))