import { Text, StyleSheet, View, FlatList,Image } from 'react-native'
import React, { Component } from 'react'
import Data from './data/data';

export default class PremiumDescription extends Component {
    renderContentItem = ({ item, }) => {
        return (
            <View style={styles.PremiumDescriptionContainer}>
                <Image source={item.Icon} />
                <Text style={styles.PremiumDescriptionText}>{item.Description}</Text>
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
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    PremiumDescriptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    PremiumDescriptionText: {
        color: 'white',
        fontSize: 13,
        fontFamily: 'Poppins-Medium',
        marginLeft: 10,
    },
})