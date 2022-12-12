import React from "react";
import '../css/Showcase.css';

export default function Showcase(props) {
    return (
        <div className="showcase-container">
            <h3>{props.title}</h3>
            <img src="https://wallpaperaccess.com/full/2637581.jpg"></img>
            <p>{props.text}</p>
            <a href="#" className="projectLink">Project's Github Link</a>
        </div>
    )
}