import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import DisclaimerContent from './DisclaimerContent'

const Disclaimer = () => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.mainContainer}
        >
            <DisclaimerContent />
        </ScrollView>
    )
}

export default Disclaimer;

const styles = StyleSheet.create({

    mainContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
})

