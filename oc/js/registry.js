import screenDefinitions from './screen-definitions'
import { Navigation } from 'react-native-navigation'

export default function (store, Provider) {
  screenDefinitions.forEach((screenDefinition) => {
    Navigation.registerComponent(screenDefinition.screenID, screenDefinition.generator, store, Provider)
  })
}