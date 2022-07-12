import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Auth from './views/Auth';
// import Dashboard from './views/Dashboard';
// import NavBar from './components/NavBar';
// import Create from './views/Create';
// import Detail from './views/Detail';
// import Edit from './views/Edit';
import PokeForm from './components/PokeForm';
import Pokemon from './views/Pokemon';

function App() {
    return (
    <BrowserRouter>
        <fieldset>
            <legend>App.jsx</legend>
            <Routes>
                <Route path="/" element={<PokeForm />}>
                    <Route path="pokemon/:pokemonName" element={<Pokemon />} />
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
