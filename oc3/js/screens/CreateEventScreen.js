import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

class CreateEventScreen extends Component {
  static navigationOptions = {
    title: 'Creat an event',
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>CreateEventScreen on </Text>
      </View>
    )
  }
}

export default CreateEventScreen