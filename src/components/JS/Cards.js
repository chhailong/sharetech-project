
import "../CSS/cards.css" ; 

import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cards = () => {

      // get laptop
      const  [list, showList] = useState([]) ; 
      const listLaptop =  () => {
        fetch('http://localhost:3333/product/laptops/ ')
        .then((response) => response.json())
        .then((json) => {
          console.log(json); 
          showList(json);
        });
        
      };
    
      useEffect(() =>{
        listLaptop() ;
      
      } ,[]) ;

  return (
    <>
      <div className="container">

      {
          list.length === 0? <h2>Loading.......</h2>:
          list.map((item) => (
              <Link to = {"/products/laptops/detail/" + item.id} key={item.id} >
                  <div class="card" >
                      <img src={item.img1}class="card-img-top " alt="pic1"/>
                        <div class="card-body">
                        <h4 class="card-title">{item.title}</h4>
                            <p class="card-price">{item.price}</p>
                        </div>
                    </div>
              </Link>

          ))
            
        }
    

        
        


      </div>




   


    </>
  );
}

export default Cards;
