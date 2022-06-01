class Welcome extends React.Component{
    state={
        fname: 'Ajay'
    }

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         fname: 'Ajay'
    //     }
    //  }

    // changeName = () =>{
    //     console.log('Before setState',this.state.fname);
    //     this.setState({
    //         fname:'Vijay'
    //     })
    //     console.log('After setState',this.state.fname);
    // }

    changeName(){
            console.log('Before setState',this.state.fname);
            //setstate is asynchronous
            this.setState({
                fname:'Vijay'
            })
            // do not try to access the state soon after you update it
            console.log('After setState',this.state.fname);
        }

    render(){
        return <div>
            <h1>{this.state.fname}</h1>
            {/* <button onClick={this.changeName}>Click</button> */}
            <button onClick={()=>{this.changeName()}}>Click</button>
        </div>
    }
}

ReactDOM.render(<Welcome/>,document.getElementById('container'))