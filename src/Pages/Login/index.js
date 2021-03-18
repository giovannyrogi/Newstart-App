import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
                <Text style={styles.textStyle3}>Username atau Email</Text>
                <TextInput
                    value={this.state.username}
                    style={styles.inputStyle1}
                    placeholder="Masukkan disini . . ."
                    onChangeText={(value) => this.setState({ username: value })}

                />
                <Text style={styles.textStyle3}>Password</Text>
                <TextInput
                    value={this.state.password}
                    style={styles.inputStyle2}
                    placeholder="Masukkan disini . . ."
                    onChangeText={(value) => this.setState({ password: value })}
                    secureTextEntry
                />

                <LinearGradient colors={['#A95EFA', '#8A49F7']} style={styles.buttonStyle}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.tittleStyle}>Login</Text>
                    </TouchableOpacity>
                </LinearGradient>
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
        //backgroundColor: 'green',
        marginHorizontal: 27,
    },

    container2: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        //backgroundColor: 'green',
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
        color: '#8F92A1'
    },

    textStyle4: {
        marginTop: 40,
        fontWeight: 'bold',
        fontSize: 13,
        letterSpacing: 0.8,
        lineHeight: 16,
        color: '#8F92A1'
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
        fontWeight: '500',
        lineHeight: 20,
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderBottomWidth: 1,
        borderColor: '#8F92A1',
    },

    inputStyle2: {
        marginBottom: 131,
        fontWeight: '500',
        lineHeight: 20,
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderBottomWidth: 1,
        borderColor: '#8F92A1',
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