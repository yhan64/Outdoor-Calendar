import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
// reducers
import api from 'oc/js/reducers/apiReducer';
import app from 'oc/js/reducers/appReducer';

// others
import registry from './registry'
import * as screenNames from 'oc/js/constants/screenNames'

const loggerMiddleware = createLogger()
const reducers = combineReducers({api, app});
const store = createStore(
  reducers,
  applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
  )
);

registry(store, Provider)

Navigation.startSingleScreenApp({
  screen: {
      screen: screenNames.HOME,
      title: 'Welcome to OC',
  },
  appStyle: {
      navBarBackgroundColor: '#00adf5',
      navBarTextColor: 'white',
      navBarButtonColor: '#ffffff',
      statusBarTextColorScheme: 'light'
  }
});