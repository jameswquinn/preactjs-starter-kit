/** @jsx h */

import { h, Component, Fragment, cloneElement, render } from "preact";
import { useState, useReducer, useMemo, useCallback, useRef, useContext, useEffect, useLayoutEffect, useErrorBoundary } from 'preact/hooks';
import { Router } from "preact-router";
import Match from 'preact-router/match';
import { Link } from 'preact-router/match';
import AsyncRoute from 'preact-async-route';
import Helmet from "preact-helmet";
import * as timeago from "timeago.js";


const Contact = () => {
    return (
        <Fragment>
            <Helmet
                title="contact page"
                meta={[
                    { name: "description", content: "Helmet application ~ about page" },
                    { property: "og:type", content: "article" }
                ]}
            />
            <h1>Contact</h1>
            <p>This is the Contact component.</p>
        </Fragment>
    )
}

export default Contact;