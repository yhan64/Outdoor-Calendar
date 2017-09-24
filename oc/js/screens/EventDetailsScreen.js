import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native'
import { Navigation } from 'react-native-navigation'
import { modalNavStyle } from 'oc/js/constants/styles'

class EventDetailsScreen extends React.Component {
  static navigatorStyle = modalNavStyle
  
  render () {
    return(
      <View style={styles.container}>
          <Text> This is a Event Details Modal</Text>
      </View>
    ) 
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
})

export default EventDetailsScreen 