
import "../CSS/cards.css";
import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cards = () => {

      // get laptop
      const  [list, showList] = useState([]) ; 
      const listLaptop =  () => {
        fetch('http://localhost:3333/product/laptops')
        .then((response) => response.json())
        .then((json) => {
          console.log(json); 
          showList(json);
        });
        
      };
    
      //  get Accessories
      const  [list1, showList1] = useState([]) ; 
      const listAccessories =  () => {
        fetch('http://localhost:3333/product/accessories')
        .then((response) => response.json())
        .then((json) => {
          console.log(json); 
          showList1(json);
        });
    
        
        
      };
      useEffect(() =>{
        listLaptop() ;
        listAccessories() ; 
      } ,[]) ;

  return (
    <>
    <div className="container">
        {
          list.length === 0? <h2>Loading.......</h2>:
          list.map((item) => (
            <div className="card">
              <Link to = {"/products/laptops/detail/" + item.id} key={item.id} >
              <div class="card">
                  <div class="image"><img src={item.img1} alt="placeholder" style={{width: '100%', height:'100%'}} /></div>
                  <h2 class="title">{item.title}</h2>
                  <span class="price">{item.price}</span>
                </div>

             
              
              </Link>
            </div>
          ))
            
        }
        {/* {

          list1.map((item) => (
            <div className="card">
              <Link to = {"/products/accessories/detail/" + item.id} key={item.id} >
                <h2>{item.brand}</h2>
              </Link>
            </div>

          ))
          
        } */}
    </div>


    </>
  );
}

export default Cards;
