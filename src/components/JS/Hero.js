import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <>
        <div class="p-5 text-center bg-image rounded-3 mb-5 mt-5 text-white" 
            style={{backgroundImage: `url(${'https://i.picsum.photos/id/555/500/600.jpg?hmac=syltAxId5ErV3ucxD5BcTvIC4vLPoFynqUg4tFYuQu8'})`,
            height:400
            }}
        > 
            <div class="container p-5">
                <h1 class="display-4 fw-bold">Punny headline</h1>
                <p class="lead fw-bold">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
                <Link class="btn btn-primary" to="/review">See More</Link>
            </div>
        </div>    
    </>
  );
}

export default Hero