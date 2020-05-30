
/** @jsx h */

import { h, Component, Fragment, render } from "preact";
import { useState } from 'preact/hooks';
import { Router } from "preact-router";
import { Link } from 'preact-router/match';
import AsyncRoute from 'preact-async-route';
import * as timeago from "timeago.js";


const App = () => (
    
    <Fragment id="root">
        <h1>Hello</h1>
        <h2>{timeago.format(1590876022937)}</h2>
    </Fragment>
);


const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    // You can also pass a callback to the setter
    const decrement = () => setCount((currentCount) => currentCount - 1);

    return (
        <div id="root">
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

render(<Counter />, document.body, document.body.querySelector("#root"));