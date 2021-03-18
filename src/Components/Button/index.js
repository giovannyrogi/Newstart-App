import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';



const Button = ({ title, onPress }) => {
    return (
        <View >

            <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
                <Text style={styles.tittleStyle}> {title} </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;

const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 30,
        backgroundColor: '#FFF',
        padding: 10,
        marginBottom: 32,
    },

    tittleStyle: {
        fontFamily: 'Open Sans',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#212529'
    },


});