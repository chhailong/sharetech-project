import React from 'react'

 const electronicDetails = () => {
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
                        <img src="" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src =" "className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src =""className="d-block w-100" alt="..."/>
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
                                <h2>Apple MAC M1(2022)</h2>
                                    
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
                        <p>To get the obvious out of the way, the new-for-2022 MacBook Air with Apple's more powerful M2 processor is a faster,
                             more desirable machine; if you can swing its $1,199 starting price or a costlier upscale configuration, don't look back.
                              But the M1 version of Apple's lightest portable is still a highly capable, lovable laptop for $999. 
                            Weighing a trim 2.8 pounds, it offers a sharp 13.3-inch Retina display; elegant unibody metal construction in Space Gray,
                             Gold, or Silver; one of the best keyboards and arguably the best touchpad on any laptop; snappy performance and unbeatable integration with the iPhone;
                              and phenomenal battery life (29 hours in our video-playback test).
                        </p>
                        <br />
                        <h2>
                        Who It's For
                        </h2>
                        <br />
                        <p>
                        Apple still insists touch screens are only for tablets and phones, but otherwise it's hard to find fault with the system that invented the ultraportable category.
                         The MacBook Air remains a great grab-and-go productivity partner for almost any around-campus computing task short of hardcore gaming.
                        </p>
                    </div>
     
                </section>
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
                        <td><button type="button" class="btn btn-info"><a href="">location</a></button></td>
                        </tr>
                        <tr>
                        <td>TK Custom</td>
                        <td>1599$</td>
                        <td><button type="button" class="btn btn-info"><a href="">location</a></button></td>
                        </tr>
                        <tr>
                        <td>Gold One Computer</td>
                        <td>99$</td>
                        <td><button type="button" class="btn btn-info"><a href="">location</a></button></td>
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
export default  electronicDetails ; 

