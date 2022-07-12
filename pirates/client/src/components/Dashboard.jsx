import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Dashboard = (props) => {

  // STATE TO HOLD ALL BOOKS COMING FROM DB
  const [allPirates, setallPirates] = useState([])

  // DESTRUCTURE FROM PROPS
  const {refreshState, refresh} = props

  useEffect(() => {
    // MAKE A CALL TO EXPRESS, GET ALL BOOKS
    axios.get("http://localhost:8000/api/pirates")
      .then(res => setallPirates(res.data)) // INCOMING BOOKS ARE SET TO STATE
      .catch(err => console.log(err))
  }, [refreshState])


  const deleteHandler = (id) => {
    axios.delete("http://localhost:8000/api/pirates/"+id)
      .then(res => refresh())
      .catch()
  }


  return (
    <fieldset>
      <legend>DashboardComponent.jsx</legend>
      {
        allPirates.map((pirate, index) => {
          return(
            <div key={index}>
              <h1>{pirate.title}</h1>
              <img src={pirate.picture} alt="picture of pirate" />
              <Link to={"/" + pirate._id}>
                <h4>View Pirate</h4>
              </Link>
              <button onClick={(e) => deleteHandler(pirate._id)}>Delete</button>
            </div>
          )
        })
      }
    </fieldset>
  )
}

export default Dashboard