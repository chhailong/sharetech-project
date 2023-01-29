import React from "react";
import CardCol from "../JS/CardCol";

import Filter from "../JS/Filter";

function Recommend() {
  return (
    <>
      <div class="container-fluid text-center">
        <div class="row">
          <div class="col-lg-3">
            <Filter />
          </div>
          <div class="col-lg-9">
            <CardCol />
          </div>
        </div>
      </div>
    </>
  );
}

export default Recommend;
