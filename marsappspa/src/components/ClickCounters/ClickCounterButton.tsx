import React, { useContext } from "react";
import { ClickCounterContext } from "./ComplexClickCounter";

export const ClickCounterButton: React.FC = () => {
    const clickCounterContext = useContext(ClickCounterContext);
    
    function incrementCounter() {
        clickCounterContext.setClickCount(clickCounterContext.clickCount + 1);
    } 

    return (
        <button onClick={incrementCounter}> Press me! </button>
    );
}