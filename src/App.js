import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
