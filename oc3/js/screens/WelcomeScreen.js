import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text } from 'react-native';

import { fetchAllEvents, eventsFetchedAction } from '../actions/apiActions';
const apiActions = {
  fetchAllEvents
}

const mapDispatchToProps = dispatch => bindActionCreators(apiActions, dispatch);

class WelcomeScreen extends React.Component {
  componentWillMount() {
    this.props.fetchAllEvents();
  }

  render() {
    return (
      <Text> Fetching data....</Text>
    )
  }
}

export default connect(null, apiActions)(WelcomeScreen);