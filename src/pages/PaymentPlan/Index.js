import { Text, StyleSheet, View, ImageBackground, ScrollView } from 'react-native'
import React, { Component } from 'react'

//Components
import Button from '../SelfPage/components/Button';
import Planning from './components/Planning'
import Input from './components/Input'
import GoBack from '../../components/GoBack/Index';
import Description from './components/Description'
import Line from './components/line';
import Title from '../../components/Title'


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
                                <GoBack onPress={() => navigation.goBack()} />
                            </View>
                            <View style={styles.TitleContainer}>
                                <Title Title='Ödeme Planı' />
                            </View>
                            <Planning />
                            <Line />
                            <Input />
                            <Line />
                            <View style={{ paddingHorizontal: 20, }}>
                                <Description Plan='Abonelik Planı' Price='Yıllık / 500₺' />
                                <Description Plan='İndirim Kuponu' Price='-' />
                                <Description Plan='TOPLAM' Price='500₺' />
                            </View>
                            <Line />
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
        width: '80%',
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
