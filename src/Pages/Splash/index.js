import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

import { IconSplash } from '../../../assets';
import { splashBG } from '../../../assets';
import LinearGradient from 'react-native-linear-gradient';


const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Welcome');
        }, 5000);
    });
    return (

        <LinearGradient colors={['#355C7D', '#6C5B7B', '#C06C84']} style={styles.iconContainer}>
            <View>
                <Image source={IconSplash} style={styles.iconStyle} />
            </View>
        </LinearGradient>

    );
};

export default Splash;

const styles = StyleSheet.create({
    iconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconStyle: {
        width: 200,
        height: 200,

    }


});