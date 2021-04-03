import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';


const GantiEmail = () => {

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.newEmailContainer}>
                <TextInput
                    placeholder="Email baru"
                    keyboardType="email-address"
                    style={styles.newEmailStyle}
                />

            </View>
            <View style={styles.newEmailContainer}>
                <TextInput
                    placeholder="Konfirmasi email"
                    keyboardType="email-address"
                    style={styles.newEmailStyle}
                />

            </View>
        </SafeAreaView>
    );
};

export default GantiEmail;

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 20,
    },

    newEmailContainer: {
        borderWidth: 1,
        marginBottom: 20
    },

    newEmailStyle: {
        fontSize: 14,
        paddingHorizontal: 10,
    },
})