import React, { Component } from 'react';
import { Text, StyleSheet, View, ImageBackground } from 'react-native';
import Navbar from '../../components/Navbar/Index';
import Flatlist from '../../components/Flatlist/Flatlist';
import Carousel from './components/Carousel/Carousel'

export default class Index extends Component {
   
    render() {
        const { navigation } = this.props;
        console.log('NAVİGATİON', navigation)
        return (
            <ImageBackground style={styles.container} source={require('../../assets/background.png')}>
                <View style={{ flex:0.5,}}>
                    <Navbar onPress={()=> navigation.navigate('PaymentPlan')}/>
                </View>
                <View style={styles.librariesContainer}>
                    <Text style={styles.title}>Kütüphaneler</Text>
                        <Carousel onPress={()=> navigation.navigate('SelfConcordance')}/>
                </View>
                <View style={styles.flatlistContainer}>
                    <Text style={styles.title}>Kaydedilenler</Text>
                    <Flatlist />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    title: {
        fontSize: 30,
        color: '#FFF',
        fontFamily: 'Asap-Bold',
    },
    librariesContainer: {
        flex: 1.6,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
    },
    blueBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '17%',
        marginHorizontal: 25,
    },
    flatlistContainer: {
        flex: 4,
        width: '100%',
        alignItems: 'center',
        marginVertical: 25,
    },
});
