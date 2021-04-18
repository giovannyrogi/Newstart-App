import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import firebase from '../../../Config/Firebase';
import ModalEmail from 'react-native-modal';
import ArrowButtonNext from 'react-native-vector-icons/MaterialIcons';
import EmailCheck from 'react-native-vector-icons/MaterialIcons';
import { ButtonSelesai, Input } from '../../../Components';
import { useDispatch, useSelector } from 'react-redux';
import BackArrow from 'react-native-vector-icons/MaterialIcons';

const RubahEmail = () => {


    const userId = useSelector(state => state.uid)

    const [emailModal, setEmailModal] = useState(false);
    const [userInfo, setUserInfo] = useState('')
    const [form, setForm] = useState({
        newEmail: '',
        konfirmEmail: ''
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

    const ShowEmailModal = () => {
        setEmailModal(true);
    };

    const HideEmailModal = () => {
        setEmailModal(false);
    };



    const onChangeText = (value, input) => {
        setForm({
            ...form,
            [input]: value,
        });
    };

    const GantiEmail = () => {

        if (form.newEmail == form.konfirmEmail && form.newEmail != '') {
            // firebase.database().ref('users/' + userId + '/userInfo/').update({
            //     email: form.newEmail
            // });
            // setEmailModal(false);
            alert('Sedang dalam tahap pengembangan')
        }
        if (form.newEmail == '') {
            alert('Email tidak boleh kosong.')
        }

    }


    const checkEmail = () => {
        if (form.konfirmEmail != '') {
            return (
                emailVisibility()
            )
        }
    }

    const emailVisibility = () => {
        if (form.newEmail == form.konfirmEmail) {
            return (
                <EmailCheck
                    name="done-outline"
                    size={20}
                    style={{ color: 'green' }}
                />
            )
        }
        if (form.newEmail != form.konfirmEmail) {
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
                    <Text style={styles.textStyle}>Email </Text>
                </View>
                <View style={styles.userInfoContainer}>
                    <Text style={styles.DataStyle}>{userInfo.email} </Text>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={ShowEmailModal}>
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
                    isVisible={emailModal}
                    style={{}}
                // hasBackdrop={false}
                >
                    <View style={styles.modalEmailSubContainer}>
                        <View style={styles.judulEmailContainer}>
                            <View style={{ flex: 0.5, }}>
                                <TouchableOpacity onPress={HideEmailModal}>
                                    <BackArrow
                                        name='arrow-back-ios'
                                        size={23}
                                        style={{ color: '#9B51E0', marginLeft: 13 }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.judulEmailSubContainer}>
                                <Text style={styles.textJudulEmail}>Ganti Email</Text>
                            </View>
                        </View>
                        <View style={styles.textInputEmailBaruContainer}>
                            <Input
                                placeholder="Email baru . . ."
                                style={styles.textInputEmailBaruStyle}
                                value={form.newEmail}
                                onChangeText={(value) => onChangeText(value, 'newEmail')}
                            // keyboardType="email"
                            />

                        </View>
                        <View style={styles.textInputKonfirmasiEmailContainer}>
                            <View style={{ flex: 1 }}>
                                <Input
                                    placeholder="Konfirmasi email baru . . ."
                                    style={styles.textInputKonfirmasiEmailStyle}
                                    value={form.konfirmEmail}
                                    onChangeText={(value) => onChangeText(value, 'konfirmEmail')}
                                />
                            </View>
                            <View style={{ flex: 0.1, marginRight: 10, alignItems: 'flex-end', justifyContent: 'center', }}>
                                {checkEmail()}
                            </View>
                        </View>
                        <View style={styles.buttonGantiContainer}>
                            <TouchableOpacity onPress={() => GantiEmail()}>
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

export default RubahEmail;

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
