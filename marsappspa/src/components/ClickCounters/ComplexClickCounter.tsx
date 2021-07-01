import React, { useState } from "react";
import { ClickCounterButton } from "./ClickCounterButton";
import { ClickCounterText } from "./ClickCounterText";

export const ComplexClickCounter: React.FC = () => {
    const [clickCount, setClickCount] = useState(0);

    return (
        <div>
            <ClickCounterButton clickCount={clickCount} setClickCount={setClickCount} />
            <ClickCounterText clickCount={clickCount} />
        </div>
    );
}