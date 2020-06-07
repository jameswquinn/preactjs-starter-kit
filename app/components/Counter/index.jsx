import { h, Component, Fragment, cloneElement, render } from "preact";
import { Connect } from 'redux-zero/preact';
import actions from '../../actions/actions'

const mapToProps = ({ count }) => ({ count });

export default () => (
    <Connect mapToProps={mapToProps} actions={actions}>
        {({ count, increment, decrement }) => (
            <div>
                <h1>{count}</h1>
                <div>
                    <button onClick={decrement}>decrement</button>
                    <button onClick={increment}>increment</button>
                </div>
            </div>
        )}
    </Connect>
);