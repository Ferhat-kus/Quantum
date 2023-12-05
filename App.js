import { StyleSheet, View, StatusBar } from 'react-native'
import React, { Component } from 'react'
import BottomTabs from './src/router/BottomTabs';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, }}>
        <StatusBar hidden />
        <BottomTabs />
      </View>
    )
  }
}

const styles = StyleSheet.create({})