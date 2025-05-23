import React from 'react';
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ProtectedRoutes from './pages/ProtectedRoutes.jsx'



import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/register" element = {<Register/>} />
          <Route path="/login" element = {<Login/>} />

          <Route path="/dashboard" element = {
            <ProtectedRoutes>
              <Dashboard/>
            </ProtectedRoutes>
            } />



      </Routes>
    </BrowserRouter>

    
  );
}

export default App;




