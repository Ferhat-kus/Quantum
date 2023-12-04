import {StyleSheet, View, StatusBar } from 'react-native'
import React, { Component } from 'react'
import Navigation from './src/router/Index'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, }}>
        <StatusBar hidden />
        <Navigation />
      </View>
    )
  }
}

const styles = StyleSheet.create({})