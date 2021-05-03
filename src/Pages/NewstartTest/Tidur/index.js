import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

import RadioForm from 'react-native-simple-radio-button';
import { ButtonNext } from '../../../Components';
import { useDispatch, useSelector } from 'react-redux';

const Tidur = ({ navigation }) => {

    const dispatch = useDispatch()
    const hasilTidur = useSelector(state => state.resultTidur)
    const [radioTidur, setRadioTidur] = useState([
        {
            label: "<7 Jam",
            value: 50
        },
        {
            label: "7-8 Jam",
            value: 100
        },
        {
            label: ">8 Jam",
            value: 50
        },

    ]);

    const handleRadio = (value, get7jamMin, get78jam, get8jamPlus) => {
        // alert(value)
        if (value == 50) {
            get7jamMin = value
            // alert('<7 Jam : ' + get7jamMin)
            dispatch({ type: 'RESULT_TIDUR', value: get7jamMin });
        }
        if (value == 100) {
            get78jam = value
            // alert('7-8 Jam : ' + get78jam)
            dispatch({ type: 'RESULT_TIDUR', value: get78jam });
        }
        if (value == 50) {
            get8jamPlus = value
            // alert('>8 Jam: ' + get8jamPlus)
            dispatch({ type: 'RESULT_TIDUR', value: get8jamPlus });
        }
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            {/* <Text>
                {hasilTidur}
            </Text> */}
            <Text style={styles.textStyle}>Berapa lama waktu Anda tidur?</Text>
            <View style={styles.radioFormContainer}>
                <RadioForm
                    radio_props={radioTidur}
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
                onPress={() => navigation.navigate('Hubungan Dengan Tuhan')}
                name="navigate-next"
                size={22}
            />
        </SafeAreaView>
    );
}

export default Tidur;

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
        marginRight: 20,
    },

    textStyle: {
        fontSize: 18,
        letterSpacing: 0.5,
    },
})