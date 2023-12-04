import { StyleSheet, StatusBar } from 'react-native'
import React, { Component } from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SelfPage from '../pages/SelfPage/Index';
import SelfConcordance from '../pages/SelfConcordance/Index';
import CompatibilityAnalysis from '../pages/CompatibilityAnalysis/Index'
import PaymentPlan from '../pages/PaymentPlan/Index';

export default class Index extends Component {
  render() {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <StatusBar hidden />
        <Stack.Navigator initialRouteName='SelfPage'>
          <Stack.Screen
            name="SelfPage"
            options={{ headerShown: false }}
            component={SelfPage}
          />
          <Stack.Screen
            name="SelfConcordance"
            options={{ headerShown: false }}
            component={SelfConcordance}
          />
          <Stack.Screen
            name="CompatibilityAnalysis"
            options={{ headerShown: false }}
            component={CompatibilityAnalysis}
          />
          <Stack.Screen
            name="PaymentPlan"
            options={{ headerShown: false }}
            component={PaymentPlan}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})