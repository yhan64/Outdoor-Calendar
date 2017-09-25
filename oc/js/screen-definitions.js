import * as screenNames from 'oc/js/constants/screen-names'
import HomeScreen from 'oc/js/screens/home-screen'
import EventDetailsScreen from 'oc/js/screens/event-details-screen'

export default [{
  screenID: screenNames.HOME,
  generator: () => HomeScreen
},{
  screenID: screenNames.EVENT_DETAILS,
  generator: () => EventDetailsScreen
}]