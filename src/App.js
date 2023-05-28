
import Navbar from './components/JS/Navbar';
import Footer from './components/JS/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Pages/Home';
import Review from "./components/Pages/Review" ;
import LaptopDetails from './components/JS/laptopDetails';
import AccessoriesDetails from './components/JS/accessoriesDetails';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import Recommend from './components/Pages/Recommend';
function App() {

  return (
    <>
      <Router>
        <div className="App">
         <Navbar/>
       
        <Routes>

          <Route exact path="/" element={<Home/>}></Route>
          <Route  path="/review" element={<Review/>}></Route>
          <Route  path="/recommend" element={<Recommend/>}></Route>

          <Route  path={"/products/laptops/detail/:id"} element ={ <LaptopDetails/>}></Route>
          <Route  path={"/products/accessories/detail/:id"} element ={ <AccessoriesDetails/>}></Route>
           
        </Routes>
        {/* <Footer/> */}
        </div>
      </Router>
    </>
  )
}
export default App ;
