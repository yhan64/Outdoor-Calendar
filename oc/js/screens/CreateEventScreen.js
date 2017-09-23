import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  StyleSheet,
  TextInput
} from 'react-native'
import EventTypePicker from 'oc/js/components/EventTypePicker'

class CreateEventScreen extends Component {
  static navigationOptions = {
    title: 'Creat an event',
  };

  render() {
    const { params } = this.props.navigation.state;
    console.log(params)
    return (
      <View style={styles.container}>
        <Text>CreateEventScreen on {params.date.dateString} </Text>
        <EventTypePicker />
      </View>
    )
  }
}

const colors = {
  background: '#f4f4f4'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
})

export default CreateEventScreen