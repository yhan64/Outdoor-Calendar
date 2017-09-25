import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Navigation } from 'react-native-navigation'
import { ModalNavStyle, Colors } from 'oc/js/constants/sharedStyles'
import { dismissModal } from 'oc/js/actions/appActions'
const appActions = { dismissModal }
import TextEntry from 'oc/js/components/TextEntry'

class EventDetailsScreen extends React.Component {
  static navigatorStyle = ModalNavStyle
  
  render () {
    const { date, description, title } = this.props.selectedEventDetails
    const { descriptionList } = description
    return(
      <ScrollView style={styles.container}>
        <TouchableHighlight onPress={this.props.actions.dismissModal} style={styles.crossContainer}>
          <Text>X</Text>
        </TouchableHighlight>
          <Text> {title} on {date}</Text>
          {
            descriptionList.map((des, i) => {
              return (
                <TextEntry key={i} bodyText={des}/>
              )
            })
          }
      </ScrollView>
    ) 
  }
}


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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.background,
    padding: 10
  },
  crossContainer: {
    alignItems: 'flex-end'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailsScreen)