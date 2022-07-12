// IMPORT DEPENDENCIES
import React, {Component} from "react";

// CREATE THE COMPONENT
class Display extends Component{
    render(){
        const{fullName, age} = this.props
        return(
            <fieldset>
                <legend>Display.jsx</legend>
                <h1>Hello {fullName}! The Earth Says Hello!</h1>
                <h1>Wow you're {age}! GREAT!</h1>
            </fieldset>
        )
    }
}



// EXPORT THE COMPONENT
export default Display