import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
//import { homeImg2 } from '../../../../assets';


const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Welcome');
        }, 3000);
    });
    return (
        <View >
            <Text>Splash Screen </Text>
        </View>
    );
};

export default Splash;