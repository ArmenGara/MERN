import React, {useEffect, useState} from 'react';
import axios from 'axios';

const MainUseEffect = (props) => {
    const [apiState, setAPIState] = useState()


    useEffect(() => {
        axios.get("http://pokeapi.co/api/v2/pokemon?limit=151")
        .then(successResponse => {
            console.log("success :", successResponse.data)
            setAPIState(successResponse.data)
        })
        .catch(errorResponse => console.log(errorResponse))
    }, [])

    return(
        <fieldset>
            <legend>MainUseEffect.jsx</legend>
            <button onClick={useEffect}>Make API CALL</button>
            {
                (apiState) ?
                <>
                    <h1>Welcome!</h1>
                    <h1>Count: {apiState.count}</h1>
                </> : <h1>Loading...</h1>
            }
        </fieldset>
    )
}

export default MainUseEffect;