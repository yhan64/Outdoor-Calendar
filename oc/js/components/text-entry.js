// @flow
import React from 'react'
import {
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import { Colors } from 'oc/js/constants/shared-styles'

export default function(props: TextEntryPropsType) {
  return (
    <TouchableHighlight
      style={styles.item} 
      onPress={props.onPress}
      activeOpacity={0.8}
      underlayColor={Colors.agendaDayNumber}
    >
      <Text>{props.bodyText}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
})