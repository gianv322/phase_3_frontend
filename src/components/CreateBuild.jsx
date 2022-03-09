import React, {useState} from 'react'

function CreateBuild({setPartsArray, addNewBuild}) {
    const parts = setPartsArray.map 
    const [buildName, setBuildName] = useState("")
    const [cpu, setCpu] = useState('')
    const [gpu, setGpu] = useState('')
    const [motherBoard, setMotherBoard] = useState('')
    const [newCase, setNewCase] = useState('')
    const [memory, setMemory] = useState('')
    const [powerSupply, setPowerSupply] = useState('')
    const [storage, setStorage] = useState('')
    const [cpuCooler, setCpuCooler] = useState('')
console.log(buildName);
    
    
    function handleChangeBuildName(e){
        const currentInput = e.target.value
        setBuildName(currentInput)
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
        setMotherBoard(currentInput)
    }
    function handleChangeNewCase(e){
        const currentInput = e.target.value
        setNewCase(currentInput)
    }
    function handleChangeMemory(e){
        const currentInput = e.target.value
        setMemory(currentInput)
    }
    function handleChangePowerSupply(e){ 
        const currentInput = e.target.value
        setPowerSupply(currentInput)
    }
    function handleChangeStorage(e){
        const currentInput = e.target.value
        setStorage(currentInput)
    }
    function handleChangeCPUCooler(e){
        const currentInput = e.target.value
        setCpuCooler(currentInput)
    }

    function handleSubmit(e){
        e.preventDefault()
        const newBuild = {cpu, gpu, motherBoard, newCase, memory, powerSupply, storage, cpuCooler}

        addNewBuild(newBuild)
        console.log(newBuild)
    }
    
  return (
    <div className = "createbuild">
        <form onSubmit = {handleSubmit}>
            <label for = "title">Build Name:</label>
            <input type = "text" placeholder = "Build Name" value = {buildName} onChange = {handleChangeBuildName} />
            <br></br>
            <label for = "CPU">Choose a CPU</label>
            <select value = {cpu} onChange = {handleChangeCPU}>
            <option>new Cpu</option>
            </select><br></br>
            <label for = "GPU">Choose a GPU</label>
            <select value = {gpu} onChange = {handleChangeGPU}>
            <option>new Gpu</option>
            </select>
            <br></br>
            <label for = "motherboard">Choose a Motherboard</label>
            <select value = {motherBoard} onChange = {handleChangeMotherBoard}>
            <option>new motherboard</option>
            </select>
            <br></br>
            <label for = "case">Choose a Case</label>
            <select value = {newCase} onChange = {handleChangeNewCase}>
            <option>new case</option>
            </select>
            <br></br>
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
            <br></br>
            <input id="new-build-button" type="submit" value="Create Build"/>
        </form>

    </div>
  )
}

export default CreateBuild