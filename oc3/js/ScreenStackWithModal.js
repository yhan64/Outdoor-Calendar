
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const ScreenStack = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  ChatScreen: { screen: ChatScreen }
});

// const showModal = (modalName) => {
//   switch(modalName) {
//     case: ''
//   }
// }

const ScreenStackWithModal = (props) => {
  return (
    <ScreenStack />
  )
}


export default ScreenStackWithModal;
