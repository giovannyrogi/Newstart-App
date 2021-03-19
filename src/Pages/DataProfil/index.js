import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import GenderIcon from 'react-native-vector-icons/MaterialCommunityIcons';

class DataProfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: ''
        };
    }

    render() {

        return (
            <SafeAreaView style={styles.container1}>
                <Text style={styles.textStyle1}>Lengkapi data Anda.</Text>
                <Text style={styles.textStyle2}>Silahkan isi data diri Anda pada tabel dibawah ini.</Text>

                {/* Dropdown jenis kelamin */}
                <Text style={styles.textStyle3}>Jenis kelamin</Text>
                <View style={styles.container2}>
                    <GenderIcon
                        name="gender-male-female"
                        size={25}
                        style={styles.genderIconStyle}
                    />
                    <Picker
                        onValueChange={(value) => this.setState({ gender: value })}
                        selectedValue={this.state.gender}
                        style={styles.pickerContainer}
                    >
                        <Picker.Item label="Laki-laki" value="Laki-laki" />
                        <Picker.Item label="Perempuan" value="perempuan" />
                    </Picker>
                </View>
            </SafeAreaView>
        );
    }
}

export default DataProfil;

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        marginHorizontal: 27,
    },
    container2: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#8F92A1',
        marginRight: 150,
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

        // backgroundColor: 'green'
    },

    genderIconStyle: {
        alignSelf: 'center',

    }
})