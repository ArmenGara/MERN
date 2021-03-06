import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  const [recipes, setRecipes] = useState([])
  const [refreshState, setRefreshState] = useState(false)

  useEffect(() => {
    // GETTING ALL RECIPES
    axios.get("http://localhost:8000/api/recipes")
      .then(res => setRecipes(res.data))
      .catch(err => console.log(err))
  }, [refreshState])

  const deleteHandler = (id) => {
    axios.delete("http://localhost:8000/api/recipes/"+id)
      .then(res => setRefreshState(!refreshState))
      .catch()
  }


  return (
    <fieldset>
      <legend>Dashboard.jsx</legend>
      {
        recipes.map((recipe) => {
          return(
            <div>
              <Link to={"/dashboard"}>Dashboard</Link>
              <h4>{recipe.name}</h4>
              <Link to={"/" + recipe._id}>Edit</Link>
              <button onClick={(e) => deleteHandler(recipe._id)}>Delete</button>
            </div>
          )
        })
      }
    </fieldset>
  )
}

export default Dashboard