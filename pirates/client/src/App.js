import Main from './views/Main';
import Detail from './views/Detail';

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Create from './views/Create';

function App() {
  return (
    <BrowserRouter>
      <fieldset>
        <legend>App.js</legend>
        <Routes>
          {/* ROOT ROUTE FOR MAIN */}
          <Route path="/" element={<Main />} />

          {/* ROUTE FOR DETAILS*/}
          <Route path="/:pirate_id" element={<Detail />} />

          {/* ROUTE FOR EDIT PAGE */}
          <Route path='/edit' element={<Create />} />


        </Routes>
      </fieldset>
    </BrowserRouter>
  );
}

export default App;
