import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Input = ({ placeholder, ...rest }) => {
    return (
        <TextInput
            style={styles.inputStyle}
            placeholder={placeholder}
            {...rest}
        />
    )
}

export default Input;

const styles = StyleSheet.create({
    inputStyle: {
        flex: 1,
        fontWeight: '500',
        lineHeight: 20,
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 16,
    },
})
