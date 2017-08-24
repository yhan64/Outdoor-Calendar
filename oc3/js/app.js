import React from 'react';
import { View, Text } from 'react-native'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import apiReducer from './reducers/apiReducer';

import Example from './example';

const store = createStore(apiReducer);

export default () => {
    return (
        <Provider store={store}>
            <Example />
        </Provider>
    )
}