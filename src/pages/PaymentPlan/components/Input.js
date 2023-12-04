import { Text, StyleSheet, View, TextInput } from 'react-native'
import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.InputContainer}>
                    <View style={styles.bgColor} />
                    <View style={styles.InputContainerDescription}>
                        <Text style={styles.Discount}>İndirim</Text>
                        <Text style={styles.CodeText}>Kodu</Text>
                    </View>
                    <View style={{ width: 2, backgroundColor: 'white', height: 50 }} />
                    <View>
                        <TextInput
                            {...this.props}
                            placeholderTextColor="#000"
                            style={styles.Input} 
                            maxLength={12}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgColor: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        opacity: 0.5,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    InputContainer: {
        flexDirection: 'row',
        borderStyle: 'dashed',
        borderWidth: 2,
        borderColor: 'white',
        width: '90%',
        aspectRatio: 3.7,
        alignItems: 'center',
        borderRadius: 23,
        marginVertical: 15,
    },
    InputContainerDescription: {
        paddingHorizontal: 20,
        width:'36%',
    },
    Input:{
        paddingHorizontal: 20,
        fontSize:20,
        fontFamily: 'Asap-Bold',
        color: 'white',
    },
    Discount: {
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        color: '#d8d2e6',
    },
    CodeText: {
        fontSize: 20,
        fontFamily: 'Asap-Bold',
        color: 'white',
    },
})