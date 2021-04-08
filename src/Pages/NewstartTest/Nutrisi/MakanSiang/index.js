import React, { useState } from 'react'

import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import ModalMakanSiang from 'react-native-modal';
import { ButtonNext } from '../../../../Components';
import ButtonIconSelesai from 'react-native-vector-icons/Ionicons';
import IconPlus from 'react-native-vector-icons/Entypo';
import BackArrow from 'react-native-vector-icons/MaterialIcons';
import UpArrow from 'react-native-vector-icons/MaterialIcons';
import DownArrow from 'react-native-vector-icons/MaterialIcons';
import dataMakananPokok from '../dataMakanan/dataMakananPokok';
import dataBuahBuahan from '../dataMakanan/dataBuah';
import dataLaukPauk from '../dataMakanan/dataLaukPauk';
import dataSayur from '../dataMakanan/dataSayur';
import { useDispatch, useSelector } from 'react-redux';


const MakanSiang = () => {

    const [MakananPokok, setMakananPokok] = useState(dataMakananPokok);
    const [laukPauk, setLaukPauk] = useState(dataLaukPauk);
    const [buahBuahan, setBuahBuahan] = useState(dataBuahBuahan);
    const [sayur, setSayur] = useState(dataSayur);
    const [selectedDataFood, setSelectedDataFood] = useState('');
    const [selectedDataCalories, setSelectedDataCalories] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [show, setShow] = useState({
        showDataMakanSiang: true,
    });

    const dispatch = useDispatch();
    const sumGlobalCalori = useSelector((state) => state.resultCaloriMakanSiang)

    const HideModalMakanSiang = () => {
        setShowModal(false)
    }

    const ShowModalMakanSiang = () => {
        setShowModal(true)
    }

    const hideShowDaftarMakanan = () => {
        setShow({ showDataMakanSiang: !show.showDataMakanSiang })
    };

    const dropdownArrow = () => {
        if (show.showDataMakanSiang == true) {
            return (
                <DownArrow
                    name="keyboard-arrow-down"
                    size={30}
                    style={{ alignSelf: 'flex-end', marginRight: 5, color: '#9B51E0' }}
                />
            )
        }
        else {
            return (
                <UpArrow
                    name="keyboard-arrow-up"
                    size={30}
                    style={{ alignSelf: 'flex-end', marginRight: 5, color: '#9B51E0' }}
                />
            )
        }
    }

    const renderMakanSiang = () => {

        dispatch({ type: 'SUM_CALORIES_MKN_SIANG', value: totalCalories });
        if (selectedDataFood != '' && selectedDataCalories != 0) {
            return (
                <View style={{ backgroundColor: '#DEDDDD' }}>
                    <View style={{ flexDirection: 'row', marginBottom: 5, marginTop: 8 }}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Bold' }}>Nama Makanan</Text>
                            {selectedDataFood.map((item, id) => (

                                <Text key={id} style={{ fontSize: 15 }}>{item}</Text>
                            ))}
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={{ marginRight: 25, fontFamily: 'Poppins-Bold' }}>Kalori</Text>
                            {selectedDataCalories.map((item, id) => (
                                <Text key={id} style={{ marginRight: 35, fontSize: 15 }}>{item}</Text>
                            ))}
                        </View>
                    </View>
                    <View style={{ borderTopWidth: 1, flexDirection: 'row' }}>
                        <Text style={{ flex: 4, textAlign: 'right', fontFamily: 'Poppins-Bold', paddingVertical: 5 }}>Total </Text>
                        <Text style={{ left: 2, flex: 1.4, textAlign: 'center', fontFamily: 'Poppins-Bold', paddingVertical: 5 }}>{totalCalories}</Text>
                    </View>

                </View>

            )
        }
    }

    // untuk menampilkan data makanan pokok di modal
    const renderDataMakananPokok = () => {
        return MakananPokok.map((item, id) => {
            return (
                <View key={id} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => onCheckedMakananPokok(item.id)}>
                        <Text>{id}</Text>
                        <CheckBox

                            value={item.checkedMakananPokok}
                            onValueChange={() => onCheckedMakananPokok(item.id)}
                            style={{ alignSelf: 'center' }}
                        />

                    </TouchableOpacity>
                    <View style={{ flex: 1, }}>
                        <Text style={styles.itemStyle}>{item.nama}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 27 }}>
                        <Text style={styles.itemStyle}>{item.kalori}</Text>
                    </View>
                </View>

            )
        })
    }

    // untuk menampilkan data laukpauk di modal
    const renderDataLaukPauk = () => {
        return laukPauk.map((item, id) => {
            return (
                <View key={id} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => onCheckedLaukPauk(item.id)}>
                        <Text>{id}</Text>
                        <CheckBox
                            value={item.checkedLaukPauk}
                            onValueChange={() => onCheckedLaukPauk(item.id)}
                            style={{ alignSelf: 'center' }}
                        />

                    </TouchableOpacity>
                    <View style={{ flex: 1, }}>
                        <Text style={styles.itemStyle}>{item.nama}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 27 }}>
                        <Text style={styles.itemStyle}>{item.kalori}</Text>
                    </View>
                </View>

            )
        })
    }

    // untuk menampilkan data laukpauk di modal
    const renderDataSayur = () => {
        return sayur.map((item, nama) => {
            return (

                <View key={nama} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => onCheckedSayur(item.id)}>
                        <Text>{nama}</Text>
                        <CheckBox

                            value={item.checkedSayur}
                            onValueChange={() => onCheckedSayur(item.id)}
                            style={{ alignSelf: 'center' }}
                        />

                    </TouchableOpacity>
                    <View style={{ flex: 1, }}>
                        <Text style={styles.itemStyle}>{item.nama}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 27 }}>
                        <Text style={styles.itemStyle}>{item.kalori}</Text>
                    </View>
                </View>

            )
        })
    }

    // untuk menampilkan data buah-buahan di modal
    const renderDataBuah = () => {
        return buahBuahan.map((item, id) => {
            return (
                <View key={id} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => onCheckedBuah(item.id)}>
                        <Text>{id}</Text>
                        <CheckBox
                            value={item.checkedBuah}
                            onValueChange={() => onCheckedBuah(item.id)}
                            style={{ alignSelf: 'center' }}
                        />

                    </TouchableOpacity>
                    <View style={{ flex: 1, }}>
                        <Text style={styles.itemStyle}>{item.nama}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 27 }}>
                        <Text style={styles.itemStyle}>{item.kalori}</Text>
                    </View>
                </View>

            )
        })
    }

    //OnCheck untuk Makanan Pokok
    const onCheckedMakananPokok = (id) => {
        const data1 = [...MakananPokok]
        const index = data1.findIndex(x => x.id === id);
        data1[index].checkedMakananPokok = !data1[index].checkedMakananPokok
        setMakananPokok(data1)
    }

    //OnCheck untuk LaukPauk
    const onCheckedLaukPauk = (id) => {
        const data2 = [...laukPauk]
        const index = data2.findIndex(x => x.id === id);
        data2[index].checkedLaukPauk = !data2[index].checkedLaukPauk
        setLaukPauk(data2)
    }

    //OnCheck untuk Sayur
    const onCheckedSayur = (id) => {
        const data3 = [...sayur]
        const index = data3.findIndex(x => x.id === id);
        data3[index].checkedSayur = !data3[index].checkedSayur
        setSayur(data3)
    }

    //OnCheck untuk Buah
    const onCheckedBuah = (id) => {
        const data4 = [...buahBuahan]
        const index = data4.findIndex(x => x.id === id);
        data4[index].checkedBuah = !data4[index].checkedBuah
        setBuahBuahan(data4)
    }


    const getSelectedData = (hasilKalori, sum) => {
        var namaMakananPokok = MakananPokok.map((t) => t.nama)
        var checksMakananPokok = MakananPokok.map((t) => t.checkedMakananPokok)
        var caloriMakananPokok = MakananPokok.map((t) => t.kalori)

        var namaLaukpauk = laukPauk.map((t) => t.nama)
        var checksLaukpauk = laukPauk.map((t) => t.checkedLaukPauk)
        var caloriLaukpauk = laukPauk.map((t) => t.kalori)

        var namaSayur = sayur.map((t) => t.nama)
        var checksSayur = sayur.map((t) => t.checkedSayur)
        var caloriSayur = sayur.map((t) => t.kalori)

        var namaBuah = buahBuahan.map((t) => t.nama)
        var checksBuah = buahBuahan.map((t) => t.checkedBuah)
        var caloriBuah = buahBuahan.map((t) => t.kalori)

        const SelectedCalori = []
        const SelectedMakanan = []
        for (let i = 0; i < checksSayur.length; i++) {
            if (checksSayur[i] == true) {
                SelectedMakanan.push(namaSayur[i])
                SelectedCalori.push(caloriSayur[i])
                sum = SelectedCalori.reduce((a, c) => {
                    return a + c
                }, 0);

            }
        }
        for (let i = 0; i < checksMakananPokok.length; i++) {

            if (checksMakananPokok[i] == true) {
                SelectedMakanan.push(namaMakananPokok[i])
                SelectedCalori.push(caloriMakananPokok[i])
                sum = SelectedCalori.reduce((a, c) => {
                    return a + c
                }, 0);
            }
        }
        for (let i = 0; i < checksLaukpauk.length; i++) {
            if (checksLaukpauk[i] == true) {
                SelectedMakanan.push(namaLaukpauk[i])
                SelectedCalori.push(caloriLaukpauk[i])
                sum = SelectedCalori.reduce((a, c) => {
                    return a + c
                }, 0);
            }

        }
        for (let i = 0; i < checksBuah.length; i++) {
            if (checksBuah[i] == true) {
                SelectedMakanan.push(namaBuah[i])
                SelectedCalori.push(caloriBuah[i])
                sum = SelectedCalori.reduce((a, c) => {
                    return a + c
                }, 0);
            }
        }
        if (sum == null) {
            sum = 0;
        }
        hasilKalori = sum
        console.log(SelectedCalori)
        setSelectedDataFood(SelectedMakanan)
        setSelectedDataCalories(SelectedCalori)
        setTotalCalories(hasilKalori)
        setShowModal(false)
    }

    return (

        <SafeAreaView>
            {/* Makan Siang */}
            <View style={styles.makananContainer}>
                <TouchableOpacity
                    style={styles.buttonIconStyle}
                    onPress={ShowModalMakanSiang}
                >
                    <IconPlus
                        name='circle-with-plus'
                        size={28}
                        style={styles.plusIconStyle}
                    />
                </TouchableOpacity>
                <Text style={styles.textMakananStyle}>Makan Siang</Text>

                <TouchableOpacity
                    style={{ flex: 1, alignSelf: 'center' }}
                    onPress={() => { hideShowDaftarMakanan() }}
                >
                    {dropdownArrow()}
                </TouchableOpacity>

            </View>
            {/* Menampilkan daftar menu di makan siang */}
            <View>
                {
                    show.showDataMakanSiang ? (
                        renderMakanSiang()
                    ) : null

                }
            </View>
            {/* Daftar Makanan Modal */}
            <ModalMakanSiang
                animationIn='fadeInUp'
                animationInTiming={1500}
                animationOut='fadeOutDown'
                animationOutTiming={1000}
                isVisible={showModal}
                hasBackdrop={true}
                onBackdropPress={HideModalMakanSiang}
                style={styles.modalContainer}
            >
                <SafeAreaView>
                    <ScrollView>
                        <View style={styles.subModalContainer}>
                            <View style={styles.subContainerMakananPokokStyle}>
                                <TouchableOpacity onPress={HideModalMakanSiang} >
                                    <BackArrow
                                        name='arrow-back-ios'
                                        size={25}
                                        style={{ marginLeft: 5, color: '#9B51E0' }}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.subJudulMakananPokokStyle}>Makanan Pokok</Text>
                            </View>
                            <View style={styles.subJudul2Container}>
                                <Text style={styles.textNamaMakananStyle}>Nama Makanan</Text>
                                <Text style={styles.textKaloriStyle}>Kalori</Text>
                            </View>
                            <View>
                                {renderDataMakananPokok()}
                            </View>
                            <View>
                                <Text style={styles.subJudulMakananPokokStyle}>Lauk-Pauk</Text>
                                <View style={styles.subJudul2Container}>
                                    <Text style={styles.textNamaMakananStyle}>Nama Makanan</Text>
                                    <Text style={styles.textKaloriStyle}>Kalori</Text>
                                </View>
                            </View>
                            {renderDataLaukPauk()}

                            <View>
                                <Text style={styles.subJudulMakananPokokStyle}>Sayur-sayuran</Text>
                                <View style={styles.subJudul2Container}>
                                    <Text style={styles.textNamaMakananStyle}>Nama Makanan</Text>
                                    <Text style={styles.textKaloriStyle}>Kalori</Text>
                                </View>
                            </View>
                            {renderDataSayur()}

                            <View>
                                <Text style={styles.subJudulMakananPokokStyle}>Buah-buahan</Text>
                                <View style={styles.subJudul2Container}>
                                    <Text style={styles.textNamaMakananStyle}>Nama Makanan</Text>
                                    <Text style={styles.textKaloriStyle}>Kalori</Text>
                                </View>
                            </View>
                            {renderDataBuah()}

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    onPress={() => getSelectedData()}
                                    style={styles.buttonStyle}
                                >
                                    <Text style={styles.buttonText}>Selesai</Text>
                                    <ButtonIconSelesai
                                        name="checkmark-done"
                                        size={22}
                                        style={styles.buttonSelesaiStyle}
                                    />
                                </TouchableOpacity>

                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ModalMakanSiang>
        </SafeAreaView >
    )
}


export default MakanSiang;

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#757575',
        borderRadius: 10,

    },

    subModalContainer: {
        marginHorizontal: 15,
    },


    makananContainer: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#757575',
        flexDirection: 'row',
    },


    textMakananStyle: {
        fontFamily: 'Poppins-Bold',
        paddingLeft: 10,
        paddingBottom: 6,
        paddingTop: 8,
        fontSize: 14,
        letterSpacing: 0.8,
    },

    subContainerMakananPokokStyle: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    subJudulMakananPokokStyle: {
        flex: 1,
        textAlign: 'center',
        marginTop: 5,
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        letterSpacing: 0.8,
        color: '#9B51E0'
    },

    itemStyle: {
        paddingTop: 3.5,
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
    },

    subJudul2Container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingTop: 5,
        marginVertical: 5,

    },

    textNamaMakananStyle: {
        flex: 1,
        marginLeft: 5,
        fontFamily: 'Poppins-Bold',
        letterSpacing: 0.8,
    },

    textKaloriStyle: {
        flex: 1,
        marginRight: 15,
        textAlign: 'right',
        fontFamily: 'Poppins-Bold',
        letterSpacing: 0.8,
    },

    buttonIconStyle: {
        alignSelf: 'center'
    },

    plusIconStyle: {
        color: '#9B51E0',
        marginLeft: 10
    },

    textStyle: {
        fontSize: 18,
        letterSpacing: 1,
        marginTop: 20,
    },

    buttonContainer: {
        marginTop: 35,
        marginBottom: 25,
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

    buttonText: {
        paddingVertical: 6,
        paddingLeft: 8,
        color: '#9B51E0',
        fontSize: 15,
        fontWeight: '600',
        letterSpacing: 0.5,
    },

    buttonSelesaiStyle: {
        paddingRight: 5,
        alignSelf: 'center',
        color: '#9B51E0'
    },

    textStyle2: {
        fontSize: 18,
        color: '#2250F2',
        textDecorationLine: 'underline',
        textDecorationColor: '#000',
    },

    radioFormContainer: {
        marginTop: 11,
    },

    radioLabelStyle: {
        fontSize: 16,
        letterSpacing: 0.3,
        marginRight: 35
    },
})