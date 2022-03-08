import React from "react";

function Filter({setSelection}) {
  
  function handleFilter(e){
    setSelection(e.target.value)
  
  }

  return (

    <div className = "filter">
      <label for="parts">Choose a Part</label>
      <select onChange={handleFilter} name="area" id="filter">
        <option value="All">All</option>
        <option value="GPU">GPU</option>
        <option value="Motherboard">Motherboard</option>
        <option value="Memory">Memory</option>
        <option value="CPU">CPU</option>
        <option value="Storage">Storage</option>
        <option value="PowerSupply">Power Supply</option>
        <option value="Case">Case</option>
        <option value="CPUCooler">CPU Cooler</option>
      </select>
    </div>
  );
}

export default Filter;