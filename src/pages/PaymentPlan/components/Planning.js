import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

class PlanExample extends Component {
  state = {
    isPlan1Pressed: true,
    isPlan2Pressed: false,
  };

  handlePlan1Press = () => {
    this.setState({
      isPlan1Pressed: true,
      isPlan2Pressed: false,
    });
  };

  handlePlan2Press = () => {
    this.setState({
      isPlan1Pressed: false,
      isPlan2Pressed: true,
    });
  };

  render() {
    const { isPlan1Pressed, isPlan2Pressed } = this.state;

    const imageSource = isPlan1Pressed
      ? isPlan2Pressed
        ? require('../../../assets/PaymentPlan/circileelips.png')
        : require('../../../assets/PaymentPlan/elips.png')
      : require('../../../assets/PaymentPlan/circileelips.png');
      const image2Source = isPlan2Pressed
      ? isPlan1Pressed
        ? require('../../../assets/PaymentPlan/circileelips.png')
        : require('../../../assets/PaymentPlan/elips.png')
      : require('../../../assets/PaymentPlan/circileelips.png');

    return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.PalnningContainer, { opacity: isPlan1Pressed ? 1 : 0.5 }]} onPress={this.handlePlan1Press}>
          <View style={styles.bgColor} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', alignItems: 'center' }}>
            <Image source={imageSource} />
            <Text style={styles.Text}>Yıllık 500₺ (31,66₺)</Text>
            <View style={{ width: 2, backgroundColor: 'white', height: 40 }} />
            <Text style={styles.Text}>İndirim</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.PalnningContainer, { opacity: isPlan2Pressed ? 1 : 0.5 }]} onPress={this.handlePlan2Press}>
          <View style={styles.bgColor} />
          <View style={{ flexDirection: 'row', paddingHorizontal: 20, width: '100%', alignItems: 'center' }}>
            <Image style={{ marginRight: 30 }} source={image2Source} />
            <Text style={styles.Text}>Aylık 41,66₺</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgColor: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    opacity: 0.5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderTopColor: '#C345FF',
    borderRightColor: 'white',
    borderBottomColor: 'white',
    borderLeftColor: '#C345FF',
  },
  PalnningContainer: {
    width: '90%',
    aspectRatio: 4.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical:15,
  },
  Text: {
    fontSize: 15,
    fontFamily: 'Asap-SemiBold',
    color: 'white',
  },
});

export default PlanExample;
