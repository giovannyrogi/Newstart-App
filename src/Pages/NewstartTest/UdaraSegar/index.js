import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

import RadioForm from 'react-native-simple-radio-button';
import { ButtonNext } from '../../../Components';
import { useDispatch, useSelector } from 'react-redux';

const UdaraSegar = ({ navigation }) => {

    const dispatch = useDispatch()
    const hasilUdaraSegar = useSelector(state => state.resultUdaraSegar)
    const [radioUdaraSegar, setUdaraSegar] = useState([
        {
            label: "None",
            value: 0
        },
        {
            label: "15 Menit",
            value: 100
        },
        {
            label: "15 >Menit",
            value: 75
        },
        {
            label: "15 <Menit",
            value: 50
        }
    ]);

    const handleRadio = (value, getNoneValue, get15Minute, get15mPlus, get15mMin) => {
        // alert(value)
        if (value == 100) {
            get15Minute = value
            alert('15 Menit : ' + get15Minute)
            dispatch({ type: 'RESULT_UDARA_SEGAR', value: get15Minute });
        }
        if (value == 75) {
            get15mPlus = value
            alert('Diatas 15 Menit : ' + get15mPlus)
            dispatch({ type: 'RESULT_UDARA_SEGAR', value: get15mPlus });
        }
        if (value == 50) {
            get15mMin = value
            alert('Dibawah 15 Menit : ' + get15mMin)
            dispatch({ type: 'RESULT_UDARA_SEGAR', value: get15mMin });
        }
        if (value == 0) {
            getNoneValue = value
            alert('None : ' + getNoneValue)
            dispatch({ type: 'RESULT_UDARA_SEGAR', value: getNoneValue });
        }
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text> Nilai Global {hasilUdaraSegar}</Text>
            <Text style={styles.textStyle}>Berapa lama Anda telah menghirup udara segar?</Text>
            <View style={styles.radioFormContainer}>
                <RadioForm
                    radio_props={radioUdaraSegar}
                    initial={-1}
                    onPress={(value) => handleRadio(value)}
                    formHorizontal={false}
                    selectedButtonColor={'#9B51E0'}
                    selectedLabelColor={'#9B51E0'}
                    buttonColor={'#757575'}
                    buttonSize={12}
                    labelStyle={styles.radioLabelStyle}
                />
            </View>

            <ButtonNext
                title="Berikutnya"
                onPress={() => navigation.navigate('Tidur')}
                name="navigate-next"
                size={22}
            />
        </SafeAreaView>
    );
}

export default UdaraSegar;

const styles = StyleSheet.create({
    mainContainer: {
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