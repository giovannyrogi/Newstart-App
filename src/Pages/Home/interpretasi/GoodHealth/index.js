import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const GoodHealth = () => {
    return (
        <Text style={styles.interGoodHealthStyle}>Good Health</Text>
    )
}

export default GoodHealth;

const styles = StyleSheet.create({

    interGoodHealthStyle: {
        textAlign: 'center',
        fontSize: 15,
        color: 'teal',
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
