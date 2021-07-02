import React, { useEffect, useState } from "react";

export const ClickCounter: React.FC = () => {
    const [clickCount, setClickCount] = useState(0);

    function incrementCounter() {
        setClickCount(clickCount + 1);
    }

    useEffect(() => {
        if(clickCount === 0){
            setClickCount(parseInt(localStorage.getItem("clickCount") || "0"));
        }

        localStorage.setItem("clickCount", clickCount.toString());
    },[clickCount]);

    return (
        <div>
            <p> You clicked {clickCount} </p>
            <button onClick={incrementCounter}> Click me! </button>
        </div>
    );
}