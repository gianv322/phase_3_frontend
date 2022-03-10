import React, {useState} from 'react'

function CreateBuild({partsArray, addNewBuild}) {
    const [name, setName] = useState("")
    const [cpu, setCpu] = useState('')
    const [gpu, setGpu] = useState('')
    const [motherboard, setMotherboard] = useState('')
    const [chassis, setChassis] = useState('')
    // const [memory, setMemory] = useState('')
    // const [powerSupply, setPowerSupply] = useState('')
    // const [storage, setStorage] = useState('')
    // const [cpuCooler, setCpuCooler] = useState('')
    
    function handleChangeBuildName(e){
        const currentInput = e.target.value
        setName(currentInput)
    }
    function handleChangeCPU(e){
        const currentInput = e.target.value
        setCpu(currentInput)
    }
    function handleChangeGPU(e){
        const currentInput = e.target.value
        setGpu(currentInput)
    }
    function handleChangeMotherBoard(e){
        const currentInput = e.target.value
        setMotherboard(currentInput)
    }
    function handleChangeNewCase(e){
        const currentInput = e.target.value
        setChassis(currentInput)
    }
    // function handleChangeMemory(e){
    //     const currentInput = e.target.value
    //     setMemory(currentInput)
    // }
    // function handleChangePowerSupply(e){ 
    //     const currentInput = e.target.value
    //     setPowerSupply(currentInput)
    // }
    // function handleChangeStorage(e){
    //     const currentInput = e.target.value
    //     setStorage(currentInput)
    // }
    // function handleChangeCPUCooler(e){
    //     const currentInput = e.target.value
    //     setCpuCooler(currentInput)
    // }

    function addNewBuildToDatabase(newBuild) {
        fetch('http://localhost:9292/builds', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                    },
            body: JSON.stringify(newBuild),
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        const newBuild = {
            name, 
            chassis,
            cpu,
            gpu,
            motherboard
        }
        addNewBuildToDatabase(newBuild)
        addNewBuild(newBuild)
    }

    // Handle Map Array to Return Array of Part Names
    // const partNames = partsArray.map(partObj => partObj.name)
    // Filter Part Names if Includes
     
    
  return (
    <div className = "createbuild">
        <form className="form" onSubmit = {handleSubmit} required>
            <label for = "title">Build Name:</label>
            <input type = "text" placeholder = "Build Name" value = {name} onChange = {handleChangeBuildName} />
        <br></br>
            
            <label for = "CPU">Choose a CPU</label>
            <select className = "option" value = {cpu} onChange = {handleChangeCPU} >
                <option>New CPU</option>
                <option>Fast CPU</option>
                <option>Big CPU</option>
            </select>
        <br></br>
            <label for = "GPU">Choose a GPU</label>
            <select className = "option" value = {gpu} onChange = {handleChangeGPU} required>
                <option>New Gpu</option>
                <option>Fast Gpu</option>
                <option>Big Gpu</option>
            </select>
        <br></br>
            <label for = "motherboard">Choose a Mobo</label>
            <select className = "option" value = {motherboard} onChange = {handleChangeMotherBoard} required>
                <option>New motherboard</option>
                <option>Fast motherboard</option>
                <option>Big motherboard</option>
            </select>
        <br></br>
            <label for = "case">Choose a Case</label>
            <select className = "option" value = {chassis} onChange = {handleChangeNewCase} required>
                <option>New Case</option>
                <option>Big Case</option>
                <option>Small Case</option>
            </select>
            {/* <br></br>
            <label for = "memory">Choose a Memory</label>
            <select value = {memory} onChange = {handleChangeMemory}>
            <option>memory</option>
            </select>
            <br></br>
            <label for = "power-supply">Choose a Power Supply</label>
            <select value = {powerSupply} onChange = {handleChangePowerSupply}>
            <option>powersupply</option>
            </select>
            <br></br>
            <label for = "storage">Choose a Storage</label>
            <select value = {storage} onChange = {handleChangeStorage}>
            <option>storage</option>
            </select>
            <br></br>
            <label for = "CPU-cooler">Choose a CPU Cooler</label>
            <select value = {cpuCooler} onChange = {handleChangeCPUCooler}>
            <option>cpu cooler</option>
            </select>
            <br></br> */}
            <br></br>
            <input className = "submit" id="new-build-button" type="submit" value="Create Build"/>
        </form>

    </div>
  )
}

export default CreateBuild