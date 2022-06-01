function App(props){
    return <div>
        <Home appName = "netflix" userName = {props.loggedInUser}/>
    </div>
}

function Home(props){
    return <div>
        <h1>{props.appName}</h1>
        <h2>{props.userName}</h2>
    </div>
}

ReactDOM.render(<App loggedInUser = 'Sujay'/>, document.getElementById('container'))