class Parent extends React.Component{
    constructor(props){
        const name = 'kapil'
        let newName="kshdkjhsd"
          super(props)
          this.state ={
              text : "Monting phase"
          }
          console.log("Constructer executed");
        //   console.log(this.props.name);
    }

    

    static getDerivedStateFromProps(props,state){
        console.log("Parent getderivedstatefromprops executed");
        console.log(state);
        this.setState({
            text:""
        })
        return state
        
    }

    render(){
        console.log("Parent render executed");
        return <div>{this.state.text}</div>
    }

    componentDidMount(){
        // 1.used to make side effect i.e making Api call nd interacting with dom
        // 2.Used to update state
        //atlast everything/all the content ll be loaded from vdom to dom(browser)
        console.log("Parent Compnentdidmount executed");
    }
}

ReactDOM.render(<Parent name="abc"/>,document.getElementById('container'))