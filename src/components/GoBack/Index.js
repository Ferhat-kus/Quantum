import {StyleSheet,TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react';

//Components
import Title from '../Title'

export default class Index extends Component {
  render() {
    const { title,isFlat,onPress} = this.props;

    // 1.Tasarım
    if (isFlat) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.Goback}>
        <Image style={{marginRight:10,}} source={require('../../assets/Goback.png')} />
        <Title Title={title}/>
      </TouchableOpacity>
    );
        // 2.Tasarım
  }else if (!isFlat) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.Gobackx}>
        <Image style={{marginRight:20,}} source={require('../../assets/SubscriptionPage/goBack.png')} />
      </TouchableOpacity>
    );
  }
  }
}

const styles = StyleSheet.create({
  Goback: {
    width: '75%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  Gobackx: {
    width: '75%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
