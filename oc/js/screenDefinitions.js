import * as screenNames from 'oc/js/constants/screenNames'
import HomeScreen from 'oc/js/screens/HomeScreen'
import EventDetailsScreen from 'oc/js/screens/EventDetailsScreen'

export default [{
  screenID: screenNames.HOME,
  generator: () => HomeScreen
},{
  screenID: screenNames.EVENT_DETAILS,
  generator: () => EventDetailsScreen
}]