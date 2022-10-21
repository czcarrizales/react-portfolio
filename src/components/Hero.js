import React from "react";
import '../css/Hero.css'
import chazzHeroPic from '../images/chazz-portfolio-picture.jpg'

export default function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-img-container">
                <img className="hero-img" src={chazzHeroPic}></img>
                <p>Chazz Carrizales</p>
            </div>
            <div className="hero-text">
                <h2>Making Complex Apps Simple</h2>
                <p>Bunch of text here describing myself and showing why I should be hired and such. Second sentence to really sell myself and all that? Maybe a third sentence, I'm not entirely sure to be honest.</p>
            </div>
        </div>
    )
}