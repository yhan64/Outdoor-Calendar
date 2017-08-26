import React from 'react';
import { View, Text, AppRegistry } from 'react-native'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import apiReducer from './reducers/apiReducer';

import NavigationWrapper from './NavigationWrapper';

const store = createStore(apiReducer);

export default () => {
    return (
        <Provider store={store}>
            <NavigationWrapper />
        </Provider>
    )
}