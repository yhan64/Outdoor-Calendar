import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, View, Modal } from 'react-native';

import { fetchAllEvents, eventsFetchedAction } from '../actions/apiActions';
const apiActions = {
  fetchAllEvents
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

const mapStateToProps = state => {
  return {
    state: {
      eventsFetched: state.eventsFetched
    }
  }
}

class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Modal style={{flex: 1}}>
          <Text> Welcome to OC!! I'm fetching data for you :)</Text>
        </Modal>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);