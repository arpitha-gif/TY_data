class Parent extends React.Component{
    constructor(props){
          super(props)
          this.state ={
              text : "Mounting phase",
            //   show:true
          }
          console.log("Parent Constructer executed");
    }

    static getDerivedStateFromProps(props,state){
        console.log("Parent getderivedstatefromprops executed");
        return state
    }

    render(){
        console.log("Parent render executed");
        return <div>
            <p>{this.state.text}</p>
            <button onClick={()=>{this.updateText('upadting pahse')}}>click</button>
            {/* {this.state.show? <Child/>:null} */}
            </div>
    }

    updateText(text){
        this.setState({
            text:text
            // show:false
        })
    }

    //shouldcomponentupdate always return true
    shouldComponentUpdate(){
        console.log("Parent shouldComponentUpdate executed");
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Parent getSnapshotBeforeUpdate executed");
        return 'scrolling position'
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("Parent compentDidUpdate executed");
        console.log("----------------------------------");
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        console.log('snapshot', snapshot);
        console.log("---------------------------------");
    }

    componentDidMount(){
        // 1.used to make side effect i.e making Api call nd interacting with dom
        // 2.Used to update state
        console.log("Parent Compnentdidmount executed");
    }
}

// class Child extends React.Component{
//     render() {
//         return (
//             <div>
//                 Child Component
//             </div>
//         )
//     }
//     componentWillUnmount(){
//         console.log("Child componentWillUnmount executed");
//     }
// }


ReactDOM.render(<Parent/>,document.getElementById('container'))