import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import CardView from 'react-native-cardview'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ArticleIcon from 'react-native-vector-icons/Ionicons'
import { IsiPiringku } from '../../../assets/'

const Artikel = ({ navigation }) => {

    return (

        <View style={styles.mainContainer}>
            <View style={styles.IsiPiringkuMainContainer}>
                <View style={styles.isiPiringkuSubContainer}>
                    <CardView
                        cardElevation={20}
                        cardMaxElevation={20}
                        cornerRadius={10}
                        style={{ marginBottom: 30, flexDirection: 'row', flex: 1, }}
                    >
                        <View style={styles.gambarIsiPiringkuContainer}>
                            <Image
                                style={styles.gambarArtikel}
                                source={IsiPiringku}
                            />
                        </View>
                        <View style={{ flex: 1, marginLeft: 8, marginTop: 5, }}>
                            <Text style={styles.judulIsiPiringku}>Isi Piringku</Text>
                            <Text style={styles.contentIsiPiringku}>Isi Piringku adalah sebuah pedoman yang
                            dibuat oleh pemerintah Indonesia untuk  memberi pemahaman kepada . . .
                        </Text>
                        </View>
                        <View style={styles.buttonReadContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate('Isi Piringku')} style={{ alignItems: 'center', }}>
                                <ArticleIcon
                                    name="reader-outline"
                                    size={30}
                                    style={{ color: '#000' }}
                                />
                                <Text style={{ color: '#000' }}>Detail</Text>
                            </TouchableOpacity>

                        </View>
                    </CardView>
                </View>


                <View style={{ flex: 0.5, }}>
                    <Text></Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <Text></Text>
            </View>

        </View>
    )
}

export default Artikel

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 10
    },

    IsiPiringkuMainContainer: {
        flex: 1,
    },

    isiPiringkuSubContainer: {
        flex: 0.5,
        flexDirection: 'row',
        marginHorizontal: 10,
    },

    gambarIsiPiringkuContainer: {
        justifyContent: 'center',
    },

    contentIsiPiringku: {
        color: '#000',
        textAlign: 'justify',
        fontFamily: 'Roboto-Reguler',
        letterSpacing: 0.5,
        lineHeight: 17,
    },

    gambarArtikel: {
        width: 80,
        height: 80,
        borderRadius: 15,
        marginLeft: 10
    },

    judulIsiPiringku: {
        color: '#9B51E0',
        fontSize: 15,
        fontFamily: 'Roboto-Bold',
        letterSpacing: 0.5,
        textAlign: 'center',
        marginBottom: 2,
    },

    buttonReadContainer: {
        flex: 0.3,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 0.5,
    },

})
