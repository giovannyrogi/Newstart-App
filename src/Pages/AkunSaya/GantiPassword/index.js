import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import firebase from '../../../Config/Firebase';
import ModalPassword from 'react-native-modal';
import ArrowButtonNext from 'react-native-vector-icons/MaterialIcons';
import EmailCheck from 'react-native-vector-icons/MaterialIcons';
import { ButtonSelesai, Input } from '../../../Components';
import { useDispatch, useSelector } from 'react-redux';
import BackArrow from 'react-native-vector-icons/MaterialIcons';

const RubahPassword = () => {


    const userId = useSelector(state => state.uid)

    const [passwordModal, setPasswordModal] = useState(false);
    const [userInfo, setUserInfo] = useState('')
    const [form, setForm] = useState({
        newPassword: '',
        konfirmPassword: ''
    });


    useEffect(() => {
        // mengambil data user
        firebase.database().ref('users/' + userId + '/userInfo/').get().then((snapshot) => {
            if (snapshot.exists()) {
                setUserInfo(snapshot.val())
                console.log(snapshot)
            }

        })
    }, [])

    const ShowPasswordModal = () => {
        setPasswordModal(true);
    };

    const HidePasswordModal = () => {
        setPasswordModal(false);
    };



    const onChangeText = (value, input) => {
        setForm({
            ...form,
            [input]: value,
        });
    };

    const GantiPassword = () => {

        if (form.newPassword == form.konfirmPassword && form.newPassword != '') {
            // firebase.database().ref('users/' + userId + '/userInfo/').update({
            //     password: form.newPassword
            // });
            alert('password diubah')
            setPasswordModal(false);
        }
        if (form.newPassword == '') {
            alert('Password tidak boleh kosong.')
        }
    }


    const checkPassword = () => {
        if (form.konfirmPassword != '') {
            return (
                passwordVisibility()
            )
        }
    }

    const passwordVisibility = () => {
        if (form.newPassword == form.konfirmPassword) {
            return (
                <EmailCheck
                    name="done-outline"
                    size={20}
                    style={{ color: 'green' }}
                />
            )
        }
        if (form.newPassword != form.konfirmPassword) {
            return (
                <EmailCheck
                    name="close"
                    size={20}
                    style={{ color: 'crimson' }}
                />
            )
        }
    }
    return (
        <View>
            <View style={styles.dataEmailContainer}>
                <View style={{ flex: 1, justifyContent: 'center', }}>
                    <Text style={styles.textStyle}>Kata sandi </Text>
                </View>
                <View style={styles.userInfoContainer}>
                    {/* <Text style={styles.DataStyle}>{userInfo.password} </Text> */}
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={ShowPasswordModal}>
                        <ArrowButtonNext
                            name="navigate-next"
                            size={35}
                            style={styles.arrowButtonStyle}
                        />
                    </TouchableOpacity>
                </View>

                <ModalPassword
                    animationIn='fadeInUp'
                    animationInTiming={1500}
                    animationOut='fadeOutDown'
                    animationOutTiming={1000}
                    isVisible={passwordModal}
                    style={{}}
                // hasBackdrop={false}
                >
                    <View style={styles.modalEmailSubContainer}>
                        <View style={styles.judulEmailContainer}>
                            <View style={{ flex: 0.5, }}>
                                <TouchableOpacity onPress={HidePasswordModal}>
                                    <BackArrow
                                        name='arrow-back-ios'
                                        size={23}
                                        style={{ color: '#9B51E0', marginLeft: 13 }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.judulEmailSubContainer}>
                                <Text style={styles.textJudulEmail}>Ganti Kata Sandi</Text>
                            </View>
                        </View>
                        <View style={styles.textInputEmailBaruContainer}>
                            <Input
                                placeholder="Kata sandi baru"
                                style={styles.textInputEmailBaruStyle}
                                value={form.newPassword}
                                onChangeText={(value) => onChangeText(value, 'newPassword')}
                                secureTextEntry
                            />

                        </View>
                        <View style={styles.textInputKonfirmasiEmailContainer}>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder="Konfirmasi kata sandi"
                                    style={styles.textInputKonfirmasiEmailStyle}
                                    value={form.konfirmPassword}
                                    onChangeText={(value) => onChangeText(value, 'konfirmPassword')}
                                    secureTextEntry
                                />
                            </View>
                            <View style={{ flex: 0.1, marginRight: 10, alignItems: 'flex-end', justifyContent: 'center', }}>
                                {checkPassword()}
                            </View>
                        </View>
                        <View style={styles.buttonGantiContainer}>
                            <TouchableOpacity onPress={() => GantiPassword()}>
                                <ButtonSelesai
                                    title="Ganti"
                                    // onPress={Selesai}
                                    size={22}
                                />
                            </TouchableOpacity>

                        </View>

                    </View>
                </ModalPassword>
            </View>
        </View >
    )
}

export default RubahPassword;

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
        fontSize: 14,
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
        fontSize: 14,
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
