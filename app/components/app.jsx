/** @jsx h */

import { h, Component, Fragment, cloneElement, render } from "preact";
import { useState, useReducer, useMemo, useCallback, useRef, useContext, useEffect, useLayoutEffect, useErrorBoundary } from 'preact/hooks';
import { Router } from "preact-router";
import Match from 'preact-router/match';
import { Link } from 'preact-router/match';
import AsyncRoute from 'preact-async-route';
import Helmet from "preact-helmet";
//import { Transition, CSSTransition, TransitionGroup } from 'preact-transitioning';
import * as timeago from "timeago.js";

import Error from '../routes/404/index';
import Nav from './nav/index'

const App = () => {

    return (
        <Fragment id="root">
            <Nav />
            <Router>
                <AsyncRoute
                    path="/"
                    getComponent={() =>
                        import('../routes/home/index').then(module => module.default)
                    }
                />
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

render(<App />, document.body, document.body.querySelector("#root"));
