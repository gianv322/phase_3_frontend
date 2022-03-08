import "./App.css";
import React, {useState, useEffect} from 'react';
import CardDisplay from './components/CardDisplay'
import Header from './components/Header'
import Buttons from './components/Buttons'
import Forms from './components/Forms'

function App() {
  
  const [partsArray, setPartsArray] = useState([])

  useEffect(() => {
    fetch ('http://localhost:9292/parts')
    .then (res => res.json())
    .then (setPartsArray);
  }, [])

  function handleChange (){
    // Change State of Parts Displayed
    
  }

  
  return (
    <div className="App">
      <Header />
      <Buttons />
      <Forms partsArray={partsArray} handleChange={handleChange} />
      <CardDisplay partsArray={partsArray} />
    </div>
  );
}

export default App;
