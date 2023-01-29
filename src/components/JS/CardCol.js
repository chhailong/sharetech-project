import React from "react";
import img1 from "../../Images/image1-1.jpg";
import img2 from "../../Images/image1-2.jpg";
import img3 from "../../Images/image1-3.jpg";
import img4 from "../../Images/image1-4.jpg";
import img5 from "../../Images/image1-5.jpg";

function CardCol() {
  return (
    <>
      <div class="card flex-row">
        <img class="card-img-sm-left example-card-img-responsive" src={img1} />
        <div class="card-body">
          <h4 class="card-title h5 h4-sm">Left image</h4>
          <p class="card-text">Example text</p>
        </div>
      </div>

      <div class="card flex-row">
        <img class="card-img-sm-left example-card-img-responsive" src={img2} />
        <div class="card-body">
          <h4 class="card-title h5 h4-sm">Left image</h4>
          <p class="card-text">Example text</p>
        </div>
      </div>

      <div class="card flex-row">
        <img class="card-img-sm-left example-card-img-responsive" src={img3} />
        <div class="card-body">
          <h4 class="card-title h5 h4-sm">Left image</h4>
          <p class="card-text">Example text</p>
        </div>
      </div>

      <div class="card flex-row">
        <img class="card-img-sm-left example-card-img-responsive" src={img4} />
        <div class="card-body">
          <h4 class="card-title h5 h4-sm">Left image</h4>
          <p class="card-text">Example text</p>
        </div>
      </div>

      <div class="card flex-row">
        <img class="card-img-sm-left example-card-img-responsive" src={img5} />
        <div class="card-body">
          <h4 class="card-title h5 h4-sm">Left image</h4>
          <p class="card-text">Example text</p>
        </div>
      </div>
    </>
  );
}

export default CardCol;
