class MyApp extends React.Component{
    state = {
       adminName : 'Girish',
       userName : 'Guru',
       isAdmin : false
    }

    render(){
        //way1

        const {adminName, userName, isAdmin} = this.state
        let renderData = null
        if(isAdmin){
            renderData =<div>
                <h1>{adminName}</h1>
                <div>Home</div>
                <div>Login</div>
            </div> 
        }
        else{
            renderData =<div>
                <h1>{userName}</h1>
                <div>Login</div>
            </div>
        }
        return(
            <div>
                {/* way 2 */}

                {/* {this.state.isAdmin?<h1>{this.state.adminName}</h1>:<h1>{this.state.userName}</h1>}
                {this.state.isAdmin?<div>Home</div>: null}
                <div>Login</div> */}
                {renderData}
                <button onClick={()=>{
                    this.changeUserAdminView()
                }}>{isAdmin?'Click here to see user view':'Click here to see admin view'}</button>
            </div>
        )
    }
   
    changeUserAdminView = () =>{
        //way1

        // if(this.state.isAdmin){
        //     this.setState({
        //         isAdmin: false
        //     })
        // }else{
        //     this.setState({
        //         isAdmin: true
        //     })
        // }

        //way2

        this.setState({
            isAdmin: !this.state.isAdmin
        })
    }

}

ReactDOM.render(<MyApp/>,document.getElementById('container'))
