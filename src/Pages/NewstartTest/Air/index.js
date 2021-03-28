import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import Modal from 'react-native-modal';

import { ButtonNext, TakaranAir } from '../../../Components';


const Air = ({ navigation }) => {

    const [isModalVisible, setModalVisible] = useState(false);
    var optAir = [
        { label: "1 Liter", value: 50 },
        { label: "2 Liter", value: 100 },
        { label: ">3 Liter", value: 50 },
    ];

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View>
                <Text style={styles.textStyle}>Berapa banyak air yang sudah Anda konsumsi? <View></View>
                    <Text onPress={showModal} style={styles.textStyle2}>Informasi takaran air putih</Text>
                </Text>
            </View>

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
                        <Text style={styles.judulStyle}>Takaran Air Putih</Text>
                        <TakaranAir />
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
                    radio_props={optAir}
                    initial={-1}
                    onPress={(value) => alert('Nilai ' + value)}
                    formHorizontal={true}
                    selectedButtonColor={'#9B51E0'}
                    selectedLabelColor={'#9B51E0'}
                    buttonColor={'#757575'}
                    buttonSize={12}
                    labelStyle={styles.radioLabelStyle}
                />
            </View>

            <ButtonNext
                s title="Berikutnya"
                onPress={() => navigation.navigate('Sinar Matahari')}
                name="navigate-next"
                size={22}
            />
        </SafeAreaView>
    );

}

export default Air;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 32,
        marginHorizontal: 25,
    },

    buttonContainer: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#9B51E0',
        marginHorizontal: 135,
        marginVertical: 25
    },

    radioFormContainer: {
        marginTop: 11,
    },

    textStyle: {
        fontSize: 18,
        letterSpacing: 0.5,
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

    buttonBackStyle: {
        padding: 5
    },

    buttonTextStyle: {
        color: '#9B51E0',
        fontSize: 16,
    },


    radioLabelStyle: {
        fontSize: 15,
        letterSpacing: 0.3,
        marginRight: 35,
    },




})