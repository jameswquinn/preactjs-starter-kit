/** @jsx h */

import { h, Component, Fragment, render } from "preact";
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

const More = () => {
    return (
        <Fragment>
            <Helmet
                title="Yes...more page"
                meta={[
                    { name: "description", content: "Helmet application ~ about page" },
                    { property: "og:type", content: "article" }
                ]}
            />
            <main>
                <h1>More</h1>
                <p>This is the More component.</p>
                <Provider store={store}>
                    <Counter />
                </Provider>
            </main>
        </Fragment>
    )
}

export default More;