import React from 'react';
import './App.css';
import AboutUs from './page/about';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './page/home';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
