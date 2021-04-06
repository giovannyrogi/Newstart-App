import React, { Component } from 'react'

import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import ModalMakanPagi from 'react-native-modal';
import ButtonIconSelesai from 'react-native-vector-icons/Ionicons';
import IconPlus from 'react-native-vector-icons/Entypo';
import BackArrow from 'react-native-vector-icons/MaterialIcons';
import UpArrow from 'react-native-vector-icons/MaterialIcons';
import DownArrow from 'react-native-vector-icons/MaterialIcons';
import dataMakananPokok from '../dataMakanan/dataMakananPokok';



class MakanPagi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalMakanMalam: false,
            show: true,
            dataMakananPokok: dataMakananPokok,
            selectedFoodMakanMalam: [],
            selectedCaloriesMakanMalam: [],
            totalCaloriesMakanMalam: '',
        };
    }

    showOrHideshowModalMakanMalam = () => {
        this.setState({ modalMakanMalam: !this.state.modalMakanMalam })
    }

    showDaftarMakanan = () => {
        this.setState({ show: !this.state.show })
    };


    dropdownArrow = () => {
        if (this.state.show == true) {
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

    renderMakanSiang = () => {
        if (this.state.selectedFoodMakanMalam && this.state.selectedCaloriesMakanMalam != '') {
            return (
                <View style={{ backgroundColor: '#DEDDDD' }}>
                    <View style={{ flexDirection: 'row', marginBottom: 5, marginTop: 8 }}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Bold' }}>Nama Makanan</Text>
                            {this.state.selectedFoodMakanMalam.map((item) => (
                                <Text key={item} style={{ fontSize: 15 }}>{item}</Text>
                            ))}
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={{ marginRight: 25, fontFamily: 'Poppins-Bold' }}>Kalori</Text>
                            {this.state.selectedCaloriesMakanMalam.map((item) => (
                                <Text key={item} style={{ marginRight: 35, fontSize: 15 }}>{item}</Text>
                            ))}
                        </View>
                    </View>
                    <View style={{ borderTopWidth: 1, flexDirection: 'row' }}>
                        <Text style={{ flex: 4, textAlign: 'right', fontFamily: 'Poppins-Bold', paddingVertical: 5 }}>Total </Text>
                        <Text style={{ flex: 1.4, textAlign: 'center', fontFamily: 'Poppins-Bold', paddingVertical: 5 }}>{this.state.totalCaloriesMakanMalam}</Text>
                    </View>
                </View>

            )
        }
    }

    onChecked = (id) => {
        const data = this.state.dataMakananPokok
        const index = data.findIndex(x => x.id === id);
        data[index].checked = !data[index].checked
        this.setState(data)
    }

    getSelectedData = () => {
        var nama = this.state.dataMakananPokok.map((t) => t.nama)
        var checks = this.state.dataMakananPokok.map((t) => t.checked)
        var calori = this.state.dataMakananPokok.map((t) => t.kalori)
        const SelectedCalori2 = []
        const SelectedMakanan2 = []
        for (let i = 0; i < checks.length; i++) {
            if (checks[i] == true) {
                SelectedCalori2.push(calori[i])
                SelectedMakanan2.push(nama[i])
                let sum = SelectedCalori2.reduce((a, c) => {
                    return a + c
                }, 0);
                var hasilKalori = sum
            }
        }

        this.state.selectedFoodMakanMalam = SelectedMakanan2
        this.state.selectedCaloriesMakanMalam = SelectedCalori2
        this.state.totalCaloriesMakanMalam = hasilKalori
        this.setState({ modalMakanMalam: !this.state.modalMakanMalam })
    }
    renderData = () => {
        return this.state.dataMakananPokok.map((item, nama) => {
            return (
                <View key={nama} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { this.onChecked(item.id) }}>
                        <CheckBox
                            value={item.checked}
                            onValueChange={() => { this.onChecked(item.id) }}
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

    render() {
        return (
            <SafeAreaView>
                {/* Makan Pagi */}
                <View style={styles.makananContainer}>
                    <TouchableOpacity
                        style={styles.buttonIconStyle}
                        onPress={this.showOrHideshowModalMakanMalam}
                    >
                        <IconPlus
                            name='circle-with-plus'
                            size={28}
                            style={styles.plusIconStyle}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textMakananStyle}>Makan Malam</Text>

                    <TouchableOpacity
                        style={{ flex: 1, alignSelf: 'center' }}
                        onPress={() => { this.showDaftarMakanan() }}
                    >
                        {this.dropdownArrow()}
                    </TouchableOpacity>

                </View>
                {/* Menampilkan daftar menu di makan pagi */}
                <View>
                    {
                        this.state.show ? (
                            this.renderMakanSiang()
                        ) : null

                    }
                </View>
                {/* Daftar Makanan Modal */}
                <ModalMakanPagi
                    animationIn='fadeInUp'
                    animationInTiming={1500}
                    animationOut='fadeOutDown'
                    animationOutTiming={1000}
                    isVisible={this.state.modalMakanMalam}
                    hasBackdrop={true}
                    onBackdropPress={this.showOrHideshowModalMakanMalam}
                    style={styles.modalContainer}
                >
                    <SafeAreaView>
                        <ScrollView>
                            <View style={styles.subModalContainer}>
                                <View style={styles.subContainerMakananPokokStyle}>
                                    <TouchableOpacity onPress={this.showOrHideshowModalMakanMalam} >
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
                                    {this.renderData()}
                                </View>
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        onPress={() => { this.getSelectedData() }}
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
                </ModalMakanPagi>



            </SafeAreaView >
        );
    }
}

export default MakanPagi;

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#757575',
        borderRadius: 10,

    },

    subModalContainer: {
        marginHorizontal: 10,
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

})