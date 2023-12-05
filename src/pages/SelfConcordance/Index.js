import { Text, StyleSheet, View, ImageBackground,SafeAreaView } from 'react-native'
import React, { Component } from 'react'

//Components
import Navbar from '../../components/Navbar/Index'
import Button from '../SelfConcordance/components/Button'
import SelfChoice from './components/SelfChoice'
import GoBack from '../../components/GoBack/Index'
import Title from '../../components/Title';

export default class Index extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground style={styles.Container} source={require('../../assets/background.png')}>
        <View style={{ flex: 0.3,justifyContent:'center',}}>
          <Navbar onPress={() => navigation.navigate('PaymentPlan')} />
        </View>
        <View style={{justifyContent:'center',width:'80%',}}>
        <GoBack onPress={() => navigation.goBack()} title='MENU' isFlat={true} />
        </View>
        <View style={{flex: 0.3,justifyContent:'center',alignItems:'center',}}>
        <Title Title='Karakter Uyumu' />
        </View>
        <View style>
          <SelfChoice title='1. Özbenlik' />
          <SelfChoice title='2. Özbenlik' />
        </View>
        <View style={{flex: 0.3,justifyContent:'center',alignItems:'center',width:'100%',}}>
        <Button onPress={() => navigation.navigate('CompatibilityAnalysis')} Title='Uyum Analizi' />
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
  },
  Title: {
    fontSize: 30,
    fontFamily: 'Asap-Bold',
    color: 'white',
  },
});
