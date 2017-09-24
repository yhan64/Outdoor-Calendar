import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Navigation } from 'react-native-navigation'
import { modalNavStyle } from 'oc/js/constants/styles'
import { dismissModal } from 'oc/js/actions/appActions'
const appActions = { dismissModal }

function mapStateToProps (state) {
  return {
    selectedEventDetails: state.app.selectedEventDetails
  }
}
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch)
  }
}
class EventDetailsScreen extends React.Component {
  static navigatorStyle = modalNavStyle
  
  render () {
    const { date, description, title } = this.props.selectedEventDetails
    const { descriptionList } = description
    return(
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.actions.dismissModal} style={styles.crossContainer}>
          <Text>X</Text>
        </TouchableHighlight>
          <Text> {title} on {date}</Text>
          {
            descriptionList.map((des, i) => {
              return (
                <Text key={i}>{des}</Text>
              )
            })
          }
      </View>
    ) 
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'gray'
  },
  crossContainer: {
    alignItems: 'flex-end'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailsScreen)