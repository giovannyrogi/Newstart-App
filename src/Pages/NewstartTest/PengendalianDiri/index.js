import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import CheckBox from '@react-native-community/checkbox';
import { ButtonNext } from '../../../Components';
import { useDispatch, useSelector } from 'react-redux';





const PengendalianDiri = ({ navigation }) => {

    const dispatch = useDispatch()
    const hasilPengendalianDiri = useSelector(state => state.resultPengendalianDiri)
    const [optPengendalianDiri, setOptPengendalianDiri] = useState([
        {
            id: 1,
            nama: 'None',
            value: 100
        },
        {
            id: 2,
            nama: 'Kafein/Alkohol',
            value: 0
        },
        {
            id: 3,
            nama: 'Perokok',
            value: 0
        },
        {
            id: 4,
            nama: 'Vape/Rokok Elektrik',
            value: 0
        },
    ])

    const renderData = () => {
        return optPengendalianDiri.map((item, id) => {
            return (
                <View key={id} style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { onChecked(item.id) }}>
                        <Text style={{ marginTop: 5, textAlign: 'center' }}>{item.nama}</Text>
                        <CheckBox
                            value={item.checked}
                            onValueChange={() => { onChecked(item.id) }}
                            style={{ alignSelf: 'center', }}
                        />
                    </TouchableOpacity>
                </View>

            )
        })
    }

    const onChecked = (id) => {
        const data = [...optPengendalianDiri]
        const index = data.findIndex(x => x.id === id);
        data[index].checked = !data[index].checked
        setOptPengendalianDiri(data);

    }

    const getSelectedData = (sum, hasil) => {
        var nama = optPengendalianDiri.map((t) => t.nama)
        var checks = optPengendalianDiri.map((t) => t.checked)
        var values = optPengendalianDiri.map((t) => t.value)
        const selected = []

        for (let i = 0; i < checks.length; i++) {
            if (checks[i] == true) {
                selected.push(values[i])
                sum = selected.reduce((a, c) => {
                    return a + c
                }, 0);

            }
            if (sum == null) {
                sum = 0
            }

        }
        dispatch({ type: 'RESULT_PENGENDALIAN_DIRI', value: sum });
        navigation.navigate('Udara Segar');
    }


    return (
        <View style={styles.container}>
            {/* <Text>Nilai Global : {hasilPengendalianDiri}</Text> */}
            <View style={styles.subContainer}>
                <Text style={styles.textStyle}>Silahkan dicentang jika Anda mengkonsumsi hal-hal berikut ini.</Text>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    {renderData()}
                </View>
            </View>

            <ButtonNext
                title="Berikutnya"
                onPress={() => getSelectedData()}
                name="navigate-next"
                size={22}
            />
        </View>
    )
}

export default PengendalianDiri

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 32,
        marginHorizontal: 25,
    },

    subContainer: {
        borderTopWidth: 0.4,
        borderBottomWidth: 0.4,
        borderColor: '#757575',
        paddingVertical: 10,
    },

    radioFormContainer: {
        marginTop: 11,
    },

    radioLabelStyle: {
        fontSize: 15,
        letterSpacing: 0.3,
        marginRight: 35,
    },

    textStyle: {
        fontSize: 18,
        letterSpacing: 0.1,
        textAlign: 'justify',
    },
})