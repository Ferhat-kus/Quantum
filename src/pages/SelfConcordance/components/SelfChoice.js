import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Dropdown from './Dropdown'
import Title from './DropdownTitle'

export default class SelfChoice extends Component {
  render() {
    const { title} = this.props;
    return (
        <View style={{ marginVertical: 20, }}>
        <Title Title={title}/>
        <Dropdown />
      </View>
    )
  }
}

const styles = StyleSheet.create({})