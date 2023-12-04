import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class AnalysisResult extends Component {
  render() {
    const { Title , Description} = this.props;
    return (
      <View style={styles.Container}>
        <View style={styles.AnalysisResult}>
            <View style={styles.TitleContainer}>
              <Text style={styles.Title}>{Title}</Text>
            </View>
            <View style={styles.DescriptionContainer}>
                <Text style={styles.Description}>{Description}</Text>
    
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    Container:{
        width: '100%',
        alignItems: 'center',
    },
    AnalysisResult:{
        width:'90%',
    },
    TitleContainer:{
        
    },
    Title:{
        fontSize:15,
        fontFamily:'Asap-SemiBold',
        color:'white', 
    },
    Description:{
        fontSize:15,
        fontFamily:'Asap-Medium',
        color:'#cec5e5',
        paddingRight:50,
        paddingVertical:10,
        borderBottomWidth:1,
        borderBottomColor: '#cec5e5',
    },
})