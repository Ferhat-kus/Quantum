import { Text, StyleSheet, View, StatusBar } from 'react-native'
import React, { Component } from 'react'
import SelfPage from './src/pages/SelfPage/Index';
import SelfConcordance from './src/pages/SelfConcordance/Index';
import CompatibilityAnalysis from './src/pages/CompatibilityAnalysis/Index'
import PaymentPlan from './src/pages/PaymentPlan/Index'
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