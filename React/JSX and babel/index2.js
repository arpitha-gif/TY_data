const mobiles = ['iphone','samsung','nokia','redme']

const e1 = React.createElement('ul',null,
                               mobiles.map((mobiles,index)=>{
                                   //Below one gives an error as key should be unique
                                //    return React.createElement('li',null,mobiles)

                                //solution
                                return React.createElement('li',{key:mobiles+index},mobiles)
                               })) 

ReactDOM.render(e1,document.getElementById('root'))
console.log(e1);