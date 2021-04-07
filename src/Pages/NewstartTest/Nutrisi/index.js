import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';

import { ButtonNext } from '../../../Components/';
import IconPlus from 'react-native-vector-icons/Entypo';

import { useDispatch, useSelector } from 'react-redux';
import MakanPagi from './MakanPagi';
import MakanSiang from './MakanSiang';
import MakanMalam from './MakanMalam';
import IsiPiringkuTest from './IsiPiringkuTest/';


const Nutrisi = ({ navigation }) => {

    const dispatch = useDispatch();
    const sumGlobalCaloriMknPagi = useSelector((state) => state.resultCaloriMakanPagi)
    const sumGlobalCaloriMknSiang = useSelector((state) => state.resultCaloriMakanSiang)
    const sumGlobalCaloriMknMalam = useSelector((state) => state.resultCaloriMakanMalam)
    const resultKeseluruhan = useSelector((state) => state.resultAllCalories)
    const isiPiringkuResult = useSelector((state) => state.resultIsiPiringku)

    const handleSum = () => {
        const sum = sumGlobalCaloriMknPagi + sumGlobalCaloriMknSiang + sumGlobalCaloriMknMalam;
        alert(sum)
        dispatch({ type: 'SUM_ALL_CALORIES', value: sum });
    }

    return (

        <View style={styles.maincontainer}>
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* instruksi */}
                <Text>Total calori makan pagi : {sumGlobalCaloriMknPagi}</Text>
                <Text>Total Calori makan siang: {sumGlobalCaloriMknSiang}</Text>
                <Text>Total Calori makan malam: {sumGlobalCaloriMknMalam}</Text>
                <Text>Total Calori keselurahan: {resultKeseluruhan}</Text>
                <Text>Isi Piringku Poin: {isiPiringkuResult}</Text>
                <View style={styles.textNoteContainer}>
                    <Text style={{ fontSize: 15 }}>Silahkan tekan</Text>
                    <IconPlus
                        name='circle-with-plus'
                        size={25}
                        style={styles.plusIconStyle}
                    />
                    <Text style={{ fontSize: 15, marginLeft: 10 }}>untuk menambahkan makanan</Text>

                </View>

                {/* Makan pagi, makan siang dan makan malam */}
                <View>
                    <MakanPagi />
                    <MakanSiang />
                    <MakanMalam />
                </View>

                {/* Isi Piringku */}
                <IsiPiringkuTest />

                <ButtonNext
                    title="Berikutnya"
                    onPress={() => handleSum()}
                    name="navigate-next"
                    size={22}

                />
            </ScrollView>
        </View>

    );

}

export default Nutrisi;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        marginHorizontal: 25,
        marginTop: 20,
    },

    textNoteContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    plusIconStyle: {
        color: '#9B51E0',
        marginLeft: 10
    },


})
