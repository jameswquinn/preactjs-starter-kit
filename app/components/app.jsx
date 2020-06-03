
/** @jsx h */

import { h, Component, Fragment, render } from "preact";
import { useState, useReducer, useMemo, useCallback, useRef, useContext, useEffect, useLayoutEffect, useErrorBoundary } from 'preact/hooks';
import { Router } from "preact-router";
import Match from 'preact-router/match';
import { Link } from 'preact-router/match';
import AsyncRoute from 'preact-async-route';
import Helmet from "preact-helmet";
import * as timeago from "timeago.js";

import Home from '../routes/home/index';

import Nav from './nav/index'

const App = () => {

    return (
        <Fragment id="root">
            <Nav />
            <Router>
                <Home path="/" />
                <AsyncRoute
                    path="/about"
                    getComponent={() =>
                        import('../routes/about/index').then(module => module.default)
                    }
                />
                <AsyncRoute
                    path="/contact"
                    getComponent={() =>
                        import('../routes/contact/index').then(module => module.default)
                    }
                />
                <AsyncRoute
                    path="/more"
                    getComponent={() =>
                        import('../routes/more/index').then(module => module.default)
                    }
                />
                <Error type="404" default />
            </Router>
        </Fragment>
    )
}



/** fall-back route (handles unroutable URLs) */
const Error = ({ type, url }) => (
    <main className="error">
        <h2>Error {type}</h2>
        <p>It looks like we hit a snag.</p>
        <pre>{url}</pre>
    </main>
);



render(<App />, document.body, document.body.querySelector("#root"));
