function MyApp(){
    const [bikes,setBikes] = React.useState(['BMW','KTM','Vikrant'])
    
    const removeKTM =()=>{
        const indexOfKTM = bikes.indexOf('KTM')
        console.log(indexOfKTM);
        if(indexOfKTM>=0){
        bikes.splice(indexOfKTM,1)
        
        setBikes([...bikes]) //Updating the state..it is like setState
        }
    };

    //prevent default
    const navigateGoogle = (event)=>{
        console.log(event);
        event.preventDefault();
    }

    return(
        <div>
            {bikes.length}
            {bikes.map((bike,index)=>{
                return <p key ={index}>{bike}</p>
            })}
            <button onClick = {removeKTM}>Remove KTM</button>
            
        </div>
    )
}

ReactDOM.render(<MyApp/>,document.getElementById('container'))