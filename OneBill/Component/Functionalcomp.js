function Header(props) {
  return <h1>Header in functional Component{props.userName}</h1>;
}

function Content({sub1,sub2,sub3,sub4}) {
    return <h1>{sub1}{sub2}{sub3}{sub4}</h1>
}

function Footer({person}){
    return <h1>{person.fName}{person.lName}</h1>
}

ReactDOM.render(
  <div>
    <Header userName="Divya" />
    <Content sub1 = "Java" sub2 = "sql" sub3 = "React" sub4 = "javascript"/>
    <Footer person = {{fName:"Ajay",lName:"Gupta"}}/>
  </div>,
  document.getElementById("root")
);
