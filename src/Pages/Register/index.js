import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, Alert, ScrollView } from 'react-native';
import firebase from '../../Config/Firebase';
import LinearGradient from 'react-native-linear-gradient';

import DaftarIcon from 'react-native-vector-icons/MaterialIcons';
import EmailIcon from 'react-native-vector-icons/Fontisto';
import UsernameIcon from 'react-native-vector-icons/AntDesign';
import PasswordIcon from 'react-native-vector-icons/Feather';
import EyeIconShow from 'react-native-vector-icons/Entypo';
import EyeIconHide from 'react-native-vector-icons/Entypo';
import { Input } from '../../Components';
import { useDispatch, useSelector } from 'react-redux';


const Register = ({ navigation }) => {

    const dispatch = useDispatch();
    const globalState = useSelector((state) => state)
    const [SecureTextEntry, setSecureTextEntry] = useState(true)
    // const [UserKey, setUserKey] = useState(true)
    const [form, setForm] = useState({
        email: '',
        username: '',
        password: ''
    });

    const onChangeText = (value, input) => {
        setForm({
            ...form,
            [input]: value,
        });
    };

    const ShowSecureTextEntry = () => {
        setSecureTextEntry(SecureTextEntry ? false : true)

    }

    const switchIcon = () => {
        if (SecureTextEntry == false) {
            return (
                <EyeIconShow
                    name="eye"
                    size={25}
                />
            )
        }
        if (SecureTextEntry == true) {
            return (
                <EyeIconHide
                    name="eye-with-line"
                    size={25}
                />
            )
        }
    }

    const Daftar = () => {
        firebase.auth().createUserWithEmailAndPassword(form.email, form.password)
            .then((dataDiterima) => {
                // Signed in
                dispatch({ type: 'SET_UID', value: dataDiterima.user.uid });
                firebase.database().ref('users/' + dataDiterima.user.uid + '/userInfo/').set({
                    username: form.username,
                    email: form.email,
                });
                navigation.navigate('DataProfil');

            })
            .catch((error) => {

                var errorCode = error.code;
                var errorMessage = error.message;
                Alert.alert(errorCode, errorMessage);
                // ..
            });
    }


    return (
        <View style={styles.container1}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.textStyle1}>Memulai. </Text>
                <Text style={styles.textStyle2}>Buat akun untuk melanjutkan ! </Text>

                {/* Text input email  */}
                <Text style={styles.textStyle3}>Email</Text>
                <View style={styles.emailContainer}>
                    <EmailIcon
                        name="email"
                        size={24}
                    />
                    <Input
                        placeholder="Masukkan disini . . ."
                        value={form.email}
                        onChangeText={(value) => onChangeText(value, 'email')}
                        keyboardType="email-address"
                    />

                </View>

                {/* Text input username  */}
                <Text style={styles.textStyle4}>Username</Text>
                <View style={styles.usernameContainer}>
                    <UsernameIcon
                        name="user"
                        size={25}
                    />
                    <Input
                        value={form.username}
                        style={styles.inputStyle1}
                        placeholder="Masukkan disini . . ."
                        onChangeText={(value) => onChangeText(value, 'username')}
                        keyboardType="email-address"
                    />
                </View >

                {/* Text input password  */}
                <Text style={styles.textStyle4}>Password</Text>
                <View style={styles.passwordContainer}>
                    <PasswordIcon
                        name="lock"
                        size={25}
                    />
                    <Input
                        placeholder="Masukkan disini . . ."
                        value={form.password}
                        onChangeText={(value) => onChangeText(value, 'password')}
                        secureTextEntry={SecureTextEntry}
                    />
                    <TouchableOpacity
                        onPress={() => ShowSecureTextEntry()}
                    >
                        {switchIcon()}
                    </TouchableOpacity>
                </View>

                {/* Button daftar  */}
                <LinearGradient colors={['#A95EFA', '#8A49F7']} style={styles.buttonStyle}>
                    <TouchableOpacity style={styles.containerButton}
                        onPress={Daftar}>
                        <Text style={styles.tittleStyle}>Daftar</Text>
                        <DaftarIcon
                            name="login"
                            size={24}
                            color="#fff"
                            style={{ left: 120, }} />
                    </TouchableOpacity>
                </LinearGradient>

                {/* Button Login  */}
                <View style={styles.container2}>
                    <Text style={styles.textStyle5}>Sudah punya akun ? </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.buttonStyleDaftar}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >
    )
}

export default Register;

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        marginHorizontal: 27,
    },

    container2: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    emailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#8F92A1',
    },

    usernameContainer: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#8F92A1',
    },

    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#8F92A1',
        marginBottom: 97
    },

    containerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textStyle1: {
        marginTop: 52,
        fontWeight: 'bold',
        fontSize: 24,
        letterSpacing: -0.8,
        color: '#171717'

    },

    textStyle2: {
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 0.4,
        opacity: 1,
        color: '#171717'
    },

    textStyle3: {
        marginTop: 47,
        fontWeight: 'bold',
        fontSize: 13,
        letterSpacing: 0.8,
        lineHeight: 16,
        color: '#9B51E0'
    },

    textStyle4: {
        marginTop: 40,
        fontWeight: 'bold',
        fontSize: 13,
        letterSpacing: 0.8,
        lineHeight: 16,
        color: '#9B51E0'
    },

    buttonStyle: {
        borderRadius: 30,
        padding: 10,
    },

    tittleStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: 1,
        textTransform: 'uppercase',
        lineHeight: 20,
        color: '#FFFFFF',
    },

    inputStyle1: {
        flex: 1,
        fontWeight: '500',
        lineHeight: 20,
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 16,
    },

    textStyle5: {
        textAlign: 'center',
        paddingTop: 9,
        fontSize: 16,
        lineHeight: 18,

    },

    buttonStyleDaftar: {
        color: '#2F80ED',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 16,
        paddingTop: 9,
        lineHeight: 18,

    }
});