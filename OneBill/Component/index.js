class Header extends React.Component {
  render() {
    console.log(this.props.uName);
    this.props.uName = "Sathish";
    return this.props.uName;
  }
}
ReactDOM.render(<Header uName="Abhinav" />, document.getElementById("root"));
