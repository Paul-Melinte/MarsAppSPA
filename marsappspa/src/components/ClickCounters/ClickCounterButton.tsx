import React from "react";

export const ClickCounterButton: React.FC<{clickCount: number, setClickCount: React.Dispatch<React.SetStateAction<number>>}> = (props) => {
    function incrementCounter() {
        props.setClickCount(props.clickCount + 1);
    } 

    return (
        <button onClick={incrementCounter}> Press me! </button>
    );
}