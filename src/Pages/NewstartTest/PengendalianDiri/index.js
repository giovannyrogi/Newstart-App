import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import RadioForm from 'react-native-simple-radio-button';
import { ButtonNext } from '../../../Components';
import { useDispatch, useSelector } from 'react-redux';





const PengendalianDiri = ({ navigation }) => {

    const dispatch = useDispatch()
    const hasilPengendalianDiri = useSelector(state => state.resultPengendalianDiri)
    const [radioPengendalianDiri, setRadioPengendalianDiri] = useState([
        {
            id: '1',
            label: 'Yes',
            value: 0
        },
        {
            id: '2',
            label: 'No',
            value: 100
        },
    ]);

    const handleRadio = (value, getYesValue, getNoValue) => {
        // alert(value)
        if (value == 0) {
            getYesValue = value
            alert('Senang : ' + getYesValue)
            dispatch({ type: 'RESULT_PENGENDALIAN_DIRI', value: getYesValue });
        }
        if (value == 100) {
            getNoValue = value
            alert('Biasa Saja : ' + getNoValue)
            dispatch({ type: 'RESULT_PENGENDALIAN_DIRI', value: getNoValue });
        }

    }

    return (
        <View style={styles.container}>
            <Text>Nilai Global : {hasilPengendalianDiri}</Text>
            <Text style={styles.textStyle}>Apakah Anda seorang perokok/perokok pasif atau mengkonsumsi kafein/alkohol?</Text>
            <View style={styles.radioFormContainer}>
                <RadioForm
                    radio_props={radioPengendalianDiri}
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

            <ButtonNext
                title="Berikutnya"
                onPress={() => navigation.navigate('Udara Segar')}
                name="navigate-next"
                size={22}
            />
        </View>
    )
}

export default PengendalianDiri

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