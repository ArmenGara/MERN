import React from 'react'
import {Link} from 'react-router-dom'

const Dashboard = () => {
    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            <h1>You just logged in!</h1>
            <Link to="/recipes/1">View 1</Link>
            <Link to="/recipes/1">View 2</Link>
            <Link to="/recipes/1">View 3</Link>
        </fieldset>
    )
}

export default Dashboard;