import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom"

const Detail = () => {

    const navigate = useNavigate()
    // STATE FOR HOLDING ONE BOOK
    const [pirate, setPirate] = useState()

    // GET PATH VARIABLE FROM REACT ROUTER
    const { pirate_id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" + pirate_id)
            .then(res => {setPirate(res.data)
            console.log(res.date)})
            .catch(err => console.log(err))
    }, [pirate_id])


    const deleteHandler = (id) => {
        axios.delete("http://localhost:8000/api/pirates/" + id)
            .then(res => navigate("/"))
            .catch()
    }

    return (
        <fieldset>
            <legend>Detail.jsx</legend>
            {
                (pirate) ?
                    <div>
                        <Link to={"/"}>
                            Pirate Crew
                        </Link>
                        <h1>Title: {pirate.title}</h1>
                        <img src={pirate.picture} alt="picture of pirate" />
                        <h1>Chest: {pirate.chest}</h1>
                        <h1>Catch Phrase: {pirate.catchPhrase}</h1>
                        <p>{pirate.pegEye ? "Has Peg Eye" : "Doesn't Have Peg Eye"}</p>
                        <p>{pirate.eyePatch ? "Has Eye Patch" : "Doesn't Have Eye Patch"}</p>
                        <p>{pirate.hookHand ? "Has Hook Hand" : "Doesn't Have Hook Hand"}</p>
                        <p>{pirate.crewPosition}</p>
                        <Link to={"/edit"}>
                            Create
                        </Link>
                        <br></br>
                        <br></br>
                        <button onClick={(e) => deleteHandler(pirate._id)}>Delete</button>
                    </div> : <h1>Loading....</h1>
            }
        </fieldset>
    )
}

export default Detail