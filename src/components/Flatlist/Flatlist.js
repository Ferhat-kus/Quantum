import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native';
import Data from '../../../data';

export default class Flatlist extends Component {
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

    renderContentItem = ({ item,}) => {
        const isActive = this.state.activeItems[item._id] || false;

        return (
            <View style={styles.ItemContainer}>
                <View style={styles.ImageContainer}>
                    <Image style={styles.PalnetImage}
                    
                        // source={{ uri: item.picture }}
                        source={require('../../assets/planet/Neptune.png')}
                    />
                </View>
                <View style={styles.Description}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 15, }}>
                        <Text style={styles.Title}>{item.Title}</Text>

                        <TouchableOpacity onPress={() => this.handlePress(item._id)} style={styles.container}>
                            <Image
                                source={isActive ? require('../../assets/Icon/SaveIcon.png') : require('../../assets/Icon/Save.png')}
                                style={{ marginRight: 30, }}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.Icerik}>{item.Description}</Text>
                    <TouchableOpacity style={styles.DahaFazla}>
                        <Text style={styles.DahaFazlaText}>Daha Fazla</Text>
                        <Image source={require('../../assets/Icon/rightarrow.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.Container}>
                <FlatList
                    keyExtractor={item => item._id}
                    renderItem={this.renderContentItem}
                    data={Data}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        paddingVertical: 10,
        alignItems: 'center',
    },
    ItemContainer: {
        flexDirection: 'row',
        width: 350,
        height: 170,
        margin: 10,
        justifyContent: 'space-between',
        backgroundColor: '#352791',
        elevation: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white',
    },
    ImageContainer: {
        justifyContent: 'center',
        paddingHorizontal:'5%',
        width: '50%',
    },
    PalnetImage: {
        width: '100%',
        height: '80%',
        borderRadius: 70,
    },
    Description: {
        width: '55%',
        paddingHorizontal: 5,
    },
    Title: {
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        color: 'white',
    },
    Icerik: {
        color: 'white',
        fontSize: 13,
        fontFamily: 'Roboto-Regular',
    },
    DahaFazla: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
    },
    DahaFazlaText: {
        color: 'white',
        marginRight: 20,
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
    },
});
