class Parent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          show: true 
      };
    }
    deleteChild = () => {
      this.setState({
           show: false 
          });
    };
  
    render() {
      return(
      <div>
        {this.state.show ? <ChildCom /> : null}
        <button onClick={this.deleteChild}>delete</button>
      </div>
      )
    }
  }


class ChildCom extends React.Component {
    render() {
      return <h1>Child Component</h1>;
    }
    componentWillUnmount() {
      alert("Component will unmount");
    }
  }



ReactDOM.render(<Parent/>,document.getElementById('container'));

