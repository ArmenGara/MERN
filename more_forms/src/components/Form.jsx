
import React, {useState} from 'react';

const Form = (props) => {

    //STATE FOR KEEPING TRACK OF INPUT
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] =useState("")
    const [password, setPassword] = useState("")

    //STATE FOR KEEPING TRACK OF VALIDATIONS
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const submitHandler = (event) => {
        //Stopping the form from making POST request, after clicking the button
        event.preventDefault()
        console.log("Registering: ", firstName, lastName, email, password)

        //RESET THE STATES BACK TO NOTHING
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
    }
    
    const firstNameHandler = (event) => {
        setFirstName(event.target.value)
        //First NAME MUST BE REQUIRED
        if(event.target.value.length < 1){
            setFirstNameError("First Name Must Be Required")
        }
        //First NAME MUST BE LONGER THAN 2
        else if(event.target.value.length < 2){
            setFirstNameError("First Name Must Be Longer Than 2 Charcters")
        }
        //Clear OUT THE MESSAGAES 
        else{
            setFirstNameError("")
        }
    }

    const lastNameHandler = (event) => {
        setLastName(event.target.value)
        if(event.target.value.length < 1){
            setLastNameError("Last Name Must Be Required")
        }
        //Last NAME MUST BE LONGER THAN 2
        else if(event.target.value.length < 2){
            setLastNameError("Last Name Must Be Longer Than 2 Charcters")
        }
        else{
            setLastNameError("")
        }
    }
    const emailHandler = (event) =>{
        setEmail(event.target.value)
        if(event.target.value.length < 1){
            setEmailError("Email Must Be Required")
        }
        else if(event.target.value.length < 2){
            setEmailError("Email Must Be Longer Than 2 Characters")
        }
        else{
            setEmailError("")
        }
    }
    const passwordHandler = (event) =>{
        setPassword(event.target.value)
        if(event.target.value.length < 1){
            setPasswordError("Password Must Be Required")
        }
        else if(event.target.value.length < 2){
            setPasswordError("Password Must Be Longer Than 2 Characters")
        }
        else{
            setPasswordError("")
        }
    }


    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                    <p>
                        First Name:
                        <input
                        onChange={firstNameHandler}
                        value={firstName}
                        type="text"
                        name="firstName"
                        id=""
                        />
                        {
                            //TURNERARY OPPERATORY GIVES ALLOWS FOR TRUE FALSE STATEMENTS
                            firstNameError ? <p style={{color:'red'}}>{firstNameError}</p> : null
                        }
                    </p>
                    <p>
                        Last Name:
                        <input
                        onChange={lastNameHandler}
                        value={lastName}
                        type="text"
                        name="lastName"
                        id=""
                        />
                        {
                            //TURNERARY OPPERATORY GIVES ALLOWS FOR TRUE FALSE STATEMENTS
                            lastNameError ? <p style={{color:'red'}}>{lastNameError}</p> : null
                        }
                    </p>
                    <p>
                        Email:
                        <input
                        onChange={emailHandler}
                        value={email}
                        type="text"
                        name="email"
                        id=""
                        />
                        {
                            //TURNERARY OPPERATORY GIVES ALLOWS FOR TRUE FALSE STATEMENTS
                            emailError ? <p style={{color:'red'}}>{emailError}</p> : null
                        }
                    </p>
                    <p>
                        Password:
                        <input
                        onChange={passwordHandler}
                        value={password}
                        type="text"
                        name="password"
                        id=""
                        />
                        {
                            //TURNERARY OPPERATORY GIVES ALLOWS FOR TRUE FALSE STATEMENTS
                            passwordError ? <p style={{color:'red'}}>{passwordError}</p> : null
                        }
                    </p>
                    <p>
                        Confirm Password:
                        <input
                        onChange={passwordHandler}
                        value={password}
                        type="text"
                        name="confirm"
                        id=""
                        />
                        {
                            //TURNERARY OPPERATORY GIVES ALLOWS FOR TRUE FALSE STATEMENTS
                            passwordError ? <p style={{color:'red'}}>{passwordError}</p> : null
                        }
                    </p>
                    <button>Register!</button>
            </form>
        </fieldset>
    );
    }
export default Form;