import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PoorHealth = () => {
    return (
        <Text style={styles.interPoorHealthStyle}>Poor Health</Text>
    )
}

export default PoorHealth;

const styles = StyleSheet.create({

    interPoorHealthStyle: {
        textAlign: 'center',
        fontSize: 15,
        color: '#e3c53c',
        fontFamily: 'Roboto-Bold',
        letterSpacing: 1,
        textShadowOffset: {
            width: -0.5,
            height: 0.5,
        },
        textShadowColor: '#757575',
        textShadowRadius: 1,
    },
})
