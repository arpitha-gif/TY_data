class Welcome extends React.Component {
  state = {
    name: "Megha",
  };
     changeName(){
      //asynch
      this.setState({
          name:"Bhagya"
      })
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick = {()=>this.changeName()}>Click</button>
      </div>
    );
  }
}

ReactDOM.render(<Welcome />, document.getElementById("root"));
