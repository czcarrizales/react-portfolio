import React from "react";
import '../css/Showcase.css';

export default function Showcase(props) {
    return (
        <div className="showcase-container">
            <img src={props.image}></img>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <div className="showcase-links">
            <a className="link" href={props.websiteLink}>Visit</a>
            <a href={props.githubLink} className="link githubLink">Github Link</a>
            </div>
            
        </div>
    )
}