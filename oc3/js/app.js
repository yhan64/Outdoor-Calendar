import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux';

import apiReducer from './reducers/apiReducer';

import NavigationWrapper from './NavigationWrapper';

const loggerMiddleware = createLogger()
const store = createStore(
    apiReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

export default () => {
    return (
        <Provider store={store}>
            <NavigationWrapper />
        </Provider>
    )
}