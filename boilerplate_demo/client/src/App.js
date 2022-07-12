import {BrowserRouter, Routes, Route} from "react-router-dom"
import Create from "./views/Create";
import Dashboard from "./views/Dashboard";
import Detail from "./views/Detail";

function App() {
  return (
    <BrowserRouter>
    <fieldset>
      <legend>App.js</legend>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Create />} />
        <Route path="/:recipe_id" element={<Detail />} />
      </Routes>
    </fieldset>
    </BrowserRouter>
  );
}

export default App;