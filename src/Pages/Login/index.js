import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';


import firebase from '../../Config/Firebase';
import LoginIcon from 'react-native-vector-icons/MaterialIcons';
import UsernameIcon from 'react-native-vector-icons/AntDesign';
import PasswordIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import EyeIconShow from 'react-native-vector-icons/Entypo';
import EyeIconHide from 'react-native-vector-icons/Entypo';
import { Input } from '../../Components';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';


const Login = ({ navigation }) => {

    const dispatch = useDispatch();



    const [SecureTextEntry, setSecureTextEntry] = useState(true)
    const [form, setForm] = useState({
        email: '',
        username: '',
        password: ''
    });

    const Masuk = () => {
        firebase.auth().signInWithEmailAndPassword(form.email, form.password)
            .then((dataDiterima) => {
                // Signed in
                dispatch({ type: 'SET_UID', value: dataDiterima.user.uid })
                navigation.replace('Home')
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                Alert.alert(errorCode, errorMessage);
            });

        //untuk set global state semua newstart test menjadi 0;
        // const refreshAll = 0;

        // dispatch({ type: 'RESULT_ISI_PIRINGKU', value: refreshAll })
        // dispatch({ type: 'SUM_CALORIES_MKN_PAGI', value: refreshAll })
        // dispatch({ type: 'SUM_CALORIES_MKN_SIANG', value: refreshAll })
        // dispatch({ type: 'SUM_CALORIES_MKN_MALAM', value: refreshAll })
        // dispatch({ type: 'SUM_ALL_CALORIES', value: refreshAll })
        // dispatch({ type: 'RESULT_NUTRISI', value: refreshAll })
        // dispatch({ type: 'RESULT_OLAHRAGA', value: refreshAll })
        // dispatch({ type: 'RESULT_AIR', value: refreshAll })
        // dispatch({ type: 'RESULT_SINAR_MATAHARI', value: refreshAll })
        // dispatch({ type: 'RESULT_PENGENDALIAN_DIRI', value: refreshAll })
        // dispatch({ type: 'RESULT_UDARA_SEGAR', value: refreshAll })
        // dispatch({ type: 'RESULT_TIDUR', value: refreshAll })
        // dispatch({ type: 'RESULT_HUB_DGN_TUHAN', value: refreshAll })
        // dispatch({ type: 'RESULT_HATI_SENANG', value: refreshAll })
        // dispatch({ type: 'RESULT_NEWSTART', value: refreshAll })
    }


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

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container1}>

                <Text style={styles.textStyle1}>Ayo masuk ! </Text>
                <Text style={styles.textStyle2}>Selamat datang, silahkan login. </Text>

                {/* Text input email  */}
                <Text style={styles.textStyle3}>Email</Text>
                <View style={styles.usernameContainer}>
                    <UsernameIcon
                        name="user"
                        size={25}
                    />
                    <Input
                        placeholder="Masukkan disini . . ."
                        value={form.email}
                        onChangeText={(value) => onChangeText(value, 'email')}
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

                {/* Button login  */}
                <LinearGradient colors={['#A95EFA', '#8A49F7']} style={styles.buttonStyle}>
                    <TouchableOpacity style={styles.containerButton}

                        onPress={Masuk}>
                        <Text style={styles.tittleStyle}>Login</Text>

                        <LoginIcon
                            name="login"
                            size={24}
                            color="#fff"
                            style={{ left: 120, }} />
                    </TouchableOpacity>
                </LinearGradient>

                {/* Button daftar  */}
                <View style={styles.container2}>
                    <Text style={styles.textStyle5}>Tidak punya akun ? </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.buttonStyleDaftar}>Daftar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}





export default Login;

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
        marginBottom: 131
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
        marginTop: 60,
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

    inputStyle2: {
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