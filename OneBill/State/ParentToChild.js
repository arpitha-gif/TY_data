function App(props){
   return <div>
       <Home appName = "Netflix" userName = {props.userLoggedIn}/>
   </div>
}

function Home(props){
    return <div>
        <h1>{props.appName}</h1>
        <h1>{props.userName}</h1>
    </div>
}

ReactDOM.render(<App userLoggedIn = "Scott"/>,document.getElementById('root'))