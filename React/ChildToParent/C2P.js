class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message : "Parent"
        }
    }

    handler(){
        alert(`Hello ${this.state.message}`)
    }

    render(){
        return <div>
            {/* {this.state.message} */}
            {/* <button onClick = {()=>{this.handler()}}>Click</button> */}
            <Child greet = {()=>{this.handler()}}/>
        </div>
    }
}

function Child(props){
    return <div>
    <button onClick = {props.handler}>Click</button>
    </div>
}

ReactDOM.render(<Child/>,document.getElementById('container'))