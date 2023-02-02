
<<<<<<< HEAD
import './App.css';
import Navbar from './components/JS/Navbar';

import React from 'react';
=======
import Navbar from './components/JS/Navbar';
import Footer from './components/JS/Footer' ;
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/JS/Pages/Home';
import Review from './components/JS/Pages/Review.page';
import LaptopDetails from './components/JS/laptopDetails';
import AccessoriesDetails from './components/JS/accessoriesDetails';
>>>>>>> long_main
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Review from './components/Pages/Review';
import Recommend from './components/Pages/Recommend';

function App() {

  return (
<<<<<<< HEAD
    <>
      <Router>
=======
      <Router>
      <div className="App">
>>>>>>> long_main
        <Navbar/>
        <Routes>
<<<<<<< HEAD
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/review" element={<Review/>}></Route>
          <Route exact path="/recommend" element={<Recommend/>}></Route>
        </Routes>
      </Router>
    </>
=======
          <Route exact path="/" element ={<Home/>}> </Route>
          <Route  path="/review/" element ={<Review/>}></Route>
          <Route  path={"/products/laptops/detail/:id"} element ={ <LaptopDetails/>}></Route>
          <Route  path={"/products/accessories/detail/:id"} element ={ <AccessoriesDetails/>}></Route>
          
        </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
>>>>>>> long_main
  );


}
export default App ;
