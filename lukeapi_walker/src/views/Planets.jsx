import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Planets = () => {

    // STATE FOR POKEMON
    const [planets, setPlanets] = useState()

    const { planetsID } = useParams()

    // EXECUTES AS SOON AS POKEMON COMPONENT IS RENDERED
    // FOR THE FIRST TIME
    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/" + planetsID)
            .then(res => {
                console.log(res.data)
                setPlanets(res.data)
            })
            .catch(err => console.log(err))
    }, [planetsID])


    return (
        <fieldset>
            <legend>Planets.jsx</legend>
            <h1>Searching for {planetsID}</h1>
            {
                planets ?
                <>
                    <h1>Name: {planets.name}</h1>
                    <h1>Climate: {planets.climate}</h1>
                    <h1>Terrain: {planets.terrain}</h1>
                    <h1>Population: {planets.population}</h1>
                </> : null
            }
        </fieldset>
    )
}

export default Planets