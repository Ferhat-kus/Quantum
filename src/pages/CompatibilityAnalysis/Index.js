import { Text, StyleSheet, View, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Index'
import GoBack from '../../components/GoBack/Index';
import AnalysisBubble from './components/AnalysisBubble'
import HarmonyBar from './components/HarmonyBar/HarmonyBar';
import AnalysisResult from './components/AnalysisResult/AnalysisResult';


export default class Index extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={require('../../assets/background.png')} style={styles.Container}>
        <Navbar />
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.Goback}>
            <Image source={require('../../assets/Goback.png')} />
            <Text style={styles.GobackText}>Özbebnlik Uyumu</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.AnalysisBubbleContainer}>
            <AnalysisBubble Title='Ferhat' />
            <Text style={styles.AnalysisBubbleText}>Uyum{'\n'}Analizi</Text>
            <AnalysisBubble Title='Ferhat' />
          </View>
          <View style={styles.HarmonyBarContaienr}>
            <HarmonyBar />
          </View>
        </View>
        <AnalysisResult
          Title='1. Özbenlik'
          Description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
        <AnalysisResult
          Title='2. Özbenlik'
          Description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
        <AnalysisResult 
          Title='Özbenliklerin Sosyal Uyumu'
          Description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        />
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  
  Container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingVertical: 50,
  },
  Goback: {
    width: '100%',
    paddingHorizontal: 45,
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
  AnalysisBubbleContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 22,

    alignItems: 'center',
    justifyContent: 'space-between',
  },
  AnalysisBubbleText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Asap-SemiBold',
    textAlign: 'center',
  },
})