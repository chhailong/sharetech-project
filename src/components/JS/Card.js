import React from 'react'
import { useState ,useEffect } from 'react';
import "../CSS/cards.css" ; 
import { Link } from 'react-router-dom';

export default function Card() {
    const  [list, showList] = useState([]); 
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
          {
          list.length === 0? <h2>Loading.......</h2>:
          list.map((item) => (
              <Link to = {"/products/laptops/detail/" + item.id} key={item.id} >
                  <div class="card " >
                      <img src={item.img1}class="card-img-top " alt="pic1"/>
                        <div class="card-body">
                        <h4 class="card-title">{item.title}</h4>
                            <p class="card-text">{item.price}</p>
                        </div>
                    </div>
              </Link>

          ))
            
        }

     {/* <div class="card ">
      <img src="https://fastly.picsum.photos/id/121/200/200.jpg?hmac=0aiR--xgWy1aIM85HCFMySsuQ7DJJBE6XW_Yv4nqU6s" class="" alt="..."/>
      <div class="card-body ">
  
      
        <h5 class="card-title ">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div> */}


      
    </>
  )
}
