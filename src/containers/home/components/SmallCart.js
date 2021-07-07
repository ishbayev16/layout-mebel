import React, {useState, useEffect} from 'react';
import "./SmallCart.css";

function SmallCart(props) {

    return (
        <div className="single-small-cart">
            <div className="small-cart-img-container">
                <img className="small-cart-img" src={props.img} alt="img"/>
                <img className="small-cart-img-2" src={props.img2} alt="img"/>
            </div>
            <div className="small-container-title">
                <p className="featured-title-text">{props.title}</p>
                <p>22$</p>
            </div>
        </div>
    );
};

export default SmallCart;