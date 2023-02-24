import React from "react";
import '../css/Hero.css'
import chazzHeroPic from '../images/chazz-portfolio-picture.jpg'

export default function Hero() {
    return (
        <div className="hero-container">
                <img className="hero-img" src={chazzHeroPic}></img>
            <div className="hero-text">
            <h1>CHAZZ CARRIZALES</h1>
                {/* <h2>Making Apps With <span className="complex">Determination</span> And <span className="simple">Perseverance</span></h2> */}
                <p> With over three years of experience creating applications and websites, I'm ready to do whatever it takes to make sure your projects come out in stellar shape.</p>
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