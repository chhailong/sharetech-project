
import './App.css';
import Navbar from './components/JS/Navbar';

import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Review from './components/Pages/Review';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/review" element={<Review/>}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
