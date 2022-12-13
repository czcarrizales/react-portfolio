import React from "react";
import '../css/Hero.css'
import chazzHeroPic from '../images/chazz-portfolio-picture.jpg'

export default function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-img-container">
                <img className="hero-img" src={chazzHeroPic}></img>
                <h1>Chazz Carrizales</h1>
            </div>
            <div className="hero-text">
                {/* <h2>Making Apps With <span className="complex">Determination</span> And <span className="simple">Perseverance</span></h2> */}
                <p>Full Stack web developer based in California. Over five years of experience creating applications. MEAN and MERN stacks are my speciality.</p>
                <div className="icons">
                <i class="fa-brands fa-angular fa-2x"></i>
                <i class="fa-brands fa-react fa-2x"></i>
                <i class="fa-brands fa-css3-alt fa-2x"></i>
                <i class="fa-brands fa-square-js fa-2x"></i>
                <i class="fa-brands fa-html5 fa-2x"></i>
                </div>
            </div>
        </div>
    )
}