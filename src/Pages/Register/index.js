import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: true,
            email: '',
            username: '',
            password: ''
        };
    }
    render() {
        return (
            <SafeAreaView style={styles.container1}>
                <Text style={styles.textStyle1}>Memulai ! </Text>
                <Text style={styles.textStyle2}>Buat akun untuk melanjutkan. </Text>

                <Text style={styles.textStyle3}>Email</Text>
                <TextInput
                    value={this.state.email}
                    style={styles.inputStyle1}
                    placeholder="Masukkan disini . . ."
                    onChangeText={(value) => this.setState({ email: value })}

                />
                <Text style={styles.textStyle3}>Username</Text>
                <TextInput
                    value={this.state.username}
                    style={styles.inputStyle2}
                    placeholder="Masukkan disini . . ."
                    onChangeText={(value) => this.setState({ username: value })}

                />
                <Text style={styles.textStyle4}>Password</Text>
                <TextInput
                    value={this.state.password}
                    style={styles.inputStyle3}
                    placeholder="Masukkan disini . . ."
                    onChangeText={(value) => this.setState({ password: value })}

                />

                <LinearGradient colors={['#A95EFA', '#8A49F7']} style={styles.buttonStyle}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('BMI')}>
                        <Text style={styles.tittleStyle}>Daftar</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={styles.container2}>
                    <Text style={styles.textStyle5}>Sudah punya akun ? </Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.buttonStyleDaftar}>Login</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        );
    }
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
        color: '#8F92A1'
    },

    textStyle4: {
        marginTop: 25,
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
        paddingHorizontal: 40,
        borderBottomWidth: 1,
        borderColor: '#8F92A1',
    },

    inputStyle2: {
        fontWeight: '500',
        lineHeight: 20,
        fontSize: 16,
        paddingHorizontal: 40,
        borderBottomWidth: 1,
        borderColor: '#8F92A1',
    },

    inputStyle3: {
        marginBottom: 97,
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