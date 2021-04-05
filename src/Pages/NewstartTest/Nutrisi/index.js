import React, { Component } from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import ModalIsiPiringku from 'react-native-modal';
import ModalMakanan from 'react-native-modal';
import RadioForm from 'react-native-simple-radio-button';
import dataMakananPokok from './dataMakananPokok'

import firebase from '../../../Config/Firebase/';
import { ButtonNext, IsiPiringkuContent } from '../../../Components/';
import IconPlus from 'react-native-vector-icons/Entypo';
import ButtonIconSelesai from 'react-native-vector-icons/Ionicons';
import BackArrow from 'react-native-vector-icons/MaterialIcons';
import UpArrow from 'react-native-vector-icons/MaterialIcons';
import DownArrow from 'react-native-vector-icons/MaterialIcons';

class Nutrisi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalIsiPiringku: false,
            isModalMakanan: false,
            show: true,
            data: dataMakananPokok,
            selectedDataFood: [],
            selectedDataCalories: [],
            totalCalories: '',

        };
    }

    componentDidMount() {
        const readData = firebase.database().ref('SayurSayuran/')
    }

    optNutrisi = [
        { label: "Ya", value: 50 },
        { label: "Tidak", value: 0 },
    ];

    showOrHideModalIsiPiringku = () => {
        this.setState({ isModalIsiPiringku: !this.state.isModalIsiPiringku })
    };

    showOrHideshowModalMakanan = () => {
        this.setState({ isModalMakanan: !this.state.isModalMakanan })
    };

    showDaftarMakanan = () => {
        this.setState({ show: !this.state.show })
    };

    onChecked(id) {
        const data = this.state.data
        const index = data.findIndex(x => x.id === id);
        data[index].checked = !data[index].checked
        this.setState(data)
    }

    renderData() {
        return this.state.data.map((item, nama) => {
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

    getSelectedData() {
        var nama = this.state.data.map((t) => t.nama)
        var checks = this.state.data.map((t) => t.checked)
        var calori = this.state.data.map((t) => t.kalori)
        const SelectedCalori = []
        const SelectedMakanan = []
        for (let i = 0; i < checks.length; i++) {
            if (checks[i] == true) {
                SelectedCalori.push(calori[i])
                SelectedMakanan.push(nama[i])
                let sum = SelectedCalori.reduce((a, c) => {
                    return a + c
                }, 0);
                var hasilKalori = sum
            }
        }

        this.state.selectedDataFood = SelectedMakanan
        this.state.selectedDataCalories = SelectedCalori
        this.state.totalCalories = hasilKalori
        this.setState({ isModalMakanan: !this.state.isModalMakanan })

        // const userId = this.props.route.params.uid;
        // firebase.database().ref('users/userResult/Nutrition/Calori/').update({
        //     hasilKalori: hasilKalori
        // });
    }

    dropdownArrow() {
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

    renderMakanPagi() {
        if (this.state.selectedDataFood && this.state.selectedDataCalories != '') {
            return (
                <View style={{ backgroundColor: '#DEDDDD' }}>
                    <View style={{ flexDirection: 'row', marginBottom: 5, marginTop: 8 }}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Bold' }}>Nama Makanan</Text>
                            {this.state.selectedDataFood.map((item) => (
                                <Text key={item} style={{ fontSize: 15 }}>{item}</Text>
                            ))}
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={{ marginRight: 25, fontFamily: 'Poppins-Bold' }}>Kalori</Text>
                            {this.state.selectedDataCalories.map((item) => (
                                <Text key={item} style={{ marginRight: 35, fontSize: 15 }}>{item}</Text>
                            ))}
                        </View>
                    </View>
                    <View style={{ borderTopWidth: 1, flexDirection: 'row' }}>
                        <Text style={{ flex: 4, textAlign: 'right', fontFamily: 'Poppins-Bold', paddingVertical: 5 }}>Total </Text>
                        <Text style={{ flex: 1.4, textAlign: 'center', fontFamily: 'Poppins-Bold', paddingVertical: 5 }}>{this.state.totalCalories}</Text>
                    </View>
                </View>

            )
        }

    }

    render() {
        return (
            <SafeAreaView style={styles.maincontainer}>
                <View style={styles.textNoteContainer}>
                    <Text style={{ fontSize: 15 }}>Silahkan tekan</Text>
                    <IconPlus
                        name='circle-with-plus'
                        size={25}
                        style={styles.plusIconStyle}
                    />
                    <Text style={{ fontSize: 15, marginLeft: 10 }}>untuk menambahkan makanan</Text>

                </View>

                {/* Makan Pagi */}
                <View style={styles.makananContainer}>
                    <TouchableOpacity
                        style={styles.buttonIconStyle}
                        onPress={this.showOrHideshowModalMakanan}
                    >
                        <IconPlus
                            name='circle-with-plus'
                            size={28}
                            style={styles.plusIconStyle}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textMakananStyle}>Makan Pagi</Text>

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
                            this.renderMakanPagi()
                        ) : null

                    }
                </View>

                {/* Daftar Makanan Modal */}
                <ModalMakanan
                    animationIn='fadeInUp'
                    animationInTiming={1500}
                    animationOut='fadeOutDown'
                    animationOutTiming={1000}
                    isVisible={this.state.isModalMakanan}
                    hasBackdrop={true}
                    onBackdropPress={this.showOrHideshowModalMakanan}
                    style={styles.modalContainer}
                >
                    <SafeAreaView>
                        <ScrollView>
                            <View style={styles.subModalContainer}>
                                <View style={styles.subContainerMakananPokokStyle}>
                                    <TouchableOpacity onPress={this.showOrHideshowModalMakanan} >
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
                </ModalMakanan>




                {/* Makan Siang */}
                <View style={styles.makananContainer2}>
                    <TouchableOpacity style={styles.buttonIconStyle}>
                        <IconPlus
                            name='circle-with-plus'
                            size={28}
                            style={styles.plusIconStyle}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textMakananStyle}>Makan Siang</Text>
                </View>

                {/* Makan Malam */}
                <View style={styles.makananContainer2}>
                    <TouchableOpacity style={styles.buttonIconStyle}>
                        <IconPlus
                            name='circle-with-plus'
                            size={28}
                            style={styles.plusIconStyle}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textMakananStyle}>Makan Malam</Text>
                </View>


                <Text style={styles.textStyle}>
                    Apakah makanan yang Anda konsumsi sudah sesuai dengan <Text></Text>
                    <Text
                        onPress={this.showOrHideModalIsiPiringku}
                        style={styles.textStyle2}>Isi Piringku?
                    </Text>
                </Text>


                <ModalIsiPiringku
                    animationIn='fadeInUp'
                    animationInTiming={1500}
                    animationOut='fadeOutDown'
                    animationOutTiming={1000}
                    isVisible={this.state.isModalIsiPiringku}
                    hasBackdrop={true}
                    onBackdropPress={this.showOrHideModalIsiPiringku}
                    style={styles.modalContainer}
                >
                    <SafeAreaView>
                        <ScrollView>
                            <Text style={styles.judulStyle}>Isi Piringku</Text>
                            <IsiPiringkuContent />
                            <View style={styles.buttonContainer}>

                                <TouchableOpacity
                                    onPress={this.showOrHideModalIsiPiringku}
                                    style={styles.buttonBackStyle}
                                >
                                    <Text style={styles.buttonTextStyle}>Kembali</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </ModalIsiPiringku>

                <View style={styles.radioFormContainer}>
                    <RadioForm
                        radio_props={this.optNutrisi}
                        initial={-1}
                        onPress={(value) => alert('Nilai ' + value)}
                        formHorizontal={true}
                        selectedButtonColor={'#9B51E0'}
                        selectedLabelColor={'#9B51E0'}
                        buttonColor={'#757575'}
                        buttonSize={15}
                        labelStyle={styles.radioLabelStyle}
                    />
                </View>

                <ButtonNext
                    title="Berikutnya"
                    onPress={() => this.props.navigation.navigate('Olahraga')}
                    name="navigate-next"
                    size={22}

                />
            </SafeAreaView >
        );
    }
}

export default Nutrisi;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        marginHorizontal: 25,
        marginTop: 32,
    },

    modalContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#757575',
        borderRadius: 10,

    },

    subModalContainer: {
        marginHorizontal: 10,
    },

    textNoteContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    makananContainer: {
        marginTop: 15,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#757575',
        flexDirection: 'row',
    },

    makananContainer2: {
        borderBottomWidth: 1,
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

    radioFormContainer: {
        marginTop: 11,
    },

    radioLabelStyle: {
        fontSize: 16,
        letterSpacing: 0.3,
        marginRight: 35
    },
})