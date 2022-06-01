class Header extends React.Component{
    render(){
        console.log(this.props.name);
        //this.props.name = "Sandeep"  -- error bcz we can't assign value to props. it is read only property
        return this.props.name
    }
}

ReactDOM.render(<Header name = "Arpitha" />,document.getElementById('container'))