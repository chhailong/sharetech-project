

import Hero from "../JS/Hero";
import {Link} from "react-router-dom"; 
import React, { useState ,useEffect } from 'react';
import "../CSS/home.css" ;


function Home() {
        // get laptop
        const  [list, showList] = useState([]) ; 
        const listLaptop =  () => {
          fetch('http://localhost:3333/product/laptops/2')

          .then((response) => response.json())
          .then((json) => {
            console.log(json); 
            showList(json.laptop);
          });
          
        };
      
        useEffect(() =>{
          listLaptop() ;
        
        } ,[]) ;
  return (
    <>
      <Hero />
      <div className="container">
        {
          list.map((show) =>(
            <Link to = {"/products/laptops/detail/"+2} key={show.id} >
                <div class="card" >
                  <img src={show.img1}class="card-img-top " alt="pic1"/>
                      <div class="card-body">
                      <h4 class="card-title">{show.title}</h4>
                        <p class="card-price">{show.price}</p>
                      </div>
                    </div>
              
  
            </Link>
            
          ))

        }


      </div>

    </>
  );
}
export default Home;
