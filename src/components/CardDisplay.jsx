import React from 'react'
import Cards from './Cards'
import { v4 as uuidv4 } from "uuid";

function CardDisplay({filterPartsArray}) {
    const cardComponents = filterPartsArray.map(item => <Cards key={uuidv4()} {...item}/>)
    return (<ul className="card-container">
        {cardComponents}
        </ul>)
}

export default CardDisplay