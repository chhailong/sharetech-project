import React from "react"  ;
import "../../CSS/products.css"; 
// import gram from "../../../images/LGGram.jpg"; 
import gram from "../../../images/LGgram.jpg" ;
import gram1 from "../../../images/LGGram1.webp"; 
import gram2 from "../../../images/LGGram2.webp"; 

function LG_Gram (){
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
                        <img src={gram} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={gram1} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src={gram2} className="d-block w-100" alt="..."/>
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
                                <h2>LG gram 15.6” Ultra-Lightweight Touchscreen Laptop with Intel® Core™ i7 processor</h2>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><span className="Spec">Brand</span></td>
                                                <td><span>LG</span></td>
                                            </tr>
                                            <tr>
                                                <td><span className="Spec">Model</span></td>
                                                <td><span>Mac book</span></td>
                                            </tr>
                                            <tr>
                                                <td><span className="Spec">Screen</span></td>
                                                <td><span>Mac book</span></td>
                                            </tr>
                                            <tr>
                                                <td><span className="Spec">Brand</span></td>
                                                <td><span>Mac book</span></td>
                                            </tr>
                                            <tr>
                                                <td><span className="Spec">Brand</span></td>
                                                <td><span>Mac book</span></td>
                                            </tr>
                                            <tr>
                                                <td><span className="Spec">Brand</span></td>
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
                        <p>The LG gram 15Z970 touchscreen laptop is another best laptop for accounting work. LG designed this laptop model for business people in mind. Of course,
                             accountants fall in the category of business people. As usual, it comes bearing gifts in the form of outstanding features. For starters, it uses the 
                             famous intel core i7 processor to boost the operating speed of this laptop. That’s part of what makes it stand out. It is one of the ideal laptops for 
                             accountants.The 13.3-inch laptop is thin and lightweight by design. You can boldly carry it along with you on any trip. The resolution also produces crisp 
                             images with a 1920 x 1080 Pixels maximum resolution. With 256GB SSD, you never have to worry about storage space.
                        </p>
                        <br />

                    </div>
                    <div className="usefor">
                            <h2>
                            Who It's For
                            </h2>
                            <br />
                            <p>accounting student

                        </p>
                        </div>
                    {/* <div>
                        <h2>Specification</h2>

                    </div> */}

                    {/* <div className="specification">
                        
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                             ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                              but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div> */}
                </section>
                <br />
                <section id ="specification">
                    <div className="row">
                        <div className="col6">
                            <div>
                            <h4>Pro</h4>
                            <ul>
                                <li>Brilliant screen and colors</li>
                                <li>Strong processor performance</li>
                                <li>Long-lasting battery</li>
                                <li>Crazy thin and amazingly light</li>
                            </ul>

                            </div>
                        
                        </div>
                        <div className="col6">
                            <div>
                                <h4>Con</h4>
                            <ul>
                                <li>Power connector feels fragile</li>
                                <li>Power connector feels fragile</li>
                                <li>Type-C port is only USB 3.1 Gen1</li>
                                <li></li>
                            </ul>
        
                            </div>
                            
                        </div>

                    </div>
                </section>
                <br />
                <br />
                <section id="youtube-link">
                    <embed src="https://www.youtube.com/embed/biQbRjeaoHw"  ></embed>
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

                        <td>V Tech</td>
                        <td>1599$</td>
                        <td><button type="button" className ="btn btn-info"><a href="">location</a></button></td>
                        </tr>
                        <tr>
                        <td>TK Custom</td>
                        <td>1599$</td>
                        <td><button type="button" className ="btn btn-info"><a href="">location</a></button></td>
                        </tr>
                        <tr>
                        <td>Gold One Computer</td>
                        <td>99$</td>
                        <td><button type="button" className ="btn btn-info"><a href="">location</a></button></td>
                        </tr>

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
export default LG_Gram ;