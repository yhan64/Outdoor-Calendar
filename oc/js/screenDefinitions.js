import HomeScreen from 'oc/js/screens/HomeScreen'
import * as screenNames from 'oc/js/constants/screenNames'

export default [{
  screenID: screenNames.HOME,
  generator: () => HomeScreen
}]