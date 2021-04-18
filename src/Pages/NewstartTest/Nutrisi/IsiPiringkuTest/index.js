import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import RadioForm from 'react-native-simple-radio-button';
import ModalIsiPiringku from 'react-native-modal';
import { IsiPiringkuContent } from '../../../../Components';
import BackArrow from 'react-native-vector-icons/MaterialIcons';
import ButtonIconKembali from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';

const IsiPiringkuTest = () => {

    const [showModal, setShowModal] = useState(false);
    const isiPiringku = useSelector((state) => state.resultIsiPiringku)
    const [radioNutrisi, setRadioNutrisi] = useState([
        {
            label: "Ya",
            value: 50
        },
        {
            label: "No",
            value: 30
        }
    ]);


    const dispatch = useDispatch();


    const HideModalMakanPagi = () => {
        setShowModal(false)
    }

    const ShowModalMakanpagi = () => {
        setShowModal(true)
    }

    const handleRadio = (value, getValueNo, getValueYes) => {
        if (value == 50) {
            // alert('Yes : ' + value)
            getValueYes = value
            dispatch({ type: 'RESULT_ISI_PIRINGKU', value: getValueYes });
        }
        if (value == 30) {
            // alert('No : ' + value)
            // getValueNo = value
            dispatch({ type: 'RESULT_ISI_PIRINGKU', value: getValueNo });
        }
        if (value != null) {
            value = 0;
        }
    }


    return (
        <View>
            <View style={styles.isiPiringkuContainer}>
                <Text style={styles.textStyle}>
                    Apakah makanan yang Anda konsumsi sudah sesuai dengan <Text></Text>
                    <Text

                        onPress={ShowModalMakanpagi}
                        style={styles.textStyle2}>Isi Piringku?
                    </Text>
                </Text>


                <ModalIsiPiringku
                    animationIn='fadeInUp'
                    animationInTiming={1500}
                    animationOut='fadeOutDown'
                    animationOutTiming={1000}
                    isVisible={showModal}
                    style={styles.modalContainer}
                >
                    <View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.modalSubContainer}>
                                <View style={{ marginLeft: 15, flex: 0, alignItems: 'center' }}>
                                    <TouchableOpacity
                                        onPress={HideModalMakanPagi}
                                    >
                                        <BackArrow
                                            name='arrow-back-ios'
                                            size={25}
                                            style={{ color: '#9B51E0' }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center' }}>

                                    <Text style={styles.judulStyle}>Isi Piringku</Text>
                                </View>
                            </View>
                            <IsiPiringkuContent />
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    onPress={HideModalMakanPagi}
                                    style={styles.buttonStyle}
                                >
                                    <ButtonIconKembali
                                        name="doubleleft"
                                        size={18}
                                        style={styles.buttonKembaliStyle}
                                    />
                                    <Text style={styles.buttonText}>Kembali</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </ModalIsiPiringku>



                <View style={styles.radioFormContainer}>
                    <RadioForm
                        radio_props={radioNutrisi}
                        initial={-1}
                        onPress={(value) => handleRadio(value)}
                        formHorizontal={true}
                        selectedButtonColor={'#9B51E0'}
                        selectedLabelColor={'#9B51E0'}
                        buttonColor={'#757575'}
                        buttonSize={15}
                        labelStyle={styles.radioLabelStyle}
                    />
                </View>
            </View>
        </View>
    );

}

export default IsiPiringkuTest;

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#757575',
        borderRadius: 10,

    },

    isiPiringkuContainer: {
        borderTopWidth: 0.4,
        borderBottomWidth: 0.4,
        borderColor: '#757575',
        marginTop: 30,
        paddingBottom: 20
    },

    buttonContainer: {
        flex: 1,
        marginVertical: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },


    buttonStyle: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#9B51E0',
        borderRadius: 10,
    },


    buttonText: {
        paddingVertical: 6,
        paddingRight: 8,
        color: '#9B51E0',
        fontSize: 15,
        fontWeight: '600',
        letterSpacing: 0.5,
    },

    buttonKembaliStyle: {
        paddingHorizontal: 5,
        alignSelf: 'center',
        color: '#9B51E0'
    },

    modalSubContainer: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    judulStyle: {
        right: 25,
        top: 3,
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        letterSpacing: 0.8,
        color: '#9B51E0'
    },

    textStyle: {
        fontSize: 18,
        letterSpacing: 1,
        marginTop: 20,
    },

    textStyle2: {
        fontSize: 18,
        color: '#2250F2',
        textDecorationLine: 'underline',
        textDecorationColor: '#000',
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