import './App.css';
import React ,{Suspense,lazy} from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const PockemonList = lazy(()=>import('./PockemonList'))
const Pockemon = lazy(()=>import('./Pockemon'))
function App() {

  return (
    <Router>
      <>
        {/* <PockemonList /> */}
        <Routes>
          <Route path="/" exact element={<Suspense fallback={<h1 style={{color:"white"}}>Loading Pockemon List</h1>}>
            <PockemonList /></Suspense>} />
          <Route path="/Pockemon/:id" exact element={<Suspense fallback={<h1 style={{color:"white"}}>Loading Pockemon..</h1>}><Pockemon /></Suspense>} />
        </Routes>
      </>

    </Router>
  );
}

export default App;
