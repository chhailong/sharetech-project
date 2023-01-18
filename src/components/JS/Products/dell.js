import React from "react"  ;
import mac from "../../../images/mac.jpg"; 

function Dell (){
    return (
        <>

        <div className="container">
            <h1> Detail Product </h1>
            <div className="product">
                <section id="product-item">
                    <div className="row">
                        <div className="col4">
                            <div>
                                <img src={mac} alt="" />

                               {/* <img src="https://i.picsum.photos/id/133/500/300.jpg?hmac=A8T-AppCputOBgdRxvZljEsii-cK7J2ZTfGZHloyaVo" alt="" /> */}
                            </div>
                            
                        </div>
                        <div className="col4">
                            <div>
                                <h2>Apple MAC M1(2022)</h2>
                                <p>Hello mac m1 </p>
                            </div>
                            
                        </div>
                    </div>
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
            </div>
            div.
        </div>

        </>

    )
}
export default Dell ;