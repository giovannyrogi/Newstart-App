import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { useDispatch, useSelector } from 'react-redux';

import firebase from '../../../Config/Firebase';
import { ButtonNext } from '../../../Components';


const Air = ({ navigation }) => {


    const dispatch = useDispatch()
    const userId = useSelector(state => state.uid)
    const hasilAir = useSelector(state => state.resultAir)


    const [wotah, setWotahVisible] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const radioAir = [
        {
            label: "<" + wotah + " Liter",
            value: 50
        },
        {
            label: wotah + " Liter",
            value: 100
        },
        {
            label: ">" + wotah + " Liter",
            value: 50
        },

    ];

    const handleRadio = (value, get1liter, get2liter, get3liter) => {
        // alert(value)
        if (value == 50) {
            get1liter = value
            // alert('1 Liter : ' + get1liter)
            dispatch({ type: 'RESULT_AIR', value: get1liter });
        }
        if (value == 100) {
            get2liter = value
            // alert('2 Liter : ' + get2liter)
            dispatch({ type: 'RESULT_AIR', value: get2liter });
        }
        if (value == 50) {
            get3liter = value
            // alert('3 Liter : ' + get3liter)
            dispatch({ type: 'RESULT_AIR', value: get3liter });
        }
    }

    useEffect(() => {
        firebase.database().ref('users/' + userId + '/userResult/resultWater').get().then((snapshot) => {
            if (snapshot.exists) {

                // radioAir[1].label = snapshot;
                setWotahVisible(snapshot.val());
                console.log(snapshot);
            }

        })

    }, [])

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.subContainer}>
                <Text style={styles.textStyle}>Berapa banyak air yang sudah Anda konsumsi? <View></View>
                </Text>


                <View style={styles.radioFormContainer}>
                    <RadioForm
                        radio_props={radioAir}
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
            </View>
            <ButtonNext
                s title="Berikutnya"
                onPress={() => navigation.navigate('Sinar Matahari')}
                name="navigate-next"
                size={22}
            />
        </SafeAreaView>
    );

}

export default Air;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 32,
        marginHorizontal: 25,
    },

    subContainer: {
        borderTopWidth: 0.4,
        borderBottomWidth: 0.4,
        borderColor: '#757575',
        paddingVertical: 10,
    },

    buttonContainer: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#9B51E0',
        marginHorizontal: 135,
        marginVertical: 25
    },

    modalContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#757575',
    },

    radioFormContainer: {
        marginTop: 11,
    },

    textStyle: {
        fontSize: 18,
        letterSpacing: 0.5,
        textAlign: 'justify'
    },

    textStyle2: {
        fontSize: 18,
        color: '#2250F2',
        textDecorationLine: 'underline',
        textDecorationColor: '#000',
    },

    judulStyle: {
        fontSize: 30,
        textAlign: 'center',
        color: 'dodgerblue',
        marginVertical: 10
    },

    buttonBackStyle: {
        padding: 5
    },

    buttonTextStyle: {
        color: '#9B51E0',
        fontSize: 16,
    },


    radioLabelStyle: {
        fontSize: 15,
        letterSpacing: 0.3,
        marginRight: 20,
    },




})