import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Button extends Component {
  render() {
    const { Title,onPress} = this.props;

    return (
      <TouchableOpacity onPress={onPress} style={styles.Container}>
        <Text style={styles.Title}>{Title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    width: '90%',
    aspectRatio:5,
    backgroundColor: '#C345FF',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#AD00FF',
    elevation: 1,
  },
  Title: {
    fontSize: 20,
    fontFamily: 'Asap-SemiBold',
    color: 'white',
  },
});
