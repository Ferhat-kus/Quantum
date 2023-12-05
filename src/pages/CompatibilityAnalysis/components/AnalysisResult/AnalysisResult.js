import { Text, StyleSheet, View,FlatList } from 'react-native'
import React, { Component } from 'react'

//DATABASE
import Data from './data/data';
export default class AnalysisResult extends Component {

  renderContentItem = ({ item}) => {
    return (
      <View style={styles.Container}>
        <View style={styles.AnalysisResult}>
          <View style={styles.TitleContainer}>
            <Text style={styles.Title}>{item.Title}</Text>
          </View>
          <View style={styles.DescriptionContainer}>
            <Text style={styles.Description}>{item.Description}</Text>
          </View>
        </View>
      </View>
    );
  };
  
  render() {
    return (
      <View style={styles.Container}>
        <FlatList
          renderItem={this.renderContentItem}
          data={Data}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    alignItems: 'center',
  },
  AnalysisResult: {
    width: '90%',
    marginVertical:10,
  },
  Title: {
    fontSize: 15,
    fontFamily: 'Asap-SemiBold',
    color: 'white',
  },
  Description: {
    fontSize: 15,
    fontFamily: 'Asap-Medium',
    color: '#cec5e5',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cec5e5',
  },
})