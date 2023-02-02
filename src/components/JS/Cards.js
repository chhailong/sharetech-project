import React from "react";

import "../CSS/cards.css";

function Cards() {

  return (
    <>
      <div class="card">
        <div class="image"><img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%', height:'100%'}} /></div>
        <h2 class="title">Cool Chair</h2>
        <span class="price">$100</span>
      </div>
    </>
  );
}

export default Cards;
