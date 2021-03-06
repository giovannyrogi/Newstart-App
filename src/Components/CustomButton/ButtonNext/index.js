import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonNextIcon from 'react-native-vector-icons/MaterialIcons';

const CustomButtonNext = ({ name, size, title, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
                <Text style={styles.textStyle}> {title} </Text>
                <ButtonNextIcon
                    style={styles.IconStyle}
                    name={name}
                    size={size}
                />
            </TouchableOpacity>
        </View>
    );
};

export default CustomButtonNext;

const styles = StyleSheet.create({
    container: {
        marginTop: 35,
        marginRight: 35,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },

    buttonStyle: {
        left: 20,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#9B51E0',
        borderRadius: 10,
    },

    textStyle: {
        paddingVertical: 6,
        paddingLeft: 5,
        color: '#9B51E0',
        fontSize: 15,
        fontWeight: '600',
        letterSpacing: 0.5,

    },

    IconStyle: {
        paddingRight: 5,
        alignSelf: 'center',
        color: '#9B51E0'
    }
})