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
                <p>I'm a software developer based in California. I strive to bring out the best in myself, my work, and my team. With over three years of experience creating applications, I'm ready to do whatever it takes to make sure your projects come out in stellar shape.</p>
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