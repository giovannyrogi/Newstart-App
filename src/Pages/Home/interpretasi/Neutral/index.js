import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Neutral = () => {
    return (
        <Text style={styles.interNeutralStyle}>Neutral</Text>
    )
}

export default Neutral;

const styles = StyleSheet.create({

    interNeutralStyle: {
        textAlign: 'center',
        fontSize: 15,
        color: '#0fb542',
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
