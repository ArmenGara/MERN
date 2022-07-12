import {BrowserRouter, Route, Routes} from 'react-router-dom'
import  PeopleForm from './components/PeopleForm';
import People from './views/People';
import Planets from './views/Planets';

function App() {
    return (
        <BrowserRouter>
            <fieldset>
                <legend>App.jsx</legend>
                <Routes>
                    <Route path="/" element={<PeopleForm />}>
                        <Route path="people/:peopleID" element={<People />} />
                        <Route path="planets/:planetsID" element={<Planets />} />
                    </Route>
                </Routes>
                {/* <NavBar />
        <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="recipes/new" element={<Create />} />
            <Route path="recipes/:recipe_id/" element={<Detail />} />
            <Route path="recipes/:recipe_id/edit" element={<Edit />} />
        </Routes> */}
            </fieldset>
        </BrowserRouter>
    );
}

export default App;
