import React from 'react'
import Carousel from '../JS/Carousel'
import Filter from '../JS/Filter'

function Recommend() {
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col-4">
            <Filter/>
          </div>
          <div class="col-8">
            <Carousel/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Recommend