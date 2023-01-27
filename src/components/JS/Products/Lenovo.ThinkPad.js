import React from "react"  ;
import "../../CSS/products.css"; 
// import gram from "../../../images/LGGram.jpg"; 
import thinkpad1 from "../../../images/lenovo-thinkpad1.jpg";
import thinkpad2 from "../../../images/lenovo-thinkpad2.png";
import thinkpad3 from "../../../images/lenovo-thinkpad3.jpg";


function LenovoThinkPad (){
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
                        <img src={thinkpad1} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={thinkpad2} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={thinkpad3} className="d-block w-100" alt="..."/>
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
                                <h2>Lenovo ThinkPad P1 Gen 5 Laptop</h2>
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
                        The latest in the Lenovo Thinkpad series boasts the portability of its predecessors, with some new and improved features that make for a relaxed and smooth work experience. 
                        Despite its sleek appearance, this device is powerful and offers the best of the latest Intel vPro platform, Core H Series processors and NVIDIA graphics, meaning it can easily 
                        handle the demands of rendering and real-time visualization.The device is made of a liquid metal thermal design which ensures that it stays cool, while its Carbon-Fiber weave cover
                         is sleek in appearance, making it discreet and professional for meetings and presentations. The 16’’ touchscreen is anti-glare and produces an advanced color quality through its X-Rite 
                         Factory Color Calibration. By correcting the RGB color, designers can confidently edit designs and communicate rendering changes. Additionally, the backlit keyboard provides clear visibility 
                         for designers working on their computer for long periods of time. Meanwhile, the 12th Generation Intel Core i7-12700H Processor ensures a smooth and efficient work experience.
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
                                <li>Wonderful keyboard</li>
                                <li>Handsome 4K touch screen</li>
                                <li>Good array of ports and available 5G</li>
                                <li >Trim and light for a 16-inch laptop</li> 

 
                            </ul>
                                
                            </div>
                        
                        </div>
                        <div className="col6">
                            <div>
                                <h4>Con</h4>
                            <ul>
                                <li>Unremarkable battery life</li>
                                <li>Mighty expensive</li>
                                <li>No OLED screen option</li>
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
                        <td>$2699</td>
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
export default LenovoThinkPad ;