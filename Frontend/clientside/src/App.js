import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Errorpage from './components/Errorpage';

function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Use the catch-all route for Errorpage */}
        <Route path="*" element={<Errorpage />} />
       
      </Routes>
   
    </div>
  );
}

export default App;
