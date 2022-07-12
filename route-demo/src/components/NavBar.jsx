import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Link to="/"> Home</Link>|
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/recipes/new">Create</Link>
        </div>
    )
}

export default NavBar