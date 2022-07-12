import React, { useState } from 'react'
import axios from 'axios'

const Form = () => {
    // DECLARE STATE
    const [author, setAuthor] = useState("")

    // HANDLER FUNCTIONS
    const submitHandler = event => {
        event.preventDefault()
        //CREATE OBJECT WITH AUTHOR INFO
        const authorObj = {
            author,
        }
        //MAKE THE POST REQUEST WITH AUTH OBJ
        axios.post("http://localhost:8000/api/authors/new", authorObj)
            .then(res=> console.log(res))
            .catch(err=> console.log(err))
    }

    return (
        <fieldset>
            <legend>FormComponent.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Favorite Author:
                    <input type="text" name="author" onChange={(e) => setAuthor(e.target.value)} />
                </p>
                <button>Submit Author</button>
            </form>
        </fieldset>
    )
}

export default Form 