function MyApp(){
    const [user,setUser] = React.useState({
        userName: '',
        password: ''
    })

    const login=(event)=>{
        //preventdefault used to avoid the alert msg
        event.preventdefault();
        console.log(user);
    }

    const updateUsername = (event) => {
        console.log(event.target.value);
        setUser({
            ...user,
            userName:event.target.value
        })
    }

    const updatePassword = (event) => {
        console.log(event.target.value); //capture the value of particular event
        setUser({
            ...user,
            password:event.target.value
        })
    }
     
    return <form>
        UserName: <input type = 'text'
                   value={user.userName}
                   // onchange of every evt it triggers nd call the function
                   onChange={(event)=>{updateUsername(event)}}/> 
        <br/>
        <br/>
        Password: <input type = "password"
                value={user.password}
                onChange={(event)=>{updatePassword(event)}}/>
        <br/>
        <button onClick ={login}>Login</button>
        {/* <p>{user.updateUsername}</p> */}
        {/* <p>{user.updatePassword}</p> */}
    </form>
}

ReactDOM.render(<MyApp/>,document.getElementById('container'))