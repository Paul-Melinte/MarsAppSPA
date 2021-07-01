import React, { useContext } from "react";
import { ClickCounterContext } from "./ComplexClickCounter";

export const ClickCounterDisplay: React.FC = () => {
    const clickCounterContext = useContext(ClickCounterContext);


    return (
        <p> Button has been clicked {clickCounterContext.clickCount} times.</p>
    );
}