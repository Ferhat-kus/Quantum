import { Text, StyleSheet, View,TouchableOpacity,Image } from 'react-native'
import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    const {Title,navigation} = this.props;
    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.Goback}>
        <Image source={require('../../assets/Goback.png')} />
        <Text style={styles.GobackText}>{Title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    Goback: {
        width: '75%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      GobackText: {
        marginLeft: 10,
        fontSize: 30,
        fontFamily: 'Asap-Bold',
        color: 'white',
      },
})