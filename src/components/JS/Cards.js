import React from "react";
import img1 from "../../Images/image1-1.jpg";
import img2 from "../../Images/image1-2.jpg";
import img3 from "../../Images/image1-3.jpg";
import img4 from "../../Images/image1-4.jpg";
import img5 from "../../Images/image1-5.jpg";
import "../CSS/carousel.css";

function Cards() {
  return (
    <>
      <div class="card">
        <div class="image-wrapper">
          <img src={img1} class="card-img-top" alt="" />
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div class="card">
        <div className="image-wrapper">
          <img src={img2} class="card-img-top" alt="" />
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div class="card">
        <div className="image-wrapper">
          <img src={img3} class="card-img-top" alt="" />
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div class="card">
        <div className="image-wrapper">
          <img src={img4} class="card-img-top" alt="" />
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div class="card">
        <div className="image-wrapper">
          <img src={img5} class="card-img-top" alt="" />
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      {/** Card in row*/}
    </>
  );
}

export default Cards;
