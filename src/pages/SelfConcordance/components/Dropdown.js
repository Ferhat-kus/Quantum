import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback, ImageBackground } from 'react-native';

class DropdownExample extends Component {
    state = {
        isModalVisible: false,
        selectedValue: null,
    };

    toggleModal = () => {
        this.setState((prevState) => ({ isModalVisible: !prevState.isModalVisible }));
    };

    handleSelfSelect = (value) => {
        this.setState({ selectedValue: value });
        this.toggleModal();
    };

    render() {
        const { isModalVisible, selectedValue } = this.state;
        const selfOptions = ['Manifestör', 'Jeneratör', 'Projectör'];

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.toggleModal} style={styles.dropdownButton}>
                    <Text style={styles.SelfText}>{selectedValue || 'Özbenlik Seçin'}</Text>
                </TouchableOpacity>

                <Modal
                    transparent={true}
                    visible={isModalVisible}
                    animationType="slide"
                    onRequestClose={this.toggleModal}
                >
                    <TouchableWithoutFeedback onPress={this.toggleModal}>
                        <View style={styles.modalOverlay} />
                    </TouchableWithoutFeedback>

                    <ImageBackground source={require('../../../assets/background.png')} style={styles.modalContent}>
                        {selfOptions.map((self, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => this.handleSelfSelect(self)}
                                style={styles.optionItem}
                            >
                                <Text style={styles.ozbenlik}>{self}</Text>
                            </TouchableOpacity>
                        ))}
                    </ImageBackground>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SelfText: {
        color: '#a797d2',
        fontSize: 20,
        fontFamily: 'Asap-Regular',
    },
    dropdownButton: {
        borderWidth: 1,
        borderColor: 'white',
        width: 320,
        height: 60,
        padding: 10,
        borderRadius: 20,
        elevation: 10,
        backgroundColor: '#5f34b0',
        justifyContent: 'center',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    optionItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    ozbenlik: {
        color: '#a797d2',
        fontSize: 20,
        fontFamily: 'Asap-Regular',
    },
});

export default DropdownExample;
