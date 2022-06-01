const fruits = ['Apple','Orrange','Mango','Banana']

const data = <ul>
{fruits.map((fruit,index)=>{
    return <li key={index}>{fruit}</li>
})}
</ul>

ReactDOM.render(data,document.getElementById('root'))