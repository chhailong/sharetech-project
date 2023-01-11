
import './App.css';

import Navbar from './components/JS/Navbar';
import Footer from './components/JS/Footer' ;

import "./components/CSS/navbarstyle.css";
import "./components/CSS/buttonstyle.css"
import "./components/CSS/footerstyle.css" ;
import "./components/CSS/home.css"; 
import "./components/CSS/review.css"; 
import "./components/CSS/recommendation.css" ;


import Home from './components/JS/Pages/Home';
import Review from './components/JS/Pages/Review.page';
import Recommend from './components/JS/Pages/Recommend.page'; 

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="Home">
        <Routes>
          <Route exact path="/" element ={<Home/>}> </Route>
          <Route  path="/review" element ={<Review/>}></Route>
          <Route  path="/recommendation" element ={<Recommend/>}></Route>
        </Routes>
        </div>
        <Footer/>
      </div>
    </Router>


  );
}
export default App;
