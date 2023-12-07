import { Text, StyleSheet, View, ImageBackground, ScrollView } from 'react-native';

import React, { Component } from 'react';
//COMPONENTS
import Navbar from '../../components/Navbar/Index';
import HarmonyBar from './components/HarmonyBar/HarmonyBar';
import AnalysisResult from './components/AnalysisResult/AnalysisResult';
import GoBack from '../../components/GoBack/Index';
import AnalysisBubleContainer from './components/AnalysisBubleContainer';

export default class Index extends Component {
 
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={require('../../assets/background.png')} style={styles.container}>
        <ScrollView>
          <View style={{ paddingBottom: 50 }}>
            <View style={{ marginVertical: 60 }}>
              <Navbar onPress={() => navigation.navigate('PaymentPlan')} />
            </View>
            <View style={styles.goBack}>
              <GoBack title='Özbenlik Uyumu' isFlat={true} onPress={() => navigation.goBack()} />
            </View>
            <View style={{ marginVertical: 60 }}>
                <AnalysisBubleContainer/>
              <View style={styles.harmonyBarContainer}>
                <HarmonyBar />
              </View>
            </View>
            <AnalysisResult />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  goBack: {
    width: '100%',
    paddingHorizontal: 45,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
 
  
});
