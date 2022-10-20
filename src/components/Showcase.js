import React from "react";
import '../css/Showcase.css';

export default function Showcase(props) {
    return (
        <div className="showcase-container">
            <h1>{props.title}</h1>
            <img src="https://wallpaperaccess.com/full/2637581.jpg"></img>
            <p>{props.text}</p>
            <a href="#">Github Link</a>
        </div>
    )
}