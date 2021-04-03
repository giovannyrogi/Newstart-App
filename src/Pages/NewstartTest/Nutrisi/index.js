import React, { Component } from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import ModalIsiPiringku from 'react-native-modal';
import ModalMakanan from 'react-native-modal';
import RadioForm from 'react-native-simple-radio-button';
import dataMakanan from './dataMakanan'

import { ButtonNext, IsiPiringkuContent } from '../../../Components/';
import IconPlus from 'react-native-vector-icons/Entypo';

class Nutrisi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalIsiPiringku: false,
            isModalMakanan: false,
            data: dataMakanan,
            selectedData: []
        };
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

    onChecked(id) {
        const data = this.state.data
        const index = data.findIndex(x => x.id === id);
        data[index].checked = !data[index].checked
        this.setState(data)
    }



    renderData() {
        return this.state.data.map((item, nama) => {
            return (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity key={nama} onPress={() => { this.onChecked(item.id) }}>
                        <CheckBox
                            value={item.checked}
                            onValueChange={() => { this.onChecked(item.id) }}
                            style={{ alignSelf: 'center' }}
                        />

                    </TouchableOpacity>
                    <View style={{ flex: 1, }}>
                        <Text >{item.nama}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 27 }}>
                        <Text>{item.kalori}</Text>
                    </View>
                </View>

            )
        })
    }

    getSelectedData() {
        var nama = this.state.data.map((t) => t.nama)
        var checks = this.state.data.map((t) => t.checked)
        var values = this.state.data.map((t) => t.value)
        let Selected = []
        for (let i = 0; i < checks.length; i++) {
            if (checks[i] == true) {
                Selected.push(nama[i])
            }
        }
        alert(Selected)
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
                            size={25}
                            style={styles.plusIconStyle}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textMakananStyle}>Makan Pagi</Text>

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
                                <Text style={styles.judulStyle}>Daftar Makanan</Text>
                                <Text>Makanan Pokok</Text>
                                <View>
                                    {this.renderData()}
                                </View>


                                <View style={styles.buttonContainer}>

                                    <TouchableOpacity
                                        onPress={this.showOrHideshowModalMakanan}
                                        style={styles.buttonBackStyle}
                                    >
                                        <Text style={styles.buttonTextStyle}>Kembali</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.buttonContainer}>

                                    <TouchableOpacity
                                        onPress={() => { this.getSelectedData() }}
                                        style={styles.buttonBackStyle}
                                    >
                                        <Text style={styles.buttonTextStyle}>Selesai</Text>
                                    </TouchableOpacity>

                                </View>
                            </ScrollView>
                        </SafeAreaView>
                    </ModalMakanan>
                </View>
                <View style={{ backgroundColor: '#DEDDDD' }}>
                    <Text>  </Text>
                    {/* <View style={{ flexDirection: 'row', marginBottom: 5, marginTop: 8 }}>
                    <View style={{ flex: 1, marginLeft: 20 }}>
                        <Text>Nama Makanan</Text>

                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={{ marginRight: 20 }}>Kalori</Text>
                    </View>
                </View>

                {renderData()} */}
                </View>

                {/* Makan Siang */}
                <View style={styles.makananContainer2}>
                    <TouchableOpacity style={styles.buttonIconStyle}>
                        <IconPlus
                            name='circle-with-plus'
                            size={25}
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
                            size={25}
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

// const Nutrisi = ({ navigation }) => {

//     const [isModalIsiPiringku, setModalIsiPiringku] = useState(false);
//     const [isModalMakanan, setModalMakanan] = useState(false);
//     const [data, setData] = useState(dataMakanan);

// var optNutrisi = [
//     { label: "Ya", value: 50 },
//     { label: "Tidak", value: 0 },
// ];

// const showModalIsiPiringku = () => {
//     setModalIsiPiringku(true);
// };

// const hideModalIsiPiringku = () => {
//     setModalIsiPiringku(false);
// };
// const showModalMakanan = () => {
//     setModalMakanan(true);
// };

// const hideModalMakanan = () => {
//     setModalMakanan(false);
// };

//     const renderData = () => {
//         return data.map((item, nama) => {
//             return (
//                 // <View style={{ flexDirection: 'row' }}>
//                 // <View style={{ flex: 1, }}>
//                 //     <Text style={{ marginLeft: 20 }}>{item.nama}</Text>
//                 // </View>
//                 // <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 27 }}>
//                 //     <Text>{item.kalori}</Text>
//                 // </View>
//                 // </View>

// <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//     <TouchableOpacity key={nama} onPress={() => { onChecked(item.id) }}>
//         <CheckBox
//             value={item.checked}
//             onValueChange={() => { onChecked(item.id) }}
//             style={{ alignSelf: 'center' }}
//         />

//     </TouchableOpacity>
//     <View style={{ flex: 1, }}>
//         <Text >{item.nama}</Text>
//     </View>
//     <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 27 }}>
//         <Text>{item.kalori}</Text>
//     </View>
// </View>

//             )
//         })
//     }

//     const onChecked = (id) => {
//         const data = data
//         const index = data.findIndex(x => x.id === id)
//         data[index].checked = !data[index].checked
//         setState(data)
//     }

//     // const getSelectedData = () => {
//     //     var nama = data.map((t) => t.nama)
//     //     let Selected = []
//     //     for (let i = 0; i < nama.length; i++) {
//     //         Selected.push(nama[i])
//     //     }
//     //     alert(Selected)
//     // }

//     return (

// <SafeAreaView style={styles.maincontainer}>
//     <View style={styles.textNoteContainer}>
//         <Text style={{ fontSize: 15 }}>Silahkan tekan</Text>
//         <IconPlus
//             name='circle-with-plus'
//             size={25}
//             style={styles.plusIconStyle}
//         />
//         <Text style={{ fontSize: 15, marginLeft: 10 }}>untuk menambahkan makanan</Text>

//     </View>

//     {/* Makan Pagi */}
//     <View style={styles.makananContainer}>
//         <TouchableOpacity
//             style={styles.buttonIconStyle}
//             onPress={showModalMakanan}
//         // onPress={() => { getSelectedData() }}
//         >
//             <IconPlus
//                 name='circle-with-plus'
//                 size={25}
//                 style={styles.plusIconStyle}
//             />
//         </TouchableOpacity>
//         <Text style={styles.textMakananStyle}>Makan Pagi</Text>

//         {/* Daftar Makanan */}
//         <ModalMakanan
//             animationIn='fadeInDown'
//             animationInTiming={1000}
//             animationOut='slideOutDown'
//             animationOutTiming={1000}
//             isVisible={isModalMakanan}
//             hasBackdrop={true}
//             onBackdropPress={hideModalMakanan}
//             style={styles.modalContainer}
//         >
//             <SafeAreaView>
//                 <ScrollView>
//                     <Text style={styles.judulStyle}>Daftar Makanan</Text>
//                     <Text>Makanan Pokok</Text>
//                     <View>
//                         {renderData()}
//                     </View>
//                     <View style={styles.buttonContainer}>

//                         <TouchableOpacity
//                             onPress={hideModalMakanan}
//                             style={styles.buttonBackStyle}
//                         >
//                             <Text style={styles.buttonTextStyle}>Kembali</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </ScrollView>
//             </SafeAreaView>
//         </ModalMakanan>
//     </View>
//     <View style={{ backgroundColor: '#DEDDDD' }}>

//         {/* <View style={{ flexDirection: 'row', marginBottom: 5, marginTop: 8 }}>
//             <View style={{ flex: 1, marginLeft: 20 }}>
//                 <Text>Nama Makanan</Text>

//             </View>
//             <View style={{ flex: 1, alignItems: 'flex-end' }}>
//                 <Text style={{ marginRight: 20 }}>Kalori</Text>
//             </View>
//         </View>

//         {renderData()} */}
//     </View>

//     {/* Makan Siang */}
//     <View style={styles.makananContainer2}>
//         <TouchableOpacity style={styles.buttonIconStyle}>
//             <IconPlus
//                 name='circle-with-plus'
//                 size={25}
//                 style={styles.plusIconStyle}
//             />
//         </TouchableOpacity>
//         <Text style={styles.textMakananStyle}>Makan Siang</Text>
//     </View>

//     {/* Makan Malam */}
//     <View style={styles.makananContainer2}>
//         <TouchableOpacity style={styles.buttonIconStyle}>
//             <IconPlus
//                 name='circle-with-plus'
//                 size={25}
//                 style={styles.plusIconStyle}
//             />
//         </TouchableOpacity>
//         <Text style={styles.textMakananStyle}>Makan Malam</Text>
//     </View>


//     <Text style={styles.textStyle}>
//         Apakah makanan yang Anda konsumsi sudah sesuai dengan <Text></Text>
//         <Text
//             onPress={showModalIsiPiringku}
//             style={styles.textStyle2}>Isi Piringku?
//         </Text>
//     </Text>


//     <ModalIsiPiringku
//         animationIn='fadeInDown'
//         animationInTiming={1000}
//         animationOut='slideOutDown'
//         animationOutTiming={1000}
//         isVisible={isModalIsiPiringku}
//         hasBackdrop={true}
//         onBackdropPress={hideModalIsiPiringku}
//         style={styles.modalContainer}
//     >
//         <SafeAreaView>
//             <ScrollView>
//                 <Text style={styles.judulStyle}>Isi Piringku</Text>
//                 <IsiPiringkuContent />
//                 <View style={styles.buttonContainer}>

//                     <TouchableOpacity
//                         onPress={hideModalIsiPiringku}
//                         style={styles.buttonBackStyle}
//                     >
//                         <Text style={styles.buttonTextStyle}>Kembali</Text>
//                     </TouchableOpacity>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     </ModalIsiPiringku>

//     <View style={styles.radioFormContainer}>
//         <RadioForm
//             radio_props={optNutrisi}
//             initial={-1}
//             onPress={(value) => alert('Nilai ' + value)}
//             formHorizontal={true}
//             selectedButtonColor={'#9B51E0'}
//             selectedLabelColor={'#9B51E0'}
//             buttonColor={'#757575'}
//             buttonSize={15}
//             labelStyle={styles.radioLabelStyle}
//         />
//     </View>

//     <ButtonNext
//         title="Berikutnya"
//         onPress={() => navigation.navigate('Olahraga')}
//         name="navigate-next"
//         size={22}

//     />
// </SafeAreaView >
//     )
// }

// export default Nutrisi;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        marginHorizontal: 25,
        marginTop: 32,
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


    modalContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#757575',
        borderRadius: 10,
    },

    textMakananStyle: {
        paddingLeft: 10,
        paddingVertical: 6,
        fontSize: 16,
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


    textStyle2: {
        fontSize: 18,
        color: '#2250F2',
        textDecorationLine: 'underline',
        textDecorationColor: '#000',
    },

    judulStyle: {
        fontSize: 25,
        textAlign: 'center',
        color: 'dodgerblue',
        marginVertical: 10
    },

    buttonContainer: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#9B51E0',
        marginHorizontal: 135,
        marginVertical: 25
    },

    buttonBackStyle: {
        paddingHorizontal: 5,
        paddingVertical: 2
    },

    buttonTextStyle: {
        color: '#9B51E0',
        fontSize: 15,
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