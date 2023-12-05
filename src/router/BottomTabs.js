import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Sayfalar
import SelfPage from '../pages/SelfPage/Index';
import SelfConcordance from '../pages/SelfConcordance/Index';
import CompatibilityAnalysis from '../pages/CompatibilityAnalysis/Index';
import PaymentPlan from '../pages/PaymentPlan/Index';

const Tab = createBottomTabNavigator();

export default class BottomTabs extends Component {
    render() {
        const screenOptions = {
            tabBarShowLabel: true, 
            headerShown: false,
            tabBarActiveBackgroundColor: '#71129D',
            tabBarActiveTintColor: 'white',
            tabBarLabelStyle: {
                fontSize: 12,
                fontFamily: 'Asap-Regular',
            },
            tabBarStyle: {
                height: 60,
                backgroundColor: '#000235',
            },
        };

        return (
            <NavigationContainer>
                <Tab.Navigator screenOptions={screenOptions} initialRouteName="SelfPage">
                    <Tab.Screen
                        name='SelfPage'
                        component={SelfPage}
                        options={{
                            tabBarLabel: 'MENU',
                            tabBarIcon: () => (
                                <View style={styles.BottomTabs}>
                                    <Image  source={require('../assets/BottomTabsIcon/home.png')} />
                                </View>
                            ),
                        }}
                    />
                    <Tab.Screen
                        name='SelfConcordance'
                        component={SelfConcordance}
                        options={{
                            tabBarLabel: 'UYUM',
                            tabBarIcon: () => (
                                <Image source={require('../assets/BottomTabsIcon/chartcircle.png')} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name='CompatibilityAnalysis'
                        component={CompatibilityAnalysis}
                        options={{
                            tabBarLabel: 'ANALİZ',
                            tabBarIcon: () => (
                                <Image source={require('../assets/BottomTabsIcon/colorfilter.png')} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name='PaymentPlan'
                        component={PaymentPlan}
                        options={{
                            tabBarLabel: 'PLAN',
                            tabBarIcon: () => (
                                <Image source={require('../assets/BottomTabsIcon/slidervertical1.png')} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name='PaymentPlann'
                        component={PaymentPlan}
                        options={{
                            tabBarLabel: 'PROFILE',
                            tabBarIcon: () => (
                                <Image source={require('../assets/BottomTabsIcon/profilecircle.png')} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    BottomTabs: {
        width: 70,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
