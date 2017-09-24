import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native'
import { connect } from 'react-redux'
import { Navigation } from 'react-native-navigation'
import { modalNavStyle } from 'oc/js/constants/styles'

function mapStateToProps (state) {
  return {
    selectedEventDetails: state.app.selectedEventDetails
  }
}
class EventDetailsScreen extends React.Component {
  static navigatorStyle = modalNavStyle
  
  render () {
    return(
      <View style={styles.container}>
          <Text> This is a Event Details Modal on {this.props.selectedEventDetails.date}</Text>
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

export default connect(mapStateToProps)(EventDetailsScreen)