import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const PeopleForm = () => {

    //KEEPING TRACK OF THE SELECT VALUES
    const [selectName, setSelect] = useState("/people/")
    
    ///KEEPING TRACK OF THE ID 
    const [peopleName, setPeopleID] = useState("")
    // CALL THE useNavigate FUNCTION 
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(selectName + peopleName)
    }


    return (
        <fieldset>
            <legend>PoopleForm.jsx</legend>

            {/* <form onSubmit={handleSubmit}>
                ID:
                <input onChange={(e) => setPeopleID(e.target.value)} type="text" name="peopleName" id="" />
                <button>Submit</button>
            </form> */}
            < form onSubmit={handleSubmit}>
                <label>Choose a car:</label>
                <select onChange={(e) => setSelect(e.target.value)} id="" name="peopleName">
                    <option value="/people/">People</option>
                    <option value="/planets/">Planets</option>
                </select>
                <input onChange={(e) => setPeopleID(e.target.value)} type="text"/>
                <button>Submit</button>
            </form>
            <Outlet />
        </fieldset>
    )
}

export default PeopleForm

