import React from "react";
import "./PhotoDisplay.css"

export const PhotoDisplay: React.FC<{photos: string[]}> = (props) => {
    return (
        <div className="flex-container">
            <img src={props.photos[0]} className="photoDisplay-photo"/>
            <img src={props.photos[1]} className="photoDisplay-photo"/>
            <img src={props.photos[2]} className="photoDisplay-photo"/>
            <img src={props.photos[3]} className="photoDisplay-photo"/>
            <img src={props.photos[4]} className="photoDisplay-photo"/>
        </div>
    );
}