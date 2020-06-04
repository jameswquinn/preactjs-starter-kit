/** @jsx h */

import { h, Component, Fragment, cloneElement, render } from "preact";
import { useState, useReducer, useMemo, useCallback, useRef, useContext, useEffect, useLayoutEffect, useErrorBoundary } from 'preact/hooks';
import { Router } from "preact-router";
import Match from 'preact-router/match';
import { Link } from 'preact-router/match';
import AsyncRoute from 'preact-async-route';
import Helmet from "preact-helmet";
import * as timeago from "timeago.js";

const Nav = () => {
    return (
        <Fragment>
            {/* A JSX comment */}
            <svg
                aria-hidden="true"
                style="position: absolute; width: 0; height: 0; overflow: hidden;"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <defs>
                    <symbol id="icon-home" viewBox="0 0 113 134" ><path d="M96.538,101.588l-19.984,-0.001l-19.975,-16.837l-19.975,16.838l-19.975,0c-2.854,0 -5.708,-1.121 -7.421,-2.809c-2.279,-2.241 -2.854,-4.491 -2.854,-7.296l0,-44.337c0,-2.804 1.142,-5.613 2.854,-7.296l0.575,-0.562l47.367,-39.288l47.942,39.288c1.712,1.683 2.854,4.491 2.854,7.295l0,44.338c0,2.808 -1.142,5.612 -2.854,7.296c-2.855,2.241 -5.709,3.371 -8.563,3.371l0.008,0Zm-15.416,-11.784l14.266,0l0,-42.091l-38.804,-31.992l-38.804,31.992l0,42.091l13.696,0l24.542,-20.2l25.104,20.2Z" style="fill-rule:nonzero;" /><text x="19.838px" y="126.418px" style="font-family:'HelveticaNeue-Medium', 'Helvetica Neue', sans-serif;font-weight:500;font-size:24.167px;">HOME</text></symbol>
                    <symbol id="icon-about" viewBox="0 0 113 134"><path d="M57.142,13.55c-5.45,0 -10.713,0.917 -15.646,2.725c-4.634,1.7 -8.763,4.104 -12.263,7.142c-6.566,5.695 -10.187,13.02 -10.187,20.625c0,4.266 1.112,8.404 3.3,12.296c2.258,4.012 5.654,7.683 9.821,10.612c3.012,2.117 5.037,5.5 5.57,9.308c0.18,1.271 0.288,2.55 0.334,3.825c0.741,-0.658 1.462,-1.358 2.171,-2.112c2.395,-2.559 5.633,-3.971 8.979,-3.971c0.533,0 1.066,0.037 1.604,0.108c2.079,0.279 4.208,0.425 6.317,0.425c5.45,0 10.712,-0.916 15.645,-2.725c4.634,-1.7 8.763,-4.104 12.263,-7.141c6.567,-5.696 10.188,-13.021 10.188,-20.625c0,-7.605 -3.621,-14.93 -10.188,-20.625c-3.504,-3.038 -7.633,-5.442 -12.263,-7.142c-4.929,-1.808 -10.191,-2.725 -15.645,-2.725l0.004,-0.004l-0.004,0.004Zm0,-13.55c28.054,0 50.791,19.717 50.791,44.042c0,24.325 -22.741,44.041 -50.791,44.041c-2.696,0 -5.342,-0.183 -7.921,-0.533c-10.913,11.642 -23.934,13.729 -36.525,14.037l0,-2.85c6.8,-3.554 12.7,-10.033 12.7,-17.429c0,-1.033 -0.075,-2.046 -0.217,-3.037c-11.487,-8.075 -18.833,-20.409 -18.833,-34.229c0,-24.325 22.741,-44.042 50.791,-44.042l0.005,0Z" style="fill-rule:nonzero;" /><text x="14.78px" y="126.022px" style="font-family:'HelveticaNeue-Medium', 'Helvetica Neue', sans-serif;font-weight:500;font-size:24.167px;">ABOUT</text></symbol>
                    <symbol id="icon-contact" viewBox="0 0 113 134" ><path d="M84.517,44.542c0,1.9 1.541,3.441 3.441,3.441c1.9,0 3.442,-1.541 3.442,-3.441c0,-14.425 -11.737,-26.167 -26.162,-26.167c-1.9,0 -3.442,1.542 -3.442,3.442c0,1.9 1.541,3.441 3.442,3.441c10.629,0 19.279,8.65 19.279,19.284Z" style="fill-rule:nonzero;" /><path d="M65.238,0c-1.9,0 -3.442,1.542 -3.442,3.442c0,1.9 1.541,3.441 3.442,3.441c20.762,0 37.658,16.896 37.658,37.659c0,1.9 1.542,3.441 3.442,3.441c1.9,0 3.441,-1.541 3.441,-3.441c0,-24.563 -19.979,-44.542 -44.537,-44.542l-0.004,0Z" style="fill-rule:nonzero;" /><path d="M32.929,14.875c-0.65,-0.65 -1.525,-1.008 -2.433,-1.008c-0.154,0 -0.313,0.008 -0.463,0.033c-1.066,0.146 -2.004,0.779 -2.529,1.717c-10.758,19.046 -7.458,43.162 8.021,58.646c9.237,9.241 21.521,14.329 34.587,14.329l0.005,0c8.429,0 16.746,-2.18 24.046,-6.309c0.937,-0.529 1.57,-1.462 1.716,-2.529c0.146,-1.067 -0.216,-2.137 -0.975,-2.9l-61.975,-61.979Z" style="fill-rule:nonzero;" /><path d="M71.925,37.8c-3.075,-3.075 -7.433,-4.096 -11.367,-3.075l14.438,14.442c1.021,-3.934 0.004,-8.292 -3.075,-11.367l0.004,0Z" style="fill-rule:nonzero;" /><path d="M28.5,74.746l-10.929,21.862c-0.534,1.067 -0.475,2.334 0.154,3.35c0.629,1.017 1.733,1.634 2.925,1.634l45.479,0c1.9,0 3.442,-1.542 3.442,-3.442l0,-4.054c-14.333,-0.142 -27.792,-5.783 -37.942,-15.938c-1.1,-1.1 -2.142,-2.237 -3.129,-3.408l0,-0.004Z" style="fill-rule:nonzero;" /><text x="-0.918px" y="126.679px" style="font-family:'HelveticaNeue-Medium', 'Helvetica Neue', sans-serif;font-weight:500;font-size:24.167px;">CONT<tspan x="64.453px 80.572px " y="126.679px 126.679px ">AC</tspan>T</text></symbol>
                    <symbol id="icon-more" viewBox="0 0 113 134"><path d="M26.667,62.858c-5.613,0 -10.159,-4.687 -10.159,-10.475c0,-5.787 4.546,-10.475 10.159,-10.475c5.612,0 10.158,4.688 10.158,10.475c0,5.788 -4.546,10.475 -10.158,10.475Zm30.475,0c-5.613,0 -10.159,-4.687 -10.159,-10.475c0,-5.787 4.546,-10.475 10.159,-10.475c5.612,0 10.158,4.688 10.158,10.475c0,5.788 -4.546,10.475 -10.158,10.475Zm30.479,0c-5.613,0 -10.158,-4.687 -10.158,-10.475c0,-5.787 4.545,-10.475 10.158,-10.475c5.612,0 10.158,4.688 10.158,10.475c0,5.788 -4.546,10.475 -10.158,10.475Z" style="fill-rule:nonzero;" /><text x="19.71px" y="124.935px" style="font-family:'HelveticaNeue-Medium', 'Helvetica Neue', sans-serif;font-weight:500;font-size:24.167px;">MORE</text></symbol>
                </defs>
            </svg>

            <nav className="navigation" role="navigation">
                <Link activeClassName="active" href="/" aria-label="link home">
                    <svg>
                        <use xlinkHref="#icon-home" />
                    </svg>
                </Link>
                <Link activeClassName="active" href="/about" aria-label="link about">
                    <svg>
                        <use xlinkHref="#icon-about" />
                    </svg>
                </Link>
                <Link activeClassName="active" href="/contact" aria-label="link contact">
                    <svg>
                        <use xlinkHref="#icon-contact" />
                    </svg>
                </Link>
                <Link activeClassName="active" href="/more" aria-label="link more">
                    <svg>
                        <use xlinkHref="#icon-more" />
                    </svg>
                </Link>
            </nav>
        </Fragment>
    )
}

export default Nav;