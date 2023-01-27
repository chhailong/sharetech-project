
import Navbar from './components/JS/Navbar';
import Footer from './components/JS/Footer' ;
import 'bootstrap/dist/css/bootstrap.min.css';

// import "./components/CSS/navbarstyle.css";
import "./components/CSS/buttonstyle.css"
// import "./components/CSS/footerstyle.css" ;
import "./components/CSS/home.css"; 

import "./components/CSS/recommendation.css" ;
// import "./components/CSS/products.css" ; 
import Home from './components/JS/Pages/Home';
import Review from './components/JS/Pages/Review.page';
import Recommend from './components/JS/Pages/Recommend.page'; 
import Dell from './components/JS/Products/dell';
import LG_Gram from './components/JS/Products/LGgram';
import AcerNitro from './components/JS/Products/AcerNitro';
import AcerAspire from './components/JS/Products/Acer.Aspire7'; 
import DellXPS from './components/JS/Products/Dell.XPS.13'; 
import AsusZephyrus from './components/JS/Products/asus.zephyrus';
import DellInspiron from './components/JS/Products/Dell.Inspiron';
import HPZbook from './components/JS/Products/hp.zbook';
import LenovoThinkPad from './components/JS/Products/Lenovo.ThinkPad';
import LenovoFlex from './components/JS/Products/LenovoFlex';
import MSSureface from './components/JS/Products/MS.Surface';
import SurfacePro from './components/JS/Products/ms.surface.pro9';
import SurfaceBook2 from './components/JS/Products/Surface.Book.2';


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
          <Route  path="/products/dell" element ={<Dell/>}></Route>
          <Route  path="/products/LG-Gram" element ={<LG_Gram/>}></Route>
          <Route  path="/products/acer-aspire7" element ={<AcerAspire/>}></Route>
          <Route  path="/products/acer-nitro" element ={<AcerNitro/>}></Route>
          <Route  path="/products/asus-zephyrus" element ={<AsusZephyrus/>}></Route>
          <Route  path="/products/dell-inspriron" element ={<DellInspiron/>}></Route>
          <Route  path="/products/dell-xps" element ={<DellXPS/>}></Route>
          <Route  path="/products/hp-zbook" element ={<HPZbook/>}></Route>
          <Route  path="/products/lenovo-thinkpad" element ={<LenovoThinkPad/>}></Route>
          <Route  path="/products/lenovo-flex" element ={<LenovoFlex/>}></Route>
          <Route  path="/products/ms-surface" element ={<MSSureface/>}></Route>
          <Route  path="/products/ms-surface-book2" element ={<SurfaceBook2/>}></Route>
          <Route  path="/products/ms-surface-pro9" element ={<SurfacePro/>}></Route>
        </Routes>
        </div>
        <Footer/>
      </div>
    </Router>


  );
}
export default App;
