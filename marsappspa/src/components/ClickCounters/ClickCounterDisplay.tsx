import React from "react";

export const ClickCounterDisplay: React.FC<{clickCount: number}> = (props) => {
    
    return (
        <p> Button has been clicked {props.clickCount} times.</p>
    );
}