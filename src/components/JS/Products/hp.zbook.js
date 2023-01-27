import React from "react"  ;
import "../../CSS/products.css"; 

import hpzbook1 from "../../../images/HP-zbook1.webp"; 
import hpzbook2 from "../../../images/HP-zbook2.png"; 
import hpzbook3 from "../../../images/HP-zbook3.webp"; 


function HPZbook (){
    return (
        <>
        <div className="container">
            <div className="product">
                <section id="product-item">
                <div className ="container text-center">
                    <div className ="row align-items-start">
                        <div className ="col4 ">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={hpzbook1} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={hpzbook2} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={hpzbook3} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                        
                        </div>
                        <div className="col4">
                                <h2>HP ZBook Fury G8 Mobile Workstation</h2>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><span >Brand</span></td>
                                                <td><span>Microsoft</span></td>
                                            </tr>
                                            <tr>
                                                <td><span >Microsoft</span></td>
                                                <td><span>Mac book</span></td>
                                            </tr>
                                            <tr>
                                                <td><span >Screen</span></td>
                                                <td><span>Mac book</span></td>
                                            </tr>
                                            <tr>
                                                <td><span >Brand</span></td>
                                                <td><span>Mac book</span></td>
                                            </tr>
                                            <tr>
                                                <td><span >Brand</span></td>
                                                <td><span>Mac book</span></td>
                                            </tr>
                                            <tr>
                                                <td><span >Brand</span></td>
                                                <td><span>Mac book</span></td>
                                            </tr>

                                        </tbody>
                                    </table>

                        </div>
                    </div>
                    </div>
                    <br />

                </section>
                <section id="description-item" >
 
                    <div className="Text">
                        <h2>
                            Why We Picked It
                        </h2>
                        <br />
                        <p>
                        When we think of robustness, we think of the HP ZBook Fury G8 Mobile Workstation. A high-speed, high-performing device ready to support an architect’s complex and dynamic work. 
                        Whether using the device for architectural visualization, video editing, zoom calls or large-file storage, this device is ready to support all types of work. With a Intel Core
                         i7-11800H Processor a Max Turbo Frequency of up to 4.6GHz, this laptop can quickly transfer data and load any application. Built with two Thunderbolt 4 with USB4 Type-C, three
                          SuperSpeed USB Type-A ports and a microphone jack, this device is prepared for any type of work. Moreover, the HP ZBook Fury’s backlit keyboard and anti-glare display ensure a 
                          comfortable experience – a great device for architects and architecture students working with tedious design software and meticulous renderings. The laptop comes with Windows 10 Pro and can be updated to Windows 11 Pro for free.
                        </p>
                        <br />

                    </div>
                    <div className="usefor">
                            <h2>
                            Who It's For
                            </h2>
                            <br />
                            <p>Architecture student student

                        </p>
                        </div>

                </section>
                <br />
                <section id ="specification">
                    <div className="row">
                        <div className="col6">
                            <div>
                            <h4>Pro</h4>
                            <ul>
                                <li>Scorching Core i9 processor</li>
                                <li>Up to 128GB of RAM and 8TB of storage</li>
                                <li> Available ECC memory</li>
                                <li >Great serviceability and security</li> 
                                <li >Beautiful 4K DreamColor display</li> 
                            </ul>
                                
                            </div>
                        
                        </div>
                        <div className="col6">
                            <div>
                                <h4>Con</h4>
                            <ul>
                                <li>Ultra-expensive GPU fails to impress</li>
                                <li>Wi-Fi 6, not 6E</li>
                                <li>Sky-high price when fully loaded</li>

                            </ul>
        
                            </div>
                            
                        </div>

                    </div>
                </section>
                <br />
                <br />
                <section id="youtube-link">
                    <embed src="https://www.youtube.com/embed/2wglanjCIG0"></embed>
                </section>
                <br />
                <br />
                <div className="store-map">
                    <h2>Where You Can Buy</h2>
                </div>
                <section id="product-store">
                        <table className="table">
                        <thead>
                        <tr>
   
                        <th scope="col">Store</th>
                        <th scope="col">Price</th>
                        <th scope="col">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                        <td>Amazon</td>
                        <td>$2254.96+</td>
                        <td><button type="button" className ="btn btn-info"><a href="">location</a></button></td>
                        </tr>
                        {/* <tr>
                        <td>TK Custom</td>
                        <td>1599$</td>
                        <td><button type="button" className ="btn btn-info"><a href="">location</a></button></td>
                        </tr>
                        <tr>
                        <td>Gold One Computer</td>
                        <td>99$</td>
                        <td><button type="button" className ="btn btn-info"><a href="">location</a></button></td>
                        </tr> */}

                    </tbody>
                    </table>

                </section>
                <br />
                <br />
                <div className="related">
                    <h2>Related</h2>
                </div>
               
            </div>
            
        </div>
        <br />
        <br />

        </>

    )
}
export default HPZbook ;