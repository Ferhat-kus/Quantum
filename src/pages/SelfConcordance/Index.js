import { Text, StyleSheet, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Index'
import Dropdown from '../SelfConcordance/components/Dropdown'
import Button from '../SelfConcordance/components/Button'
import GoBack from '../../components/GoBack/Index';

export default class Index extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground style={styles.Container} source={require('../../assets/background.png')}>
        <Navbar />
        {/* <GoBack Title='Menü'onPress={() => navigation.goBack()}/> */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.Goback}>
          <Image source={require('../../assets/Goback.png')} />
          <Text style={styles.GobackText}>Menü</Text>
        </TouchableOpacity>
        <Text style={styles.Title}>Karakter Uyumu</Text>
        <View>
          <View style={{ marginVertical: 20, }}>
            <Text style={styles.SideTitle}>1. Özbenlik</Text>
            <Dropdown />
          </View>
          <View style={{ marginVertical: 20, }}>
            <Text style={styles.SideTitle}>2. Özbenlik</Text>
            <Dropdown />
          </View>
        </View>
        <Button onPress={()=> navigation.navigate('CompatibilityAnalysis')} Title='Uyum Analizi' />
        <Button Title='Buraya BottomTabsMenu gelicek' />
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  Title: {
    fontSize: 30,
    fontFamily: 'Asap-Bold',
    color: 'white',
  },
  SideTitle: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Asap-Regular',
  },
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
});
