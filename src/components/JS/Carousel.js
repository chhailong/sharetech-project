import React from "react";
import Cards from './Cards'
import '../CSS/cardstyles.css'

function Carousel() {
    return (
        <>

            <div 
            id="carouselExample" 
            class="carousel carousel-dark slide"
            data-type="carousel"
            data-width="100%"
            data-hight="300px"
            data-animation="dragX"
            data-move="1"
            >
                <div class="carousel-inner">

                    <div class="carousel-item active">
                        <div class="card-wrapper">
                            <Cards />
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div class="card-wrapper">
                            <Cards />
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div class="card-wrapper">
                            <Cards />
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div class="card-wrapper">
                            <Cards />
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div class="card-wrapper">
                            <Cards />
                        </div>
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

            </div>
        </>
    );
}

export default Carousel;