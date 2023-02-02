import "../CSS/products.css" ; 
//React Component
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const LaptopDetails = () => {
  const { id } = useParams();
  const [items, allItem] = useState([]);

  const getProuduct = async () => {
    try {
      const req = await fetch("http://localhost:3333/product/laptops/" + id);
      const dataItems = await req.json();

      allItem(dataItems.laptop);
      console.log(dataItems);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProuduct();
    console.log(items);
  }, []);

  return (
    <div className="container">
      {items.map((show) => (
        <div className="product">
          <section id="product-item">
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col4 ">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="true"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={show.img1}
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item ">
                        <img
                          src={show.img2}
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item ">
                        <img
                          src={show.img3}
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="col4">
                  <h2>{show.title}</h2>

                  <table>
                    <h4>Key Fealtures</h4>
                    <tr>
                      <td>CPU</td>
                      <td>{show.cpu}</td>
                    </tr>
                    <tr>
                      <td>RAM</td>
                      <td>{show.ram}</td>
                    </tr>
                    <tr>
                      <td>GPU</td>
                      <td>{show.gpu}</td>
                    </tr>
                    <tr>
                      <td>Refresh Rate</td>
                      <td>{show.refreshRate}</td>
                    </tr>
                    <tr>
                      <td>Operating</td>
                      <td>{show.os}</td>
                    </tr>
                    <tr>
                      <td>Display Size</td>
                      <td>{show.displaySize}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <br />
          </section>
          <section id="description-item">
            <div className="Text">
              <h2>Why We Picked It</h2>
              <br />
              <p>{show.description}</p>
              <br />
            </div>
            <div className="usefor">
              <h2>Who It's For</h2>
              <br />
              <p>{show.usefor} </p>
            </div>
          </section>
          <br />
          <section id="specification">
            <div className="row">
              <div className="col6">
                <div>
                  <h4>Pro</h4>
                  <ul>{<li>{show.pro}</li>}</ul>
                </div>
              </div>
              <div className="col6">
                <div>
                  <h4>Con</h4>
                  <ul>{<li>{show.con}</li>}</ul>
                </div>
              </div>
            </div>
          </section>
          <br />
          <br />
          <section id="youtube-link">
            <embed src={show.youtube}></embed>
          </section>
          <br />
          <br />
          <div className="store-map">
            <h2>Where You Can Buy</h2>
          </div>
          <section id="product-store">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Store</th>
                  <th scope="col">Price</th>
                  <th scope="col">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{show.shop}</td>
                  <td>{show.price}</td>
                  <td>
                    <button type="button" className="btn btn-info">
                      <a href={show.location}>location</a>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <br />
          <br />
          <div className="related">
            <h2>Related</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LaptopDetails;
