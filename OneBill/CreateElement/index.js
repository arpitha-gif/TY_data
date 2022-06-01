// const e1 = React.createElement('h1',null,'React JS for Onebill')
// ReactDOM.render(e1,document.getElementById('root'))

// const e1 = React.createElement('ul',null,React.createElement('li',null,'Car'),
//                                          React.createElement('li',null,'Bike'))
// ReactDOM.render(e1,document.getElementById('root'))

const mobiles = ["iphone", "samsung", "redme", "nokia", "Oneplus"];
const e1 = React.createElement(
  "ul",
  null,
  mobiles.map((mobile, index) => {
    return React.createElement("li",{key:index}, mobile);
  })
);

ReactDOM.render(e1, document.getElementById("root"));
