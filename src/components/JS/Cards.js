
import "../CSS/cards.css";
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
        listLaptop() ;
        listAccessories() ; 
      } ,[]) ;

  return (
    <>
    <div className="container">

        {
          list.length === 0? <h2>Loading.......</h2>:
          list.map((item) => (
              <Link to = {"/products/laptops/detail/" + item.id} key={item.id} >
              <div className="card">
                  <div className="image"><img src={item.img1} alt="" style={{width: '100%', height:'100%'}} /></div>
                  <h2 className="title">{item.title}</h2>
                  <span className="price">{item.price}</span>
                </div>
              </Link>

          ))
            
        }
        {

          list1.map((item) => (

              <Link to = {"/products/accessories/detail/" + item.id} key={item.id} >
              <div className="card">
                  <div className="image"><img src={item.img} alt="placeholder" style={{width: '100%', height:'100%'}} /></div>
                  <h2 className="title">{item.brand}</h2>
                  <span className="price">{item.price}</span>
                </div>
              </Link>


          ))
          
        }
    </div>


    </>
  );
}

export default Cards;
