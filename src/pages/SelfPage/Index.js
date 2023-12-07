import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
//COMPONENETS
import Navbar from '../../components/Navbar/Index';
import Flatlist from '../../components/Flatlist/Flatlist';
import Carousel from './components/Carousel/Carousel'
import Title from '../../components/Title'

export default class Index extends Component {

    render() {
        const { navigation } = this.props;
        return (
            <ImageBackground style={styles.container} source={require('../../assets/background.png')}>
                <SafeAreaView style={{ flex: 1.5, justifyContent: 'center', }}>
                    <Navbar onPress={() => navigation.navigate('PaymentPlan')} />
                </SafeAreaView>
                <View style={styles.librariesContainer}>
                    <Title Title='Kütüphaneler' />
                    <Carousel onPress={() => navigation.navigate('SelfConcordance')} />
                </View>
                <View style={styles.flatlistContainer}>
                    <Title Title='Kaydedilenler' />
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
    },

    librariesContainer: {
        flex: 2.5,
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    flatlistContainer: {
        flex: 4,
        width: '100%',
        alignItems: 'center',
        paddingBottom: 30,
    },
});
