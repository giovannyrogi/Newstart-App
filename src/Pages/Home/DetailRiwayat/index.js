import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'

import firebase from '../../../Config/Firebase';
import RiwayatModal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import Data from './Data';
import BackArrow from 'react-native-vector-icons/MaterialIcons';

const DetailRiwayat = () => {

    const userId = useSelector(state => state.uid);
    const [modal, setModal] = useState(false);
    const [dataList, setDataList] = useState();



    useEffect(() => {
        const dataRef = firebase.database().ref('users/' + userId + '/userHistory/')
        dataRef.on('value', (snapshot) => {
            const data = snapshot.val();
            const dataList = [];
            for (let id in data) {
                dataList.push({ id, ...data[id] });
            }
            // console.log('data : ' + dataList);
            // console.log('snapshot : ' + data);
            setDataList(dataList);
        });
    }, []);

    const showModal = () => {
        setModal(true);
    }
    const hideModal = () => {
        setModal(false);
    }

    const handleRiwayat = () => {
        if (dataList != '') {
            return (
                <>
                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                        <View style={{ flex: 1.2, alignItems: 'center', }}>
                            <Text>Tanggal</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text>Jam</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text>Hasil</Text>
                        </View>
                        <View style={{ flex: 1.4, alignItems: 'center' }}>
                            <Text>Interpretasi</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>

                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        {dataList ? dataList.map((data, index) => <Data data={data} key={index} />) : ''}
                    </View>
                </>
            )
        }
        else {
            return (
                <View style={{ flex: 1, marginTop: 10, alignItems: 'center', justifyContent: 'center', borderTopWidth: 0.5, borderBottomWidth: 0.5 }}>
                    <Text style={{ fontWeight: '600' }}>Tidak ada data</Text>
                </View>
            )
        }
    }

    return (
        <View>
            <TouchableOpacity onPress={showModal} style={styles.buttonRiwayat}>
                {/* <Text> {userId} </Text> */}
                <Text style={styles.detailStyle}>LIHAT RIWAYAT TES</Text>
            </TouchableOpacity>
            <RiwayatModal
                animationIn='fadeInUp'
                animationInTiming={1500}
                animationOut='fadeOutDown'
                animationOutTiming={1000}
                hasBackdrop={true}
                isVisible={modal}
                onBackdropPress={hideModal}
            // style={styles.modalContainer}
            >
                <ScrollView style={styles.riwayatContainer}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ flex: 0.2, alignItems: 'flex-end', justifyContent: 'center', left: 5 }}>
                            <TouchableOpacity onPress={hideModal}>
                                <BackArrow
                                    name='arrow-back-ios'
                                    size={25}
                                    style={{ color: '#9B51E0' }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 2.2, alignItems: 'center', justifyContent: 'center', right: 15, top: 3 }}>
                            <Text style={styles.judulRiwayat}>Riwayat</Text>
                        </View>
                    </View>
                    {handleRiwayat()}
                </ScrollView>
            </RiwayatModal>
        </View>
    )
}

export default DetailRiwayat;

const styles = StyleSheet.create({
    detailStyle: {
        color: '#9B51E0',
        // color: 'dodgerblue',
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        letterSpacing: 0.8,
        color: '#9B51E0'
    },

    riwayatContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 15,
    },

    judulRiwayat: {
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        letterSpacing: 0.8,
        color: '#9B51E0'
    },

    buttonRiwayat: {
        bottom: 14,
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderColor: '#9B51E0',
        backgroundColor: 'white',
    },

    cardContainer: {
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
})
