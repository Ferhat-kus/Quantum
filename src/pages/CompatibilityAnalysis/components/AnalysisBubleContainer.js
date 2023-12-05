import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
//COMPONENTS
import AnalysisBubble from './AnalysisBubble'
export default class AnalysisBubleContainer extends Component {
    render() {
        return (
            <View style={styles.analysisBubbleContainer}>
                <AnalysisBubble />
                <Text style={styles.analysisBubbleText}>Uyum{'\n'}Analizi</Text>
                <AnalysisBubble />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    analysisBubbleContainer: {
        width: '100%',
        flexDirection: 'row',
        padding: 22,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    analysisBubbleText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Asap-SemiBold',
        textAlign: 'center',
    },
})