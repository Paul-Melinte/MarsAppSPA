import React from "react";
import "./GenericInfo.css";
import { InfoInterface } from "./InfoInterface";

export const GenericInfo: React.FC<{info: InfoInterface}> = (props) => {
    return (
        <div>
            <h1> {props.info.title} </h1>
            <img src={props.info.photo} className="Info-logo" alt=""/>
            <p className="Info-p"> {props.info.firstParagraph} </p>
            <p className="Info-p"> {props.info.secondParagraph} </p>
        </div>
    );
}