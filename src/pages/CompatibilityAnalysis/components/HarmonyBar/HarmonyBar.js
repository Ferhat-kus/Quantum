import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native';
//Images
import Circilebar from '../../../../assets/HarmonyBar/circilebar.png';
import Bar from '../../../../assets/HarmonyBar/bar.png';
//DATABASE
import Data from './data/data'

export default class HarmonyBar extends Component {
    state = {
        activeItems: {},
    };

    handlePress = (itemId) => {
        this.setState((prevState) => ({
            activeItems: {
                ...prevState.activeItems,
                [itemId]: !prevState.activeItems[itemId],
            },
        }));
    };

    renderItem = ({ item }) => {
        const isActive = this.state.activeItems[item._id] || item.isActive;

        return (
            <View style={styles.Container}>
                <View style={styles.Bar}>
                    <TouchableOpacity onPress={() => this.handlePress(item._id)}>
                        <Image source={isActive ? Bar : Circilebar} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.Title}>
                    <Text style={styles.Text}>Uyum Barı</Text>
                    <Text style={[styles.Text, { color: '#ad00ff' }]}>Uyumlu</Text>
                </View>
                <FlatList
                    horizontal
                    contentContainerStyle={styles.FlatList}
                    data={Data}
                    keyExtractor={(item) => item._id}
                    renderItem={this.renderItem}
                    scrollEnabled={false}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    FlatList: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Title: {
        width: '80%',
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
    },
});
