import React from "react";
import CategoryCard from "./CategoryCard";
import { v4 as uuidv4 } from "uuid";

function Filter({setSelection, partsArray}) {
    const partsCategory = partsArray.map (partObj => <CategoryCard key={uuidv4()} partsArray={partsArray} {...partObj}/>);
    // const partsCategory = partsArray.map (partObj => partObj.category);
  
  //   function handleFilter(e){
  //   setSelection(e.target.value)
  // }

  const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  
  const uniqueParts = partsCategory.filter(unique)

  console.log(uniqueParts)

  return (
    <div className="filter">
      {uniqueParts}
      <button>Submit Build</button>
    </div>

  );
}

export default Filter;