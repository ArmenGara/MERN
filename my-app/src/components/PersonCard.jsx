import React, { Component } from 'react'

export default class PersonCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            clicked : 0,
            }
        }
    
        clickHandler = () => {
            let {clicked} = this.state
            this.setState({
            'clicked' : clicked+1,
            })
        }
    
    render() {
        const{firstName, lastName, age, haircolor, clicked} =this.props
        return (
        <fieldset>
            <legend>PersonCard.jsx</legend>
            <p>First Name: {firstName} </p>
            <p>Last Name: {lastName}</p>
            <p>Age: {age}</p>
            <p>Haircolor:{haircolor} </p>
            <button onClick={this.clickHandler}>Its your Birthday </button>
            <p>Number Times it was your birthday: {clicked}</p>
        </fieldset>
        )
    }
}
