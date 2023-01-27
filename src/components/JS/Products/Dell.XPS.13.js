import React from "react"  ;
import "../../CSS/products.css"; 
import dellxps1 from "../../../images/dell-xps1.jpg" ; 
import dellxps2 from "../../../images/dell-xps2.jpg" ; 
import dellxps3 from "../../../images/dell-xps3.webp" ; 

function DellXPS (){
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
                        <img src={dellxps1} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={dellxps2} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={dellxps3} className="d-block w-100" alt="..."/>
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
                                <h2>Dell XPS 13</h2>
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
                        Studying computer science, you will often have to deal with algorithms and complex software. To work at the highest level, 
                        your laptop needs to have a powerful enough processor. Dell XPS 13 is such a laptop model. The product owns the latest generation 
                        mobile processor Intel Core i7-1195G7. Combined with that is 16GB of high-bandwidth RAM. The above combination has created a powerful 
                        laptop model capable of handling all multitasking tasks. XPS 13 also has WiFi 6 technology. Thanks to that, your work will not be interrupted.
                         Instead, you’ll always have a fast, smooth online experience.
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
                                <li>Very compact case</li>
                                <li>Two Thunderbolt 3 ports</li>
                                <li>Fast Wi-Fi 6</li>
                                <li >No coil whine</li> 
                                <li >Four-sided Infinity Edge display</li> 
                                <li >Edge-to-edge keyboard</li> 
  
                            </ul>
                                
                            </div>
                        
                        </div>
                        <div className="col6">
                            <div>
                                <h4>Con</h4>
                            <ul>
                                <li>Mediocre webcam</li>
                                <li>More expensive than the predecessor</li>
                                <li>Limited port selection</li>

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
                        <td>$1680</td>
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
export default DellXPS ;