import React, {useState, useEffect} from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import sl1 from "../assets/slider/slider1.jpg";
import sl2 from "../assets/slider/sld.jpg";
import "./SliderComponent.css";
function SliderComponent() {

    const content = [{img: sl1,title: "title 1", description: "description"}, {img: sl2 ,title: "title 2", description: "description"}, {img: sl2 ,title: "title 3", description: "description"}]

    return (
        <Slider autoplay={1000} infinite={true}>
            {content.map((article, index) => <div key={index}>
                <img className="slider-img" src={article.img} alt="img"/>
                <h2>{article.title}</h2>
                <div>{article.description}</div>
            </div>)}
        </Slider>
    );
}

export default SliderComponent;