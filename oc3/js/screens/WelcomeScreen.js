import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, Modal } from 'react-native';

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
      eventsFetched: state.eventsFetched,
      showWelcomeModal: state.showWelcomeModal
    }
  }
}

class WelcomeScreen extends React.Component {
  componentWillMount() {
    this.props.actions.fetchAllEvents();
  }

  componentWillReceiveProps(nextProps) {
    nextProps.state.eventsFetched && this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.props.state.showWelcomeModal}
      >
        <Text> Welcome to OC!! I'm fetching data for you :)</Text>
      </Modal>
      
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);