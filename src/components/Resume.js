import React from "react";
import '../css/Resume.css'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';


export default function Resume() {
    return (
        <div className="resume-container">
            <h1>Resume</h1>
            <iframe src="chazz_carrizales_resume.pdf"></iframe>
        </div>
    )
}