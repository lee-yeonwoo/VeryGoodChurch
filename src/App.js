import React from "react";

import { Route, Routes } from "react-router-dom";
import Welcome from './pages/ChurchLife.jsx';
import Home from './pages/Home';
import Time from './pages/Time';
import Directions from './pages/Directions.jsx';
import ChurchLife from './pages/ChurchLife';


const App = () => {
  return (
    
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/time" element={<Time />} />
      <Route path="/directions" element={<Directions />} />
      <Route path="/churchLife" element={<ChurchLife />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  
   
  );
};


export default App;

