import React from "react";
import '../css/Showcase.css';

export default function Showcase(props) {
    return (
        <div className="showcase-container">
            <div className="image-container">
            <img src={props.image}></img>
            </div>
            
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <div className="showcase-links">
            <a className="link" href={props.websiteLink}>Visit</a>
            <a href={props.githubLink} className="link githubLink">Github</a>
            </div>
            
        </div>
    )
}