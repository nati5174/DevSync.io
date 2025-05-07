import React from 'react';
import Home from '../pagesHome.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Routes>
          <Route path="/" element = {<Home/>} />
      </Routes>
    </BrowserRouter>


    
  );
}

export default App;

