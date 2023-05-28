
import "../CSS/home.css"; 
import {Link} from "react-router-dom"; 
import React, { useState ,useEffect } from 'react';
import background from "../../assets/electronic_bg.jpg";
import imglaptop from "../../assets/imglaptop.jpg";
import Card from "../JS/Card";


import Carousel from "react-elastic-carousel";
import Cards from "../JS/Cards";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },

]

function Home() {

        // get laptop
        // const  [list, showList] = useState([]) ; 
        // const listLaptop =  () => {
        //   fetch('http://localhost:3333/product/laptops')

        //   .then((response) => response.json())
        //   .then((json) => {
        //     console.log(json); 
        //     showList(json.laptop);
        //   });
          
        // };
      
        // useEffect(() =>{
        //   listLaptop() ;
        
        // } ,[]) ;
  return (
    <>


      {/* <div className="background">
        <img className="mx-auto " src={background} alt="background.." />
        <h1>The Website For Help You Find Electronic For Study </h1>
      </div>
      <br />
      <div className="container ">
        <h2>Popular Product</h2>
      </div>
      <div className="container ">

       
       
      </div> */}


   
      {/* <div className="d-flex p-5  p-lg-10 text-center text-sm-start">
      <div className="container ">
        <div className="row ">
        <div className="col-lg-6 col-md-12 col-12 ps-lg-5 mt-md-5 ">
            <div className="about-text">
              <h2>Welcome to Sharetech  <br /> Website</h2>
              <p>There are four different techniques to create multicolumn layouts. ... If you want to create your layout fast, you can use a CSS framework, like W3.</p>

            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="about-img">
              <img src={background} alt="" className="img-fluid rounded-2"/>
            </div>
          </div>



        </div>
      </div>
      </div> */}

      <section className="bg-dark text-light p-5 text-center pt-lg-5 text-sm-start ">
          <div className="container">
            <div className="d-sm-flex py-5">
               <div>
                <h1 > Welcome to 
                    <br />
                    <span className="text-warning"> ShareTech Website</span>
                  
                   </h1>
                <p className="lead my-4">Bootstrap provides a number of CSS classes that can be used to set the height of the navbar. The py-* classes control the padding of the navbar, and the * represents the height of the padding. For example, to set the height of the navbar to 100px, you would add the following CSS to your HTML file:</p>

                <button className="btn btn-primary btn-lg text-light ">Start Enrollment</button>
               </div>
               <img src={imglaptop} alt=""  className="img-fluid w-50 h-50 g-4"/>
            </div>
          </div>

      </section>

      <section className="bg-primary text-light p-5">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center">
            <h3 className="mb-3 mb-md-0">Sign Up For Free</h3>
            <div class="input-group news-input">
          <input type="text" class="form-control"/>
          <button class="btn btn-dark btn-lg" type="button" id="button-addon2">Button</button>
        </div>
          </div>

        </div>
      </section>


      {/* section Box */}

      <section className="p-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md">
              <div className="card text-light bg-dark">
                <div className="card-body text-center">
                  <i className="bi bi-laptop"></i>
                  <i class="bi bi-bag-check"></i>

                  
                </div>
              </div>
            </div>
            <div className="col-md">2</div>
            <div className="col-md">3</div>
          </div>
        </div>
      </section>







      
  


    </>
  );
}



export default Home ;
