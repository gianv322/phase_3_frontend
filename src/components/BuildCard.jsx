import React, {useState, useEffect} from 'react'

function BuildCard({id, name, price}) {

  const [chassis, setChassis] = useState(null)
  const [cpu, setCpu] = useState(null)
  const [gpu, setGpu] = useState(null)
  const [motherboard, setMotherboard] = useState(null)
  const [power, setPower] = useState(null)
  const [storage, setStorage] = useState(null)
  const [memory, setMemory] = useState(null)

  const handleFocus = () => {
    fetch(`http://localhost:9292/builds/${id}`)
      .then(r => r.json())
      .then(data => {
        setChassis(data.components[0])
        setCpu(data.components[1])
        setGpu(data.components[2])
        setMotherboard(data.components[3])
        setPower(data.components[4])
        setStorage(data.components[5])
        setMemory(data.components[6])
      })
  }


  return (
    <div className="build-container" onClick={handleFocus}>
      <h2>Name: {name}</h2>
        <ul>
          <li>Price: ${price}</li>
          {chassis && <li>{`Case: ${chassis.name}, $${chassis.price}`}</li>}
          {cpu && <li>{`CPU: ${cpu.name}, $${cpu.price}`}</li>}
          {gpu && <li>{`GPU: ${gpu.name}, $${gpu.price}`}</li>}
          {motherboard && <li>{`Motherboard: ${motherboard.name}, $${motherboard.price}`}</li>}
          {power && <li>{`Powers-supply: ${power.name}, $${power.price}`}</li>}
          {storage && <li>{`Storage: ${storage.name}, $${storage.price}`}</li>}
          {memory && <li>{`Memory: ${memory.name}, $${memory.price}`}</li>}
        </ul>
    </div>
    
  )
}

export default BuildCard