import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import firebase from '../../../Config/Firebase';
import ModalEmail from 'react-native-modal';
import ArrowButtonNext from 'react-native-vector-icons/MaterialIcons';
import EmailCheck from 'react-native-vector-icons/MaterialIcons';
import { ButtonSelesai, Input } from '../../../Components';
import { useDispatch, useSelector } from 'react-redux';
import BackArrow from 'react-native-vector-icons/MaterialIcons';

const GantiBerat = () => {


    const userId = useSelector(state => state.uid)

    const [beratModal, setBeratModal] = useState(false);
    const [userInfo, setUserInfo] = useState('')
    const [form, setForm] = useState({
        newBerat: 0,
    });

    var updateUserBMI = 0;

    useEffect(() => {
        // mengambil data user
        firebase.database().ref('users/' + userId + '/userInfo/').get().then((snapshot) => {
            if (snapshot.exists()) {
                setUserInfo(snapshot.val())
                console.log(snapshot)
            }

        })
    }, [])

    const ShowBeratModal = () => {
        setBeratModal(true);
    };

    const HideBeratModal = () => {
        setBeratModal(false);
    };



    const onChangeText = (value, input) => {
        setForm({
            ...form,
            [input]: value,
        });
    };

    const setFixed = (targetCalori, targetWater, fixedWater, fixedCalori, fixedUserBMI) => {
        fixedCalori = targetCalori.toFixed();
        fixedWater = targetWater.toFixed(1);
        fixedUserBMI = updateUserBMI.toFixed(1);
        // console.log('fixedUserBMI : ' + fixedUserBMI)
        // console.log('fixedCalori : ' + fixedCalori)
        // console.log('fixedWater : ' + fixedWater)

        firebase.database().ref('users/' + userId + '/userInfo/').update({
            berat: form.newBerat
        });
        firebase.database().ref('users/' + userId + '/userResult/').update({
            resultWater: fixedWater,
            resultKalori: fixedCalori,
            resultBMI: fixedUserBMI,
        });
        alert('Berhasil merubah data, silahkan login kembali untuk melihat perubahan.')
        setBeratModal(false);
    }

    const GantiBerat = (targetWater, targetCalori, userBMI, convertTinggi) => {
        convertTinggi = userInfo.tinggi / 100;
        userBMI = form.newBerat / (convertTinggi * convertTinggi);
        updateUserBMI = userBMI;

        if (form.newBerat == userInfo.berat) {
            alert('Berat badan tidak boleh sama.')
        }

        if (form.newBerat != 0 && form.newBerat != userInfo.berat) {
            if (userInfo.gender == 'Laki-laki') {
                targetWater = (2447 - (0.09145 * userInfo.umur) + (0.1074 * userInfo.tinggi) + (0.3362 * form.newBerat)) / 1000;
                targetCalori = 66 + (13.7 * form.newBerat) + (5 * userInfo.tinggi) - (6.8 * userInfo.umur);
                // console.log('gender : ' + userInfo.gender)
                // console.log('targetwater : ' + targetWater)
                // console.log('targetcalori : ' + targetCalori)
            }
            if (userInfo.gender == 'Perempuan') {
                targetWater = (2097 + (0.1069 * userInfo.tinggi) + (0.2466 * form.newBerat)) / 1000;
                targetCalori = 655 + (9.6 * form.newBerat) + (1.8 * userInfo.tinggi)
                // console.log('gender : ' + userInfo.gender)
                // console.log('targetwater : ' + targetWater)
                // console.log('targetcalori : ' + targetCalori)
            }
            { setFixed(targetCalori, targetWater) }
        }
        if (form.newBerat == 0) {
            alert('Berat badan tidak boleh kosong.')
        }


    }

    return (
        <View>
            <View style={styles.dataEmailContainer}>
                <View style={{ flex: 1, justifyContent: 'center', }}>
                    <Text style={styles.textStyle}>Berat badan </Text>
                </View>
                <View style={styles.userInfoContainer}>
                    <Text style={styles.DataStyle}>{userInfo.berat} </Text>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={ShowBeratModal}>
                        <ArrowButtonNext
                            name="navigate-next"
                            size={35}
                            style={styles.arrowButtonStyle}
                        />
                    </TouchableOpacity>
                </View>

                <ModalEmail
                    animationIn='fadeInUp'
                    animationInTiming={1500}
                    animationOut='fadeOutDown'
                    animationOutTiming={1000}
                    isVisible={beratModal}
                    style={{}}
                // hasBackdrop={false}
                >
                    <View style={styles.modalEmailSubContainer}>
                        <View style={styles.judulEmailContainer}>
                            <View style={{ flex: 0.5, }}>
                                <TouchableOpacity onPress={HideBeratModal}>
                                    <BackArrow
                                        name='arrow-back-ios'
                                        size={23}
                                        style={{ color: '#9B51E0', marginLeft: 13 }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.judulEmailSubContainer}>
                                <Text style={styles.textJudulEmail}>Ganti Berat Badan</Text>
                            </View>
                        </View>
                        <View style={styles.textInputEmailBaruContainer}>
                            <Input
                                placeholder="Satuan kg. . ."
                                style={styles.textInputEmailBaruStyle}
                                value={form.newBerat}
                                onChangeText={(value) => onChangeText(value, 'newBerat')}
                            // keyboardType="email"
                            />

                        </View>
                        <View style={styles.buttonGantiContainer}>
                            <TouchableOpacity onPress={() => GantiBerat()}>
                                <ButtonSelesai
                                    title="Ganti"
                                    // onPress={Selesai}
                                    size={22}
                                />
                            </TouchableOpacity>

                        </View>

                    </View>
                </ModalEmail>
            </View>
        </View >
    )
}

export default GantiBerat;

const styles = StyleSheet.create({

    modalEmailSubContainer: {
        backgroundColor: 'white',
        borderRadius: 15,
        marginHorizontal: 15
    },

    judulEmailContainer: {
        flexDirection: 'row',
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    judulEmailSubContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        right: 17
    },

    textJudulEmail: {
        color: '#9B51E0',
        fontFamily: 'Roboto-Bold',
        letterSpacing: 0.5,
        fontSize: 18,
    },

    textInputEmailBaruContainer: {
        marginHorizontal: 50,
        marginBottom: 15,
        borderWidth: 0.9,
        marginTop: 8,
    },

    textInputEmailBaruStyle: {
        marginLeft: 10,
        letterSpacing: 1,
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
    },

    textInputKonfirmasiEmailContainer: {
        marginHorizontal: 50,
        borderWidth: 0.9,
        flexDirection: 'row'
    },

    textInputKonfirmasiEmailStyle: {
        marginLeft: 10,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
    },

    buttonGantiContainer: {
        alignItems: 'flex-end',
        marginBottom: 15,
        marginTop: -20,
        marginRight: 32
    },

    dataEmailContainer: {
        flexDirection: 'row',
        marginLeft: 22,
        marginRight: 14,
        marginVertical: 3,
    },

    DataStyle: {
        fontSize: 14,
        letterSpacing: 1,
        fontFamily: 'Roboto-Regular',
    },

    userInfoContainer: {
        flex: 2,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },

    iconContainer: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textStyle: {
        fontSize: 16,
        letterSpacing: 0.7,
        fontFamily: 'Roboto-Regular',
    },

    arrowButtonStyle: {
        color: '#9B51E0',
    },

    textStyle: {
        fontSize: 16,
        letterSpacing: 0.7,
        fontFamily: 'Roboto-Regular',
    },
})
