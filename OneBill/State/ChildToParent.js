class Parent extends React.Component{
    state = {
        txt:"Hello"
    }
    render(){
        return <div>
            <h1>{this.state.txt}</h1>
            <Child action = {()=>this.getDataFromChild.bind(this)}/>
        </div>
    }

    getDataFromChild(childData){
        console.log(childData);
        this.setState({
            txt : childData
        })
    }

}

function Child(props){
    const str = "Welcome"
    return <div>
        <button onClick = {()=>props.action(str)}>Send Data to Parent</button>
    </div>
}

ReactDOM.render(<Parent/>,document.getElementById('root'))