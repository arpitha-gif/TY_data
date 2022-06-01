class Header extends React.Component {
  render() {
    console.log(this.props.name);
    return (
      <div>
        <h1>hello</h1>
        <h1>Hi</h1>
      </div>
    );
  }
}

class Content extends React.Component{
    render(){
        return <p>Content {this.props.firstName} {this.props.lastName} </p>
    }
}

class Footer extends React.Component{
    render(){
        return (
            <p>Footer</p>
        )
    }
}

ReactDOM.render(
  <div>
    <Header name="Zayn Mallik" />
    <Content firstName = "Zayn " lastName = "Mallik" />
{/* <Content lastName = "Mallik" /> */}
<Footer/>
  </div>,
  document.getElementById("container")
);
