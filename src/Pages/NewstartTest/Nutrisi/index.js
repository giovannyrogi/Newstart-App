import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';

import { ButtonNext } from '../../../Components/';
import IconPlus from 'react-native-vector-icons/Entypo';

import firebase from '../../../Config/Firebase';
import { useDispatch, useSelector } from 'react-redux';
import MakanPagi from './MakanPagi';
import MakanSiang from './MakanSiang';
import MakanMalam from './MakanMalam';
import IsiPiringkuTest from './IsiPiringkuTest/';


const Nutrisi = ({ navigation }) => {


    const dispatch = useDispatch();
    //memanggil state global dan menyimpan ke state lokal
    const sumGlobalCaloriMknPagi = useSelector((state) => state.resultCaloriMakanPagi)
    const sumGlobalCaloriMknSiang = useSelector((state) => state.resultCaloriMakanSiang)
    const sumGlobalCaloriMknMalam = useSelector((state) => state.resultCaloriMakanMalam)
    const resultKeseluruhanKalori = useSelector((state) => state.resultAllCalories)

    const isiPiringkuResult = useSelector((state) => state.resultIsiPiringku)
    const TotalPerhitunganNutrisi = useSelector((state) => state.resultNutrisi)

    const userId = useSelector((state) => state.uid)

    const [hasilKalori, setHasilKalori] = useState(0)
    const [targetCalori, setTargetCalori] = useState(0)

    const handleSum = (sum, newResultCalori, totalKeseluruhan) => {
        sum = sumGlobalCaloriMknPagi + sumGlobalCaloriMknSiang + sumGlobalCaloriMknMalam;
        // alert('Total Kalori keseluruhan : ' + sum)
        dispatch({ type: 'SUM_ALL_CALORIES', value: sum });

        if (isiPiringkuResult != 0) {
            if (sum == targetCalori) {
                newResultCalori = 50;
                // alert('Poin : ' + newResultCalori)
            }
            if (sum <= targetCalori && sum != 0) {
                newResultCalori = 30;
                // alert('Poin: ' + newResultCalori)
            }
            if (sum >= targetCalori) {
                newResultCalori = 30;
                // alert('Poin : ' + newResultCalori)
            }

            totalKeseluruhan = newResultCalori + isiPiringkuResult;
            dispatch({ type: 'RESULT_NUTRISI', value: totalKeseluruhan });
            setHasilKalori(newResultCalori);
        }

        //menghindari error jika sum dan totalkeseluruhan bernilai null atau 0
        if (sum == 0) {
            sum = 0;
            totalKeseluruhan = 0;
            // alert('sum : ' + sum);
            // alert('totalKeseluruhan : ' + sum);
        }
        navigation.navigate('Olahraga');
    }

    //mengambil data kalori user dari firebase realtime database
    useEffect(() => {
        firebase.database().ref('users/' + userId + '/userResult/resultKalori').get().then((snapshot) => {
            if (snapshot.exists) {
                setTargetCalori(snapshot.val());
                console.log('Snapshot : ' + snapshot);

            }
        })


    }, [])

    return (

        <View style={styles.maincontainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text>Total calori makan pagi : {sumGlobalCaloriMknPagi}</Text>
                <Text>Total Calori makan siang: {sumGlobalCaloriMknSiang}</Text>
                <Text>Total Calori makan malam: {sumGlobalCaloriMknMalam}</Text>
                <Text>Total Calori keselurahan: {resultKeseluruhanKalori}</Text>
                <Text>Isi Piringku Poin: {isiPiringkuResult}</Text>
                <Text>Hasil Poin Kalori : {hasilKalori}</Text>
                <Text>Total keseluruhan Nutrisi : {TotalPerhitunganNutrisi}</Text>
                <Text>Calori target dari database : {targetCalori}</Text>
                {/* instruksi */}
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


                {/* Button berikutnya */}
                <View style={styles.buttonNextContainer}>
                    <ButtonNext
                        title="Berikutnya"
                        onPress={() => handleSum()}
                        name="navigate-next"
                        size={22}

                    />
                </View>
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

    buttonNextContainer: {
        marginBottom: 30
    },

    IsiPiringkuContainer: {
        borderTopWidth: 1,
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
