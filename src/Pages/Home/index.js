import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, BackHandler, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

import { ButtonNext } from '../../Components';
import { useDispatch, useSelector } from 'react-redux';
import firebase from '../../Config/Firebase';
import DatePickerTTL from './DatePickerTTL';

import IconCalori from 'react-native-vector-icons/Ionicons'
import IconBMI from 'react-native-vector-icons/FontAwesome5'


const Home = ({ navigation }) => {

    const userCalori = useSelector((state) => state.resultAllCalories);
    const resultNewstartF = useSelector(state => state.resultNewstart);
    const userId = useSelector(state => state.uid)

    const [dataNewstart, setDataNewstart] = useState('')
    const [dataHistory, setDataHistory] = useState('')

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


    //mengambil data yang ada di firebase realtime database
    useEffect(() => {
        // mengambil data kalori dan bmi
        firebase.database().ref('users/' + userId + '/userResult/').get().then((snapshot) => {
            if (snapshot.exists()) {
                setDataNewstart(snapshot.val())
                console.log(snapshot)
            }
        })
        // mengambil data riwayat(tanggal, hasil dan interpretasi)
        firebase.database().ref('users/' + userId + '/userHistory/').get().then((snapshot) => {
            if (snapshot.exists()) {
                setDataHistory(snapshot.val())
                console.log(snapshot)
            }
        })
            .catch(function (error) {
                console.log('Error : ' + error.message);
                throw error;
            });
    }, [])

    //menampilkan tingkat kesehatan jika hasil tidak kosong / 0
    const showInter = () => {
        if (resultNewstartF != 0) {
            return (
                <Text style={styles.tingkatKesehatan}>Tingkat kesehatan Anda adalah {inter()}</Text>
            )
        }
    }

    // menampilkan target kalori user
    const showCalori = (targetC) => {
        targetC = dataNewstart.resultKalori
        return (
            <View>
                <View style={styles.iconBMIContainer}>
                    <IconCalori
                        name="restaurant-outline"
                        size={60}
                    />
                    <Text style={styles.textIconKkal}>Kkal</Text>
                </View>
                <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                    <Text style={styles.textCalori}>{userCalori} / </Text>
                    <Text style={styles.textCaloriTarget}>{targetC}(Target)</Text>
                </View>
            </View>
        )
    }

    // menampilkan BMI user
    const showBMI = (userBMI) => {
        userBMI = dataNewstart.resultBMI
        return (
            <View>
                <View style={styles.iconBMIContainer}>
                    <IconBMI
                        name="weight"
                        size={60}
                    />
                    <Text style={styles.textIconBMIStyle}>BMI</Text>
                </View>
                <Text style={styles.textBMI}>{userBMI}</Text>
            </View >
        )
    }

    // mengganti tombol jika belum mengikuti test akan tampil Newstart Test, 
    // jika sudah mengikuti test akan tampil Test Lagi
    const switchButton = () => {
        if (resultNewstartF == 0) {
            return (
                <ButtonNext
                    title="Newstart Test"
                    onPress={() => navigation.navigate('Nutrisi')}
                />
            )
        }
        if (resultNewstartF > 0) {
            return (
                <ButtonNext
                    title="Test Lagi"
                    onPress={() => navigation.navigate('Nutrisi')}
                />
            )
        }
    }

    // menampilkan tingkat kesehatan sesuai hasil poin
    const inter = () => {
        if (resultNewstartF > 0 && resultNewstartF < 20) {
            // alert('Dari Disease : ' + result)
            return (<Text style={styles.interStyle}>Disease</Text>)
        }
        if (resultNewstartF >= 20 && resultNewstartF < 40) {
            // alert('Dari poorHealth : ' + result)
            return (<Text style={styles.interStyle}>Poor Health </Text>)
        }
        if (resultNewstartF >= 40 && resultNewstartF < 60) {
            // alert('Dari Neutral : ' + result)

            return (<Text style={styles.interStyle}>Neutral </Text>)
        }
        if (resultNewstartF >= 60 && resultNewstartF < 90) {
            // alert('Dari GoodHealth : ' + result)
            return (<Text style={styles.interStyle}>Good Health</Text>)
        }
        if (resultNewstartF >= 90 && resultNewstartF < 100) {
            // alert('Dari OptimumHealth : ' + result)
            return (<Text style={styles.interStyle}>Optimum Health</Text>)
        }
    }



    return (

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.container2}>
                    <View style={{ marginHorizontal: 6 }}>
                        <Text style={styles.tanggalStyle}></Text>
                        <Text style={styles.textHasilStyle}>HASIL</Text>
                        <Text style={styles.textPoinStyle}>{resultNewstartF}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            {showInter()}
                        </View>
                    </View>
                </View>
                <View style={styles.container3}>
                    <View style={styles.containerResultDate}>
                        <Text style={styles.textRiwayat}>Riwayat</Text>
                        <View style={styles.subJudulContainer}>
                            <Text style={styles.subDataJudul}>Tanggal</Text>
                            <Text style={styles.subDataJudul}>Hasil</Text>
                            <Text style={styles.subDataJudul}>Interpretasi</Text>
                        </View>
                        <View style={styles.dataResultContainer}>
                            <Text style={styles.dataStyle}>{dataHistory.Date} </Text>
                            <Text style={styles.dataStyle}>{dataHistory.newstartResult} </Text>
                            <Text style={styles.dataInterStyle}>{dataHistory.interpretasiResult} </Text>
                        </View>
                    </View>
                    <View style={styles.bmiAndCaloriContainer}>
                        <View style={styles.caloriAndBMISubContainer}>
                            {showCalori()}
                        </View>
                        <View style={styles.caloriAndBMISubContainer}>
                            {showBMI()}
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        {switchButton()}
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}

export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    container2: {
        flex: 0.8,
        backgroundColor: '#A393D0',
        borderBottomWidth: 2,
        borderColor: '#BDBDBD',
        elevation: 5,
    },

    container3: {
        flex: 1.5,
        marginHorizontal: 10,
    },

    containerResultDate: {
        marginTop: 30,
        borderWidth: 0.6,
        borderRadius: 10,
    },

    textRiwayat: {
        textAlign: 'center',
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        letterSpacing: 1,
        marginTop: 5,
    },

    subJudulContainer: {
        flexDirection: 'row',
        borderTopWidth: 0.6,
        borderBottomWidth: 0.6,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 3,
    },

    subDataJudul: {
        flex: 1,
        fontSize: 15,
        fontFamily: 'Poppins-Regular',
        textAlign: 'center'
    },

    dataResultContainer: {
        flexDirection: 'row'
    },

    dataStyle: {
        flex: 1,
        textAlign: 'center',
        marginBottom: 6,
        fontFamily: 'Poppins-Regular'
    },

    dataInterStyle: {
        flex: 1,
        textAlign: 'center',
        marginBottom: 6,
        fontFamily: 'Poppins-Regular'
    },

    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },


    tanggalStyle: {
        fontSize: 14,
        alignSelf: 'flex-end',
        right: 25,
    },

    textHasilStyle: {
        textAlign: 'center',
        fontSize: 30,
        color: '#fff',
        fontFamily: 'Poppins-Bold',
        marginBottom: 15,
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
        bottom: 35
    },

    interStyle: {
        textAlign: 'center',
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Poppins-Regular',
        letterSpacing: 1,
        bottom: 53.5,
        marginLeft: 5,
        textShadowOffset: {
            width: -2,
            height: 2.
        },
        textShadowColor: '#000',
        textShadowRadius: 8,
    },

    tingkatKesehatan: {
        textAlign: 'center',
        fontSize: 14,
        color: '#fff',
        fontFamily: 'Poppins-Regular',
        letterSpacing: 1,
        marginLeft: 10,
        bottom: 52,
        textShadowOffset: {
            width: -2,
            height: 2.
        },
        textShadowColor: '#000',
        textShadowRadius: 8,
    },

    bmiAndCaloriContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,

    },

    caloriAndBMISubContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 10
    },

    textCalori: {
        fontFamily: 'Roboto-Bold',
        textAlign: 'center',
        marginBottom: 10,
    },

    textCaloriTarget: {
        fontFamily: 'Roboto-Bold',
        color: '#9B51E0',
        textAlign: 'center',
        marginBottom: 10,
    },

    iconBMIContainer: {
        flex: 1,
        marginLeft: 25,
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    textIconBMIStyle: {
        marginLeft: 5,
        marginTop: 15,
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        textAlign: 'center'
    },

    textBMI: {
        fontFamily: 'Roboto-Bold',
        textAlign: 'center',
        marginBottom: 10,
        marginRight: 7
    },

    textIconKkal: {
        marginLeft: 5,
        marginTop: 15,
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        textAlign: 'center'
    }

});