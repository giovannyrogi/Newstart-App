import React, { Component } from 'react';
import { View, Text, StyleSheet, BackHandler, SafeAreaView, TouchableOpacity } from 'react-native';

import { ButtonNext } from '../../Components';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // ? Fungsi untuk back button agar saat di tekan akan keluar dari app
    disableBackButton = () => {
        BackHandler.exitApp();
        return true;
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.disableBackButton);
    }
    componentWillUnMount() {
        BackHandler.removeEventListener('hardwareBackPress', this.disableBackButton);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container2}>

                    <Text style={styles.textTanggalStyle}>Tanggal</Text>
                    <Text style={styles.textHasilStyle}>Hasil</Text>
                    <Text style={styles.textPoinStyle}>89</Text>
                    <Text style={styles.tingkatKesehatan}>Tingkat kesehatan Anda adalah</Text>
                </View>
                <View style={styles.container3}>

                    <ButtonNext
                        title="Newstart Test"
                        onPress={() => this.props.navigation.navigate('Nutrisi')}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    container2: {
        flex: 0.9,
        backgroundColor: '#A393D0',
        borderBottomWidth: 2,
        borderColor: '#BDBDBD',
        elevation: 5,
    },

    container3: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',

    },

    textTanggalStyle: {
        fontSize: 14,
        color: '#FFFFFF',
        alignSelf: 'flex-end',
        top: 10,
        right: 25,
    },

    textHasilStyle: {
        textAlign: 'center',
        fontSize: 30,
        color: '#fff',
        fontFamily: 'Poppins-Bold',
        top: 15,
        letterSpacing: 1,
        textShadowOffset: {
            width: -1,
            height: 1.
        },
        textShadowColor: '#000',
        textShadowRadius: 5,
        elevation: 5,
    },

    textPoinStyle: {
        textAlign: 'center',
        fontSize: 30,
        color: '#fff',
        fontSize: 70,
        fontFamily: 'Poppins-Bold',
        textShadowOffset: {
            width: -2,
            height: 2.
        },
        textShadowColor: '#000',
        textShadowRadius: 10,
        elevation: 5,
        bottom: 10
    },

    tingkatKesehatan: {
        textAlign: 'center',
        fontSize: 15,
        color: '#fff',
        fontFamily: 'Poppins-Regular',
        letterSpacing: 1,
        bottom: 25,
        textShadowOffset: {
            width: -2,
            height: 1.
        },
        textShadowColor: '#000',
        textShadowRadius: 8,
    },

});