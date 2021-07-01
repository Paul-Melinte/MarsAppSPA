import React, { useState } from "react";

export const ClickCounter: React.FC = () => {
    const [clickCount, setClickCount] = useState(0);
    
    function incrementCounter() {
        setClickCount(clickCount + 1);
    }

    return (
        <div>
            <p> You clicked {clickCount} </p>
            <button onClick={incrementCounter}> Click me! </button>
        </div>
    );
}