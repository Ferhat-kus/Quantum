import { View } from 'react-native'
import React, { Component } from 'react'

export default class line extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', }}>
        <View style={{ width: '90%', height: 1, backgroundColor: 'white', }} />
      </View>
    )
  }
}

