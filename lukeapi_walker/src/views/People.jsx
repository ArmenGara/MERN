import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const People = () => {

    // STATE FOR POKEMON
    const [people, setPeople] = useState()

    const { peopleID } = useParams()

    // EXECUTES AS SOON AS POKEMON COMPONENT IS RENDERED
    // FOR THE FIRST TIME
    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + peopleID)
            .then(res => {
                console.log(res.data)
                setPeople(res.data)
            })
            .catch(err => console.log(err))
    }, [peopleID])


    return (
        <fieldset>
            <legend>People.jsx</legend>
            <h1>Searching for {peopleID}</h1>
            {
                people ?
                <>
                    <h1>Name: {people.name}</h1>
                    <h1>Mass: {people.mass}</h1>
                    <h1>Hair Color: {people.haircolor}</h1>
                    <h1>Skin Color: {people.skin_color}</h1>
                </> : null
            }
        </fieldset>
    )
}

export default People