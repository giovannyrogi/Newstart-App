import React, { Component } from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

import Senang from 'react-native-vector-icons/Ionicons';
import RadioForm from 'react-native-simple-radio-button';
import { ButtonSelesai } from '../../../Components';



const HatiSenang = ({ navigation }) => {

    var optHatiSenang = [
        { label: "Senang", value: 100 },
        { label: "Biasa saja", value: 50 },
        { label: "Sedih", value: 0 },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textStyle}>Bagaimana perasaan Anda ?</Text>
            <View style={styles.radioFormContainer}>
                <RadioForm
                    radio_props={optHatiSenang}
                    initial={-1}
                    onPress={(value) => alert('Nilai ' + value)}
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
                onPress={() => navigation.replace('Home')}
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