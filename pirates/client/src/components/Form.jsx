import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Form = (props) => {

    const navigate = useNavigate()

    // DECLARE STATE
    const [title, setTitle] = useState("")
    const [picture, setPicture] = useState("")
    const [chest, setChest] = useState(0)
    const [catchPhrase, setcatchPhrase] = useState("")
    const [pegEye, setpegEye] = useState(false)
    const [eyePatch, seteyePatch] = useState(false)
    const [hookHand, sethookHand] = useState(false)
    const [crewPosition, setcrewPosition] = useState(false)

    // STATE FOR BACK-END VALIDATIONS MESSAGES
    const [err, setErr] = useState([])
    const [errorObj, setErrorObj] = useState({})



    // DESTRUCTURE
    const { refresh } = props

    // HANDLER FUNCTIONS
    const createHandler = event => {
        event.preventDefault()
        // CREATE AN OBJECT WITH THE BOOK INFO
        const pirateObj = {
            title,
            picture,
            chest,
            catchPhrase,
            pegEye,
            eyePatch,
            hookHand,
            crewPosition
        }
        // MAKE POST REQUEST TO EXPRESS WITH pirateObj
        axios.post("http://localhost:8000/api/pirates/new", pirateObj)
            .then(res => {
                console.log(res.data)
                navigate("/" + res.data._id)
            })
            .catch(err => {
                console.log("ERROR FROM BACK-END:", err.response.data.errors)

                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                const errorObj = {}
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)

                    errorObj[key] = errorResponse[key].message
                }
                // setErrorObj(errorObj)
                console.log("ERROR OBJ: ", errorObj)
                setErr(errorArr)
            })
    }


    return (
        <fieldset>
            <legend>FormComponent.jsx</legend>
            <form onSubmit={createHandler}>
                <p>
                    Pirate Name:
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
                    {errorObj.title ? <p>{errorObj.title}</p> : null}
                </p>
                <p>
                    Picture:
                    <input type="text" name="picture" onChange={(e) => setPicture(e.target.value)} value={picture} />
                    {errorObj.picture ? <p>{errorObj.title}</p> : null}
                </p>
                <p>
                    Chest:
                    <input type="number" name="chest" onChange={(e) => setChest(e.target.value)} value={chest} />
                    {errorObj.chest ? <p>{errorObj.chest}</p> : null}
                </p>
                <p>
                    Pirate Catch Phrase:
                    <input type="text" name="catchPhrase" onChange={(e) => setcatchPhrase(e.target.value)} value={catchPhrase} />
                    {errorObj.catchPhrase ? <p>{errorObj.catchPhrase}</p> : null}
                </p>
                <p>
                    Peg Eye?
                    <input type="checkbox" name="pegEye" onChange={(e) => setpegEye(e.target.checked)} />
                </p>
                <p>
                    Eye Patch?
                    <input type="checkbox" name="eyePatch" onChange={(e) => seteyePatch(e.target.checked)} />
                </p>
                <p>
                    Hook Hand?
                    <input type="checkbox" name="hookHand" onChange={(e) => sethookHand(e.target.checked)} />
                </p>
                <select name="crewPosition" onChange={(e) => setcrewPosition(e.target.value)}>
                    <option value="Captain"> Captain </option>
                    <option value="First Mate"> First Mate </option>
                    <option value="Quarter Master"> Quarter Master </option>
                    <option value="Boatswain"> Boatswain </option>
                    <option value="Powder Monkey"> Boatswain </option>
                    <option > Powder Monkey </option>
                </select>
                <button>Add Pirate</button>
            </form>
            {
                err.map((errorMessage) => {
                    return (
                        <p>{errorMessage}</p>
                    )
                })
            }
            <Link to={"/"}>
                Crew Board
            </Link>
        </fieldset>
    )
}

export default Form