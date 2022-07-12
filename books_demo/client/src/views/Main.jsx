import React, {useState} from 'react'
import Dashboard from '../components/Dashboard'
import { Link } from 'react-router-dom'
const Main = () => {

  // STATE TO KEEP TRACK OF REFRESH
  const [refreshState, setRefresh] = useState(false)

  const refresh = () => {
    setRefresh(!refreshState)
  }

  return (
    <fieldset>
        <legend>Main.jsx</legend>
        {/* <Form refresh={refresh} /> */}
        <Link to={"/edit"}>
            Add Pirate
        </Link>
        <Dashboard refresh={refresh} refreshState={refreshState} />
    </fieldset>
  )
}

export default Main