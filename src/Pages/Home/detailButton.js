import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import ImageZoom from 'react-native-image-pan-zoom';
import CloseIcon from 'react-native-vector-icons/Ionicons';

import { Interpretasi } from '../../../assets/'


const DetailButton = ({ navigation }) => {

    return (
        <View style={{ flex: 1, backgroundColor: '#303030' }}>
            <View style={{ flex: 1, backgroundColor: '#303030', }}>
                <TouchableOpacity style={{ marginLeft: 30, marginTop: 40 }} onPress={() => navigation.navigate('Home')}>
                    <CloseIcon
                        name='md-close-circle-outline'
                        size={30}
                        color='white'
                    />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                    <ImageZoom
                        cropWidth={400}
                        cropHeight={140}
                        imageWidth={400}
                        imageHeight={140}
                        style={{ backgroundColor: 'white' }}
                    >
                        <Image
                            style={styles.stretch}
                            source={Interpretasi}
                        />
                    </ImageZoom>
                </View>
            </View>
        </View >
    )
}

export default DetailButton;

const styles = StyleSheet.create({
    stretch: {
        width: 400,
        height: 140,
    },

})
