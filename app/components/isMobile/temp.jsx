// First: import useState, which is a named export from 'react'
// We could alternatively skip this step, and write React.useState
import React, { useState } from "react";
import ReactDOM from "react-dom";

// This component expects 2 props:
//   text - the text to display
//   maxLength - how many characters to show before "read more"
function LessText({ text, maxLength }) {
    // Create a piece of state, and initialize it to `true`
    // `hidden` will hold the current value of the state,
    // and `setHidden` will let us change it
    const [hidden, setHidden] = useState(true);

    // If the text is short enough, don't bother with the
    // buttons
    if (text <= maxLength) {
        return <span>{text}</span>;
    }

    return (
        <span>
            {hidden
                ? `${text.substr(0, maxLength).trim()} ...`
                : text}
            {hidden ? (
                <a onClick={() => setHidden(false)}> read more</a>
            ) : (
                    <a onClick={() => setHidden(true)}> read less</a>
                )}
        </span>
    );
}

ReactDOM.render(
    <LessText
        text={`Focused, hard work is the real key
      to success. Keep your eyes on the goal, 
      and just keep taking the next step 
      towards completing it.`}
        maxLength={35}
    />,
    document.querySelector("#root")
);
