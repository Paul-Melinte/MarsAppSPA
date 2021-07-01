import React from "react";
import { ClickCounterDisplay } from "./ClickCounterDisplay";

export const ClickCounterText: React.FC<{clickCount: number}> = (props) => {


    return (
        <div>
            <h3> Please press the button. </h3>
            <ClickCounterDisplay clickCount={props.clickCount} />
        </div>
    );
}