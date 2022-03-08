import React from "react";
import CategoryCard from "./CategoryCard";

function Filter({setSelection, partsArray}) {
    const partsCategory = partsArray.map (partObj => <CategoryCard {...partObj}/>)
  
    function handleFilter(e){
    setSelection(e.target.value)
  
  }

  return (
    <div>{partsCategory}</div>
    // <div className = "filter">
    //   <label for="parts">Choose a CPU</label>
    //   <select onChange={handleFilter} name="area" id="filter">
    //    {parts}
    //   </select>
    // </div>
  );
}

export default Filter;