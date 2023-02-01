import React, { useState, useEffect } from "react";
import "../CSS/carousel.css";

const Carousel = (props) =>{
  const {children, show} = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)

  useEffect(() => {
    setLength(children.length)
  }, [children])

  const next = () => {
    if (currentIndex < (length - show)){
      setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

  return(
    <div className="carousel-container">
      <div className="carousel-wrapper">

        {
          currentIndex > 0 &&
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        }

        <div className="carousel-content-wrapper">
          <div 
            className={`carousel-content show-${show}`}
            style={{ transform: `translateX(-${currentIndex * (100 / show)}%)`}}
          >
            {children}
          </div>
        </div>

        {
          currentIndex < (length - show) &&
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
        }

      </div>
    </div>
  )
}

export default Carousel;

// import React from "react";
// import Cards from "./Cards";
// import "../CSS/carousel.css";

// function Carousel() {
//   return (
//     <>
//       <div id="carouselExample" class="carousel carousel-dark slide">
//         <div class="carousel-inner">
//           <div class="carousel-item active">
//             <div class="card-wrapper">
//               <Cards />
//             </div>
//           </div>

//           <div class="carousel-item">
//             <div class="card-wrapper">
//               <Cards />
//             </div>
//           </div>

//           <div class="carousel-item">
//             <div class="card-wrapper">
//               <Cards />
//             </div>
//           </div>

//           <div class="carousel-item">
//             <div class="card-wrapper">
//               <Cards />
//             </div>
//           </div>

//           <div class="carousel-item">
//             <div class="card-wrapper">
//               <Cards />
//             </div>
//           </div>
//         </div>

//         <button
//           class="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="prev"
//         >
//           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span class="visually-hidden">Previous</span>
//         </button>

//         <button
//           class="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="next"
//         >
//           <span class="carousel-control-next-icon" aria-hidden="true"></span>
//           <span class="visually-hidden">Next</span>
//         </button>
//       </div>
//     </>
//   );
// }

// export default Carousel;
