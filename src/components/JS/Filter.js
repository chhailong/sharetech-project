import React from 'react'

function Filter() {
  return (
    <>
      <div class="card">
        <h5 class="card-header">Filter Product</h5>
  
        <h6 class="text-info">Select Major</h6> 
        <ul class="list-group">
          <li class="list-group-item">
            <div class="form-check">
              <label class="form-check-label"></label>
                <input type="checkbox" class="form-check-input" value="IT" id="major"></input>
            </div>
          </li>
        </ul> 

        <h6 class="text-info">Select Brand</h6> 
        <ul class="list-group">
          <li class="list-group-item">
            <div class="form-check">
              <label class="form-check-label"></label>
                <input type="checkbox" class="form-check-input" value="brand" id="brand"></input>
            </div>
          </li>
        </ul>

        <h6 class="text-info">Price</h6> 
        <ul class="list-group">
          <li class="list-group-item">
            <div class="form-check">
              <label class="form-check-label"></label>
                <input type="checkbox" class="form-check-input" value="price" id="price"></input>
            </div>
          </li>
        </ul>

      </div>
    </>
  );
}

export default Filter