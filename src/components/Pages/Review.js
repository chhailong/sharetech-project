import React from "react";
import Carousel from "../JS/Carousel";
import "../../App.css"

function Review (){
    return (
        <>
            <div className="review">
                <h1>Review Page</h1>
            </div>


            <div className="container">
                <h5>Best Performance</h5>
                <div style={{maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
                    <Carousel show={3}>
                        <div style={{padding: 8}}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                        </div>
                        <div style={{padding: 8}}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                        </div>
                        <div style={{padding: 8}}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                        </div>
                        <div style={{padding: 8}}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                        </div>
                        <div style={{padding: 8}}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                        </div>
                        <div style={{padding: 8}}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                        </div>
                    </Carousel>
                </div>
            </div>

            <div className="container">
                <h5>Best Popular</h5>
                <div style={{maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
                    <Carousel show={3}>
                        <div style={{padding: 8}}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                        </div>
                        <div style={{padding: 8}}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                        </div>
                        <div style={{padding: 8}}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                        </div>
                        <div style={{padding: 8}}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                        </div>
                        <div style={{padding: 8}}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                        </div>
                        <div style={{padding: 8}}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                        </div>
                    </Carousel>
                </div>
            </div>

            <div className="container">
                <h5>Best Price</h5>
                <div style={{maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
                    <Carousel show={3}>
                        <div style={{padding: 8}}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                        </div>
                        <div style={{padding: 8}}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                        </div>
                        <div style={{padding: 8}}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                        </div>
                        <div style={{padding: 8}}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                        </div>
                        <div style={{padding: 8}}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                        </div>
                        <div style={{padding: 8}}>
                            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    );
}
export default Review;