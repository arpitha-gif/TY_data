// class Welcome extends React.Component{
//     constructor(props){
//         super(props)
//         // this.getData = this.getData.bind(this)
//         this.greet = this.greet.bind(this)
//         //this.getName = this.getName.bind(this)
//     }
//     render(){
//         return <div>
//             <h1>Welcome, {this.props.fname}</h1>
//             <button onClick={this.getData.bind(this)}>click</button> 
//             <button onClick={this.greet}>Greet</button>
//             <button onClick={this.greet}>Greet</button>
//             <button onClick={this.getName.bind(this)}>Get</button>
//             {/* <button onClick={()=>{this.getName.bind}}>Get</button> */}
//             {/* Best way to call methods  */}
//             <button onClick={()=>{this.getAge(10)}}>Get Age</button>
//         </div>
//     }

//     // Best way to call methods
//     getAge = (data) => {
//         console.log(this);
//         console.log(data);
//     }

//     getName() {
//         console.log(this);
//     }

//     greet(){
//         console.log(this);
//     }

//     getData(){
//         console.log('get Data executed');
//         console.log(this.props.fname);
//     }

// }
// ReactDOM.render(<Welcome fname = 'Ram'/>,document.getElementById('container'))


class Welcome extends React.Component{
        constructor(props){
            super(props)
            this.getData = this.getData.bind(this)
            this.greet = this.greet.bind(this)
            this.getName = this.getName.bind(this)
            //this.getAge = this.getAge.bind(this)
        }
        render(){
            return <div>
                <h1>Welcome, {this.props.fname}</h1>
                <button onClick={this.getData}>click</button> 
                <button onClick={this.greet}>Greet</button>
                <button onClick={this.greet}>Greet</button>
                <button onClick={this.getName}>Get</button>
                {/* <button onClick={()=>{this.getName()}}>Get</button> */}
                {/* Best way to call methods  */}
                {/* no need to bind arrow function take care of binding */}
                <button onClick={()=>{this.getAge(10)}}>Get Age</button>
            </div>
        }
    
        // Best way to call methods
        getAge = (data) => {
            console.log(this);
            console.log(data);
        }
    
        getName = () =>{
            console.log(this);
        }
    
        greet(){
            console.log(this);
        }
    
        getData(){
            console.log('get Data executed');
            console.log(this.props.fname);
        }
    
    }
    ReactDOM.render(<Welcome fname = 'Ram'/>,document.getElementById('container'))