
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation'
import { View } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import CreateEventScreen from './screens/CreateEventScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import * as ModalNames from './constants/ModalNames'
import { fetchAllEvents } from './actions/apiActions'
const apiActions = {
  fetchAllEvents
}

const mapStateToProps = (state) => {
  return {
    modalInfo: state.app.modalInfo,
    showModal: state.app.showModal
  }
}
// using bindActoinCreator is equivalent to following no bindActionCreator version
// const foo2 = dispatch => {
//   return {
//     actions: {
//       fae: () => dispatch(fetchAllEvents())
//     }
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(apiActions, dispatch)
  }
}

const ScreenStack = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  CreateEventScreen: { screen: CreateEventScreen }
});

const showModal = (modalInfo) => {
  switch(modalInfo.modalName) {
    case ModalNames.WELCOME_MODAL:
    return (
      <WelcomeScreen />
    )
    default:
      return null
  }
}

class ScreenStackWithModal extends React.Component {
  componentDidMount() {
    this.props.actions.fetchAllEvents();
  }
  render () {
    return (
      <View style={{flex: 1}}>
        <ScreenStack />
        { this.props.showModal && this.props.modalInfo && showModal(this.props.modalInfo)}
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenStackWithModal);
