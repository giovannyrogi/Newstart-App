import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

import firebase from '../../../Config/Firebase/';
import Senang from 'react-native-vector-icons/Ionicons';
import RadioForm from 'react-native-simple-radio-button';
import { ButtonSelesai } from '../../../Components';
import { useDispatch, useSelector } from 'react-redux';



const HatiSenang = ({ navigation }) => {

    const dispatch = useDispatch()
    const Nutrisi = useSelector((state) => state.resultNutrisi)
    const Olahraga = useSelector((state) => state.resultOlahraga)
    const Water = useSelector((state) => state.resultAir)
    const SinarMatahari = useSelector((state) => state.resultSinarMatahari)
    const PengendalianDiri = useSelector((state) => state.resultPengendalianDiri)
    const UdaraSegar = useSelector((state) => state.resultUdaraSegar)
    const Tidur = useSelector((state) => state.resultTidur)
    const HubunganDgnTuhan = useSelector((state) => state.resultHubunganDgnTuhan)
    const hasilHatiSenang = useSelector(state => state.resultHatiSenang)
    const resultNewstartF = useSelector(state => state.resultNewstart)
    const userId = useSelector(state => state.uid)

    const [disease, setDisease] = useState('Disease');
    const [poorHealth, setPoorHealth] = useState('Poor Health');
    const [neutral, setNeutral] = useState('Neutral');
    const [goodHealth, setGoodHealth] = useState('Good Health');
    const [optimumHealth, setOptimumHealth] = useState('Optimum Health');

    const [currentDate, setCurrentDate] = useState('')
    const [currentTime, setCurrentTime] = useState('')
    const [radioHatiSenang, setRadioHatiSenang] = useState([
        {
            label: "Senang",
            value: 100
        },
        {
            label: "Biasa Saja",
            value: 75
        },
        {
            label: "Sedih",
            value: 50
        },
    ]);

    const handleSum = (result) => {
        result = (Nutrisi * 25 / 100) + (Olahraga * 15 / 100) + (Water * 10 / 100)
            + (SinarMatahari * 5 / 100) + (PengendalianDiri * 5 / 100) + (UdaraSegar * 5 / 100)
            + (Tidur * 15 / 100) + (HubunganDgnTuhan * 10 / 100) + (hasilHatiSenang * 10 / 100);
        dispatch({ type: 'RESULT_NEWSTART', value: result });

        if (result > 0 && result < 20) {
            // alert('Dari Disease : ' + result)

            firebase.database().ref('users/' + userId + '/userHistory/').push({
                Date: currentDate,
                Time: currentTime,
                newstartResult: result,
                interpretasiResult: disease
            });
        }
        if (result >= 20 && result < 40) {
            // alert('Dari poorHealth : ' + result)
            firebase.database().ref('users/' + userId + '/userHistory/').push({
                Date: currentDate,
                Time: currentTime,
                newstartResult: result,
                interpretasiResult: poorHealth
            });
        }
        if (result >= 40 && result < 60) {
            // alert('Dari Neutral : ' + result)
            firebase.database().ref('users/' + userId + '/userHistory/').push({
                Date: currentDate,
                Time: currentTime,
                newstartResult: result,
                interpretasiResult: neutral
            });
        }
        if (result >= 60 && result < 90) {
            // alert('Dari GoodHealth : ' + result)
            firebase.database().ref('users/' + userId + '/userHistory/').push({
                Date: currentDate,
                Time: currentTime,
                newstartResult: result,
                interpretasiResult: goodHealth
            });
        }
        if (result >= 90 && result < 100) {
            // alert('Dari OptimumHealth : ' + result)
            firebase.database().ref('users/' + userId + '/userHistory/').push({
                Date: currentDate,
                Time: currentTime,
                newstartResult: result,
                interpretasiResult: optimumHealth
            });
        }



        // alert(result);
        navigation.replace('Home');
    }

    const handleRadio = (value, getSenang, getBiasaSaja, getSedih) => {
        // alert(value)

        if (value == 100) {
            getSenang = value
            // alert('Senang : ' + getSenang)
            dispatch({ type: 'RESULT_HATI_SENANG', value: getSenang });
        }
        if (value == 75) {
            getBiasaSaja = value
            // alert('Biasa Saja : ' + getBiasaSaja)
            dispatch({ type: 'RESULT_HATI_SENANG', value: getBiasaSaja });
        }
        if (value == 50) {
            getSedih = value
            // alert('Sedih: ' + getSedih)
            dispatch({ type: 'RESULT_HATI_SENANG', value: getSedih });
        }
    }


    useEffect(() => {
        var date = new Date().getDate() // current Date
        var month = new Date().getMonth() + 1 //current Month
        var year = new Date().getFullYear() //current Year
        var hours = new Date().getHours() //current Hours
        var min = new Date().getMinutes() //current Minutes
        var sec = new Date().getSeconds() //current Seconds
        setCurrentDate(date - 1 + '/' + month + '/' + year)
        setCurrentTime(hours + ':' + min + ':' + sec)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            {/* <Text>Nilai Global Hati Senang: {hasilHatiSenang}</Text>
            <Text>Nilai Newstart : {resultNewstartF}</Text>
            <Text>Date : {currentTime}</Text> */}
            <Text style={styles.textStyle}>Bagaimana perasaan Anda ?</Text>
            <View style={styles.radioFormContainer}>
                <RadioForm
                    radio_props={radioHatiSenang}
                    initial={-1}
                    onPress={(value) => handleRadio(value)}
                    formHorizontal={true}
                    selectedButtonColor={'#9B51E0'}
                    selectedLabelColor={'#9B51E0'}
                    buttonColor={'#757575'}
                    buttonSize={12}
                    labelStyle={styles.radioLabelStyle}
                />
            </View>

            <ButtonSelesai
                title="Selesai"
                onPress={() => handleSum()}
                name="checkmark-done"
                size={22}
            />
        </SafeAreaView>
    );
}

export default HatiSenang;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 32,
        marginHorizontal: 25,
    },

    radioFormContainer: {
        marginTop: 11,
    },

    radioLabelStyle: {
        fontSize: 15,
        letterSpacing: 0.3,
        marginRight: 35,
    },

    textStyle: {
        fontSize: 18,
        letterSpacing: 0.5,
    },
})