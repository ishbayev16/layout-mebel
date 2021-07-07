import React, {useState, useEffect} from 'react';
import "./FeaturedCart.css";

function FeaturedCart(props) {

    return (
        <div className="featured-cart-container">
            <div className="img-container">
            <img className="featured-cart-img" src={props.img} alt="img"/>
            </div>
            <div className="featured-title-container">
                <p className="featured-title-text">{props.title}</p>
            </div>
        </div>
    );
};

export default FeaturedCart;