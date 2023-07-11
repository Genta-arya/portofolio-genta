
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Beranda from './View/Home/Beranda';

import Project1 from './View/Home/Project/Project1';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/project/1" element={<Project1 />} />
  
      </Routes>
    </div>
  </Router>
  );
}

export default App;
