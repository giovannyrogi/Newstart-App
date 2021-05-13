import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import ImageZoom from 'react-native-image-pan-zoom';
import CloseIcon from 'react-native-vector-icons/Ionicons';

import ModalDetailButton from 'react-native-modal';
import BackArrow from 'react-native-vector-icons/MaterialIcons';
import { Interpretasi } from '../../../../../assets'
import { ScrollView } from 'react-native-gesture-handler';

const DetailDisease = () => {

    const [modal, setModal] = useState(false);


    const hideModal = () => {
        setModal(false);
    }

    const showModal = () => {
        setModal(true);
    }



    return (
        <View style={{}}>
            <TouchableOpacity onPress={showModal} style={{ alignItems: 'center' }}>
                <Text style={styles.textButtonDetail}>(Detail)</Text>
            </TouchableOpacity>

            <ModalDetailButton
                animationIn='fadeInUp'
                animationInTiming={1500}
                animationOut='fadeOutDown'
                animationOutTiming={1000}
                isVisible={modal}
                hasBackdrop={true}
                onBackdropPress={hideModal}
                style={styles.modalContainer}
            >
                <ScrollView>
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
                            <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', right: 10 }}>
                                <Text style={styles.judulStyle}>Disease</Text>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15, marginTop: 5 }}>
                            <Text style={styles.textStyle}>Disease adalah tingkatan terendah dari semua interpretasi yang ada.
                            Jika Anda mendapatkan hasil Disease berarti tingkat kesehatan Anda
                            sangat buruk karena pola hidup Anda yang sudah tidak sehat,
                            pergerakan tubuh menjadi terbatas dan berketergantungan pada obat-obatan. {'\n\n'}
                            Untuk melihat hasil Interpretasi Anda pada gambar dibawah ini, cara
                            perhitungannya adalah hasil akhir Newstart test / 10.
                            </Text>
                        </View>
                        <View style={{ marginLeft: 9 }}>
                            <ImageZoom
                                cropWidth={350}
                                cropHeight={120}
                                imageWidth={350}
                                imageHeight={120}
                                style={{ backgroundColor: 'white', marginTop: 20 }}
                            >
                                <Image
                                    style={styles.stretch}
                                    source={Interpretasi}
                                />
                            </ImageZoom>
                        </View>
                    </View>
                </ScrollView>
            </ModalDetailButton>
        </View >
    )
}

export default DetailDisease;

const styles = StyleSheet.create({
    stretch: {
        width: 350,
        height: 120,
    },

    modalContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#757575',
        borderRadius: 10,
    },

    textButtonDetail: {
        color: 'dodgerblue',
        marginLeft: 2.5,
        letterSpacing: 0.5,
        fontFamily: 'Roboto-Bold'
    },

    judulStyle: {
        marginRight: 10,
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        letterSpacing: 0.8,
        color: '#9B51E0'
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

    subJudul: {
        fontFamily: 'Poppins-Bold',
        marginTop: 20,
        fontSize: 15,
        letterSpacing: 1,
        lineHeight: 22,
        color: '#9B51E0',
        textAlign: 'center'
    },
})
