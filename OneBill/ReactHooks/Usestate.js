function MyApp() {
  let [name, setName] = React.useState({fname:'Arpitha',lname:'Sandeep'});

  const updateChanges = () => {
    console.log(name);
    setName({
        ...name,
        lname:'Gowda'
    });
  };

  return (
    <div>
      <h1>{name.fname}</h1>
      <h1>{name.lname}</h1>
      <button onClick={updateChanges}>Update</button>
    </div>
  );
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
