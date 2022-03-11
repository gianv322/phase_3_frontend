import "./App.css";
import React, {useState, useEffect, Fragment} from 'react';
import { Routes, Route, Link, Switch } from "react-router-dom";

import Header from './components/Header'
import Buttons from './components/Buttons'
import Builds from './components/Builds'
import CreateBuild from './components/CreateBuild'

function App() {
  
  const [partsArray, setPartsArray] = useState([])
  const [buildsArray, setBuildsArray] = useState([])
  const [selection, setSelection] = useState([])

  useEffect(() => {
    fetch ('http://localhost:9292/components')
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

  function addNewBuild (newBuild) {
    setBuildsArray(buildsArray => {
      return [...buildsArray, newBuild];
    });
  }
  
  return (
    <div className="App">
        
        <Header />
        <Buttons />
          <Switch>
            <Route exact path = "/" >
              {/* <Filter setSelection={setSelection} partsArray={partsArray}/> */}
              {/* <CardDisplay filterPartsArray={filterPartsArray} /> */}
              <CreateBuild partsArray={partsArray} addNewBuild={addNewBuild}/>
            </Route>
          </Switch>
          <Switch>
            <Route exact path = "/builds">
              <Builds buildsArray={buildsArray} />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
