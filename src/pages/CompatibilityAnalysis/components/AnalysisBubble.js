import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class AnalysisBubble extends Component {
    render() {
        return (
            <View style={styles.Contaiener}>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Contaiener: {
        width: '35%',
        aspectRatio:1,
        borderRadius: 100,
        backgroundColor: '#6034b0',
        borderWidth: 1,
        borderColor: 'white',
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
})