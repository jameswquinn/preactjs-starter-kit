
/** @jsx h */

import { h, Component, Fragment, cloneElement, render } from "preact";
import { useState, useReducer, useMemo, useCallback, useRef, useContext, useEffect, useLayoutEffect, useErrorBoundary } from 'preact/hooks';
import { Router } from "preact-router";
import Match from 'preact-router/match';
import { Link } from 'preact-router/match';
import AsyncRoute from 'preact-async-route';
import Helmet from "preact-helmet";
import { Provider } from 'redux-zero/preact';
import * as timeago from "timeago.js";

import store from '../../stores/store';
import Counter from '../../components/Counter/index';

const Home = () => {
    return (
        <Fragment>
            <Helmet
                title="home page"
                meta={[
                    { name: "description", content: "Helmet application ~ about page" },
                    { property: "og:type", content: "article" }
                ]}
            />
            <h1>Home</h1>
            <p>This is the Home component.</p>
            <Provider store={store}>
                <Counter />
            </Provider>
        </Fragment>
    )
}

export default Home;