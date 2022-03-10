import React from 'react'

function BuildCard({name, total_price, motherboard, gpu, cpu}) {
  return (
    <div>
      <h2>Name: {name}</h2>
        <ul>
          <li>Price: ${total_price}</li>
          <li>MOBO: {motherboard}</li>
          <li>CPU: {cpu}</li>
          <li>GPU: {gpu}</li>
        </ul>
    </div>
    
  )
}

export default BuildCard