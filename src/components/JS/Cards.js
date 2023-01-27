import React from 'react';
import img1 from '../../Images/image1-1.jpg';
import img2 from '../../Images/image1-2.jpg';
import img3 from '../../Images/image1-3.jpg';
import img4 from '../../Images/image1-4.jpg';
import img5 from '../../Images/image1-5.jpg';

function Cards() {
  return (
    <>
        <div class="card">
            <img src={img1} class="card-img-top" alt=""/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        <div class="card">
            <img src={img2} class="card-img-top" alt=""/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        <div class="card">
            <img src={img3} class="card-img-top" alt=""/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        <div class="card">
            <img src={img4} class="card-img-top" alt=""/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        <div class="card">
            <img src={img5} class="card-img-top" alt=""/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </>
  );
}

export default Cards