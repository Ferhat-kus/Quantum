import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native';
//DATABASE
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
    renderContentItem = ({ item, }) => {
        const isActive = this.state.activeItems[item._id] || false;
        return (
            <View style={styles.ItemContainer}>
                <View style={{flexDirection:"row"}}>
                    <View style={styles.ImageContainer}>
                        <Image style={styles.PalnetImage}
                            source={item.picture}
                            // source={require('../../assets/planet/Neptune.png')}
                        />
                    </View>
                    <View style={styles.Description}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 15, }}>
                            <Text style={styles.Title}>{item.Title}</Text>


                            <TouchableOpacity onPress={() => this.handlePress(item._id)}>
                                <Image
                                    source={isActive ? require('../../assets/Icon/SaveIcon.png') : require('../../assets/Icon/Save.png')}
                                    style={{ marginRight: 30, }}
                                />
                            </TouchableOpacity>



                        </View>
                        <Text style={styles.Icerik}>{item.Description}</Text>
                        <TouchableOpacity style={styles.More}>
                            <Text style={styles.MoreText}>Daha Fazla</Text>
                            <Image source={require('../../assets/Icon/rightarrow.png')} />
                        </TouchableOpacity>
                    </View>
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
        width: '85%',
        paddingVertical: 10,
        alignItems: 'center',
    },
    ItemContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-between',
        backgroundColor: '#352791',
        elevation: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white',
    },
    ImageContainer: {
        justifyContent: 'center',
        paddingHorizontal: '5%',
        width: '50%',
    },
    PalnetImage: {

    },
    Description: {
        width: '50%',

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
    More: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
    },
    MoreText: {
        color: 'white',
        marginRight: 20,
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
    },
});
