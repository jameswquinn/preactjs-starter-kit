/** @jsx h */

import { h, Component, Fragment, cloneElement, render } from "preact";
import { useState, useReducer, useMemo, useCallback, useRef, useContext, useEffect, useLayoutEffect, useErrorBoundary } from 'preact/hooks';
import { Router } from "preact-router";
import Match from 'preact-router/match';
import { Link } from 'preact-router/match';
import AsyncRoute from 'preact-async-route';
import Helmet from "preact-helmet";
import * as timeago from "timeago.js";

const Home = () => {
    const [isActive, setisActive] = useState({ isMobile: false, isDarkmode: false });
    // Similar to componentDidMount and componentDidUpdate:
    useLayoutEffect(() => {
        if (
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/Windows Phone/i)
        ) {

            setisActive({ isMobile: true })
        }
    });

    
        

    
    const renderContent = () => {

        if (isActive.isMobile) {
            return 'yes james is mobile';
        } else  {
            return 'yes is not mobile'

        }
    }

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
            <h2>time ago {timeago.format(1567953513078)}</h2>
            <p>This is the Home component.</p>
            <h1>{renderContent()}</h1>
        </Fragment>
    )
}

export default Home;