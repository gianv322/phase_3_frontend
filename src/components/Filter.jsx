import React from "react";
import CategoryCard from "./CategoryCard";
import { v4 as uuidv4 } from "uuid";

function Filter({setSelection, partsArray}) {
    const partsCategory = partsArray.map (partObj => <CategoryCard key={uuidv4()} partsArray={partsArray} {...partObj}/>);
    const filterPartsCategory = removeDuplicates(partsCategory)

    console.log(filterPartsCategory)

    function removeDuplicates(arr) {
      return arr.filter((item, 
          index) => arr.indexOf(item) === index);
  }

  
  
  //   function handleFilter(e){
  //   setSelection(e.target.value)
  // }

  return (
    <div className="filter">{filterPartsCategory}</div>
  );
}

export default Filter;