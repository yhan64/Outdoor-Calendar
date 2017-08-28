
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import WelcomeScreen from './screens/WelcomeScreen';

import { fetchAllEvents } from './actions/apiActions.js';

// fetchAllEvents();

export default StackNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen }
});
