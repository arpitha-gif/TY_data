class Header extends React.Component {
  render() {
      console.log(this.props.name);
    return (
      <div>
        <h1>Header Class Component {this.props.name}</h1>
        <h2>Hello Onebill</h2>
        <p>Good afternoon</p>
      </div>
    );
  }
}

class Content extends React.Component{
    render(){
       return <h1>Content Component {this.props.fName}{this.props.lName}</h1>
    }
}  

class Footer extends React.Component{
    render(){
       return <p>Footer</p>
    }
}

ReactDOM.render(<div><Header name = "UP"/>
                <Content fName = "Uva" lName = "Priya"/>
                <Footer/>
                </div>
                , document.getElementById("root"));
