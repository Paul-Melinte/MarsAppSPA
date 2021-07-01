import React from "react";
import "./NASAinfo.css";

export function NASAinfo () {
    return (
        <div>
            <h1> NASA </h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" className="NASA-logo" alt=""/>
            <p className="NASA-p"> The National Aeronautics and Space Administration is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and space research.</p>
            <p className="NASA-p"> NASA's science is focused on better understanding Earth through the Earth Observing System; advancing heliophysics through the efforts of the Science Mission Directorate's Heliophysics Research Program; exploring bodies throughout the Solar System with advanced robotic spacecraft such as New Horizons; and researching astrophysics topics, such as the Big Bang, through the Great Observatories and associated programs.</p>
        </div>
    );
}