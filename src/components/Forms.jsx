import React from 'react'

function Forms({ partsArray, handleChange}) {
// const partName = partsArray.map(partObj => partObj.category)
// console.log(partName)

    return (
        <div>
            <form>
                <label>Build Name:</label> <input type="text"></input>
                <label>PC Parts:</label> 
                <select
                    onChange={handleChange}
                    name="area"
                    id="select1"
                    placeholder="Field Textarea"
                >
                    <option value="Abs">Case</option>
                    <option value="Quads">GPU</option>
                    <option value="Glutes">CPU</option>
                    <option value="Biceps">Memory</option>
                    <option value="Triceps">Storage</option>
                    <option value="Shoulders">Power Supply</option>
                    <option value="Shoulders">Motherboard</option>
                    <option value="Chest">CPU Cooler</option>
                </select>

            </form>
        </div>
    )
}

export default Forms