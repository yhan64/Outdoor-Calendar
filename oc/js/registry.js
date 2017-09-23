import screenDefinitions from './screenDefinitions'
import { Navigation } from 'react-native-navigation'

export default function (store, Provider) {
  console.log(screenDefinitions)
  screenDefinitions.forEach((screenDefinition) => {
    Navigation.registerComponent(screenDefinition.screenID, screenDefinition.generator, store, Provider)
  })
}