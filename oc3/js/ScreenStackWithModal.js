
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation'
import { View } from 'react-native'
import HomeScreen from 'oc3/js/screens/HomeScreen'
import CreateEventScreen from 'oc3/js/screens/CreateEventScreen'
import WelcomeScreen from 'oc3/js/screens/WelcomeScreen'
import * as ModalNames from 'oc3/js/constants/ModalNames'
import { fetchAllEvents } from 'oc3/js/actions/apiActions'
const apiActions = {
  fetchAllEvents
}

const mapStateToProps = (state) => {
  return {
    modalInfo: state.app.modalInfo
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
    console.log(this.props)
    return (
      <View style={{flex: 1}}>
        <ScreenStack />
        { this.props.modalInfo && this.props.modalInfo.showModal && showModal(this.props.modalInfo)}
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenStackWithModal);
