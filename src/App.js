import "./App.css";
import React, {useState, useEffect} from 'react';
import CardDisplay from './components/CardDisplay'
import Header from './components/Header'
import Buttons from './components/Buttons'
import Filter from './components/Filter'

function App() {
  
  const [partsArray, setPartsArray] = useState([])
  const [selection, setSelection] = useState([])

  useEffect(() => {
    fetch ('http://localhost:9292/parts')
    .then (res => res.json())
    .then (setPartsArray);
  }, [])

  const filterPartsArray = partsArray.filter((partObj) => {
    if (selection === "All") {
      return true;
    } else if (partObj.category === selection) {
      return partObj;
    }
  });

  function handleChange (){
    // Change State of Parts Displayed
    
  }

  
  return (
    <div className="App">
      <Header />
      <Buttons />
      <Filter setSelection={setSelection}/>
      <CardDisplay filterPartsArray = {filterPartsArray} />
    </div>
  );
}

export default App;
