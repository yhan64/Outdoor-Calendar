import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
// reducers
import api from 'oc3/js/reducers/apiReducer';
import app from 'oc3/js/reducers/appReducer';
// screens
import HomeScreen from 'oc3/js/screens/HomeScreen';
// register each screen with store

const loggerMiddleware = createLogger()
const reduers = combineReducers({api, app});
const store = createStore(
  reduers,
  applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
  )
);

const wrappedHomeScreen = () => {
  return (
    <Provider store={store}><HomeScreen /></Provider>
  )
}

Navigation.registerComponent('HomeScreen',
    () => wrappedHomeScreen)

Navigation.startSingleScreenApp({
  screen: {
      screen: 'HomeScreen',
      title: 'Welcome to OC',
  },
  appStyle: {
      navBarBackgroundColor: '#00adf5',
      navBarTextColor: 'white',
      navBarButtonColor: '#ffffff',
      statusBarTextColorScheme: 'light'
  }
});