import React from 'react'

function Cards({name, price, category}) {

  return (
  <div className="itemCard">
    <p>Name: {name}</p>
    <p>$ {price}</p>
    <p>Type: {category}</p>
    <button>Add to Build</button>
  </div>
  )
}

export default Cards