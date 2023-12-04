import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Circilebar from '../../../../assets/HarmonyBar/circilebar.png';
import Bar from '../../../../assets/HarmonyBar/bar.png';

export default class HarmonyBar extends Component {
    state = {
        activeItems: [false, false, false, false, false, false],
    };

    toggleVisibility = (index) => {
        const updatedItems = this.state.activeItems.map((item, i) => (i <= index ? !item : item));
        this.setState({ activeItems: updatedItems });
    };

    render() {
        const { activeItems } = this.state;

        return (
            <View style={styles.Container}>
                <View style={styles.Title}>
                    <Text style={styles.Text}>Uyum Barı</Text>
                    <Text style={[styles.Text ,{color:'#ad00ff',}]}>Uyumlu</Text>
                </View>
                <View style={styles.Bar}>
                    {activeItems.map((isActive, index) => (
                        <TouchableOpacity key={index} onPress={() => this.toggleVisibility(index)}>
                            <Image source={isActive ? Bar : Circilebar} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    Title: {
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Text: {
        fontSize: 18,
        fontFamily: 'Asap-SemiBold',
        color: 'white',
    },
    Bar: {
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        flexDirection: 'row',
    },
});
