
import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';


const Review = () => {

  const  [dataIten, AllItem] = useState([]) ; 
  const listProduct = async () => {
  
     try {
 
      const req = await fetch('http://localhost:3333/product/'); 
      const dataItems = await req.json(); 
     
      AllItem(dataItems.data); 

      console.log(dataItems); 
      
    } catch (err) {
      console.log(err) ; 
      
    }

  }
  useEffect(() =>{
    listProduct() ;
 
  } ,[]) ;

    return (
        <div className="container">
          {/* {
            product && product.map((click) => (
              <div className="card">
                <Link to = {"/products/detail/" + 1}  >
                  <h1>{click.title}</h1>
                 
                  
                </Link>


              </div>
            

            ))
            
          } */}


            <Link to = {"/products/detail/" + 1}>Acer Aspire 7 </Link>
            <br />
            <Link to = {"/products/detail/" + 2}>Acer Nitro</Link>

          







     
            {/* <Link to ="/products/dell" onClick={handleClick} >See product Dell</Link>
            <Link to ="/products/LG-gram" onClick={handleClick} ></Link>
            <Link to ="/products/acer-aspire7" onClick={handleClick} >Acer Aspire</Link>
            <Link to ="/products/acer-nitro" onClick={handleClick} >Acer Nitro</Link>
            <Link to ="/products/detail/asus-zephyrus" onClick={handleClick} >Asus Zephyrus</Link>
            <Link to ="/products/detail/dell-inspriron" onClick={handleClick} >Dell Insriron</Link>
            <Link to ="/products/dell-xps" onClick={handleClick} >Dell XPS</Link>
            <Link to ="/products/hp-zbook" onClick={handleClick} >HP Zbook</Link>
            <Link to ="/products/lenovo-flex" onClick={handleClick} >Lenovo Flex</Link>
            <Link to ="/products/lenovo-thinkpad" onClick={handleClick} >Lenovo ThinkPad</Link>
            <Link to ="/products/LG-Gram" onClick={handleClick} >LG Gram</Link>
            <Link to ="/products/ms-surface" onClick={handleClick} >MS surface Pro 7</Link>
            <Link to ="/products/ms-surface-pro9" onClick={handleClick} >MS surface Pro 9</Link>
            <Link to ="/products/ms-surface-book2" onClick={handleClick} >MS surface Book 2</Link> */}
            
        </div>

    )
}
export default Review ;