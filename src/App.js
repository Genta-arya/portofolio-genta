import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Beranda from './View/Home/Beranda';
import Project1 from './View/Home/Project/Project1';
import Project2 from './View/Home/Project/Project2';
import Project3 from './View/Home/Project/Project3';
import Project4 from './View/Home/Project/Project4';
import Project5 from './View/Home/Project/Project5';
import DetailNotFound from './View/Home/Project/Notfound';
import Project6 from './View/Home/Project/Project6';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/project/1" element={<Project1 />} />
          <Route path="/project/2" element={<Project2 />} />
          <Route path="/project/3" element={<Project3 />} />
          <Route path="/project/4" element={<Project4 />} />
          <Route path="/project/5" element={<Project5 />} />
          <Route path="/project/6" element={<Project6 />} />
          <Route path="*" element={<DetailNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
