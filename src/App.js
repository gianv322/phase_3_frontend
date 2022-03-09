import "./App.css";
import React, {useState, useEffect} from 'react';
// import { Routes, Route, Link, Switch } from "react-router-dom";

import CardDisplay from './components/CardDisplay'
import Header from './components/Header'
import Buttons from './components/Buttons'
import Filter from './components/Filter'
import Builds from './components/Builds'

function App() {
  
  const [partsArray, setPartsArray] = useState([])
  const [buildsArray, setBuildsArray] = useState([])
  const [selection, setSelection] = useState([])

  useEffect(() => {
    fetch ('http://localhost:9292/parts')
    .then (res => res.json())
    .then (setPartsArray);
  }, [])

  useEffect(() => {
    fetch ('http://localhost:9292/builds')
    .then (res => res.json())
    .then (setBuildsArray);
  }, [])

  const filterPartsArray = partsArray.filter((partObj) => {
    if (selection === "All") {
      return true;
    } else if (partObj.category === selection) {
      return partObj;
    }
  });

  function handleChange () {
    // Change State of Parts Displayed
    
  }

  
  return (
    <div className="App">
      <Header />
      <Buttons />
          <Filter setSelection={setSelection} partsArray={partsArray}/>
          <CardDisplay filterPartsArray={filterPartsArray} />
          <Builds buildsArray={buildsArray} />
    </div>
  );
}

export default App;
