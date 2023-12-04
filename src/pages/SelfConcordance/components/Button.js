import React, { Component } from 'react';
import { Text, StyleSheet,TouchableOpacity } from 'react-native';

export default class Button extends Component {
    render() {
        const { Title,onPress } = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <Text style={styles.title}>{Title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: '#71129D',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: '#AD00FF',
    },
    title: {
        fontSize: 20,
        fontFamily: 'Asap-SemiBold',
        color: 'white',
    },
});
