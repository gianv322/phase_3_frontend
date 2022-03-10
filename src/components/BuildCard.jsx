import React from 'react'

function BuildCard({name, total_price, chassis, motherboard, gpu, cpu}) {
  return (
    <div className="build-container">
      <h2>Name: {name}</h2>
        <ul>
          <li>Price: ${total_price}</li>
          <li>Case: {chassis}</li>
          <li>MOBO: {motherboard}</li>
          <li>CPU: {cpu}</li>
          <li>GPU: {gpu}</li>
        </ul>
    </div>
    
  )
}

export default BuildCard