import React, { useState } from "react";
import { ClickCounterButton } from "./ClickCounterButton";
import { ClickCounterText } from "./ClickCounterText";

interface clickData {
    clickCount: number;
    setClickCount: (clickCount: number) => void;
}

export const ClickCounterContext = React.createContext<clickData>({
    clickCount: 0,
    setClickCount: () => {}
})

export const ComplexClickCounter: React.FC = () => {
    const [clickCount, setClickCount] = useState(0);

    return (
        <ClickCounterContext.Provider value={{clickCount, setClickCount}}>
            <div>
                <ClickCounterButton />
                <ClickCounterText />
            </div>
        </ClickCounterContext.Provider>
    );
}