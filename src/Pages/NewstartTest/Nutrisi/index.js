import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';

import Modal from 'react-native-modal';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { ButtonNext, IsiPiringkuContent } from '../../../Components/';



const Nutrisi = ({ navigation }) => {

    const [isModalVisible, setModalVisible] = useState(false);
    var optNutrisi = [
        { label: "Ya", value: 50 },
        { label: "Tidak", value: 0 },
    ];

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };



    return (
        <View style={styles.maincontainer}>
            <Text style={styles.textStyle}>
                Apakah makanan yang Anda konsumsi sudah sesuai dengan <Text></Text>
                <Text
                    onPress={showModal}
                    style={styles.textStyle2}>Isi Piringku?
                </Text>
            </Text>


            <Modal
                animationIn='fadeInDown'
                animationInTiming={1000}
                animationOut='slideOutDown'
                animationOutTiming={1000}
                isVisible={isModalVisible}
                hasBackdrop={true}
                onBackdropPress={hideModal}
                style={styles.modalContainer}
            >
                <SafeAreaView>
                    <ScrollView>
                        <Text style={styles.judulStyle}>Isi Piringku</Text>
                        <IsiPiringkuContent />
                        <View style={styles.buttonContainer}>

                            <TouchableOpacity
                                onPress={hideModal}
                                style={styles.buttonBackStyle}
                            >
                                <Text style={styles.buttonTextStyle}>Kembali</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Modal>

            <View style={styles.radioFormContainer}>
                <RadioForm
                    radio_props={optNutrisi}
                    initial={-1}
                    onPress={(value) => alert('Nilai ' + value)}
                    formHorizontal={true}
                    selectedButtonColor={'#9B51E0'}
                    selectedLabelColor={'#9B51E0'}
                    buttonColor={'#757575'}
                    buttonSize={15}
                    labelStyle={styles.radioLabelStyle}
                />
            </View>

            <ButtonNext
                title="Berikutnya"
                onPress={() => navigation.navigate('Olahraga')}
                name="navigate-next"
                size={22}

            />
        </View >
    )
}

export default Nutrisi;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        marginHorizontal: 25,
        marginTop: 32,
    },

    modalContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 10
    },

    textStyle: {
        fontSize: 18,
        letterSpacing: 1,
    },


    textStyle2: {
        fontSize: 18,
        color: '#2250F2',
        textDecorationLine: 'underline',
        textDecorationColor: '#000',
    },

    judulStyle: {
        fontSize: 30,
        textAlign: 'center',
        color: 'dodgerblue',
        marginVertical: 10
    },

    buttonContainer: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#9B51E0',
        marginHorizontal: 135,
        marginVertical: 25
    },

    buttonBackStyle: {
        padding: 5
    },

    buttonTextStyle: {
        color: '#9B51E0',
        fontSize: 16,
    },

    radioFormContainer: {
        marginTop: 11,
    },

    radioLabelStyle: {
        fontSize: 16,
        letterSpacing: 0.3,
        marginRight: 35
    },
})