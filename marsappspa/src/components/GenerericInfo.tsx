import React from "react";
import "./GenericInfo.css";

export const GenericInfo: React.FC<{info: {title: string, logo: string, firstParagraph:string, secondParagraph:string}}> = (props) => {
    return (
        <div>
            <h1> {props.info.title} </h1>
            <img src={props.info.logo} className="Info-logo" alt=""/>
            <p className="Info-p"> {props.info.firstParagraph} </p>
            <p className="Info-p"> {props.info.secondParagraph} </p>
        </div>
    );
}