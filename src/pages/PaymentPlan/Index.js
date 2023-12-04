import { Text, StyleSheet, View, ImageBackground, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Button from '../SelfPage/components/Button';
import Planning from './components/Planning'
import Input from './components/Input'

export default class Index extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <ImageBackground source={require('../../assets/SubscriptionPage/bg.png')} style={styles.Container}>
                <View style={styles.modalView}>
                    <View style={styles.modal}>
                        <View style={styles.cardBlur} />
                        <ScrollView>
                            <View style={styles.goBack}>
                                <TouchableOpacity style={styles.goBackIcon} onPress={() => navigation.goBack()}>
                                    <Image source={require('../../assets/SubscriptionPage/goBack.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.TitleContainer}>
                                <Text style={styles.Title}>Ödeme Planı</Text>
                            </View>
                            <Planning />
                            <View style={{ width: '100%', height: 1, backgroundColor: 'white', }} />
                            <Input />
                            <View style={{ width: '100%', height: 1, opacity: 0.5, backgroundColor: 'white', }} />
                            <View style={styles.PaymentPlanDescription}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>
                                    <Text style={styles.DescriptionTitle}>Abonelik Planı</Text>
                                    <Text style={styles.Descriptionprice}> Yıllık/500₺</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>
                                    <Text style={styles.DescriptionTitle}>İndirim Kuponu</Text>
                                    <Text style={styles.Descriptionprice}>-</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>
                                    <Text style={styles.DescriptionTitle}>Toplam</Text>
                                    <Text style={styles.Descriptionprice}>500₺</Text>
                                </View>
                            </View>
                            <View style={{ width: '100%', height: 1, opacity: 0.5, backgroundColor: 'white', }} />
                            <Text style={styles.PaymentText}>Paket yenilenme tarihinden en az 24 saat önce iptal et. Uygulamada, Profil - Abonelikler’e git.</Text>
                            <View style={{ alignItems: 'center', paddingVertical: 10, }}>
                                <Button Title='İleri' onPress={() => navigation.goBack()} />
                            </View>
                            <Text style={styles.TermsofUsePrivacyPolicy}>Kullanım Şartları / Gizlilik Politikası</Text>
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    modalView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        width: '75%',
        justifyContent: 'center',
        borderColor: '#d4c9e5',
        alignItems: 'center',
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
        width: '100%',
        padding: 10,
    },
    goBackIcon: {
        alignItems: 'flex-end',
    },
    TitleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    Title: {
        fontSize: 30,
        fontFamily: 'Asap-Bold',
        color: 'white',
        elevation: 10,
    },
    DescriptionTitle: {
        marginVertical: 5,
        fontSize: 15,
        fontFamily: 'Asap-Regular',
        color: 'white',
    },
    Descriptionprice: {
        marginVertical: 5,
        fontSize: 15,
        fontFamily: 'Asap-Bold',
        color: 'white',
    },
    PaymentText: {
        fontSize: 10,
        fontFamily: 'Asap-Regular',
        textAlign: 'center',
        color: 'white',
        paddingVertical: 5,
    },
    TermsofUsePrivacyPolicy: {
        textAlign: 'center',
        paddingVertical: 5,
        color: 'white',
        fontSize: 10,
        fontFamily: 'Asap-Regular',
        paddingVertical: 20,
    },
})
