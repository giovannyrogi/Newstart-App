import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, BackHandler, TouchableOpacity, ScrollView } from 'react-native';

import firebase from '../../Config/Firebase';

import IconCalori from 'react-native-vector-icons/Ionicons'
import IconBMI from 'react-native-vector-icons/FontAwesome5'
import CardView from 'react-native-cardview'
import { ButtonNext } from '../../Components';
import { useDispatch, useSelector } from 'react-redux';

const Home = ({ navigation }) => {

    const dispatch = useDispatch()
    const userCalori = useSelector((state) => state.resultAllCalories);
    const resultNewstartF = useSelector(state => state.resultNewstart);
    const userId = useSelector(state => state.uid)

    const [dataHistory, setDataHistory] = useState('')
    const [dataNewstart, setDataNewstart] = useState('')


    const getKey = Object.keys(dataHistory)

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
                // console.log(snapshot)
            }

        })
        // mengambil data riwayat(tanggal, hasil dan interpretasi)
        firebase.database().ref('users/' + userId + '/userHistory/').orderByKey().limitToLast(3)
            .get().then((snapshot) => {
                if (snapshot.exists()) {
                    setDataHistory(snapshot.val())
                    console.log(snapshot)
                }
            }).catch(function (error) {
                console.log('Error : ' + error.message);
                throw error;
            });
    }, [])





    // menampilkan Interpretasi bedasarkan hasil yang didapatkan oleh user
    const showInter = () => {
        if (resultNewstartF != 0) {
            return (
                <View style={styles.subInterpretasiContainer1} >
                    <View style={styles.subInterpretasiContainer2}>
                        <Text style={styles.textInteStyle}>Tingkat Kesehatan Anda :</Text>
                        <CardView
                            cardElevation={15}
                            cardMaxElevation={20}
                            cornerRadius={8}
                            style={styles.cardContainer}
                        >
                            <View style={styles.subCardContainer}>
                                <Text > {inter()}</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('ButtonDetail')} style={{ alignItems: 'center' }}>
                                    <Text style={styles.textButtonDetail}>(Detail)</Text>
                                </TouchableOpacity>
                            </View>
                        </CardView>
                    </View>

                </View>
            )
        }
    }

    // menampilkan tingkat kesehatan sesuai hasil poin
    const inter = () => {
        if (resultNewstartF > 0 && resultNewstartF < 20) {
            // alert('Dari Disease : ' + result)
            return (<Text style={styles.interDiseaseStyle}>Disease</Text>)
        }
        if (resultNewstartF >= 20 && resultNewstartF < 40) {
            // alert('Dari poorHealth : ' + result)
            return (<Text style={styles.interPoorHealthStyle}>Poor Health </Text>)
        }
        if (resultNewstartF >= 40 && resultNewstartF < 60) {
            // alert('Dari Neutral : ' + result)
            return (<Text style={styles.interNeutralStyle}>Neutral </Text>)
        }
        if (resultNewstartF >= 60 && resultNewstartF < 90) {
            // alert('Dari GoodHealth : ' + result)
            return (<Text style={styles.interGoodHealthStyle}>Good Health</Text>)
        }
        if (resultNewstartF >= 90 && resultNewstartF < 100) {
            // alert('Dari OptimumHealth : ' + result)
            return (<Text style={styles.interOptimumHealthStyle}>Optimum Health</Text>)

        }
    }

    //mengambil data tanggal dari firebase
    const renderDataDate = () => {
        return (
            <View >
                {
                    getKey.map((item) => (
                        <Text key={item} style={styles.dataStyle}>{dataHistory[item].Date}</Text>
                    ))
                }
            </View>
        )
    }

    //mengambil data jam dari firebase
    const renderDataTime = () => {
        return (
            <View >
                {
                    getKey.map((item) => (
                        <Text key={item} style={styles.dataStyle}>{dataHistory[item].Time}</Text>
                    ))
                }
            </View>
        )
    }

    //mengambil data hasil dari firebase
    const renderDataHasil = () => {
        return (
            <View >
                {
                    getKey.map((item) => (
                        <Text key={item} style={styles.dataStyle}>{dataHistory[item].newstartResult}</Text>
                    ))
                }
            </View>
        )
    }

    //mengambil data interpretasi dari firebase
    const renderDataInterpretasi = () => {
        return (
            <View >
                {
                    getKey.map((item) => (
                        <Text key={item} style={styles.dataStyle}>{dataHistory[item].interpretasiResult}</Text>
                    ))
                }
            </View>
        )
    }

    const handleButton = () => {
        //untuk reset data makanan/kalori pada page nutrisi
        const refreshSelectedDataFoodMknPagi = [];
        const refreshselectedDataCaloriesMknPagi = [];
        const refreshtotalCaloriesMknPagi = 0;
        dispatch({ type: 'SELECTED_FOOD_MKN_PAGI', value: refreshSelectedDataFoodMknPagi });
        dispatch({ type: 'SELECTED_CALORI_MKN_PAGI', value: refreshselectedDataCaloriesMknPagi });
        dispatch({ type: 'HASIL_CALORI_MKN_PAGI', value: refreshtotalCaloriesMknPagi });

        //untuk reset data makanan/kalori pada page nutrisi
        const refreshselectedDataFoodMknSiang = [];
        const refreshselectedDataCaloriesMknSiang = [];
        const refreshtotalCaloriesMknSiang = 0;
        dispatch({ type: 'SELECTED_FOOD_MKN_SIANG', value: refreshselectedDataFoodMknSiang });
        dispatch({ type: 'SELECTED_CALORI_MKN_SIANG', value: refreshselectedDataCaloriesMknSiang });
        dispatch({ type: 'HASIL_CALORI_MKN_SIANG', value: refreshtotalCaloriesMknSiang });

        //untuk reset data makanan/kalori pada page nutrisi
        const refreshselectedDataFoodMknMalam = [];
        const refreshselectedDataCaloriesMknMalam = [];
        const refreshtotalCaloriesMknMalam = 0;
        dispatch({ type: 'SELECTED_FOOD_MKN_MALAM', value: refreshselectedDataFoodMknMalam });
        dispatch({ type: 'SELECTED_CALORI_MKN_MALAM', value: refreshselectedDataCaloriesMknMalam });
        dispatch({ type: 'HASIL_CALORI_MKN_MALAM', value: refreshtotalCaloriesMknMalam });

        navigation.navigate('Nutrisi')
    }

    //mengganti tombol saat hasil == 0 atau !=0
    const switchButton = () => {

        if (resultNewstartF == 0) {
            return (
                <View>

                    <ButtonNext
                        title="Newstart Test"
                        onPress={() => handleButton()}
                    />

                </View>

            )

        }
        if (resultNewstartF > 0) {
            return (
                <ButtonNext
                    title="Test Lagi"
                    onPress={() => handleButton()}
                />
            )
        }

    }

    //Menampilkan Interpretasi BMI sesuai perhitungan dari userBMI
    const interpretasiBMI = () => {
        if (dataNewstart.resultBMI < 18.5) {
            return (
                <Text>Kurus</Text>
            )
        }
        if (dataNewstart.resultBMI > 18.5 && dataNewstart.resultBMI < 22.9) {
            return (
                <Text>Normal</Text>
            )
        }
        if (dataNewstart.resultBMI > 23 && dataNewstart.resultBMI < 24.9) {
            return (
                <Text>Resiko Gemuk</Text>
            )
        }
        if (dataNewstart.resultBMI > 25 && dataNewstart.resultBMI < 29.9) {
            return (
                <Text>Obesitas I</Text>
            )
        }
        if (dataNewstart.resultBMI > 25 && dataNewstart.resultBMI < 29.9) {
            return (
                <Text>Obesitas II</Text>
            )
        }
    }

    {/* menampilkan user kalori perhari dan target kalori */ }
    const showCalori = () => {
        return (
            <View style={{ flex: 1, }}>
                <CardView
                    cardElevation={15}
                    cardMaxElevation={15}
                    cornerRadius={15}
                    style={styles.cardContainer2}
                >
                    <View style={styles.iconContainer}>
                        <IconCalori
                            name="restaurant-outline"
                            size={65}
                            style={{ marginLeft: 25 }}
                        />
                        <Text style={styles.textIcon}>Kkal</Text>
                    </View>
                    <View style={styles.targetCaloriContainer}>
                        <Text style={styles.userCalori}>{userCalori} / </Text>
                        <Text style={styles.userTargetCalori}>{dataNewstart.resultKalori}(Target)</Text>
                    </View>
                </CardView>
            </View>
        )
    }

    {/* menampilkan data BMI user dan Interpretasi BMI */ }
    const showBMI = () => {
        return (
            <View style={{ flex: 1, }}>
                <CardView
                    cardElevation={15}
                    cardMaxElevation={15}
                    cornerRadius={15}
                    style={styles.cardContainer2}
                >
                    <View style={styles.iconContainer}>
                        <IconBMI
                            name="weight"
                            size={65}
                            style={{ marginLeft: 25 }}
                        />
                        <Text style={styles.textIcon}>BMI</Text>
                    </View>
                    <View style={styles.targetCaloriContainer}>
                        <Text style={styles.textInterStyle}>{interpretasiBMI()} / </Text>
                        <Text style={styles.userBMIStyle}>{dataNewstart.resultBMI}</Text>
                    </View>
                </CardView>
            </View>
        )
    }


    return (
        <View style={styles.mainContainer}>
            <View style={styles.subContainer1}>
                <View style={styles.resultContainer}>
                    <Text style={styles.textHasilStyle}>HASIL</Text>
                    <Text style={styles.textPoinStyle}>{resultNewstartF}</Text>
                </View>
                <View style={styles.interMainContainer}>
                    {showInter()}
                </View>
            </View>
            <View style={styles.subContainer2}>
                <Text style={styles.judulRiwayat}>Riwayat</Text>
                <View style={{ flex: 0.9, marginTop: 15, }}>
                    <CardView
                        cardElevation={15}
                        cardMaxElevation={15}
                        cornerRadius={15}
                        style={styles.riwayatCardContainer}
                    >
                        <View style={styles.riwayatSubContainer}>
                            <View style={styles.subJudulContainer}>
                                <Text style={styles.textSubJudulStyle}>Tanggal</Text>
                            </View >
                            <View style={styles.subJudulContainer}>
                                <Text style={styles.textSubJudulStyle}>Jam</Text>
                            </View>
                            <View style={styles.subJudulContainer}>
                                <Text style={styles.textSubJudulStyle}>Hasil</Text>
                            </View>
                            <View style={styles.subJudulInterContainer}>
                                <Text style={styles.textSubJudulStyle}>Interpretasi</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                            <View style={styles.dataContainer}>
                                {renderDataDate()}
                            </View>
                            <View style={styles.dataContainer}>
                                {renderDataTime()}
                            </View>
                            <View style={styles.dataContainer}>
                                {renderDataHasil()}
                            </View>
                            <View style={styles.dataInterContainer}>
                                {renderDataInterpretasi()}
                            </View>
                        </View>
                    </CardView>
                </View>
                <View style={styles.caloriAndBMIContainer}>
                    {/* menampilkan user kalori perhari dan target kalori */}
                    {showCalori()}

                    {/* menampilkan data BMI user dan Interpretasi BMI */}
                    {showBMI()}
                </View>
                <View style={styles.buttonContainer}>
                    {switchButton()}
                </View>
            </View>
        </View >
    )
}

export default Home;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#A393D0'
    },

    subContainer1: {
        flex: 0.5,
        // backgroundColor: 'pink'

    },

    subContainer2: {
        flex: 1.2,
        backgroundColor: '#F5F5F5',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        borderTopWidth: 0.7,
        borderColor: '#303030',
        elevation: 30,
    },

    caloriAndBMIContainer: {
        flex: 1,
        flexDirection: 'row',
        top: 15
    },

    interMainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        marginBottom: 8
    },

    subInterpretasiContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    subInterpretasiContainer2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    cardContainer2: {
        flex: 1,
        marginHorizontal: 13
    },

    iconContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    textIcon: {
        alignSelf: 'center',
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        marginTop: 5,
        left: 5,
    },

    targetCaloriContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    textInterStyle: {
        textAlign: 'center',
        fontFamily: 'Roboto-Bold'
    },

    userBMIStyle: {
        textAlign: 'center',
        fontFamily: 'Roboto-Bold'
    },

    userCalori: {
        textAlign: 'center',
        fontFamily: 'Roboto-Bold',
        color: '#9B51E0',
    },

    userTargetCalori: {
        fontFamily: 'Roboto-Bold',
        color: 'green',
        textAlign: 'center',
    },

    resultContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textHasilStyle: {
        marginTop: 30,
        fontSize: 30,
        color: '#fff',
        fontFamily: 'Poppins-Bold',
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
        marginTop: -28,
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
    },

    judulRiwayat: {
        textAlign: 'center',
        fontFamily: 'Roboto-Regular',
        letterSpacing: 0.8,
        color: '#303030',
        fontSize: 20,
        marginTop: 5
    },

    cardContainer: {
        paddingVertical: 2,
        paddingHorizontal: 4,
        elevation: 20,
    },

    subCardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    interGoodHealthStyle: {
        textAlign: 'center',
        fontSize: 15,
        color: 'teal',
        fontFamily: 'Roboto-Bold',
        letterSpacing: 1,
        textShadowOffset: {
            width: -1,
            height: 0.5,
        },
        textShadowColor: '#757575',
        textShadowRadius: 1,
    },

    interNeutralStyle: {
        textAlign: 'center',
        fontSize: 15,
        color: '#0fb542',
        fontFamily: 'Roboto-Bold',
        letterSpacing: 1,
        textShadowOffset: {
            width: -1,
            height: 0.5,
        },
        textShadowColor: '#757575',
        textShadowRadius: 1,
    },

    interDiseaseStyle: {
        textAlign: 'center',
        fontSize: 15,
        color: 'crimson',
        fontFamily: 'Roboto-Bold',
        letterSpacing: 1,
        textShadowOffset: {
            width: -1,
            height: 0.5,
        },
        textShadowColor: '#757575',
        textShadowRadius: 1,
    },

    interOptimumHealthStyle: {
        textAlign: 'center',
        fontSize: 15,
        color: '#7577dc',
        fontFamily: 'Roboto-Bold',
        letterSpacing: 1,
        textShadowOffset: {
            width: -1,
            height: 0.5,
        },
        textShadowColor: '#757575',
        textShadowRadius: 1,
    },

    interPoorHealthStyle: {
        textAlign: 'center',
        fontSize: 15,
        color: '#e3c53c',
        fontFamily: 'Roboto-Bold',
        letterSpacing: 1,
        textShadowOffset: {
            width: -0.5,
            height: 0.5,
        },
        textShadowColor: '#757575',
        textShadowRadius: 1,
    },

    interContainer: {
        flexDirection: 'row',
    },

    textInteStyle: {
        marginRight: 10,
        textAlign: 'center',
        fontSize: 15,
        color: '#fff',
        fontFamily: 'Roboto-Bold',
        letterSpacing: 0.8,
    },

    textButtonDetail: {
        color: 'dodgerblue',
        marginLeft: 2.5,
        letterSpacing: 0.5,
        fontFamily: 'Roboto-Bold'
    },

    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 12,
        marginBottom: 30
    },

    riwayatCardContainer: {
        flex: 1,
        marginBottom: 10,
        marginHorizontal: 15,
    },

    riwayatSubContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 0.8,
        borderColor: '#757575',
        marginBottom: 3,
    },

    subJudulContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 5,
    },

    subJudulInterContainer: {
        flex: 1.5,
        alignItems: 'center',
        marginTop: 5,
    },

    textSubJudulStyle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#000',
        right: 4,
    },

    dataContainer: {
        flex: 1,
        alignItems: 'center',
        marginLeft: 3,
    },

    dataInterContainer: {
        flex: 1.5,
        alignItems: 'center',
    },

    dataStyle: {
        padding: 1,
        textAlign: 'center',
        right: 4,
    },
})
