import React from 'react'
import { v4 as uuidv4 } from "uuid";
import BuildCard from './BuildCard'

function Builds({buildsArray}) {

    const buildSpecs = buildsArray.map(buildObj => <BuildCard key={uuidv4()} {...buildObj}/>)

  return (
    <div className="builds-container">{buildSpecs}</div>
  )
}

export default Builds