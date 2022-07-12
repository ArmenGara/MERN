import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"



const EditForm = () => {

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [picture, setPicture] = useState("")
    const [chest, setChest] = useState(0)
    const [catchPhrase, setcatchPhrase] = useState("")

    // STATE FOR BACK-END VALIDATIONS MESSAGES
    const [err, setErr] = useState([])

    // GET PATH VARIABLE FROM REACT ROUTER
    const { pirate_id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" + book_id)
            .then(res => {
                const {title, picture, chest, catchPhrase} = res.data
                setTitle(title)
                setPicture(picture)
                setChest(chest)
                setcatchPhrase(catchPhrase)
            })
            .catch(err =>{

            })
    },[])

    const updateHandler = (event) =>{
        event.preventDefault()
        // CREATE AN OBJECT WITH THE BOOK INFO
        const pirateObj = {
            title,
            picture,
            chest,
            catchPhrase
        }
        // MAKE PUT REQUEST TO EXPRESS WITH pirateObj
        axios.put("http://localhost:8000/api/pirates/"+pirate_id, pirateObj)
            .then(res => navigate('/') )
            .catch(err => {
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
            <legend>EditForm.jsx</legend>
            <form onSubmit={updateHandler}>
                <p>
                    Title:
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
                </p>
                <p>
                    Picture:
                    <input type="text" name="picture" onChange={(e) => setPicture(e.target.value)} value={picture} />
                </p>
                <p>
                    Chest:
                    <input type="number" name="chest" onChange={(e) => setChest(e.target.value)} value={chest} />
                </p>
                <p>
                    Catch Phrase:
                    <input type="text" name="catchPhrase" onChange={(e) => setcatchPhrase(e.target.value)} value={catchPhrase} />
                </p>
                <button>Update</button>
            </form>
            {
                err.map((errorMessage) => {
                    return(
                        <p>{errorMessage}</p>
                    )
                })
            }
        </fieldset>
    )
}

export default EditForm