import React from 'react'

function Cards({name, price, category}) {

  return (
  <div className="itemCard">
    <p>Name: {name}</p>
    <p>$ {price}</p>
    <p>Type: {category}</p>
  </div>
  )
}

export default Cards