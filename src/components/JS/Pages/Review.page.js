
import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';


const Review = () => {

  const  [list, showList] = useState([]) ; 
  const listProduct =  () => {
    fetch('http://localhost:3333/product/laptops')
    .then((response) => response.json())
    .then((json) => {
      console.log(json); 
      showList(json);
    });
    
  };
  useEffect(() =>{
    listProduct() ;
    
 
  } ,[]) ;

    return (
        <div className="container">
          {
            list.length === 0? <h2>Loading.......</h2>:
            list.map((item) => (
              <div className="card">
                <Link to = {"/products/laptops/detail/" + item.id} key={item.id} >
                  <h1>{item.title}</h1>
                </Link>


              </div>
            

            ))
            
          }
            
        </div>

    )
}
export default Review ;