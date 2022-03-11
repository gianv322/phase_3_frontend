import React, {useState} from 'react'

function CreateBuild({partsArray, addNewBuild}) {   
    const [name, setName] = useState("")
    const [cpu, setCpu] = useState('')
    const [gpu, setGpu] = useState('')
    const [motherboard, setMotherboard] = useState('')
    const [chassis, setChassis] = useState('')
    const [memory, setMemory] = useState('')
    const [powerSupply, setPowerSupply] = useState('')
    const [storage, setStorage] = useState('')

   



    const provideFilteredOptions = (componentType) => {

        const filteredArray = partsArray.filter(part => {
            return part.component_type === componentType;
        })

        return filteredArray.map(part => {
            return (
                <option>{part.name}</option>
            )
        })

    }

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
    

    function addNewBuildToDatabase(newBuild) {
        fetch('http://localhost:9292/builds', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                    },
            body: JSON.stringify(newBuild),
        })
    }
    function showAlert(){
       alert("Build Submitted!");
    }

    function handleSubmit(e){
        e.preventDefault()
        const newBuild = {
            name, 
            chassis,
            cpu,
            gpu,
            motherboard,
            powerSupply,
            storage,
            memory

        }
        addNewBuildToDatabase(newBuild)
        addNewBuild(newBuild)
    }

    // Handle Map Array to Return Array of Part Names
    // const partNames = partsArray.map(partObj => partObj.name)
    // Filter Part Names if Includes
     
    
  return (
    <div className = "createbuild">
        <form className="form" onSubmit = {handleSubmit} required />
            <label className = "label" for = "title">Build Name:</label>
            <input type = "text" placeholder = "Build Name" value = {name} onChange = {handleChangeBuildName} />
        <br></br>
            <label className = "label" for = "CPU">Choose a CPU</label>
            <select className = "option" value = {cpu} onChange = {handleChangeCPU} >
                {provideFilteredOptions('CPU')}
            </select>
        <br></br>
            <label className = "label" for = "GPU">Choose a GPU</label>
            <select className = "option" value = {gpu} onChange = {handleChangeGPU} required>
               {provideFilteredOptions('GPU')}
            </select>
        <br></br>
            <label className = "label" for = "motherboard">Choose a Mobo</label>
            <select className = "option" value = {motherboard} onChange = {handleChangeMotherBoard} required>
                {provideFilteredOptions('motherboard')}
            </select>
        <br></br>
            <label className = "label" for = "case">Choose a Case</label>
            <select className = "option" value = {chassis} onChange = {handleChangeNewCase} required>
                {provideFilteredOptions('case')}
            </select>
            <br></br>
            <label className = "label" for = "case">Choose Storage</label>
            <select className = "option" value = {storage} onChange = {handleChangeStorage} required>
                {provideFilteredOptions('storage')}
            </select>
            <br></br>
            <label className = "label" for = "case">Choose a Power Supply</label>
            <select className = "option" value = {powerSupply} onChange = {handleChangePowerSupply} required>
                {provideFilteredOptions('power-supply')}
            </select>
            <br></br>
            <label className = "label" for = "case">Choose a Memory</label>
            <select className = "option" value = {memory} onChange = {handleChangeMemory} required>
                {provideFilteredOptions('memory')}
            </select>
        <form className="form" onSubmit = {handleSubmit}>
            <br></br>
            <input className = "submit" id="new-build-button" type="submit" value="Create Build" onClick = {showAlert}/>
        </form>

    </div>
  )
}

export default CreateBuild