import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Title extends Component {
  render() {
    const { Title} = this.props;
    return (
      <View style={styles.Container}>
        <Text style={styles.Title}>{Title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    Container:{
    },
    Title:{
        color: 'white',
        fontSize: 20,
        fontFamily: 'Asap-Regular',
    },
})