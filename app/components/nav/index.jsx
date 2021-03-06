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
            <style>
                {':root {--primary-navigation_bg-color: #fff;}'}
                {'.primary_navigation svg {display: block;width: 2.5rem;height: 2.5rem;background-color: transparent;fill: inherit;}'}
                {'.primary_navigation {z-index: var(--primary_navigation-height__z-index);display: flex;justify-content: space-evenly;align-items: center;width: 100vw;height: var(--navigation-height);background-color:var(--primary-navigation_bg-color);position: fixed;bottom: 0;will-change: transform;transition: transform calc(var(--animation-duration) * 2);}'}
                {'a {fill-opacity: 0;fill: currentColor;color: #262626;text-decoration: none;text-transform: uppercase;}'}
                {'a.active {fill-opacity: 1;}'}
            </style>
            {/* COMMENT BLOCK */}

            <svg
                aria-hidden="true"
                style="position: absolute; width: 0; height: 0; overflow: hidden;"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <defs>
                    <symbol id="icon-home" viewBox="0 0 32 32">
                        <path style="fill-rule:nonzero;"
                            d="M30.090 31.884h-10.163c-0.531 0-0.997-0.465-0.997-0.997v-8.17c0-1.727-1.328-3.056-3.056-3.056s-3.055 1.328-3.055 3.056v8.17c0 0.531-0.465 0.997-0.997 0.997h-10.163c-0.531 0-0.996-0.465-0.996-0.997v-15.61c0-0.266 0.133-0.531 0.266-0.731l14.281-14.281c0.398-0.399 0.996-0.399 1.395 0l14.281 14.281c0.266 0.266 0.399 0.731 0.199 1.063 0 0.066-0.066 0.066-0.066 0.133v15.145c0.066 0.531-0.399 0.997-0.93 0.997z">
                        </path>
                        <path style="fill-opacity: 1;fill-rule:nonzero;"
                            d="M30.090 31.917h-10.163c-0.531 0-0.997-0.465-0.997-0.996v-8.17c0-1.727-1.328-3.056-3.056-3.056s-3.055 1.329-3.055 3.056v8.17c0 0.531-0.465 0.996-0.997 0.996h-10.163c-0.531 0-0.996-0.465-0.996-0.996v-15.61c0-0.266 0.133-0.531 0.266-0.731l14.281-14.281c0.398-0.398 0.996-0.398 1.395 0l14.281 14.281c0.266 0.266 0.399 0.731 0.199 1.063 0 0.066-0.066 0.066-0.066 0.133v15.145c0.066 0.531-0.399 0.996-0.93 0.996zM20.924 29.925h8.17v-14.348l-13.152-13.152-13.285 13.285v14.215h8.17v-7.174c0-2.856 2.192-5.048 5.048-5.048s5.048 2.192 5.048 5.048v7.174z">
                        </path>
                    </symbol>
                    <symbol id="icon-about" viewBox="0 0 32 32">
                        <path style="fill-rule:nonzero;"
                            d="M31.667 30.733l-1.867-7.333c1.2-2.2 1.867-4.733 1.867-7.4 0-8.667-7-15.667-15.667-15.667s-15.667 7-15.667 15.667c0 8.667 7 15.667 15.667 15.667 2.667 0 5.2-0.667 7.4-1.867l7.333 1.867c0.533 0.133 1.067-0.4 0.933-0.933z">
                        </path>
                        <path style="fill-opacity: 1;fill-rule:nonzero;"
                            d="M31.667 30.733l-1.867-7.333c1.2-2.2 1.867-4.733 1.867-7.4 0-8.667-7-15.667-15.667-15.667s-15.667 7-15.667 15.667c0 8.667 7 15.667 15.667 15.667 2.667 0 5.2-0.667 7.4-1.867l7.333 1.867c0.533 0.133 1.067-0.4 0.933-0.933zM29.667 16c0 2.667-0.667 4.667-1.733 6.667-0.133 0.267-0.2 0.6-0.133 0.933l1.4 5.6-5.533-1.4c-0.333-0.067-0.667-0.067-0.933 0.133-1.2 0.667-3.467 1.733-6.667 1.733-7.6 0-13.733-6.133-13.733-13.667s6.133-13.667 13.667-13.667c7.533 0 13.667 6.133 13.667 13.667z">
                        </path>
                    </symbol>
                    <symbol id="icon-contact" viewBox="0 0 32 32">
                        <path style="fill-rule:nonzero;"
                            d="M31.841 2.531c-0.2-0.333-0.533-0.533-0.866-0.533h-29.976c-0.4 0.066-0.799 0.333-0.933 0.666s-0.067 0.799 0.2 1.133l10.592 10.392 3.664 15.055c0.067 0.4 0.4 0.666 0.799 0.733h0.133c0.333 0 0.666-0.2 0.866-0.466l15.454-25.979c0.266-0.267 0.266-0.666 0.066-0.999z">
                        </path>
                        <path style="fill-opacity: 1;fill-rule:nonzero;"
                            d="M31.841 2.531c-0.2-0.333-0.533-0.533-0.866-0.533h-29.976c-0.4 0.066-0.799 0.333-0.933 0.666s-0.067 0.799 0.2 1.133l10.592 10.392 3.664 15.055c0.067 0.4 0.4 0.666 0.799 0.733h0.133c0.333 0 0.666-0.2 0.866-0.466l15.454-25.979c0.266-0.267 0.266-0.666 0.066-0.999zM3.464 4.063h23.648l-15.121 8.393-8.527-8.393zM15.921 26.445l-2.931-12.257 15.254-8.46-12.323 20.717z">
                        </path>
                        <path style="fill:var(--primary-navigation_bg-color);fill-rule:nonzero;"
                            d="M11.441 16.53l-2.137-3.847c0 0 0.672 0.366 1.038 0.183l10.136-4.885c0.427-0.183 0.977-0.061 1.221 0.305 0.244 0.428 0.122 0.977-0.305 1.221l-9.526 6.045c-0.305 0.183-0.489 0.611-0.428 0.977z">
                        </path>
                    </symbol>
                    <symbol id="icon-like" viewBox="0 0 32 32">
                        <path style="fill-rule:nonzero;"
                            d="M23.048 2.065c-2.998 0-5.262 1.199-7.061 3.731-1.799-2.465-4.063-3.664-7.061-3.664-4.93-0.067-8.926 4.263-8.926 9.592 0 4.863 3.597 7.994 7.061 10.991 0.4 0.333 0.866 0.733 1.266 1.132l1.532 1.332c2.931 2.598 4.396 3.93 5.063 4.33 0.333 0.2 0.733 0.333 1.066 0.333 0.4 0 0.733-0.133 1.066-0.333 0.666-0.4 1.865-1.466 5.196-4.53l1.332-1.199c0.466-0.4 0.866-0.799 1.332-1.133 3.53-2.931 7.061-5.995 7.061-10.924 0-5.329-3.997-9.659-8.926-9.659z">
                        </path>
                        <path style="fill-opacity: 1;fill-rule:nonzero;"
                            d="M23.048 4.063c3.797 0 6.928 3.464 6.928 7.661 0 4.53-3.93 7.327-7.66 10.658s-5.662 5.129-6.328 5.529c-0.733-0.466-3.131-2.665-6.328-5.529-3.797-3.331-7.66-6.129-7.66-10.658 0-4.197 3.131-7.661 6.928-7.661 2.798 0 4.33 1.332 5.396 2.865 1.266 1.732 1.465 2.598 1.665 2.598s0.4-0.866 1.665-2.598c1.066-1.532 2.598-2.865 5.396-2.865zM23.048 2.065c-2.998 0-5.262 1.199-7.061 3.731-1.799-2.465-4.063-3.664-7.061-3.664-4.93-0.067-8.926 4.263-8.926 9.592 0 4.863 3.597 7.994 7.061 10.991 0.4 0.333 0.866 0.733 1.266 1.132l1.532 1.332c2.931 2.598 4.396 3.93 5.063 4.33 0.333 0.2 0.733 0.333 1.066 0.333 0.4 0 0.733-0.133 1.066-0.333 0.666-0.4 1.865-1.466 5.196-4.53l1.332-1.199c0.466-0.4 0.866-0.799 1.332-1.133 3.53-2.931 7.061-5.995 7.061-10.924 0-5.329-3.997-9.659-8.926-9.659z">
                        </path>
                    </symbol>
                </defs>
            </svg>

            <nav className="primary_navigation" role="navigation">
                <Link activeClassName="active" href="/" aria-label="home" role="menuitem">
                    <svg>
                        <use xlinkHref="#icon-home" />
                    </svg>
                </Link>
                <Link activeClassName="active" href="/about" aria-label="about" role="menuitem">
                    <svg>
                        <use xlinkHref="#icon-about" />
                    </svg>
                </Link>
                <Link activeClassName="active" href="/contact" aria-label="contact" role="menuitem">
                    <svg>
                        <use xlinkHref="#icon-contact" />
                    </svg>
                </Link>
                <Link activeClassName="active" href="/more" aria-label="more" role="menuitem">
                    <svg>
                        <use xlinkHref="#icon-like" />
                    </svg>
                </Link>
            </nav>
        </Fragment>
    )
}

export default Nav;