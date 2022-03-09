import React from 'react'
import {Link} from "react-router-dom"

function Buttons() {
  return (
    <div className="button-container">
        <Link to = '/' exact className = "home"> <h1>Parts</h1>
          </Link>
        <Link to = '/builds' exact className = "builds"> <h1>Builds</h1>
        </Link>
    </div>
  )
}

export default Buttons