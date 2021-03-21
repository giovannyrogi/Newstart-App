import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import LoginIcon from 'react-native-vector-icons/MaterialIcons';
import UsernameIcon from 'react-native-vector-icons/AntDesign';
import PasswordIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: true,
            username: '',
            password: ''
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container1}>
                <Text style={styles.textStyle1}>Ayo masuk ! </Text>
                <Text style={styles.textStyle2}>Selamat datang, silahkan login. </Text>

                {/* Text input username  */}
                <Text style={styles.textStyle3}>Username atau Email</Text>
                <View style={styles.usernameContainer}>
                    <UsernameIcon
                        name="user"
                        size={25}
                    />
                    <TextInput
                        value={this.state.username}
                        style={styles.inputStyle1}
                        placeholder="Masukkan disini . . ."
                        onChangeText={(value) => this.setState({ username: value })}

                    />
                </View >

                {/* Text input password  */}
                <Text style={styles.textStyle4}>Password</Text>
                <View style={styles.passwordContainer}>
                    <PasswordIcon
                        name="lock"
                        size={25}
                    />
                    <TextInput
                        value={this.state.password}
                        style={styles.inputStyle2}
                        placeholder="Masukkan disini . . ."
                        onChangeText={(value) => this.setState({ password: value })}
                        secureTextEntry
                    />
                </View>

                {/* Button login  */}
                <LinearGradient colors={['#A95EFA', '#8A49F7']} style={styles.buttonStyle}>
                    <TouchableOpacity style={styles.containerButton}
                        onPress={() => this.props.navigation.replace('Home')}>
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
                        onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={styles.buttonStyleDaftar}>Daftar</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
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