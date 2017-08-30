import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux';

import apiReducer from './reducers/apiReducer';
import appReducer from './reducers/appReducer';

import ScreenStackWithModal from './ScreenStackWithModal';

const loggerMiddleware = createLogger()
const reduers = combineReducers({apiReducer, appReducer});
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