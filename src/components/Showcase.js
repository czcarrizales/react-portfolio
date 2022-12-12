import React from "react";
import '../css/Showcase.css';

export default function Showcase(props) {
    return (
        <div className="showcase-container">
            <h3>{props.title}</h3>
            <img src={props.image}></img>
            <p>{props.text}</p>
            <a href="#" className="projectLink">Github Link</a>
        </div>
    )
}