import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Description extends Component {
    render() {
        const { Plan, Price } = this.props;
        return (
            <View style={styles.Container}>
                <View style={{ width: "70%",flexDirection:"row" }}>
                    <View style={{ width: "60%" }}>
                        <Text style={styles.Title}>{Plan}</Text>
                    </View>
                    <View style={{ width: "20%", alignItems:'flex-end',}}>
                        <Text style={styles.Title}>:</Text>
                    </View>
                </View>
                <View style={{  width: "30%",alignItems:'flex-end',}}>
                    <Text style={styles.Title}>{Price}</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Title: {
        marginVertical: 5,
        fontSize: 15,
        fontFamily: 'Asap-Regular',
        color: 'white',
    },
    Price: {
        marginVertical: 5,
        fontSize: 15,
        fontFamily: 'Asap-Bold',
        color: 'white',
    },
})