
/** @jsx h */

import { h, Component, Fragment, cloneElement, render } from "preact";
import { useState, useReducer, useMemo, useCallback, useRef, useContext, useEffect, useLayoutEffect, useErrorBoundary } from 'preact/hooks';
import { Router } from "preact-router";
import Match from 'preact-router/match';
import { Link } from 'preact-router/match';
import AsyncRoute from 'preact-async-route';
import Helmet from "preact-helmet";
import * as timeago from "timeago.js";

class CoverVid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
            videoSrc: "http://techslides.com/demos/sample-videos/small.mp4",
            imgSrc: require("../../img/cropped_landing_page.png").src

        };
    }

    //const [isMobile, setisMobile] = useState(false);

    componentDidMount() {
        if (
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/Windows Phone/i)
        ) {
            this.setState({ isMobile: true });
            //setisMobile(true)
        }
    }

    renderContent() {
        if (this.state.isMobile) {
            return <img src={this.state.imgSrc} alt="#" />;
        } else {
            return (
                <video
                    src={this.state.videoSrc}
                    autoplay
                    loop
                    playsinline
                    muted
                    poster={this.state.imgSrc}
                />
            );
        }
    }

    render() {
        return <div class="covervid">{this.renderContent()}</div>;
    }
}

export default CoverVid;