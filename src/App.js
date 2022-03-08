import React, {useState, useEffect} from 'react';
import Carddisplay from './components/Carddisplay'
function App() {
  
  const [partsArray, setPartsArray] = useState([])
  useEffect(() => {
    fetch ('http://localhost:9292/parts')
    .then (res => res.json())
    .then (setPartsArray => console.log(setPartsArray));
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Carddisplay partsArray={partsArray}/>
    </div>
  );
}

export default App;
