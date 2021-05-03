import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const OptimumHealth = () => {
    return (
        <Text style={styles.interOptimumHealthStyle}>Optimum Health</Text>
    )
}

export default OptimumHealth;

const styles = StyleSheet.create({

    interOptimumHealthStyle: {
        textAlign: 'center',
        fontSize: 15,
        color: '#7577dc',
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
