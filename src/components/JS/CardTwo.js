


import "../CSS/cards.css" ; 

import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';

const CardTwo = (props) => {

      //  get Accessories
      const  [list1, showList1] = useState([]) ; 
      const listAccessories =  () => {
        fetch('http://localhost:3333/product/accessories/' )
        .then((response) => response.json())
        .then((json) => {
          console.log(json); 
          showList1(json);
        });
    
      };
      useEffect(() =>{
       
        listAccessories() ; 
        
      } ,[]) ;

  return (
    <>
      <div className="container">
        {
          list1.map((item) => (

            <Link to = {"/products/accessories/detail/" + item.id} key={item.id} >
                <div class="card" >
                  <img src={item.img}class="card-img-top " alt="pic1"/>
                    <div class="card-body">
                      <h4 class="card-title">{item.brand}</h4>
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

export default CardTwo;
