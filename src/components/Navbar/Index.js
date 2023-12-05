import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, Modal, StatusBar } from 'react-native';
import Button from '../../pages/SelfPage/components/Button';
import Title from '../../components/Title'
import PremiumDescription from './components/PremiumDescription'
export default class Index extends Component {

    state = {
        modalVisible: false,
    };
    toggleModal = () => {
        this.setState((prevState) => ({
            modalVisible: !prevState.modalVisible,
        }));
    };

    render() {
        const {onPress} = this.props;
        const { modalVisible} = this.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.notificationContainer}>
                    <View style={styles.notifications}>
                        <Image source={require('../../assets/Navbar/notifications.png')} />
                    </View>
                </TouchableOpacity>
                <View style={styles.logo}>
                    <Image source={require('../../assets/Navbar/logo.png')} />
                </View>
                <View style={styles.coinContainer}>
                    <TouchableOpacity onPress={this.toggleModal}>
                        <View style={styles.coin}>
                            <Text style={styles.coinText}>1 C</Text>
                            <Image style={styles.coinIcon} source={require('../../assets/Navbar/coinicon.png')} />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* modalım */}
                <Modal visible={modalVisible}>
                    <View style={styles.modalView}>
                        <Image style={styles.bgcardBlur} source={require('../../assets/SubscriptionPage/bg.png')} />
                        <View style={styles.modal}>
                            <View style={styles.cardBlur} />
                            <View style={styles.goBack}>
                                <TouchableOpacity onPress={this.toggleModal}>
                                    <Image source={require('../../assets/SubscriptionPage/goBack.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.SubscriptionTitleContainer}>
                                <Title Title='Abonelik'/>
                            </View>
                            <View style={styles.SubscriptionIconContainer}>
                                <Image style={styles.SubscriptionIcon} source={require('../../assets/Navbar/coinicon.png')} />
                            </View>
                            <View style={styles.SubscriptionMainDescriptionContainer}>
                                <View style={styles.SubscriptionDescriptionTitleContainer}>
                                    <Text style={styles.SubscriptionDescriptionTitle}>
                                        Keşfetmenin sınırını kaldır.
                                    </Text>
                                </View>
                                <View style={styles.SubscriptionDescriptionContainer}>
                                    <Text style={styles.SubscriptionDescription}>
                                        Eşsiz analiz sonuçlarını ve detayların keyfini çıkart
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingVertical: 40, }}>
                                <Button onPress={onPress} Title='Devam Et' />
                            </View>
                        </View>
                        <View style={styles.PremiumContainer}>
                            <Text style={styles.PremiumTitle}>PREMİUM</Text>
                            <PremiumDescription/>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 30,
    },
    notificationContainer: {
        justifyContent: 'center',
    },
    coinContainer: {
        width: '15%',
        justifyContent: 'center',
    },
    coin: {
        borderWidth: 2,
        borderRadius: 15,
        paddingHorizontal: 5,
        borderColor: '#C99502',
        backgroundColor: '#FEEB6B',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    coinText: {
        marginHorizontal: 5,
        fontSize: 16,
        fontFamily: 'Asap-Bold',
        color: '#EBA401',
    },
    coinIcon: {
        marginLeft: 35,
        position: 'absolute',
        width: 40,
        height: 40,
    },
    modalView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgcardBlur: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    modal: {
        width: '75%',
        height: '78%',
        borderColor: '#d4c9e5',
    },
    cardBlur: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderWidth: 2,
        borderColor: '#d4c9e5',
        borderRadius: 15,
        backgroundColor: '#b08cd0',
        opacity: 0.4,
    },
    goBack: {
        alignItems: 'flex-end',
        padding: 10,
    },
    SubscriptionTitleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    SubscriptionTitle: {
        fontSize: 30,
        fontFamily: 'Asap-Bold',
        color: 'white',
        elevation: 10,
    },
    SubscriptionIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    SubscriptionIcon: {
        width: 100,
        height: 100,
    },
    SubscriptionMainDescriptionContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    SubscriptionDescriptionTitleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    SubscriptionDescriptionTitle: {
        fontSize: 16.87,
        color: 'white',
        fontFamily: 'Poppins-Bold',
    },
    SubscriptionDescriptionContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    SubscriptionDescription: {
        textAlign: 'center',
        fontSize: 14.99,
        fontFamily: 'Poppins-Regular',
        color: 'white',
    },
    PremiumContainer: {
        position: 'absolute',
        width: '90%',
        height: '27%',
        backgroundColor: '#ac38e3',
        bottom: 230,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'white',
    },
    PremiumTitle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 22.49,
        fontFamily: 'Poppins-Bold',
        marginVertical: 20,
    },
    
});
