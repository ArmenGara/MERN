import React, {useState} from 'react';
import axios from 'axios';


const Main = (props) => {

    const [apiState, setAPIState] = useState()

    const eventHandler = () => {
        axios.get("http://pokeapi.co/api/v2/pokemon?limit=151")
        .then(successResponse => {
            console.log("success :", successResponse.data)
            setAPIState(successResponse.data)
        })
        .catch(errorResponse => console.log(errorResponse))
    }

    return(
        <fieldset>
            <legend>Main.jsx</legend>
            <button onClick={eventHandler}>Make API CALL</button>

            {
                apiState &&
                <>
                    <h1>Count: {apiState.count}</h1>
                </>
            }
        </fieldset>
    )
}

export default Main;