import React, { Component } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

import { ButtonNext } from '../../../Components';



const PengendalianDiri = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text>PengendalianDiri Screen</Text>
            <ButtonNext
                title="Berikutnya"
                onPress={() => navigation.navigate('Udara Segar')}
                name="navigate-next"
                size={22}
            />
        </SafeAreaView>
    );
}

export default PengendalianDiri;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,

    }
})