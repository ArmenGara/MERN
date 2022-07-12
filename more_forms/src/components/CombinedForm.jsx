import React, { useState } from 'react'

const CombinedForm = () => {

    const[userState, setUserState] = useState({
        firstName : "",
        lastName : ""
    })

    const changeHandler = (event) => {
        const {value, name} = event.target
        console.log("Name: ", name)
        
        
        setUserState({
            ...userState, //using the spread operator, make a "copy of previous state"
            [name] : value, // replace the key value with new info 
        })

    
    }

    const submitHandler = (event) => {
        //Stopping the form from making POST request, after clicking the button
        event.preventDefault()

        //RESET THE STATES BACK TO NOTHING
        setUserState("")
    }

    return (
        <fieldset>
            <legend>CombinedForm.jsx</legend>
                <form onSubmit={submitHandler}>
                    <p>
                        First Name:
                        <input
                        onChange ={changeHandler}
                        type="text"
                        name="firstName"
                        />

                    </p>
                    <p>
                        Last Name:
                        <input
                        onChange ={changeHandler}
                        type="text"
                        name="lastName"
                        />
                    </p>
                    <button>Register</button>
                </form>
        </fieldset>
    )
}
export default CombinedForm;