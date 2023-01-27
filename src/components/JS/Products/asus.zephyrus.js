import React from "react"  ;
import "../../CSS/products.css"; 
import Zephyrus1 from "../../../images/zephyrus1.jpg" ; 
import Zephyrus2 from "../../../images/zephyrus2.jpg" ; 
import Zephyrus3 from "../../../images/zephyrus3.jpg" ; 


function AsusZephyrus (){
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
                        <img src={Zephyrus1} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={Zephyrus2} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={Zephyrus3} className="d-block w-100" alt="..."/>
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
                                <h2>ASUS ROG Zephyrus Duo 16 Gaming Laptop</h2>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><span >Brand</span></td>
                                                <td><span>ASUS</span></td>
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
                        The ASUS ROG Zephyrus Duo 16 Gaming Laptop comes with a 14 inch 4K secondary touchscreen that makes multitasking and cross-software work that much easier. 
                        The device's NVIDIA GeForce RTX 3080 Ti 16GB GDDR6 ensures a smooth digital working environment, while the Boost and Turbo modes are ready to support an architect's 
                        dynamic work. Powered with the latest in gaming displays, the ROG Nebula HDR Display ensures a balanced brightness, accurate color representation and quick refresh rates.
                         This means designers can confidently rely on their scree's color depiction when editing and rendering.
                        
                        </p>
                        <br />

                    </div>
                    <div className="usefor">
                            <h2>
                            Who It's For
                            </h2>
                            <br />
                            <p>Architecture student

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
                                <li>dual screens, with some excellent options for the main panel </li>
                                <li>good inputs and IO</li>
                                <li> cool and quiet with daily use, and powerful at full-blast</li>
                                <li >versatile profiles, and well balanced Performance mode</li>
                                <li >90W battery, but only average runtimes</li>
                                <li >punchy audio with 6x speakers</li>
                                <li >beautiful design and flawless craftsmanship quality</li>


                                
                            
                            </ul>
                                
                            </div>
                        
                        </div>
                        <div className="col6">
                            <div>
                                <h4>Con</h4>
                            <ul>
                                <li>runs loud on Turbo and Manual mode</li>
                                <li>only average runtimes on battery, on both main-screen options</li>
                                <li>beware of potential coil-whine and the high-pitched fans with basic use</li>
                                <li>Expensive</li>
                                <li>larger, heavier, and somewhat impractical when not on a desk vs. standard clamshell designs</li>
                          
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
                        <td>$869+</td>
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
export default AsusZephyrus ;