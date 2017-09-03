import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux';

import api from './reducers/apiReducer';
import app from './reducers/appReducer';

import ScreenStackWithModal from './ScreenStackWithModal';

const loggerMiddleware = createLogger()
const reduers = combineReducers({api, app});
const store = createStore(
    reduers,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

export default () => {
    return (
        <Provider store={store}>
            <ScreenStackWithModal />
        </Provider>
    )
}