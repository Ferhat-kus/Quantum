import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class AnalysisBubble extends Component {
    render() {
        const { Title } = this.props;
        return (
            <View style={styles.Contaiener}>
                <Text style={styles.Title}>{Title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Contaiener: {
        width: '35%',
        aspectRatio:1,
        borderRadius: 100,
        backgroundColor: '#6938b7',
        borderWidth: 1,
        borderColor: 'white',
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Title: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Asap-SemiBold',
        textAlign: 'center',
    },
})