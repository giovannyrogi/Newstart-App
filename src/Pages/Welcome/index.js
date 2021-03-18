import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';

import { BG, Logo } from '../../../assets';
import ActionButton from './ActionButton'



const Welcome = ({ navigation }) => {
    const handleGoTo = screen => {
        navigation.navigate(screen)
    }
    return (
        <ImageBackground source={BG} style={styles.ImgBackgroundStyle}>
            <View style={styles.container}>
                <Image source={Logo} style={styles.imgStyle} />
                <Text style={styles.textStyle1}>NEWSTART</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.textStyle2}>Selamat datang!</Text>
                <Text style={styles.textStyle3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                <ActionButton
                    title="Mulai"
                    onPress={() => handleGoTo('Login')}
                />
            </View>

        </ImageBackground>

    );
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    container2: {
        flex: 1,
        justifyContent: 'flex-end',
        marginLeft: 25,
        marginRight: 25,
        //backgroundColor: '#000'
    },

    ImgBackgroundStyle: {
        width: '100%',
        height: '100%',
    },

    imgStyle: {
        marginTop: 95,
        marginBottom: 5,
    },

    textStyle1: {
        color: 'white',
        fontSize: 55,
        fontWeight: 'bold',
        letterSpacing: 2,
        textShadowOffset: {
            width: 2,
            height: 3.
        },
        textShadowColor: '#000',
        textShadowRadius: 15
    },

    textStyle2: {
        color: '#FFFFFF',
        fontSize: 36,
        fontWeight: 'bold',
        letterSpacing: 2
    },

    textStyle3: {
        marginBottom: 43,
        color: '#FFFFFF',
        fontSize: 15,
    }

});