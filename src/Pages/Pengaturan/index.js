import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../../Config/Firebase';

class Pengaturan extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const Keluar = () => {
            firebase.auth().signOut().then(() => {
                // Sign-out successful.
                this.props.navigation.navigate('Login')
            }).catch((error) => {
                // An error happened.
            });
        }
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.textContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Akun Saya')}>
                        <Text style={styles.textStyle}>Akun Saya</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.textContainer2}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('TentangAplikasi')}>
                        <Text style={styles.textStyle}>Tentang Aplikasi</Text>
                    </TouchableOpacity>
                </View> */}
                <View style={styles.textContainer2}>
                    <TouchableOpacity onPress={Keluar}>
                        <Text style={styles.textStyle}>Keluar</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

export default Pengaturan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },

    textContainer: {
        borderBottomWidth: 1,
        borderColor: '#BDBDBD'
    },

    textContainer2: {
        marginTop: 17,
        borderBottomWidth: 1,
        borderColor: '#BDBDBD'
    },

    textStyle: {
        fontSize: 18,
        paddingBottom: 13,
        marginLeft: 20
    }

});