import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Disease = () => {
    return (
        <Text style={styles.interDiseaseStyle}>Disease</Text>
    )
}

export default Disease;

const styles = StyleSheet.create({

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
})
