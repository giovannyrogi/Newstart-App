import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import firebase from '../../Config/Firebase';
import { Picker } from '@react-native-picker/picker';
import { ButtonSelesai, Input } from '../../Components';
import GenderIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CalenderIcon from 'react-native-vector-icons/Octicons';
import TinggiBadanIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import BeratBadanIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';


const DataProfil = ({ navigation }) => {

    const userId = useSelector((state) => state.uid);

    // const [fixedWater, setFixedWater] = useState()
    // const [fixedCalori, setFixedCalori] = useState()
    const [form, setForm] = useState({
        gender: 'Laki-laki',
        age: '',
        weight: '',
        height: ''
    });

    const onChangeText = (value, input) => {
        setForm({
            ...form,
            [input]: value,
        });
    };

    const setFixed = (targetCalori, targetWater, userBMI, fixedUserBMI, fixedWater, fixedCalori) => {
        fixedCalori = targetCalori.toFixed();
        fixedWater = targetWater.toFixed(1);
        fixedUserBMI = userBMI.toFixed(1);
        // console.log('newCalori : ' + fixedCalori)
        // console.log('newWater : ' + fixedWater)
        // console.log('newUserBMI : ' + fixedUserBMI)

        if (form.gender != '' && form.age != '' && form.weight != '' && form.height != '') {
            firebase.database().ref('users/' + userId + '/userInfo/').update({
                gender: form.gender,
                tinggi: form.height,
                berat: form.weight,
                umur: form.age,
            })
            firebase.database().ref('users/' + userId + '/userResult/').update({
                resultBMI: fixedUserBMI,
                resultWater: fixedWater,
                resultKalori: fixedCalori

            });
            alert('Pendaftaran berhasil, Silahkan Login.');
            navigation.replace('Login');
        }
    }

    const Selesai = (userBMI, targetWater, targetCalori) => {
        let convertTinggi = form.height / 100;
        userBMI = form.weight / (convertTinggi * convertTinggi);

        if (form.gender == 'Laki-laki') {
            targetWater = (2447 - (0.09145 * form.age) + (0.1074 * form.height) + (0.3362 * form.weight)) / 1000;
            targetCalori = 66 + (13.7 * form.weight) + (5 * form.height) - (6.8 * form.age);
        }
        if (form.gender == 'Perempuan') {
            targetWater = -2097 + (0.1069 * form.height) + (0.2466 * form.weight);
            targetCalori = 655 + (9.6 * form.weight) + (1.8 * form.height)
        }
        { setFixed(targetCalori, targetWater, userBMI) }

    }

    return (
        <SafeAreaView style={styles.container1} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.textStyle1}>Lengkapi data Anda.</Text>
                <Text style={styles.textStyle2}>Silahkan isi data diri Anda pada tabel dibawah ini.</Text>

                {/* Dropdown jenis kelamin */}
                {/* <Text style={styles.textStyle3} > Hasil Wanita : {resultWater}</Text>
                <Text style={styles.textStyle3} > Hasil Pria : {resultWater}</Text> */}
                <Text style={styles.textStyle3} > Jenis kelamin</Text>
                <View style={styles.container2}>
                    <GenderIcon
                        name="gender-male-female"
                        size={25}
                        style={styles.IconStyle}
                    />
                    <Picker
                        onValueChange={(value) => onChangeText(value, 'gender')}
                        selectedValue={form.gender}
                        style={styles.pickerContainer}
                    >
                        <Picker.Item label="Laki-laki" value="Laki-laki" />
                        <Picker.Item label="Perempuan" value="Perempuan" />
                    </Picker>
                </View >

                {/* DatePicker Tanggal Lahir */}
                {/* <Text style={styles.textStyle3}>Tanggal Lahir</Text>
                <View style={styles.container2}>
                    <CalenderIcon
                        name="calendar"
                        size={25}
                        style={styles.IconStyle}
                    />
                    <DatePickerTTL
                        defaultDate="1994-02-21"
                    />
                </View> */}

                {/* TextInput Umur*/}
                <Text style={styles.textStyle3}>Umur</Text>
                <View style={styles.container2}>
                    <CalenderIcon
                        name="calendar"
                        size={25}
                        style={styles.IconStyle}
                    />
                    <Input
                        style={styles.pickerContainer}
                        placeholder="Masukkan disini . . ."
                        value={form.age}
                        onChangeText={(value) => onChangeText(value, 'age')}
                        keyboardType="numeric"
                    />
                </View>

                {/* TextInput tinggi badan */}
                <Text style={styles.textStyle3}>Tinggi Badan</Text>
                <View style={styles.container2}>
                    <TinggiBadanIcon
                        name="human-male-height"
                        size={26}
                        style={styles.IconStyle}

                    />
                    <Input
                        style={styles.pickerContainer}
                        value={form.height}
                        placeholder="SATUAN CM"
                        onChangeText={(value) => onChangeText(value, 'height')}
                        keyboardType="numeric"
                    />

                </View>

                {/* TextInput berat badan */}
                <Text style={styles.textStyle3}>Berat Badan</Text>
                <View style={styles.container2}>
                    <BeratBadanIcon
                        name="weight-kilogram"
                        size={29}
                        style={styles.IconStyle}
                    />
                    <TextInput
                        style={styles.pickerContainer}
                        value={form.weight}
                        placeholder="SATUAN KG"
                        onChangeText={(value) => onChangeText(value, 'weight')}
                        keyboardType="numeric"
                    />
                </View>

                {/* Button selesai */}
                <ButtonSelesai
                    title="Selesai"
                    onPress={Selesai}
                    name="checkmark-done"
                    size={22}
                />
            </ScrollView>
        </SafeAreaView >
    )
}

export default DataProfil


// class DataProfil extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             gender: 'Laki-laki',
//             tinggi: '',
//             berat: '',
//             date: '',
//             umur: '',

//         };

//     }

//     render() {

// const Selesai = () => {
//     let convertTinggi = this.state.tinggi / 100
//     let hasilBMI = this.state.berat / (convertTinggi * convertTinggi)
//     const userId = this.props.route.params.uid;
//     firebase.database().ref('users/' + userId + '/userInfo/').update({
//         gender: this.state.gender,
//         tinggi: this.state.tinggi,
//         berat: this.state.berat,
//         umur: this.state.umur,
//     });
//     firebase.database().ref('users/' + userId + '/userResult/BMI/').update({
//         hasilBMI: hasilBMI,
//     });
//     alert('Pendaftaran berhasil, Silahkan Login.');
//     this.props.navigation.replace('Login');

// }

//         return (
// <SafeAreaView style={styles.container1} >
//     <ScrollView>
//         <Text style={styles.textStyle1}>Lengkapi data Anda.</Text>
//         <Text style={styles.textStyle2}>Silahkan isi data diri Anda pada tabel dibawah ini.</Text>

//         {/* Dropdown jenis kelamin */}
//         <Text style={styles.textStyle3} > Jenis kelamin</Text>
//         <View style={styles.container2}>
//             <GenderIcon
//                 name="gender-male-female"
//                 size={25}
//                 style={styles.IconStyle}
//             />
//             <Picker
//                 onValueChange={(value) => this.setState({ gender: value })}
//                 selectedValue={this.state.gender}
//                 style={styles.pickerContainer}
//             >
//                 <Picker.Item label="Laki-laki" value="Laki-laki" />
//                 <Picker.Item label="Perempuan" value="perempuan" />
//             </Picker>
//         </View >

//         {/* DatePicker Tanggal Lahir */}
//         {/* <Text style={styles.textStyle3}>Tanggal Lahir</Text>
//     <View style={styles.container2}>
//         <CalenderIcon
//             name="calendar"
//             size={25}
//             style={styles.IconStyle}
//         />
//         <DatePickerTTL
//             defaultDate="1994-02-21"
//         />
//     </View> */}

//         {/* TextInput Umur*/}
//         <Text style={styles.textStyle3}>Umur</Text>
//         <View style={styles.container2}>
//             <CalenderIcon
//                 name="calendar"
//                 size={25}
//                 style={styles.IconStyle}
//             />
//             <TextInput
//                 style={styles.pickerContainer}
//                 value={this.state.umur}
//                 placeholder="Umur Anda. . . "
//                 onChangeText={(value) => this.setState({ umur: value })}
//                 keyboardType="numeric"
//             />
//         </View>

//         {/* TextInput tinggi badan */}
//         <Text style={styles.textStyle3}>Tinggi Badan</Text>
//         <View style={styles.container2}>
//             <TinggiBadanIcon
//                 name="human-male-height"
//                 size={26}
//                 style={styles.IconStyle}

//             />
//             <TextInput
//                 style={styles.pickerContainer}
//                 value={this.state.tinggi}
//                 placeholder="SATUAN CM"
//                 onChangeText={(value) => this.setState({ tinggi: value })}
//                 keyboardType="numeric"
//             />

//         </View>
//         {/* TextInput berat badan */}
//         <Text style={styles.textStyle3}>Berat Badan</Text>
//         <View style={styles.container2}>
//             <BeratBadanIcon
//                 name="balance-scale"
//                 size={25}
//                 style={styles.IconStyle}
//             />
//             <TextInput
//                 style={styles.pickerContainer}
//                 value={this.state.berat}
//                 placeholder="SATUAN KG"
//                 onChangeText={(value) => this.setState({ berat: value })}
//                 keyboardType="numeric"
//             />
//         </View>

//         {/* Button selesai */}
//         <ButtonSelesai
//             title="Selesai"
//             onPress={Selesai}
//             name="checkmark-done"
//             size={22}
//         />
//     </ScrollView>
// </SafeAreaView >
//         );
//     }
// }

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        marginHorizontal: 27,
    },
    container2: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#8F92A1',
        marginRight: 140,
    },

    textStyle1: {
        marginTop: 35,
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 0.5,
        color: '#171717'

    },

    textStyle2: {
        fontWeight: '600',
        color: '#000',
        fontSize: 15,
    },

    textStyle3: {
        marginTop: 35,
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: 0.8,
        lineHeight: 16,
        color: '#9B51E0'
    },

    pickerContainer: {
        flex: 1,
        marginLeft: 15,
        marginRight: -15,
    },

    IconStyle: {
        alignSelf: 'center',

    }
})