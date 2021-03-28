import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

import { ButtonNext } from '../../../Components';

const SinarMatahari = ({ navigation }) => {

    var optSinarMatahari = [
        { label: "None", value: 0 },
        { label: "15 Menit", value: 100 },
        { label: ">15 Menit", value: 50 },
        { label: "<15 Menit", value: 50 },
    ];

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View >
                <View>
                    <Text style={styles.textStyle}>Berapa lama Anda berjemur dibawah sinar matahari?</Text>

                </View>
                <View style={styles.radioFormContainer}>
                    <RadioForm
                        radio_props={optSinarMatahari}
                        initial={-1}
                        onPress={(value) => alert('Nilai ' + value)}
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
        </SafeAreaView>
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
        marginRight: 35,
    },

    textStyle: {
        fontSize: 18,
        letterSpacing: 0.5,
    },
})