import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import RadioForm from 'react-native-simple-radio-button';
import Modal from 'react-native-modal';
import { ButtonNext } from '../../../Components';
import { useDispatch, useSelector } from 'react-redux';

const SinarMatahari = ({ navigation }) => {

    const dispatch = useDispatch()
    const hasilSinarMatahari = useSelector(state => state.resultSinarMatahari)
    const [isModalVisible, setModalVisible] = useState(false);
    const [radioSinarMatahari, setRadioSinarMatahari] = useState([
        {
            label: "None",
            value: 0,

        },
        {
            label: "15 Menit",
            value: 100
        },
        {
            label: ">15 Menit",
            value: 75
        },
        {
            label: "<15 Menit",
            value: 50
        }
    ]);

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    const handleRadio = (value, getNoneValue, get15Minute, get15mPlus, get15mMin) => {
        // alert(value)
        if (value == 100) {
            get15Minute = value
            // alert('15 Menit : ' + get15Minute)
            dispatch({ type: 'RESULT_SINAR_MATAHARI', value: get15Minute });
        }
        if (value == 75) {
            get15mPlus = value
            // alert('Diatas 15 Menit : ' + get15mPlus)
            dispatch({ type: 'RESULT_SINAR_MATAHARI', value: get15mPlus });
        }
        if (value == 50) {
            get15mMin = value
            // alert('Dibawah 15 Menit : ' + get15mMin)
            dispatch({ type: 'RESULT_SINAR_MATAHARI', value: get15mMin });
        }
        if (value == 0) {
            getNoneValue = value
            // alert('None : ' + getNoneValue)
            dispatch({ type: 'RESULT_SINAR_MATAHARI', value: getNoneValue });
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View  >
                <View>
                    {/* <Text>
                        {hasilSinarMatahari}
                    </Text> */}
                    <Text style={styles.textStyle}>Berapa lama Anda berjemur dibawah
                    sinar matahari pagi(10:00-15:00)?</Text>

                </View>
                <View style={styles.radioFormContainer}>
                    <RadioForm
                        radio_props={radioSinarMatahari}
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
                    onPress={() => navigation.navigate('Pengendalian Diri')}
                    name="navigate-next"
                    size={22}
                />
            </View>
        </View>
    );
}

export default SinarMatahari;

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
        lineHeight: 25
    },
})