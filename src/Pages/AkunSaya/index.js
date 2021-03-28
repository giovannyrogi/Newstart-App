import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

import Modal from 'react-native-modal';
import ArrowButtonNext from 'react-native-vector-icons/MaterialIcons';
import { GantiEmail } from '../../Components';


const AkunSaya = () => {

    const [isModalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };


    return (
        <SafeAreaView style={styles.Maincontainer}>

            {/* Foto */}
            <View style={styles.subContainer1}>
                <Text>Foto</Text>
            </View>

            {/* Data Akun */}
            <View style={styles.subContainer2}>

                {/* Email */}
                <TouchableOpacity onPress={showModal} >
                    <View style={styles.border}>
                        <View style={styles.dataContainer}>
                            <Text style={styles.textStyle}>Email</Text>
                            <Text style={styles.DataStyle}>giovannirogi@gmail.com</Text>

                            <ArrowButtonNext
                                name="navigate-next"
                                size={35}
                                style={styles.arrowButtonStyle}
                            />
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Email modal */}
                <Modal
                    animationIn='fadeInDown'
                    animationInTiming={1000}
                    animationOut='slideOutDown'
                    animationOutTiming={800}
                    isVisible={isModalVisible}
                    hasBackdrop={true}
                    onBackdropPress={hideModal}
                    style={styles.modalContainer}
                >
                    <SafeAreaView style={styles.modalDataContainer}>
                        <ScrollView>
                            <Text style={styles.modaltittleStyle}>Email</Text>
                            <GantiEmail />
                        </ScrollView>
                    </SafeAreaView>
                </Modal>

                {/* Ganti password */}
                <TouchableOpacity>
                    <View style={styles.border}>
                        <View style={styles.dataContainer}>
                            <Text style={styles.textStyle}>Ganti password</Text>
                            <ArrowButtonNext
                                name="navigate-next"
                                size={35}
                                style={styles.arrowButtonStyle2}
                            />
                        </View>
                    </View>
                </TouchableOpacity>


                {/* Umur */}
                <TouchableOpacity>
                    <View style={styles.border}>
                        <View style={styles.dataContainer}>
                            <Text style={styles.textStyle}>Umur</Text>
                            <Text style={styles.DataStyle}>27</Text>

                            <ArrowButtonNext
                                name="navigate-next"
                                size={35}
                                style={styles.arrowButtonStyle}
                            />
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Jenis kelamin */}
                <View style={styles.border}>
                    <View style={styles.dataContainer}>
                        <Text style={styles.textStyle}>Jenis kelamin</Text>
                        <Text style={styles.DataStyle}>Laki-laki</Text>
                        <Text style={{ marginRight: 37 }}></Text>
                    </View>
                </View>


                {/* Tinggi badan */}
                <TouchableOpacity>
                    <View style={styles.border}>
                        <View style={styles.dataContainer}>
                            <Text style={styles.textStyle}>Tinggi badan</Text>
                            <Text style={styles.DataStyle}>172</Text>

                            <ArrowButtonNext
                                name="navigate-next"
                                size={35}
                                style={styles.arrowButtonStyle}
                            />
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Berat badan */}
                <TouchableOpacity>
                    <View style={styles.border}>
                        <View style={styles.dataContainer}>
                            <Text style={styles.textStyle}>Berat badan</Text>
                            <Text style={styles.DataStyle}>85</Text>

                            <ArrowButtonNext
                                name="navigate-next"
                                size={35}
                                style={styles.arrowButtonStyle}
                            />
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Body Mass Index */}
                <TouchableOpacity>
                    <View style={styles.border}>
                        <View style={styles.dataContainer}>
                            <Text style={styles.textStyle}>Body mass index (BMI)</Text>
                            <Text style={styles.DataStyle}>29.1</Text>

                            <ArrowButtonNext
                                name="navigate-next"
                                size={35}
                                style={styles.arrowButtonStyle}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView >


    );

}

export default AkunSaya;

const styles = StyleSheet.create({

    Maincontainer: {
        flex: 1
    },

    subContainer1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 3,
        borderColor: '#BDBDBD',
    },

    subContainer2: {
        flex: 2,
    },

    dataContainer: {
        marginLeft: 22,
        marginRight: 18,
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center'
    },

    modalContainer: {
        backgroundColor: 'white',
        marginVertical: 250,
        marginHorizontal: 25,
        borderRadius: 10,

    },

    border: {
        borderBottomWidth: 1,
        borderColor: '#BDBDBD',
        paddingVertical: 11
    },

    modalDataContainer: {
        flex: 1,

    },

    modaltittleStyle: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10
    },

    DataStyle: {
        flex: 1,
        textAlign: 'right',
        fontSize: 14,
        letterSpacing: 0.7
    },

    textStyle: {
        fontSize: 16,
        letterSpacing: 0.7
    },

    arrowButtonStyle: {
        color: '#9B51E0',
        marginVertical: -12,

    },

    arrowButtonStyle2: {
        color: '#9B51E0',
        marginVertical: -12,
        left: 214
    },

    arrowButtonStyle3: {
        color: '#9B51E0',
        marginVertical: -12,
        left: 295
    },

});