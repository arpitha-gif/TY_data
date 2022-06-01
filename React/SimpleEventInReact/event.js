// class Header extends React.Component{
//      render(){
//          return <div>
//              <h1>{this.props.fName}</h1>
//              <button onClick = {this.getData}>Click</button>
//          </div>
//      }

//      getData(){
//          console.log('Get data executed');
//          console.log(this);
//      }
// }

// ReactDOM.render(<Header fName = "Arpitha"/>,document.getElementById('container'))

// functional component

// function Header(props){
//     // const getData = () =>{
//     //     console.log(props.fname);
//     // }
//     function getData(){
//         console.log(props.fname);
//     }

//     return <h1>
//         <button onClick={getData}>click</button>
//     </h1>
// }

// ReactDOM.render(<Header fname="Ram"/>,document.getElementById('container'))

//using bind

class Header extends React.Component{
    render(){
        return <div>
            <h1>{this.props.fName}</h1>
            <button onClick = {this.getData.bind(this)}>Click</button>
        </div>
    }

    getData(){
        console.log('Get data executed');
        console.log(this);
    }
}

ReactDOM.render(<Header fName = "Arpitha"/>,document.getElementById('container'))