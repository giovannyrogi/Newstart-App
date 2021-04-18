import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

import { IconSplash } from '../../../assets';
import { splashBG } from '../../../assets';
import { IconSplash2 } from '../../../assets';
import LinearGradient from 'react-native-linear-gradient';


const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Welcome');
        }, 3000);
    });
    return (

        <View style={styles.iconContainer}>
            <Image source={IconSplash} style={styles.iconStyle} />
        </View>

        // <LinearGradient colors={['#757F9A', '#D7DDE8']} style={styles.iconContainer}>
        // </LinearGradient>

    );
};

export default Splash;

const styles = StyleSheet.create({
    iconContainer: {
        // backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconStyle: {
        width: 350,
        height: 350,
        left: 8,
        marginRight: 16,
    }


});