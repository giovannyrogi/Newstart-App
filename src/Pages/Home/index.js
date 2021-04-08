import React, { useState } from 'react';
import { View, Text, StyleSheet, BackHandler, SafeAreaView, Alert } from 'react-native';

import { ButtonNext } from '../../Components';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Home = ({ navigation }) => {

    const globalState = useSelector((state) => state);
    const resultNewstartF = useSelector(state => state.resultNewstart)
    // const [disease, setDisease] = useState('Disease')

    // ? Fungsi untuk back button agar saat di tekan akan keluar dari app
    const disableBackButton = () => {
        BackHandler.exitApp();
        return true;
    }
    const componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress', this.disableBackButton);
    }
    const componentWillUnMount = () => {
        BackHandler.removeEventListener('hardwareBackPress', this.disableBackButton);
    }

    // const Interpretasi = () => {

    //     if (resultNewstartF > 0 && resultNewstartF < 20) {
    //         { disease }
    //     }
    //     if (resultNewstartF >= 20 && resultNewstartF < 40) {
    //         { poorHealth }
    //     }
    //     if (resultNewstartF >= 40 && resultNewstartF < 60) {
    //         { neutral }
    //     }
    //     if (resultNewstartF >= 60 && resultNewstartF < 90) {
    //         { goodHealth }
    //     }
    //     if (resultNewstartF >= 90 && resultNewstartF < 100) {
    //         { optimumHealth }
    //     }
    // }

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.textTanggalStyle}>Tanggal</Text>
                <Text style={styles.textHasilStyle}>Hasil</Text>
                <Text style={styles.textPoinStyle}>{resultNewstartF}</Text>
                <Text style={styles.tingkatKesehatan}>Tingkat kesehatan Anda adalah </Text>


            </View>
            <View style={styles.container3}>

                <ButtonNext
                    title="Newstart Test"
                    onPress={() => navigation.navigate('Nutrisi')}
                />
            </View>
        </View>
    )
}

export default Home


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