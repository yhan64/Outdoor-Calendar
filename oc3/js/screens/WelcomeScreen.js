import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

import { fetchAllEvents, eventsFetchedAction, testActionCreator } from '../actions/apiActions';

import * as actionCreator from '../actions/apiActions';

const foo = dispatch => {
  return () => dispatch(eventsFetchedAction('events'))
}
const foo2 = dispatch => {
  return {
    eventsFetchedAction,
    fetchAllEvents: fetchAllEvents()
  }
}
class WelcomeScreen extends React.Component {
  componentWillMount() {
    console.log(actionCreator)
    console.log(this.props)
    // this.props.fetchAllEvents();
    this.props.eventsFetchedAction();
    // this.props.dispatch(eventsFetchedAction());
    this.props.fetchAllEvents();
  }

  render() {
    return (
      <Text> Fetching data....</Text>
    )
  }
}

export default connect(null, testActionCreator)(WelcomeScreen);