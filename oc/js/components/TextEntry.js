import React from 'react'
import {
  Text,
  TouchableHighlight
} from 'react-native'



export default function(props) {
  return (
    <TouchableHighlight
      style={[styles.item, {height: item.height}]} 
      onPress={ () => this.props.actions.showEventDetailsOn(item.date) }
    >
      <Text>{item.title}</Text>
    </TouchableHighlight>
  )
}