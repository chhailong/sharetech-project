import React from "react";
import { Link } from "react-router-dom";

function Cards() {
    return(
        <>
            <div className="card">
                <img src="https://i.picsum.photos/id/999/200/150.jpg?hmac=kRjkUI_P2wfuXrcvkYOk0Bv_P6vNob9xClBu1BlaYCo" alt="" className="card-img-top"/>
                <div className="card-body">
                    <h3 className="card-title">M1 Pro Max</h3>
                    <p className="card-text">The Best laptop for contain creater and Developer</p>
                    <Link to="/review" className="btn btn-light">Review</Link>
                </div>
            </div>
        </>
    );
}

export default Cards;