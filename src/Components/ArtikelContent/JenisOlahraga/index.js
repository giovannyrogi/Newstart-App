import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import BackArrow from 'react-native-vector-icons/MaterialIcons';

import Modal from 'react-native-modal';


const JenisOlahraga = () => {

    const [isModalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    return (
        <View>
            <View>
                <TouchableOpacity onPress={showModal}>
                    <Text style={styles.buttonStyle}>Jenis Olahraga</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationIn='fadeInUp'
                animationInTiming={1500}
                animationOut='fadeOutDown'
                animationOutTiming={1000}
                isVisible={isModalVisible}
                hasBackdrop={true}
                onBackdropPress={hideModal}
                style={styles.modalContainer}
            >
                <View style={{ flex: 1, }}>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <View style={{ flex: 0.1, }}>
                            <TouchableOpacity onPress={hideModal}>
                                <BackArrow
                                    name='arrow-back-ios'
                                    size={25}
                                    style={{ color: '#9B51E0', marginLeft: 15, marginTop: 2, }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', }}>
                            <Text style={styles.judulStyle}>Jenis Olahraga</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, alignItems: 'center', }}>
                        <Text style={styles.subJudul}>Aerobik</Text>
                    </View>
                    <View style={{ marginHorizontal: 15 }}>
                        <Text style={styles.textStyle}>Aerobik adalah jenis olahraga ringan, dimana sumber energi utama yang digunakan
                        dalam olahraga ini adalah oksigen. Saat melakukan olahraga aerobik Anda lebih
                        berfokus pada pernafasan, untuk memaksimalkan jumlah oksigen yang masuk kedalam
                        darah.<Text style={styles.textBold}> Contoh dari jenis olahraga aerobik ini adalah menari/dansa, senam, jogging,
                        bersepeda, jalan cepat, berenang dan lain-lain</Text>.
                        </Text>
                    </View>
                    <View style={{ marginTop: 10, alignItems: 'center', }}>
                        <Text style={styles.subJudul}>Anaerobik</Text>
                    </View>
                    <View style={{ marginHorizontal: 15 }}>
                        <Text style={styles.textStyle}>Anaerobik adalah jenis olahraga berat untuk melatih otot.
                        Dalam jenis olahraga ini tidak menggunakan oksigen sebagai sumber energi, tetapi menggunakan
                        gula otot sebagai sumber energi.<Text style={styles.textBold}> Contoh dari olahraga jenis Anaerobik adalah angkat beban,
                        lari cepat(sprint), push up, pull up, sit up dan lain-lain</Text>.
                        </Text>
                    </View>
                </View>
            </Modal>
        </View >
    )
}

export default JenisOlahraga;

const styles = StyleSheet.create({

    modalContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#757575',
        borderRadius: 10,
    },

    buttonStyle: {
        marginRight: 50,
        marginLeft: 20,
        marginTop: 28,
        fontSize: 16,
        color: '#2250F2',
        textDecorationLine: 'underline',
        letterSpacing: 0.6
    },

    judulStyle: {
        marginRight: 10,
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        letterSpacing: 0.8,
        color: '#9B51E0'
    },

    subJudul: {
        fontFamily: 'Poppins-Bold',
        marginTop: 20,
        fontSize: 15,
        letterSpacing: 1,
        lineHeight: 22,
        color: '#9B51E0',
        textAlign: 'center'
    },

    textStyle: {
        fontFamily: 'Roboto-Regular',
        textAlign: 'justify',
        fontSize: 15,
        letterSpacing: 1,
        lineHeight: 22,
    },

    textBold: {
        fontFamily: 'Roboto-Bold'
    },
})
