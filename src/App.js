
import Navbar from './components/JS/Navbar';
import Footer from './components/JS/Footer' ;
import 'bootstrap/dist/css/bootstrap.min.css';



import Home from './components/JS/Pages/Home';
import Review from './components/JS/Pages/Review.page';
import ProductDetails from "./components/JS/Pages/ProductDetails" ;
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {

  return (
      <Router>
      <div className="App">
        <Navbar/>
        <div className="Home">
        <Routes>
          <Route exact path="/" element ={<Home/>}> </Route>
          <Route  path="/review/" element ={<Review/>}></Route>
          <Route  path={"/products/detail/:id"} element ={ <ProductDetails/>}></Route>
        </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );


}
export default App ;
