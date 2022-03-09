import React from 'react'
import Option from "./Option"

function CategoryCard({partsArray, category, handleFilter}) {
  
    const parts = partsArray.map (partObj => <Option {...partObj}/>)
    
    return (
    <div className = "filter">
      <label for="parts">Choose a {category}</label>
      <select onChange={handleFilter} name="area" id="filter">
       {parts}
      </select>
    </div>
  )
}

export default CategoryCard