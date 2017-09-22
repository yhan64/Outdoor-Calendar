import React from 'react'
import { Picker } from 'react-native'

export default function(props) {
  return (
    <Picker>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  )
}