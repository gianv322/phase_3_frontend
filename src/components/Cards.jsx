import React from 'react'

function Cards({name, price, category,}) {
  return (
  <div>
    <p>{name}</p>
    <p>{price}</p>
    <p>{category}</p>
  </div>
  )
}

export default Cards