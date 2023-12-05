import { Text, StyleSheet} from 'react-native'
import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        const {Title} = this.props;
        return (
                <Text style={styles.title}>{Title}</Text>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 27,
        color: '#FFF',
        fontFamily: 'Asap-Bold',
    },
})