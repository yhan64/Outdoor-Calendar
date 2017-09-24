// @flow
import React from 'react'
import {
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native'

export default function(props: TextEntryPropsType) {
  return (
    <TouchableHighlight
      style={styles.item} 
      onPress={props.onPress}
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